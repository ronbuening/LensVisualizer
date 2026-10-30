# CANON RF 24mm f/1.4 L VCM — Optical Analysis

## Patent Reference and Design Identification

**Lens:** CANON RF 24mm f/1.4 L VCM\
**Patent:** JP 2025-15010 A\
**Application Number:** JP 2023-118058\
**Filed:** 2023-07-20\
**Published:** 2025-01-30\
**Inventors:** Kenji Shinohara; Yuki Matsuba\
**Applicant:** Canon Inc.\
**Title:** 光学系及びそれを有する撮像装置\
**Example details:** ¶0089 PDF pp15–16, Figure 5/6 p27; source GB defined¶0017 p5

This LensVisualizer record uses Numerical Example 3 as the fixed production correlation for the CANON RF 24mm f/1.4 L
VCM. The patent itself does not name the commercial RF24mm F1.4 L VCM, so the correlation is not presented as a Canon
confirmation. It rests instead on the convergence of the published prescription, Canon's production specifications, and
independent optical checks.

1. Numerical Example 3 gives a focal length of 24.72 mm and F-number 1.46. Canon markets the production lens as 24 mm
   f/1.4.
2. The active prescription contains 15 glass elements in 11 air-separated optical components, matching Canon's published
   15-element/11-group construction. It also contains two elements at $n_d=1.49700$, $\nu_d=81.5$ and one element with
   two aspherical surfaces; Canon lists two UD lenses and one aspherical lens.
3. The patent publishes two internal focusing groups moving in opposite directions. Canon identifies Nano USM as
   controlling the production lens's floating-focus unit and VCM as powering its rear-focus unit. In the Example 3
   correlation, that production terminology is consistent with the object-side moving L2 group as the floating unit and
   the image-side moving L4 group as the rear-focus unit, although Canon does not use the patent labels L2/L4 in its
   product literature.
4. The published close row traces to a transverse magnification of -0.170755 at an object-to-authored-image-plane distance
   of 0.239316 m after restoring the physical source GB plate and gaps. Canon specifies 0.17× maximum magnification at 0.24 m.
5. The application predates the lens announcement: the patent was filed in July 2023, Canon announced the RF24mm F1.4 L
   VCM on 2024-10-30, and the Japanese publication followed in January 2025.

Canon's production specifications also state that optical image stabilization is not provided. The patent permits lateral
movement of all or part of L3 as an optional stabilization implementation (¶0034 and claim 12), but no such motion is part
of this production-correlated data model.

## Optical Architecture

Numerical Example 3 is a fixed-focal-length, five-functional-group wide-angle design with group powers
positive-negative-positive-positive-negative (L1-L5). The patent groups are movement and power units, whereas the data
file's `groupCount: 11` records the 11 air-separated optical components that result from 15 physical elements and four
cemented pairs. The distinction matters: L1-L5 are the patent's functional groups, not the production construction count.

The independently recomputed group focal lengths at infinity are +38.489 mm (L1), -167.878 mm (L2), +143.518 mm (L3),
+31.662 mm (L4), and -72.416 mm (L5). These agree with the patent's rounded +38.50, -167.88, +143.52, +31.67, and
-72.41 mm values. The two moving groups are L2 and L4; L1, L3, and L5 remain axially fixed in the published focus table.

L1 is a relatively long front assembly containing two negative elements followed by a positive cemented component and a
positive singlet. The patent states generally that placing an object-side-convex negative meniscus together with positive
power in the first group helps control changes in lateral chromatic aberration and distortion during focusing (¶0032).
L2 is a weak negative single-element focus group. The aperture stop precedes the positive L3 cemented component. L4 is a
positive four-element focus group containing two low-dispersion elements and the design's only aspherical element. L5 is
a fixed negative rear group; for Example 3 the patent specifically notes that the image-side negative meniscus helps make
field-curvature correction easier (¶0061).

The architecture is not labeled as a classical retrofocus design in this analysis. Under the project's explicit tests,
$TL/EFL≈4.782$ and $BF/EFL≈0.614$ using the source air-equivalent convention; it therefore satisfies neither the project definition of telephoto
($TL/EFL<1$) nor of retrofocus ($BFD>EFL$). The design is better described by its five-group power distribution and its
oppositely moving L2/L4 focusing system.

