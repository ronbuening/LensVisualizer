# Canon EF-M 32mm f/1.4 STM — Patent Example 1 Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2018-180366 A
**Filed:** April 17, 2017
**Published:** November 2018
**Assignee:** Canon Inc.
**Title:** Imaging Optical System and Imaging Apparatus
**Embodiment analyzed:** Numerical Data 1 / Example 1

The relevant patent is Japanese published application **JP 2018-180366 A**, titled *Imaging Optical System and Imaging Apparatus*, assigned to Canon Inc. and filed on 17 April 2017. The implemented prescription is **Numerical Data 1 / Example 1**.

The production lens is the **Canon EF-M 32mm f/1.4 STM**, marketed for the EOS M / EF-M APS-C system. Canon's published product specifications give a 32 mm focal length, f/1.4 maximum aperture, 14 elements in 8 groups, one high-precision glass-molded aspherical lens, 7 aperture blades, a 0.23 m closest focusing distance, and 0.25× maximum magnification. The patent example gives f = 32.34 mm, Fno = 1.45, half-field angle ω = 22.90°, 14 powered lens elements in 8 air-separated optical groups, and a plane-parallel GB block before the image plane.

The identification rests on the following converging points:

1. **Focal length and aperture.** Numerical Data 1 is a 32.34 mm, F/1.45 design, matching the production 32 mm f/1.4 class.
2. **Element and group count.** The patent has 14 powered elements arranged as 8 air-separated groups before the GB cover block; Canon states 14 elements in 8 groups for the production lens.
3. **Aspherical count and placement.** The patent marks only surface 20 as aspherical. Canon's product material states one glass-molded aspherical lens.
4. **Image format.** The patent half-field angle of 22.90° at f = 32.34 mm corresponds to a diagonal image height of about 13.66 mm, consistent with APS-C coverage.
5. **Focusing architecture.** The patent focuses by moving the first lens group L1, including the stop, toward the object while the rear group L2 remains fixed. Canon identifies STM autofocus and full-time manual focus for the product, but does not publish the internal moving-group split.
6. **Timing.** The patent was filed in 2017 and published in November 2018, close to the September 2018 product introduction.

Production hard specifications are treated as production facts. Patent quantities are treated as design values where they differ from the marketed product.

## Optical Architecture

Example 1 is a **modified double-Gauss / Gaussian-derived large-aperture normal lens** for a short-flange APS-C mirrorless mount. The stop lies inside the moving first focus group. The layout is not a simple symmetric Gaussian: Canon uses six cemented groups, a fixed rear relay doublet, and one molded-glass aspherical surface near the rear of the moving assembly.

There are two patent-level focus groups. The first group, **L1**, begins at surface 1 and ends at surface 20. It contains the front negative element, the stop, the stop-adjacent chromatic-correction doublets LF and LR, and three rear cemented groups. The second group, **L2**, begins at surface 21 and remains fixed during focusing in Example 1. The production 8-group count refers to air-separated optical groups, not to the patent's two focus groups.

In air-separated optical-group terms, the design is:

| Air group | Elements | Type | Main function |
|---|---:|---|---|
| 1 | L1 | single negative | Front flare and field-angle control. |
| 2 | L2-L3 | cemented positive/negative doublet | High-index front collector with chromatic correction. |
| 3 | L4 | single positive | Front positive power and ray compression. |
| 4 | L5-L6 (LF) | cemented positive/negative doublet | Stop-front secondary-spectrum correction. |
| 5 | L7-L8 (LR) | cemented positive/negative doublet | Stop-rear secondary-spectrum and field-curvature correction. |
| 6 | L9-L10 | cemented positive/negative doublet | High-power rear correction inside the moving group. |
| 7 | L11-L12 | cemented negative/positive doublet, L12 aspheric | Rear moving-group flattening and spherical-aberration correction. |
| 8 | L13-L14 | fixed cemented positive/negative doublet | Rear relay and exit-angle control. |

The focal-length distribution is not telephoto in the strict optical-design sense: the track length and air-equivalent back focus are consistent with a compact mirrorless normal lens rather than with a TL/EFL < 1 telephoto system. The fixed rear doublet has positive net power and stabilizes the image-side ray geometry while the larger first group translates for focus.

## Element-by-Element Analysis

The focal lengths below are standalone in-air paraxial focal lengths for individual physical elements unless otherwise stated. They describe sign and strength, but cemented interfaces alter the in-situ contribution of each member.

