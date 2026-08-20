## Patent Reference and Design Identification

**Lens:** CANON RF 24mm f/1.4 L VCM\
**Patent:** JP 2025-15010 A\
**Application Number:** JP 2023-118058\
**Filed:** 2023-07-20\
**Published:** 2025-01-30\
**Inventors:** Kenji Shinohara; Yuki Matsuba\
**Applicant:** Canon Inc.\
**Title:** 光学系及びそれを有する撮像装置\
**Embodiment analyzed:** Numerical Example 3

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
4. The published close row traces to a transverse magnification of -0.17078 at an object-to-authored-image-plane distance
   of 0.23896 m after the rear reference-plane normalization. Canon specifies 0.17× maximum magnification at 0.24 m.
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
$TL/EFL=4.7817$ and $BF/EFL=0.61425$; it therefore satisfies neither the project definition of telephoto
($TL/EFL<1$) nor of retrofocus ($BFD>EFL$). The design is better described by its five-group power distribution and its
oppositely moving L2/L4 focusing system.

## Element-by-Element Analysis

Unless a patent paragraph is cited, the role descriptions below are model-based interpretations of the final prescription.
Refractive indices, Abbe numbers, shapes, and standalone focal lengths come from the final data; cemented and functional-
group powers are independent computations from those same surfaces.

### E1 — Negative Meniscus

$n_d=1.59349$, $\nu_d=67.0$. Glass: 593670 class (vendor unresolved). Standalone $f=-52.148$ mm.

E1 is the first element of L1 and supplies negative front-end power while retaining relatively high Abbe number. Its shape
matches the negative-meniscus feature described for the first group in ¶0032. The patent assigns the aberration-control
benefit to the first-group arrangement as a whole rather than to E1 alone, so no more specific single-element correction
claim is made here.

### E2 — Biconcave Negative

$n_d=1.54814$, $\nu_d=45.8$. Glass: 548458 light-flint class (vendor unresolved). Standalone $f=-35.632$ mm.

E2 adds a second negative component inside L1 before the strong positive rear portion of the group. Its lower Abbe number
than E1 broadens the dispersion palette available to the front group, but the patent does not publish a separate material
rationale for E2.

### E3 — Biconvex Positive, first member of D1

$n_d=1.76385$, $\nu_d=48.5$. Glass: 764485 high-index crown class (vendor unresolved). Standalone $f=+24.870$ mm.

E3 begins the positive cemented component D1. The high refractive index permits substantial positive power within a compact
center thickness. E3 should not be interpreted in isolation when discussing the component's installed behavior: its
cemented partner E4 changes the net power substantially.

### E4 — Negative Meniscus, second member of D1

$n_d=1.85478$, $\nu_d=24.8$. Glass: 855248 high-index flint class (vendor unresolved). Standalone $f=-57.253$ mm.

E4 is cemented directly to E3. As a pair, D1 has a computed net focal length of +43.193 mm, distinct from either
standalone element focal length. The large dispersion contrast between E3 and E4 is consistent with a cemented
chromatic-balancing component, although the patent does not state a vendor glass identity or a pair-specific chromatic
formula.

### E5 — Biconvex Positive

$n_d=2.00069$, $\nu_d=25.5$. Glass: 001255 high-index class (vendor unresolved). Standalone $f=+43.795$ mm.

E5 is the final element of L1. Its index is the highest in the front group and it contributes positive power after the two
front negatives and D1. The combined in-situ L1 group remains positive at +38.489 mm even though the first two standalone
elements are negative.

### E6 — Negative Meniscus; L2 Focus Group

$n_d=1.62004$, $\nu_d=36.3$. Glass: 620363 flint class (vendor unresolved). Standalone and group
$f=-167.878$ mm.

E6 alone constitutes L2, so its standalone focal length is also the L2 group focal length. From infinity to the published
close row, L2 moves 3.62 mm imageward. The patent deliberately constrains L2 to weak negative power: condition (1) keeps
$f_2/f$ between -10.0 and -3.6, with the Example 3 model near -6.79. The patent associates that range with limiting both
focus travel and focus-induced variation in field angle (¶0027-¶0028).

### E7 — Biconvex Positive, first member of D2

$n_d=1.76385$, $\nu_d=48.5$. Glass: 764485 high-index crown class (vendor unresolved). Standalone $f=+27.259$ mm.

