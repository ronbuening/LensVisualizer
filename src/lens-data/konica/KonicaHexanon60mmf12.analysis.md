## Patent Reference and Design Identification

**Patent:** JP H11-160615 A\
**Application Number:** JP H9-322984\
**Filed:** 1997-11-25\
**Published:** 1999-06-18\
**Inventor:** Toshiji Yamashita\
**Applicant:** Konica Corporation\
**Title:** 大口径レンズ (Large-aperture lens)\
**Embodiment analyzed:** Example 1 / 実施例1

The analyzed prescription is Example 1 of JP H11-160615 A. The patent gives a 58.26 mm, F1.24, 40.53° full-field design and describes a seven-element large-aperture lens divided into a positive front group, the aperture stop, and a positive rear group. Example 1 is entirely spherical. The numerical prescription is retained at the patent scale; there is no uniform scaling from the 58.26 mm design focal length to the marketed 60 mm designation. The data file therefore separates the marketed 60 mm f/1.2 identity from the computed design EFL of 58.263500438 mm and the patent F-number of 1.24. [JP H11-160615 A, ¶0001, ¶0016–¶0022, Tables 1–2]

The job-card production correlation is the KONICA HEXANON 60mm f/1.2 L, preserving the catalog's L suffix for the 1999 limited L-mount release. The patent itself does not name that production lens. The correlation is supported by the Konica applicant, the 58.26 mm / F1.24 normal-lens prescription, the 40.53° field, the seven-element/six-group construction, the floating-focus mechanism, and the timing of the 1997 application and 1999 publication. Konica's 2000 technical report on the M-Hexanon program independently refers to an already established “L-mount specification f60/F1.2.” That manufacturer source independently confirms a Konica L-mount-specification 60/F1.2 in the relevant period and supports the historical mount context, but it does not state that JP H11-160615 A Example 1 is the production optical formula. The patent-to-product relationship is therefore treated as a fixed correlation, not as manufacturer confirmation of embodiment identity.

1. The patent applicant is Konica and the design date falls immediately before Konica's late-1990s rangefinder-lens program.
2. Example 1 is 58.26 mm at F1.24, consistent with a marketed 60 mm f/1.2 designation without prescription scaling.
3. The patent construction is seven elements in six groups, with three positive menisci and one negative meniscus before the stop, then a cemented negative-positive pair and a final positive element.
4. Claim 3 and ¶0015 specify a floating-focus action in which the whole lens extends while the front-to-rear group spacing increases.
5. Konica's 2000 technical report explicitly mentions an L-mount-specification f60/F1.2 as an existing design precedent.

## Optical Architecture

Example 1 is best described as a modified Gauss large-aperture normal lens rather than as a strictly symmetric Double-Gauss. The patent itself calls the rear-side arrangement Gauss-type and emphasizes the approximately symmetric distribution of refractive power around the stop, but the front half is deliberately asymmetric: three separate positive menisci precede a strong negative meniscus. [JP H11-160615 A, ¶0007–¶0008]

The front group comprises L1–L4. L1, L2, and L3 are positive menisci convex toward the object. Their positive power is distributed over three elements rather than concentrated in one or two strongly curved members. The patent states that this reduces the undercorrected spherical aberration associated with a large-aperture positive front section and lowers the ray height incident on the negative L4 meniscus. It also links this arrangement to control of the positive Petzval sum. [¶0007]

L4 is a negative meniscus, also convex toward the object, immediately before the stop region. It supplies the principal negative power on the object side of the diaphragm. The patent treats its power as a balance point: excessive negative power increases divergence, sagittal coma, and overcorrected spherical aberration, while insufficient negative power leaves excessive positive Petzval contribution and field curvature. [¶0012]

The rear group begins with the cemented L5+L6 pair and ends with L7. L5 is biconcave negative, L6 is biconvex positive, and L7 is biconvex positive. The patent describes this negative-positive-positive rear sequence as part of a Gauss-type arrangement that restores an approximately symmetric power pattern about the stop and improves off-axis correction. [¶0008]

The design's principal architectural distinction is therefore not simple geometric symmetry but controlled power distribution: three moderate positive front menisci, a strong negative meniscus before the diaphragm, a negative-positive cemented pair behind it, and a final positive element. The strong negative surfaces facing one another across the stop region are explicitly constrained by the patent because their relative curvature affects the balance of spherical aberration and coma. [¶0013]

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.77250, νd = 49.6. Glass: 773496 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = +220.97 mm.

