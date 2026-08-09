# RICOH LENS A16 24-85mm F3.5-5.5

## Patent Reference and Design Identification

**Patent:** US 2012/0307375 A1

**Filed:** May 29, 2012

**Published:** December 6, 2012

**Priority:** May 30, 2011; July 5, 2011; August 24, 2011

**Inventors:** Yohei Takano; Hiromichi Atsuumi

**Assignee:** Not named in the supplied US publication

**Title:** Zoom Lens, Imaging Device and Information Device
**Embodiment analyzed:** Embodiment 3 / FIG. 9 / Table 3

The prescription modeled here is Embodiment 3 of US 2012/0307375 A1. The patent identifies FIG. 9 as the optical layout for Embodiment 3, FIGS. 10–12 as its wide, intermediate, and telephoto aberration plots, and Table 3 as its variable-spacing table (¶¶0302–0346). The selected production correlation is the **RICOH LENS A16 24-85mm F3.5-5.5** GXR camera unit. This correlation is a source-based identification rather than a manufacturer statement that the patent example is the production prescription.

Several independent characteristics converge on that identification. Ricoh published the A16 as an APS-C camera unit with an actual focal-length range of 15.7–55.5 mm, a 24–85 mm 35 mm-equivalent field of view, maximum aperture f/3.5–5.5, 11 elements in 9 groups, and three double-sided aspherical elements. The patent example has 11 elements in 9 air-separated component groups, six aspherical surfaces on three double-sided aspherical elements, a 14.3 mm maximum image height, and a computed design focal range of 16.146288–53.849931 mm. Its published design aperture is f/3.62 at wide, f/4.65 at the intermediate state, and f/5.67 at telephoto. Ricoh announced the production unit on February 2, 2012, after the patent family's first 2011 priority date and before the US publication date.

The production and patent focal endpoints are intentionally kept separate. The production-to-patent scale ratio differs materially between the wide and telephoto endpoints, so there is no defensible uniform prescription scale. No dimensional scaling is applied, and the aspherical coefficients therefore remain exactly in the patent's native scale.

## Optical Architecture

The patent describes a five-power-group zoom with the sequence **positive–negative–negative–positive–positive**, with the aperture stop between Groups III and IV (¶¶0097–0101). This five-group power architecture is distinct from the production-style count of nine air-separated physical component groups. The modeled 11-element layout is:

- **Group I (+):** cemented L1–L2.
- **Group II (−):** L3, L4, and L5.
- **Group III (−):** the single negative meniscus L6, which is also the focus group.
- **Group IV (+):** L7 followed by the cemented L8–L9 pair.
- **Group V (+):** L10 and L11.

The aperture stop moves with Group IV during zooming, as the patent states in ¶0100 and ¶0188. All five power groups move between wide and telephoto. The variable air gaps reproduce Table 3 at 16.15, 29.49, and 53.85 mm, including the mid-zoom reversals of Groups II and III when their physical vertex motion is referred to the fixed image plane. The front Group I, Group IV, and Group V motions are monotonic over the same three states.

Power accounting must distinguish individual element power from cemented or assembled-group power. L1 is a standalone negative element with an air-space focal length of −115.441681 mm, while L2 is +48.032244 mm; together their cemented net is **+85.205890 mm**, which is also the net power of Group I. L8 is +22.707504 mm and L9 is −11.521427 mm as standalone elements, yet the cemented L8–L9 pair is **−27.321910 mm**. Adding L7 ahead of that negative cemented pair produces a complete Group IV focal length of **+38.989953 mm**. Group V provides another example: L10 is +18.878824 mm and L11 is −32.079411 mm individually, while their separated two-element group is positive at **+38.286361 mm**. These numbers describe different optical constructs and are not interchangeable measures of the same power.

The patent also places two virtual parallel plates, F, between L11 and the image plane FP (¶¶0102–0104, ¶0190). They stand in for low-pass, infrared-cut, and cover-glass effects rather than lens elements. The modeled prescription therefore omits patent surfaces 22–25. Their reduced optical thickness and the recovered approximately 0.500063 mm plate-to-FP air gap are folded into the final air-equivalent spacing after surface 21. This keeps the active lens prescription at surfaces 1–21 while preserving the paraxial image-plane location.

## Element-by-Element Analysis

### L1 — Negative Meniscus, front member of the first cemented group

**nd = 1.84666, νd = 23.78. Glass: 847238 class. f = −115.441681 mm.**

