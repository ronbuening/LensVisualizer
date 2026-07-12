## Patent Reference and Design Identification

**Patent:** US 4,029,397  
**Application Number:** 452,670  
**Priority:** March 20, 1973 (Japan 48-32213)  
**Filed:** March 19, 1974  
**Granted:** June 14, 1977  
**Inventor:** Nobuo Yamashita  
**Assignee:** Olympus Optical Co., Ltd., Tokyo, Japan  
**Title:** Retrofocus-Type Wide-Angle Photographic Lens System  
**Embodiment analyzed:** Embodiment 1 (FIG. 2; aberration FIGS. 4A-6B; Claim 6)

The best-supported production match is **Embodiment 1**, not Embodiment 2. The patent does not name the commercial lens, so the identification rests on convergent evidence:

1. Olympus's OM System lens brochure specifies the Zuiko 18mm f/3.5 as **11 elements in 9 groups**, with a **floating-element design**, a **100° angle of view**, and a **0.25 m minimum focus distance**.
2. Embodiment 1 contains **11 elements in 9 air-separated components** and focuses by keeping its first two components fixed while advancing components 3-9 toward them. Claim 6 repeats that structure.
3. The patent evaluates Embodiment 1 at **f/3.5**, image height $y=118$, and half-field $\theta=50°24′$. Uniform 0.18 scaling gives a 21.24 mm image height, close to the 21.63 mm half-diagonal of the 36 × 24 mm frame.
4. Embodiment 2 contains 12 elements in 10 groups. It is an alternate example in the same patent but does not match Olympus's manufacturer-published production element/group count. The supplied evidence does not establish it as a documented production or prototype version of the commercial lens.

The prescription is uniformly scaled by **0.18**, converting the patent's nominal $f=100$ scale to the production 18 mm focal length. All radii, thicknesses, air gaps, back focus, focus travel, and modeled semi-diameters use that scale. Because the tabulated prescription computes to $f=100.181$ rather than exactly 100, its scaled paraxial EFL is **18.0326 mm**.

### Resolution of the $r_{13}$ patent conflict

The patent contains an internal sign conflict. The Embodiment 1 table in the Detailed Description on PDF page 8 prints $r_{13}=+77.10$, while the repeated Claim 6 table on PDF page 10 prints $r_{13}=-77.10$.

The negative sign is required by the rest of the patent:

- Claim 6 describes component 6, surfaces $r_{11}$-$r_{13}$, as a **cemented positive doublet**. With $r_{13}=-77.10$, its patent-scale EFL is $+106.001$; with $r_{13}=+77.10$, it becomes negative at $-206.244$.
- With $r_{13}=-77.10$, the complete lens has patent-scale EFL $+100.181$, consistent with the stated $f=100$ design.
- With $r_{13}=+77.10$, the complete system has EFL $-182.983$, contradicting the patent's stated positive photographic lens.

The data file therefore follows Claim 6 and uses $r_{13}=-77.10$.

## Optical Architecture

Embodiment 1 is an all-spherical **retrofocus**, or inverted-telephoto, wide-angle design. Its fixed front section, L1-L2, has a computed focal length of **-47.774 mm**. The floating rear section, L3-L11, has a computed focal length of **+19.405 mm**. Their separation produces a system paraxial EFL of **18.033 mm** and an infinity back focal distance of **36.500 mm**. The resulting BFD/EFL ratio is **2.024**, so the back focus is substantially longer than the focal length and the design satisfies the retrofocus criterion $\textrm{BFD}>\textrm{EFL}$.

The eleven elements form nine components:

- L1-L2: fixed negative front group, comprising a weak positive meniscus followed by a strong negative meniscus.
- L3-L4: two additional negative menisci at the front of the floating group.
- L5: a positive biconvex transition element.
- L6+L7: a cemented positive doublet, computed in situ at **+19.080 mm**.
- L8+L9: a cemented negative doublet, computed in situ at **-19.082 mm**.
- L10-L11: two positive rear menisci.

This is a distributed negative-front/positive-rear architecture rather than a simple two-block retrofocus. Alternating positive and negative components in the floating section provide additional control over field curvature, astigmatism, distortion, and chromatic balance. The nearly equal and opposite paraxial focal lengths of the two cemented doublets do not cancel as isolated thin lenses because their thicknesses, separation, and surrounding elements remain optically significant.

The patent neither tabulates nor labels an aperture stop. FIG. 2 suggests that the narrow central beam region lies near the $d_{10}$ transition between L5 and the first cemented doublet, so the data file places a modeled stop at the midpoint of that 0.82-unit patent gap. This insertion leaves all patent-tabulated powers and total track unchanged, but its axial position and the resulting pupil geometry remain inferred rather than patent data.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$nd=1.67790$, $\nu_d=55.33$. Glass: **S-LAL12 class (OHARA coordinate match)**. Standalone in-air $f=+107.8$ mm.

