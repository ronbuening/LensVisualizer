## Patent Reference and Design Identification

**Patent:** JP 1991-141313
**Application Number:** JP 1989-281171 (特願平1-281171)
**Filed:** 1989-10-27
**Published:** 1991-06-17
**Inventor:** Hideki Ogawa
**Applicant:** Canon Inc.
**Title:** Photographic lens (撮影レンズ)
**Embodiment analyzed:** Numerical Example 1

The prescription represented here is Numerical Example 1 of JP 1991-141313. The patent describes a macro-capable photographic lens derived from a Gauss-type system, with a positive first group, positive second group, and negative third group. During focusing from infinity toward close distances, the first group, diaphragm, and second group move together toward the object while the third group remains fixed. The patent sets an approximately 24° field and approximately f/2.8 speed as design targets and explicitly addresses aberration stability as magnification approaches unity (JP 1991-141313, PDF pp. 1–4 / patent pp. 73–76).

The selected production correlation is the Canon EF 100mm f/2.8 Macro. It is treated as the fixed correlation for this model, but not as a manufacturer-confirmed patent attribution. Several independent characteristics converge:

1. Canon records the production lens as a 100 mm f/2.8 EF macro introduced in April 1990, about six months after the patent filing.
2. Canon records 10 elements in 9 groups; Numerical Example 1 also contains 10 elements in 9 air-separated groups.
3. The patent gives `F = 100` and `FNo = 1:2.89`; the final modeled prescription computes to 100.0352 mm while Canon markets the product as 100 mm f/2.8.
4. Canon specifies 1.0× maximum magnification and a 0.31 m closest focusing distance. The published 1.0× patent state, traced to the normalized fixed image plane, gives a subject-to-image distance of 0.30687 m.
5. The patent uses an image height of 21.6 mm in its Example-1 aberration plots, consistent with a 35 mm still-camera image field.

The production facts above come from Canon Camera Museum. Exact optical quantities come from the patent prescription and independent computation; the marketed f/2.8 and 0.31 m values are not substituted for the design values.

## Optical Architecture

Numerical Example 1 is an all-spherical, modified Gauss-type macro design. The patent itself identifies the general Gauss system as the starting point and then redistributes power within its front positive and negative components to reduce focus-dependent spherical-aberration variation. The final prescription is arranged as three functional groups around a single diaphragm:

| Functional group | Data elements | Patent power sign | Isolated subsystem EFL | Focus behavior |
|---|---|---:|---:|---|
| I | L1–L4 | Positive | +151.217 mm | Moves toward object |
| II | L5–L7 | Positive | +69.783 mm | Moves with Group I |
| III | L8–L10 | Negative | −179.617 mm | Fixed |

The subsystem focal lengths are computed from each group's surfaces and internal spacings with air on both sides. They describe group power, not additive contributions to the complete lens. Groups I and II together form a +68.010 mm moving front assembly; the complete system, with the negative rear group at its published infinity separation, has a 100.0352 mm effective focal length.

Group I contains three positive elements followed by a negative meniscus. This corresponds directly to the patent's first-group concept: a positive sub-group formed from three positive lenses is paired with a negative meniscus, rather than concentrating the required power and aberration correction into fewer strongly curved surfaces. The stop follows Group I.

Group II contains the only cemented pair, L5/L6, followed by positive L7. In the patent's generalized description, the first component of Group II may be a single or cemented negative lens and the second component is positive. Example 1 realizes that negative component as the cemented L5/L6 pair. Although L5 and L6 have strong standalone negative and positive powers, respectively, their cemented combination from surfaces 10–12 is only weakly negative as a subsystem, with a computed EFL of −317.051 mm. It is therefore important not to infer the cemented pair's behavior by simply adding the two standalone focal powers.

Group III is a positive-negative-positive three-element assembly whose combined power is negative. It remains stationary during focusing and establishes the fixed rear reference against which the moving front assembly changes separation. Under the project definitions, the infinity configuration is neither telephoto (`TL/EFL = 1.157`) nor retrofocus (`BFD/EFL = 0.424`).

## Element-by-Element Analysis

The focal length stated for each element below is the element's **standalone focal length in air**, recomputed from its two surface radii, center thickness, and authored `nd`. These values must not be read as the element's effective contribution inside the complete lens.

### L1 — Positive Meniscus

