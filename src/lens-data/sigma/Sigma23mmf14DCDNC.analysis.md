# SIGMA 23 mm F1.4 DC DN | Contemporary — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2024-035865 A (特開2024-35865)  
**Application Number:** 特願2022-140462  
**Filed:** 2022-09-05  
**Published:** 2024-03-15  
**Inventor:** Murakami Kyōsuke (村上 恭介)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Large-Aperture-Ratio Optical System (大口径比光学系)  
**Embodiment analyzed:** Numerical Example 1 (実施例1)

JP 2024-035865 A discloses four fast APS-C-format inner-focus optical systems. Numerical Example 1 is the best match to the production **SIGMA 23 mm F1.4 DC DN | Contemporary**.

1. **Element and group count.** Example 1 is a 13-element, 10-group design. Sigma publishes the production lens as 13 elements in 10 groups.
2. **Special-element count.** Example 1 has three aspherical surfaces on two physical elements: surface 18 on L21 and surfaces 23/24 on L33. Sigma publishes two aspherical lens elements. The three FCD-family catalog matches in the prescription, L11, L17, and L18, provide the natural mapping to Sigma's three published SLD elements. That mapping is inferred from catalog glass identity; Sigma does not publish element-by-element SLD placement.
3. **Focal length.** The patent gives $f = 22.31\ \mathrm{mm}$ at infinity. Sigma markets the lens as 23 mm. The difference is normal patent-to-product rounding.
4. **Aperture.** Example 1 gives Fno = 1.46 at infinity. Sigma markets the production lens as F1.4.
5. **Image circle and field.** Example 1 lists image height $Y = 14.20\ \mathrm{mm}$, a 28.4 mm diagonal field consistent with APS-C. Sigma publishes APS-C/DC coverage and a 63.4° angle of view. The patent's $2\omega = 67.85^\circ$ is the tabulated real chief-ray field for the patent design and should not be substituted for Sigma's marketed rectilinear diagonal field.
6. **Focusing method.** The patent states that only the second group G2 moves for focusing, and in Example 1 G2 is the single negative element L21. Sigma publishes an inner-focus AF system with a stepping motor.
7. **Close focus.** The patent's close-focus object distance is $d_0 = 155.00\ \mathrm{mm}$ from the object to surface 1. Adding the 94.32 mm lens length gives about 249.3 mm from object to image plane, matching Sigma's 0.25 m minimum focusing distance. The independent finite-conjugate trace gives $|\beta| = 0.138$, approximately 1:7.23, consistent with Sigma's published 1:7.3 maximum magnification.
8. **Production mount coverage.** The official current Sigma product page lists L-Mount, Canon RF Mount, Fujifilm X Mount, and Sony E-mount. No Micro Four Thirds variant is listed on the current official product page, so it is not included in the data file.

Example 2 also has $f = 22.31\ \mathrm{mm}$ and a similar F-number, but it adds aspherical surfaces 3 and 4 in the front group, giving three aspherical elements rather than Sigma's published two. Examples 3 and 4 are shorter designs, $f = 20.37\ \mathrm{mm}$ and $f = 19.40\ \mathrm{mm}$ respectively. These differences select Example 1.

## Optical Architecture

The design is a positive-negative-positive inner-focus system. A fixed positive first group G1 is followed by the aperture stop, a single-element negative focus group G2, and a fixed positive image-side group G3/GR. The independent paraxial trace gives:

| Group | Patent role | Recomputed focal length |
|---|---|---:|
| G1A | Front negative sub-group | $-44.350\ \mathrm{mm}$ |
| G1B | Rear positive sub-group of G1 | $+27.003\ \mathrm{mm}$ |
| G1 | Complete fixed front group | $+24.852\ \mathrm{mm}$ |
| G2 | Single negative focus group | $-38.193\ \mathrm{mm}$ |
| G3 / GR | Fixed rear positive group | $+31.648\ \mathrm{mm}$ |
| G23 | Composite G2 + G3 system | $+82.476\ \mathrm{mm}$ |

The architectural objective is a large-aperture APS-C lens with a light focus group. The patent explicitly criticizes earlier large-aperture wide-angle designs whose focus groups use four or five lenses, and it positions the single negative G2 element as the compact high-speed alternative. G1 is kept positive so that axial ray height is reduced before G2, allowing the moving lens to remain small and thin.