L1 is the weakest of the three positive front menisci by standalone power. Its large clear aperture carries the highest axial ray heights in the front section, so the patent treats the distribution of positive power between L1 and L3 as important. In the discussion of the `f1/f3` condition, excessive relative power in L1 is associated with increased positive distortion, lateral chromatic aberration, and undercorrected spherical aberration at the large incident ray height. [¶0010]

The element should not be interpreted as contributing +220.97 mm focal behavior independently in the assembled lens. That value is the isolated thick-element focal length in air; its in-situ contribution depends on the following menisci and their separations.

### L2 — Positive Meniscus

nd = 1.77250, νd = 49.6. Glass: 773496 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = +97.28 mm.

L2 continues the front positive-power distribution using the same d-line glass coordinates as L1 and L3. The patent does not assign a separate aberration-correction function to L2; instead, it describes the three positive menisci as a coordinated front section whose divided power reduces the severity of refraction at any one member. [¶0007]

Its isolated focal length is substantially shorter than L1's, but this standalone number is not an in-situ group power. The functional result comes from the combined L1–L3 sequence and its spacing before L4.

### L3 — Positive Meniscus

nd = 1.77250, νd = 49.6. Glass: 773496 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = +73.56 mm.

L3 is the strongest of the three positive front menisci by standalone power. The patent's `f1/f3` condition directly limits the balance between L1 and L3. If too much of the front positive power is shifted toward L3, the patent states that the stronger refraction at L3 increases undercorrected spherical aberration; if the balance moves too far toward L1, distortion, lateral color, and spherical aberration become harder to control. [¶0010]

Together L1–L3 form the distributed positive front section described in ¶0007. Their combined action reduces the ray height reaching L4 compared with a more concentrated positive front group.

### L4 — Negative Meniscus

nd = 1.84666, νd = 23.8. Glass: 847238 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = −33.10 mm.

L4 is a strong negative meniscus positioned before the diaphragm. Its low Abbe number and high refractive index are directly present in the patent coordinates, but no vendor glass or partial-dispersion behavior is identified. The patent constrains `|f4|/f` to keep the negative power within a range that balances spherical aberration, sagittal coma, and Petzval curvature. [¶0012]

This element is also part of the stop-side negative-power pairing. Its rear surface r8 faces the negative front surface r10 of L5 across the diaphragm region; the patent constrains `r8/|r10|` because changing that curvature balance disturbs the system-level spherical-aberration and coma correction. [¶0013]

### L5 — Biconcave Negative, Cemented Doublet D1

nd = 1.69895, νd = 30.1. Glass: 699301 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = −24.11 mm.

L5 is the negative member immediately behind the stop and the first component of the cemented L5+L6 doublet. Its object-side surface r10 is the rear-side negative surface paired by the patent's curvature-ratio condition with L4's rear surface r8. [¶0013]

As an isolated element in air L5 has strong negative power, but that number must not be confused with the behavior of the cemented pair. The L5+L6 assembly, including its shared refracting interface and both center thicknesses, has a computed net power of only +0.003488413121 mm⁻¹, corresponding to an EFL of +286.66 mm. The cemented pair is therefore weakly positive as a unit despite the much stronger opposing standalone powers of L5 and L6.

### L6 — Biconvex Positive, Cemented Doublet D1

nd = 1.80440, νd = 39.6. Glass: 804396 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = +25.58 mm.

L6 is the positive member of the cemented rear doublet. Its strong positive standalone power nearly opposes L5's negative standalone power, leaving the pair weakly positive in first order. This distinction between isolated element power and cemented-pair power is important: the assembled pair is not equivalent to either element considered separately.

The patent's focusing discussion identifies the positive rear elements, including L6, as sensitive to close-focus ray-height growth under simple whole-lens extension. The floating mechanism reduces the ray height through the rear positive section and thereby suppresses the increase in undercorrected spherical aberration that would otherwise occur at close distance. [¶0015]

### L7 — Biconvex Positive

nd = 1.80610, νd = 40.9. Glass: 806409 vendor-neutral optical-glass coordinate class; vendor unresolved. Standalone f = +68.49 mm.

L7 is the final positive element of the rear group. In the patent's Gauss-type interpretation it completes the positive rear section after the cemented negative-positive pair. [¶0008]

Like L6, L7 is specifically implicated in the close-focus aberration mechanism described in ¶0015. With simple unit extension, the ray heights through the rear positive elements increase and the patent predicts increased undercorrected spherical aberration. Increasing the front/rear separation while the lens extends reduces those ray heights and improves the close-focus correction.

## Glass Identification and Selection

