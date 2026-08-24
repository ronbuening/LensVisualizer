## Patent Reference and Design Identification

**Patent:** JP H11-211978 A (JPH11211978A / 特開平11-211978)  
**Application Number:** 特願平10-22776  
**Filed:** 1998-01-20  
**Published:** 1999-08-06  
**Inventors:** Yasunori Murata; Makoto Misaka  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** レトロフォーカス型レンズ (Retrofocus-type lens)  
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

The data file represents Numerical Example 1 of JP H11-211978 A as the optical prescription correlated with the production CANON EF 35mm f/1.4 L USM. The patent itself does not name that commercial lens, so the product correlation is an author/modeling inference rather than a manufacturer-confirmed patent identification. The correlation is supported by several independent points of agreement.

1. Numerical Example 1 gives a source focal length of 34.3 mm, source f-number of 1:1.45, and full field $2\omega=64^\circ$; the production lens is marketed as a 35 mm f/1.4 full-frame EF lens.
2. The prescription contains 11 elements in 9 air-separated groups, matching Canon's published construction for the production lens.
3. The prescription has one aspherical surface on the image-side face of the ninth physical element. Canon identifies the ninth production element as a ground-and-polished aspherical glass element.
4. The patent publishes a floating focus state at an object-to-image distance of approximately 300 mm. Independent tracing of the authored prescription gives $|m|=0.17755\times$, consistent with Canon's rounded 0.18× maximum magnification at the marketed 0.3 m closest focusing distance.
5. The patent was filed in January 1998, before Canon's December 1998 market date for the EF35mm f/1.4L USM.

Canon's manufacturer record also identifies floating correction, rear-focus AF, ring USM, eight diaphragm blades, and a minimum aperture of f/22 for the production lens. Those product facts are kept separate from the exact patent-design quantities used by the optical model. The data file therefore stores 35 mm and f/1.4 as marketing values, while the independently verified design values are 34.2948319 mm and f/1.45.

One source correction is required. The Example-1 table visibly prints $r_{11}=+72.820$ mm. With that sign, independent sequential $y$–$\nu$ tracing and an ABCD matrix give an EFL of 26.8926 mm and make the patent's L2b subgroup positive, both contrary to the source's 34.3 mm focal length and its definition of L2b as a negative subgroup. The authored model therefore uses $r_{11}=-72.820$ mm. With only that sign changed, the EFL becomes 34.2948319 mm and L2b becomes negative with a computed cemented-subgroup EFL of −277.7767 mm. This is a documented source correction, not a silent normalization.

No uniform scale is applied: $s=1$. All dimensional prescription values therefore remain at source scale, and the aspheric coefficients require no scale transformation.

## Optical Architecture

JP H11-211978 A describes a three-group retrofocus lens with a negative first group L1, a positive second group L2, an aperture stop, and a positive third group L3. L1 is subdivided into a negative L1a and positive L1b; L2 into positive L2a and negative L2b; and L3 into negative L3a and positive L3b. The stop lies between L2 and L3. This power sequence and grouping are stated directly in the patent (¶0010–0013).

The authored prescription contains 11 physical elements in 9 air-separated groups. L2b is a cemented E6–E7 doublet and L3a is a cemented E8–E9 doublet. The remaining elements are air-spaced. The data-file grouping is therefore:

- **L1, surfaces 1–6:** E1, E2, E3; negative overall.
- **L2, surfaces 7–13:** E4, E5, cemented E6–E7; positive overall.
- **STO:** the source-published stop plane between L2 and L3.
- **L3, surfaces 15–21:** cemented E8–E9 followed by E10 and E11; positive overall.

Independent paraxial segment calculations from the final data give L1 = −272.3348 mm, L2 = +90.2829 mm, and L3 = +44.8740 mm. These are net powers of the corresponding prescription segments, not isolated-element focal lengths. The cemented subgroups separately give L2b = −277.7767 mm and L3a = −35.4688 mm.

The system also satisfies the project's quantitative retrofocus criterion. At infinity the independently traced EFL is 34.2948319 mm and the paraxial back focal distance from the last vertex is 38.6533555 mm, so $\mathrm{BFD}/\mathrm{EFL}=1.12709>1$. The patent's retrofocus designation is therefore consistent with the computed first-order geometry.

