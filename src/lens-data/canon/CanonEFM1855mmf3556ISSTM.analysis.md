# CANON EF-M 18-55mm f/3.5-5.6 IS STM

## Patent Reference and Design Identification

**Patent:** US 2013/0335830 A1  
**Application Number:** 13/915,360  
**Priority:** June 14, 2012  
**Filed:** June 11, 2013  
**Published:** December 19, 2013  
**Inventors:** Yoshihisa Tashiro; Yasuaki Hagiwara  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** *Zoom Lens and Optical Apparatus Equipped with Zoom Lens*  
**Embodiment analyzed:** Numerical Embodiment 1 / First Embodiment

This analysis uses Numerical Embodiment 1 as the production correlation fixed by the project job card. Canon does not explicitly identify the retail EF-M 18-55mm f/3.5-5.6 IS STM with this patent, so the production mapping remains an author modeling inference rather than a manufacturer statement. The selected embodiment and the retail lens nevertheless agree on the most discriminating structural facts: 13 elements in 11 groups, three aspherical elements, an approximately 18-55 mm variable-aperture range, a small internal focus unit, and an optical image-stabilization unit. The patent gives design focal lengths of 18.58, 27.82, and 53.36 mm with F-numbers of 3.60, 4.27, and 5.69, while Canon marketed the lens as 18-55mm f/3.5-5.6. Canon lists 13 elements in 11 groups, three aspherical elements, a 0.25 m closest focusing distance, 0.25× maximum magnification at 55 mm, seven diaphragm blades, and optical IS. The lens and the EOS M were marketed in September 2012, three months after the patent's Japanese priority date.

The validated data file keeps marketing and design quantities separate. `focalLengthMarketing` is 18-55 mm, while `focalLengthDesign` is 18.58-53.36 mm. The aperture model likewise does not force the design to the marketed f/3.5-5.6 label. A constant physical iris diameter of 9.44 mm, corresponding to `STO.sd = 4.72 mm`, reproduces the three published F-number states as f/3.604671, f/4.264978, and f/5.693923. The patent's 9.86 mm stop-plane effective diameter is retained as a source fact in the audit but is not treated as the physical iris diameter because doing so fails the patent's own F-number data.

The patent's optical block G is also deliberately excluded from the ordinary lens model. Paragraph 0036 defines G as an optical filter, image-sensor faceplate, or equivalent plate. Patent surfaces 26-29 therefore do not appear in the active prescription. Their 3.31 mm physical path is replaced by a 2.727722857 mm air-equivalent path, shifting the normalized image plane 0.582277143 mm objectward while preserving the optical effect of the omitted plates. The resulting surface-25-to-image spacings are 14.107722857, 20.207722857, and 33.417722857 mm at the three zoom states.

No uniform prescription scaling is applied: the scale factor is exactly 1. The radii, thicknesses, clear apertures, image-plane coordinates, and aspherical coefficients therefore remain in the patent's millimeter coordinate system, and no `A_p / s^(p-1)` coefficient transformation is required. Except for the inferred physical stop opening, active-surface semi-diameters are one-half of the patent's published effective diameters.

The source contains one internal movement-sign contradiction. Paragraph 0055 defines image-side movement as positive, whereas paragraph 0078 describes object-side movement as positive. The numerical zoom spacings, Table 2 values, and paragraph 0081 are consistent with all lens units moving objectward from wide to tele and with the Table 2 signs under the paragraph-0055 convention. The validated model preserves the numerical spacings and does not silently alter them to reconcile the prose. No active patent prescription value is otherwise numerically corrected.

## Optical Architecture

The design is a seven-functional-unit normal zoom arranged, from object to image, as L1 positive, L2 negative, L3 positive, L4 negative, followed by the rear unit LR divided into LRa positive, LRb negative, and LRc positive. The 13 physical elements form 11 air-separated groups because L1 and the front part of LRa each contain a cemented pair. The aperture stop lies within LRa, between the cemented pair at surfaces 14-16 and the dual-aspherical LRa3 element at surfaces 18A-19A.

The wide-angle power distribution is strongly asymmetric. The front L1/L2 combination is negative while the group beginning with L3 is positive. Paragraph 0039 calls this a "retrofocus-type" power arrangement in the patent's own sense. Under the project's stricter geometrical classification, however, the normalized active wide-angle back focal distance is 14.103109 mm from surface 25, less than the independently traced 18.570676 mm EFL, so the model is not classified as retrofocus by the `BFD > EFL` rule. It is likewise not a telephoto design under the project's `TL/EFL < 1` rule.