E7 begins the cemented L3 component immediately behind the aperture stop. Its strongly positive standalone power is
substantially moderated by E8.

### E8 — Negative Meniscus, second member of D2

$n_d=1.72047$, $\nu_d=34.7$. Glass: 720347 special-flint class (vendor unresolved). Standalone $f=-33.679$ mm.

E7 and E8 form D2 with a computed net focal length of +143.518 mm. Because D2 is the only refractive component in L3,
that cemented net focal length is also the L3 functional-group focal length. L3 is axially fixed in the published focus
states. The patent allows lateral movement of L3 for stabilization, but Canon specifies no optical IS for the production
lens, so the data model leaves L3 centered and fixed.

### E9 — Positive Meniscus, first member of D3

$n_d=1.49700$, $\nu_d=81.5$. Glass: 497816 low-dispersion class (vendor unresolved). Standalone $f=+55.176$ mm.

E9 is the first element of the moving L4 group and the first of the two $n_d=1.49700$, $\nu_d=81.5$ elements in the
prescription. Canon's production specification lists two UD lenses; the one-to-one correspondence with E9 and E11 is part
of the production correlation, not proof of a particular glass supplier.

### E10 — Biconcave Negative, second member of D3

$n_d=1.77047$, $\nu_d=29.7$. Glass: 770297 high-index flint class (vendor unresolved). Standalone $f=-20.215$ mm.

E10 is cemented to E9. D3 as a whole is negative, with a computed net focal length of -29.514 mm. This is a useful example
of why standalone element power, cemented-component power, and functional-group power must be kept separate: although D3
is negative, the complete L4 group is positive once E11 and E12 are included.

### E11 — Biconvex Positive

$n_d=1.49700$, $\nu_d=81.5$. Glass: 497816 low-dispersion class (vendor unresolved). Standalone $f=+39.737$ mm.

E11 is the second low-dispersion positive element in L4. Together with E9 it supplies the high-Abbe positive material that
satisfies the patent's $\nu_{4p}$ condition. The final data preserve the source-table value $\nu_d=81.5$; the patent's
condition table gives 81.54 at higher precision.

### E12 — Biconvex Positive with Two Aspherical Surfaces

$n_d=1.80400$, $\nu_d=46.5$. Glass: 804465 high-index crown class (vendor unresolved). Standalone $f=+37.877$ mm.

E12 is the last element of L4 and carries the only two aspherical surfaces in Numerical Example 3, `21A` and `22A`. Its
placement at the rear of the moving positive group makes it the only explicitly nonlinear-sag correction element within
the focus subsystem. The patent does not assign a specific aberration term to either asphere, so more detailed claims
about spherical aberration, coma, or distortion correction would be interpretive rather than source facts.

The complete L4 group, comprising D3, E11, and E12, has a computed focal length of +31.662 mm. From infinity to close
focus it moves 2.87 mm toward the object while L2 moves in the opposite direction.

### E13 — Biconvex Positive, first member of D4

$n_d=1.92286$, $\nu_d=20.9$. Glass: 923209 high-index flint class (vendor unresolved). Standalone $f=+53.875$ mm.

E13 begins the fixed rear group L5 and is cemented to E14. Its very high index and low Abbe number place it at the dense,
dispersive end of this prescription's glass-coordinate range.

### E14 — Biconcave Negative, second member of D4

$n_d=1.77047$, $\nu_d=29.7$. Glass: 770297 high-index flint class (vendor unresolved). Standalone $f=-36.935$ mm.

E14 reverses the sign of the D4 component: the cemented E13+E14 pair has a computed net focal length of -127.223 mm.
This negative component forms the first part of the rear negative functional group rather than acting as an isolated
negative element.

### E15 — Negative Meniscus

$n_d=1.65412$, $\nu_d=39.7$. Glass: 654397 special-flint class (vendor unresolved). Standalone $f=-170.525$ mm.

E15 is the final active glass element and the second negative component in L5. The complete L5 group has a computed focal
length of -72.416 mm. This element directly corresponds to the Example 3 description in ¶0061: the optical system uses a
rearmost negative meniscus convex toward the image side to make field-curvature correction easier.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for each material. It does not identify a glass maker,
publish per-element C/F/g-line indices, or provide $\Delta P_{gF}$. The final data therefore use supplier-neutral
coordinate/class labels. A multi-vendor catalog comparison found coordinate-compatible families for every active glass,
but a coordinate match is not supplier evidence and no vendor Sellmeier model is authored.

