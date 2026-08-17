## Patent Reference and Design Identification

**Patent:** US 10,545,321 B2  
**Filed:** November 30, 2016  
**Priority:** December 27, 2012 (JP 2012-286012)  
**Granted:** January 28, 2020  
**Inventors:** Yoshito Iwasawa; Jun Takahashi  
**Assignee:** Tamron Co., Ltd.  
**Title:** *Zoom Lens and Camera Device*  
**Embodiment analyzed:** Example 4

The prescription modeled here is Example 4 of US 10,545,321 B2, using the lens arrangement in Fig. 13 and the numerical data in Tables 10–12 and 16. The patent describes a five-group zoom with a positive first group, negative second group, positive third group, positive fourth group, and negative fifth group. The aperture stop is published between the third and fourth groups, and the fourth group is the focusing group. A cemented pair within the third group is identified as the transversely movable anti-vibration block.

This analysis treats Example 4 as the selected production correlation for the **TAMRON SP 150-600mm f/5-6.3 Di VC USD (A011)**. Tamron does not state in the patent or on the product page that Example 4 is the production A011 prescription, so the linkage remains a design correlation rather than a manufacturer-confirmed identity. Several independent features converge on that correlation:

1. Example 4 contains 20 lens elements in 13 physical air-separated groups, matching Tamron's published 20-element/13-group construction for Model A011.
2. The patent zoom points are 152.1633, 297.4851, and 582.5200 mm, closely bracketing the marketed 150–600 mm range without any scale factor.
3. Table 11 gives raw-design f-numbers of 4.99224, 5.87742, and 6.53711. The wide value corresponds closely to the marketed f/5 designation, while the telephoto value is slower than the marketed f/6.3 designation; this mismatch is retained rather than reconciled away.
4. The patent's published near-focus states, when referenced to the physical image plane of the raw prescription, correspond to approximately 2.700 m object distance. Tamron publishes a 2.7 m minimum object distance for the A011.
5. Independent paraxial evaluation of the raw telephoto near-focus state gives approximately 1:4.76 magnification, close to Tamron's rounded 1:5 maximum-magnification specification.
6. Three elements in Example 4 use the repeated high-Abbe coordinate `nd = 1.49700`, `νd = 81.61`. This is consistent with, but does not prove the identity of, the three LD elements stated by Tamron for the A011.
7. The Japanese priority date precedes the Canon EF release of the A011 in December 2013.

The LensVisualizer prescription is a normalized representation of the patent rather than a literal 44-surface transcription. Seven 0.01–0.02 mm same-radius interlayers published at cemented junctions have been collapsed into direct cemented interfaces, with their thickness added to the downstream element span. The zero-power bookkeeping plane at source surface 36 has been removed and its variable air space transferred to modeled surface `35`. The uncounted 2.000 mm rear plate at `nd = 1.51680`, followed by 1.000 mm air, is excluded from the ordinary lens prescription and replaced by the equivalent axial air distance of 2.3185654 mm. These are modeling normalizations, not corrections to the patent.

The normalization changes the Gaussian power slightly. The final data file computes effective focal lengths of 152.226594, 297.631820, and 582.810656 mm at the three infinity zoom states. The `zoomPositions` field nevertheless retains the patent Table 11 control points so that the zoom kinematics remain source-referenced.

The physical stop position is source-published, but its clear diameter is not. The data file therefore uses a model-derived stop semi-diameter of 12.241 mm. With the normalized prescription this fixed stop gives modeled wide-open f-numbers of 4.994152, 5.871856, and 6.540615; these values populate `nominalFno`. The slightly different Table 11 source values remain source facts rather than being treated as the normalized model's exact pupil geometry.

Example 4 publishes no semi-diameter table. All surface semi-diameters in the data file are therefore modeling inferences constrained by paraxial marginal and chief rays, all published focus states, the Fig. 13 section, and the manufacturer's 95 mm filter and 105.6 mm maximum-diameter envelope. No uniform scale factor is applied. Example 4 is entirely spherical, so no aspheric coefficient transformation is involved.

## Optical Architecture

