# CANON EF 100-400mm f/4.5-5.6 L IS USM

## Patent Reference and Design Identification

**Patent:** JP 2000-47107 A  
**Filed:** 1998-07-30  
**Published:** 2000-02-18  
**Inventor:** Hiroshi Endo  
**Applicant:** Canon Inc.  
**Title:** Zoom Lens  
**Embodiment analyzed:** Numerical Example 2

The prescription analyzed here is Numerical Example 2 of JP 2000-47107 A. The patent defines a six-functional-group zoom lens with positive, negative, positive, negative, positive, and negative refractive-power groups from object to image side, respectively (¶0017). The Example 2 numerical table gives three zoom states at 102.68, 161.53, and 389.19 mm, with published f-numbers of 4.6, 5.1, and 5.8. The prescription is used at its published scale; it is not rescaled to the marketed 100-400 mm range.

The project treats the selected production correlation with the original CANON EF 100-400mm f/4.5-5.6 L IS USM as fixed, but the correlation is not a statement that Canon explicitly identified this patent as the production prescription. The principal evidence is convergent:

1. Canon marketed the production lens in November 1998, four months after the patent filing date.
2. The modeled Example 2 prescription contains 17 physical elements in 14 air-separated groups, matching Canon's production specification of 17 elements in 14 groups.
3. The patent design range of 102.68-389.19 mm at f/4.6-5.8 closely corresponds to the marketed 100-400 mm f/4.5-5.6 range while remaining distinct from those rounded product labels.
4. The patent identifies the sixth group as the principal focusing group and the fourth group as a floating compensator (¶0042). Canon describes the production lens as using rear-focus floating focusing and specifies a 1.8 m minimum focusing distance and 0.2x maximum magnification.
5. The patent permits image stabilization by moving the second group perpendicular to the optical axis (¶0043). Canon identifies the production lens as an Image Stabilizer model.
6. Canon documents fluorite and Super UD use in the production lens. The prescription contains two unusually low-dispersion positive elements, E3 at nd = 1.43387, νd = 95.1 and E7 at nd = 1.43875, νd = 95.0. Their production-material labels in the data file are explicitly correlations, not patent-supplied vendor identities.

The structured metadata therefore follows the selected patent and product correlation: Canon EF mount, 135 full-frame format, JP 2000-47107 A, Hiroshi Endo, Canon Inc., and publication year 2000.

## Optical Architecture

The lens is an all-spherical, six-functional-group zoom with group-power sequence **positive-negative-positive-negative-positive-negative**. The patent's functional-group count is not the same quantity as the production specification's 14 physical groups. Example 2 contains 17 glass elements separated into 14 air-spaced physical groups, while the six larger functional groups describe the zoom and focus architecture.

From object to image side, G1 contains E1-E3; G2 contains E4-E6; G3 contains E7-E9; G4 is the single element E10; G5 contains E11-E14; and G6 is the cemented E15-E17 triplet. The aperture stop lies between G3 and G4 at patent surface 19. The patent specifically describes G3 as a positive lens, a negative meniscus, and a positive lens and states that this arrangement suppresses aberration variation during zooming (¶0028). It also describes G6 as a three-element cemented unit in the relevant examples, reducing internal surface reflections and simplifying mechanical assembly (¶0028, ¶0045).

During zooming from wide to tele, G2 remains fixed while G1, G3, G4, G5, and G6 move toward the object side (¶0027). The three published states show no movement reversal. Independent tracing of the final data gives first-vertex-to-image tracks of 232.29, 265.64, and 315.69 mm. Under the project's quantitative definition, only the 389.19 mm endpoint is telephoto in the strict sense: TL/EFL = 0.8112 there, whereas the wide and middle states have TL/EFL greater than 1. No state is retrofocus because BFD remains below EFL throughout the modeled range.

