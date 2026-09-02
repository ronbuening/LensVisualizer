## Patent Reference and Design Identification

**Patent:** DE 1 497 540 A1
**Filed:** 7 December 1965
**Priority:** Japan 74794
**Published:** 27 March 1969
**Inventor:** Ikuo Mori
**Applicant:** Nippon Kogaku K.K.
**Title:** *Retrofokus-Weitwinkelobjektiv*
**Embodiment analyzed:** Example III (Beispiel III)

This analysis treats DE 1 497 540 A1, Example III, as the fixed production correlation for the **NIKON PC-NIKKOR 35mm f/2.8**. The prescription is printed on PDF pages 15–16 of the source publication (internal pages 14–15); the corresponding axial section is Figure 3 and the corresponding aberration plots are Figure 4 on PDF page 22. The data file follows the selected example rather than combining values from the patent's other numerical embodiments.

The production correlation rests on convergent source evidence rather than an explicit Nikon statement that this patent number was used for the production lens:

1. Nikon's historical account states that the PC-NIKKOR 35mm f/2.8 was newly designed and released in May 1968 with **8 elements in 7 groups**.
2. Example III is an **8-element / 7-group**, all-spherical retrofocus prescription whose published design aperture is **f/2.8**.
3. The patent was filed in 1965, before the May 1968 production release, and the applicant is Nippon Kogaku K.K.
4. Figure 3 shows the same specialty-wide-angle architecture required by the patent: two negative front menisci followed by a predominantly positive rear section, with the diaphragm between L5 and L6.

The marketed focal length and the optical design value are deliberately kept separate. The patent normalizes the prescription to `f = 100`; the data file applies a uniform scale factor of `s = 0.35`, while independent paraxial computation from the scaled prescription gives a design EFL of **34.8707 mm**. The public product designation remains **35 mm f/2.8**.

One source error is corrected in the model and disclosed rather than silently normalized. Example III visibly prints `r11 = -176.6`, but that sign makes L6 inconsistent with the patent's own negative-lens description and yields first-order results grossly inconsistent with the published `f = 100` and `Schnittweite = 130.5`. Modeling `r11 = +176.6` alone gives normalized EFL **99.6305** and BFD **130.5038**, so the scaled data use `R11 = +61.81 mm`. The original printed sign remains part of the provenance record.

## Optical Architecture

The prescription is a two-part **retrofocus wide-angle** system. The front group comprises the air-spaced negative menisci L1 and L2, both convex toward the object. After a relatively large air space, the rear section comprises positive L3; the cemented L4/L5 positive-negative pair; negative L6; and positive menisci L7 and L8, both concave toward the object. The diaphragm lies between L5 and L6, as stated by the patent.

Independent computation from the final TypeScript prescription gives BFD **45.6763 mm** and EFL **34.8707 mm**, so `BFD/EFL = 1.3099`. The design therefore satisfies the project's retrofocus criterion `BFD > EFL` and also agrees with the patent's stated objective of a back focus greater than roughly 1.3 times focal length.

The front L1–L2 section is negative as a combined optical group, with computed group EFL **-36.6840 mm**. That is about **-1.0520×** the complete-lens EFL, close to the patent's statement that the front-group focal length is about `-1.06 f`. The rear L3–L8 section is net positive, with computed group EFL **+32.0684 mm**. These are composite in-situ group results; they are not the same quantities as the isolated focal lengths of the individual elements listed below.

The L4/L5 cemented pair illustrates that distinction particularly clearly. L4 alone is strongly positive and L5 alone is negative, but the cemented pair has a computed net EFL of **+31.3937 mm** in isolation. The pair therefore remains net positive even though its rear member is negative.

The production lens belongs to Nikon's perspective-control line. Nikon's historical account describes PC-NIKKOR as a shift-based 35 mm SLR concept developed in connection with the Nikon F system. No numerical shift range is assigned to the modeled embodiment. The later same-name Nikon instruction manual available for comparison specifies 11 mm shift but also specifies a **7-element / 7-group** construction, so its mechanical limits are not treated as exact parameters of the selected 1968 eight-element optical generation.

## Element-by-Element Analysis

The focal lengths in this section are **standalone thick-element focal lengths in air**, computed from each element's two radii, center thickness, and index. They should not be interpreted as the element's isolated contribution to power when embedded in the complete lens.

### L1 — Negative Meniscus, convex toward the object

**nd = 1.65160, νd = 58.5. Glass: 652585 — lanthanum crown class. f = -65.5887 mm.**

L1 is the first member of the negative retrofocus front group. Its convex-to-object meniscus form and negative standalone power begin the strong front-group divergence needed to obtain a long rear clearance from a short wide-angle focal length.

The patent treats the two front menisci as a group rather than assigning L1 a separate aberration function. In the final model, the L1/L2 group is strongly negative while the complete system remains positive because the rear section is converging.

### L2 — Negative Meniscus, convex toward the object

