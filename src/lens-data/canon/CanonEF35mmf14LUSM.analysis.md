# Canon EF 35mm f/1.4 L USM — Patent Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP H11-211978 A (JPH11211978A / 特開平11-211978)\
**Application Number:** 特願平10-22776\
**Filed:** 1998-01-20\
**Published:** 1999-08-06\
**Inventors:** Yasunori Murata; Makoto Misaka\
**Applicant:** Canon Inc. (キヤノン株式会社)\
**Title:** レトロフォーカス型レンズ (Retrofocus-type lens)\
**Example details:** 数値実施例1, prescription/asphere and focus Table 1 on PDF page 5; Figure 1 on PDF page 8; Figure 6(A/B) on PDF page 10 (infinity / 300 mm); conditional Table-1 on PDF page 7

The data file represents Numerical Example 1 of JP H11-211978 A as the optical prescription correlated with the production CANON EF 35mm f/1.4 L USM. The patent itself does not name that commercial lens, so the product correlation is an author/modeling inference rather than a manufacturer-confirmed patent identification. The correlation is supported by several independent points of agreement.

1. Numerical Example 1 gives a source focal length of 34.3 mm, source f-number of 1:1.45, and full field $2\omega=64^\circ$; the production lens is marketed as a 35 mm f/1.4 full-frame EF lens.
2. The prescription contains 11 elements in 9 air-separated groups, matching Canon's published construction for the production lens.
3. The prescription has one aspherical surface on the image-side face of the ninth physical element. Canon identifies the ninth production element as a ground-and-polished aspherical glass element.
4. The patent publishes a floating focus state at an object-to-image distance of approximately 300 mm. Independent tracing of the authored prescription gives $|m|=0.17755\times$, consistent with Canon's rounded 0.18× maximum magnification at the marketed 0.3 m closest focusing distance.
5. The patent was filed in January 1998, before Canon's December 1998 market date for the EF35mm f/1.4L USM.

Canon's manufacturer record also identifies floating correction, rear-focus AF, ring USM, eight diaphragm blades, and a minimum aperture of f/22 for the production lens. Those product facts are kept separate from the exact patent-design quantities used by the optical model. The data file therefore stores 35 mm and f/1.4 as marketing values, while the independently verified design values are 34.2948319 mm and f/1.45.

One source correction is required. The Example-1 table visibly prints $r_{11}=+72.820$ mm. With that sign, independent sequential $y$–$\nu$ tracing and an ABCD matrix give an EFL of 26.8926 mm and make the patent's L2b subgroup positive, both contrary to the source's 34.3 mm focal length and its definition of L2b as a negative subgroup. The authored model therefore uses $r_{11}=-72.820$ mm. With only that sign changed, the EFL becomes 34.2948319 mm and L2b becomes negative with a computed cemented-subgroup EFL of −277.7767 mm. The 2026-10-30 original review formalizes this retained correction with `source.errata`, without changing the current radius. The two independent original evidence kinds are the Numerical Example 1 focal summary (PDF page 5) and Claim 1 (PDF page 2), which explicitly requires negative L2b. Printed r11 produces subgroup EFL +52.755075 mm; retained −72.820 produces −277.776682 mm. Two paraxial implementations support the calculation but are not counted as two different source evidence kinds.

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

Paragraph 0030 defines only Ni and νi without a spectral reference. The `nd/νd` notation below is the retained approximate d-line tracing convention. All eleven media are Unmatched; prior coordinate classes and S-TIM27 are disabled conditional comparisons, not current resolved spectral evidence or historical identities.

### E1 — Negative Meniscus

**nd = 1.58313, νd = 59.4. Glass: Unmatched (prior 583594/595 class (vendor unresolved); reference unspecified). f = −77.6 mm.**

E1 is the first member of the negative L1a subgroup. Its standalone power is negative; together with E2 it forms the strongly negative front subsection of L1. The patent describes L1a in Numerical Example 1 as two negative meniscus lenses at the object side (¶0025).