`nd = 1.60311`, `νd = 60.7`. Glass: `603607 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +160.8 mm`.

L1 begins the positive front sub-group. Its moderate positive standalone power is distributed with L2 and L3 rather than carrying the front-group convergence alone. This division is consistent with the patent's explicit strategy of reducing the magnitude of the spherical-aberration coefficients associated with the positive front component.

### L2 — Positive Meniscus

`nd = 1.78590`, `νd = 44.2`. Glass: `786442 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +127.9 mm`.

L2 is the first of two denser positive menisci in the front positive sub-group. The patent specifically assigns part of the divergent action otherwise concentrated in the following negative component to the image-side surfaces of these menisci. In Example 1, L2 and L3 therefore participate in both net convergence and the redistribution of surface power used to control focus-dependent spherical aberration.

### L3 — Positive Meniscus

`nd = 1.78590`, `νd = 44.2`. Glass: `786442 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +125.2 mm`.

L3 repeats the same d-line coordinate class as L2 with similar standalone power. Together with L1 and L2 it completes the patent's three-positive-lens front component. The patent's conditions (3)–(5) constrain the object-side surface powers of these three positive lenses rather than merely their net element powers, showing that the design logic is explicitly surface-power driven.

### L4 — Negative Meniscus

`nd = 1.80518`, `νd = 25.4`. Glass: `805254 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = −46.7 mm`.

L4 supplies the strong negative member of Group I. The patent's Gauss-derived explanation treats this negative component as the counterpart to the preceding positive sub-group and discusses the way their spherical-aberration changes oppose one another during close focusing. Its relatively high index and low `νd` are source coordinates; they do not, by themselves, establish anomalous partial dispersion or a specific historical glass family.

### L5 — Negative Meniscus, Cemented Pair D1

`nd = 1.69895`, `νd = 30.1`. Glass: `699301 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = −44.6 mm`.

L5 is the negative front member of the sole cemented pair. Surface 11 is the direct L5→L6 cemented interface, where the medium changes into L6 glass without an intervening air layer.

### L6 — Positive Meniscus, Cemented Pair D1

`nd = 1.80610`, `νd = 40.9`. Glass: `806409 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +56.9 mm`.

L6 is strongly positive as a standalone element, but the L5/L6 cemented pair is only weakly negative as a combined subsystem (`f = −317.051 mm` from surfaces 10–12). That distinction is central to the patent's Group-II description: the front component of Group II is negative overall even though Example 1 realizes it with a negative/positive cemented doublet.

### L7 — Biconvex Positive

`nd = 1.78590`, `νd = 44.2`. Glass: `786442 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +63.0 mm`.

L7 follows the cemented negative component and completes the positive net power of Group II. The patent describes the positive component of this group as participating in the balancing of spherical-aberration changes during focusing. L7 also shares the same 786442 coordinate class used for L2 and L3, but no historical vendor identity is asserted from that repetition.

### L8 — Biconvex Positive

`nd = 1.80518`, `νd = 25.4`. Glass: `805254 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +71.3 mm`.

L8 is the first element of the stationary rear group. Although individually positive, it operates inside a three-element assembly whose net power is negative. Its glass coordinates match L4's 805254 class, again without implying a particular vendor or anomalous-dispersion property.

### L9 — Biconcave Negative

`nd = 1.76200`, `νd = 40.1`. Glass: `762401 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = −30.2 mm`.

L9 supplies the strongest standalone negative power in Group III. It lies between two positive elements, forming the positive-negative-positive internal sequence of a rear group whose combined power is negative after its internal separations are taken into account. The patent's condition (2) constrains the overall negative power of Group III, not the isolated power of L9.

### L10 — Positive Meniscus

`nd = 1.51633`, `νd = 64.1`. Glass: `516641 — d-line coordinate class (historical vendor unresolved)`. Standalone `f = +98.3 mm`.

L10 closes the stationary rear group. Its coordinate pair is markedly lower in index and higher in `νd` than those of L8 and L9, but the patent publishes no line-index or partial-dispersion data from which a stronger chromatic characterization can be justified. The final image plane is not tabulated as a patent D20 spacing; the model places it 42.4201 mm behind surface 20 at the computed infinity paraxial focus.

## Glass Identification and Selection