L1 is the negative front member of the positive first zoom group. Its high refractive index and low Abbe number place it in a dense, high-dispersion class. It is not an isolated negative front group: the cemented interface to L2 makes the pair positive as a whole. This distinction is central to the first group's behavior, because the standalone negative power of L1 is more than offset by L2 and by the cemented geometry.

The patent describes the first group as a cemented negative meniscus followed by a positive meniscus (¶0118). L1 and L2 are therefore treated as one bonded optical component in the group annotation, while remaining separate glass elements in the prescription.

### L2 — Positive Meniscus, rear member of the first cemented group

**nd = 1.77250, νd = 49.60. Glass: 773496 class. f = +48.032244 mm.**

L2 is the positive rear member of the L1–L2 cemented pair. Its substantially higher Abbe number than L1 provides the dispersion contrast expected in a cemented front group, while the pair's net first-order power is positive. The patent does not identify a specific vendor glass for L2, so the data retains a six-digit optical class rather than assigning a catalog name from one arbitrary manufacturer.

### L3 — Negative Meniscus, front of Group II

**nd = 2.00100, νd = 29.13. Glass: 001291 class. f = −13.618527 mm.**

L3 is the strongest standalone negative element in Group II. Its combination of very high index and relatively high dispersion permits strong bending over a short axial thickness. The patent describes Group II as a negative meniscus followed by a double-sided aspherical biconcave lens and a positive biconvex lens (¶0119); L3 therefore supplies the initial negative power before the aspherical L4 and positive L5 redistribute the group's aberration and field behavior.

### L4 — Double-Sided Aspherical Biconcave Negative

**nd = 1.77030, νd = 47.40. Glass: L-LAH87 (OHARA). f = −24.869371 mm.**

L4 carries aspherical surfaces **6A** and **7A** and is the second negative element of Group II. The double-sided aspherical form gives the designer two independent high-order correction surfaces inside a strongly negative zoom group, where spherical and off-axis errors would otherwise be costly to correct elsewhere in the system.

The US prescription table prints `nd = 1.77703` while explicitly labeling the glass `(LLAH87)` (¶0303). That coordinate is inconsistent with OHARA L-LAH87 and also prevents recovery of the patent's own focal lengths and conditional values. The model therefore uses **1.77030**, which matches the named OHARA glass and restores the published first-order results. The raw patent value is treated as a source-table digit transposition rather than silently preserved as a different glass.

L4 is one of only two elements in the data with explicit C-, F-, and g-line indices. Those catalog line indices support a stored `dPgF = −0.00784952`; no apochromatic claim follows from that value alone.

### L5 — Biconvex Positive, rear of Group II

**nd = 1.84666, νd = 23.78. Glass: 847238 class. f = +17.638549 mm.**

L5 is a strong positive biconvex element following two negative members. The complete three-element Group II remains negative, with a computed group focal length of **−31.223580 mm**. The repeated 847238-class coordinate at L1 and L5 gives the design the same high-index, high-dispersion material class in two different functional groups without establishing a particular manufacturer for either element.

### L6 — Negative Meniscus, Group III and sole focusing element

**nd = 1.64850, νd = 53.02. Glass: S-BSM71 (OHARA). f = −49.571713 mm.**

L6 is the entire third power group. The patent repeatedly identifies Group III as a single negative meniscus and states that focusing is performed by moving this group along the optical axis (¶0101, ¶0162, ¶0171). This is the design's principal focusing choice: the moving mass is reduced to one element rather than a multi-element focusing group.

The patent specifically names **S-BSM71 manufactured by OHARA** and gives `νd = 53.02` and `θg,F = 0.5547` (¶¶0341–0344). The data retains the source-named glass and stores catalog C-, F-, and g-line indices. Those line indices give `Pg,F ≈ 0.554801` and `dPgF ≈ +0.00018560` under the SCHOTT normal-line definition. The value is close to the normal line; it supports spectral modeling but not an APO characterization.

### L7 — Double-Sided Aspherical Biconvex Positive

**nd = 1.51633, νd = 64.06. Glass: 516641 class. f = +20.443117 mm.**

L7 is the positive front member of Group IV and carries aspherical surfaces **13A** and **14A**. The stop sits immediately in front of Group IV, so these two aspheres are placed where they can influence both axial and field-dependent ray bundles near the system aperture. The patent describes L7 as a biconvex lens with aspherical surfaces on both sides and a strong convex object-side surface (¶0121).

The glass coordinate is retained as the 516641 class. Although close catalog equivalents exist, the patent does not identify a vendor or melt for L7, so no vendor-specific line indices are imported into the data.

