## Patent Reference and Design Identification

**Patent:** US 4,176,913 A\
**Application Number:** US 05/900,794\
**Priority:** April 28, 1977\
**Filed:** April 27, 1978\
**Granted / Published:** December 4, 1979\
**Inventors:** Soichi Nakamura; Kiyoshi Hayashi\
**Assignee:** Nippon Kogaku K.K.\
**Title:** *Telephoto Lens with Large Relative Aperture*\
**Embodiment analyzed:** Example 2 / Second Embodiment (FIG. 2)

The prescription modeled here is the Second Embodiment of US 4,176,913 A. The patent publishes a 200.0 mm, f/2.0, positive–negative–positive internal-focus system for 35 mm still photography and gives the complete numerical prescription for FIG. 2. The production correlation is the user-selected Nikon Ai Nikkor ED 200mm F2S (IF); the prescription itself remains patent-derived rather than manufacturer-published.

The correlation rests on several convergent features:

1. The patent's Second Embodiment is exactly 200.0 mm at f/2.0, matching the production lens's marketed focal length and maximum aperture.
2. The modeled prescription has 10 elements in 8 air-separated groups. Nikon's historical account gives the same 10-element architecture and identifies the first two front elements as ED glass.
3. Both sources describe a fixed three-element front group, a three-element concave internal-focusing group, and a fixed rear positive group. Nikon additionally states that the final concave element of the rear group reduces the Petzval sum, matching L33 in FIG. 2.
4. Nikon records Kiyoshi Hayashi as the optical designer, with the optical design completed in 1976, production drawings released in November 1976, and the initial press-only Ai Nikkor ED 200mm F2S (IF) release in April 1977. Hayashi is also one of the two inventors named on the patent, whose priority date is April 28, 1977.

Nikon does not state on the historical product page that US 4,176,913 A is the production prescription. The identification is therefore a production-to-patent correlation supported by architecture, chronology, designer attribution, and optical specifications rather than an explicit manufacturer patent citation.

## Optical Architecture

The model contains 10 glass elements in 8 air-separated groups, organized into three functional power groups. The first group G1 is positive and fixed, the middle group G2 is negative and translates for focusing, and the rear group G3 is positive and fixed. Independent paraxial tracing of the final data gives group focal lengths of approximately +180.000532 mm, −89.999908 mm, and +99.999985 mm, reproducing the patent's published +180/−90/+100 mm allocation.

The patent describes the system as a large-relative-aperture telephoto lens and treats the first positive group plus the moving negative group as approximately afocal at infinity. LensVisualizer uses a stricter geometric taxonomy: with the image plane normalized to the computed paraxial focus, the front-vertex-to-image track is 244.659683 mm and TL/EFL is 1.22330. The modeled prescription therefore does not satisfy the project's `TL/EFL < 1` criterion for a telephoto classification, even though “telephoto” is the patent's and Nikon's historical terminology. It is also not retrofocus because its computed BFD is 63.596683 mm, substantially shorter than its EFL.

G1 comprises two positive ED elements, L11 and L12, followed by negative L13. Nikon assigns this front group the primary work of controlling chromatic aberration, spherical aberration, and lower coma. The patent likewise constrains the front-group power and the shape relationship of L12 and L13 so that the correction does not become unstable as the internal group moves.

G2 comprises the cemented L21 pair followed by the separate negative L22. Its complete three-element assembly moves as a rigid unit. The patent intentionally leaves a large air space between L21 and L22; its condition (6) ties that spacing to coma and astigmatism balance and to the physical size of the focusing assembly.

G3 is the principal distinction of the Second Embodiment. Instead of the three-lens cemented rear component of the basic embodiment, FIG. 2 separates the front positive member L31 from the cemented L32 pair and adds the final negative L33. The patent states that this converging-front/diverging-rear arrangement reduces Petzval sum and improves coincidence of meridional and sagittal image planes. Nikon independently describes the production lens's last concave element as serving the same Petzval-reducing role.

All refracting surfaces are spherical. No dimensional scaling is applied to the patent prescription.

## Element-by-Element Analysis

### L11 — Biconvex Positive

**nd = 1.50032, νd = 81.9. Glass: J-FKH1 catalog-equivalent coefficient proxy. f = +293.557 mm.**

