# ROLLEI HFT SONNAR 40mm f/2.8 (Rollei 35 S)

## Patent Reference and Design Identification

**Patent:** US 3,994,576  
**Priority:** April 20, 1974 (Germany 24 19140)  
**Filed:** April 17, 1975  
**Granted:** November 30, 1976  
**Inventors:** Erhard Glatzel; Heinz Zajadatz  
**Assignee:** Carl Zeiss-Stiftung  
**Title:** *Objective Lens System with Five Elements*  
**Embodiment analyzed:** Example 1

The prescription modeled here is Example 1 of US 3,994,576. The patent describes the design as a five-element, four-component objective of the “expanded Tessar type”: three individually air-spaced elements form the front member, followed by a cemented two-element rear component. Example 1 is normalized to an equivalent focal length of `F = 1.00000`, with a published relative aperture of f/2.9, a 50° total field, and an infinity back focus of `0.6341 F`. The example belongs to the patent's first four monochromatic preforms, for which the listed refractive indices are referenced to the helium d-line at 587.6 nm. [US 3,994,576, PDF pp. 3, 6; Example 1.]

The association with the Rollei 35 S is strong but remains inferential. The relevant Rollei literature identifies a retractable Rollei HFT Sonnar 40 mm f/2.8 for the 24 × 36 mm format, using five elements in four components and manufactured by Rollei under license from Carl Zeiss, Oberkochen. A January 1978 Rollei technical sheet gives a marketed 51° angle of view. Those characteristics closely parallel the patent example, but they are not identical: the patent says f/2.9 and 50°, while the production lens is marketed as f/2.8 and 51°. No manufacturer source in the dossier explicitly identifies US 3,994,576 Example 1 as the production Rollei 35 S prescription. The production correlation is therefore treated as inferential rather than manufacturer-confirmed.

The implemented model therefore keeps the two authorities separate. The production metadata remains 40 mm f/2.8 on a fixed-lens 24 × 36 mm camera, while the modeled optical design remains the 40×-scaled patent prescription at f/2.9 and the patent's 50° design field.

## Optical Architecture

The patent architecture is a positive-positive-negative front member followed, across the diaphragm space, by a cemented negative-positive rear component. In the final model the first three elements are separate air-spaced components A, B, and C; L4 and L5 form cemented component D. The patent specifically characterizes L1 and L2 as collecting elements and L3 as a negative element, and it describes the air space between L2 and L3 as a dispersing air lens. The rear doublet combines elements of opposite power at a collecting cemented interface. [US 3,994,576, PDF pp. 3, 6.]

All patent dimensions were uniformly multiplied by 40.0. From the final data, the paraxial EFL is 40.000013 mm and the first-to-last lens-vertex track is 18.27936 mm, giving `TL/EFL = 0.456984`. Under the project's explicit track criterion this is a telephoto-form ratio, although the term here describes axial compactness rather than the lens's ordinary photographic angle-of-view category. The computed back focal distance is 25.364334 mm, so `BFD/EFL = 0.634108`; the design therefore does not satisfy the project's retrofocus criterion of `BFD > EFL`.

The source prints the rear doublet as two coincident surfaces, `R4′` and `R5`, both at the same radius with zero spacing. The active model correctly reduces those bookkeeping planes to one physical cemented L4→L5 interface. This normalization preserves both the paraxial transfer and the surface-by-surface Petzval sum.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Front Collector A

`nd = 1.68100`; `νd = not published`. Glass: **Unmatched (Example 1 index-only preform; νd not published)**. Isolated focal length in air: **+37.344 mm**.

L1 is the first collecting element in the patent's front member. Its relatively strong positive power is paired with L2 under the patent's explicit curvature and Petzval-distribution conditions. Those conditions concern the two front collectors as a pair rather than assigning an independent aberration-correction function to L1 by itself. [US 3,994,576, PDF pp. 3–5, Table II on PDF pp. 11–12.]

The isolated focal length is a standalone-in-air quantity derived from the final scaled element surfaces. It should not be read as L1's in-situ contribution to the complete five-element system.

### L2 — Positive Meniscus, Front Collector B

`nd = 1.72000`; `νd = not published`. Glass: **Unmatched (Example 1 index-only preform; multiple exact-nd catalog coordinates)**. Isolated focal length in air: **+36.033 mm**.