### L8 — Biconvex Positive, front member of cemented D2

**nd = 1.51742, νd = 52.43. Glass: 517524 class. f = +22.707504 mm.**

L8 begins the cemented pair in the rear half of Group IV. It is individually positive, but the cemented pair is not: the much stronger negative standalone power of L9 makes the L8–L9 combination negative. This negative cemented subassembly works behind positive L7, so the complete Group IV remains positive.

### L9 — Biconcave Negative, rear member of cemented D2

**nd = 1.83400, νd = 37.16. Glass: 834372 class. f = −11.521427 mm.**

L9 is the negative rear member cemented directly to L8. The cemented interface carries L9's element identity and refractive index in the surface model, matching the physical downstream medium. The L8–L9 cemented pair has a net focal length of **−27.321910 mm**, while L7 plus that pair produces the positive Group IV net cited above. This is the clearest example in the prescription of why element and cemented-subgroup focal lengths cannot be used as proxies for the in-situ power of a full zoom group.

### L10 — Double-Sided Aspherical Biconvex Positive

**nd = 1.58913, νd = 61.15. Glass: 589612 class. f = +18.878824 mm.**

L10 is the positive front member of Group V and carries aspherical surfaces **18A** and **19A**. Surface 18A is the only asphere in this embodiment with a nonzero conic constant, `K = −1.27337`; the remaining high-order correction is carried by the even polynomial terms on both sides. The rear asphere 19A uses a spherical conic base (`K = 0`) with its own polynomial correction.

The relatively high Abbe number of L10 contrasts with the high-index, lower-Abbe L11 behind it. As with the other unnamed prescription glasses, the stored identity remains a six-digit class.

### L11 — Negative Meniscus, rear of Group V

**nd = 1.90366, νd = 31.32. Glass: 904313 class. f = −32.079411 mm.**

L11 is the final active lens element. It is individually negative, yet the separated L10–L11 assembly is a positive Group V with a computed focal length of **+38.286361 mm**. Its strong refractive index and relatively low Abbe number provide a substantially different dispersion and bending regime from L10 immediately ahead of it.

The patent's virtual filter/cover plates follow L11, but they are not treated as lens elements in the model. Surface 21 therefore exits L11 into air and carries the normalized air-equivalent distance to the image plane.

## Glass Identification and Selection

The patent directly names only L-LAH87 and S-BSM71. The remaining prescription coordinates are intentionally stored as six-digit classes because several vendor catalogs contain exact or near-exact equivalents and the source does not establish which manufacturer supplied those melts.

| Element(s) | Stored glass identity | nd | νd | Spectral status |
|---|---|---:|---:|---|
| L1, L5 | 847238 class | 1.84666 | 23.78 | Abbe-only; vendor not asserted |
| L2 | 773496 class | 1.77250 | 49.60 | Abbe-only; vendor not asserted |
| L3 | 001291 class | 2.00100 | 29.13 | Abbe-only; vendor not asserted |
| L4 | L-LAH87 (OHARA) | 1.77030 | 47.40 | `nC=1.76542547`, `nF=1.78167613`, `ng=1.79071510`, `dPgF=−0.00784952` |
| L6 | S-BSM71 (OHARA) | 1.64850 | 53.02 | `nC=1.64481535`, `nF=1.65704583`, `ng=1.66383131`, `dPgF=+0.00018560` |
| L7 | 516641 class | 1.51633 | 64.06 | Abbe-only; vendor not asserted |
| L8 | 517524 class | 1.51742 | 52.43 | Abbe-only; vendor not asserted |
| L9 | 834372 class | 1.83400 | 37.16 | Abbe-only; vendor not asserted |
| L10 | 589612 class | 1.58913 | 61.15 | Abbe-only; vendor not asserted |
| L11 | 904313 class | 1.90366 | 31.32 | Abbe-only; vendor not asserted |

The spectral evidence is therefore asymmetric. L4 and L6 can use catalog line indices rather than an Abbe approximation, but the other nine elements cannot be assigned vendor-specific partial dispersion without inventing information. The patent's explicit S-BSM71 selection is especially relevant because conditions (11) and (12) constrain the focus-group glass by both Abbe number and partial dispersion. The data supports that discussion without extending it into an apochromatic-performance claim.

## Focus Mechanism

The lens uses **single-group inner focus**: only Group III, consisting solely of L6, moves for focus. The patent establishes the mechanism but does not publish a finite-object spacing table for Embodiment 3. Ricoh publishes an approximately 0.25 m minimum focus distance measured from the physical front of the production lens, while the exact production reference-plane offset to patent surface 1 is not published.

