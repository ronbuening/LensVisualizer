# YASHICA YASHINON-DX 21mm f/3.3

## Patent Reference and Design Identification

**Patent:** JP1969-024068<br>
**Application Number:** Japanese Patent Application Sho 41-37065<br>
**Filed:** 1966-06-10<br>
**Published:** 1969-10-13<br>
**Inventor:** Iwatatsu Fujioka<br>
**Applicant:** Yashica Co., Ltd.<br>
**Title:** 大口径比広角写真レンズ (*Large-aperture-ratio wide-angle photographic lens*)
**Embodiment analyzed:** Example 1

The prescription is JP1969-024068 Example 1. The patent gives a normalized focal length of 100.0, an aperture ratio of 1:3.3, and a 92° included field, with eight glass elements shown in Figure 1 (pp. 3 and 5). The LensVisualizer data file applies the fixed project correlation to the production YASHICA YASHINON-DX 21mm f/3.3; this correlation is not presented as a manufacturer-confirmed patent attribution.

The production relationship is supported by several convergent source facts. Yashica's TL-E manual lists the Yashinon-DX 21mm f/3.3 as an eight-element, five-group, 92° lens and places it among the screw-thread interchangeable lenses. The same manual gives a special mounting sequence for the 21mm and directs composition through the lens's exclusive finder. A later Yashica TL Electro-X ITS manual lists the 21mm f/3.3 with a 0.8 m minimum focus and 55 mm screw-in filter. These production specifications align with the selected patent example's focal ratio, field, and optical count without establishing an explicit corporate statement that Example 1 became the production lens.

The patent prescription is normalized to $f=100$. The data file uses a uniform scale factor $s=0.21$ for the source-published radii, axial spacings, and stop station. The patent does not publish semi-diameters, so those are inferred directly in the scaled model rather than scaled from source values; the image-space distance is recomputed from the scaled prescription. The resulting Gaussian design focal length is 21.001562506 mm, kept separate from the marketed 21 mm focal length. There are no aspherical surfaces, so no asphere-coefficient scaling is required.

The patent directly places the diaphragm 3.5 normalized units behind surface r7. After scaling, the original r7-to-r8 air gap is therefore split into 0.7350 mm from surface 7 to `STO` and 0.3927 mm from `STO` to surface 8. The physical stop diameter is not published; `STO.sd` is a modeling value calibrated to reproduce the patent's f/3.3. Surface semi-diameters are also modeled rather than source-published and are discussed in the verification section below.

## Optical Architecture

The physical prescription contains eight elements in five air-separated groups:

`L1 | L2+L3 | L4 | L5+L6+L7 | L8`

The patent's functional grouping is different from that physical group count. Functional Group I is L1; Group II is L2 through L4; Group III is the cemented L5-L6-L7 triplet; and Group IV is L8. The diaphragm lies between Groups II and III. In functional-power terms the sequence is negative-positive-positive-negative.

This distinction matters because the individual element powers do not by themselves describe the powered blocks. L2 is a strong positive element in isolation and L3 is a strong negative element, yet their cemented D1 pair is only weakly negative, with a computed air-bounded equivalent focal length of -484.276567 mm. Adding the air-separated positive L4 changes the complete patent Group II to a net positive block with an equivalent focal length of +17.913828 mm. Similarly, the L5-L6-L7 triplet contains two negative elements around one positive element, but the cemented T1 assembly is net positive with an equivalent focal length of +31.833619 mm. These are assembly powers computed from the actual data-file spacings and media; they are not replacements for the standalone element focal lengths listed below.

The architecture is therefore not accurately summarized by the signs of the eight individual lenses alone. Negative menisci at L1 and L8 bracket two net-positive central functional groups, while the stop separates the two inner positive blocks. This is the patent's wide-angle power distribution rather than a telephoto arrangement. From the final prescription, total track divided by EFL is 2.57345, so it fails the project telephoto criterion `TL/EFL < 1`. The computed rear vertex-to-image BFD is 7.838028 mm, or 0.37321 EFL, so it also fails the project retrofocus criterion `BFD > EFL`. Yashica's special 21mm mounting procedure and exclusive finder are consistent with a lens whose rear optical assembly sits unusually close to the film plane, but the manual does not itself state the computed back focal distance.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.67000, νd = 57.3. Glass: 670573 d-line class (historical vendor unresolved). f = -23.455464 mm.**