As a front element, E1 carries a large modeled semi-diameter in the data file. That aperture is not patent-published and should not be read as a source dimension. Its role in the prescription is primarily architectural: it begins the negative front expansion needed to obtain the required field while preserving a rear clearance longer than the system EFL.

### E2 — Negative Meniscus

**nd = 1.58313, νd = 59.4. Glass: Unmatched (prior 583594/595 class (vendor unresolved); reference unspecified). f = −94.2 mm.**

E2 uses the same retained approximate tracing coordinates as E1 and completes L1a. The computed EFL of the E1–air–E2 subsection is −40.5808 mm. That subgroup value is distinct from the isolated focal lengths of E1 and E2 and from the much weaker net power of the complete L1 after the positive E3 is included.

The two negative menisci distribute the front-group divergence across multiple surfaces instead of concentrating it in one element. The patent treats the L1a/L1b separation as a controlled design variable through the $D_{1ab}/f$ condition (¶0023–0024).

### E3 — Biconvex Positive

**nd = 1.71300, νd = 53.8. Glass: Unmatched (prior 713538/539/540 class (vendor unresolved); reference unspecified). f = +65.9 mm.**

E3 is the positive L1b subsection. Its positive standalone power partially offsets L1a, leaving L1 negative overall rather than allowing the front group to become excessively strong. The resulting L1 segment EFL is −272.3348 mm.

This split negative-positive construction follows the patent's stated L1 architecture. The $D_{1ab}/f$ constraint balances the spacing between the negative L1a and positive L1b subsections against lens size and correction requirements (¶0023–0024).

### E4 — Biconvex Positive

**nd = 1.71300, νd = 53.8. Glass: Unmatched (prior 713538/539/540 class (vendor unresolved); reference unspecified). f = +61.0 mm.**

E4 begins the positive L2a subsection. It supplies most of L2a's positive power; with E5 and the intervening air gap, the computed L2a segment EFL is +71.2470 mm.

The patent places L2 between the fixed negative front group and the stop and makes it one of the moving groups during focus. Its internal positive/negative division is specifically constrained by $D_{2ab}/f$ and $\Sigma D_2/f$ (¶0010, ¶0014–0016).

### E5 — Negative Meniscus

**nd = 1.51633, νd = 64.2. Glass: Unmatched (prior 516641/642 class (vendor unresolved); reference unspecified). f = −314.3 mm.**

E5 is a weak negative meniscus paired by air spacing with E4 inside L2a. Its isolated power is much weaker than E4's. The element therefore modifies the power distribution and bending within L2a without reversing the positive sign of the subsection.

Because the patent supplies only an index/Abbe pair without naming its spectral reference for this element, its chromatic function can be discussed only at that level. No anomalous-partial-dispersion or apochromatic behavior is asserted.

### E6 — Positive Meniscus, L2b Front Element

**nd = 1.83481, νd = 42.7. Glass: Unmatched (prior 835427 class (vendor unresolved); reference unspecified). f = +50.2 mm.**

E6 is the positive front member of the cemented L2b pair. Its isolated power is positive, but that value does not describe the doublet's net behavior. E6 is cemented directly to E7 at surface 12, where the interface belongs to the downstream E7 medium in the data model.

The sign correction at surface 11 is on E6's front surface. With the corrected $r_{11}=-72.820$ mm, E6 retains the positive isolated power shown above while the complete E6–E7 cemented pair becomes a weak negative subgroup, as required by the patent's L2b definition.

### E7 — Negative Meniscus, L2b Rear Element

**nd = 1.63980, νd = 34.5. Glass: Unmatched (prior S-TIM27 coefficient comparison conditional; source reference unspecified). f = −43.5 mm.**

E7 is the negative rear member of L2b. The cemented E6–E7 pair has a verified net EFL of −277.7767 mm even though E6 alone is positive. This distinction between isolated-element power and cemented-subgroup power is important: the negative L2b role belongs to the pair as a whole, not to E6 individually.

