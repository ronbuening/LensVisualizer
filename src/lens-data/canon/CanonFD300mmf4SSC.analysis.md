# Canon FD 300mm f/4 S.S.C. — US 4,251,133, Example 3

## Patent Reference and Design Identification

**Patent:** US 4,251,133  
**Title:** Large Aperture Telephoto-Lens  
**Application Number:** 958,634  
**Filed:** November 8, 1978  
**Priority:** Japan 52-137674, November 16, 1977  
**Granted:** February 17, 1981  
**Inventor:** Sadahiko Tsuji  
**Assignee:** Canon Kabushiki Kaisha  
**Embodiment analyzed:** Numerical Example 3; FIG. 3; infinity aberrations FIGS. 9A–9C; close-distance aberrations FIGS. 10A–10C

The transcribed prescription is Numerical Example 3 of US 4,251,133. The example is normalized to $f = 1$ at F/4 and places the diaphragm 0.0532 normalized units behind $R_8$. For the production-scale data file, all patent radii and axial separations are multiplied by 300. The rounded patent table ray-traces to $f = 0.998429$, or 299.529 mm at that scale; the marketed focal length remains 300 mm.

The supported production identification is the **Canon FD 300mm f/4 S.S.C.**, not either of the FD 300mm f/4L variants. The basis is mechanical and optical rather than a single coincidental number:

1. **Element and group count.** Example 3 is a six-element, six-group, fully air-spaced design. Canon's FD 300mm f/4 S.S.C. specification is also six elements in six groups. The FD 300mm f/4L and New FD 300mm f/4L are both seven-element, seven-group lenses, so they cannot be this six-element patent prescription.
2. **Glass set.** Example 3 uses ordinary catalog glasses: two FK5-class fluorocrowns, a dense flint, a barium crown, a flint, and a high-index lanthanum flint. It contains no Canon UD element. Canon's New FD 300mm f/4L description explicitly states two UD elements, and the earlier FD 300mm f/4L is also a separate seven-element L-series formula using anomalous-dispersion glass.
3. **Aperture and focal length.** The patent example is F/4 and scales directly into the 300 mm class.
4. **Rear focusing.** The patent architecture focuses by moving only the rear negative sub-group while the front positive group and the fixed rear negative sub-group remain stationary. Canon's FD 300mm f/4 S.S.C. product description identifies rear focusing and constant overall length.
5. **Close-focus behavior.** The patent's close-distance plots are calculated for an object distance of $10f$. At the 300 mm scale that corresponds to the production 3.0 m close-focus specification, and the paraxial solution gives approximately 0.107× magnification, consistent with Canon's published 0.11× maximum magnification.
6. **Timing.** The Japanese priority date is November 1977, immediately before the FD 300mm f/4 S.S.C. was marketed in January 1978. The original FD 300mm f/4L followed in December 1978, and the New FD 300mm f/4L followed in May 1980.

This identification is therefore constrained by the patent prescription and by Canon's product data. A six-element, no-UD, rear-focusing 300 mm f/4 design aligns with the FD 300mm f/4 S.S.C.; the seven-element L formulas are excluded.

## Optical Architecture

Example 3 is a refracting telephoto lens with a positive front group followed by a negative rear group. The front group consists of a positive lens, a negative meniscus, and a positive lens. The rear group is split into a fixed weak negative meniscus and a movable net-negative sub-group made from a positive lens plus a negative lens.

Independent paraxial tracing gives the following first-order group powers, in normalized patent units and in the 300 mm data-file scale:

| Group | Elements | Function | Focal length, normalized | Focal length at ×300 |
|---|---:|---|---:|---:|
| Front group | L1–L3 | Main positive collector and chromatic correction group | +0.607397 | +182.219 mm |
| Rear group | L4–L6 | Telephoto negative group | -0.536089 | -160.827 mm |
| Fixed rear sub-group | L4 | Weak negative stationary corrector | -3.32347 | -997.041 mm |
| Movable rear sub-group | L5–L6 | Net-negative focusing group | -0.620920 | -186.276 mm |

The total vertex-to-image distance at infinity is 0.808295 normalized units, or 242.489 mm at the production scale. Against the computed 299.529 mm focal length, this gives a telephoto ratio of 0.809. The design is therefore a true telephoto system: the total optical track is materially shorter than the focal length.