The front negative group provides the divergent entrance section characteristic of a retrofocus wide-angle lens, while the two positive groups recover net positive system power and provide the long rear clearance. The patent's conditional expressions constrain the internal separations and thicknesses of L1, L2, and L3 so that this long-back-focus architecture does not impose excessive focus-dependent aberration changes (¶0014–0024).

The stop plane is source-published, but its clear diameter is not. The authored stop semi-diameter of 12.5926009 mm is a modeling inference derived from the source f/1.45 aperture constraint. Likewise, the patent does not publish surface clear semi-diameters; all surface `sd` values in the data file are modeled values constrained by marginal/chief-ray tracing, the full-field geometry, the production block diagram, and the current edge, slope, conic, gap, containment, and render policies.

## Element-by-Element Analysis

### E1 — Negative Meniscus

**nd = 1.58313, νd = 59.4. Glass: 583594/595 class (vendor unresolved). f = −77.6 mm.**

E1 is the first member of the negative L1a subgroup. Its standalone power is negative; together with E2 it forms the strongly negative front subsection of L1. The patent describes L1a in Numerical Example 1 as two negative meniscus lenses at the object side (¶0025).

As a front element, E1 carries a large modeled semi-diameter in the data file. That aperture is not patent-published and should not be read as a source dimension. Its role in the prescription is primarily architectural: it begins the negative front expansion needed to obtain the required field while preserving a rear clearance longer than the system EFL.

### E2 — Negative Meniscus

**nd = 1.58313, νd = 59.4. Glass: 583594/595 class (vendor unresolved). f = −94.2 mm.**

E2 uses the same d-line coordinate class as E1 and completes L1a. The computed EFL of the E1–air–E2 subsection is −40.5808 mm. That subgroup value is distinct from the isolated focal lengths of E1 and E2 and from the much weaker net power of the complete L1 after the positive E3 is included.

The two negative menisci distribute the front-group divergence across multiple surfaces instead of concentrating it in one element. The patent treats the L1a/L1b separation as a controlled design variable through the $D_{1ab}/f$ condition (¶0023–0024).

### E3 — Biconvex Positive

**nd = 1.71300, νd = 53.8. Glass: 713538/539/540 class (vendor unresolved). f = +65.9 mm.**

E3 is the positive L1b subsection. Its positive standalone power partially offsets L1a, leaving L1 negative overall rather than allowing the front group to become excessively strong. The resulting L1 segment EFL is −272.3348 mm.

This split negative-positive construction follows the patent's stated L1 architecture. The $D_{1ab}/f$ constraint balances the spacing between the negative L1a and positive L1b subsections against lens size and correction requirements (¶0023–0024).

### E4 — Biconvex Positive

**nd = 1.71300, νd = 53.8. Glass: 713538/539/540 class (vendor unresolved). f = +61.0 mm.**

E4 begins the positive L2a subsection. It supplies most of L2a's positive power; with E5 and the intervening air gap, the computed L2a segment EFL is +71.2470 mm.

The patent places L2 between the fixed negative front group and the stop and makes it one of the moving groups during focus. Its internal positive/negative division is specifically constrained by $D_{2ab}/f$ and $\Sigma D_2/f$ (¶0010, ¶0014–0016).

### E5 — Negative Meniscus

**nd = 1.51633, νd = 64.2. Glass: 516641/642 class (vendor unresolved). f = −314.3 mm.**

E5 is a weak negative meniscus paired by air spacing with E4 inside L2a. Its isolated power is much weaker than E4's. The element therefore modifies the power distribution and bending within L2a without reversing the positive sign of the subsection.

Because the patent supplies only d-line index and Abbe number for this element, its chromatic function can be discussed only at that level. No anomalous-partial-dispersion or apochromatic behavior is asserted.

### E6 — Positive Meniscus, L2b Front Element

**nd = 1.83481, νd = 42.7. Glass: 835427 class (vendor unresolved). f = +50.2 mm.**

E6 is the positive front member of the cemented L2b pair. Its isolated power is positive, but that value does not describe the doublet's net behavior. E6 is cemented directly to E7 at surface 12, where the interface belongs to the downstream E7 medium in the data model.