## Element-by-Element Analysis

Unless a patent paragraph is cited, the role descriptions below are model-based interpretations of the final prescription.
Refractive indices, Abbe numbers, shapes, and standalone focal lengths come from the final data; cemented and functional-
group powers are independent computations from those same surfaces.

### E1 — Negative Meniscus

$n_d=1.59349$, $\nu_d=67.0$. Glass model: J-PSKH4 equivalent for patent 593670; production supplier unspecified. Standalone $f=-52.148$ mm.

E1 is the first element of L1 and supplies negative front-end power while retaining relatively high Abbe number. Its shape
matches the negative-meniscus feature described for the first group in ¶0032. The patent assigns the aberration-control
benefit to the first-group arrangement as a whole rather than to E1 alone, so no more specific single-element correction
claim is made here.

### E2 — Biconcave Negative

$n_d=1.54814$, $\nu_d=45.8$. Glass model: LLF1 equivalent for patent 548458; production supplier unspecified. Standalone $f=-35.632$ mm.

E2 adds a second negative component inside L1 before the strong positive rear portion of the group. Its lower Abbe number
than E1 broadens the dispersion palette available to the front group, but the patent does not publish a separate material
rationale for E2.

### E3 — Biconvex Positive, first member of D1

$n_d=1.76385$, $\nu_d=48.5$. Glass model: S-LAH96 equivalent for patent 764485; production supplier unspecified. Standalone $f=+24.870$ mm.

E3 begins the positive cemented component D1. The high refractive index permits substantial positive power within a compact
center thickness. E3 should not be interpreted in isolation when discussing the component's installed behavior: its
cemented partner E4 changes the net power substantially.

### E4 — Negative Meniscus, second member of D1

$n_d=1.85478$, $\nu_d=24.8$. Glass model: S-NBH56 equivalent for patent 855248; production supplier unspecified. Standalone $f=-57.253$ mm.

E4 is cemented directly to E3. As a pair, D1 has a computed net focal length of +43.193 mm, distinct from either
standalone element focal length. The large dispersion contrast between E3 and E4 is consistent with a cemented
chromatic-balancing component, although the patent does not state a vendor glass identity or a pair-specific chromatic
formula.

### E5 — Biconvex Positive

$n_d=2.00069$, $\nu_d=25.5$. Glass model: TAFD40L-W equivalent for patent 001255; production supplier unspecified. Standalone $f=+43.795$ mm.

E5 is the final element of L1. Its index is the highest in the front group and it contributes positive power after the two
front negatives and D1. The combined in-situ L1 group remains positive at +38.489 mm even though the first two standalone
elements are negative.

### E6 — Negative Meniscus; L2 Focus Group

$n_d=1.62004$, $\nu_d=36.3$. Glass model: E-F2 equivalent for patent 620363; production supplier unspecified. Standalone and group
$f=-167.878$ mm.

E6 alone constitutes L2, so its standalone focal length is also the L2 group focal length. From infinity to the published
close row, L2 moves 3.62 mm imageward. The patent deliberately constrains L2 to weak negative power: condition (1) keeps
$f_2/f$ between -10.0 and -3.6, with the Example 3 model near -6.79. The patent associates that range with limiting both
focus travel and focus-induced variation in field angle (¶0027-¶0028).

### E7 — Biconvex Positive, first member of D2

$n_d=1.76385$, $\nu_d=48.5$. Glass model: S-LAH96 equivalent for patent 764485; production supplier unspecified. Standalone $f=+27.259$ mm.

E7 begins the cemented L3 component immediately behind the aperture stop. Its strongly positive standalone power is
substantially moderated by E8.

### E8 — Negative Meniscus, second member of D2

$n_d=1.72047$, $\nu_d=34.7$. Glass model: N-KZFS8 equivalent for patent 720347; production supplier unspecified. Standalone $f=-33.679$ mm.