L1 is the complete patent Group I and supplies the front negative power. The patent places explicit constraints on this first lens: `n1 > 1.6`, `ν1 > 53`, and `r2 > 0.45f`. In the patent discussion these conditions are tied to obtaining the required negative power for a large field while controlling the spherical-aberration and coma burden associated with that power. The final data satisfy all three conditions.

Because L1 is an air-bounded single element, its listed focal length is both its standalone element power and the power of functional Group I. Its negative power should not be conflated with the net positive behavior of the central assemblies that follow it.

### L2 — Biconvex Positive, front member of D1

**nd = 1.71700, νd = 47.9. Glass: 717479 d-line class (historical vendor unresolved). f = +10.813995 mm.**

L2 is individually positive and begins the cemented D1 pair. Its short standalone focal length indicates substantial positive power when considered by itself, but the cemented pair must be evaluated as an assembly because L3 follows immediately at the shared interface.

The patent constrains the L2-L3 material and interface relationship through `0.02 < n2 - n3 < 0.15` and `0.5f < |r4| < f`. Those conditions act on the pair rather than on L2 as an isolated singlet. In the final prescription the complete D1 pair is weakly negative, not strongly positive.

### L3 — Biconcave Negative, rear member of D1

**nd = 1.64328, νd = 47.8. Glass: 643478 d-line class (historical vendor unresolved). f = -8.294325 mm.**

L3 provides strong negative standalone power directly behind L2. At the cemented r4 interface the data file correctly changes to L3's refractive index and element identity, so the pair is treated as a true cemented doublet rather than as two air-spaced singlets.

The opposing standalone powers of L2 and L3 almost cancel in the assembled doublet: D1 has an equivalent focal length of -484.276567 mm. The more relevant in-situ result is therefore the full functional Group II, where D1 is followed by the separate positive L4 and the block becomes net positive.

### L4 — Biconvex Positive

**nd = 1.64085, νd = 56.8. Glass: 641568 d-line class; LACL1 catalog equivalent (production supplier unspecified). f = +13.584363 mm.**

L4 is air-spaced behind D1 and completes patent Group II. Its positive standalone power shifts the full L2-L4 functional block from the weakly negative D1 result to a net positive equivalent focal length of +17.913828 mm. That difference is an example of why isolated-element power, cemented-subassembly power, and the behavior of the complete functional group must remain separate.

The patent conditions `n4 > 1.6`, `r6 > 0.4f`, and `r7 < 0` apply to this part of the central design. Surface 7 is followed by the source-published stop position inside the air space before L5.

### L5 — Biconcave Negative, front member of T1

**nd = 1.58900, νd = 48.6. Glass: 589486 d-line class; BAF6 catalog equivalent (production supplier unspecified). f = -13.395826 mm.**

L5 begins the cemented T1 triplet immediately behind the stop. Its standalone power is negative, but it is not an independent air-bounded group in the assembled lens. The next two elements share cemented interfaces with it, so the triplet's combined transfer behavior is the meaningful functional quantity.

The patent treats L5-L7 as functional Group III and constrains the three refractive indices as `n5 < n6 < n7`, with `n6 - n5 < 0.1`. The final data satisfy both relations.

### L6 — Biconvex Positive, middle member of T1

**nd = 1.62230, νd = 53.1. Glass: 622531 d-line class (historical vendor unresolved). f = +7.236541 mm.**

L6 supplies the central positive member of the triplet and has the strongest positive standalone power of the eight elements. That standalone value does not make the triplet equivalent to a single +7.24 mm lens: the negative L5 and L7 surfaces and the finite glass thicknesses substantially alter the combined power.