The design is a five-functional-group supertelephoto zoom with the first-order power sequence **positive – negative – positive – positive – negative**. In the normalized model the isolated functional-group focal lengths are approximately +246.062 mm for G1, −50.264 mm for G2, +79.355 mm for G3, +54.890 mm for G4, and −49.412 mm for G5. These are isolated group powers calculated from the normalized internal geometry; they are not substitutes for the in-situ powers and conjugates of the assembled zoom.

| Functional group | Elements | Isolated focal length | Principal function in the modeled system |
|---|---|---:|---|
| G1 (+) | L1–L3 | +246.062 mm | Large-diameter front collector; moves strongly with zoom |
| G2 (−) | L4–L8 | −50.264 mm | Fixed negative variator/reference group |
| G3 (+) | L9–L14 | +79.355 mm | Positive compensating group containing the VC block |
| G4 (+) | L15–L17 | +54.890 mm | Positive zoom group and published inner-focus group |
| G5 (−) | L18–L20 | −49.412 mm | Negative rear relay group |

With G2 used as an axial reference, the first surface of G1 moves from −86.47 mm relative to G2 at wide angle to −164.91 mm at telephoto, corresponding to 78.44 mm of objectward extension. G3, G4, and G5 also change position, while G2 remains fixed. The source D29 spacing is non-monotonic across the three zoom control points, 27.7980 → 17.1857 → 24.0639 mm, so the rear-group choreography cannot be represented by a simple monotonic extension.

The raw patent's telephoto physical front-to-image track is 379.1601 mm for a stated 582.5200 mm focal length, giving `Lt/fT = 0.650896`. By the project definition, `TL/EFL < 1` qualifies the telephoto end as a telephoto configuration. The back focal distance does not exceed EFL at any zoom state, so the design is not retrofocus under the project definition.

G1 and G2 perform the principal long-ratio zoom transformation: the positive front group supplies the long focal-length leverage while the compact negative G2 establishes a strong diverging stage. G3 then restores positive power and carries the image-stabilizing block. G4 supplies additional positive relay power and is translated for focusing. G5 finishes the system with negative rear power, contributing to the short physical track relative to the telephoto focal length.

The aperture stop lies between G3 and G4. Because the stop is behind the positive G3 but ahead of the focusing group, zoom motion changes its entrance-pupil magnification substantially even though the physical stop size is fixed. The normalized fixed stop produces entrance-pupil semi-diameters of approximately 15.240, 25.344, and 44.553 mm from wide to telephoto.

## Element-by-Element Analysis

The 20 elements form 13 physical air-separated units: seven cemented pairs and six singlets. Standalone focal lengths below are those stored in and independently recomputed from the normalized data file. Cemented-pair focal lengths are the net focal lengths of the corresponding normalized pair isolated in air. Their role in the assembled zoom can differ substantially from either standalone or isolated-pair power because surrounding groups and separations determine the in-situ conjugates.

### D1 — L1 + L2: weak positive cemented front pair

**L1:** `nd = 1.83400`, `νd = 37.34`. Glass: **834373 class (vendor unresolved)**. Standalone `f = −308.380 mm`.  
**L2:** `nd = 1.49700`, `νd = 81.61`. Glass: **497816 class (low-dispersion crown; vendor unresolved)**. Standalone `f = +261.851 mm`.

L1 is a negative meniscus at the front of the system, while L2 is a strong positive biconvex element. In the normalized direct-cement model the pair has a weak net positive focal length of about +1724.622 mm. This distinction matters: neither the negative standalone power of L1 nor the positive standalone power of L2 describes the pair as a whole.

The large Abbe-number difference between the two elements makes the pair a first-order chromatic-power balancing unit. The data do not identify a vendor glass or line-index dispersion curve, so this statement is limited to the relative `νd` values and does not imply apochromatic correction. The pair also keeps the very large front clear aperture from carrying excessive net power by itself.

### L3 — positive front-group meniscus

**L3:** `nd = 1.49700`, `νd = 81.61`. Glass: **497816 class (low-dispersion crown; vendor unresolved)**. Standalone `f = +286.340 mm`.

L3 is the second use of the high-Abbe 497816 coordinate in G1. Its positive standalone power combines with the weakly positive D1 pair to make G1 a +246.062 mm isolated group. In the full zoom this front group provides the principal positive collection power and undergoes the largest axial zoom displacement.