The patent publishes only d-line `nd` and `νd`; it names no glass manufacturer or melt and supplies no `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The final data therefore uses vendor-neutral six-digit coordinate classes rather than assigning a public catalog glass that the source does not establish.

| Coordinate class | nd | νd | Elements | Data status |
| --- | ---: | ---: | --- | --- |
| 773496 | 1.77250 | 49.6 | L1, L2, L3 | Vendor unresolved |
| 847238 | 1.84666 | 23.8 | L4 | Vendor unresolved |
| 699301 | 1.69895 | 30.1 | L5 | Vendor unresolved |
| 804396 | 1.80440 | 39.6 | L6 | Vendor unresolved |
| 806409 | 1.80610 | 40.9 | L7 | Vendor unresolved |

The patent imposes a material constraint on the positive elements by requiring the mean d-line refractive index of L1, L2, L3, L6, and L7 to exceed 1.70. It explains this as a way to avoid excessively small radii on the positive elements, thereby limiting spherical aberration and the positive Petzval sum. [¶0014]

A cross-vendor catalog audit found multiple exact or near-exact coordinate matches for these `nd`/`νd` pairs, so a unique manufacturer assignment cannot be defended from the patent coordinates alone. The resolver nevertheless supplies coordinate-compatible catalog curves for all seven elements while the labels remain vendor-neutral. Because the patent contains no direct line-index or partial-dispersion data, the design is not labeled APO and no anomalous-partial-dispersion behavior is asserted.

## Focus Mechanism

Claim 3 and ¶0015 describe a floating-focus mechanism rather than simple unit focusing. From infinity toward close focus, the whole lens extends toward the object while the spacing between the front and rear groups increases. Table 2 publishes the internal spacing `D`, defined as the distance from the stop plane to r10, as 6.70 mm at infinity and 7.90 mm at `β = −0.085`.

The patent does not publish the absolute front-group travel, rear-group travel, rear image spacing, or minimum object distance for Example 1. The data therefore uses `CONSTRAINED_RECONSTRUCTION`, not a published close-focus model. For the published `D = 7.90 mm` internal configuration, imposing the published magnification `β = −0.085` uniquely fixes the paraxial object and image conjugates relative to the lens. Referencing the infinity and close conjugates to a fixed image plane then yields the reconstructed group translations.

| Quantity | Infinity | Close state (`β = −0.085`) | Provenance |
| --- | ---: | ---: | --- |
| `D` (stop → r10) | 6.70 mm | 7.90 mm | Patent Table 2 |
| r14 → image plane | 28.877994964 mm | 33.547968454 mm | Computed |
| Reproduction magnification | 0 | −0.085 | Patent for close state |
| Object plane → fixed image plane | ∞ | 0.800033079 m | Computed reconstruction |

The reconstructed motion gives 5.869973490 mm of objectward extension at the first vertex and 4.669973490 mm at the rear vertex. Their 1.200000000 mm differential exactly equals the published increase in `D`. These are computed movement quantities, not dimensions printed in the patent.

The data model stores the changing stop-to-r10 distance on the `STO` variable gap and the changing r14-to-image distance on surface 14. This is a sequential representation of the constrained fixed-image solution; it does not imply that the physical diaphragm alone is the focusing body.

The patent explains the optical purpose of the floating action: simple whole-lens extension would increase ray heights through the positive rear elements and increase undercorrected spherical aberration. Increasing the inter-group spacing lowers the ray height at the negative surface immediately behind the stop and through the following positive group. The patent also states that the floating action reduces meridional coma flare at intermediate field angles. [¶0015]

## Conditional Expressions

Example 1 satisfies all five design conditions stated by the patent. The computed column below is independently recomputed from the final data rather than copied from the rounded values printed in ¶0018.

| Expression | Patent Example 1 | Computed from final data | Patent condition |
| --- | ---: | ---: | --- |
| `f1/f3` | 3.00 | 3.003922208 | `0.7 < f1/f3 < 7.0` |
| `f123/f` | 0.61 | 0.607425570 | `0.50 < f123/f < 0.70` |
| `|f4|/f` | 0.57 | 0.568069714 | `0.45 < |f4|/f < 0.65` |
| `r8/|r10|` | 0.72 | 0.721005994 | `0.65 < r8/|r10| < 0.80` |
| `(n1+n2+n3+n6+n7)/5` | 1.79 | 1.785600000 | `> 1.70` |

The first condition regulates the distribution of positive power between L1 and L3; the second constrains the combined L1–L3 power relative to the full system; the third bounds L4's negative power; the fourth controls the relative curvature of the negative surfaces facing across the diaphragm region; and the fifth requires high refractive index in the positive elements. [¶0010–¶0014]

The machine-extracted patent text drops the leading `f` in the Example 1 printout and can appear as `1/f3 = 3.00`. Claim 1 defines the expression as `f1/f3`, and the Example 1 prescription recomputes to 3.003922208. This is an OCR/text-layer correction only; no patent numerical value is altered.

## Aberration-Correction Strategy

The patent's correction strategy is built around controlling ray height and avoiding excessive local power at F1.24. The three positive front menisci distribute the initial convergence, reducing both the refraction demanded of any single positive element and the ray height entering L4. The negative L4 then counterbalances the positive front section and contributes to Petzval control. [¶0007, ¶0011–¶0012]

Across the diaphragm region, the design places strong negative surfaces on L4 and L5 with a constrained curvature ratio. The patent identifies this region as especially sensitive to sagittal coma in large-aperture Gauss-type lenses, so the relative surface powers are set to maintain the system-level balance between spherical aberration and coma. [¶0002, ¶0013]

Behind the stop, the negative-positive-positive sequence restores a Gauss-like power distribution. The cemented L5+L6 pair is weakly positive in net first-order power even though its two members have strong opposing standalone powers. The final L7 contributes positive rear power without introducing another air-spaced negative-positive pair.

The independently computed Petzval sum from the final prescription is +0.003685451362 mm⁻¹ using the project convention `φ/(n·n′)` surface by surface. This is a first-order diagnostic, not a patent-published field-curvature value. The patent's repeated discussion of limiting a positive Petzval sum is therefore consistent with the verified prescription, but the numerical Petzval result is computational rather than source-published. [¶0007, ¶0011–¶0014]

## Verification and Modeling Notes

The final prescription recomputes to an infinity EFL of 58.263500438 mm, agreeing with the patent's rounded 58.26 mm value. The authored stop semi-diameter of 13.160251111 mm reconstructs F1.24 to numerical precision through the final front group. The infinity back focal distance is 28.877994964 mm. Neither the stop diameter nor the back focal distance is printed in the patent; both are model-derived quantities.

The patent publishes no semi-diameters. Every surface semi-diameter in the data is therefore an authoring inference based on the F1.24-calibrated marginal ray, representative 0.6-field ray sampling, the patent section drawing, and the current geometry constraints. A 600-dpi Figure 1 review narrows L2 to 25.0/24.0 mm and L7 to 16.0 mm, bringing their relative heights closer to the drawn optical rims. Surface 8 remains the limiting rim-slope case: `sd = 15.04 mm` gives a verified spherical rim angle of 64.968957°, so the data declares `maxRimAngleDeg = 65.2°`. The authored geometry has positive edge thicknesses, valid shared-band air gaps, and marginal-ray clearance at both defined focus endpoints. These geometry values are modeling decisions, not patent clear-aperture specifications.

Example 1 contains no aspherical surfaces, so there is no conic convention or asphere-coefficient transformation to report. No dimensional scaling is applied (`s = 1`), and therefore no coefficient or spacing rescaling occurs. The active patent model contains no sensor cover glass, filter, dummy flare-cutter plane, folded path, or mechanical optical plane; no such surface is added to or silently removed from the sequential prescription.

Independent calculations from the final TypeScript surface and element arrays use both sequential height/reduced-angle tracing and a separately assembled ABCD matrix. They agree on the first-order system matrix. The standalone element focal lengths, L5+L6 cemented net power, five patent conditions, constrained close-focus endpoint, and surface-by-surface Petzval sum are therefore computational results tied directly to the final prescription rather than values inferred from the patent prose.

## Sources

**Patent source:** JP H11-160615 A, `大口径レンズ`, applicant Konica Corporation, inventor Toshiji Yamashita, filed 1997-11-25, published 1999-06-18. Example 1 is defined in ¶0018–¶0022, with its prescription in Table 1, focus spacing in Table 2, and optical/aberration figures in Figs. 1–3. The architectural and conditional-expression discussion is in ¶0007–¶0015.

**Manufacturer correlation source:** Konica Technical Report Vol. 13 (2000), “The Development of the M-Hexanon Lens Series.” The report describes Konica's M-Hexanon program and, in the f28/F2.8 barrel discussion, refers to the established “L-mount specification f60/F1.2.” Official Konica Minolta Research PDF: https://research.konicaminolta.com/jp/pdf/technology_report/2000/pdf/83.pdf