The patent supplies `nd` and `νd` at the d line but does not identify glass manufacturers or trade names. The data file therefore retains seven six-digit coordinate classes and explicitly marks the historical vendor as unresolved. No patent-sourced `nC`, `nF`, `ng`, `PgF`, or `dPgF` values are authored, and the current-coordinate catalog matches are not treated as historical spectral identifications; accordingly, the analysis makes no APO or anomalous-partial-dispersion claim from those matches.

A catalog audit against current OHARA, HIKARI, HOYA, SCHOTT, CDGM, and Sumita data found coordinate-equivalent or near-equivalent modern glasses. The OHARA column below is useful as a present-day coordinate reference because each listed OHARA glass reproduces the patent `nd` exactly and differs in `νd` by no more than 0.06. These are **catalog-derived current equivalents, not historical Canon glass identifications**.

| Data class | `nd` | `νd` | Elements | Current OHARA coordinate equivalent |
|---|---:|---:|---|---|
| 603607 | 1.60311 | 60.7 | L1 | S-BSM14 |
| 786442 | 1.78590 | 44.2 | L2, L3, L7 | S-LAH51 |
| 805254 | 1.80518 | 25.4 | L4, L8 | S-TIH6 |
| 699301 | 1.69895 | 30.1 | L5 | S-TIM35 |
| 806409 | 1.80610 | 40.9 | L6 | S-LAH53 |
| 762401 | 1.76200 | 40.1 | L9 | S-LAM55 |
| 516641 | 1.51633 | 64.1 | L10 | S-BSL7 |

The palette spans relatively low- and high-dispersion d-line coordinates, but `nd/νd` alone cannot determine secondary-spectrum behavior. Any stronger statement about partial dispersion would require source line indices, `dPgF`, or a historically justified glass identity with validated Sellmeier data.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal reconstruction is used. The patent states that Group III is fixed while Group I, the diaphragm, and Group II translate integrally toward the object. In a coordinate system normalized to surface 1, that physical motion appears as an increase in the single air interval D14 between Groups II and III; all other prescription spacings remain constant.

| Published state | D14 | Front-assembly travel from infinity | Recomputed magnification | Subject-to-image distance |
|---|---:|---:|---:|---:|
| Infinity | 2.50 mm | 0.00 mm | 0 | ∞ |
| 0.5× | 25.62 mm | 23.12 mm | −0.500027 | 0.383781 m |
| 1.0× | 48.74 mm | 46.24 mm | −1.000055 | 0.306871 m |

The 0.5× spacing is exactly halfway between the infinity and 1.0× D14 values. Consequently, the data file's endpoint interpolation reproduces the patent's published intermediate state without a reconstructed movement law. The computed 1.0× subject-to-image distance of 0.306871 m is consistent with Canon's rounded 0.31 m marketed closest-focus specification.

This is not a floating system in the patent's sense: the first and second groups do not move independently. The front two groups and stop behave as one translating assembly while the rear group remains fixed. That choice directly addresses the patent's stated objective of avoiding the mechanical complexity and focus-drive burden associated with independently moving floating groups.

## Aberration Correction Strategy

The patent begins from a problem characteristic of large-aperture macro lenses: as magnification increases, spherical aberration changes substantially and can be accompanied by worsening sagittal field curvature and outward coma. It notes that conventional floating systems can compensate for these changes, but at the cost of multiple independently moving groups, greater mechanical complexity, and increased focusing load (JP 1991-141313, PDF p. 2 / patent p. 74).

The proposed solution is primarily a redistribution of power inside a Gauss-derived architecture rather than the addition of aspheres. In the first group, the positive component is divided among L1, L2, and L3. The patent explains that part of the divergent action associated with the following negative component is shared by the image-side surfaces of the two positive menisci. This reduces the magnitude of the spherical-aberration coefficients assigned to the negative component and allows the positive and negative portions of the first group to balance their focus-dependent changes over a wider range.

Group II supplies a second balancing mechanism. Its weakly negative front component—the L5/L6 cemented pair in Example 1—and positive L7 produce spherical-aberration changes of opposite sign as focus moves toward unity magnification. The patent uses conditions on the combined focal length of Groups I and II, the negative power of Group III, and selected first-group surface powers to keep this compensation effective without forcing excessive focus travel or mechanically unfavorable group separation.

Example 1 contains no aspherical surfaces. Its aberration strategy is therefore implemented through spherical surface curvatures, glass-coordinate choices, cementing, group power distribution, and the single coordinated focusing motion.