The relatively low dispersion of L3 is useful in a front group that sees a large entrance beam and whose power becomes increasingly influential toward the telephoto end. The data support that first-order dispersion observation through `νd`; they do not support a stronger anomalous-dispersion claim.

### D2 — L4 + L5: weak negative cemented pair

**L4:** `nd = 1.80518`, `νd = 25.46`. Glass: **805255 class (vendor unresolved)**. Standalone `f = +68.656 mm`.  
**L5:** `nd = 1.72916`, `νd = 54.67`. Glass: **729547 class (vendor unresolved)**. Standalone `f = −62.235 mm`.

L4 is a relatively high-index, low-Abbe positive element cemented to the negative L5. Despite the large and opposing standalone powers, the normalized pair is only weakly negative, with an isolated focal length of approximately −719.022 mm.

Placed at the entrance of G2, D2 contributes part of the negative variator power while using opposed dispersion and power signs to control the consequences of strong bending. Its in-situ effect is reinforced by the following negative content of G2 rather than by D2 alone.

### D3 — L6 + L7: negative cemented pair

**L6:** `nd = 1.80450`, `νd = 39.64`. Glass: **805396 class (vendor unresolved)**. Standalone `f = −69.035 mm`.  
**L7:** `nd = 1.80518`, `νd = 25.46`. Glass: **805255 class (vendor unresolved)**. Standalone `f = +95.864 mm`.

The L6/L7 pair remains negative after cementing: its normalized isolated focal length is approximately −236.969 mm. The closely matched refractive indices but substantially different Abbe numbers make this pair distinct from a simple index-balanced achromat; its power comes principally from curvature and the sign sequence rather than a large index jump at the cemented boundary.

Within G2, D3 adds negative power after D2 and helps establish the steep variator action required for the roughly 3.8× focal-length ratio between the published wide and tele control points.

### L8 — terminal negative element of G2

**L8:** `nd = 1.90366`, `νd = 31.31`. Glass: **904313 class (vendor unresolved)**. Standalone `f = −71.392 mm`.

L8 is a high-index biconcave negative singlet and the final element of G2. Its substantial negative standalone power completes the isolated G2 focal length of −50.264 mm. Because G2 is fixed during zooming, the changing separations on either side of this compact negative group provide a stable optical reference for the moving positive groups.

The high index permits strong negative bending in a relatively small axial package. The same 904313 coordinate reappears later in L12 and L17, where it is used as the negative member of cemented pairs rather than as a standalone singlet.

### L9 — low-dispersion positive element at the front of G3

**L9:** `nd = 1.49700`, `νd = 81.61`. Glass: **497816 class (low-dispersion crown; vendor unresolved)**. Standalone `f = +180.649 mm`.

L9 begins G3 with positive biconvex power and is the third element using the 497816 high-Abbe coordinate. In the selected production correlation, the count of these three repeated low-dispersion-coordinate elements is consistent with Tamron's statement that the A011 uses three LD elements, but the data do not establish that Tamron's three production LD elements are chemically identical to any particular catalog glass.

G3 as a whole is positive. L9 provides part of that base power before the stronger positive L10 and the two cemented pairs that follow.

### L10 — strong positive biconvex element

**L10:** `nd = 1.48749`, `νd = 70.44`. Glass: **487704 class (vendor unresolved)**. Standalone `f = +85.956 mm`.

L10 is a comparatively low-index, high-Abbe positive biconvex singlet. Its +85.956 mm standalone focal length makes it one of the stronger positive elements in G3. The high Abbe number complements the denser, lower-Abbe negative elements farther back in the group.

Its position immediately ahead of D4 helps build the positive relay before the transversely movable negative D5 block. That sequence allows G3 to remain positive even though the stabilization block itself is net negative.

### D4 — L11 + L12: nearly power-balanced positive pair

**L11:** `nd = 1.48749`, `νd = 70.44`. Glass: **487704 class (vendor unresolved)**. Standalone `f = +77.986 mm`.  
**L12:** `nd = 1.90366`, `νd = 31.31`. Glass: **904313 class (vendor unresolved)**. Standalone `f = −80.833 mm`.