All seven functional units move toward the object during zooming from 18.58 to 53.36 mm. In the first embodiment the patent states that L3 and the complete rear unit LR move substantially integrally; the published spacing table reproduces that kinematic relation. The front-unit separation d3 grows from 0.60 to 20.20 mm, while d9 contracts from 12.88 to 0.54 mm. Around the focus group, d11 increases from 3.21 to 4.67 mm and d13 decreases from 2.48 to 1.02 mm. The internal LRa-to-LRb and LRb-to-LRc gaps, d19 and d21, remain 2.80 and 6.00 mm at all three published zoom positions even though the patent designates them as variable rows.

Independent paraxial computation gives functional-unit focal lengths of +92.785281 mm for L1, -16.687182 mm for L2, +38.790012 mm for L3, -26.428273 mm for L4, +12.134230 mm for LRa, -18.260937 mm for LRb, and +62.446946 mm for LRc. These reproduce the patent's rounded unit table and make clear that the rear unit is not a single weak relay: it is a compact positive-negative-positive sequence in which the negative LRb is reserved for transverse stabilization.

## Element-by-Element Analysis

### L1a — Element 1, Negative Meniscus

nd = 1.84666, νd = 23.9. Glass: 847239 — vendor unresolved. f = -188.91 mm.

L1a is the weak negative member of the cemented first unit. Its standalone power is negative even though L1 as a whole is positive. Independent thick-lens calculation from the authored radii, thickness, and index gives -188.906833 mm, reproducing the patent's single-lens value.

Because L1a is cemented directly to L1b, its in-situ behavior must not be confused with its standalone focal length. The first unit's net power is set by the complete surfaces 1-3 cemented assembly rather than by adding the individual focal lengths.

### L1b — Element 2, Positive Meniscus

nd = 1.69680, νd = 55.5. Glass: 697555 — vendor unresolved. f = +61.00 mm.

L1b is the stronger positive member of the L1 cemented pair. Its independently recomputed standalone focal length is +60.998666 mm. Together with L1a it produces the positive L1 unit, whose computed net focal length is +92.785281 mm.

The pair combines a higher-index, lower-Abbe negative member with a lower-index, higher-Abbe positive member. The patent supplies only d-line index and Abbe number, so the pairing supports ordinary first-order chromatic balancing but does not support an APO or anomalous-partial-dispersion claim.

### L2a — Element 3, Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: 835427 — vendor unresolved. f = -18.94 mm.

L2a begins the three-element negative second unit. Its standalone focal length recomputes to -18.939448 mm. Positioned immediately after the widening d3 zoom gap, it supplies much of the front negative power required by the patent's wide-angle power partition.

### L2b — Element 4, Biconcave Negative with One Aspherical Surface

nd = 1.85135, νd = 40.1. Glass: 851401 — vendor unresolved. f = -27.21 mm.

L2b is a biconcave negative element with aspherical object-side surface 6A. Its independently computed standalone focal length is -27.211622 mm. The strong negative element lies between L2a and the positive L2c member and provides both first-order negative power and a non-spherical degree of freedom at a relatively large ray height.

Surface 6A uses a large positive standard conic constant, `K = 20.3284`, plus even-order polynomial terms. Its verified departure at the published 8.735 mm semi-diameter is -7.045 µm relative to the same-radius sphere.

### L2c — Element 5, Positive Meniscus

nd = 1.92286, νd = 18.9. Glass: 923189 — vendor unresolved. f = +31.47 mm.

L2c closes L2 with positive standalone power; the recomputed value is +31.473432 mm. The high index and low Abbe number are unusual within this prescription, but the patent does not identify a manufacturer. Current OHARA data gives an exact d-line coordinate match to S-NPH2 (code 923189), while current CDGM data independently lists H-ZF72A at the same 1.92286/18.90 coordinates. Because the patent publishes only the coordinates and does not establish the glass maker, the data retains the vendor-neutral six-digit code rather than storing either catalog name as a resolved identity.

The internal positive member moderates a unit that remains strongly negative overall: L2 recomputes to -16.687182 mm.

### L3 — Element 6, Positive Meniscus

nd = 1.77250, νd = 49.6. Glass: 773496 — vendor unresolved. f = +38.79 mm.