The sign correction at surface 11 is on E6's front surface. With the corrected $r_{11}=-72.820$ mm, E6 retains the positive isolated power shown above while the complete E6–E7 cemented pair becomes a weak negative subgroup, as required by the patent's L2b definition.

### E7 — Negative Meniscus, L2b Rear Element

**nd = 1.63980, νd = 34.5. Glass: S-TIM27 coefficient proxy (patent 640345; production supplier unspecified). f = −43.5 mm.**

E7 is the negative rear member of L2b. The cemented E6–E7 pair has a verified net EFL of −277.7767 mm even though E6 alone is positive. This distinction between isolated-element power and cemented-subgroup power is important: the negative L2b role belongs to the pair as a whole, not to E6 individually.

L2 remains positive after L2a and L2b are combined, with a computed segment EFL of +90.2829 mm. The patent uses the L2a/L2b separation and total L2 center thickness as explicit conditional variables to control focus-induced aberration changes (¶0014–0016).

### E8 — Biconcave Negative, L3a Front Element

**nd = 1.80518, νd = 25.4. Glass: 805254/255 class (vendor unresolved). f = −23.0 mm.**

E8 begins the negative L3a cemented subgroup immediately behind the aperture stop. Its isolated power has the largest magnitude of the eleven individual-element powers (equivalently, the smallest absolute isolated focal length). It is cemented to E9 at surface 16.

The low νd value indicates strong normal dispersion relative to the other coordinate classes in the design, but the source supplies no line indices or partial-dispersion data. The analysis therefore does not assign an anomalous-dispersion class or claim apochromatic correction.

### E9 — Biconvex Positive (1× Asph), L3a Rear Element

**nd = 1.83481, νd = 42.7. Glass: 835427 class (vendor unresolved). f = +72.2 mm.**

E9 is the positive rear member of the cemented L3a pair and carries the design's only aspherical surface, 17A, on its image-side face. E8 and E9 together have a computed cemented-subgroup EFL of −35.4688 mm. Thus E9's positive standalone power does not make L3a positive; the stronger negative contribution of E8 dominates the pair.

The patent explicitly specifies L3a as a cemented negative-positive pair and places an asphere on the image-side surface of its positive member (¶0019–0022). Canon's production-lens record independently identifies the ninth element as a ground-and-polished aspherical glass element, which is one of the strongest product-to-patent correlation points.

### E10 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unresolved). f = +46.8 mm.**

E10 is the first of the two positive menisci forming L3b. Together with E11 it provides the positive rear subsection that reverses the negative sign of L3a and makes L3 positive overall.

The computed EFL of the E10–air–E11 L3b subsection is +25.5779 mm. The complete L3 segment, including the negative L3a doublet, remains positive at +44.8740 mm.

### E11 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unresolved). f = +51.4 mm.**

E11 is the final optical element and shares the same d-line coordinate class as E10. It completes L3b and the positive rear group. The data file terminates after E11 with a computed rear air clearance to the fixed image plane rather than a patent-published back-focus row.

At infinity that rear clearance is 38.6533555 mm. During close focusing, the last vertex moves objectward with L3, so the authored surface-21 spacing increases to 45.0633555 mm solely to keep the image plane fixed. That variation is a reference-plane normalization, not an additional mechanical focus degree of freedom.

## Glass Identification and Selection

The patent provides seven distinct d-line $n_d/\nu_d$ coordinate pairs but does not identify glass vendors or trade names. The final data file therefore uses only coordinate classes, and current authoritative glass catalogs contain multiple coordinate-compatible vendor glasses for these pairs. No unique historical melt or supplier can be defended from the source.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 583594/595 class (vendor unresolved) | 1.58313 | 59.4 | E1, E2 | Moderate-index crown-class coordinates in the negative front subsection |
| 713538/539/540 class (vendor unresolved) | 1.71300 | 53.8 | E3, E4 | Higher-index, moderate-dispersion coordinates in positive L1b/L2a elements |
| 516641/642 class (vendor unresolved) | 1.51633 | 64.2 | E5 | Lower-index, higher-Abbe coordinate class in the weak negative L2a element |
| 835427 class (vendor unresolved) | 1.83481 | 42.7 | E6, E9 | Very high-index coordinates used in positive members of both cemented pairs |
| S-TIM27 coefficient proxy (patent 640345; production supplier unspecified) | 1.63980 | 34.5 | E7 | Lower-Abbe negative member of L2b |
| 805254/255 class (vendor unresolved) | 1.80518 | 25.4 | E8 | High-index, low-Abbe negative member of L3a |
| 773496 class (vendor unresolved) | 1.77250 | 49.6 | E10, E11 | High-index positive rear menisci |

