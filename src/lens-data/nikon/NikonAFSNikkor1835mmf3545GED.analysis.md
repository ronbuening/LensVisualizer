## Patent Reference and Design Identification

**Patent:** US 9,256,059 B2  
**Application Number:** 14/414,383; PCT/JP2013/068363  
**Filed:** July 4, 2013  
**Priority:** July 10, 2012 (JP 2012-154314)  
**Granted:** February 9, 2016  
**Inventors:** Kana Inoue; Mamoru Terada; Haruo Sato  
**Assignees:** Konica Minolta, Inc.; Nikon Corporation  
**Title:** Zoom Lens System, Imaging Optical Device, and Digital Appliance  
**Embodiment analyzed:** Example 1 (EX1)

Example 1 is the strongest candidate for the optical prescription behind the Nikon AF-S Nikkor 18-35mm f/3.5-4.5G ED. The identification rests on convergent optical and mechanical evidence rather than on assignee identity alone.

1. The patent prescription contains 12 physical lens elements in 8 air-spaced groups, matching Nikon's production specification.
2. The patent places two very-low-dispersion positive elements at `nd = 1.49700`, `νd = 81.61`, matching Nikon's published count of two ED elements.
3. The patent contains three aspherical lens elements: two hybrid composite aspheres in the first group and a double-sided aspherical final element. This matches Nikon's published count of three aspherical elements.
4. The Example 1 paraxial focal-length range is 18.50-34.00 mm, consistent with the marketed 18-35 mm range.
5. The patent F-number row gives f/3.6 at wide and f/4.63 at tele, close to the production f/3.5-4.5 designation after ordinary marketing rounding.
6. The maximum image height is 21.63 mm, giving a 43.26 mm image circle and confirming 135/full-frame coverage.
7. The patent uses a two-group negative-positive zoom layout with an inner focusing front subgroup in the positive second group. Nikon identifies the production lens as AF-S and IF.
8. The patent priority date, July 2012, precedes the 2013 production lens announcement window by the expected design-to-product interval.
9. The patent lateral-aberration diagrams give edge half-field angles of 51.18° at wide, 41.70° at mid, and 32.89° at tele for EX1. These correspond to full fields of approximately 102.4°, 83.4°, and 65.8°, close to Nikon's published 100°-63° FX angle of view. The patent's miscellaneous-data `2ω` row is not a conventional diagonal angle-of-view row and should not be used as the production-field check.

The data file transcribes Example 1 at infinity focus. It omits the plane-parallel cover plate PT from the surface array, as required by the project data specification, and folds its optical thickness into the final air-equivalent back focal distance.

## Optical Architecture

The design is a two-group retrofocus wide-angle zoom. From the object side, it consists of a negative first lens group Gr1 and a positive second lens group Gr2. Zooming is performed by changing the air gap between Gr1 and Gr2. The Gr1-Gr2 separation decreases from 26.973 mm at the wide end to 12.514 mm at the middle position and 1.850 mm at the tele end.

The first group Gr1 contains four air-spaced elements: three negative meniscus elements followed by a positive biconvex element. The front negative group supplies the retrofocus wide-angle behavior and provides the long back focal distance required for a Nikon F-mount SLR lens. Two of the negative menisci carry hybrid composite aspherical layers, which the patent associates with distortion and field-curvature correction.

The second group Gr2 is divided into a focusing front subgroup GrF, an aperture stop, and a rear subgroup GrR. GrF is a cemented negative-positive doublet. GrR contains three lens components: a positive cemented doublet, a negative three-element cemented lens LS, and a positive double-aspherical final element. The rear-group positive-negative-positive component sequence is an explicit part of the patent's aberration-correction strategy.

The paraxial focal lengths computed from the Example 1 prescription are:

| Unit | Patent value | Computed value |
|---|---:|---:|
| Gr1 | -26.69 mm | -26.695 mm |
| Gr2 | +38.19 mm | +38.192 mm |
| GrF | +80.86 mm | +80.861 mm |
| GrR | +57.98 mm | +57.984 mm |
| Three-element cemented lens LS | -29.60 mm | -29.602 mm |