The distinctive architectural point is the split rear group. The lens does not focus by moving the entire optical system. It focuses by translating the small L5+L6 negative sub-group while the front positive group, L4, and the stop remain fixed. This reduces focusing mass and avoids the large barrel extension of older unit-focusing telephotos.

## Element-by-Element Analysis

### L1 — Biconvex Positive

$n_d = 1.48749,\ \nu_d = 70.1.$ Glass: S-FSL5 (OHARA). $f = +194.646$ mm at the data-file scale.

L1 is the front positive collector. Its low index and high Abbe number keep the front group's positive power from generating excessive axial color. The biconvex shape distributes the converging power across two surfaces rather than placing most of it on a single steep surface.

The S-FSL5 catalog match is close to the patent value: Ohara lists $n_d = 1.48749$ and $\nu_d = 70.23$. The glass has mild positive anomalous partial dispersion, but not enough to make this an apochromatic or UD-class design.

### L2 — Negative Meniscus, concave to object

$n_d = 1.72151,\ \nu_d = 29.2.$ Glass: S-TIH18 (OHARA). $f = -246.113$ mm at the data-file scale.

L2 is the dense-flint member of the front crown-flint-crown correcting group. Its low Abbe number supplies the negative dispersion needed to balance the two S-FSL5 positive elements. It is air-spaced from both neighbors rather than cemented, which gives the designer additional air-lens power and shape control.

The front surface $R_3$ and the rear surface of L1, $R_2$, are directly constrained by the patent's second condition. Example 3 gives $|R_2|/|R_3| = 1.087$, within the allowed interval. That condition is not cosmetic; it fixes the local shape relationship that the patent uses to balance spherical aberration.

### L3 — Positive Meniscus, convex to object

$n_d = 1.48749,\ \nu_d = 70.1.$ Glass: S-FSL5 (OHARA). $f = +224.039$ mm at the data-file scale.

L3 completes the front positive group. The second S-FSL5 crown lets the design split positive front-group power between L1 and L3 instead of making a single very strong front element. That reduces individual surface curvature and helps control higher-order spherical aberration at F/4.

The element is a positive meniscus with both radii positive. It receives an already converging beam from the L1–L2 pair and sends it across the long air space to the negative rear group.

### L4 — Negative Meniscus, convex to object; fixed rear sub-group

$n_d = 1.58913,\ \nu_d = 61.1.$ Glass: S-BAL35 (OHARA). $f = -997.041$ mm at the data-file scale.

L4 is a weak negative meniscus immediately behind the long front-to-rear air space. It is the stationary member of the rear group. Its power is small compared with the movable L5+L6 sub-group, but its position ahead of the moving group lets it set the ray conditions entering the focusing pair.

Because L4 sits near the stop, it works with a relatively narrow axial beam. The barium-crown glass gives a moderately high index at crown-like dispersion, allowing the weak negative correction without forcing very steep radii.

### L5 — Biconvex Positive; movable rear sub-group

$n_d = 1.59270,\ \nu_d = 35.3.$ Glass: S-FTM16 (OHARA). $f = +112.963$ mm at the data-file scale.

L5 is individually positive, but it is part of the movable net-negative focusing sub-group. It is paired with the much stronger negative L6 so that the moving assembly is not a simple singlet but a locally corrected positive-plus-negative pair.

This is the first surface of the moving sub-group, and its object-side surface is convex to the object, satisfying the shape requirement in claim 2. The positive lens moderates the chromatic and spherical consequences of moving a negative group during focusing.

### L6 — Negative Meniscus, concave to image; movable rear sub-group

$n_d = 1.77250,\ \nu_d = 49.6.$ Glass: S-LAH66 (OHARA). $f = -67.224$ mm at the data-file scale.

L6 supplies the dominant negative power of the movable focusing sub-group. The high index of S-LAH66 allows strong negative power without unmanageably steep surface curvatures. Its Abbe number is below the ordinary crown/flint boundary, so it is best classified as a lanthanum dense flint rather than a crown.

The final surface $R_{12}$ is positive, so the last lens surface is concave toward the image side. That matches claim 2's stated form for the movable sub-group.

## Glass Identification

The patent publishes $n_d$ and $\nu_d$ only. The identifications below are catalog matches against Ohara data sheets. Ohara is used as the primary naming system because the source is a Japanese Canon patent and because the listed Ohara values match the patent values within normal rounding tolerance.