L2 is the second collecting element and a positive meniscus. The patent makes the relative form and power distribution of L1 and L2 central to its design rules: their front-surface curvature relation defines the Gardner condition, while their element powers divided by refractive index define the paired Petzval condition. In Example 1 those two Petzval terms are effectively equal at the precision printed in Table II.

L2's rear surface also forms one boundary of the strongly curved air space ahead of L3. The patent explicitly treats this space as a dispersing air lens; that statement is source-derived and does not require attributing a specific higher-order correction to L2 alone.

### L3 — Negative Meniscus, Component C

`nd = 1.78500`; `νd = not published`. Glass: **Unmatched (Example 1 index-only preform; νd not published)**. Isolated focal length in air: **−14.453 mm**.

L3 is the negative third element of the front member. Its rear surface is the most strongly curved surface of the element, matching the patent's description of the third element as an unequal-sided negative lens whose strongest curvature is concave toward the rear. Together with the preceding L2 surface, it completes the dispersing air lens identified in the patent. [US 3,994,576, PDF p. 3.]

The three-element front member has a computed net paraxial power of about +4.701 D in the final scaled model. This group result is distinct from the much larger isolated positive and negative powers of the individual elements.

### L4 — Negative Meniscus, Rear Component D

`nd = 1.63800`; `νd = not published`. Glass: **Unmatched (Example 1 index-only preform; νd not published)**. Isolated focal length in air: **−23.127 mm**.

L4 is the negative member of the cemented rear component. In the source table its rear surface is printed separately from the coincident front surface of L5, with zero axial spacing. The implemented model treats the common radius as one physical cemented boundary and assigns the medium after that boundary to L5, as required for a real cemented interface.

Because L4 is cemented directly to L5, its isolated focal length is descriptive only. The physically relevant rear-component result is the net power of the two-element cemented assembly.

### L5 — Biconvex Positive, Rear Component D

`nd = 1.74400`; `νd = not published`. Glass: **Unmatched (Example 1 index-only preform; multiple vendor candidates)**. Isolated focal length in air: **+13.893 mm**.

L5 is the positive member of the rear doublet. Together L4 and L5 produce a computed cemented-component power of about +30.300 D in the scaled model. This is the net power of the actual cemented pair; it is not the arithmetic sum of the two isolated element powers because the shared interface and finite thicknesses matter.

The modeled clear aperture of L5 is constrained by edge thickness. The final geometry retains a positive minimum edge thickness of 0.157 mm while containing the sampled patent-field ray bundle. This semi-diameter is therefore a modeling result, not a published mechanical dimension.

## Glass Identification / Selection

Example 1 does not publish Abbe numbers or line indices for its five elements. It gives only d-line refractive indices, and the patent expressly identifies Examples 1–4 as monochromatic preforms. A single `nd` coordinate cannot establish a unique historical glass identity.

Current catalog checks demonstrate that ambiguity directly. For example, `nd = 1.72000` occurs at materially different Abbe numbers in multiple current OHARA and CDGM glasses, and `nd = 1.74400` likewise has compatible candidates from more than one vendor. Those matches are evidence that index alone is underdetermined, not evidence that any of those modern catalog glasses was used in the 1974 design.

Accordingly, all five elements remain explicitly `Unmatched (...)`. No `νd`, `nC`, `nF`, `ng`, `dPgF`, Sellmeier identity, anomalous-partial-dispersion property, or apochromatic performance claim is assigned to this model.

## Focus Mechanism

The production Rollei literature gives manual focusing from infinity to 0.9 m / 3 ft. The patent's Example 1, however, publishes only one optical prescription and no finite-focus spacing table or mechanism-constraining movement law.

The data therefore uses **NO_INTERNAL_RECONSTRUCTION**. `closeFocusM = 0.9` is production metadata only; the prescription has no `var` entries and no reconstructed close-focus optical state. No claim is made here about which lens cell moves, how far it moves, or how the internal spacings change at 0.9 m.

## Conditional Expressions and Patent Conditions

The patent's design rules give special treatment to the first two collecting elements. Recalculation from the final prescription, normalized back to the patent's native `F = 1` scale, gives a Gardner front-curvature value of **−0.0519218**, reproducing the Example 1 Table II value `−0.0519` within source precision.