The power ratio `f1/f2 = -0.699` places the design comfortably within the patent's preferred negative-positive zoom range.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object

`nd = 1.72916`, `νd = 54.67`. Glass: S-LAL18 (OHARA) class. `f = -55.1 mm`.

The first element is a strong negative meniscus with radii `+55.466 / +22.882 mm`. It collects the wide field and begins the retrofocus expansion of the entrance bundle. The high-index lanthanum crown permits strong negative bending without resorting to very low dispersion.

### L2 - Negative Meniscus with front composite aspherical layer

Substrate: `nd = 1.72916`, `νd = 54.67`, S-LAL18 (OHARA) class. Resin layer: `nd = 1.51400`, `νd = 53.00`. Composite `f = -55.8 mm`.

L2 is another negative meniscus convex to the object side. The object-side surface is a thin resin-on-glass composite asphere, patent surface *3. The element's role is primarily off-axis correction. In the first negative group, the wide-angle barrel-distortion and field-curvature burdens are high; a hybrid asphere is an economical way to add higher-order correction without making the entire glass blank aspherical.

### L3 - Negative Meniscus with rear composite aspherical layer

Substrate: `nd = 1.80420`, `νd = 46.50`. Glass: N-LASF44 (Schott) / 804465 dense lanthanum flint class. Resin layer: `nd = 1.51400`, `νd = 53.00`. Composite `f = -35.0 mm`.

This is the strongest negative element in Gr1. The earlier draft identified this glass as OHARA S-LAH65VS; the tighter catalog match is Schott N-LASF44, which gives the same 804465 glass code as the patent values. The safe description is therefore N-LASF44 / 804465 dense lanthanum flint class, not a definite OHARA S-LAH65VS identification.

The rear face is patent surface *8, the second hybrid composite asphere in the first group. The combination of high index and rear aspheric departure gives this element strong leverage over wide-angle distortion, astigmatism, and field curvature.

### L4 - Biconvex Positive

`nd = 1.68893`, `νd = 31.16`. Glass: S-TIM28 (OHARA) / 689311 dense flint class. `f = +47.7 mm`.

L4 is the only positive element in the negative first group. Its positive power partially offsets the three preceding negative menisci, while its high dispersion helps balance first-group chromatic behavior. The OHARA S-TIM28 match is a class match: the index matches closely, but the catalog Abbe number is slightly different from the patent value.

### L5 - Negative Meniscus, front element of GrF doublet

`nd = 1.80518`, `νd = 25.46`. Glass: S-TIH6 (OHARA) / SF6-class titanium heavy flint. `f = -70.3 mm`.

L5 is the negative element of the focusing doublet. It lies just in front of the aperture stop and works where marginal-ray height is still significant. Its very low Abbe number gives it the dispersion needed to balance the following positive element. The patent inserts a very thin `nd = 1.51400`, `νd = 42.80` cement medium between L5 and L6; the data file models this as an explicit 0.01 mm cement layer.

### L6 - Biconvex Positive, rear element of GrF doublet

`nd = 1.64769`, `νd = 33.84`. Glass: SF2 (Schott) class. `f = +37.1 mm`.

L6 supplies the positive power of the focusing doublet. Together with L5, it gives the front subgroup GrF a computed focal length of +80.861 mm. The SF2 identification is a close catalog match to the patent values and is preferable to forcing the glass into an OHARA designation.

This doublet is the internal focusing group. The patent states that focusing toward a close object is accomplished by moving the front group of Gr2 toward the image side. No close-focus spacing table is published, so the data file models only the infinity-focus zoom positions.

### L7 - Biconvex Positive ED element, front element of first GrR doublet

`nd = 1.49700`, `νd = 81.61`. Glass: S-FPL51 (OHARA) / FCD1-class ED fluorophosphate. `f = +28.1 mm`.

L7 is the first element behind the aperture stop and has the strongest standalone positive power in the rear group. Its ED-like low dispersion is central to the design's correction of longitudinal and lateral color. The data file records the patent `nd` and `νd` values as authoritative, with the glass string labeled as a class match.