E7 and E8 form D2 with a computed net focal length of +143.518 mm. Because D2 is the only refractive component in L3,
that cemented net focal length is also the L3 functional-group focal length. L3 is axially fixed in the published focus
states. The patent allows lateral movement of L3 for stabilization, but Canon specifies no optical IS for the production
lens, so the data model leaves L3 centered and fixed.

### E9 — Positive Meniscus, first member of D3

$n_d=1.49700$, $\nu_d=81.5$. Glass model: H-FK61 compatible proxy for source 497815 (catalog 497816); production supplier unspecified. Standalone $f=+55.176$ mm.

E9 is the first element of the moving L4 group and the first of the two $n_d=1.49700$, $\nu_d=81.5$ elements in the
prescription. Canon's production specification lists two UD lenses; the one-to-one correspondence with E9 and E11 is part
of the production correlation, not proof of a particular glass supplier.

### E10 — Biconcave Negative, second member of D3

$n_d=1.77047$, $\nu_d=29.7$. Glass model: NBFD29 equivalent for patent 770297; production supplier unspecified. Standalone $f=-20.215$ mm.

E10 is cemented to E9. D3 as a whole is negative, with a computed net focal length of -29.514 mm. This is a useful example
of why standalone element power, cemented-component power, and functional-group power must be kept separate: although D3
is negative, the complete L4 group is positive once E11 and E12 are included.

### E11 — Biconvex Positive

$n_d=1.49700$, $\nu_d=81.5$. Glass model: H-FK61 compatible proxy for source 497815 (catalog 497816); production supplier unspecified. Standalone $f=+39.737$ mm.

E11 is the second low-dispersion positive element in L4. Together with E9 it supplies the high-Abbe positive material that
satisfies the patent's $\nu_{4p}$ condition. The final data preserve the source-table value $\nu_d=81.5$; the patent's
condition table gives 81.54 at higher precision.

### E12 — Biconvex Positive with Two Aspherical Surfaces

$n_d=1.80400$, $\nu_d=46.5$. Glass model: TAF3D equivalent for patent 804465; production supplier unspecified. Standalone $f=+37.877$ mm.

E12 is the last element of L4 and carries the only two aspherical surfaces in Numerical Example 3, `21A` and `22A`. Its
placement at the rear of the moving positive group makes it the only explicitly nonlinear-sag correction element within
the focus subsystem. The patent does not assign a specific aberration term to either asphere, so more detailed claims
about spherical aberration, coma, or distortion correction would be interpretive rather than source facts.

The complete L4 group, comprising D3, E11, and E12, has a computed focal length of +31.662 mm. From infinity to close
focus it moves 2.87 mm toward the object while L2 moves in the opposite direction.

### E13 — Biconvex Positive, first member of D4

$n_d=1.92286$, $\nu_d=20.9$. Glass model: N-SF66 equivalent for patent 923209; production supplier unspecified. Standalone $f=+53.875$ mm.

E13 begins the fixed rear group L5 and is cemented to E14. Its very high index and low Abbe number place it at the dense,
dispersive end of this prescription's glass-coordinate range.

### E14 — Biconcave Negative, second member of D4

$n_d=1.77047$, $\nu_d=29.7$. Glass model: NBFD29 equivalent for patent 770297; production supplier unspecified. Standalone $f=-36.935$ mm.

E14 reverses the sign of the D4 component: the cemented E13+E14 pair has a computed net focal length of -127.223 mm.
This negative component forms the first part of the rear negative functional group rather than acting as an isolated
negative element.

### E15 — Negative Meniscus

$n_d=1.65412$, $\nu_d=39.7$. Glass model: N-KZFS5 equivalent for patent 654397; production supplier unspecified. Standalone $f=-170.525$ mm.

E15 is the final active glass element and the second negative component in L5. The complete L5 group has a computed focal
length of -72.416 mm. This element directly corresponds to the Example 3 description in ¶0061: the optical system uses a
rearmost negative meniscus convex toward the image side to make field-curvature correction easier.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for each material. It does not identify a glass maker,
publish per-element C/F/g-line indices, or provide $\Delta P_{gF}$. A multi-vendor catalog comparison found a compatible
Sellmeier curve for every active element. The final labels now name those selected model curves explicitly while stating
that the production supplier is unspecified; no coordinate match is treated as supplier evidence.