| Data glass label | $n_d$ | $\nu_d$ | Elements | Data-level interpretation |
|---|---:|---:|---|---|
| 593670 class | 1.59349 | 67.0 | E1 | relatively low-dispersion front negative material |
| 548458 light-flint class | 1.54814 | 45.8 | E2 | moderate-dispersion negative material |
| 764485 high-index crown class | 1.76385 | 48.5 | E3, E7 | high-index positive material in D1 and D2 |
| 855248 high-index flint class | 1.85478 | 24.8 | E4 | dense, high-dispersion D1 partner |
| 001255 high-index class | 2.00069 | 25.5 | E5 | very-high-index front positive material |
| 620363 flint class | 1.62004 | 36.3 | E6 | L2 negative focus element |
| 720347 special-flint class | 1.72047 | 34.7 | E8 | negative D2 partner |
| 497816 low-dispersion class | 1.49700 | 81.5 | E9, E11 | high-Abbe positive material in L4 |
| 770297 high-index flint class | 1.77047 | 29.7 | E10, E14 | negative partners in D3 and D4 |
| 804465 high-index crown class | 1.80400 | 46.5 | E12 | aspherical positive element in L4 |
| 923209 high-index flint class | 1.92286 | 20.9 | E13 | dense positive member of D4 |
| 654397 special-flint class | 1.65412 | 39.7 | E15 | rearmost negative meniscus |

The strongest chromatic-design signal available directly from the prescription is the pair E9/E11 at
$n_d=1.49700$, $\nu_d=81.5$ in L4, set against higher-index, lower-Abbe neighbors. Canon separately markets two UD
lenses in the production optical design. That correspondence supports the selected production correlation, but it does
not establish the melt supplier or anomalous partial-dispersion behavior.

No APO designation is inferred. Without source-published line indices, $dP_{gF}$, or a uniquely justified catalog
Sellmeier assignment, the data support only d-line/Abbe-level discussion of chromatic strategy.

## Focus Mechanism

The focus status is **PUBLISHED**. Numerical Example 3 gives four complete variable-spacing rows, and the mechanism is a
two-group internal focus system: negative L2 moves toward the image while positive L4 moves toward the object. The patent
explains that opposite movement reduces the change in off-axis ray heights and thereby suppresses focus-induced field-angle
variation (¶0023-¶0024).

| Published state | d9 (mm) | d11 (mm) | d15 (mm) | d22 / `22A` (mm) | L2 motion (mm) | L4 motion (mm) |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | 1.20 | 8.91 | 6.78 | 1.85 | 0.00 | 0.00 |
| $\beta=-0.022$ | 1.69 | 8.41 | 6.40 | 2.23 | +0.49 | -0.38 |
| $\beta=-0.10$ | 3.37 | 6.73 | 5.08 | 3.55 | +2.17 | -1.70 |
| Close, $\beta=-0.17$ | 4.82 | 5.28 | 3.91 | 4.73 | +3.62 | -2.87 |

The final `var` field stores the published infinity and close endpoints because the current prime-lens schema accepts one
infinity/close pair per variable gap. The two intermediate published rows are not reconstructed or discarded; they are
retained as source states and independently verified. The source gap sums remain constant to 0.01 mm rounding, consistent
with rigid translation of L2 and L4.

At the normalized image plane, the close row computes to -0.17078× at 0.23896 m object-to-image distance, consistent with
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

| Surface | R (mm) | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|---:|
| `21A` | +80.138 | 0 | -7.68130e-06 | -9.12882e-10 | +2.65012e-11 | -7.89662e-14 | +1.31928e-16 |
| `22A` | -47.206 | 0 | +4.42473e-06 | -2.12367e-09 | +3.53558e-11 | -6.57718e-14 | +1.35297e-16 |

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
Table 1 Example 3 entries with values recomputed from the final model. The normalized model omits the separate GB optical
block, so axial-distance conditions that reference the image plane use the authored air-equivalent rear spacing.