### L8 - Biconcave Negative, rear element of first GrR doublet

`nd = 1.72916`, `νd = 54.67`. Glass: S-LAL18 (OHARA) class. `f = -60.9 mm`.

L8 is cemented behind L7, separated by another explicit 0.01 mm cement medium in the data file. It balances L7's positive power and participates in the ED achromatizing pair. Although both L7 and L8 are crown-side glasses by a simple Abbe-number boundary, their dispersion separation is still large: `81.61 - 54.67 = 26.94`.

### L9 - Negative Meniscus, first element of three-element cemented lens LS

`nd = 1.80420`, `νd = 46.50`. Glass: N-LASF44 (Schott) / 804465 dense lanthanum flint class. `f = -21.1 mm`.

L9 begins the negative-positive-negative cemented triplet that is the patent's distinguishing feature. The radii `+38.088 / +11.617 mm` make it a strong negative meniscus. As with L3, the catalog identification has been corrected to Schott N-LASF44 / 804465 class.

### L10 - Biconvex Positive ED element, center element of LS

`nd = 1.49700`, `νd = 81.61`. Glass: S-FPL51 (OHARA) / FCD1-class ED fluorophosphate. `f = +14.2 mm`.

L10 is the central positive element of LS and the strongest standalone positive lens in the whole prescription. It is bracketed by lower-Abbe negative elements, giving the triplet the prescribed dispersion differences: `ν2 - ν1 = 35.11` and `ν2 - ν3 = 26.94`. The strong positive ED element inside a net-negative cemented triplet is the core chromatic-correction mechanism claimed by the patent.

### L11 - Biconcave Negative, rear element of LS

`nd = 1.72916`, `νd = 54.67`. Glass: S-LAL18 (OHARA) class. `f = -15.6 mm`.

L11 completes the three-element cemented lens. It is biconcave, with radii `-13.915 / +63.311 mm`, and is the strongest negative member of the cemented triplet in standalone focal-length terms. The LS triplet has net focal length `-29.602 mm` and helps control Petzval curvature while its internal ED-positive element controls chromatic curvature of field and chromatic coma.

### L12 - Biconvex Positive, double aspherical final corrector

`nd = 1.58313`, `νd = 59.39`. Glass: S-BAL42 (OHARA) class. `f = +36.9 mm`.

L12 is the final glass element before the image plane and carries two aspherical surfaces, patent surfaces *26 and *27. Because L12 is far behind the stop, both marginal and chief ray heights are significant. This makes the element useful for balancing residual astigmatism, coma, and distortion across the zoom range.

## Glass Identification and Selection

The glass identifications in this revision use catalog matches conservatively. The patent gives `nd` and `νd` values but not glass names. Manufacturer catalogs are therefore used to identify exact, near, or class matches; the patent numerical values remain authoritative in the data file.

| Patent `nd` / `νd` | Catalog identification | Elements | Status |
|---:|---|---|---|
| 1.72916 / 54.67 | S-LAL18 (OHARA) | L1, L2 substrate, L8, L11 | Near exact; catalog `νd` differs by about 0.01 |
| 1.80420 / 46.50 | N-LASF44 (Schott) / 804465 dense lanthanum flint | L3 substrate, L9 | Exact six-digit glass-code match |
| 1.68893 / 31.16 | S-TIM28 (OHARA) / 689311 dense flint class | L4 | Index exact; Abbe number is a close class match |
| 1.80518 / 25.46 | S-TIH6 (OHARA) / SF6-class titanium heavy flint | L5 | Index exact; Abbe number is a close class match |
| 1.64769 / 33.84 | SF2 (Schott) | L6 | Near exact |
| 1.49700 / 81.61 | S-FPL51 (OHARA) / FCD1-class ED fluorophosphate | L7, L10 | Index exact; Abbe number is a close class match |
| 1.58313 / 59.39 | S-BAL42 (OHARA) | L12 | Near exact |
| 1.51400 / 53.00 | Hybrid composite asphere resin | L2 and L3 resin layers | Patent material value; not assigned to a glass catalog |
| 1.51400 / 42.80 | Optical cement/adhesive medium | Cement layers in GrF and GrR | Patent material value; not assigned to a glass catalog |