| Element | Patent $n_d$ | Patent $\nu_d$ | Catalog match | Catalog $n_d$ / $\nu_d$ | Role |
|---|---:|---:|---|---:|---|
| L1 | 1.48749 | 70.1 | S-FSL5 (OHARA) | 1.48749 / 70.23 | Low-dispersion front positive crown |
| L2 | 1.72151 | 29.2 | S-TIH18 (OHARA) | 1.72151 / 29.23 | Dense-flint achromatizing negative |
| L3 | 1.48749 | 70.1 | S-FSL5 (OHARA) | 1.48749 / 70.23 | Low-dispersion rear crown of front group |
| L4 | 1.58913 | 61.1 | S-BAL35 (OHARA) | 1.58913 / 61.14 | Barium-crown fixed rear negative |
| L5 | 1.59270 | 35.3 | S-FTM16 (OHARA) | 1.59270 / 35.31 | Positive member of moving group |
| L6 | 1.77250 | 49.6 | S-LAH66 (OHARA) | 1.77250 / 49.60 | High-index lanthanum dense flint |

The chromatic strategy is conventional. The L1/L2/L3 front triplet does the main achromatization: two high-$\nu_d$ positive crowns bracket a dense flint. S-FSL5 has a mild positive $\Delta P_{g,F}$ of roughly +0.004 relative to the Schott normal line, but that is far below an ED or fluorite-equivalent correction. The design should be described as a well-corrected achromat, not as an apochromat.

The data file includes catalog $n_C$, $n_F$, and $n_g$ values for each element so chromatic tracing can use catalog dispersion rather than a plain Abbe fallback.

## Focus Mechanism

Focus is internal rear focusing. The front group L1–L3, fixed rear sub-group L4, and the stop remain stationary. The L5+L6 sub-group moves as a rigid net-negative assembly.

The patent does not publish a variable-spacing table. The production close-focus state in the data file is therefore computed paraxially at Canon's published 3.0 m minimum focus distance. Because the infinity vertex-to-image track is 0.808295 normalized units, a 10$f$ object-to-image-plane close condition places the object 9.191705 normalized units in front of the first vertex. Solving that conjugate with the image plane fixed gives the following spacings:

| State | Object condition | $R_8$ to stop | Stop to $R_9$ | Total $D_8$ | Back focus | Movable-group travel |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | Collimated object | 0.053200 | 0.004300 | 0.057500 | 0.387595 | reference |
| Close focus | 3.0 m from image plane | 0.053200 | 0.087685 | 0.140885 | 0.304210 | +0.083385 toward image |

At the 300 mm scale, the moving group travels about 25.016 mm toward the image. The paraxial transverse magnification at this condition is -0.1074, consistent with Canon's 0.11× published maximum magnification.

The patent prose contains a sentence saying that the nearer object condition brings the negative compound lens toward the object. That sentence is not consistent with the Example 3 paraxial solution when the image plane is fixed. In the verified model, near focus requires imageward movement: the gap in front of L5+L6 increases and the back focus decreases by the same amount. The data file follows the numerical prescription and the fixed-image-plane solution rather than that prose sentence.

Canon's product description also notes a vari-pitch focusing system. That is a mechanical cam refinement of the same rear-focusing movement; it does not change the optical prescription.

## Conditional Expressions

The patent gives four front-group conditions. Substituting the Example 3 values $\nu_1 = \nu_3 = 70.1$, $\nu_2 = 29.2$, $n_1 = n_3 = 1.48749$, $n_2 = 1.72151$, $R_2 = -0.3990$, and $R_3 = -0.3671$ gives:

| # | Patent condition | Example 3 value | Result |
|---|---|---:|---|
| (1) | $47 > \dfrac{\nu_1 + \nu_3}{2} - \nu_2 > 36$ | 40.9 | satisfied |
| (2) | $1.15|R_3| > |R_2| > 1.04|R_3|$, with $R_2 < 0$, $R_3 < 0$ | $|R_2|/|R_3| = 1.087$ | satisfied |
| (3) | $0.41f > |R_3| > 0.34f$ | 0.3671 | satisfied |
| (4) | $0.31 > n_2 - \dfrac{n_1 + n_3}{2} > 0.22$ | 0.23402 | satisfied |

Condition (1) sets the dispersion separation between the front positive crowns and the front negative flint. Conditions (2) and (3) constrain the L1/L2 surface-shape relationship that the patent uses to manage spherical aberration. Condition (4) limits the refractive-index separation in the front group, balancing Petzval correction against glass coloration and material practicality.