L1 is a weak positive front meniscus. It moderates the first refraction of the highly oblique wide-angle bundles before L2 supplies the fixed front group's dominant negative power. Its relatively high index permits the required power with moderate surface curvature at the large front aperture.

### L2 — Negative Meniscus, Convex to Object

$nd=1.78590$, $\nu_d=44.24$. Glass: **S-LAH51 class (OHARA coordinate match)**. Standalone in-air $f=-30.9$ mm.

L2 completes the fixed front group. Its rear surface is substantially stronger than its front surface, producing the principal negative action of the L1-L2 pair. The pair is net negative at **-47.774 mm**.

At $\nu_d=44.24$, this coordinate lies in dense-lanthanum-flint territory rather than crown territory. The high index limits curvature for the required negative power, while the moderate dispersion is balanced by the cemented and low-dispersion components farther back.

### L3 — Negative Meniscus, Convex to Object

$nd=1.78590$, $\nu_d=44.24$. Glass: **S-LAH51 class (OHARA coordinate match)**. Standalone in-air $f=-31.9$ mm.

L3 is the first element of the floating rear assembly. It continues the divergence established by L2 while allowing the entire L3-L11 block to change its separation from the fixed front pair. The focusing correction therefore changes the conjugate relationship of most of the image-forming system, not merely a small rear relay.

### L4 — Negative Meniscus, Convex to Object

$nd=1.78590$, $\nu_d=44.24$. Glass: **S-LAH51 class (OHARA coordinate match)**. Standalone in-air $f=-28.1$ mm.

L4 is the third consecutive S-LAH51-coordinate negative meniscus. Its position immediately before L5 provides substantial control over the negative front power distribution and over the off-axis aberrations characteristic of a 100° retrofocus lens.

### L5 — Biconvex Positive

$nd=1.56732$, $\nu_d=42.83$. Glass: **S-TIL26 (OHARA coordinate match)**. Standalone in-air $f=+46.1$ mm.

L5 reverses the preceding negative sequence and begins the principal converging section. Its lower index and flint-family dispersion differ from the three dense-lanthanum-flint menisci ahead of it. It also lies immediately before the modeled stop, so the assumed stop location makes its surfaces important to pupil and off-axis ray geometry.

### L6 + L7 — Cemented Positive Doublet D1

**L6:** $nd=1.69680$, $\nu_d=55.62$. Glass: **S-LAL14 class (OHARA coordinate match)**. Standalone in-air $f=-17.9$ mm.  
**L7:** $nd=1.59270$, $\nu_d=35.54$. Glass: **S-FTM16 class (closest current OHARA coordinate match)**. Standalone in-air $f=+10.1$ mm.

The individual values are standalone in-air focal lengths and are not the powers of the elements inside the cemented assembly. With the shared $r_{12}$ interface, the patent thicknesses, and $r_{13}=-77.10$, D1 has a computed in-situ EFL of **+19.080 mm**.

D1 pairs a negative higher-Abbe lanthanum crown member with a strong positive lower-Abbe flint member. The Abbe separation supplies chromatic leverage, while the strongly powered cemented interface contributes monochromatic correction without an intervening air-glass surface.

### L8 + L9 — Cemented Negative Doublet D2

**L8:** $nd=1.78590$, $\nu_d=44.24$. Glass: **S-LAH51 class (OHARA coordinate match)**. Standalone in-air $f=+28.2$ mm.  
**L9:** $nd=1.84666$, $\nu_d=23.88$. Glass: **SF57 (SCHOTT coordinate match)**. Standalone in-air $f=-12.7$ mm.

D2 is net negative at **-19.082 mm** in situ, agreeing with Claim 6's description of the seventh component as a cemented negative doublet. L9 uses the highest index and lowest Abbe number in the design. Its strong negative and chromatic powers oppose the positive L8 member and the positive D1 component ahead of it.

### L10 — Positive Meniscus, Concave to Object

$nd=1.61800$, $\nu_d=63.38$. Glass: **S-PHM52 class (OHARA coordinate match)**. Standalone in-air $f=+29.7$ mm.

L10 begins the final positive meniscus pair. Its phosphate-crown coordinate provides the lowest dispersion in the prescription, adding positive rear-group power without repeating L9's high chromatic power.

### L11 — Positive Meniscus, Concave to Object

$nd=1.61800$, $\nu_d=63.38$. Glass: **S-PHM52 class (OHARA coordinate match)**. Standalone in-air $f=+39.2$ mm.