G1A is the wide-angle front collector: two object-convex negative menisci followed by an object-convex positive meniscus L13. This negative-then-positive structure reduces off-axis incidence angles and shifts G1A's rear principal plane toward the object, allowing the positive G1B sub-group to retain adequate principal-plane separation without excessive physical length. The large air gap between L13 and L14 forms the biconvex air lens described in claim 5: the rear of L13 is concave toward the image and the front of L14 is concave toward the object.

G1B is the high-power converging group. It contains two cemented doublets, two high-index positive singlets, and the stop-adjacent SLD/flint correction pair. G2 is the only moving optical group. G3 provides final convergence and field correction, with the rearmost biaspheric negative meniscus L33 carrying much of the image-side field-shaping work.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens focal lengths in air. Cemented-group net powers are separately stated because the in-situ junction behavior of a cemented assembly is not the same as the standalone power of either component.

### G1A — Negative Front Sub-Group

**L11 — Negative meniscus, convex to object.**  
$n_d = 1.55032,\ \nu_d = 75.50.$ Glass: FCD705-class low-dispersion glass (HOYA catalog match; SLD-class). $f = -37.4\ \mathrm{mm}$.

L11 is the outermost wide-angle meniscus. Its object-convex negative shape reduces incidence angle for off-axis rays and helps limit field curvature and astigmatism at the entrance of the lens. Its FCD-family low-dispersion glass makes it one of the three inferred SLD elements.

**L12 — Negative meniscus, convex to object.**  
$n_d = 1.51680,\ \nu_d = 64.20.$ Glass: BSC7 / N-BK7 / S-BSL7 borosilicate crown class. $f = -117.0\ \mathrm{mm}$.

L12 is a weaker negative meniscus that shares the front negative power with L11. This split front power reduces the abrupt ray bending that would occur if L11 carried the negative sub-group alone. It is an ordinary crown, not an SLD element.

**L13 — Positive meniscus, convex to object; patent L1p element.**  
$n_d = 1.94595,\ \nu_d = 17.98,\ P_{g,F} = 0.6546.$ Glass: FDS18-class high-index anomalous-dispersion dense flint (HOYA catalog match). $f = +86.6\ \mathrm{mm}$.

L13 is the positive L1p element named by the patent. Its shape keeps ray incidence angles moderate after the two preceding negative menisci, and the patent attributes negative spherical-aberration generation to this object-convex positive meniscus form. Materially, it is the design's explicit lateral-color control element: condition (2) requires $\nu_{d,1p} < 25.00$, and condition (3) requires $\Delta P_{g,F,1p} > 0.0150$. With $P_{g,F}=0.6546$, the patent's formula gives $\Delta P_{g,F}=+0.0386$.

### G1B — Positive Rear Sub-Group

**L14 + L15 — Cemented doublet, biconcave plus biconvex.**  
L14: $n_d = 1.77047,\ \nu_d = 29.74.$ Glass: NBFD29-class dense flint (HOYA catalog match). $f = -26.0\ \mathrm{mm}$.  
L15: $n_d = 1.87071,\ \nu_d = 40.73.$ Glass: TAFD32-class high-index lanthanum glass (HOYA catalog match). $f = +42.5\ \mathrm{mm}$.  
Cemented net: $f = -76.2\ \mathrm{mm}$.

This is the first unit of G1B. The front surface of L14 is strongly concave toward the object, satisfying the patent's preferred form for receiving the rays emerging from G1A. The doublet is net-negative in air, moderating the transition into the strongly positive rear part of G1B.

**L16 — Biconvex positive.**  
$n_d = 1.91082,\ \nu_d = 35.25.$ Glass: TAFD35-class high-index lanthanum glass (HOYA catalog match). $f = +43.1\ \mathrm{mm}$.

L16 is a high-index positive singlet. Its high index permits substantial positive power with less curvature than would be required from a lower-index crown, controlling spherical aberration in the high-aperture front group.

**L17 — Biconvex positive.**  
$n_d = 1.59282,\ \nu_d = 68.62.$ Glass: FCD515-class low-dispersion glass (HOYA catalog match; SLD-class). $f = +58.7\ \mathrm{mm}$.

