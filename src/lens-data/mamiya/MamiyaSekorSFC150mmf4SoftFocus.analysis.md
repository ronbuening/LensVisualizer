## Patent Reference and Design Identification

**Patent:** JPS52-141223A<br>
**Application number:** Sho 51-57277<br>
**Filed:** 20 May 1976<br>
**Published:** 25 November 1977<br>
**Inventor:** Yusuke Nanjo<br>
**Applicant:** Mamiya Optical Co., Ltd.<br>
**Title:** Soft-focus lens (軟焦点レンズ)<br>
**Embodiment analyzed:** Example 1 / 第1実施例

Example 1 is the fixed patent assignment for the MAMIYA-SEKOR SFC 150mm f/4 SOFT FOCUS. The patent does not name the production lens, and no located manufacturer document identifies this patent number. The correlation instead rests on several mutually consistent features:

1. The patent example has five elements in three air-separated groups, matching the production specification.
2. Its normalized focal length is `f = 1.0`; uniform scaling by `s = 150.0` produces a computed effective focal length of 150.0264 mm, consistent with the marketed 150 mm designation.
3. The patent gives an aperture ratio of 1:4 and a full field of 33°, matching the production f/4 and 33° specifications.
4. The computed 33° paraxial image circle is 88.8797 mm, close to the nominal 89.6 mm diagonal of the 6×7 format used by the Mamiya RB67 system.
5. The patent describes a triplet-derived soft-focus formula that deliberately produces high-order spherical aberration near the stop. Mamiya’s instructions describe the production lens as using controlled spherical aberration and removable pupil masks.
6. The production system focuses by extending the complete lens on the RB67 bellows, consistent with a fixed internal prescription and no published internal focus motion.

The prescription is normalized in the patent and uniformly scaled in the data file. Every radius, axial spacing, stop position, semi-diameter, and image-plane distance is multiplied by 150.0. The design is entirely spherical, so no aspheric coefficient transformation is applicable.

## Optical Architecture

The lens is a triplet-derived positive–negative–positive three-group design. The front and rear positive groups are each cemented doublets, while the central group is a single negative element:

- **G1:** positive cemented doublet L1–L2;
- **G2:** negative singlet L3;
- **G3:** positive cemented doublet L4–L5.

The isolated group focal lengths are +79.0986 mm for G1, −45.3524 mm for G2, and +78.3797 mm for G3. These values describe each air-separated group in isolation; they are not additive powers for the assembled system. In the assembled normalized model, a unit-height collimated paraxial ray leaves G1 with reduced angle −1.896, leaves G2 at +0.584, and leaves G3 at −1.000. G2 therefore reverses the convergence created by G1, after which G3 supplies the final converging action.

The stop lies in the air gap between surfaces 5 and 6, immediately ahead of the rear doublet. The patent figure establishes that location but does not publish the axial split. The data model places the stop at the midpoint of the 11.325 mm scaled gap and preserves the original total spacing. Its 14.5205 mm physical semi-diameter is inferred from the modeled 150.0264 mm EFL and the published f/4 aperture ratio.

The first vertex-to-image distance at infinity is 179.3613 mm, giving `TL/EFL = 1.19553`; the design is therefore not telephoto under the strict `TL/EFL < 1` definition. Its 120.4713 mm back focal distance gives `BFD/EFL = 0.80300`, so it is not retrofocus under the `BFD > EFL` definition.

## Element-by-Element Analysis

### Front Cemented Doublet D1: L1 and L2

#### L1 — Biconvex Positive

`nd = 1.69350`, `νd = 53.3`. Glass: **694533 class (vendor unspecified)**. Isolated focal length: **+39.4465 mm**.

L1 is the strongly positive front component. Its first surface collects the incoming bundle, while the cemented rear surface transfers the ray directly into L2 without an air interface. As an isolated element it is much stronger than the net front group, illustrating why standalone element focal length must not be confused with the power of the cemented assembly.

The first surface contributes a large positive Petzval term, while the following cemented interface contributes only a small positive term. The front doublet’s net action is established by both elements and the finite internal thickness, not by arithmetic addition of their isolated powers.

#### L2 — Biconcave Negative

`nd = 1.60311`, `νd = 60.7`. Glass: **603607 class (vendor unspecified)**. Isolated focal length: **−68.9173 mm**.

L2 is the negative component of D1. Its lower index and higher Abbe number make it the chromatic-balancing partner of the denser positive component, although the patent supplies no line-index or partial-dispersion data from which to infer apochromatic correction.

Together, L1 and L2 form G1 with a net equivalent focal length of +79.0986 mm. This is substantially weaker than L1 alone because L2 offsets part of the front element’s power while preserving a net positive collector group.

### L3 — Central Biconcave Negative Singlet

`nd = 1.67270`, `νd = 32.1`. Glass: **673321 class (vendor unspecified)**. Isolated focal length: **−45.3524 mm**.