L11 and L12 have nearly equal and opposite standalone focal lengths, but the cemented geometry leaves a weak positive net pair of approximately +1474.129 mm. The large difference in index and Abbe number provides strong dispersion leverage at the cemented interface while keeping net pair power small.

In situ, D4 is not merely a weak positive lens: it sits between the strong positive L10 and the negative VC pair D5. Its principal architectural value is therefore the controlled transition of ray slope and dispersion within a G3 group whose net isolated power is +79.355 mm.

### D5 — L13 + L14: negative VC block

**L13:** `nd = 1.74400`, `νd = 44.79`. Glass: **744448 class (vendor unresolved)**. Standalone `f = −33.122 mm`.  
**L14:** `nd = 1.80610`, `νd = 33.27`. Glass: **806333 class (vendor unresolved)**. Standalone `f = +46.125 mm`.

The cemented L13/L14 block is explicitly identified by the patent as the member moved transversely to shift the image for vibration compensation. Its normalized isolated focal length is approximately −110.596 mm, so it is a net negative block embedded within the otherwise positive G3.

This negative net power is central to the stabilization sensitivity expressed by patent condition (4). The raw-patent paraxial calculation gives `βa = 3.13640` for the movable block and `βb = 0.691838` for the following system at telephoto, yielding `(1 − βa)βb = −1.478045`, which reproduces the Table 16 value −1.4781 to the source precision.

The centered LensVisualizer prescription records the axial construction and identifies D5 as the VC block; it does not add a fabricated transverse decenter state or displacement magnitude that the selected numerical table does not publish.

### L15 — positive front element of the focusing group

**L15:** `nd = 1.51742`, `νd = 52.15`. Glass: **517522 class (vendor unresolved)**. Standalone `f = +63.614 mm`.

L15 is a positive biconvex singlet and the first element of G4. It supplies most of the immediately visible positive bending in the focusing group before the more nearly power-balanced D6 pair.

G4 has an isolated focal length of +54.890 mm and moves as a unit for close focusing. The published focus motion therefore changes the conjugates of this entire positive group rather than changing internal spacings among L15–L17.

### D6 — L16 + L17: weak positive cemented pair

**L16:** `nd = 1.51823`, `νd = 58.96`. Glass: **518590 class (vendor unresolved)**. Standalone `f = +48.510 mm`.  
**L17:** `nd = 1.90366`, `νd = 31.31`. Glass: **904313 class (vendor unresolved)**. Standalone `f = −51.942 mm`.

D6 again combines a lower-index, higher-Abbe positive element with a dense, lower-Abbe negative element. The normalized pair remains weakly positive, with an isolated focal length of approximately +483.025 mm.

The pair's modest net power means L15 dominates the gross positive power of G4, while D6 provides additional control of ray bending and dispersion near the rear of the moving focus group. Since the entire G4 translates during focusing, D6's in-situ role changes with object distance even though its cemented geometry is fixed.

### L18 — negative lead element of G5

**L18:** `nd = 1.83481`, `νd = 42.72`. Glass: **835427 class (vendor unresolved)**. Standalone `f = −40.557 mm`.

L18 is a strong negative meniscus at the front of the rear group. It supplies the dominant negative standalone power in G5 and is followed by a weakly positive cemented pair. The combination leaves G5 with an isolated focal length of −49.412 mm.

The rear negative group helps compress the physical track relative to the telephoto focal length and participates in the changing rear conjugates as the zoom groups move.

### D7 — L19 + L20: positive cemented rear pair

**L19:** `nd = 1.48749`, `νd = 70.44`. Glass: **487704 class (vendor unresolved)**. Standalone `f = −39.412 mm`.  
**L20:** `nd = 1.72047`, `νd = 34.71`. Glass: **720347 class (vendor unresolved)**. Standalone `f = +35.612 mm`.

The standalone powers are opposite in sign and close in magnitude, yet the normalized cemented pair is net positive with an isolated focal length of approximately +304.739 mm. Combined with the stronger negative L18, G5 remains net negative.