L11 is the final optical element. Together with L10 it relays the image across the long back focal distance and provides the final degrees of freedom for image-side field and astigmatic correction. Both elements move with the floating rear assembly.

## Glass Identification

The patent publishes only $nd$ and $\nu_d$; it does not name glass manufacturers or catalog designations. The following names are coordinate matches to authoritative manufacturer catalogs, not proof of the original 1973 melt supplier. The current S-prefix OHARA entries are used as dispersion references; the S prefix denotes OHARA's later eco-glass line and should not be interpreted as the patent's historical material designation.

| Elements | Patent $nd$ | Patent $\nu_d$ | Adopted catalog coordinate | Catalog $nd$ / $\nu_d$ | $|\Delta \nu_d|$ | Confidence |
|---|---:|---:|---|---:|---:|---|
| L1 | 1.67790 | 55.33 | S-LAL12 (OHARA) | 1.67790 / 55.34 | 0.01 | Exact index; near-exact Abbe |
| L2, L3, L4, L8 | 1.78590 | 44.24 | S-LAH51 (OHARA) | 1.78590 / 44.20 | 0.04 | Exact index; near-exact Abbe |
| L5 | 1.56732 | 42.83 | S-TIL26 (OHARA) | 1.56732 / 42.82 | 0.01 | Exact index; near-exact Abbe |
| L6 | 1.69680 | 55.62 | S-LAL14 (OHARA) | 1.69680 / 55.53 | 0.09 | Exact index; close Abbe |
| L7 | 1.59270 | 35.54 | S-FTM16 class (OHARA) | 1.59270 / 35.31 | 0.23 | Exact index; closest current match used |
| L9 | 1.84666 | 23.88 | SF57 (SCHOTT) | 1.84666 / 23.83 | 0.05 | Exact index; near-exact Abbe |
| L10, L11 | 1.61800 | 63.38 | S-PHM52 (OHARA) | 1.61800 / 63.33 | 0.05 | Exact index; near-exact Abbe |

The crown/flint classification follows dispersion rather than family-name intuition. L1 and L6 are lanthanum crowns. L2-L4 and L8 are dense lanthanum flints at $\nu_d\approx44.2$. L5 and L7 are flint-family materials. L9 is a very dense flint. L10-L11 are low-dispersion phosphate crowns.

## Focus Mechanism

The patent's floating mechanism keeps L1-L2 stationary and advances the complete L3-L11 assembly toward them. The variable gap is $d_4$, between surfaces 4 and 5. Because the image plane remains fixed, the final back-focus gap increases by the same amount that $d_4$ decreases.

The patent gives one close-focus state. The data file retains the same rigid-group kinematics but extends the movement to the manufacturer-published 0.25 m production endpoint.

| State | $d_4$ (mm) | Rear-group advance (mm) | BFD (mm) | Object to first surface (mm) | Object to image plane (mm) | Paraxial magnification |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | 6.318000 | 0 | 36.500171 | Infinity | Infinity | 0 |
| Patent close example | 4.392000 | 1.926000 | 38.426171 | 203.928564 | 285.860735 | -0.087588 |
| Production-calibrated MFD | 3.953324 | 2.364676 | 38.864847 | 168.067829 | 250.000000 | -0.106419 |

The patent states an object distance of 1.134 m and system magnification $\beta=-0.088$ for its close example on the $f=100$ scale. The independent matrix trace gives 1132.936 patent units from the first surface and magnification **-0.087588**, agreeing within the patent's rounding.

After 0.18 scaling, that tabulated patent state corresponds to 203.929 mm from the first surface and 285.861 mm from object to image plane. It therefore does not reach the production lens's 0.25 m minimum focus. The final data endpoint is an explicit extrapolation of the patent's rigid floating-group motion, solved so that the object-to-image-plane distance is 250 mm.

## Chromatic Correction Strategy

Chromatic correction is distributed rather than concentrated in one conventional crown-positive/flint-negative achromat.

D1 combines a negative S-LAL14-coordinate crown with a positive S-FTM16-class flint. D2 combines a positive S-LAH51-coordinate dense lanthanum flint with a strongly negative SF57-coordinate dense flint. The final L10-L11 phosphate-crown pair restores positive power with substantially lower dispersion than L9.

This arrangement supplies large dispersion differences across the middle and rear components while preserving the alternating power pattern required by the retrofocus architecture. The available $nd/\nu_d$ data support an achromatic interpretation only. They do not support an apochromatic claim because the patent provides neither anomalous partial-dispersion data nor multi-line indices.

## Conditional Expressions

The patent defines the rear-group travel ratio

$$
K=\frac{1}{1-\beta_2^2}
$$

and recommends $K\leq3$, equivalently $|\beta_2|\leq0.82$.