L11 is the first positive collector in G1. Nikon identifies the first two production elements as ED glass, but the patent supplies only refractive index and Abbe number, not a catalog name or spectral-line indices. The data therefore preserves the ED identity as a manufacturer-supported class statement without assigning a specific historical melt.

The patent uses the standalone focal length of this component, $f_{11}$, in condition (4). In the final model $f_{11}/f_1 = 1.63087$, within the patent's prescribed range. The patent associates this front-component power allocation with control of spherical aberration and astigmatism rather than allowing the first positive member to become excessively strong.

### L12 — Biconvex Positive

**nd = 1.50032, νd = 81.9. Glass: J-FKH1 catalog-equivalent coefficient proxy. f = +191.262 mm.**

L12 is the second ED positive element of the fixed front group. Together with L11 it supplies most of the front-group positive power while keeping dispersion low. Nikon describes the two ED elements and L13 as the critical three-element front assembly for chromatic, spherical, and lower-coma correction.

The patent couples the image-side surface of L12 to the object-side surface of L13 in condition (9). That condition is explicitly chromatic: the text states that the L12/L13 relationship improves achromatism while avoiding excessive change of coma with color and excessive lateral chromatic aberration.

### L13 — Biconcave Negative

**nd = 1.75520, νd = 27.5. Glass: E-FD4 catalog-equivalent coefficient proxy. f = −300.265 mm.**

L13 completes the fixed front group and offsets part of the power of the two large positive ED elements. Its higher index and much lower Abbe number provide the opposite dispersion sign needed for the front group's chromatic balance. The data deliberately identifies only the six-digit coordinate class; current catalog coincidences do not establish which supplier or melt was used in production.

The complete G1 focal length is +180.000532 mm. L13's standalone negative focal length should not be confused with that in-situ group power: G1 remains strongly positive after the three separated elements are combined.

### L21a — Positive Meniscus, Cemented Front Member

**nd = 1.79504, νd = 28.4. Glass: J-LAFH3 catalog-equivalent coefficient proxy. f = +229.602 mm.**

L21a is the high-index, low-Abbe front member of the cemented component in the translating focus group. Its standalone power is positive, but it is cemented directly to the stronger negative L21b; the pair as a whole is weakly negative.

The cemented pair's independently traced net focal length is approximately −972.851 mm. That net value is a property of the two-element cemented component, not of either individual element and not of the complete moving G2.

### L21b — Biconcave Negative, Cemented Rear Member

**nd = 1.46450, νd = 65.8. Glass: FK3 catalog-equivalent coefficient proxy. f = −186.923 mm.**

L21b provides the negative member of the L21 cemented pair and uses a substantially higher Abbe number than L21a. The patent's condition (10), based on the cemented interface radius, is directed at achromatism of the diverging group. The pair therefore supplies a chromatically balanced weak negative component ahead of the much stronger L22.

Because L21a and L21b are cemented, their standalone focal lengths are useful only for component decomposition. The optical action relevant to the focus group is the cemented pair's net negative power combined in situ with L22 and their 21.5 mm air separation.

### L22 — Biconcave Negative

**nd = 1.46450, νd = 65.8. Glass: FK3 catalog-equivalent coefficient proxy. f = −102.279 mm.**

L22 is the strongest standalone negative component in the translating focus group. The complete G2 focal length is −89.999908 mm, so L22 supplies most of the group's negative power while L21 adds weaker negative power and chromatic correction.

The patent gives L22 special shape constraints. Condition (11) limits the ratio formed by its two radii because the patent associates departures on either side of the allowed range with asymmetric coma of opposite signs. The independently evaluated shape factor is 0.40772, inside the stated range.

### L31 — Biconvex Positive

**nd = 1.69350, νd = 53.6. Glass: H-LaK6A catalog-equivalent coefficient proxy. f = +108.359 mm.**

L31 is the first positive element of the fixed rear group. In the Second Embodiment it is separated by air from L32 rather than being part of the fully cemented three-lens component used in the basic embodiment. The patent states that opening one of the formerly cemented interfaces into an air space increases freedom for aberration correction.