### L1 — Front Biconcave Negative

**nd = 1.61340, νd = 44.3. Glass: S-NBM51 class (OHARA 613443). Standalone f = −33.43 mm.**

L1 is the front negative element. The object-side surface is concave, matching the patent's description of placing a concave-front negative element at the object side to suppress sagittal flare in the strong first group. Its placement before the high-index front collector opens the entrance bundle and helps keep oblique ray heights under control without forcing a retrofocus power distribution.

### L2-L3 — Front Cemented Positive/Negative Doublet

**L2: nd = 1.91082, νd = 35.3. Glass: HOYA TAFD35L class. Standalone f = +21.88 mm.**  
**L3: nd = 1.85478, νd = 24.8. Glass: S-NBH56 class (OHARA 855248). Standalone f = −39.96 mm.**  
**Cemented-pair f = +47.66 mm.**

This is the first major positive-power collector. L2 uses very high index to concentrate front power with manageable curvature. L3 is a dense, high-dispersion negative partner. The cemented interface gives strong chromatic control near the front of the optical system without adding another air-glass boundary.

The pair remains net positive. It allows the front half of the lens to carry substantial power while leaving the stop-adjacent doublets to perform more targeted secondary-spectrum correction.

### L4 — High-Index Positive Singlet

**nd = 1.91082, νd = 35.3. Glass: HOYA TAFD35L class. Standalone f = +28.55 mm.**

L4 is a positive singlet using the same very-high-index glass class as L2. The patent's condition on front positive glass requires at least one front positive lens with nd > 1.90; L2 and L4 both satisfy it.

Optically, L4 adds positive power before the stop while keeping surface curvatures moderate. The high index reduces the Petzval penalty that would otherwise accompany a compact, large-aperture Gaussian-derived layout.

### L5-L6 (LF) — Stop-Front Cemented Chromatic Corrector

**L5 / LFP: nd = 1.59282, νd = 68.6, θgF = 0.5441. Glass: HOYA FCD505. Standalone f = +34.17 mm.**  
**L6 / LFN: nd = 1.73800, νd = 32.3, θgF = 0.5899. Glass: S-NBH53/S-NBH53V class (OHARA 738323). Standalone f = −19.23 mm.**  
**Cemented-pair f = −54.17 mm.**

LF is the cemented doublet immediately in front of the stop. The positive member is a low-dispersion glass with patent-listed anomalous partial-dispersion behavior. The negative member is a higher-dispersion flint-class glass whose θgF value is selected to satisfy the patent's stop-near chromatic condition.

Because axial ray height is large near the stop, this doublet is an efficient place to correct axial color and secondary spectrum. It also shapes coma at the stop-front side of the design. The group is net negative despite its positive first member, balancing the front positive collector power.

### Aperture Stop SP

The aperture stop is surface 11 in the patent table. It lies inside focus group L1 and moves with L1 during focusing. Mechanically, the optical stop is part of the moving unit rather than the fixed rear relay.

The patent does not publish a stop diameter. The data file therefore uses an inferred paraxial stop semi-diameter of 8.122 mm, derived from the recalculated entrance pupil needed for the patent design F-number of 1.45. This is not an independently published mechanical aperture value.

### L7-L8 (LR) — Stop-Rear Cemented Chromatic and Petzval Corrector

**L7 / LRP: nd = 1.76385, νd = 48.5, θgF = 0.5589. Glass: S-LAH96 class (OHARA 764485). Standalone f = +42.69 mm.**  
**L8 / LRN: nd = 1.67542, νd = 34.8, θgF = 0.5825. Glass: unmatched 675/348 partial-dispersion flint class. Standalone f = −17.53 mm.**  
**Cemented-pair f = −27.38 mm.**

LR is the main object of the patent claims. In Example 1 the order is positive LRP followed by negative LRN. The object-side surface of the cemented group is concave, and the whole cemented group is net negative, with fR/f = −0.846 by the patent table and −0.8463 by recalculation.

The patent assigns special importance to this doublet because it is the first optical group behind the stop. L7 has the higher Abbe number and the positive-member partial-dispersion behavior required by the claims. L8 has lower Abbe number and the negative-member partial-dispersion behavior required by the claims. This pairing attacks secondary axial color where axial ray heights remain large. Its negative net power also helps field curvature control through the surface-by-surface Petzval contribution.