L2 remains positive after L2a and L2b are combined, with a computed segment EFL of +90.2829 mm. The patent uses the L2a/L2b separation and total L2 center thickness as explicit conditional variables to control focus-induced aberration changes (¶0014–0016).

### E8 — Biconcave Negative, L3a Front Element

**nd = 1.80518, νd = 25.4. Glass: Unmatched (prior 805254/255 class (vendor unresolved); reference unspecified). f = −23.0 mm.**

E8 begins the negative L3a cemented subgroup immediately behind the aperture stop. Its isolated power has the largest magnitude of the eleven individual-element powers (equivalently, the smallest absolute isolated focal length). It is cemented to E9 at surface 16.

The low retained Abbe coordinate indicates relatively strong dispersion relative to the other coordinate classes in the design, but the source supplies no line indices or partial-dispersion data. The analysis therefore does not assign an anomalous-dispersion class or claim apochromatic correction.

### E9 — Biconvex Positive (1× Asph), L3a Rear Element

**nd = 1.83481, νd = 42.7. Glass: Unmatched (prior 835427 class (vendor unresolved); reference unspecified). f = +72.2 mm.**

E9 is the positive rear member of the cemented L3a pair and carries the design's only aspherical surface, 17A, on its image-side face. E8 and E9 together have a computed cemented-subgroup EFL of −35.4688 mm. Thus E9's positive standalone power does not make L3a positive; the stronger negative contribution of E8 dominates the pair.

The patent explicitly specifies L3a as a cemented negative-positive pair and places an asphere on the image-side surface of its positive member (¶0019–0022). Canon's production-lens record independently identifies the ninth element as a ground-and-polished aspherical glass element, which is one of the strongest product-to-patent correlation points.

### E10 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: Unmatched (prior 773496 class (vendor unresolved); reference unspecified). f = +46.8 mm.**

E10 is the first of the two positive menisci forming L3b. Together with E11 it provides the positive rear subsection that reverses the negative sign of L3a and makes L3 positive overall.

The computed EFL of the E10–air–E11 L3b subsection is +25.5779 mm. The complete L3 segment, including the negative L3a doublet, remains positive at +44.8740 mm.

### E11 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: Unmatched (prior 773496 class (vendor unresolved); reference unspecified). f = +51.4 mm.**

E11 is the final optical element and shares the same retained approximate tracing coordinates as E10. It completes L3b and the positive rear group. The data file terminates after E11 with a computed rear air clearance to the fixed image plane rather than a patent-published back-focus row.

At infinity that rear clearance is 38.6533555 mm. During close focusing, the last vertex moves objectward with L3, so the authored surface-21 spacing increases to 45.0633555 mm solely to keep the image plane fixed. That variation is a reference-plane normalization, not an additional mechanical focus degree of freedom.

## Glass Identification and Selection

The original publishes seven distinct index/Abbe pairs across eleven elements, but ¶0030 / PDF page 4 defines them only as Ni and νi. It does not name their spectral reference. The d/g/C labels in the aberration figures provide context but do not independently define those numerical coordinates. All eleven source pairs and the current d-line tracing convention remain, with explicit approximate-reference `indexReferenceNote` and Unmatched disposition on every element. This qualifies source uncertainty rather than claiming conventional d inference is wrong.

| Elements  | Source index / Abbe | Prior conditional comparison   | Current disposition |
| --------- | ------------------: | ------------------------------ | ------------------- |
| E1 / E2   |      1.58313 / 59.4 | 583594/595 class               | Unmatched           |
| E3 / E4   |      1.71300 / 53.8 | 713538/539/540 class           | Unmatched           |
| E5        |      1.51633 / 64.2 | 516641/642 class               | Unmatched           |
| E6 / E9   |      1.83481 / 42.7 | 835427 class                   | Unmatched           |
| E7        |      1.63980 / 34.5 | S-TIM27 coefficient comparison | Unmatched           |
| E8        |      1.80518 / 25.4 | 805254/255 class               | Unmatched           |
| E10 / E11 |      1.77250 / 49.6 | 773496 class                   | Unmatched           |