The data file preserves the patent radii, refractive indices, and ordinary spacings without uniform scaling. One optically inactive patent plane is normalized out: source surface 7 is plane, air-to-air, and followed by a constant 2.00 mm spacing. It is omitted, with that 2.00 mm folded into the preceding air gap so that the axial station of source surface 8 is unchanged. No cover glass, filter, sensor plate, folded path, or mechanical part is included, and no patent numerical value is corrected.

The patent publishes the stop location and the three f-number values but not a physical stop diameter. Accordingly, the authored stop semi-diameter is a modeling inference based on the wide-state entrance-pupil solution; the variable-aperture model is governed by the published design sequence f/4.6, f/5.1, and f/5.8. The patent also does not tabulate clear semi-diameters. The surface semi-diameters in the data file are modeled values derived from verified ray envelopes and constrained by the patent's Fig. 6 optical proportions and Canon's 77 mm production filter diameter. These dimensions are not presented as patent-published apertures.

## Element-by-Element Analysis

### E1 — Positive Meniscus, G1

**nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor not established). Standalone f in air = +312.262060 mm.**

E1 is the front positive collector of G1. Its standalone focal length is the value obtained when the physical element is isolated in air; it is not the in-situ focal length of G1. In the assembled zoom, its function is inseparable from E2 and E3 and from the motion of the complete first group.

### E2 — Negative Meniscus, G1

**nd = 1.74950, νd = 35.0. Glass: 750350 class (lanthanum flint coordinate family; vendor not established). Standalone f in air = -248.870426 mm.**

E2 supplies negative power inside the otherwise positive first functional group. The relatively high index and low Abbe number distinguish it from the two positive neighbors. The resulting G1 is a compound positive group rather than a simple front positive lens.

### E3 — Biconvex Positive, G1

**nd = 1.43387, νd = 95.1. Glass: Fluorite (CaF2; production correlation). Standalone f in air = +155.615754 mm.**

E3 is the strongest positive element of G1 by standalone power. Its very low index and very high Abbe number are fluorite-like. Canon independently documents one fluorite element in the production lens, so the data file correlates E3 with that material; the patent itself supplies only the optical coordinates and does not name CaF2 or a supplier.

### E4 — Biconcave Negative, G2

**nd = 1.71300, νd = 53.9. Glass: 713539 class (vendor not established). Standalone f in air = -71.239377 mm.**

E4 begins the fixed negative second functional group. The patent makes G2 stationary during zooming (¶0027) and treats its negative power as a central part of the compact zoom-power distribution. The patent's discussion of condition (8) limits the magnitude of G2 power so that compactness does not force excessive zoom travel or aberration growth (¶0032-¶0033).

### E5-E6 — Cemented Pair D1, G2

**E5: nd = 1.62299, νd = 58.2. Glass: 623582 class (S-BSM15/BACD15 coordinate family; vendor not established). Standalone f in air = -48.620801 mm.**  
**E6: nd = 1.84666, νd = 23.8. Glass: 847238 class (dense flint coordinate family; vendor not established). Standalone f in air = +76.233815 mm.**

E5 and E6 share the source surface-11 cemented interface. The interface therefore changes directly from E5 glass to E6 glass, with no synthetic cement layer in the model. Their opposite standalone powers and strongly separated dispersion coordinates form a compact compound component within negative G2. The individual standalone focal lengths must not be confused with the net power of the cemented pair or the in-situ power of G2.

### E7 — Biconvex Positive, G3

**nd = 1.43875, νd = 95.0. Glass: 439950 class (S-FPL53 coordinate; Canon Super UD correlation; vendor not established). Standalone f in air = +71.394018 mm.**

E7 is the strong positive front element of G3. Its coordinates coincide closely with the S-FPL53 family, but the patent does not establish an OHARA production supplier. Canon independently states that the production lens uses Super UD glass, so the data file identifies E7 only as a Super-UD-correlated coordinate class.

### E8 — Negative Meniscus, G3

**nd = 1.70154, νd = 41.2. Glass: 702412 class (vendor not established). Standalone f in air = -167.187167 mm.**