The palette combines high-index positive elements with lower-Abbe negative partners in the two cemented subgroups, a configuration consistent with simultaneous chromatic and monochromatic balancing. That statement is a design inference from the published $n_d/\nu_d$ distribution and group powers; it does not identify the actual production glasses.

No `nC`, `nF`, `ng`, or `dPgF` values are stored because the selected patent does not publish them and the coordinate pairs alone do not establish unique vendor glasses from which line data could be imported without circular identification. Consequently no APO, anomalous-partial-dispersion, or secondary-spectrum claim is made.

## Focus Mechanism

The focus status is **PUBLISHED**. The patent states that L1 remains fixed while L2 and L3 move toward the object at different rates when focusing from infinity to shorter distances, and that the aperture stop moves integrally with L3 (¶0013). Numerical Example 1 then supplies the two focus-dependent internal gaps directly.

| Gap | Infinity | 300 mm state | Change |
|---|---:|---:|---:|
| d6 | 5.20 mm | 0.43 mm | −4.77 mm |
| d13 | 3.70 mm | 2.06 mm | −1.64 mm |

These spacing changes mean L2 translates 4.77 mm objectward relative to fixed L1. L3 and the stop translate 6.41 mm objectward in total, or 1.64 mm farther objectward than L2. No internal focus spacing is reconstructed.

Because the model normalizes both endpoints to one fixed image plane, the rear air gap after surface 21 changes from 38.6533555 mm at infinity to 45.0633555 mm at the close state. This `BF` variation is computed bookkeeping that compensates for the 6.41 mm objectward displacement of L3; it is not a patent-published moving group or a third internal focus law.

Independent tracing of the authored close state gives an EFL of 34.2286208 mm and an object-to-image conjugate of 299.7948 mm. The residual from the source's rounded 300 mm state is 0.2052 mm. The corresponding lateral magnification is −0.17755285, whose magnitude agrees with Canon's rounded 0.18× production specification.

Canon describes the production lens as using a floating mechanism together with rear-focus AF and a ring USM. The patent supplies the optical movement law, while the manufacturer source supplies those product-level drive and focusing descriptions; the patent does not identify a motor technology.

## Aspherical Surfaces

The prescription has one aspherical surface, `17A`, on the image-side face of E9. The patent writes the rotationally symmetric sag in the standard conic-constant form

$$
X=\frac{(1/R)Y^2}{1+\sqrt{1-(1+K)(Y/R)^2}}+AY^2+BY^4+CY^6+DY^8+EY^{10}.
$$

Because the denominator explicitly contains $(1+K)$, the patent's $K$ is already the standard conic constant used by the data schema; no convention conversion is required (¶0030–0031).

For Example 1 the authored asphere is:

- $R=-65.3464$ mm, using the more precise asphere-table radius rather than the rounded prescription-row value −65.346 mm;
- $K=+2.39046$;
- $A_4=+1.36838\times10^{-5}\ \mathrm{mm}^{-3}$;
- $A_6=+3.28097\times10^{-10}\ \mathrm{mm}^{-5}$;
- $A_8=-1.14450\times10^{-11}\ \mathrm{mm}^{-7}$.

The patent's separate quadratic $A Y^2$ term is printed as zero. Its $B$, $C$, and $D$ coefficients map to the data file's `A4`, `A6`, and `A8` fields. The Example-1 coefficient line does not print a value for the equation's $E Y^{10}$ term. The data file therefore uses `A10 = 0` as an explicit modeling assumption, not as a source-published zero. `A12 = 0` and `A14 = 0` are schema completion values beyond the highest power present in the patent equation.

No scale transformation is applied to the asphere because the prescription scale factor is one. Canon's production record identifies the ninth element as a ground-and-polished aspherical glass element; that manufacturing statement is a manufacturer fact and is not inferred from the coefficient table alone.