L8 remains conservatively identified. Its nd/νd/θgF tuple is taken directly from the patent, but no exact public catalog match was found in the checked OHARA, HOYA, Schott, HIKARI, Sumita, or CDGM references. The data file therefore stores it as an unmatched partial-dispersion flint rather than assigning a speculative vendor name.

### L9-L10 — Strong Positive Rear Doublet in the Moving Group

**L9: nd = 1.88300, νd = 40.8. Glass: S-LAH58 class (OHARA 883408). Standalone f = +12.66 mm.**  
**L10: nd = 1.67270, νd = 32.1. Glass: S-TIM25 class (OHARA 673321). Standalone f = −35.38 mm.**  
**Cemented-pair f = +18.77 mm.**

This is a high-power positive cemented group immediately behind LR. L9 carries strong positive power in high-index lanthanum glass. L10 is a negative flint partner that moderates longitudinal color and spherical aberration from L9's high curvature.

The doublet restores positive convergence after the net-negative LR group. Because it remains inside the moving focus group, its aberration balance must remain useful as L1 translates during close focus.

### L11-L12 — Rear Moving Cemented Doublet with the Aspherical Surface

**L11: nd = 1.51742, νd = 52.4. Glass: S-NSL36 class (OHARA 517524). Standalone f = −25.80 mm.**  
**L12: nd = 1.85135, νd = 40.1. Glass: HOYA MP-/MC-TAFD305 class. Standalone f = +36.26 mm.**  
**Cemented-pair f = −97.70 mm. Surface 20, the rear surface of L12, is aspherical.**

The group is weakly negative overall. L11 begins the group with low-index negative power; L12 then supplies high-index positive power and the only aspherical powered surface in Example 1. The rear asphere is near the transition between the moving assembly and the fixed rear relay, making it a useful location for residual spherical-aberration and off-axis correction.

The L12 glass match is strong: the patent gives nd = 1.85135 and νd = 40.1, matching HOYA MP-TAFD305 and MC-TAFD305 to the precision used in the patent. This is also consistent with Canon's published statement that the production lens uses one high-precision glass-molded aspherical lens. The patent itself does not explicitly name the manufacturing method.

### L13-L14 — Fixed Rear Cemented Relay Group L2

**L13: nd = 1.88300, νd = 40.8. Glass: S-LAH58 class (OHARA 883408). Standalone f = +25.16 mm.**  
**L14: nd = 2.00069, νd = 25.5. Glass: HOYA TAFD40-W / TAFD40 class. Standalone f = −35.01 mm.**  
**Cemented-pair f = +84.74 mm.**

This is the fixed rear optical group in Example 1. It is a net positive cemented doublet consisting of a biconvex high-index positive element and an ultra-high-index dense-flint negative meniscus. It sits just before the sensor cover glass in the patent prescription.

The patent states that the rear group helps suppress focus-induced performance variation and controls the ray incidence angle on the image sensor. In practical terms, L1 performs the focus movement, while this fixed rear relay maintains the final image-side geometry.

## Glass Identification and Selection

The patent publishes nd and νd for every element and θgF for the stop-adjacent chromatic-correction members. It does not name glass vendors. The identifications below are catalog matches or conservative class assignments, not explicit patent text.

| Element | Patent nd / νd / θgF | Identification | Confidence and role |
|---|---:|---|---|
| L1 | 1.61340 / 44.3 | S-NBM51 class (OHARA 613443) | Code match; front negative field-control glass. |
| L2, L4 | 1.91082 / 35.3 | HOYA TAFD35L class | Exact nd with νd rounded from catalog value; very-high-index front positive glass. |
| L3 | 1.85478 / 24.8 | S-NBH56 class (OHARA 855248) | Code match; dense high-dispersion negative partner. |
| L5 / LFP | 1.59282 / 68.6 / 0.5441 | HOYA FCD505 | Exact match including θgF; low-dispersion anomalous positive member. |
| L6 / LFN | 1.73800 / 32.3 / 0.5899 | S-NBH53/S-NBH53V class (OHARA 738323) | Code match; high-dispersion stop-front negative member. |
| L7 / LRP | 1.76385 / 48.5 / 0.5589 | S-LAH96 class (OHARA 764485) | Code match; positive member of LR. |
| L8 / LRN | 1.67542 / 34.8 / 0.5825 | Unmatched 675/348 partial-dispersion flint | Patent value retained; no exact public catalog match found in checked references. |
| L9, L13 | 1.88300 / 40.8 | S-LAH58 class (OHARA 883408) | Code match; high-index positive power. |
| L10 | 1.67270 / 32.1 | S-TIM25 class (OHARA 673321) | Code match; negative partner behind LR. |
| L11 | 1.51742 / 52.4 | S-NSL36 class (OHARA 517524) | Code match; low-index negative member. |
| L12 | 1.85135 / 40.1 | HOYA MP-/MC-TAFD305 class | Exact HOYA mold/preform family match; probable molded-glass aspherical element. |
| L14 | 2.00069 / 25.5 | HOYA TAFD40-W / TAFD40 class | Exact nd with νd rounded from catalog value; ultra-high-index dense flint. |