L3 supplies the central negative action of the triplet-derived architecture. In the assembled lens it changes the reduced angle of the reference paraxial ray from −1.896 before the group to +0.584 after it, reversing the convergence established by the front doublet.

Its two surfaces provide the largest combined negative Petzval contribution in the system. Those negative terms are balanced by the positive contributions of the front and rear groups, leaving a computed normalized Petzval sum of +0.183309, in close agreement with the patent’s printed +0.1834.

### Rear Cemented Doublet D2: L4 and L5

#### L4 — Biconvex Positive

`nd = 1.73400`, `νd = 51.5`. Glass: **734515 class (vendor unspecified)**. Isolated focal length: **+22.4703 mm**.

L4 is the strongest isolated positive element in the prescription and sits immediately behind the aperture stop. Its front surface begins the rear group’s converging action, while its strongly curved cemented rear boundary is shared with L5.

The stop-adjacent position is central to the patent’s correction strategy: the rear group can generate a large zonal spherical term while keeping the chief-ray-dependent aberration terms comparatively small.

#### L5 — Negative Meniscus

`nd = 1.72000`, `νd = 50.2`. Glass: **720502 class (vendor unspecified)**. Isolated focal length: **−31.6446 mm**.

L5 is a negative meniscus cemented to L4. The two glasses have closely matched indices and Abbe numbers: `|Δn| = 0.0140` and `|Δν| = 1.3`. Consequently, the sharply curved cemented interface at surface 7 has modest paraxial power despite its small −17.505 mm radius.

That interface is the design’s principal soft-focus generator. The patent’s aberration table assigns surface 7 a third-order spherical coefficient `I = 3.5724` and a fifth-order zonal coefficient `I* = 535.6109`, giving `I*/I = 149.9303`. The same row gives much smaller coma, astigmatism, Petzval, and distortion terms. The result is a large zonal spherical contribution concentrated near the stop without a correspondingly large increase in the other listed third-order aberrations.

L4 and L5 together form G3 with a net equivalent focal length of +78.3797 mm. As with the front doublet, this group value is distinct from either element’s isolated focal length and from the group’s ray-height-dependent action inside the complete system.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and d-line Abbe numbers. It names no glass vendor or melt. The data file therefore retains six-digit coordinate classes rather than assigning modern vendor-specific glasses.

| Element | Stored glass annotation | `nd` | `νd` | Function in the design |
|---|---|---:|---:|---|
| L1 | 694533 class (vendor unspecified) | 1.69350 | 53.3 | Dense positive component of D1 |
| L2 | 603607 class (vendor unspecified) | 1.60311 | 60.7 | Negative chromatic-balancing component of D1 |
| L3 | 673321 class (vendor unspecified) | 1.67270 | 32.1 | Central negative singlet |
| L4 | 734515 class (vendor unspecified) | 1.73400 | 51.5 | Strong positive component of D2 |
| L5 | 720502 class (vendor unspecified) | 1.72000 | 50.2 | Negative meniscus and zonal-SA partner in D2 |

Catalog auditing finds several modern materials close to each coordinate pair, but that does not establish the production melts. The elements therefore carry no `nC`, `nF`, `ng`, or `dPgF` values. The available data support ordinary d-line/Abbe chromatic modeling only; they do not support an APO or anomalous-partial-dispersion claim.

## Focus Mechanism

The Mamiya RB67 focuses by moving the complete lens relative to the film plane with the camera bellows. All internal element and group spacings therefore remain fixed. The data model represents this unit-focus mechanism by varying only the final air gap from surface 8 to the image plane.

The close state is a **CONSTRAINED_RECONSTRUCTION**, not a published patent spacing. It solves the exact paraxial imaging condition under the manufacturer’s rounded 0.856 m object-to-film minimum focusing distance.

| State | Last vertex to film plane | Bellows extension beyond infinity | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | 120.471282 mm | 0 mm | 0 |
| 0.856 m MFD | 164.755082 mm | 44.283800 mm | −0.295173× |

The magnitude 0.295173× is consistent with the marketed 0.3× maximum magnification after rounding. Conversely, enforcing exactly 0.300× gives an object-to-film distance of approximately 848.55 mm, confirming that the two manufacturer specifications are mutually consistent rather than contradictory. The reconstructed 44.2838 mm extension also remains within the RB body’s published 46 mm built-in bellows travel.

No internal group movement is published or modeled. The reconstruction does not infer a floating element, rear-focus group, or separate aberration-control movement.

## Spherical-Aberration and Pupil-Control Mechanism

The patent distinguishes the lens from a conventional uniformly undercorrected soft-focus lens. Its principal mechanism is the strongly curved, low-power cemented interface at surface 7, placed close to the aperture stop. This interface produces a disproportionately large fifth-order zonal spherical term while the neighboring similar-index glasses keep its first-order power and several other aberration terms comparatively small.