**nd = 1.62230, νd = 53.1. Glass: 622531 — dense barium / SSK-class. f = -89.7461 mm.**

L2 continues the negative front-group action while remaining air-spaced from L1. The patent's Conditions I and II govern the relationship between the large inter-group separation and selected rear-section thicknesses/spacings. In the explanatory text, these conditions are associated with keeping the system compact while correcting spherical aberration and distortion generated by the comparatively strong negative front group.

L2 is less negative as an isolated element than L1, but the two elements together form the negative front block with computed EFL **-36.6840 mm**. This composite value is the appropriate measure of the front group's paraxial role.

### L3 — Biconvex Positive

**nd = 1.67270, νd = 32.2. Glass: 673322 — SF5-class. f = +213.2548 mm.**

L3 begins the rear converging section after the large air space behind L2. It is a weak positive biconvex element in the scaled prescription. Its isolated focal length is much longer than the complete-lens EFL, so it should be read as part of the rear group's distributed power rather than as the principal converging element by itself.

The patent describes L3 simply as a positive single lens before the cemented doublet. It does not assign a separate named aberration-correction function to L3, and none is inferred here beyond its position in the net-positive rear section.

### L4 / L5 — Cemented Positive-Negative Doublet D1

**L4: nd = 1.72000, νd = 50.3. Glass: 720503 — lanthanum crown class. f = +23.0834 mm.**
**L5: nd = 1.50137, νd = 56.5. Glass: K10 catalog equivalent (patent 501565; production supplier unspecified). f = -76.9752 mm.**

L4 is the strongest positive standalone element in the prescription. L5 is cemented directly to it and is negative in isolation. The interface uses L5's index in the data model, consistent with the physical cemented junction. The two elements together form a net-positive doublet with computed isolated-pair EFL **+31.3937 mm**.

The patent's explanatory text specifically notes the favorable effect of making the refractive index of L4 greater than that of L5. In Example III the source values satisfy that relationship (`1.72 > 1.50137`). The patent associates this choice with improvement of the preceding correction and with favorable conditions for chromatic-aberration correction. This is an achromatization statement at the patent-design level; it is not evidence that the lens is apochromatic or that either glass has anomalous partial dispersion.

### L6 — Biconcave Negative

**nd = 1.72825, νd = 28.3. Glass: 728283 — SF10-class. f = -21.8550 mm.**

L6 is the strongest negative standalone element in the rear section and sits immediately behind the diaphragm. Its biconcave form depends on the corrected positive sign of the rear radius `r11`; the literal negative sign printed in Example III would not produce the negative-lens geometry described by the patent.

Condition III is tied explicitly to this part of the design. The patent states that the L6 thickness and the following air space are used to balance astigmatism and coma: increasing the L6 thickness improves astigmatism but tends to increase negative coma, while adjustment of the following air space provides the compensating coma correction. Example III satisfies the published `d10 > d11` condition.

### L7 — Positive Meniscus, concave toward the object

**nd = 1.71300, νd = 53.9. Glass: 713539 — lanthanum crown class. f = +41.5405 mm.**

L7 is the first of two positive rear menisci, both concave toward the object. It follows the air-spaced negative L6 and restores positive power toward the image side.

The patent does not isolate a separate aberration function for L7. Its role is therefore described conservatively as part of the final converging section rather than attributing a specific correction to it that the source does not state.

### L8 — Positive Meniscus, concave toward the object

**nd = 1.65160, νd = 58.5. Glass: 652585 — lanthanum crown class. f = +55.0043 mm.**

L8 is the final positive element and uses the same index/Abbe coordinate pair as L1. Its positive meniscus form completes the rear converging train and hands the beam to the relatively long rear image-space distance characteristic of the retrofocus system.

As with L7, no narrow aberration role is assigned beyond what can be supported by the patent architecture and the computed power distribution.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number for each element but does not identify the historical glass manufacturer or melt. The data file therefore preserves source coordinates and treats compatible catalog names as spectral proxies rather than production identities.

| Data-file glass label | nd | νd | Element(s) | Design use |
|---|---:|---:|---|---|
| 652585 — lanthanum crown class | 1.65160 | 58.5 | L1, L8 | Moderate-index, relatively high-Abbe glass used at both ends of the system |
| 622531 — dense barium / SSK-class | 1.62230 | 53.1 | L2 | Second negative front meniscus |
| 673322 — SF5-class | 1.67270 | 32.2 | L3 | Higher-dispersion weak positive element |
| 720503 — lanthanum crown class | 1.72000 | 50.3 | L4 | Strong positive member of cemented doublet |
| K10 catalog equivalent (patent 501565) | 1.50137 | 56.5 | L5 | Compatible coefficient-backed proxy for the negative doublet member |
| 728283 — SF10-class | 1.72825 | 28.3 | L6 | High-index, high-dispersion negative rear element |
| 713539 — lanthanum crown class | 1.71300 | 53.9 | L7 | Positive rear meniscus |