L31 carries substantial standalone positive power and begins the converging portion of G3. Its role should be distinguished from the net +99.999985 mm focal length of the complete rear group, which also includes the L32 cemented pair and the final negative L33.

### L32a — Biconcave Negative, Cemented Front Member

**nd = 1.59507, νd = 35.6. Glass: FF5 catalog-equivalent coefficient proxy. f = −79.471 mm.**

L32a is the negative front member of the rear cemented component. It is bonded to positive L32b at surface 15. The negative-positive combination makes the cemented pair only weakly positive in net power despite the relatively strong standalone powers of both members.

### L32b — Biconvex Positive, Cemented Rear Member

**nd = 1.69680, νd = 55.6. Glass: K-LaK14 catalog-equivalent coefficient proxy. f = +67.742 mm.**

L32b is the positive member of the rear cemented pair. Independent tracing gives the L32 cemented component a net focal length of approximately +396.111 mm. As with L21, that cemented net power is distinct from the individual-element focal lengths and from the in-situ power of the full rear group.

The patent's condition (12) constrains the relevant cemented curvature in the rear positive portion for chromatic correction. In the Second Embodiment, the remaining cemented interface gives $r_e/f_3 = 0.61000$, within the stated range.

### L33 — Negative Meniscus

**nd = 1.46450, νd = 65.8. Glass: FK3 catalog-equivalent coefficient proxy. f = −482.630 mm.**

L33 is the final negative element and the diverging rear member added in the Second Embodiment. Nikon explicitly identifies the production lens's last concave element as reducing the Petzval sum. The independent surface-by-surface Petzval calculation supports that interpretation: L33's two surfaces contribute a net −0.00142225 mm⁻¹ to the system Petzval sum.

Its optical function is therefore not simply to add negative focal power. In combination with the preceding positive rear elements it modifies field curvature and astigmatic balance while leaving the complete G3 positive.

## Glass Identification and Selection

The patent publishes only refractive index and Abbe number. It does not identify suppliers, commercial glass names, Fraunhofer C/F/g line indices, partial-dispersion ratios, or anomalous-dispersion deviations. The data therefore preserves every patent coordinate and uses modern catalog curves only as coordinate-compatible spectral proxies. Those proxy names do not identify the production supplier or historical melt.

| Data glass annotation | nd | νd | Elements | Interpretation in this model |
|---|---:|---:|---|---|
| J-FKH1 coefficient proxy (patent 500819) | 1.50032 | 81.9 | L11, L12 | Nikon-supported ED position; production supplier unspecified |
| E-FD4 coefficient proxy (patent 755275) | 1.75520 | 27.5 | L13 | High-index, low-Abbe negative front-group partner |
| J-LAFH3 coefficient proxy (patent 795284) | 1.79504 | 28.4 | L21a | High-index, low-Abbe member of focus cemented pair |
| FK3 coefficient proxy (patent 465658) | 1.46450 | 65.8 | L21b, L22, L33 | Lower-index, high-Abbe negative members in focus and rear groups |
| H-LaK6A coefficient proxy (patent 694536) | 1.69350 | 53.6 | L31 | Positive rear-group glass |
| FF5 coefficient proxy (patent 595356) | 1.59507 | 35.6 | L32a | Negative member of rear cemented pair |
| K-LaK14 coefficient proxy (patent 697556) | 1.69680 | 55.6 | L32b | Positive member of rear cemented pair |

The chromatic strategy is visible in the repeated pairing of low-dispersion positive material with higher-dispersion negative material, especially in G1 and the two cemented components. The patent's conditions (9), (10), and (12) explicitly discuss achromatism or chromatic correction in those regions. Coefficient-backed tracing now covers all ten elements, but the assignments remain supplier-neutral proxies and the patent contains no `nC`, `nF`, `ng`, or `dPgF`. Only L11 and L12 carry an inferred ED/APD classification, based on Nikon's explicit production-element identification; no broader apochromatic claim is made.

## Focus Mechanism

Focusing is internal and is **PUBLISHED**, not reconstructed. The complete negative G2 assembly—L21a, L21b, and L22—translates rigidly toward the image side for the published close state, while G1 and G3 remain fixed.