| Catalog-equivalent model           |   $n_d$ | $\nu_d$ | Elements | Data-level interpretation                      |
| ---------------------------------- | ------: | ------: | -------- | ---------------------------------------------- |
| J-PSKH4 for patent 593670          | 1.59349 |    67.0 | E1       | relatively low-dispersion front negative model |
| LLF1 for patent 548458             | 1.54814 |    45.8 | E2       | moderate-dispersion negative model             |
| S-LAH96 for patent 764485          | 1.76385 |    48.5 | E3, E7   | high-index positive model in D1 and D2         |
| S-NBH56 for patent 855248          | 1.85478 |    24.8 | E4       | dense, high-dispersion D1 partner model        |
| TAFD40L-W for patent 001255        | 2.00069 |    25.5 | E5       | very-high-index front positive model           |
| E-F2 for patent 620363             | 1.62004 |    36.3 | E6       | L2 negative focus-element model                |
| N-KZFS8 for patent 720347          | 1.72047 |    34.7 | E8       | negative D2-partner model                      |
| H-FK61: source497815/catalog497816 | 1.49700 |    81.5 | E9, E11  | high-Abbe positive model in L4                 |
| NBFD29 for patent 770297           | 1.77047 |    29.7 | E10, E14 | negative-partner model in D3 and D4            |
| TAF3D for patent 804465            | 1.80400 |    46.5 | E12      | aspherical positive model in L4                |
| N-SF66 for patent 923209           | 1.92286 |    20.9 | E13      | dense positive model in D4                     |
| N-KZFS5 for patent 654397          | 1.65412 |    39.7 | E15      | rearmost negative-meniscus model               |

The strongest chromatic-design signal available directly from the prescription is the pair E9/E11 at
$n_d=1.49700$, $\nu_d=81.5$ in L4, set against higher-index, lower-Abbe neighbors. Canon separately markets two UD
lenses in the production optical design. That correspondence supports the selected production correlation, but it does
not establish the melt supplier or anomalous partial-dispersion behavior. The diagram tags E9 and E11 as inferred UD
correlations so the production-supported special-element count is visible without presenting it as a patent material ID.

No APO designation is inferred. The catalog-equivalent curves make C/F/g color modeling complete for all 15 elements,
but their line indices describe selected model curves, not source-published Canon materials. The restored camera-side GB also uses a qualified proxy, not an identified historical filter material.

## Focus Mechanism

The focus status is **PUBLISHED**. Numerical Example 3 gives four complete variable-spacing rows, and the mechanism is a
two-group internal focus system: negative L2 moves toward the image while positive L4 moves toward the object. The patent
explains that opposite movement reduces the change in off-axis ray heights and thereby suppresses focus-induced field-angle
variation (¶0023-¶0024). The diagram labels both directions explicitly; zoom is correctly unavailable because this is a
prime lens.

| Published state      | d9 (mm) | d11 (mm) | d15 (mm) | d22 / `22A` (mm) | L2 motion (mm) | L4 motion (mm) |
| -------------------- | ------: | -------: | -------: | ---------------: | -------------: | -------------: |
| Infinity             |    1.20 |     8.91 |     6.78 |             1.85 |           0.00 |           0.00 |
| $\beta=-0.022$       |    1.69 |     8.41 |     6.40 |             2.23 |          +0.49 |          -0.38 |
| $\beta=-0.10$        |    3.37 |     6.73 |     5.08 |             3.55 |          +2.17 |          -1.70 |
| Close, $\beta=-0.17$ |    4.82 |     5.28 |     3.91 |             4.73 |          +3.62 |          -2.87 |

The final `var` field stores all four published rows as exact focus keyframes. Their normalized positions follow the
viewer's inverse-distance convention. The source gap sums remain constant to 0.01 mm rounding, consistent with rigid
translation of L2 and L4. Motion between the published rows remains a piecewise-linear visualization.