E8 is the negative middle component of the positive third functional group. This is the negative meniscus specifically called out in the patent's G3 arrangement (¶0028). Between positive E7 and E9, it contributes the alternating power pattern that the patent associates with reduced aberration change during zooming.

### E9 — Positive Meniscus, G3

**nd = 1.62012, νd = 49.5. Glass: K-SSK9 coefficient proxy (patent nd=1.62012, nu_d=49.5; production supplier unspecified). Standalone f in air = +161.249705 mm.**

E9 closes G3 with positive power. SUMITA K-SSK9 has the same catalog refractive index and νd = 49.8, only 0.3 above the patent coordinate. Its catalog polynomial is therefore used as a qualified spectral proxy so the element can participate in chromatic rendering. The label does not assert that SUMITA supplied the production glass.

### E10 — Negative Meniscus, Floating G4

**nd = 1.60311, νd = 60.6. Glass: 603606 class (SK14 coordinate family; vendor not established). Standalone f in air = -135.379089 mm.**

E10 is the complete fourth functional group. The patent describes G4 as a negative meniscus and permits its focal length to satisfy condition (11) over a broader zoom range (¶0038, ¶0040). More importantly, G4 is the floating focus-compensation group: during close focusing it moves objectward while G6 moves imageward. The patent states that G4 compensates focus-induced aberration variation, particularly wide-end image-surface behavior, and that its travel for a given object distance can be kept approximately independent of focal length (¶0041-¶0042).

### E11 — Biconvex Positive, G5

**nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor not established). Standalone f in air = +109.887227 mm.**

E11 begins the positive fifth group. G5 is a four-element relay group placed between the floating negative G4 and the rear-focus triplet G6. The patent's condition (10) constrains the fifth-group power relative to telephoto focal length so that shortening the system does not produce excessive aberration, particularly at the wide end (¶0035).

### E12 — Negative Meniscus, G5

**nd = 1.80518, νd = 25.4. Glass: 805254 class (high-index flint coordinate family; vendor not established). Standalone f in air = -68.025992 mm.**

E12 is the negative member of G5 and has the lowest Abbe number in that group. The patent describes the fifth group as positive, negative, positive, positive from object to image side (¶0046), matching E11-E14 in the final data.

### E13 — Biconvex Positive, G5

**nd = 1.51633, νd = 64.1. Glass: 516641 class (S-BSL7 coordinate family; vendor not established). Standalone f in air = +107.219815 mm.**

E13 restores positive power after E12 and uses a conventional crown-like coordinate. Its role is therefore best understood as part of the compound G5 relay rather than as an isolated positive lens. The patent attributes the four-element G5 arrangement to correction of focus-dependent tele-end spherical-aberration variation and sagittal image-surface variation while retaining compactness (¶0046).

### E14 — Positive Meniscus, G5

**nd = 1.66672, νd = 48.3. Glass: 667483 class (BAF11 coordinate family; vendor not established). Standalone f in air = +66.418330 mm.**

E14 is the strongest positive member of G5 by standalone focal length and completes the positive-negative-positive-positive sequence stated in the patent. It also forms the final powered element before the large zoom-dependent air space to G6.

### E15-E17 — Cemented Rear-Focus Triplet T1, G6

**E15: nd = 1.83481, νd = 42.7. Glass: 835427 class (S-LAH55V coordinate family; vendor not established). Standalone f in air = -48.104335 mm.**  
**E16: nd = 1.72825, νd = 28.5. Glass: 728285 class (dense flint coordinate family; vendor not established). Standalone f in air = +44.640957 mm.**  
**E17: nd = 1.77250, νd = 49.6. Glass: 773496 class (high-index lanthanum family; vendor not established). Standalone f in air = -57.598621 mm.**