The L20 coordinate lies extremely close to current Schott N-KZFS8 and OHARA S-NBH8 catalog coordinates, but the patent does not name a vendor. The data therefore preserve the vendor-unresolved 720347 class instead of assigning either proprietary name. No anomalous-partial-dispersion parameter is imported from those catalog families.

## Glass Identification and Selection

Example 4 publishes only d-line refractive index and Abbe number. It does not publish glass-maker names, melt codes, C/F/g line indices, Sellmeier coefficients, or `dPgF`. The final data file therefore uses neutral six-digit coordinate classes rather than vendor-specific identities.

| Neutral class | `nd` | `νd` | Elements | First-order use in the design |
|---|---:|---:|---|---|
| 834373 | 1.83400 | 37.34 | L1 | Dense negative front meniscus |
| 497816 | 1.49700 | 81.61 | L2, L3, L9 | High-Abbe positive members in G1 and G3 |
| 805255 | 1.80518 | 25.46 | L4, L7 | High-index, low-Abbe positive members in G2 |
| 729547 | 1.72916 | 54.67 | L5 | Negative partner in D2 |
| 805396 | 1.80450 | 39.64 | L6 | Negative member of D3 |
| 904313 | 1.90366 | 31.31 | L8, L12, L17 | Dense negative singlet/pair members |
| 487704 | 1.48749 | 70.44 | L10, L11, L19 | High-Abbe members in G3 and G5 |
| 744448 | 1.74400 | 44.79 | L13 | Negative VC element |
| 806333 | 1.80610 | 33.27 | L14 | Positive VC partner |
| 517522 | 1.51742 | 52.15 | L15 | Positive focusing-group singlet |
| 518590 | 1.51823 | 58.96 | L16 | Positive member of D6 |
| 835427 | 1.83481 | 42.72 | L18 | Negative rear-group singlet |
| 720347 | 1.72047 | 34.71 | L20 | Positive rear cemented member |

A fresh comparison against current authoritative optical-glass catalogs shows why vendor-neutral labels are appropriate. For example, the 1.49700/81.61 coordinate is reproduced at patent precision by multiple current catalogs, including HOYA FCD1, Schott N-PK52A, and CDGM H-FK61, while OHARA S-FPL51 is effectively coincident. Likewise, the 1.80518/25.46 coordinate has exact or near-exact equivalents from several vendors. A coordinate match alone therefore cannot establish which production glass Tamron used.

The 1.72047/34.71 coordinate of L20 is unusually close to Schott N-KZFS8 and OHARA S-NBH8. Those catalog families are associated with distinctive partial-dispersion behavior, but that property is not transferred into this model because neither the patent nor a unique production-glass identification supplies the necessary line data. Accordingly, the data carry no `nC`, `nF`, `ng`, or `dPgF` fields and the analysis does not characterize the lens as apochromatic.

The strongest chromatic pattern visible directly from the prescription is the repeated use of high-Abbe positive material at 1.49700/81.61 and 1.48749/70.44 against denser, lower-Abbe negative partners such as 1.90366/31.31. This is sufficient to describe first-order chromatic power balancing, but not secondary-spectrum performance.

## Focus Mechanism

The focus model is **PUBLISHED** rather than reconstructed. Table 12 specifies close-focus changes to D29 and D36 at all three zoom positions. In the normalized data, source D29 is the gap after `STO`, while source D36 is carried by surface `35` because the zero-power source surface 36 has been removed.

G4, containing L15–L17, moves toward the object for closer focus. The two adjacent gaps change by equal and opposite amounts, so their sum is conserved at each zoom position:

| Zoom state | D29 infinity | D29 near | D36 infinity | D36 near | G4 objectward travel |
|---|---:|---:|---:|---:|---:|
| 152.1633 mm | 27.7980 mm | 26.1916 mm | 13.6386 mm | 15.2450 mm | 1.6064 mm |
| 297.4851 mm | 17.1857 mm | 13.2535 mm | 8.2816 mm | 12.2138 mm | 3.9322 mm |
| 582.5200 mm | 24.0639 mm | 12.8804 mm | 2.5000 mm | 13.6835 mm | 11.1835 mm |

This is a conventional inner-focus action in the sense that a positive internal group translates while the front group does not execute an additional focus motion. The focus travel grows substantially toward the telephoto end because the same final object distance requires a larger internal conjugate change at the long focal-length state.