L17 supplies positive power in low-dispersion glass at a high beam height near the stop region. It is the second inferred SLD element in the design.

**L18 + L19 — Cemented doublet, biconvex plus biconcave.**  
L18: $n_d = 1.59282,\ \nu_d = 68.62.$ Glass: FCD515-class low-dispersion glass (HOYA catalog match; SLD-class). $f = +29.3\ \mathrm{mm}$.  
L19: $n_d = 1.85451,\ \nu_d = 25.15.$ Glass: NBFD25-class dense flint (HOYA catalog match). $f = -30.4\ \mathrm{mm}$.  
Cemented net: $f = +261.5\ \mathrm{mm}$.

The L18-L19 doublet is near-afocal in net power but has a large dispersion contrast. L18 is the third inferred SLD element, and L19 is the high-dispersion flint partner. This makes the pair the principal axial-color correction junction in the front group before the light reaches the stop.

### Aperture Stop

The stop is surface 17. Its paraxial semi-diameter for the patent F-number is 10.609 mm after tracing the required entrance pupil through G1. The stop is fixed relative to G1 and G3; only G2 moves during focusing.

### G2 — Single Negative Inner-Focus Group

**L21 — Negative meniscus, front aspherical surface.**  
$n_d = 1.69350,\ \nu_d = 53.20.$ Glass: MP-LAC130 / M-LAC130 moldable lanthanum crown class (HOYA catalog match). $f = -38.19\ \mathrm{mm}$.

L21 is the sole focusing element and is the central mechanical point of the patent. The focal length satisfies condition (4), $|f/f_2| = 0.584$, keeping the focus group strong enough for short travel but not so strong that focus-induced spherical aberration and astigmatism become excessive. The front surface is aspherical. The moldable catalog match is consistent with a molded-glass asphere, but the patent does not state the manufacturing method.

### G3 / GR — Image-Side Group

**L31 + L32 — Cemented doublet, negative meniscus plus biconvex positive.**  
L31: $n_d = 1.56732,\ \nu_d = 42.84.$ Glass: E-FL6 / S-TIL26 light-flint class. $f = -58.2\ \mathrm{mm}$.  
L32: $n_d = 1.76385,\ \nu_d = 48.49.$ Glass: S-LAH96 (OHARA catalog match). $f = +18.0\ \mathrm{mm}$.  
Cemented net: $f = +25.2\ \mathrm{mm}$.

This rear doublet supplies most of the positive power in G3. The index step at the cemented interface is large, while the Abbe-number difference is modest, so the pair is more important for aberration balancing and rear-group convergence than for primary color correction. L32 is the one element whose public catalog match is strongest in OHARA's S-LAH series.

**L33 — Negative meniscus, both surfaces aspherical.**  
$n_d = 1.80610,\ \nu_d = 40.73.$ Glass: MP-NBFD130 / M-NBFD130 moldable dense-flint class (HOYA catalog match). $f = -94.5\ \mathrm{mm}$.

L33 is the rearmost field-correcting element. The patent states a preference for a negative meniscus in the third group whose image-side surface gains negative refractive power toward the periphery to correct coma and field curvature. Both faces are aspherical, making L33 the main rear field-correction element.

## Glass Identification and Selection

The patent does not name glass vendors. The identifications below are public catalog matches by $n_d$ and $\nu_d$, not proof of Sigma's production procurement. Catalog names are still useful because they allow dispersion behavior and cross-vendor equivalents to be checked against manufacturer data.