Using the patent's reported infinity rear-group magnification $\beta_2=-0.455$ gives **$K=1.261$**, satisfying the condition. A standard Gaussian decomposition of the tabulated prescription, using the virtual intermediate image produced by fixed L1-L2 as the object for moving L3-L11, gives **$\beta_2=-0.377458$** and **$K=1.166$**, also satisfying the condition.

The patent's reported $-0.455$ is not reproduced under that standard group-conjugate definition. The difference may reflect a different reference-plane convention or another derived-value inconsistency in the patent. It should be retained as a patent-reported value, not presented as independently reproduced. The complete-system EFL, BFD, and tabulated close conjugate do verify.

## Aberration Correction Strategy

The patent compares three states for Embodiment 1:

- FIGS. 4A-4B: infinity focus.
- FIGS. 5A-5B: 1.134 m focus by conventional whole-lens movement.
- FIGS. 6A-6B: the same object distance with only the rear group advanced.

The stated design objective is to choose a variable airspace where reducing the gap has little adverse effect on spherical aberration and sagittal astigmatism but strongly corrects the meridional astigmatism that becomes overcorrected at short distance. The plotted curves show large meridional degradation under conventional whole-lens focusing and substantially improved correction with the floating rear group.

Those curves are finite-aberration evidence supplied by the patent. A first-order paraxial model cannot reproduce the full spherical, sagittal, and meridional plots. The independent calculations here verify prescription powers, conjugates, motion, and Petzval curvature rather than the patent's complete higher-order aberration results.

## Verification Summary

All prescription-derived quantities below were recomputed with reduced-angle ABCD matrices. The modeled aperture and semi-diameters were separately checked with exact spherical meridional rays and signed sag geometry.

| Quantity | Verified value |
|---|---:|
| Uniform scale factor | 0.18 |
| Paraxial EFL | 18.032579 mm |
| Infinity BFD | 36.500171 mm |
| BFD/EFL | 2.024124 |
| Vertex track, first to last surface | 45.432000 mm |
| First surface to image plane | 81.932171 mm |
| Fixed L1-L2 EFL | -47.773712 mm |
| Moving L3-L11 EFL | +19.404887 mm |
| Cemented D1 EFL | +19.080196 mm |
| Cemented D2 EFL | -19.081884 mm |
| Entrance-pupil semi-diameter at f/3.5 | 2.576083 mm |
| Modeled physical stop semi-diameter | 3.840522 mm |
| Surface-by-surface Petzval sum $\sum\phi/(nn')$ | +0.00626962 mm$^{-1}$ |
| Inverse Petzval magnitude | 159.499 mm |

With the convention that Petzval image-surface curvature is the negative of the tabulated sum, the corresponding signed radius is approximately **-159.5 mm**. The sum was calculated surface by surface; no thin-element Petzval approximation was used.

The semi-diameters are modeled values, not patent data. At the common clear aperture of each element, the minimum computed edge thickness is **1.567 mm**. The maximum front/rear semi-diameter ratio is **1.250**, the maximum spherical rim slope is **1.933** against the project limit of 2.065, and the maximum signed cross-gap intrusion is **0.879** of the available gap. The last value occurs across the short airspace between surfaces 16 and 17.

Exact spherical checks pass both full on-axis marginal rays, a 30° chief ray, a 30° ray at -0.75 of the modeled stop radius, and a vignetted 50° ray at -0.50 of the stop radius. These samples verify physical traversal of the modeled clear apertures; they do not establish full-pupil illumination at the extreme field.

## Sources

- US 4,029,397, *Retrofocus-Type Wide-Angle Photographic Lens System*, Nobuo Yamashita, Olympus Optical Co., Ltd.; especially FIG. 2, FIGS. 4A-6B, the Embodiment 1 table, and Claim 6.
- Olympus Optical Co., *The Zuiko Interchangeable Lens Group / OM System Zuiko Lenses* brochure, manufacturer-published specifications reproduced in [this archival scan](https://lens-club.ru/public/files/pdfs/6ff2d93af1f50f490de646806bc8e9dd.pdf).
- OHARA manufacturer catalog coordinates: [S-LAL family](https://oharacorp.com/glass-type/s-lal/), [S-LAH family](https://oharacorp.com/glass-type/s-lah/), [S-TIL26](https://oharacorp.com/glass/s-til26/), [S-TIM/S-FTM family](https://oharacorp.com/glass-type/s-tim-s-ftm/), and [S-PHM family](https://oharacorp.com/glass-type/s-phm/).
- SCHOTT, [SF57 optical-glass datasheet](https://media.schott.com/api/public/content/e6f3f71bd6574e3a9265619e6b132f6c?v=3451945d).