The three elements are cemented directly at source surfaces 31 and 32 and together constitute negative G6. The patent identifies G6 as the principal focusing group (¶0042) and specifies that the three lenses are cemented (¶0045). The negative-positive-negative internal power sequence is therefore distinct from the net negative power of the complete triplet.

The patent also notes a practical advantage of cementing G6 in Numerical Examples 2-4: reducing surface-reflection ghost paths and simplifying integration into the barrel (¶0028). In the LensVisualizer prescription the triplet moves as one focus group; no artificial cement media are inserted at either junction.

## Glass Identification and Selection

The patent tabulates refractive-index and Abbe-number pairs but does not name glass vendors. The data file therefore uses vendor-neutral six-digit classes or explicitly qualified coordinate families unless the production correlation supplies a defensible material-class interpretation. The d-line interpretation itself is catalog-supported: many of the source coordinates coincide with established six-digit nd/νd families. The E13 coordinate (nd = 1.51633, νd = 64.1) matches the S-BSL7 coordinate family to the patent's stated precision; it is not a BK7 coordinate.

| Element(s) | Authored identification | nd | νd | Status |
|---|---|---:|---:|---|
| E1, E11 | 487702 class | 1.48749 | 70.2 | Vendor not established |
| E2 | 750350 lanthanum-flint class | 1.74950 | 35.0 | Vendor not established |
| E3 | Fluorite (CaF2) | 1.43387 | 95.1 | Production correlation |
| E4 | 713539 class | 1.71300 | 53.9 | Vendor not established |
| E5 | 623582 S-BSM15/BACD15 coordinate class | 1.62299 | 58.2 | Vendor not established |
| E6 | 847238 dense-flint class | 1.84666 | 23.8 | Vendor not established |
| E7 | 439950 / S-FPL53-coordinate class | 1.43875 | 95.0 | Canon Super UD correlation; vendor not established |
| E8 | 702412 class | 1.70154 | 41.2 | Vendor not established |
| E9 | K-SSK9 coefficient proxy | 1.62012 | 49.5 | Catalog νd = 49.8; production supplier unspecified |
| E10 | 603606 / SK14-coordinate class | 1.60311 | 60.6 | Vendor not established |
| E12 | 805254 high-index flint class | 1.80518 | 25.4 | Vendor not established |
| E13 | 516641 / S-BSL7-coordinate class | 1.51633 | 64.1 | Vendor not established |
| E14 | 667483 / BAF11-coordinate class | 1.66672 | 48.3 | Vendor not established |
| E15 | 835427 / S-LAH55V-coordinate class | 1.83481 | 42.7 | Vendor not established |
| E16 | 728285 dense-flint class | 1.72825 | 28.5 | Vendor not established |
| E17 | 773496 high-index lanthanum class | 1.77250 | 49.6 | Vendor not established |

E3 and E7 are the two conspicuously high-Abbe positive elements. Their locations in separate positive functional groups provide a plausible chromatic-correction distribution across the zoom, and Canon independently documents fluorite and Super UD use in the production lens. The exact assignment of E3 to fluorite and E7 to the Super-UD-correlated class remains a production-correlation inference rather than a patent material statement.

No element in the patent carries published `nC`, `nF`, `ng`, `PgF`, or `dPgF` data, and no production glass supplier is established by the selected source. Consequently, the analysis does not claim apochromatic correction or anomalous-partial-dispersion behavior from the authored `nd`/`νd` pairs alone.

## Focus Mechanism

The patent uses rear focusing with a floating compensator. G6 is the principal focusing group and moves toward the image side for closer focus. G4 moves toward the object side and compensates focus-induced aberration variation (¶0042). The patent further states that, for the same object distance, G4 travel can remain approximately constant with focal length while G6 travel increases as focal length becomes longer (¶0041-¶0042).

The patent supplies 4 m focus examples at the wide and tele endpoints. At those published states, G4 moves -1.000 mm in both cases, while G6 moves +0.754 mm at wide and +5.610 mm at tele. Independent paraxial tracing shows that the tabulated values are consistent with an object-distance reference to the image/focal plane at source precision.