The close-focus state in the model is therefore a **CONSTRAINED_RECONSTRUCTION**, not a patent-published prescription. The reconstruction fixes the image plane, allows only L6 to move, and conserves the sum of the two adjacent gaps B+C at each zoom position. The modeled object distance is 250 mm in front of patent surface 1. Negative travel denotes motion toward the object.

| Zoom state | L6 travel from infinity (mm) | B at close focus (mm) | C at close focus (mm) | Modeled paraxial magnification |
|---|---:|---:|---:|---:|
| Wide | −1.532826 | 1.343834 | 20.822986 | −0.05940 |
| Intermediate | −1.896522 | 1.232488 | 10.334142 | −0.10250 |
| Telephoto | −2.835849 | 1.500321 | 5.435789 | −0.16460 |

The image-plane closure residual is below 3×10⁻13 mm in all three reconstructed states, and B+C is conserved to numerical precision. Those checks establish internal consistency of the reconstruction; they do not convert Ricoh's rounded 0.25 m production specification into exact patent close-focus data.

## Aspherical Surfaces

Embodiment 3 has six aspherical surfaces: 6A and 7A on L4, 13A and 14A on L7, and 18A and 19A on L10. The patent defines the sag using the standard conic form

$X(H)=\frac{CH^2}{1+\sqrt{1-(1+K)C^2H^2}}+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}+\cdots$,

with `C = 1/R` (¶¶0202–0210). The published `K` values therefore map directly to the LensVisualizer conic constant; no `κ → K` conversion is required. Embodiment 3 publishes no nonzero A12 or A14 terms.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 6A | 0 | −8.18151E−06 | −2.01833E−07 | +2.53333E−09 | −1.29107E−11 |
| 7A | 0 | −3.23283E−05 | −1.88341E−07 | +1.96755E−09 | −1.43273E−11 |
| 13A | 0 | −3.22004E−05 | −9.60992E−07 | +1.55589E−08 | −2.82657E−10 |
| 14A | 0 | +3.53815E−06 | −8.66214E−07 | +1.17377E−08 | −2.24402E−10 |
| 18A | −1.27337 | −1.58768E−05 | −1.86624E−07 | +6.94712E−10 | −5.97184E−12 |
| 19A | 0 | +3.31640E−05 | −1.06067E−07 | −6.29723E−10 | 0 |

The patent does not publish clear semi-diameters. The model therefore derives surface semi-diameters from exact meridional field/pupil ray envelopes and geometry constraints. Asphere departures are quoted only at those verified modeled radii. The numbers below are the polynomial departure from the corresponding conic base, not a claim about a manufacturer-published clear aperture.

| Surface | Modeled semi-diameter (mm) | Polynomial departure at that radius (mm) |
|---|---:|---:|
| 6A | 9.38 | −0.117064 |
| 7A | 9.41 | −0.341275 |
| 13A | 7.24 | −0.221272 |
| 14A | 7.56 | −0.161765 |
| 18A | 10.80 | −0.824970 |
| 19A | 10.80 | +0.166320 |

No prescription scale is applied, so none of these polynomial coefficients is transformed. Had a uniform scale `s` been used, each `A_p` would require division by `s^(p−1)` while `K` remained unchanged; that transformation is not applicable here.

## Conditional Expressions

The patent uses first-order power, field, zoom-ratio, and focus-glass conditions to delimit the design family. Recalculation from the authored prescription gives the following values. `Fm = √(fw·ft) = 29.486887 mm`, `f1 = +85.205890 mm`, `f2 = −31.223580 mm`, and `f3 = −49.571713 mm`.

| Condition | Authored-prescription value | Result |
|---|---:|---|
| (1) `1.0 < |(R31−R32)/F23W| < 10.0` | 5.595807 | Pass |
| (2) `1.0 < |(R31−R32)/F23T| < 10.0` | 5.670418 | Pass |
| (3) `1.4 < |F3|/Fm < 2.5` | 1.681144 | Pass |
| (4) `νd3 > 50` | 53.02 | Pass |
| (5) `0.75 < Y′/Fw` | 0.885652 | Pass |
| (6) `2.8 < Ft/Fw` | 3.335128 | Pass |
| (7) `1.4 < |f3|/√(fw·ft) < 3` | 1.681144 | Pass |
| (8) `2.2 < |f1/f2| < 3.5` | 2.728896 | Pass |
| (9) `2.2 < |f1/√(fw·ft)| < 3.5` | 2.889620 | Pass |
| (10) `0.2 < f2/f3 < 0.9` | 0.629867 | Pass |
| (11) `νd3 > 50` | 53.02 | Pass |
| (12), source-corrected form `θg,F < −1.2×10⁻3νd3 + 0.62` | 0.5547 < 0.556376 | Pass |