Eleven previously active catalog curves are disabled. No individual C/F/g indices, relative partial dispersions or APD evidence are published or authored, so no genuine source spectral value or per-lens override is removed. Prior named/code classes remain conditional historical comparisons only and cannot establish supplier, melt, chemistry or manufacturing route. The S-TIM27 comparison cannot turn an unspecified source reference into verified spectral data. Approximate d-line tracing does not support an APO or source secondary-spectrum claim.

## Focus Mechanism

The focus status is **PUBLISHED**. The patent states that L1 remains fixed while L2 and L3 move toward the object at different rates when focusing from infinity to shorter distances, and that the aperture stop moves integrally with L3 (¶0013). Numerical Example 1 then supplies the two focus-dependent internal gaps directly.

| Gap | Infinity | 300 mm state |   Change |
| --- | -------: | -----------: | -------: |
| d6  |  5.20 mm |      0.43 mm | −4.77 mm |
| d13 |  3.70 mm |      2.06 mm | −1.64 mm |

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

| Condition      |               Required range | Verified Example-1 value | Patent Table 1 |
| -------------- | ---------------------------: | -----------------------: | -------------: |
| $D_{2ab}/f$    |     $0.15 < D_{2ab}/f < 0.4$ |                  0.27026 |           0.27 |
| $\Sigma D_2/f$ | $0.25 < \Sigma D_2/f < 0.45$ |                  0.38863 |           0.39 |
| $D_{3a}/f$     |       $0.1 < D_{3a}/f < 0.2$ |                  0.14286 |           0.14 |
| $D_{1ab}/f$    |     $0.18 < D_{1ab}/f < 0.4$ |                  0.30058 |           0.30 |

All four conditions pass. The same inequalities also pass if the independently computed 34.2948319 mm EFL is substituted for the rounded source focal length. The patent explains these bounds as balancing subgroup separation, center thickness, lens size, and focus-induced aberration variation (¶0014–0024).

## Original Figure Review — 2026-10-30

The exact local original embeds 1656 × 2339 one-bit pages at native 200 ppi. Figure 1 on PDF page 8 was inspected natively; enlarged viewing is magnification only. Approximately 379 pixels span the 85.64 mm optical stack, around 4.43 px/mm. Practical inferred cap-height uncertainty is about ±1.5 mm, with larger schematic/nonuniform drawing differences kept separate. Group brackets, support symbols, movement arrows, leaders and the stop symbol are excluded. Neither the production filter size nor a production block diagram is used as an original-patent ruler.

| Surface(s) | Earlier inferred clear sd | Reviewed clear sd / outer rim | Disposition                                                                                   |
| ---------- | ------------------------: | ----------------------------: | --------------------------------------------------------------------------------------------- |
| S2         |                   22.0 mm |  clear 22.0 mm; outer 25.0 mm | Resolved rear shoulder of first negative meniscus, conservatively anchored to existing S1 cap |
| S3 / S4    |            21.5 / 20.5 mm |                23.0 / 23.0 mm | Second negative meniscus follows source common cap height and curved rear outline             |
| S9         |                   18.5 mm |                       17.0 mm | Weak negative E5 follows visible common height with existing S10 cap                          |
| S15        |                   13.5 mm |  clear 13.5 mm; outer 14.2 mm | Resolved front shoulder of rear doublet, conservative existing S16 bonded-cap anchor          |
| S21        |                   22.0 mm |                       18.0 mm | Final meniscus's curved rear cap follows source height and existing S20 front cap             |

Four inferred clear-cap fields and two outer shoulders change. Every element, concave end, cemented interface S12/S16 and the S17A asphere was inspected. No separate hybrid/resin layer, cement medium, filter or camera-side plate is tabulated. No opaque bonded land or disconnected wing is added, and zero inferred cuts are authored.