The final data file extends this mechanism to the production lens's published 1.8 m minimum-focus specification by **constrained reconstruction**. The close-focus rows are not patent-published. Canon's 1.8 m minimum focusing distance and 0.2x maximum magnification are rounded product specifications, so they are used only as reconstruction targets: the model solves the tele state to those targets, holds the same-distance G4 travel constant across the three zoom positions, and solves G6 for the 1.8 m image-plane conjugate at each state. The resulting precise internal travels are one mechanism-compatible paraxial solution and are not measurements of the production lens.

| Zoom state | G4 shift | G6 shift | Reconstructed object-to-image distance | Paraxial magnification |
|---|---:|---:|---:|---:|
| 102.68 mm | -3.962866 mm | +1.719139 mm | 1800.000 mm | -0.060665x |
| 161.53 mm | -3.962866 mm | +3.410179 mm | 1800.000 mm | -0.092847x |
| 389.19 mm | -3.962866 mm | +12.603072 mm | 1800.000 mm | -0.200000x |

The reconstructed motion is encoded only in the four affected air spaces: the stop-to-G4 gap decreases as G4 moves objectward, the G4-to-G5 gap increases by the same amount, the G5-to-G6 gap increases as G6 moves imageward, and back focus decreases correspondingly. The two front variable gaps remain zoom-only. No additional internal focus state is invented beyond this mechanism-constrained model.

## Chromatic Correction Strategy

The source prescription distributes very low-dispersion positive material between G1 and G3 rather than concentrating it in one rear group. E3 has νd = 95.1 and E7 has νd = 95.0; both are positive elements embedded in compound positive functional groups. This arrangement is consistent with the production lens's documented use of fluorite and Super UD material, but the patent itself gives only optical coordinates.

The chromatic interpretation must remain limited by the available data. The two high-Abbe elements clearly reduce primary dispersion relative to ordinary crown/flint choices, and the surrounding negative elements provide strongly different dispersion coordinates. However, secondary-spectrum or apochromatic performance cannot be established from Abbe numbers alone. No such claim is made here because the selected patent does not publish line indices or anomalous-partial-dispersion data for the elements.

## Conditional Expressions

JP 2000-47107 A places explicit constraints on the five principal inter-group separations, zoom-group powers, first-group travel, fourth-group power over the broader-range embodiment, and sixth-group focus magnification (¶0017, ¶0029-¶0039). The final data reproduces the Example 2 condition values when the inactive source surface 7 is folded into the first inter-group air space.

| Condition | Computed from final data | Patent interval | Result |
|---|---:|---:|---|
| D1W < D1T | 9.74 < 93.13 mm | inequality | Pass |
| D2W > D2T | 20.89 > 6.44 mm | inequality | Pass |
| D3W < D3T | 14.91 < 23.25 mm | inequality | Pass |
| D4W > D4T | 26.80 > 10.38 mm | inequality | Pass |
| D5W > D5T | 22.57 > 1.94 mm | inequality | Pass |
| m1 / fT | -0.214266 | -0.23 to -0.19 | Pass |
| f1 / fT | 0.465709 | 0.44 to 0.52 | Pass |
| abs(f2) / fT | 0.118451 | 0.11 to 0.15 | Pass |
| f3 / fT | 0.182174 | 0.16 to 0.25 | Pass |
| f5 / fT | 0.136415 | 0.12 to 0.16 | Pass |
| abs(f4) / fT | 0.347848 | 0.28 to 0.40 | Pass |
| β6W | 2.159893 | 2.0 to 2.4 | Pass |
| β6T | 2.835174 | 2.6 to 3.0 | Pass |

For β6, the calculation uses the complete thick G6 matrix and the rear conjugate, not a thin-group approximation. The condition table therefore distinguishes functional-group behavior from the standalone powers listed for individual elements.

## Image Stabilization