| Element | $n_d$ | $\nu_d$ | Catalog match used in file | Identification status | Role |
|---|---:|---:|---|---|---|
| L11 | 1.55032 | 75.50 | FCD705 (HOYA) | exact / SLD-class inferred | Front low-dispersion negative meniscus |
| L12 | 1.51680 | 64.20 | BSC7 / N-BK7 / S-BSL7 class | common crown equivalent | Weak negative meniscus |
| L13 | 1.94595 | 17.98 | FDS18-class (HOYA) | exact catalog-type match; patent PgF listed | L1p anomalous-dispersion lateral-color corrector |
| L14 | 1.77047 | 29.74 | NBFD29 (HOYA) | exact catalog-type match | Negative component of leading G1B doublet |
| L15 | 1.87071 | 40.73 | TAFD32 (HOYA) | exact catalog-type match | Positive component of leading G1B doublet |
| L16 | 1.91082 | 35.25 | TAFD35 (HOYA) | exact catalog-type match | High-index positive singlet |
| L17 | 1.59282 | 68.62 | FCD515 (HOYA) | exact / SLD-class inferred | Low-dispersion positive |
| L18 | 1.59282 | 68.62 | FCD515 (HOYA) | exact / SLD-class inferred | Low-dispersion positive in achromatizing doublet |
| L19 | 1.85451 | 25.15 | NBFD25 (HOYA) | exact catalog-type match | High-dispersion negative partner to L18 |
| L21 | 1.69350 | 53.20 | MP-LAC130 / M-LAC130 (HOYA) | exact moldable-glass class | Aspheric negative focus element |
| L31 | 1.56732 | 42.84 | E-FL6 / S-TIL26 light-flint class | close class match | Negative component of rear doublet |
| L32 | 1.76385 | 48.49 | S-LAH96 (OHARA) | exact OHARA catalog match | Rear-group high-index positive element |
| L33 | 1.80610 | 40.73 | MP-NBFD130 / M-NBFD130 (HOYA) | exact moldable-glass class | Rear biaspheric negative field corrector |

The chromatic strategy is not apochromatic in the strict sense. It is a targeted wide-aperture achromatization strategy: FCD-family low-dispersion glasses are placed at high beam heights in the front group, L18 is paired with the high-dispersion L19, and the patent's L1p conditions assign anomalous partial dispersion to L13 specifically for lateral color control. Only L13 carries structured patent-published partial-dispersion data in the data file. Earlier inferred $\Delta P_{g,F}$ values for the FCD elements were not retained because they are not published in the patent.

## Focus Mechanism

The focus mechanism is inner focus by the single negative G2 element L21. G1, the aperture stop, G3, and the image-plane back focal distance remain fixed.

| Quantity | Infinity | Close focus, 0.25 m |
|---|---:|---:|
| Object distance $d_0$ | $\infty$ | 155.00 mm |
| Stop-to-L21 air gap $d_{17}$ | 3.2524 mm | 7.3364 mm |
| L21-to-G3 air gap $d_{19}$ | 7.3908 mm | 3.3069 mm |
| Back focal distance | 18.7827 mm | 18.7827 mm |
| Patent focal length | 22.31 mm | 22.51 mm |
| Patent F-number | 1.46 | 1.59 |

Near focus increases $d_{17}$ by 4.0840 mm and reduces $d_{19}$ by essentially the same amount. Therefore L21 translates toward the image by 4.084 mm while the lens length remains 94.32 mm. The small focal-length change from 22.31 mm to 22.51 mm indicates mild focus breathing in the patent example.

## Aspherical Surfaces

Example 1 has three aspherical surfaces on two elements:

- surface 18A, the object-side face of L21;
- surface 23A, the object-side face of L33;
- surface 24A, the image-side face of L33.

The patent uses the standard even-order sag form:

$$
z = \frac{y^2/r}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12}.
$$

For Example 1, $K=0$ for all three aspherical surfaces, so each is a polynomial departure from a spherical base.

| Coefficient | 18A | 23A | 24A |
|---|---:|---:|---:|
| $K$ | 0.00000 | 0.00000 | 0.00000 |
| $A_4$ | $-5.27480\times10^{-6}$ | $1.06941\times10^{-5}$ | $3.33861\times10^{-5}$ |
| $A_6$ | $-5.56773\times10^{-9}$ | $4.17930\times10^{-8}$ | $6.67769\times10^{-8}$ |
| $A_8$ | $6.44743\times10^{-12}$ | $-7.73151\times10^{-10}$ | $-6.06177\times10^{-10}$ |
| $A_{10}$ | $-5.11734\times10^{-13}$ | $-6.18608\times10^{-13}$ | $5.03576\times10^{-13}$ |
| $A_{12}$ | $2.64452\times10^{-15}$ | $9.42967\times10^{-15}$ | $2.49819\times10^{-15}$ |