| Variable gap | Infinity | Published close state | Change |
|---|---:|---:|---:|
| D6, after G1 | 41.201 mm | 58.201 mm | +17.000 mm |
| D11, after G2 | 22.912 mm | 5.912 mm | −17.000 mm |
| D6 + D11 | 64.113 mm | 64.113 mm | 0.000 mm |

The constant D6+D11 sum confirms rigid translation of the entire focusing group. The patent states that a magnification of approximately β = −0.1 is obtained by shifting the diverging group 17 mm imageward from its infinity position.

With the final data file traced at the fixed infinity image plane, that published endpoint corresponds paraxially to an object 2086.586 mm in front of the first optical vertex, **2.3312457 m from object to image plane**, and β = −0.104938. If β is constrained exactly to −0.100000, the best paraxial image plane moves 0.985681 mm forward from the infinity image plane and the corresponding object distance from the first vertex is 2180.516 mm. The small discrepancy is retained as source-precision behavior; no patent spacing is altered to force the rounded β label.

The data file's `closeFocusM` field is therefore **2.3312457 m**, so the viewer's close-end distance label describes the modeled patent endpoint. A period Nikon sales manual instead specifies a marketed 2.5 m minimum focusing distance for the production lens. That product value is not substituted into the patent-derived focus state.

## Chromatic Correction Strategy

Nikon identifies L11 and L12 as ED elements and describes the three-element front group as responsible for chromatic correction together with spherical-aberration and lower-coma control. The patent's own design logic is broader than simply specifying low-dispersion glass: it distributes chromatic correction among the front group, the cemented focus component, and the rear cemented component through curvature and power constraints.

In G1, the two low-dispersion positive elements are followed by the 755275-class negative L13. Condition (9) specifically constrains the L12/L13 surface-power relationship for achromatism and for control of color-dependent coma and lateral chromatic aberration. In G2, the cemented L21 pair combines markedly different Abbe numbers and is governed by condition (10), which the patent associates with better achromatism of the diverging group. In G3, condition (12) constrains the cemented rear interface for chromatic correction at the large f/2 relative aperture.

These statements concern the patent's chromatic design intent and the manufacturer-supported ED designation. They do not elevate the model to an APO or anomalous-partial-dispersion classification because the required line-index or partial-dispersion data are absent.

## Aberration Correction Strategy

The patent's central design choice is to distribute power so that short-distance focusing can be achieved by moving only the negative middle group without allowing spherical aberration, astigmatism, and coma to vary excessively. It explicitly rejects both an excessively strong front positive group and an excessively strong or weak diverging group because those allocations increase higher-order aberrations, front-aperture requirements, focus travel, or Petzval/field-curvature problems.

The Second Embodiment adds another degree of freedom in the rear group. L31 is separated from the L32 cemented pair, and L33 provides a weak final negative component. The patent states that the converging-front/diverging-rear construction reduces Petzval sum and improves meridional/sagittal coincidence. The independent Petzval total of the final prescription is +0.00107287643 mm⁻¹, while L33 itself contributes negatively to that sum.

The patent's FIGS. 5A–5C show its aberration comparison for the Second Embodiment at infinity and at β≈−0.1. The outer chart field is marked y = 22.1 mm at 6.16°, consistent with a 35 mm still-camera image field. Those curves are source evidence of the design target; the present analysis does not attempt to reconstruct full monochromatic or polychromatic aberration curves from the paraxial model.

## Conditional Expressions

The patent gives one focal-length relationship and eleven preferred inequalities. All applicable conditions pass when evaluated with the final prescription and independently traced component/group powers.