L3 is a single positive element and therefore its standalone and unit powers are the same; the independent value is +38.790012 mm. In the first embodiment, L3 moves substantially integrally with the rear unit LR during zooming, which reduces the number of independent zoom trajectories needed by the mechanism while preserving the prescribed changing gaps to L2 and L4.

### L4 — Element 7, Negative Meniscus / Focus Unit

nd = 1.88300, νd = 40.8. Glass: 883408 — vendor unresolved. f = -26.43 mm.

L4 is the single negative fourth unit and the only axial focusing unit. Its independently computed focal length is -26.428273 mm. Paragraphs 0050 and 0083 state that focusing from infinity toward finite distance is performed by moving L4 toward the object side.

The validated finite-focus states are not patent-published spacing rows. They are a constrained reconstruction that preserves the one-group mechanism and conserves the sum of the adjacent d11 and d13 cavities at each zoom position. The reconstruction is detailed in the Focus Mechanism section below.

### LRa1 — Element 8, Biconvex Positive

nd = 1.69680, νd = 55.5. Glass: 697555 — vendor unresolved. f = +10.70 mm.

LRa1 is the strong positive member of the cemented pair at the front of LRa. Its standalone focal length recomputes to +10.696768 mm. The element shares surface 15 with LRa2; the validated data therefore assigns that cemented junction to the downstream LRa2 element, in accordance with the current data schema.

### LRa2 — Element 9, Negative Meniscus

nd = 1.84666, νd = 23.9. Glass: 847239 — vendor unresolved. f = -40.21 mm.

LRa2 is the negative cemented partner behind LRa1. Its independently computed standalone focal length is -40.211158 mm. The positive-negative cemented pair remains within the positive LRa subunit, but its individual member powers should not be substituted for the complete subunit's in-situ power.

The aperture stop follows this cemented pair after the 0.80 mm air spacing from surface 16. The modeled iris semi-diameter is 4.72 mm, an inference derived from the patent's F-number states rather than a direct transcription of the patent's 9.86 mm stop-plane effective diameter.

### LRa3 — Element 10, Positive Meniscus with Two Aspherical Surfaces

nd = 1.58313, νd = 59.4. Glass: 583594 — vendor unresolved. f = +57.25 mm.

LRa3 lies immediately behind the aperture stop and carries aspheres on both surfaces, 18A and 19A. Its independently computed standalone focal length is +57.252012 mm. Together with the preceding cemented pair it completes the positive LRa subunit, whose full in-situ focal length recomputes to +12.134230 mm. The 583594 coordinates are shared by multiple catalog families: current OHARA data identifies L-BAL42 at 1.58313/59.38, HIKARI lists J-SK12 at 1.58313/59.42, and CDGM lists D-ZK2 at code 583594. The patent names none of these vendors, so the data keeps the code unresolved.

The front asphere 18A departs -113.699 µm from its same-radius sphere at the verified 4.545 mm semi-diameter, while the rear asphere 19A departs +20.088 µm at 4.680 mm. The opposed departures make this element a concentrated non-spherical correction stage adjacent to the pupil without requiring an additional physical element.

### LRb — Element 11, Biconcave Negative / Image-Stabilization Unit

nd = 1.90366, νd = 31.3. Glass: 904313 — vendor unresolved. f = -18.26 mm.

LRb is a one-element biconcave negative subunit. Its independently computed focal length is -18.260937 mm, equal to its functional-unit power because the subunit contains only this element. The patent explicitly makes LRb movable in a direction with a component perpendicular to the optical axis so that it serves as the image-stabilization unit.

At the telephoto end, Numerical Embodiment 1 states that 0.13 mm of LRb eccentricity corrects 0.3° rotational blur. The independently evaluated decenter sensitivity, `(1-βist)βisRt`, is -2.135698. Applied to 0.13 mm, this predicts 0.277641 mm of image shift, compared with 0.279335 mm for 0.3° at the independently traced 53.348521 mm EFL. The small difference is consistent with the patent's rounded decenter value.

### LRc1 — Element 12, Weak Positive Meniscus with One Aspherical Surface

nd = 1.52996, νd = 55.8. Glass: Unmatched (nd=1.52996, nu_d=55.8; code 530558). f = +998.48 mm.

LRc1 is nearly afocal as an isolated element. Independent calculation gives +998.867340 mm, a 0.039% difference from the patent's rounded +998.48 mm single-lens value. The element's weak first-order power allows surface 23A to alter peripheral ray geometry with little change to the rear subunit's gross power.