| Cond. | Expression | Patent bound | Table 1 | Final model | Status |
|---:|---|---|---:|---:|---|
| 1 | $f_2/f$ | -10.0 to -3.6 | -6.79 | -6.79307 | satisfied |
| 2 | $M_2/M_4$ at $\beta=-0.1$ | -3.5 to -0.5 | -1.28 | -1.27647 | satisfied |
| 3 | $f_2/f_4$ | -7.00 to -2.50 | -5.30 | -5.30213 | satisfied |
| 4 | $|f_1/f_2|$ | 0.05 to 0.50 | 0.23 | 0.22927 | satisfied |
| 5 | $|f_R/f|$ | 2.0 to 500.0 | 2.93 | 2.93025 | satisfied |
| 6 | $BF/f$ | 0.30 to 1.50 | 0.47 | 0.61408 | satisfied; Table 1 error |
| 7 | $D_a/TL$ | 0.45 to 0.70 | 0.59 | 0.59245 | satisfied |
| 8 | $D_4/D_a$ | 0.15 to 0.35 | 0.25 | 0.24497 | satisfied |
| 9 | $(1-\beta_4^2)\beta_R^2$ | 0.70 to 3.00 | 1.12 | 1.11820 | satisfied |
| 10 | $\nu_{4p}$ | 70.0 to 96.0 | 81.54 | 81.5 | satisfied |

Condition (6) contains the one material numerical contradiction in the Example 3 summary table. The same patent gives
$BF=15.18$ mm and $f=24.72$ mm, which require $BF/f=0.61408$, not 0.47. The final data therefore retain 15.18 mm as the
published air-equivalent back focus and do not propagate the erroneous 0.47 ratio.

Condition (9) is also a useful source check because parsed OCR drops the squared exponents. The rendered patent table
shows $(1-\beta_4^2)\beta_R^2$, and an independent finite-difference displacement of L4 gives 1.118203, consistent with
the patent's 1.12 entry.

## Verification Summary

The final model preserves the patent prescription at source scale. No uniform rescaling is used, and all dimensional
radii and spacings remain in the Example 3 scale except for the documented rear reference-plane normalization after the
separate GB block is omitted.

The active infinity prescription computes an effective focal length of 24.713123 mm, compared with the patent's rounded
24.72 mm, and a back focal length of 15.167714 mm, compared with the published 15.18 mm air-equivalent back focus. The
active surface-1-to-surface-27 span is 102.99 mm; adding the authored 15.18 mm rear spacing gives 118.17 mm, exactly the
patent's stated lens total length.

The separate GB surfaces 28-29 are not part of the LensVisualizer optical prescription. The patent identifies GB as an
optical block such as a filter, faceplate, low-pass filter, or infrared-cut filter (¶0017). Its physical sequence is
replaced by a single 15.18 mm air-equivalent rear spacing so that the image reference plane and published BF/TL convention
are preserved without modeling sensor/filter glass as an active lens element.

The paraxial matrix determinant is unity to numerical precision, and an independent $y$-$u$ implementation agrees with
the reduced-angle trace to better than $10^{-12}$ in matrix elements. The surface-by-surface Petzval sum,
$\sum\phi/(nn')$, is +0.00183412 mm$^{-1}$; this is a first-order curvature diagnostic rather than a finite-field
best-focus prediction.

The patent publishes no semi-diameters. All surface semi-diameters in the data file, including the 12.8775 mm physical
stop semi-diameter, are therefore modeling inferences. A 600 dpi audit of Figure 5 measured the clean cemented E9/E10
rim at about 11.67 mm, so surfaces 16–18 use 11.7 mm rather than the earlier 13.5 mm estimate. The stop location itself
is published at source surface 12, but its radius is calibrated so that the modeled entrance pupil reproduces the source
F-number 1.46. The inferred semi-diameters were checked against edge thickness, actual rim slope, shared-gap intrusion,
asphere limits, and representative meridional ray containment across all four published focus states; they must not be
read as Canon manufacturing clear apertures.

No source correction is hidden in the prescription. The close-row `d11=5.28` value reflects the rendered patent rather
than an OCR page-break artifact, and the aspheric equation uses the exponents visible on the rendered source. The patent's
raw L5 construction-length entry of 26.19 mm is also not treated as the active L5 span: it numerically includes the
separate GB block, while Figure 5 brackets L5 apart from GB. The final active L5 remains surfaces 23-27.

## Sources and References

1. Japan Patent Office, **JP 2025-15010 A**, *光学系及びそれを有する撮像装置*, published 2025-01-30. Numerical
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
   <https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods>. No supplier identity or vendor spectral model is
   asserted from those coordinate matches.