## Conditional Expressions

The patent defines seven inequalities. Conditions (1) and (2) control the combined power of the moving front assembly and the negative power of the stationary rear group. Conditions (3)–(7) constrain selected **surface powers** in Group I; they are not element focal powers. Recalculation from the final data arrays reproduces the patent's Table-1 Example-1 values at the published precision.

| Expression | Computed | Patent Table 1 | Required interval | Result |
|---|---:|---:|---|---|
| `F12/F` | 0.680101 | 0.68 | `0.6 < x < 0.75` | Pass |
| `abs(F3/F)` | 1.796171 | 1.80 | `1 < x < 2.1` | Pass |
| `φ1,1·F` | 0.728130 | 0.73 | `0.2 < x < 0.8` | Pass |
| `φ1,3·F` | 1.258850 | 1.26 | `0.8 < x < 2.2` | Pass |
| `φ1,5·F` | 2.032325 | 2.03 | `1.6 < x < 2.9` | Pass |
| `abs(φ1,4)·F` | 0.491648 | 0.49 | `0.2 < x < 1` | Pass |
| `abs(φ1,6)·F` | 1.330455 | 1.33 | `1 < x < 2.1` | Pass |

All seven expressions satisfy their stated intervals and round to the values printed in patent Table 1 (JP 1991-141313, PDF p. 7 / patent p. 79). This agreement also provides a sensitive check on radius signs and Example-1 table selection.

## Verification Summary

The final data arrays were independently retraced with sequential height/reduced-angle propagation and a separate ABCD matrix product. At infinity the prescription computes to an effective focal length of **100.035239 mm**, compared with the patent's rounded `F = 100`. The normalized image plane lies **42.420124 mm** behind surface 20. The full paraxial field implied by the patent's 21.6 mm image height is **24.3689°**, consistent with the approximately 24° design objective.

The physical stop location is a source fact: patent surface R9 is the diaphragm between Groups I and II. The patent prints R9 only as the diaphragm, without a numerical curvature; the data value `R = 1e15` is therefore the schema's optically neutral `STO` representation, not a patent-tabulated radius. Its **semi-diameter is not published**. The data value of 11.645086 mm is a modeling inference chosen to close the patent design f-number, producing an entrance-pupil radius of 17.307135 mm and a computed f-number of 2.890000. All other semi-diameters are likewise inferred from exact full-field ray envelopes and checked against the Example-1 optical section; they are not patent clear-aperture data.

The patent does not tabulate an image-space D20 value. The authored surface-20 spacing is therefore a reference-plane normalization to the computed infinity paraxial focus, not a transcribed source spacing. No cover glass, filter, inactive dummy plane, flare cutter, or mechanical plane is present in the selected numerical prescription, so no such plane is omitted or air-equivalent correction applied.

No patent numerical correction is required, and no uniform scaling is applied (`s = 1`). Example 1 is entirely spherical, so there is no conic convention or aspheric-coefficient transformation to disclose. The independently accumulated Petzval sum is **+0.001169122 mm⁻¹**, corresponding to a reciprocal of **+855.343 mm** under the adopted sign convention.

The inferred semi-diameters pass the standalone edge-thickness, actual rim-slope, shared-band cross-gap, and exact full-field containment checks at infinity, 0.5×, and 1.0×.

## Sources and References

- Japan Patent Office, **JP 1991-141313**, *撮影レンズ* (Photographic lens), Hideki Ogawa / Canon Inc., Numerical Example 1. Filed 1989-10-27; published 1991-06-17. Primary source for prescription, group arrangement, focus motion, conditions, and aberration rationale.
- Canon Camera Museum, **EF100mm f/2.8 Macro**: https://global.canon/en/c-museum/product/ef289.html — official source for April 1990 introduction, 10-element/9-group construction, 0.31 m closest focusing distance, 1.0× maximum magnification, 8 diaphragm blades, and f/32 minimum aperture.
- OHARA, optical-glass product/catalog information: https://www.ohara-inc.co.jp/en/product/01000/ — current-coordinate comparisons only; not evidence of historical Canon glass identity.
- HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/
- HOYA Optical World: https://www.hoya-opticalworld.com/
- SCHOTT optical-glass downloads / catalog: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- CDGM optical glass: https://www.cdgmgd.com/
- Sumita Optical Glass data: https://www.sumita-opt.co.jp/en/products/optical/