## Conditional Expressions

The patent defines four principal inequalities for the three-group retrofocus architecture. Using the source design focal length $f=34.3$ mm and the final authored spacings, Numerical Example 1 gives:

| Condition | Required range | Verified Example-1 value | Patent Table 1 |
|---|---:|---:|---:|
| $D_{2ab}/f$ | $0.15 < D_{2ab}/f < 0.4$ | 0.27026 | 0.27 |
| $\Sigma D_2/f$ | $0.25 < \Sigma D_2/f < 0.45$ | 0.38863 | 0.39 |
| $D_{3a}/f$ | $0.1 < D_{3a}/f < 0.2$ | 0.14286 | 0.14 |
| $D_{1ab}/f$ | $0.18 < D_{1ab}/f < 0.4$ | 0.30058 | 0.30 |

All four conditions pass. The same inequalities also pass if the independently computed 34.2948319 mm EFL is substituted for the rounded source focal length. The patent explains these bounds as balancing subgroup separation, center thickness, lens size, and focus-induced aberration variation (¶0014–0024).

## Verification Summary

The final data file has been independently recomputed from its authored arrays using sequential height/reduced-angle tracing and a separate ABCD matrix. The two methods agree to machine precision for the paraxial basis rays. The principal verified infinity-state results are:

- EFL = 34.2948319 mm versus the patent's 34.3 mm;
- BFL = 38.6533555 mm from the last optical vertex;
- modeled f-number = 1.45 from the authored stop and entrance-pupil geometry;
- Petzval sum = $+0.00363603901\ \mathrm{mm}^{-1}$, computed surface by surface as $\phi/(nn')$.

At the published close-focus endpoint the same authored arrays give an object-to-image conjugate of 299.7948 mm and $|m|=0.17755\times$. These values provide independent first-order checks on the source's rounded 300 mm focus state and Canon's rounded 0.18× production magnification.

The patent does not publish clear semi-diameters. The data file's inferred semi-diameters and stop diameter were checked at both defined focus states for positive edge thickness, actual rim slope, conic height, shared-gap intrusion, and on-/off-axis containment. The minimum computed element edge thickness is 0.8191 mm; the largest absolute sag slope is 1.01395 (45.40° rim angle), below the project's 64.2° rim-angle limit; and the 17A semi-diameter of 15.2 mm is below the project's 34.7791 mm positive-$K$ conic safety threshold, which is 98% of the 35.4889 mm mathematical real-sag limit. These are model-validation results, not patent dimensions.

The selected Example 1 contains no sensor cover plate, filter, folded-path surface, or active dummy plane in the optical prescription. Such mechanical or non-prescription components are therefore not modeled. No omitted plate requires an air-equivalent rear-spacing correction.

The only source correction in the prescription is the documented sign change at r11. No scaling is applied, no internal focus state is reconstructed, and no vendor glass identity or unsubstantiated spectral property is introduced.

## Sources / References

1. **JP H11-211978 A / JPH11211978A / 特開平11-211978**, *レトロフォーカス型レンズ* (Retrofocus-type lens), Canon Inc., filed 1998-01-20, published 1999-08-06. Numerical Example 1; especially ¶0010–0025, ¶0030–0034, Example-1 prescription/asphere table on p. 5, and conditional-expression Table 1 on p. 7.
2. **Canon Camera Museum — EF35mm f/1.4L USM.** Product specifications and block diagram: <https://global.canon/en/c-museum/product/ef346.html>
3. **Canon Camera Museum — EOS / EF system history.** EF mount and EOS system context: <https://global.canon/en/c-museum/history/story07.html>
4. **OHARA Optical Glass Catalog.** Current coordinate tables used only to test catalog compatibility, not to identify the production melts: <https://www.ohara-inc.co.jp/en/product/01000/>; S-TIM27 data: <https://www.ohara-inc.co.jp/assets/en/product/pdf/estim27.pdf>; legacy S-LAH66 comparison: <https://www.ohara-inc.co.jp/en/news/2025/0127/14998/>
5. **CDGM Optical Glass Database.** Cross-vendor coordinate/equivalence tables used to confirm that the patent pairs are not vendor-unique: <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>