No defensible catalog identity was found for code 530558 in the six-vendor cross-reference used during the glass audit. The validated data therefore uses the explicit `Unmatched (...)` form rather than assigning a speculative vendor glass.

### LRc2 — Element 13, Positive Meniscus

nd = 1.84666, νd = 23.9. Glass: 847239 — vendor unresolved. f = +64.55 mm.

LRc2 is the final positive element. Its independently computed standalone focal length is +64.546482 mm. Together with the nearly afocal aspherical LRc1 it forms the positive LRc subunit, which recomputes to +62.446946 mm.

Its use of the same 847239 material class seen in L1a and LRa2 does not imply a common vendor or glass composition beyond the shared d-line code coordinates. The patent itself names no glass manufacturer.

## Glass Identification and Selection

The prescription publishes only `nd` and `νd` at the Fraunhofer d-line reference. It does not publish per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`, and the validated data does not synthesize those quantities. Consequently, the glass discussion is limited to d-line code/class identification and first-order dispersion; no APO, anomalous-dispersion, or secondary-spectrum claim is made.

HOYA's six-vendor cross-reference defines the six-digit code convention as three digits for `nd` followed by three digits for `νd`, while explicitly warning that identical or near-identical codes do not establish identical glass composition. The data file therefore uses vendor-neutral six-digit codes wherever the patent does not identify a manufacturer.

| Glass label in data | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 847239 — vendor unresolved | 1.84666 | 23.9 | L1a, LRa2, LRc2 | High-index, low-Abbe code shared by multiple positions; vendor unresolved. |
| 697555 — vendor unresolved | 1.69680 | 55.5 | L1b, LRa1 | Lower-dispersion positive members in the two cemented pairs. |
| 835427 — vendor unresolved | 1.83481 | 42.7 | L2a | Negative L2 member; multiple vendor families share the code. |
| 851401 — vendor unresolved | 1.85135 | 40.1 | L2b | Aspherical negative L2 member; vendor unresolved. |
| 923189 — vendor unresolved | 1.92286 | 18.9 | L2c | Exact current OHARA coordinate match to S-NPH2 exists, but the patent does not establish the vendor; the data therefore keeps a code-only label. |
| 773496 — vendor unresolved | 1.77250 | 49.6 | L3 | Positive third unit; common cross-vendor code family. |
| 883408 — vendor unresolved | 1.88300 | 40.8 | L4 | Negative focus element; vendor unresolved. |
| 583594 — vendor unresolved | 1.58313 | 59.4 | LRa3 | Current catalog matches include OHARA L-BAL42, HIKARI J-SK12, and CDGM D-ZK2; vendor remains unresolved. |
| 904313 — vendor unresolved | 1.90366 | 31.3 | LRb | Negative IS element; several vendors share or closely approach the code. |
| Unmatched (nd=1.52996, nu_d=55.8; code 530558) | 1.52996 | 55.8 | LRc1 | No defensible six-vendor code match; retained as unmatched. |

The most important discipline is therefore negative: code proximity is not used to invent a vendor, and class labels are not promoted into Sellmeier-quality spectral identities. The data's chromatic modeling for these elements must fall back to the quality level supported by the stored `nd` and `νd` pair unless a future source supplies direct line indices or a defensible catalog resolution.

## Focus Mechanism

The patent specifies inner focusing by L4 alone. Paragraph 0050 states that focusing from infinity to finite distance moves the fourth lens unit toward the object side; paragraph 0083 repeats this for the first embodiment. No finite-distance spacing table is published, so the final data file uses `CONSTRAINED_RECONSTRUCTION` rather than presenting the close-focus state as source data.

Canon specifies a closest focusing distance of 0.25 m and a maximum magnification of 0.25× at 55 mm for the production lens. Canon's camera manuals define lens minimum focusing distance from the camera's focal-plane mark to the subject. The reconstruction therefore places the object 250 mm from the physical image plane, allows only L4 to translate, and enforces the mechanism constraint by decreasing d11 and increasing d13 by the same amount.

Because optical block G is omitted from the LensVisualizer model, the equivalent image plane lies 0.582277143 mm objectward of the patent's physical sensor plane. The same physical subject position is consequently 249.417722857 mm from the normalized image plane, which is the `closeFocusM` value stored in the final data file.

| Zoom state | d11 infinity → close (mm) | d13 infinity → close (mm) | L4 objectward shift (mm) |
|---|---:|---:|---:|
| 18.58 mm | 3.210000 → 2.054867 | 2.480000 → 3.635133 | 1.155133 |
| 27.82 mm | 3.970000 → 2.468596 | 1.710000 → 3.211404 | 1.501404 |
| 53.36 mm | 4.670000 → 2.261553 | 1.020000 → 3.428447 | 2.408447 |

Sequential paraxial imaging at the reconstructed close state gives magnification magnitudes of 0.092985×, 0.135549×, and 0.246777× from wide through tele. The telephoto result independently reproduces Canon's rounded 0.25× maximum magnification without adding a second focus degree of freedom.

The reconstruction should therefore be read as a mechanism-constrained optical model, not as a claim that Canon published these exact d11/d13 close-focus numbers.

## Aspherical Surfaces

Numerical Embodiment 1 uses four aspherical surfaces on three physical elements: 6A on L2b, both 18A and 19A on LRa3, and 23A on LRc1. The patent defines the standard conic form

$$
x(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_p h^p,
$$

with the ordinary conic constant `K`. No κ-to-K conversion is required. The embodiment uses only even radial powers. Because the final model is unscaled (`s = 1`), the aspheric coefficients are transcribed directly and no `A_p / s^(p-1)` transformation is applied.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 6A | 20.3284 | 1.34534e-5 | 9.74836e-8 | -5.46269e-10 | 7.48620e-12 | — |
| 18A | -4.0286 | -1.06804e-4 | -4.99512e-6 | -1.13675e-8 | -3.18466e-9 | 6.43346e-11 |
| 19A | 0 | 1.40820e-4 | -3.17915e-6 | -8.57069e-8 | 1.14883e-9 | -1.17453e-12 |
| 23A | -0.967257 | -2.37994e-5 | 1.12104e-7 | 5.00265e-11 | — | — |

At the published clear semi-diameters used by the final data file, the independently recomputed departures from the corresponding same-radius spheres are -7.045 µm at 6A (`h = 8.735 mm`), -113.699 µm at 18A (`h = 4.545 mm`), +20.088 µm at 19A (`h = 4.680 mm`), and -146.327 µm at 23A (`h = 9.025 mm`). All four conic domains are valid at those radii; surface 6A also satisfies the stricter positive-K conic-height limit.

The departures show that the largest geometric asphere corrections occur on 18A and 23A, while 6A remains comparatively close to its base sphere despite its large positive conic constant. The patent does not identify the manufacturing process for these surfaces in Numerical Embodiment 1, so the analysis does not label them as molded, hybrid, or polished aspheres.

## Image Stabilization

The rear unit's middle subunit LRb is the optical image-stabilization group. Paragraph 0034 states that LRb can move with a component perpendicular to the optical axis, and paragraph 0082 applies that mechanism to the first embodiment. LRb contains only Element 11, so the stabilization unit is mechanically and optically compact relative to the full rear group.

Numerical Embodiment 1 states that 0.13 mm of LRb eccentricity corrects 0.3° of rotational blur at the telephoto end. The independently recomputed condition-(6) sensitivity is -2.135698. Multiplying by the published 0.13 mm decenter gives 0.277641 mm predicted image shift. A 0.3° angular displacement at the independently traced 53.348521 mm EFL is 0.279335 mm, a difference of about 0.6%. That agreement supports the interpretation of LRb as the single transverse IS element without requiring any unreported stabilization surface or extra degree of freedom.

Canon's product page independently confirms that the retail EF-M 18-55mm lens includes optical image stabilization, but it does not state that the retail IS unit is the patent's exact LRb element. That structural identification remains part of the selected patent-to-product correlation.

## Conditional Expressions

The patent uses thirteen first-order conditions to bound the power split, stabilization sensitivity, stop-to-IS spacing, and zoom motion. The values below are independently recomputed from the final TypeScript prescription at its published infinity zoom states. Every base condition is satisfied.

| No. | Patent condition | Computed value | Result |
|---:|---|---:|---|
| 1 | `0.73 < |f12w| / f3Rw < 2.0` | 1.063720 | Pass |
| 2 | `0.8 < |fis| / fRt < 2.5` | 1.107020 | Pass |
| 3 | `2.0 < f1 / fw < 8.0` | 4.996333 | Pass |
| 4 | `0.5 < |f2| / fw < 1.2` | 0.898577 | Pass |
| 5 | `3.0 < f1 / |f2| < 9.0` | 5.560273 | Pass |
| 6 | `-3.5 < (1-βist)βisRt < -1.0` | -2.135698 | Pass |
| 7 | `0.1 < List / fw < 1.4` | 0.366169 | Pass |
| 8 | `1.0 < |Risf / Risr| < 10.0` | 1.589789 | Pass |
| 9 | `0.6 < |f4| / fw < 5.0` | 1.423119 | Pass |
| 10 | `0.8 < |f12w| / fw < 1.8` | 1.211265 | Pass |
| 11 | `0.8 < f3Rw / fw < 2.0` | 1.138706 | Pass |
| 12 | `0.01 < fRt / ft < 1.0` | 0.309204 | Pass |
| 13 | `0.8 < X1 / X3 < 5.0` | 1.375971 | Pass |

The corresponding independently recovered quantities include `f12w = -22.494003 mm`, `f3Rw = +21.146541 mm`, `fis = -18.260937 mm`, `fRt = +16.495580 mm`, and `List = 6.800000 mm`. For condition (13), the source's sign inconsistency does not affect the ratio: with image-side movement defined positive, the final prescription gives `X1 = -26.57 mm` and `X3 = -19.31 mm`, so both units move objectward and the ratio remains +1.375971.

## Verification Summary

The final data file has been recomputed from its authored TypeScript arrays rather than treated as a transcription presumed correct. Sequential height/reduced-angle tracing and matrix calculations agree on the Gaussian results used here.

| Quantity | Wide | Middle | Telephoto |
|---|---:|---:|---:|
| Patent focal length (mm) | 18.58 | 27.82 | 53.36 |
| Computed EFL (mm) | 18.570676 | 27.822970 | 53.348521 |
| Patent F-number | 3.60 | 4.27 | 5.69 |
| Modeled F-number with 9.44 mm iris | 3.604671 | 4.264978 | 5.693923 |
| Normalized active track (mm) | 77.637723 | 85.647723 | 104.207723 |

The active prescription's surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is +0.002541812 mm⁻¹, corresponding to a reciprocal radius of 393.420100 mm. All 13 physical elements have positive edge thickness at their validated shared clear radii; the minimum is 1.024407 mm. The maximum actual spherical/aspherical rim-slope angle is 57.46134°, and the tightest validated cross-gap margin among all six zoom/focus endpoints is 0.091094 mm. No tested off-axis bundle first clips at either cemented interface.

These checks establish internal consistency of the authored prescription and its constrained focus states. They do not turn the production correlation, the 9.44 mm physical iris, or the finite-focus d11/d13 values into manufacturer-published facts; those remain explicit modeling inferences.

## Sources and References

1. **US 2013/0335830 A1**, Yoshihisa Tashiro and Yasuaki Hagiwara, *Zoom Lens and Optical Apparatus Equipped with Zoom Lens*, Canon Kabushiki Kaisha. Relevant passages: ¶¶0033-0055, ¶¶0078-0083, ¶¶0095-0099; Numerical Embodiment 1; Tables 1 and 2.
2. **Canon Camera Museum — EF-M18-55mm f/3.5-5.6 IS STM.** Official product specifications and release timing: https://global.canon/en/c-museum/product/ef422.html
3. **Canon Camera Museum — EOS M.** Official EF-M mount and APS-C sensor-format reference: https://global.canon/en/c-museum/product/dslr812.html
4. **Canon Product Manual — Close-up Mode / minimum focusing distance convention.** Canon states that lens minimum focusing distance is measured from the focal-plane mark to the subject: https://cam.start.canon/en/C002/manual/html/UG-02_BasicShooting_0080.html
5. **HOYA Optics Division — Glass Cross Reference Index.** Six-vendor d-line code cross-reference and caution that code equivalence does not establish identical composition: https://www.hoya-opticalworld.com/english/products/crossreference.html
6. **OHARA — Optical Glass detailed data.** Current d-line coordinates for S-NPH2 and L-BAL42: https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf
7. **HIKARI — Optical Glass Catalog.** Current J-SK12 and other d-line catalog coordinates: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
8. **CDGM — Optical Glass Data Sheet.** Current six-digit code and cross-reference data, including D-ZK2 / 583594: https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf
9. **SCHOTT — Optical Glass downloads.** Current catalog and availability references used in the cross-vendor audit: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
10. **SUMITA Optical Glass — Downloads.** Current catalog resources used in the cross-vendor audit: https://www.sumita-opt.co.jp/en/download/