The patent explicitly provides an image-stabilization mechanism in which G2 is displaced perpendicular to the optical axis to correct image displacement from camera shake (¶0043). This is consistent with Canon's identification of the production EF 100-400mm f/4.5-5.6L IS USM as an Image Stabilizer lens.

The LensVisualizer data remains a centered sequential prescription. It does not author a decentered G2 state or attempt to simulate the production stabilizer's lateral travel. The IS relationship is therefore a patent and product fact used in the production correlation, not an active movement state in the current data model.

## Verification Summary

Independent first-order tracing of the final TypeScript arrays reproduces the three patent focal-length and back-focus states within source-precision tolerances. The computed effective focal lengths are 102.687377, 161.538218, and 389.165258 mm, compared with published values of 102.68, 161.53, and 389.19 mm. Computed back focal distances are 74.016001, 86.930195, and 117.166927 mm, compared with the source values 74.01, 86.92, and 117.18 mm.

Sequential height/reduced-angle tracing and independent ABCD matrices agree to numerical precision. The surface-by-surface Petzval sum, evaluated as φ/(n·n′), is +0.000770590903 mm⁻¹. All 17 authored standalone element focal lengths also reproduce from the final radii, thicknesses, and refractive indices.

The reconstructed 1.8 m focus states trace to the selected reconstruction target of 1800.000 mm object-to-image distance at all three zoom positions, with the tele endpoint calibrated to the rounded product target of -0.200000x paraxial magnification. Geometry checks on the authored semi-diameters retain positive edge thickness and positive physical cross-gap clearance in all defined infinity and reconstructed close-focus states. These semi-diameters remain modeling values rather than source-published apertures.

No aspherical surfaces are present in Numerical Example 2, so there are no conic conventions, polynomial coefficients, asphere departures, or scale-transformed aspheric terms to report.

## Sources and References

1. **JP 2000-47107 A**, *Zoom Lens*, Canon Inc., inventor Hiroshi Endo, filed 1998-07-30, published 2000-02-18. Numerical Example 2 is the prescription source; relevant architecture and mechanism discussion appears at ¶0014-¶0017, ¶0023-¶0028, ¶0029-¶0046. The Example 2 prescription and variable-spacing table are on patent p. 7; the associated optical section begins with Fig. 6.
2. **Canon Camera Museum — EF100-400mm f/4.5-5.6L IS USM.** Canon product specification and historical description: <https://global.canon/en/c-museum/product/ef345.html> and the fuller Japanese product description at <https://global.canon/ja/c-museum/product/ef345.html>.
3. **Canon EF100-400mm f/4.5-5.6L IS USM Instruction Manual.** Canon support/manual source: <https://gdlp01.c-wss.com/gds/4/0300010644/01/EF_100-400_F4.5-5.6L_IS_USM_Instruction_Manual_EN.pdf>.
4. **Canon Camera Museum — Fluorite lenses.** Canon historical list identifying the 1998 EF100-400mm f/4.5-5.6L IS USM among EF lenses using fluorite: <https://global.canon/en/c-museum/special/exhibition2.html>.
5. **OHARA Optical Glass Pocket Catalog.** Manufacturer catalog used only for coordinate-family checks, including S-FSL5, S-BSL7, S-BSM15, S-LAL8, S-BAH27, S-FPL53, and S-LAH55V: <https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf>.
6. **SCHOTT Optical Glass data.** Manufacturer catalog/download collection used only for coordinate-family and international-code checks, including N-SK14, SF57-class, and N-LAF34 coordinates: <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>.
7. **HIKARI J-BAF11 data sheet.** Manufacturer coordinate reference for the 667483 family used by E14: <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/BAF/J_BAF11.pdf>.
8. **SUMITA Optical Glass Data.** Manufacturer catalog source for the K-SSK9 coefficient proxy used by E9; the patent coordinate remains authoritative and no production supplier is inferred: <https://www.sumita-opt.co.jp/en/download/>.