The patent defines D(0) from the first lens surface to the object, giving 2399.28, 2352.02, and 2320.84 mm at the three near-focus states. Adding the raw patent's physical first-surface-to-image track gives 2.700 m to source precision. The normalized LensVisualizer model replaces the uncounted rear plate with an air-equivalent distance, so its geometric track is about 0.6814 mm shorter than the raw physical track; `closeFocusM: 2.7` therefore records the source/manufacturer object distance rather than pretending that the normalized axial coordinate is the original physical stack.

At the raw published near states, independent first-order tracing gives approximate lateral magnifications of 1:17.37, 1:9.07, and 1:4.76 from wide to telephoto. The telephoto result is consistent with Tamron's rounded 1:5 product specification, while the difference is retained as the expected distinction between a patent paraxial model and a marketed production figure.

## Chromatic Correction Strategy

The prescription distributes high-Abbe positive material across both the front and middle positive groups rather than concentrating all low-dispersion glass in one cell. L2 and L3 occupy G1, while L9 begins G3. This distribution is consistent with the need to control longitudinal and lateral color across a long-ratio telephoto zoom, where ray heights and group magnifications change substantially with focal length.

Several cemented pairs use nearly cancelling positive and negative standalone powers with large `νd` differences. D4, for example, combines L11 at 1.48749/70.44 and +77.986 mm with L12 at 1.90366/31.31 and −80.833 mm, leaving only weak positive net power. D6 follows the same broad strategy in the focusing group. Such pairs can provide significant chromatic leverage without imposing an equally large net paraxial power on the containing group.

Tamron describes the production A011 as using three LD elements. The selected Example 4 contains exactly three occurrences of the 1.49700/81.61 high-Abbe coordinate, and L2, L3, and L9 therefore carry `apd: "inferred"` diagram tags. The correspondence is not asserted as a vendor or melt identification; it is one of the convergent production-correlation clues, not proof of the glass chemistry.

No APO, super-ED, fluorite, or quantitative anomalous-partial-dispersion performance claim is made. The model has only d-line `nd`/`νd` information for these vendor-unresolved classes, so the inferred tags expose Tamron's LD classification without pretending to represent secondary-spectrum behavior faithfully.

## Image Stabilization

The patent places the anti-vibration function in D5, the cemented L13/L14 block inside G3. L13 is a strong negative biconcave element and L14 a positive meniscus; their normalized cemented net focal length is approximately −110.596 mm. The negative block is therefore embedded within a G3 group whose overall isolated power remains positive at +79.355 mm.

At telephoto, the patent's condition (4) constrains the image-shift sensitivity of the transversely movable block through `(1 − βa)βb`. Independent raw-prescription tracing gives −1.478045, agreeing with the Table 16 value −1.4781. This falls inside the patent's stated range of −2.8 to −1.0.

Tamron's product specification lists VC for the Canon EF and Nikon F versions. The Sony A version is listed without optical VC because Tamron states that Sony DSLR bodies provide in-body stabilization. The optical prescription itself is shared in the data file across the Canon EF, Nikon F, and Sony A mount variants; the centered sequential model identifies the D5 stabilization block but does not simulate a mount-specific actuator or a transverse stabilization stroke.

## Conditional Expressions

US 10,545,321 B2 defines several normalized conditions intended to constrain zoom travel, group powers, stabilization sensitivity, and telephoto compactness. The raw Example 4 prescription independently reproduces the Table 16 values to the published precision:

| Condition | General patent range | Independent Example 4 value | Table 16 |
|---|---:|---:|---:|
| `X1 / fT` | 0.11 to 0.28 | 0.134656 | 0.1347 |
| `f1 / sqrt(fw·fT)` | 0.5 to 1.3 | 0.826490 | 0.8265 |
| `f3 / sqrt(fw·fT)` | 0.20 to 0.45 | 0.266533 | 0.2665 |
| `(1 − βa)·βb` | −2.8 to −1.0 | −1.478045 | −1.4781 |
| `Lt / fT` | 0.60 to 0.75 | 0.650896 | 0.6509 |