The d-line interpretation used by the data file is an inference from the source coordinate system rather than an explicit label beside the Example III table. The patent supplies no `nC`, `nF`, `ng`, partial-dispersion ratio, or `dPgF` values. The data therefore carries none of those fields, and no claim of apochromatic or anomalous-dispersion correction is made.

K10 reproduces L5's patent coordinate within the catalog guard, bringing all eight physical elements onto coefficient-backed curves. That compatibility does not establish which historical vendor glass Nippon Kogaku procured; the production supplier remains unspecified.

## Focus Mechanism

The selected patent example publishes only an infinity prescription. It contains no finite-conjugate spacing table, no moving-group diagram, and no numerical close-focus state. The modeled prescription therefore contains no finite-focus movement state and carries the focus status **NO_INTERNAL_RECONSTRUCTION**.

The model records **0.3 m** as closest-focus catalog metadata from a later Nikon instruction manual for a same-name PC-Nikkor 35mm f/2.8. That manual also specifies a 7-element / 7-group optical construction, in direct conflict with the eight-element 1968 generation identified by Nikon's historical account and with the fixed patent embodiment used here. The 0.3 m value is therefore not used to infer group travel, back-focus change, magnification, or any finite-focus prescription for Example III.

The later manual likewise documents shift mechanics, but its 11 mm movement limit is not encoded as a numerical perspective-control range for this data set because the optical revision is different. The centered optical prescription is the only modeled state.

## Conditional Expressions

The patent defines three conditions for the retrofocus construction. Example III satisfies all three using the unscaled normalized prescription values:

1. `d4 < d5 + d7 + d8`: **31.47 < 53.15**.
2. `d7 + d8 > d5`: **35.67 > 17.48**.
3. `d10 > d11`: **14.0 > 3.5**.

The patent explains Conditions I and II in connection with reducing overall system size while correcting spherical aberration and distortion from the strong front negative group. It further states that using a higher index in L4 than L5 improves the correction and provides favorable chromatic-correction conditions. Condition III is explicitly directed to balancing coma and astigmatism through the L6 thickness and the following air space.

## Verification Summary

The final data file applies a uniform dimensional scale of **0.35** to the patent prescription. The source radii, thicknesses, air spaces, and rear image-space distance are scaled into millimeters. The patent does not publish semi-diameters, so those are inferred separately in the scaled millimeter model rather than scaled from source SD values. The selected embodiment is entirely spherical, so there are no conic constants or polynomial asphere coefficients to transform under scaling.

The aperture stop requires a modeling inference because the patent specifies only that the diaphragm lies between L5 and L6. Figure 3 places it visibly nearer L6; the model locates the stop at **72% of source `d9` measured from r9 toward r10**. Its semi-diameter, **7.71767 mm**, is then solved paraxially so the corrected scaled prescription is exactly **f/2.8** at infinity. The stop location and diameter are modeling values, not patent-tabulated measurements.

Surface semi-diameters are also absent from the patent tables. The data-file values were inferred from Figure 3, paraxial marginal/chief-ray envelopes, and geometric constraints. Independent checks on the final TypeScript prescription give a minimum authored rim edge thickness of **0.6792 mm**, maximum spherical rim slope of **47.854°**, and maximum positive cross-gap intrusion ratio of **0.88018**, below the configured `0.90` limit. An independent paraxial off-axis containment check passes at **22.5°**, corresponding to 60% of the patent's 37.5° semi-field; repository render diagnostics are a separate integration check.

The independently traced design EFL is **34.8707 mm** and the BFD is **45.6763 mm**. Reduced-angle sequential tracing and an independent ABCD matrix agree to better than `1e-10 mm` for both quantities. These are computed properties of the authored model, not values directly printed in millimeters by the patent.

Figure 4 of the patent marks **f/2.8** and **37°30′** semi-field for Example III and plots spherical aberration/sine condition, astigmatism, distortion, and coma. The data file records the corresponding published coverage as a rectilinear **75° full field**. No later 78° covering-power specification is substituted into the selected patent model.

## Sources / References

- Deutsches Patentamt, **DE 1 497 540 A1**, *Retrofokus-Weitwinkelobjektiv*, Nippon Kogaku K.K.; inventor Ikuo Mori. Example III prescription on PDF pp. 15–16; Figures 3–4 on PDF p. 22.
- Nikon Corporation, Haruo Sato, **“NIKKOR — The Thousand and One Nights No.17”**. Nikon's historical account states that the newly designed PC-NIKKOR 35mm f/2.8 was released in May 1968 with 7 groups / 8 elements: https://imaging.nikon.com/imaging/information/story/0017/
- Nikon Corporation, **PC-Nikkor 35mm f/2.8 Instruction Manual**, later 7-element / 7-group revision. Used only to delimit variant-specific metadata such as the 0.3 m distance scale and not as the optical prescription source: https://forum.dxo.com/uploads/short-url/lgerH7wClF1Guq0sLrPU98GfQVM.pdf