Condition (12) requires a source qualification. The US text prints a **positive** coefficient before `1.2×10⁻3νd3`, but the corresponding Japanese priority-family publication **JP2012247715A** explicitly prints the negative-slope inequality in its claim. That reading is also consistent with the descending boundary in FIG. 35 and with ¶0186, which places acceptable glasses on the lower side of the line. The source-corrected negative-slope form shown above is therefore used for verification. This correction affects interpretation of the condition, not any surface or glass value in the prescription.

## Verification Summary

Independent sequential reduced-angle tracing and an ABCD matrix calculation reproduce the first-order properties of the final authored arrays. At the three infinity zoom states, the effective focal lengths are **16.146288, 29.486937, and 53.849931 mm**. The corresponding air-equivalent back focal distances from surface 21 are **30.304129, 42.583038, and 54.738148 mm**. The exact traced full-field chief-ray angles are **42.7711°, 25.5533°, and 14.4578°**, consistent with the patent's 42.8° wide and 14.46° telephoto values.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives **+0.001806767942 mm⁻¹**, a signed inverse of approximately **+553.475 mm**. The small net value is the residual of substantially larger positive and negative surface contributions; it should not be interpreted as a group-power approximation.

The aperture stop's modeled semi-diameter is **5.994031 mm**, derived from the wide-state f/3.62 pupil geometry. The patent does not publish the physical iris radius and explicitly allows the stop opening to vary with zoom (¶0092); the single authored stop size is therefore a geometry model, not a source measurement.

The patent likewise publishes no lens-surface semi-diameters. The modeled clear apertures were derived from exact on-axis and off-axis ray envelopes through all three zoom states at infinity and reconstructed close focus, then checked against the relative element heights in FIG. 9 and the physical geometry validator. That comparison sets the larger rear edge of L9 and the Group V rims; it also leaves the strongly biconvex L10 with **0.375116 mm** of modeled edge thickness. The maximum actual rim-slope angle remains **56.514°**, and the largest shared-gap sag-intrusion fraction remains **0.89484** against the model's 0.90 limit. Exact ray containment through 0.75 of the patent's 14.3 mm image height passes in every defined infinity and close-focus state. These semi-diameters are modeling inferences and should not be read as Ricoh mechanical drawings.

The two source corrections remain explicit: surface 6 uses `nd = 1.77030` rather than the apparent patent transposition `1.77703`, and condition (12) is interpreted with the negative slope required by FIG. 35. The rear virtual plates are omitted and normalized into the air-equivalent rear spacing. No uniform scale is applied. The finite-focus state remains a constrained reconstruction rather than a published example.

## Sources / References

- **US 2012/0307375 A1**, Yohei Takano and Hiromichi Atsuumi, *Zoom Lens, Imaging Device and Information Device*, published December 6, 2012. Embodiment 3: FIG. 9, FIGS. 10–12, Table 3, ¶¶0302–0346; architecture and focus: ¶¶0097–0104, ¶¶0117–0122, ¶¶0162–0188; asphere convention: ¶¶0202–0210.
- **JP 2012-247715 A (JP2012247715A)**, corresponding priority-family publication from JP 2011-121122. Claim 5 prints `θg,F < −1.2×10⁻3νd3 + 0.62`, resolving the missing minus sign in the supplied US publication: https://patents.google.com/patent/JP2012247715A/ja
- Ricoh, **RICOH LENS A16 24-85mm F3.5-5.5** announcement, February 2, 2012: https://www.ricoh-imaging.co.jp/english/r_dc/press/release/nr_gxr_unit7.html
- Ricoh, **GXR Major Specifications**: https://www.ricoh-imaging.co.jp/english/products/gxr/specs.html
- OHARA, **Material Property Catalog** including obsolete L-LAH87 and S-BSM71 data: https://www.ohara-inc.co.jp/wp-content/uploads/2019/12/OHARA_MaterialPropertyCatalog_202207.txt
- SCHOTT, **TIE-29: Refractive Index and Dispersion** normal-line convention used for `dPgF`: https://media.schott.com/api/public/content/aaa572afd854434fb7b3faa4bc46103f?v=c0f4fa52