| No. | Patent expression | Evaluated value | Result |
|---:|---|---:|---|
| 1 | $f=f_1(f_3/-f_2)$ | 180×(100/90) = 200 | Satisfied |
| 2 | $0.8<f_1/f<1.0$ | 0.900000 | Pass |
| 3 | $0.3<|f_2|/f<0.6$ | 0.449998 | Pass |
| 4 | $1.0<f_{11}/f_1<3.3$ | 1.630869 | Pass |
| 5 | $0.8<|f_{22}|/|f_2|<1.5$ | 1.136432 | Pass |
| 6 | $0.15<D/|f_2|<0.35$ | 0.238889 | Pass |
| 7 | $-1.3<(r_1+r_2)/(r_1-r_2)<0$ | −0.459459 | Pass |
| 8 | $-4.0<(r_3+r_a)/(r_3-r_a)<0$ | −1.707940 | Pass |
| 9 | $-1.2<f_1/r_5\le f_1/r_4<0$ | −0.375001 ≤ −0.300001 | Pass |
| 10 | $0.7<|r_b|/|f_2|<2.3$ | 1.388890 | Pass |
| 11 | $-0.5<(r_c+r_d)/(r_c-r_d)<1.0$ | 0.407719 | Pass |
| 12 | $0.3<r_e/f_3<2.0$ | 0.610000 | Pass |

For the Second Embodiment, $D$ is the 21.5 mm air space between L21 and L22; $r_b$ is the L21 cemented surface; $r_c$ and $r_d$ are the two surfaces of L22; and the remaining cemented surface in the rear positive portion provides $r_e$ for condition (12).

## Verification Summary

The final data separates published or marketed quantities from computed model quantities.

| Quantity | Source / status | Value |
|---|---|---:|
| Marketed / patent focal length | Source fact | 200.0 mm |
| Recomputed infinity EFL | Computed from final TypeScript arrays | 200.000531 mm |
| Marketed / patent maximum aperture | Source fact | f/2.0 |
| Modeled wide-open f-number | Computed with inferred stop | f/2.000005 |
| Infinity BFD from r18 | Computed | 63.596683 mm |
| Front-vertex-to-image track | Computed | 244.659683 mm |
| Published focus-group translation | Source fact | 17.000 mm imageward |
| Fixed-plane close magnification | Computed | β = −0.104938 |
| Petzval sum | Computed surface by surface as $\phi/(n n')$ | +0.00107287643 mm⁻¹ |

The aperture stop is a modeling inference because the Second Embodiment does not tabulate a stop position or diameter. Nikon's official production cross-section places the diaphragm in the patent's 22.000 mm air space between r16 and r17. The data preserves that total spacing by splitting it into 12.000 mm before `STO` and 10.000 mm after `STO`. The stop semi-diameter, 19.210431 mm, is solved so that the infinity-state entrance-pupil semi-diameter is 50.000000 mm; combined with the recomputed EFL, this yields the modeled f/2.000005 value used by `nominalFno`.

The patent also does not publish clear semi-diameters. All authored `sd` values are therefore modeling inferences constrained by the modeled entrance pupil, the Nikon production cross-section, FIG. 2 proportions, and geometry checks. The focus and rear groups were enlarged from their draft values to follow the optical rims in FIG. 2 more closely; they are not presented as patent values. A 600 dpi follow-up compared the optical rims directly and retained the resulting envelope; leader lines around L31–L33 were excluded from the measurement. Edge thickness, actual spherical rim slope, and shared-band cross-gap intrusion all pass at both defined focus states in the independent verification.

No patent numerical prescription value has been corrected, and no dimensional scale factor is applied. The model omits a protective front filter: the selected patent embodiment does not contain one, and Nikon states that a protective front element was introduced later with the December 1985 “New” production revision. There are no aspheres, dummy optical planes, folded paths, or reconstructed intermediate focus states in this model.

## Sources / References

1. Soichi Nakamura and Kiyoshi Hayashi, **US 4,176,913 A, “Telephoto Lens with Large Relative Aperture,”** granted December 4, 1979. Numerical prescription: Second Embodiment / FIG. 2. https://patents.google.com/patent/US4176913A/en
2. Haruo Sato, **“NIKKOR — The Thousand and One Nights No.31: Ai Nikkor ED 200mm F2S (IF),”** Nikon Imaging. Used for production identity, release chronology, designer attribution, two-ED-element description, group architecture, final Petzval-reducing concave element, and the production cross-section. https://imaging.nikon.com/imaging/information/story/0031/
3. **Nikon Nikkor lens sales manual, product no. 1465, “Nikkor ED 200mm f/2 IF,”** archival scan. Used only for the marketed 2.5 m minimum focusing distance and period product specification. https://device.report/m/5a3ae42587fef5c13485535d4643d2bb868746c9d8ce24cfbc7d419a613f4a46