For condition (1), `X1 = 78.44 mm` is the first-group displacement between the wide and telephoto ends. Condition (5) uses the raw patent's physical track, including the rear plate segment, because that is the geometry from which Table 16 was generated. The normalized LensVisualizer air-equivalent rear spacing should not be substituted into the source's own condition value.

The five results show that Example 4 occupies the intended design region rather than merely sharing a similar focal range. In particular, the compactness condition and the negative stabilization sensitivity are consistent with the architecture seen in Fig. 13: a long effective focal length is obtained from a substantially shorter physical system while the image-stabilizing block remains internal to G3.

## Verification Summary

Independent sequential height/reduced-angle tracing and a separately assembled ABCD matrix agree to numerical precision for every defined zoom and focus state of the final TypeScript prescription. The normalized infinity-state EFLs are 152.226594, 297.631820, and 582.810656 mm.

The fixed 12.241 mm stop semi-diameter yields modeled wide-open f-numbers of 4.994152, 5.871856, and 6.540615. These are the values authored in `nominalFno`. They remain within 0.1% of the raw patent Table 11 f-numbers despite the required cement-interface normalization.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives `+0.0006239743 mm⁻¹`. Because only air spaces move during zooming, the Petzval sum is invariant across zoom positions.

Independent geometry checks of the final data give a minimum element edge thickness of approximately 1.049 mm, a maximum spherical rim angle of 31.02°, and a maximum shared-band cross-gap intrusion ratio of 0.8394 against the model limit of 0.90. All on-axis infinity marginal rays and all axial published near-focus marginal rays clear the modeled surfaces. No aspheric conic-limit check applies because the prescription is all-spherical.

The normalized first-surface-to-image tracks are 300.038465, 347.302865, and 378.478665 mm. Those values are model coordinates after replacing the rear plate by its air-equivalent propagation and should not be substituted for the patent's physical track when evaluating source condition (5).

## Sources and References

1. **US 10,545,321 B2**, Yoshito Iwasawa and Jun Takahashi, *Zoom Lens and Camera Device*, granted January 28, 2020. Example 4: Fig. 13; Tables 10–12 and 16. The supplied patent PDF is the numerical authority for the prescription, zoom/focus states, stabilization block, and conditional expressions.
2. **Tamron Co., Ltd., SP 150-600mm F/5-6.3 Di VC USD (Model A011), Specifications.** Official product specification: https://www.tamron.com/global/consumer/lenses/a011/spec.html . Used for the marketed 150–600 mm identity, 20-element/13-group construction, 2.7 m minimum object distance, 1:5 maximum magnification, 95 mm filter, 105.6 mm maximum diameter, nine-blade diaphragm, production mounts, and release dates.
3. **Tamron Co., Ltd., SP 150-600mm F/5-6.3 Di VC USD (Model A011), product page.** https://www.tamron.com/global/consumer/lenses/a011/ . Used for Tamron's statement that the production lens employs three LD elements and for product-level VC/USD identification.
4. **Tamron Co., Ltd., Discontinued Product List.** https://www.tamron.com/global/consumer/lenses/discontinued/ . Used as a current manufacturer record of the Canon EF, Nikon F, and Sony A A011 variants and discontinuation status.
5. **Current optical-glass catalogs and data portals:** OHARA (https://www.ohara-inc.co.jp/en/product/catalog/), HOYA (https://www.hoya-opticalworld.com/english/datadownload/index.html), SCHOTT (https://www.schott.com/en-us/products/optical-glass-p1000267/downloads), HIKARI (https://www.hikari-g.co.jp/optical_glass/), CDGM (https://www.cdgmgd.com/), and Sumita (https://www.sumita-opt.co.jp/en/download/). These are used only to test the patent `nd`/`νd` coordinates against current catalog families; the data retain vendor-unresolved classes where a unique production-glass identity is not defensible.
6. **Companion verification artifacts:** `TamronSPA011150600mmf563VC.stage4.verify.py` and `TamronSPA011150600mmf563VC.stage4.calculations.json`. These provide the fresh independent y–ν/ABCD, EFL, principal-plane, pupil, Petzval, focus, element/group-power, condition, glass-residual, and geometry checks cited above.