The corrected N-LASF44 / 804465 identification for L3 and L9 is the main glass-catalog change relative to the earlier analysis. The earlier S-LAH65VS naming was not adequately supported by the patent's `nd`/`νd` pair.

Because the patent publishes only d-line index and Abbe number, the companion data file deliberately omits structured `nC`, `nF`, and `ng` values. That keeps the prescription tied to the patent numbers and avoids falsely precise spectral data for catalog-class glass identifications.

## Focus Mechanism

Focusing is performed by the front subgroup GrF of the second lens group. GrF consists of L5, the first cement layer, and L6, corresponding to patent surfaces 11-14. The patent states that focusing toward a close object is achieved by moving this front subgroup toward the image side.

The patent does not publish close-focus spacings. It tabulates only the infinity-focus object distance `d0 = ∞` for all three zoom positions. Consequently, the data file does not invent focus travel. It represents the three infinity-focus zoom positions and records identical infinity/close values in the `var` table so the renderer can interpolate zoom movement without implying a reconstructed close-focus prescription.

The production lens minimum focus distance is 0.28 m, and the production maximum reproduction ratio is 0.2x. Those are manufacturer specifications, not values reconstructed from the patent prescription.

## Aspherical Surfaces

The patent uses the standard even-asphere sag equation:

$$
Z(h) = \frac{ch^2}{1 + \sqrt{1 - (1+K)c^2h^2}} + \sum A_jh^j
$$

where `c = 1/R`, `K` is the standard conic constant, and `K = 0` gives a spherical base. No offset convention is used.

**Surface *3 / data label `3A` - front hybrid asphere on L2**

`K = +1.487`, `A4 = +1.168E-05`, `A6 = -4.148E-09`, `A8 = +1.101E-12`, `A10 = +1.894E-14`, `A12 = -2.952E-17`, `A14 = -9.759E-21`.

**Surface *8 / data label `8A` - rear hybrid asphere on L3**

`K = -4.715`, `A4 = +3.700E-05`, `A6 = -1.310E-07`, `A8 = +2.082E-10`, `A10 = -3.243E-13`, `A12 = +1.792E-17`, `A14 = -9.759E-21`.

**Surface *26 / data label `26A` - front asphere on L12**

`K = 0.000`, `A4 = +2.136E-05`, `A6 = +1.939E-07`, `A8 = +1.663E-09`, `A10 = +1.020E-11`.

**Surface *27 / data label `27A` - rear asphere on L12**

`K = -10.003`, `A4 = -9.654E-05`, `A6 = +1.095E-06`, `A8 = -7.277E-09`, `A10 = +5.471E-11`.

The two first-group aspheres are hybrid composite resin surfaces. The two rear aspheres are on the final positive element and act as a rear field-correction pair.

## Chromatic Correction Strategy

The patent's stated problem is not merely ordinary axial color. It specifically addresses chromatic curvature of field and chromatic coma in compact two-group zoom systems. Example 1 addresses this with two low-dispersion positive elements and a negative-positive-negative cemented triplet in the rear group.

The first ED-class element, L7, is a high-power positive element just behind the aperture stop and is cemented to L8. The second ED-class element, L10, is buried inside the LS triplet. The triplet keeps a net negative focal length while the central ED element establishes the required Abbe-number gaps to the surrounding negative elements. This allows LS to contribute field flattening without creating excessive lateral color.

The analysis stops short of making an apochromatic claim. The patent does not publish per-element spectral line indices for all glasses, and the design is a compact wide-angle zoom rather than a dedicated apochromat.

## Conditional Expressions

Example 1 satisfies all six patent conditions.