At the restored physical image plane, the close row computes to -0.170755× at 0.239316 m inferred object-to-image distance, consistent with
Canon's marketed 0.17× at 0.24 m. Canon states that Nano USM controls the floating-focus unit and VCM powers the
rear-focus unit. Mapping those production terms onto Example 3 is an inference: L2 is the object-side moving group and
L4 is the image-side moving group, so the production description is consistent with Nano USM driving L2 and VCM driving
L4, but Canon does not identify the groups by the patent labels.

## Aspherical Surfaces

Both aspheres are on E12, corresponding to source surfaces 21 and 22 and labeled `21A` and `22A` in the data file. The
patent uses the standard conic convention

$$
x(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

Thus $K=0$ is a spherical conic base; no alternate $\kappa$ conversion is required. No scaling is applied to this
prescription ($s=1$), so the patent coefficients are used unchanged. `A14: 0` in the data file is a schema-completion
value; the patent publishes coefficients only through $A_{12}$.

| Surface |  R (mm) |   K |           A4 |           A6 |           A8 |          A10 |          A12 |
| ------- | ------: | --: | -----------: | -----------: | -----------: | -----------: | -----------: |
| `21A`   | +80.138 |   0 | -7.68130e-06 | -9.12882e-10 | +2.65012e-11 | -7.89662e-14 | +1.31928e-16 |
| `22A`   | -47.206 |   0 | +4.42473e-06 | -2.12367e-09 | +3.53558e-11 | -6.57718e-14 | +1.35297e-16 |

The patent publishes no clear-aperture or semi-diameter table, so an aspheric departure at a source-published aperture
cannot be quoted. At the verified model semi-diameter of 17.2 mm, however, the polynomial departure from the spherical
base is -0.58342 mm on `21A` and +0.54475 mm on `22A`. These are model-aperture values, not patent aperture data.

The opposite signs of the dominant $A_4$ terms show that the two faces depart from their spherical bases in opposite
senses. The prescription and patent establish the sag forms; a more specific attribution of each face to a particular
aberration term would require additional analysis not asserted here.

## Chromatic Correction Strategy

The prescription distributes dispersion contrast across several cemented components rather than concentrating it in a
single rear achromat. D1 combines $\nu_d=48.5$ and 24.8 materials; D2 combines 48.5 and 34.7; D3 combines the
high-Abbe E9 ($\nu_d=81.5$) with E10 ($\nu_d=29.7$); and D4 combines 20.9 and 29.7 materials. The L4 group then adds a
second $\nu_d=81.5$ positive singlet before the aspherical E12.

The patent's condition (10), $70.0<\nu_{4p}<96.0$, requires at least one positive L4 lens with high Abbe number. In the
final data, both E9 and E11 meet that requirement at $\nu_d=81.5$. The patent explains that the lower bound supports
lateral-chromatic correction while the upper bound constrains refractive-index behavior needed for field-curvature
correction (¶0053). This is a d-line/Abbe-level statement only; the data do not support a claim of anomalous partial
dispersion or apochromatic correction.

## Conditional Expressions

The patent gives ten design conditions for the focusing architecture. The table below compares the patent bounds and
Table 1 Example 3 entries with values recomputed from the literal active prescription. The source camera-side GB is now traced with physical gaps; source BF/TL comparisons use the corresponding air-equivalent quantities.

| Cond. | Expression                | Patent bound   | Table 1 |  Final model | Status                                 |
| ----: | ------------------------- | -------------- | ------: | -----------: | -------------------------------------- | ------- | --------- |
|     1 | $f_2/f$                   | -10.0 to -3.6  |   -6.79 |     -6.79307 | satisfied                              |
|     2 | $M_2/M_4$ at $\beta=-0.1$ | -3.5 to -0.5   |   -1.28 |     -1.27647 | satisfied                              |
|     3 | $f_2/f_4$                 | -7.00 to -2.50 |   -5.30 |     -5.30213 | satisfied                              |
|     4 | $                         | f_1/f_2        |       $ | 0.05 to 0.50 | 0.23                                   | 0.22927 | satisfied |
|     5 | $                         | f_R/f          |       $ | 2.0 to 500.0 | 2.93                                   | 2.93025 | satisfied |
|     6 | $BF/f$                    | 0.30 to 1.50   |    0.47 |      0.61408 | satisfied; source discrepancy retained |
|     7 | $D_a/TL$                  | 0.45 to 0.70   |    0.59 |      0.59245 | satisfied                              |
|     8 | $D_4/D_a$                 | 0.15 to 0.35   |    0.25 |      0.24497 | satisfied                              |
|     9 | $(1-\beta_4^2)\beta_R^2$  | 0.70 to 3.00   |    1.12 |      1.11820 | satisfied                              |
|    10 | $\nu_{4p}$                | 70.0 to 96.0   |   81.54 |         81.5 | satisfied                              |

Condition (6) contains the one material numerical contradiction in the Example 3 summary table. The same patent gives
$BF=15.18$ mm and $f=24.72$ mm, which require $BF/f=0.61408$, not 0.47. The final data retain literal physical D27=13.52mm, GB1.00mm/nd1.51633 and trailing air1.00mm; their reduced distance is15.179487mm, rounding to the published15.18. The .47 ratio remains unresolved in source.errata, without fitting the prescription.

Condition (9) is also a useful source check because parsed OCR drops the squared exponents. The rendered patent table
shows $(1-\beta_4^2)\beta_R^2$, and an independent finite-difference displacement of L4 gives 1.118203, consistent with
the patent's 1.12 entry.

## Verification Summary

The 2026-10-30 pass directly inspected the exact local original: Example 3 ¶0089 PDF pp 15–16, definitions¶0082–86 p 12,
Figure 5 and Figure 6A/B p 27, source GB¶0017 p 5, and native Table 1 p 22. Front pp 1/30 confirm both inventors and source
dates; earlier 2026-08-20 review dates are preserved. The lens is unscaled. Active lens R/d, material pairs, aspheres,
stop location and all four source focus rows are retained, with source qualifiers added separately.

Figure 5 is a native 1181×1859 bilevel raster at 423 ppi, rotated/cropped without added source pixels; Figure 6 is
1182×1859 at 423 ppi. Earlier 600 dpi views are about 1.42× upsampling. Tables are vector text inspected at 200 dpi;
Table 1 p 22 is native 720×1826 at 235 ppi. Source optical/IP spans give roughly 12.2–12.3 native px/mm; two/three-pixel
endpoint uncertainty is±.16–.24 mm, with additional small schematic calibration uncertainty. Leaders, brackets, axes,
focus arrows, mechanical outlines and the GB/IP annotations are excluded from optical-rim measurements.

### Physical camera plate and glass

The source lists S28–29 GB:1.00 mm, nd 1.51633/νd 64.1, trailing air 1.00 mm, preceded by source D27=13.52 mm. ¶0017
identifies a camera-side optical/filter/faceplate block, so it now uses rearPlates and is traced while hidden from the
lens diagram. No source plate diameter is printed; no clipping rim is invented. Former D27=15.18 was a rounded
reduced-air fold. The literal reduced rear distance is 13.52+1/1.51633+1=15.179487051 mm; physical rear distance 15.52 mm.
Physical infinity total 118.51 mm replaces the old 118.17 mm image reference, a+.340000 mm shift. Source reduced total
118.169487 mm rounds to 118.17. The t(1−1/n)=.340512949 mm plate reduction and old.000512949 mm fold rounding remain distinct.

EFL remains 24.713122837 mm and the canonical iris 12.877511407 mm is unchanged at every source state. Gaussian reduced
BFL remains 15.167714390 mm; after the plate's back face, BFL=.988227339 mm and residual to trailing 1 mm air is−.011772661 mm.
The old rounded fold residual was−.012285610 mm. Finite object conjugates shift consistently with the restored physical
image plane; no cam is fitted. Source catalog design now uses directly printed 24.72 mm, rather than computed 24.713123.

All 15 lens source pairs and GB were checked directly. ¶0082 p 12 explicitly defines d 587.6/F486.1/C656.3/g 435.8 nm.
All 16 media now have explicit d provenance; all 15 existing lens curves plus GB's compatible S-BSL7 curve are qualified
spectral proxies. Zero numerical C/F/g/partial overrides existed/removed/added. Source Table 1ν4 p 81.54 is a genuine
aggregate Abbe value, not a partial ratio. Source E9/E11 pair 1.49700/81.5 means code 497815; their retained compatible
H-FK61 catalog code 497816 is now distinguished in labels/prose. No source chemistry, supplier, melt or annealing is proved.

### Rims, connected elements and rejected trials

Every element, all four cemented interfaces, both full aspheres and each concave end were reviewed. No hybrid layer
is published or modeled. S2 now keeps a native-backed clear cap 16.0 mm below the resolved outer shoulder 19.1 mm; S1
remains 19.1. The other resolved free faces/bonds retain their existing inferred caps, rather than equal-height additions
or opaque bonded lands. Source R/d and asphere coefficients remain literal. E12's full A4–A12 profiles are retained;
at 17.2 mm their sphere departures are−.583417/+.544753 mm, with slopes+.107247/−.217786. No hidden trim is used.

The historical August 20 Figure 5 result measured D3's square optical blank at≈11.67 mm using a 600 dpi enlarged view.
Current native endpoint readings span approximately 11.4–11.7 mm, with±.16–.24 mm endpoint uncertainty and schematic
calibration uncertainty. The previous common 11.7 mm S16/S17/S18 rim is therefore retained as the source-outline reference.
However, its actual finite-object near row clips four axial marginal samples at S18, reaching 12.133953626 mm. The
source's literal near gaps and printedβ−.17 reproduce modeled−.1707554 within its±.005 bin; Figure 6B independently
prints F1.46. The unchanged canonical infinity-F iris is held during focus. These establish a modeled stated-beam
floor independently of arbitrary interpolated focus mechanics.

The adopted common 12.2 mm D3 cap rounds that 12.133954 mm floor upward, preserving the native square blank's coextensive
form across both cemented bodies. It is beam-supported, about 4.5% larger than historical 11.67, not source-measured or
production-proved. No opaque interface land, cut, source exemption, iris change or guard relaxation is introduced.
The 11.7 trial's 56 axial clips in 14 near-focus samples remain recorded; all source R/d, stops, cams and controls are unchanged.

### Launch scopes and all-state runtime results

The 67-focus union includes a 65-position uniform sample plus all four exact source rows; two interior source knots
are additional to the grid. Only the four authored gap rows are published. Two distinct launch scopes were run with
each state's actual iris: collimated rays for the geometry/control census, and actual finite-object rays for a separate
Gaussian-conjugate supplement at every nonzero focus. No object-distance plane is published. Both use the existing
projection-aware chief solve; Gaussian finite object points and seed solves are separately identified, with zero seed failures.

| Source row | Inferred object-to-physical-image distance | Modeled magnification | Print-bin qualification | Old 11.7 axial /49 |
| ---------- | -----------------------------------------: | --------------------: | ----------------------- | -----------------: |
| Infinity   |                                          ∞ |                     0 | source infinity         |                 49 |
| β−.022     |                             1183.730250 mm |           −.022677668 | outside±.0005           |                 49 |
| β−.10      |                              340.195014 mm |           −.100484543 | inside±.005             |                 49 |
| β−.17      |                              239.315620 mm |           −.170755380 | inside±.005             |                 45 |

The source farβ row remains outside its printed bin; source table rounding is possible, not proved, and no gap/cam is
altered. Both new 67-state scopes pass 3283/3283 axial and 201/201 chief rays over 9849 aimed samples each, zero unaimed.
Gaussian source-row bundles at axial and .6/1 paraxial object-field fractions are 49/34/6,49/29/12,49/29/12,49/29/12. Collimated source
rows are 49/34/6,49/34/6,49/31/6,49/31/6. Off-axis vignetting remains; those sampled fields are not all source-certified.
The collimated sweep's passing near geometry does not substitute for the independently checked finite-object supplement.

All 15 actual SVG paths are finite, closed and connected across 67 focus states, zero hidden renderer trim. Actual
SVG/native comparison confirms the front shoulder and preserved connected cemented components, with the explicit
beam-driven D3 enlargement and small retained outline differences. Narrow surface/image-circle/aperture checks pass;
no inferred cuts exist. Generic full-frame field remains about 89% (19.26 mm/21.65), limited by source-model rear caps;
image-circle floor clearance is not full-field proof. Optical IS is not modeled.

### Source constraints and unresolved comparisons

Source table p 15 prints field 37.14°, while native Figure 6A/B labelsω37.6°. Modeled infinity d chiefs reach 16.725068 mm at 37.14°
and 16.949838 mm at 37.6°, or 77.25/78.29% of generic full-frame radius 21.65 mm. At 37.6°, runtime distortion is−10.94%,
where native Fig. 6A reads about−13.2±.4%; no agreement or production correction model is claimed. These field/plot
comparisons and Table 1BF/f=.47 versus printed 15.18/24.72=.61408 remain unresolved source/model constraints. No
replacement R/d, asphere or field schedule is fitted. Source fidelity, sampled clearance and production correlation remain separate.

The patent's L5 construction length 26.19 mm includes a reference to the camera block, while Figure 5 brackets active
L5 apart from GB; the active source lens unit remainsS23–27. Source camera materials remain qualified, and the plate
is modeled separately from the catalog's 15 lens elements. Remaining uncertainty is explicit in source.errata and this audit.

## Sources and References

1. Japan Patent Office, **JP 2025-15010 A**, _光学系及びそれを有する撮像装置_, published 2025-01-30. Numerical
   Example 3, especially ¶0017, ¶0023-¶0024, ¶0032-¶0055, ¶0061, ¶0082-¶0090, Figure 5, Figure 6, and Table 1.
2. Canon U.S.A., **RF24mm F1.4 L VCM — Technical Specifications**:
   <https://www.usa.canon.com/support/p/rf24mm-f1-4-l-vcm>.
3. Canon U.S.A., **RF24mm F1.4 L VCM — Product Details**, especially the production focus-unit/actuator description:
   <https://www.usa.canon.com/shop/p/rf24mm-f1-4-l-vcm>.
4. Canon U.S.A., **Expanding the Range of Expression: Canon Announces Three New L Series Hybrid Lenses**, 2024-10-30:
   <https://www.usa.canon.com/newsroom/2024/20241030-consumer>.
5. Current OHARA, HOYA, HIKARI/Nikon, SCHOTT, SUMITA, and CDGM optical-glass catalogs were used only for
   coordinate-class cross-checking. Catalog portals: <https://oharacorp.com/glass-catalog/>,
   <https://www.hoya-opticalworld.com/english/datadownload/index.html>,
   <https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/>,
   <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>,
   <https://www.sumita-opt.co.jp/en/download/>, and
   <https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods>. No supplier identity is asserted from those
   coordinate matches; the named curves are explicitly modeling equivalents.

### Runtime field-coordinate qualification (2026-10-30)

The collimated census uses 0/.6/1 fractions of the modeled maximum object angle. The finite-object supplement uses
0/.6/1 fractions of a **paraxial object-field reference**, yObject=(21.65 mm×fraction)/A, where A is that state's
first-order transverse matrix term. Those explicit finite-object points establish the launch plane, but distortion
means their chief rays need not land at the sensor corner. They are paraxial object-field probes, not inverse-solved
finite sensor-edge rays. The following actual terminal image heights are measured at the authored physical image plane.
The infinity row uses the separate modeled-angle launch; nonzero rows use Gaussian finite-object geometry.

| Focus control | Probe .6 actual image height | Probe 1.0 actual image height |
| ------------- | ---------------------------: | ----------------------------: |
| 0.000000000   |                 11.162751 mm |                  19.260150 mm |
| 0.202978069   |                 12.251684 mm |                  18.738948 mm |
| 0.706289043   |                 12.259663 mm |                  18.755643 mm |
| 1.000000000   |                 12.265355 mm |                  18.766267 mm |

These results do not claim true finite-corner reach. Separate infinity source-field, inverse-image-height/vector
checks remain as previously recorded. Source object-plane uncertainty, field limitations and off-axis vignetting
remain explicit; no cap, cam or iris is fitted to make paraxial field fractions land at a desired image height.