A source-outline S2 clear-cap trial at 23.5 mm fails the unchanged S2–S3 air-gap guard: 6.72 mm intrusion exceeds 6.219 mm allowed in the 6.910 mm printed gap. The optical cap therefore remains 22.0 mm and the resolved outer blank uses `rimExtensionSd`. The two bonded blanks are not inflated beyond their existing curved-interface caps. The nearly flat S13 and continuous S6/S8/S17A/S19 outlines do not independently resolve extra lands. Native outline precision does not establish exact mechanical blank dimensions, and the unprinted asphere E term retains its explicit zero assumption above.

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

### Sampled runtime clearance

Surface, image-circle, infinity aperture-census and full-frame corner-field checks pass. The existing derived/paraxial iris remains 12.592601 mm at the source nominal f/1.45; a physical source iris radius is not printed. Real aimed working f-number is 1.457525 at infinity, 1.522935 at focus 0.5 and 1.588318 at the published close configuration. These finite-conjugate working values are separate from the nominal control.

Across 21 focus positions and nine apertures, all 189 working-ray calls trace, with baseline/candidate results identical. An aimed 193-point circular-pupil probe at axial, half-field and corner fields over all 21 states gives all 193 axial rays passing and every chief aimed/valid. Infinity corner count changes 91→86 of 193 and close count 125→123; source-height refinement retains off-axis vignetting rather than claiming full-pupil illumination. Actual infinity/mid/close SVGs were compared with Figure 1. Twenty-one states produce 231 finite, singly connected, closed element paths with zero hidden trimming, and corner aiming reaches about 21.65 mm.

The source publishes the two endpoint internal focus gaps; linear positions between them remain an interpolation rather than a complete measured cam law. The computed fixed-image rear gap is not a source BF row. The unprinted A10/E assumption, unspecified glass reference and corrected r11 sign are distinct source qualifications. No inferred cut requires an exemption or cut-beam probe. Source fidelity, sampled runtime behavior and production correlation remain separate. Existing external product/catalog links below are older correlation context, not fresh inspections in this original-PDF review.

## Sources / References

1. **JP H11-211978 A / JPH11211978A / 特開平11-211978**, _レトロフォーカス型レンズ_ (Retrofocus-type lens), Canon Inc., filed 1998-01-20, published 1999-08-06. Numerical Example 1; especially ¶0010–0025, ¶0030–0034, Example-1 prescription/asphere and focus Table 1 on PDF page 5, conditional Table-1 on PDF page 7, Figure 1 on PDF page 8, Figure 6(A/B) on PDF page 10, and Claim 1 on PDF page 2. Local `patents/JP_H11211978_A.pdf`, SHA-256 `5a6080f5d3627cbcfb6a5d98816ac6f35acdf7a8a86d5712c7fa05ca3113ce7c`, inspected 2026-10-30.
2. **Canon Camera Museum — EF35mm f/1.4L USM.** Product specifications and block diagram: <https://global.canon/en/c-museum/product/ef346.html>
3. **Canon Camera Museum — EOS / EF system history.** EF mount and EOS system context: <https://global.canon/en/c-museum/history/story07.html>
4. **OHARA Optical Glass Catalog.** Current coordinate tables used only to test catalog compatibility, not to identify the production melts: <https://www.ohara-inc.co.jp/en/product/01000/>; S-TIM27 data: <https://www.ohara-inc.co.jp/assets/en/product/pdf/estim27.pdf>; legacy S-LAH66 comparison: <https://www.ohara-inc.co.jp/en/news/2025/0127/14998/>
5. **CDGM Optical Glass Database.** Cross-vendor coordinate/equivalence tables used to confirm that the patent pairs are not vendor-unique: <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 9,301 passed, 2,279 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.299794800 |           0.300000 | 193 / 173 / 120                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 33.724995% at zoom 0, focus 0.05, aberration control 0: Gaussian 3.976500274 m versus label 6.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