At the inferred data-file semi-diameters, the polynomial departures relative to the spherical base are approximately -0.110 mm at 18A ($h=11.5\ \mathrm{mm}$), -0.097 mm at 23A ($h=15.0\ \mathrm{mm}$), and +1.512 mm at 24A ($h=15.0\ \mathrm{mm}$). The large rear-surface departure is consistent with L33 acting as the rear field-correcting element rather than as a simple meniscus.

## Conditional Expressions

The patent's five conditional expressions are all satisfied by the independent paraxial trace of Example 1.

| # | Expression | Required range | Patent table | Recomputed |
|---|---|---:|---:|---:|
| (1) | $f_{2R}/f$ | 1.5-10.0 | 3.70 | 3.697 |
| (2) | $\nu_{d,1p}$ | < 25.00 | 17.98 | 17.98 |
| (3) | $\Delta P_{g,F,1p}$ | > 0.0150 | 0.0386 | 0.0386 |
| (4) | $|f/f_2|$ | 0.30-0.75 | 0.58 | 0.584 |
| (5) | $D_{12}/f$ | 0.10-0.35 | 0.23 | 0.234 |

Here $f_{2R}$ is the composite focal length of G2 and G3, $f_2$ is the focal length of G2 alone, and $D_{12}$ is the G1-to-G2 interval spanning the stop at infinity: $d_{16}+d_{17}=1.979+3.2524=5.2314\ \mathrm{mm}$.

## Data-File Semi-Diameter Notes

The patent omits clear semi-diameters. The `.data.ts` file therefore uses inferred semi-diameters constrained by the Sigma 52 mm filter envelope, paraxial marginal and chief-ray heights, surface slope, element front/rear semi-diameter ratio, positive edge thickness, and signed cross-gap sag intrusion.

The limiting geometric constraints in the final data file are intentional. The maximum $sd/|R|$ is 0.895 at surface 2, below the project hard limit. Element front/rear semi-diameter ratios are all at or below 1.25. The tightest computed edge thickness remains above 0.5 mm. These semi-diameters should be treated as rendering and tracing apertures, not as patent-published or manufacturer-published clear apertures.

## Verification Summary

A fresh independent paraxial trace was run from the raw Example 1 radii, thicknesses, refractive indices, and variable gaps. Patent focal lengths and group powers were not seeded into the calculation.

| Quantity | Recomputed | Patent |
|---|---:|---:|
| System EFL at infinity | 22.310 mm | 22.31 mm |
| Back focal distance | 18.783 mm | 18.7827 mm |
| Total track, surface 1 to image | 94.322 mm | 94.32 mm |
| G1A focal length | -44.350 mm | -44.35 mm |
| G1B focal length | +27.003 mm | +27.00 mm |
| G1 focal length | +24.852 mm | +24.85 mm |
| G2 focal length | -38.193 mm | -38.19 mm |
| G3 focal length | +31.648 mm | +31.65 mm |
| G23 focal length | +82.476 mm | +82.48 mm |
| Close-focus finite-conjugate magnification | $|\beta|=0.138$ | production 1:7.3 class |

The surface-by-surface Petzval sum, computed as $\sum (n'-n)/(n n' R)$, is $+2.8707\times10^{-3}\ \mathrm{mm^{-1}}$, corresponding to a Petzval radius of approximately $-348\ \mathrm{mm}$. This value was computed by surface, not by thin-lens element approximations.

## Sources

- Japan Patent Office, JP 2024-035865 A (特開2024-35865), Sigma Corporation, filed 2022-09-05, published 2024-03-15. Numerical Example 1 supplies the transcribed prescription, aspherical coefficients, variable-spacing table, group focal lengths, and condition-table values.
- SIGMA Corporation, "23mm F1.4 DC DN | Contemporary," official product specifications. Used for marketed focal length, marketed aperture, lens construction, SLD/aspherical count, current mount list, image format, minimum focusing distance, maximum magnification, aperture blades, filter size, and AF-system description.
- SIGMA Corporation, "Launch schedule of SIGMA 23mm F1.4 DC DN | Contemporary," 2023-04-03 and 2023-09-01. Used for launch timing and Fujifilm X-mount follow-up context.
- HOYA Group Optics Division, official optical glass data downloads and glass cross-reference tables. Used for FCD, FDS, NBFD, TAFD, M-LAC, and M-NBFD catalog matching.
- OHARA Corporation, official S-LAH96 data page / datasheet. Used for the L32 catalog match.