The chromatic strategy is concentrated around the stop. LF and LR use positive and negative members with partial dispersions chosen on opposite sides of the patent's normal-glass boundary lines. For LR, L7 uses θgF = 0.5589 at νd = 48.5, while L8 uses θgF = 0.5825 at νd = 34.8. For LF, L5 uses θgF = 0.5441 at νd = 68.6, while L6 uses θgF = 0.5899 at νd = 32.3. The result is not simply a conventional achromat; it is a stop-adjacent secondary-spectrum correction strategy within a compact high-index Gaussian core.

The design does not depend on fluorite or a very-low-index fluorophosphate element. The low-dispersion L5 member is a dense FCD-class glass rather than an FPL51/FCD1-class fluorophosphate. The high element count is partly a consequence of this strategy: Canon uses high-index positives for compact power and cemented flint partners for axial color, lateral color, and Petzval control.

## Focus Mechanism

Example 1 uses **first-group focusing**. From infinity to the patent close state, the air gap after surface 20 changes as follows:

| Focus state | d20, surface 20 to surface 21 | Interpretation |
|---|---:|---|
| Infinity | 1.10 mm | Moving L1 close to fixed rear group L2. |
| Patent close state | 9.71 mm | L1 shifted 8.61 mm toward the object. |

The fixed rear group L2 begins at surface 21 and remains stationary relative to the image plane in Example 1. The aperture stop is inside L1, so it follows the same trajectory as the moving optical group.

A paraxial conjugate calculation with d20 = 9.71 mm gives β = −0.1878, matching the patent's close-state magnification of −0.188. Canon's production specification gives 0.23 m closest focusing distance and 0.25× maximum magnification, so the patent close state is not treated as the production mechanical close-focus endpoint. The data file uses the production 0.23 m value for the metadata field `closeFocusM`, but the optical slider uses the patent-published d20 range because it is the only published group-motion prescription.

## Aspherical Surfaces

Example 1 has one aspherical surface: **surface 20**, the rear surface of L12 in the L11-L12 cemented doublet. In the data file this surface is labeled **20A**. All other powered lens surfaces are spherical. The GB cover-glass surfaces are plane and are excluded from the data file.

The patent uses the standard conic-constant convention:

$$
x = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10} + A_{12}h^{12}.
$$

Here $R$ is the paraxial radius and $K = 0$ is a spherical base conic. There is no evidence in this patent that the tabulated value must be shifted by −1 to obtain the standard conic constant.

For surface 20:

| Coefficient | Value |
|---|---:|
| R | −122.383 mm |
| K | 0.00000e+000 |
| A4 | +2.81172e−005 |
| A6 | −5.36397e−008 |
| A8 | +1.08573e−009 |
| A10 | −7.33305e−012 |
| A12 | +1.98301e−014 |

Because the base radius is negative, the spherical sag is negative at finite height. The polynomial departure is positive over ordinary ray heights, reducing the magnitude of the concave rear-surface sag and flattening the outer-zone behavior. At non-edge reference heights used only to check sign and scale, the polynomial departure is approximately +0.0171 mm at h = 5 mm, +0.1128 mm at h = 8 mm, and +0.2826 mm at h = 10 mm. These heights are not asserted as published clear-aperture edges.

## Conditional Expressions

The patent's principal conditions govern the stop-adjacent LR and LF doublets. Recalculation from Example 1 gives:

| Condition | Recalculated Example 1 value | Meaning |
|---|---:|---|
| (1) θgFnR − (−0.00240νdnR + 0.6694) | −0.00338 | LRN has lower relative partial dispersion than the boundary line. |
| (2) θgFpR − (−0.00083νdpR + 0.5981) | +0.00106 | LRP has higher relative partial dispersion than its boundary line. |
| (3) NdnR − NdpR | −0.08843 | Negative LR member has lower index than positive LR member. |
| (4) νdnR − νdpR | −13.70 | Rear negative member is more dispersive than rear positive member. |
| (5) fR / f | −0.8463 | LR is a strong net negative group. |
| (6) NdFP | 1.91082 | At least one front positive lens is very high index. |
| (7) θgFnF − (−0.00240νdnF + 0.6694) | −0.00198 | LFN satisfies the low-relative-partial-dispersion condition. |
| (8) θgFpF − (−0.00083νdpF + 0.5981) | +0.00294 | LFP satisfies the high-relative-partial-dispersion condition. |
| (9) NdnF − NdpF | +0.14518 | Front negative LF member has higher index than front positive member. |

These values agree with the patent's Table 1 to rounding. The most important design point is the placement of partial-dispersion-controlled cemented doublets immediately on both sides of the stop.

## Data-File Implementation Notes

The data file transcribes Numerical Data 1 without scaling. It excludes the patent GB block, because the project prescription format excludes sensor cover glass. The final data-file gap after surface 23 is therefore the air-equivalent image distance:

$$
8.52 + \frac{1.75}{1.54400} + 1.55 = 11.2034\ \text{mm}.
$$

The aperture stop is labeled `STO`, surface 20 is labeled `20A`, and the focus variable is `var["20A"] = [1.10, 9.71]`.

The patent does not publish semi-diameters. The semi-diameters in the data file are inferred clear apertures for rendering and paraxial visualization. They were checked against signed cross-gap sag intrusion, rim slope, edge thickness, and same-element front/rear semi-diameter ratio. They should not be interpreted as production mechanical diameters.

## Verification Summary

A fresh paraxial y-ν trace was run from the Numerical Data 1 prescription. The plane-parallel GB block was included for image-plane verification and then folded into the air-equivalent back focus used in the data file.

| Quantity | Patent value | Recalculated value | Note |
|---|---:|---:|---|
| Effective focal length | 32.34 mm | 32.3513 mm | Agreement within patent rounding. |
| F-number | 1.45 | patent datum | Stop diameter is not published. |
| Inferred stop semi-diameter | not published | 8.122 mm | Derived from design F/1.45 by entrance-pupil trace. |
| Air-equivalent BF after surface 23 | 11.20 mm | 11.2034 mm | Cover glass folded into air. |
| Focus group L1 focal length | 38.53 mm | 38.5385 mm | Surfaces 1-20. |
| Fixed rear group L2 focal length | 84.74 mm | 84.7420 mm | Surfaces 21-23. |
| LR cemented group focal length | −27.37 mm | −27.3754 mm | Surfaces 12-14. |
| Close-state magnification | −0.188 | −0.1878 | d20 = 9.71 mm. |
| d20 focus travel | 1.10 → 9.71 mm | +8.61 mm | L1 shifts objectward. |
| Petzval sum | not tabulated | +0.0026807 mm⁻¹ | Surface-by-surface φ/(n n′) calculation. |

Verification found no radius-sign reversal, no extra aspherical surface, and no conic-constant convention shift. The data-file implementation treats cover-glass exclusion and BFD folding, stop semi-diameter inference, semi-diameter inference, and catalog-glass uncertainty explicitly rather than leaving these points implicit.

## Sources / References

Primary patent source: JP 2018-180366 A, *Imaging Optical System and Imaging Apparatus*, Canon Inc., filed 17 April 2017 and published 15 November 2018. Numerical Data 1, the aspherical data for surface 20, the focus variable d20, and Table 1 condition values are the governing patent data for this analysis.

Canon product sources: Canon Camera Museum, **EF-M32mm f/1.4 STM**; Canon U.S.A. press release, **Canon Introduces New Lens Featuring The Largest and Fastest Aperture in The EF-M Lens Family**, 5 September 2018.

Glass catalog sources checked: OHARA public data sheets and glass tables for S-NBM51, S-NBH56, S-NBH53/S-NBH53V, S-LAH96, S-LAH58, S-TIM25, and S-NSL36; HOYA public data sheets, catalog tables, and news releases for TAFD35L, FCD505, MP-/MC-TAFD305, and TAFD40-W / TAFD40. Where no exact public match was found, the data file uses the explicit `Unmatched` convention.