For the patent-defined front-element Petzval terms, the recalculated difference `B − A` is **3.14 × 10⁻⁶ F⁻¹**, and `(B − A)/(B + A)` is **2.63 × 10⁻⁶**. Table II prints both Example 1 values as zero; the small nonzero results arise from calculation with the published rounded prescription and are within the source precision. The verifier also confirms that Example 1 satisfies the corresponding claim-1 ranges and the patent's refractive-index conditions for the first two elements.

The full modeled surface-by-surface Petzval sum, using `φ/(n·n′)` at every refracting interface, is **+0.00705105 mm⁻¹**. This quantity is a computed result for the complete scaled model and is distinct from the patent's special two-element `A` and `B` condition.

## Aperture, Pupil, and Geometry Model

The patent states that the diaphragm lies in the central air space between L3 and L4 but does not publish its axial split. Its drawing is expressly schematic rather than dimensionally authoritative. The model therefore places the single `STO` at the midpoint of that air space, splitting the scaled gap into **2.0326 mm + 2.0326 mm**. This is a deterministic modeling inference, not a patent dimension.

The patent also does not publish a physical diaphragm diameter. After the midpoint placement, the stop semi-diameter was calibrated to **4.751157 mm** so that the paraxial entrance pupil reproduces the source f/2.9 state. The resulting entrance-pupil semi-diameter is **6.896554 mm** and the modeled f-number is 2.900000. That agreement is a calibration to the published f-number; it is not independent evidence that the manufactured diaphragm had the modeled physical diameter or axial location.

No surface semi-diameters are given in Example 1. The authored values are modeled from exact spherical ray envelopes over the patent's ±25° half-field and checked against current portable geometry rules. The verification sampled 1,681 wide-open rays. The minimum non-stop sampled clearance is **0.1735 mm**, the minimum element edge thickness is **0.1572 mm**, the maximum actual rim-slope angle is **44.84°**, and the maximum shared-gap intrusion fraction is **0.5850**. These checks establish internal consistency of the modeled clear apertures; they do not substitute for production render diagnostics or prove the mechanical clear apertures of the manufactured Rollei lens.

## Verification Summary

The final data file is a 40× uniform scaling of the patent's normalized Example 1 prescription, with the coincident rear-doublet bookkeeping surfaces normalized to one cement interface. Independent sequential height/reduced-angle tracing and an ABCD matrix calculation agree on the first-order model. The computed EFL is **40.000013 mm**. The computed back focal distance from the last lens vertex is **25.364334 mm**, compared with the source-scaled authored value of **25.364 mm**; the **+0.000334 mm** residual is retained as a rounding consequence rather than silently changing the patent value.

The design and marketing values are intentionally not reconciled: the patent model is f/2.9 with a 50° design field, while Rollei marketed the correlated production lens as 40 mm f/2.8 with a 51° angle of view on 24 × 36 mm film. Likewise, the patent calls the architecture an expanded Tessar type, while the product carries Sonnar branding. Those distinctions are part of the evidence record rather than errors to be normalized away.

## Sources / References

1. Erhard Glatzel and Heinz Zajadatz, **“Objective Lens System with Five Elements,” US Patent 3,994,576**, Carl Zeiss-Stiftung, granted November 30, 1976. Relevant locations: front page; description on PDF pp. 3–6; Example 1 on PDF p. 6; Tables I–II and claims on PDF pp. 11–12.
2. Rollei-Werke Franke & Heidecke, **“Rollei 35/35T/35S In Practical Use.”** Manufacturer-origin manual, archival reproduction: https://www.manualslib.com/manual/141972/Rollei-35-S.html
3. Rollei, **“Rollei 35S technical data,” January 1978.** Manufacturer-origin technical sheet, archival reproduction: https://manuals.plus/m/51faa396545606a4f2f5ae098af0b30971108308b5d7ed9c1ca583cadf01bc3e
4. Current optical-glass catalog checks used for non-identification discipline: OHARA (https://oharacorp.com/glass-type/s-lam/), HOYA (https://www.hoya-opticalworld.com/english/datadownload/index.html), SCHOTT (https://www.schott.com/en-us/products/optical-glass-p1000267), HIKARI (https://www.hikari-g.co.jp/optical_glass/catalog/), CDGM (https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database), and SUMITA (https://www.sumita-opt.co.jp/en/download/). No catalog identity is assigned from those checks.