The production lens supplements that fixed optical behavior with three removable softness-control discs mounted in front of the optical cell. They are perforated pupil masks, not refracting elements. Mamiya’s instruction sheet gives an iris range of f/4–f/32, effective apertures of approximately f/5, f/5.6, and f/6.3 for discs 1, 2, and 3, and describes the soft-focus effect as strongest at f/4, reduced at f/5.6, and effectively absent by f/8.

Because the discs alter which pupil zones are admitted rather than changing a radius, spacing, or refractive index, they are excluded from the ordinary sequential prescription and are not represented as an `aberrationControl` spacing. No cover glass, filter, inactive dummy plane, or mechanical component occurs in the patent prescription or has been added to the model.

## Conditional Expressions

Example 1 satisfies each condition used by the patent to define the preferred soft-focus construction:

| Patent condition | Example 1 value | Result |
|---|---:|---|
| `6 < 1/|r7| < 12` in normalized units | 8.568980 | Pass |
| `|n4 − n5| < 0.1` | 0.014000 | Pass |
| `|ν4 − ν5| < 10` | 1.300000 | Pass |
| Surface-7 `I*/I > 100` | 149.930271 | Pass |

After scaling, the curvature condition is equivalently evaluated as `6 < 150/|R7| < 12`; the dimensionless value is unchanged.

## Modeling Inferences and Geometric Limits

The patent publishes no semi-diameters. The authored values are therefore modeling inferences constrained by the f/4 marginal ray, the 33° chief ray, the patent section, positive edge thickness, actual spherical rim slope, shared-band cross-gap clearance, and the viewer’s standard ray samples.

All five modeled elements retain positive edge thickness. The most restrictive surface is surface 7, whose 15.4 mm semi-diameter produces a 61.6121° spherical rim angle, below the current 64.1609° limit. Exact spherical meridional tracing gives minimum default-ray clearances of 1.7419 mm at infinity and 1.9639 mm at the reconstructed close state. At the published 16.5° half-field, the ±0.75-pupil samples retain at least 0.3630 mm clearance.

The complete on-axis f/4 cone is transmitted, but the full 16.5° corner bundle is not unvignetted across the entire pupil. Exact meridional tracing gives a conservative symmetric clear pupil-radius fraction of 0.782104; surface 7 limits one side of the pupil and surface 1 limits the other. The total clear meridional width is 0.802761 of the full pupil diameter. This is a disclosed geometric consequence of the inferred clear apertures and steep rear cemented interface, not a layout adjustment or hidden render trim.

The stop location and stop diameter are likewise inferred because the patent gives only the stop’s qualitative position in the surface-5-to-surface-6 gap. The midpoint model is an explicit approximation, not a source fact.

## Verification Summary

The final TypeScript arrays independently reproduce the load-bearing first-order quantities:

- effective focal length: **150.026430 mm**;
- infinity back focal distance from surface 8: **120.471282 mm**;
- vertex track from surface 1 to surface 8: **58.890000 mm**;
- first vertex to infinity image plane: **179.361282 mm**;
- modeled wide-open aperture: **f/4.000000**;
- paraxial image-circle diameter at 33°: **88.879706 mm**;
- normalized Petzval sum: **+0.183309**, versus the patent’s printed **+0.1834**.

Sequential reduced-angle tracing and the ABCD matrix agree to numerical precision, and the matrix determinant is unity within floating-point error. Both the infinity and reconstructed close states satisfy the imaging condition used by the model.

No radius, thickness, refractive index, Abbe number, sign, or element order was corrected. Three apparent OCR readings in the patent’s aberration table were resolved by inspection of the rendered page and the printed column sums: surface 2 `I = 6.2539`, surface 4 `I = −12.8151`, and surface 2 `V = −0.2922`. These are transcription corrections to machine-readable text, not alterations to the patent.

## Sources and References

1. Yusuke Nanjo, **“Soft-focus lens”**, JPS52-141223A, Mamiya Optical Co., Ltd., published 25 November 1977. Example 1 prescription and aberration table on page 2; optical layout and stop placement in Figure 3 and aberration plots in Figure 4 on page 4.
2. **Mamiya-Sekor SFC 150mm f/4 Lens Instructions**, Mamiya Camera Co., Ltd., preserved scan: <https://ianbfoto.com/downloads/Mamiya%20RB67/Mamiya%20RB67%20150mm%20Soft%20Focus.pdf>.
3. **Mamiya RB67 Pro SD Lenses**, Mamiya Camera Co., Ltd., preserved system guide: <https://ianbfoto.com/downloads/Reviews/Mamiya%20Legacy%20-%20Mamiya%20RB67%20Pro%20SD%20Lenses.pdf>.
4. LensVisualizer data and verification artifacts for `MamiyaSekorSFC150mmf4SoftFocus`, derived from the final validated TypeScript arrays.