Together with L5 and L7, L6 forms a net positive cemented assembly with an equivalent focal length of +31.833619 mm. This cemented result is also the power of patent Group III because no additional air-spaced element belongs to that functional group.

### L7 — Negative Meniscus, rear member of T1

**nd = 1.71736, νd = 29.5. Glass: 717295 d-line class (historical vendor unresolved). f = -20.505852 mm.**

L7 closes the triplet with negative standalone power and carries the lowest Abbe number in the prescription. The patent also requires `r9 > 0.3f` within this triplet region. The final Example 1 data satisfy that condition along with the index-order conditions governing L5-L7.

No anomalous-dispersion interpretation is attached to L7 despite its low νd. The patent supplies no `nC`, `nF`, `ng`, or `dPgF` values, and the data file deliberately avoids importing line data from a merely coordinate-compatible modern catalog glass.

### L8 — Negative Meniscus

**nd = 1.57099, νd = 51.0. Glass: 571510 d-line class; BAFL2 catalog equivalent (production supplier unspecified). f = -24.970353 mm.**

L8 is the complete patent Group IV and supplies the rear negative power that brackets the positive central blocks. As an air-bounded single element, its standalone focal length is also the power of the fourth functional group.

As a modeling interpretation, L8's position close to the image plane is part of the design's short rear working geometry. The quantitative back focal distance is a property of the complete prescription, however, and cannot be assigned to L8 alone.

## Glass Identification and Selection

The patent does not name a glass manufacturer, but it does explicitly define $n_i$ as the refractive index of the glass at the d-line on patent p. 1. The data file therefore preserves `indexReference: "d"` as a source fact and uses neutral six-digit d-line classes rather than historical vendor claims.

| Element | Data-file class | nd | νd | Independent catalog comparator | Δn | Δνd |
| --- | --- | ---: | ---: | --- | ---: | ---: |
| L1 | 670573 | 1.67000 | 57.3 | HOYA LACL7 | -0.000004 | +0.0084 |
| L2 | 717479 | 1.71700 | 47.9 | OHARA S-LAM3 | 0.000000 | +0.0200 |
| L3 | 643478 | 1.64328 | 47.8 | SUMITA K-BaF9 | 0.000000 | 0.0000 |
| L4 | 641568 | 1.64085 | 56.8 | HOYA LACL1 | +0.000001 | +0.0353 |
| L5 | 589486 | 1.58900 | 48.6 | HOYA BAF6 | +0.000003 | -0.0560 |
| L6 | 622531 | 1.62230 | 53.1 | HOYA BACED2 | 0.000000 | +0.0123 |
| L7 | 717295 | 1.71736 | 29.5 | SUMITA K-SFLD1 | 0.000000 | 0.0000 |
| L8 | 571510 | 1.57099 | 51.0 | HOYA BAFL2 | -0.000001 | -0.1411 |

These are catalog-coordinate comparators, not evidence that Yashica bought those exact vendor glasses. The HOYA checks use its 2026 Zemax catalog including obsolete glasses; OHARA S-LAM3 is checked against OHARA's current d-line table; the SUMITA matches use its current downloadable catalog. LACL1, BAF6, and BAFL2 now provide qualified runtime dispersion curves, while the production supplier remains unspecified and no `nC`, `nF`, `ng`, or `dPgF` is imported into the prescription. No APO or anomalous-partial-dispersion claim is made.

## Focus Mechanism

The focus status is `NO_INTERNAL_RECONSTRUCTION`. JP1969-024068 Example 1 publishes one fixed optical prescription and gives no finite-object spacing table, magnification row, or internal group-motion prescription. The data file therefore has an empty `var` object and defines no focus movement.

The production 0.8 m minimum focus is retained as manufacturer metadata. It is not used to infer unit focusing, inner focusing, floating motion, or a close-focus back focal distance. The reviewed manufacturer material establishes the marketed minimum focus but does not provide the optical kinematics needed to reconstruct a finite-focus prescription. The LensVisualizer model therefore represents only the source-published fixed state.

## Conditional Expressions

JP1969-024068 states a set of design inequalities for the four functional groups. Re-evaluation from the final data arrays gives:

| Patent condition | Example 1 |
| --- | --- |
| `n1 > 1.6` | Pass |
| `ν1 > 53` | Pass |
| `r2 > 0.45f` | Pass |
| `n2 > 1.6` | Pass |
| `0.02 < n2 - n3 < 0.15` | Pass |
| `0.5f < |r4| < f` | Pass |
| `n4 > 1.6` | Pass |
| `r6 > 0.4f` | Pass |
| `r7 < 0` | Pass |
| `n5 < n6 < n7` | Pass |
| `n6 - n5 < 0.1` | Pass |
| `r9 > 0.3f` | Pass |

The conditions are evaluated from the source-equivalent scaled prescription. Scaling does not alter the refractive-index conditions, and the radius-to-focal-length inequalities remain invariant under the same uniform scale applied to both sides.

## Verification Summary

The final data arrays were checked independently with reduced-angle y-ν tracing and an ABCD matrix cross-check. The computed EFL is 21.001562506 mm, and the rear vertex-to-image distance is 7.838027884 mm. The stop calibration gives a modeled wide-open f-number of 3.300000000 to numerical precision. These are design-model quantities; the production labels remain 21 mm and f/3.3.

Petzval was recomputed surface by surface as `φ/(n·n′)`. Restored to the patent's f=100 normalization, the sum is -0.039114348, agreeing with the patent's printed -0.0391 to the source table's precision. The same calculation reproduces the individual patent P-column entries within their four-decimal rounding.

The patent does not publish semi-diameters. The data-file values are modeling inferences constrained by exact spherical ray tracing at the calibrated f/3.3 stop, including the complete on-axis pupil, the default 0.6-field pupil, and the 46° chief ray. They were then checked for positive element edge thickness, actual rim slope, and cross-gap surface intrusion. These semi-diameters are therefore visualization/model geometry, not measurements of the production barrel or patent table values.

The modeled prescription retains every patent radius, internal spacing, refractive index, and Abbe number without numerical correction. No cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical surface occurs in the worked Example 1 prescription, so none is represented as an optical surface. The only added axial plane is the explicit `STO` split at the patent-published diaphragm station, and the final surface spacing is the independently computed paraxial image distance.

## Sources / References

1. **JP1969-024068**, Yashica Co., Ltd., Iwatatsu Fujioka, *大口径比広角写真レンズ* (*Large-aperture-ratio wide-angle photographic lens*), published 1969-10-13. Example 1 prescription and specifications on p. 3; Petzval/aberration table and claim conditions on p. 4; optical section in Figure 1 on p. 5.
2. **Yashica TL-E Instruction Booklet**, Yashica Co., Ltd. Manufacturer-produced manual scan: https://www.cameramanuals.org/yashica_pdf/yashica_tl-e.pdf. The interchangeable-lens section documents the screw-thread mount, special 21mm mounting procedure, exclusive finder, and the Yashinon-DX 21mm f/3.3 lens table.
3. **Yashica TL Electro-X ITS Instruction Booklet**, Yashica Co., Ltd. Manufacturer-produced manual scan: https://www.cameramanuals.org/yashica_pdf/yashica_tl_electro_x_its.pdf. The interchangeable-lens table lists the 21mm f/3.3 with 0.8 m minimum focus and 55 mm screw-in filter.
4. **OHARA Optical Glass Catalog**, current d-line product table and catalog downloads: https://www.ohara-inc.co.jp/en/product/01000/ and https://www.ohara-inc.co.jp/en/product/catalog/. Used only for catalog-coordinate comparison, notably S-LAM3.
5. **HOYA Optical Glass Data**, 2026 Zemax catalog including obsolete glasses: https://www.hoya-opticalworld.com/english/datadownload/index.html. Used only for catalog-coordinate comparison.
6. **SUMITA Optical Glass Data**, downloadable optical-glass catalog: https://www.sumita-opt.co.jp/en/download/. Used only for catalog-coordinate comparison, notably K-BaF9 and K-SFLD1.