## Aberration Correction and Design Philosophy

The patent's design problem is a large-aperture telephoto that focuses internally without allowing close-distance aberrations to deteriorate. Example 3 addresses that problem through three main choices.

First, the front group is a crown-flint-crown triplet. Axial color is best handled early, where the beam is wide and the positive power is large. The two S-FSL5 positive elements provide the main converging power; the S-TIH18 negative meniscus supplies the opposing dispersion.

Second, the negative rear group offsets the positive Petzval contribution of the front group. Surface-by-surface Petzval calculation gives

$$P = \sum \frac{\phi}{n n'} = -0.080610$$

in normalized units. The corresponding reciprocal is about $-12.4f$, indicating a small, slightly negative field-curvature tendency rather than the strong positive curvature that an uncompensated positive front group would produce.

Third, the focusing group is a positive-plus-negative pair rather than a single negative lens. The net group remains negative, so it can provide rear focusing, but the internal positive member reduces the chromatic and spherical shifts that would otherwise change substantially with object distance.

## Verification Summary

All first-order values below were recomputed from the Example 3 prescription using a reduced-angle paraxial ray trace. The data file uses the computed paraxial BFD rather than the patent's rounded b.f. line so that the infinity image plane is exactly placed.

| Quantity | Computed | Reference or use |
|---|---:|---|
| Effective focal length | 0.998429 normalized = 299.529 mm | Patent normalization $f = 1$; marketed focal length 300 mm |
| Patent-listed b.f. | 0.3883 normalized = 116.49 mm | Printed patent table |
| Computed paraxial BFD | 0.387595 normalized = 116.279 mm | Used in `.data.ts` for infinity image-plane placement |
| Stop semi-diameter | 16.549 mm | Gives F/4 from the computed entrance pupil |
| Petzval sum | -0.080610 | Surface-by-surface $\phi/(n n')$ calculation |
| Close-focus magnification | -0.1074 | Solved at 3.0 m object-to-image-plane distance |
| Close-focus travel | +25.016 mm imageward | Movement of L5+L6 from infinity to close focus |
| Full-frame half-field | 4.12° | 36 × 24 mm format at 300 mm |
| Conditional expressions | all satisfied | Patent conditions (1)–(4) |

The semi-diameters in the data file are not patent-published values. They are inferred values constrained by the f/4 marginal ray, off-axis chief-ray geometry, Canon's 85 mm maximum barrel diameter, positive edge thickness, surface slope, and cross-gap sag clearance. The most restrictive surface is $R_8$, whose 22.1 mm semi-diameter remains below the spherical $0.90|R|$ renderer limit.

## Design Heritage and Context

US 4,251,133 builds on Canon's rear-focusing telephoto work, especially the earlier rear-focusing telephoto approach discussed in the patent background. Its contribution here is a larger F/4 telephoto with a front positive triplet and a rear negative group split into fixed and movable negative sub-groups.

The production FD 300mm f/4 S.S.C. fits Canon's late-1970s rear-focusing super-telephoto family. Canon explicitly compares it with the FD 300mm f/5.6 S.S.C., FD 400mm f/4.5 S.S.C., FD 600mm f/4.5 S.S.C., and FD 800mm f/5.6 S.S.C. in describing the rear-focusing system and constant overall length.

The L-series 300 mm f/4 lenses are separate formulas. The original FD 300mm f/4L was marketed in December 1978 with seven elements in seven groups. The New FD 300mm f/4L was marketed in May 1980, also with seven elements in seven groups, and Canon identifies two UD elements in that later version. Those differences are sufficient to exclude both L-series lenses from the six-element Example 3 prescription.

## Sources

- US Patent 4,251,133, "Large Aperture Telephoto-Lens," Sadahiko Tsuji / Canon Kabushiki Kaisha. Primary source for the prescription, claims, conditions, and figures.
- Canon Camera Museum, "FD300mm f/4 S.S.C." Manufacturer source for production specifications and rear-focusing description.
- Canon Camera Museum, "FD300mm f/4L" and "New FD300mm f/4L." Manufacturer sources used to exclude the seven-element L-series formulas from this six-element prescription.
- Ohara Corporation / Ohara GmbH data sheets for S-FSL5, S-TIH18, S-BAL35, S-FTM16, and S-LAH66. Manufacturer sources for glass-name cross-reference and catalog line-index values.