| Condition | Computation for EX1 | Patent range | Result |
|---|---:|---:|---|
| (1) `(rs2 + rs1) / (rs2 - rs1)` | `(-13.915 + 11.617) / (-13.915 - 11.617) = 0.090` | `0.08 < ... < 0.5` | Pass |
| (2) `ν2 - ν1` | `81.61 - 46.50 = 35.11` | `27 < ... < 40` | Pass |
| (3) `ν2 - ν3` | `81.61 - 54.67 = 26.94` | `20 < ... < 38` | Pass |
| (4) `f1 / f2` | `-26.69 / 38.19 = -0.699` | `-0.8 < ... < -0.5` | Pass |
| (5) `fs / f2_r` | `-29.60 / 57.98 = -0.511` | `-1 < ... < -0.3` | Pass |
| (6) `ΔX_max / ΔX_min`, surface *3 | `5.5053` | `4.8 < ... < 6.0` | Pass |
| (6) `ΔX_max / ΔX_min`, surface *8 | `4.9241` | `4.8 < ... < 6.0` | Pass |

The preferred sub-ranges are also met: condition (1a) upper bound 0.40, condition (2a) lower bound 30, condition (3a) lower bound 25, and condition (4a) range `-0.72 < f1/f2 < -0.6`.

## Verification Summary

The Example 1 prescription was re-entered and independently traced with a paraxial ABCD / `y, n*u` method. The computed values match the patent table within rounding.

| Quantity | Patent | Computed |
|---|---:|---:|
| EFL, wide | 18.50 mm | 18.498 mm |
| EFL, mid | 25.08 mm | 25.077 mm |
| EFL, tele | 34.00 mm | 33.994 mm |
| Gr1 focal length | -26.69 mm | -26.695 mm |
| Gr2 focal length | +38.19 mm | +38.192 mm |
| GrF focal length | +80.86 mm | +80.861 mm |
| GrR focal length | +57.98 mm | +57.984 mm |
| LS focal length | -29.60 mm | -29.602 mm |
| L1 of LS | -21.14 mm | -21.141 mm |
| L2 of LS | +14.19 mm | +14.187 mm |
| L3 of LS | -15.56 mm | -15.560 mm |

The surface-by-surface Petzval sum is `+0.003863`, corresponding to a Petzval radius of approximately `-258.8 mm`.

The patent includes a plane-parallel plate PT with `d = 1.90 mm`, `nd = 1.51680`, followed by `1.00 mm` of air to the image plane. The data file excludes this plate and folds it into the final air-equivalent back focal distance:

`1.90 / 1.51680 + 1.00 = 2.252637 mm`.

The final data-file air gaps from surface `27A` to the image plane are therefore:

| Zoom position | Patent `d27` before PT | Folded final data-file gap |
|---|---:|---:|
| Wide | 37.70 mm | 39.952637 mm |
| Mid | 47.12 mm | 49.372637 mm |
| Tele | 59.88 mm | 62.132637 mm |

A direct trace of the folded data file gives the same EFL values listed above; the remaining best-focus residual relative to the rounded patent `d27` table is below 0.012 mm across the three zoom positions.

Semi-diameters in the data file are estimated, not patent-tabulated. They were chosen from marginal/chief-ray clear-aperture estimates and then reduced where necessary to satisfy renderer constraints: spherical rim limits, aspherical slope limits, edge thickness, and cross-gap intrusion. The front group is the limiting region because several strong meniscus surfaces have small radii.

## Design Heritage and Context

The AF-S Nikkor 18-35mm f/3.5-4.5G ED succeeded the earlier AF Nikkor 18-35mm f/3.5-4.5D ED IF. The older D-version used a different 11-element formula and screw-drive autofocus. The G-version adds AF-S motor drive, changes the optical construction to 12 elements in 8 groups, and incorporates the negative-positive-negative rear cemented triplet disclosed in this patent.

The joint assignment to Konica Minolta and Nikon is notable but should not be overinterpreted. The production identification rests on the optical and mechanical matches described above, not on the joint assignment by itself.

## Sources

1. US 9,256,059 B2, "Zoom Lens System, Imaging Optical Device, and Digital Appliance," Example 1.
2. Nikon Canada, AF-S Nikkor 18-35mm f/3.5-4.5G ED official product and technical specifications.
3. OHARA optical glass catalog pages for S-LAL18, S-TIM28, S-TIH6, S-FPL51, and S-BAL42.
4. Schott optical glass catalog pages for N-LASF44 and SF2.
