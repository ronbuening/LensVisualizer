# Leica Elmar-M 135 mm f/4 — Optical Analysis

**Patent:** DE 1,183,707 B (Auslegeschrift)  
**Application Number:** L 36512 IXa/42h  
**Filed:** 7 July 1960  
**Published:** 17 December 1964 (Auslegetag)  
**Inventors:** Otto Zimmermann; Gustav Kleineberg; Eugen Hermanni  
**Applicant:** Ernst Leitz G.m.b.H., Wetzlar  
**Title:** Fotografisches Objektiv  
**Classification:** Int. Kl. G02b; Deutsche Kl. 42h-4/04  
**Embodiment analyzed:** The single worked prescription tabulated in the claim, normalized to f = 1.0 and f:4.

## Patent Reference and Design Identification

DE 1,183,707 B gives a single numerical prescription for a five-element, three-group photographic telephoto objective. The table on the first patent page is normalized to focal length f = 1.0 and aperture ratio f:4. Its refractive-index columns are explicitly marked $n_e$ and $\nu_e$, so the prescription is an e-line design rather than a d-line prescription. The data file therefore preserves the patent's e-line index values in the surface-index fields so that the paraxial reconstruction remains tied to the published table; d-line catalog equivalents are documented separately below.

The patent is assigned here to the Leitz/Leica 135 mm f/4 Tele-Elmar optical formula, later sold in M-mount form as the Tele-Elmar-M / Elmar-M 135 mm f/4. The assignment is not made from the name alone. The convergent evidence is as follows:

1. **Element and group count.** The patent table contains five glass elements in three air-spaced groups: a front cemented doublet, a central cemented doublet, and a rear singlet. Published Tele-Elmar and Tele-Elmar-M references describe the production lens as 5 elements in 3 groups, while the earlier non-telephoto Elmar 135 mm f/4 is a different 4/4 long-focus design.
2. **Patent aim.** The patent text says the object of the invention is a long-focal-length lens made from inexpensive glasses, avoiding the very-high-index expensive glass used in prior designs. The prescription uses ordinary crown/flint classes rather than lanthanum crowns or anomalous partial-dispersion materials.
3. **Telephoto geometry.** The e-line paraxial trace gives a telephoto ratio of 0.950 after scaling, with the rear principal plane about 6.8 mm in front of the first vertex. That is consistent with the Tele-Elmar being shorter than the preceding long-focus Elmar.
4. **Focal length, aperture, and field.** The production specification family is 135 mm, f/4, approximately 18° diagonal field; the patent is explicitly normalized to f:4 and scales directly to the 135 mm class.
5. **Stop placement.** The patent drawing places the diaphragm immediately behind the central negative group, just to the image side of r6. This matches published descriptions of the Tele-Elmar/Tele-Elmar-M stop position.
6. **Focus configuration.** The patent gives no variable internal spacings; the production lens is a manual, rangefinder-coupled unit-focus lens with a close-focus distance of approximately 1.5 m.

The patent itself names Zimmermann, Kleineberg, and Hermanni. Secondary literature often credits Walter Mandler with the production Tele-Elmar and often calls the lens a Sonnar. Those attributions are best treated as historical shorthand. Analytically, the patent describes a three-member telephoto in which two positive menisci enclose a thick negative meniscus.

## Optical Architecture

The design is a positive-negative-positive telephoto. All three air-spaced groups are meniscus-form groups, convex toward the object side. The patent claim describes the structure as two positive menisci enclosing a relatively thick negative meniscus, with that negative meniscus placed close to the object-side positive meniscus.

**Group 1, L1 + L2, surfaces r1-r3.** This is the front positive cemented meniscus. Paraxially in air, the group focal length is approximately +147.6 mm after scaling by 135. L1 supplies the main positive power; L2 is a weak negative flint cemented behind it at a flat interface.

**Group 2, L3 + L4, surfaces r4-r6.** This is the central thick negative cemented meniscus. Its scaled axial glass thickness is about 27.3 mm, which supports the patent's description of it as relatively thick. The group focal length is approximately −191.9 mm. The air gap from G1 to G2 is only 0.286 mm after scaling, while the G2-to-G3 gap is about 23.1 mm, making the front positive/negative pair the telephoto power-forming section.

**Group 3, L5, surfaces r7-r8.** This rear positive dense-flint meniscus has a scaled standalone focal length of approximately +186.4 mm. It sits behind the long air space and restores positive convergence to focus while contributing to field and chromatic balance.

The aperture stop lies in the long a2 gap just behind r6. The patent drawing gives the stop position graphically but does not tabulate a stop distance or clear aperture. In the data file, the stop is placed 0.03000 f behind r6, leaving 0.14126 f to r7. The stop semi-diameter is then computed to give f/4 from the paraxial entrance pupil.

The cemented r5 interface inside G2 is the patent's diverging cemented surface. Across r5, the refractive index rises from 1.51871 to 1.60718 while the radius is negative, giving a surface power of approximately −0.076 in normalized 1/f units. The index step is about 0.088, lower than the >0.12 step cited in the patent's prior-art discussion, but the surface remains optically diverging.

## Element-by-Element Analysis

### L1 — Plano-convex positive crown

$n_e = 1.57125$, $\nu_e = 55.8$; catalog equivalent: Schott N-BAK4 / BaK4 class, approximately $n_d = 1.56883$, $\nu_d = 55.98$. Standalone f = +114.2 mm after scaling.

L1 is the front collector. Its object-side curved surface is the main positive surface of the first group. The rear surface is flat, so the L1-L2 cemented interface contributes no refractive power. This makes the first group's correction depend primarily on r1 and r3 rather than on a powered cemented junction.

### L2 — Plano-concave weak negative flint

$n_e = 1.58403$, $\nu_e = 41.4$; catalog equivalent: unresolved light-flint class, LF5-adjacent but not an exact public Schott LF5 match. Standalone f = −478.8 mm after scaling.

L2 is a weak negative element cemented to the rear of L1. Its flat front surface is optically neutral; the concave rear surface r3 supplies the negative contribution. The front doublet is not locally achromatized as a self-contained achromat. Its chromatic balance only makes sense in the complete five-element system.

The L2 glass identification is deliberately not over-specified. The patent code $n_e/\nu_e = 1.58403/41.4$ is near light-flint territory, but modern Schott LF5 lists $n_e = 1.58482$ and $\nu_e = 40.57$, which is close but not exact. The data file therefore marks the element as an explicit unmatched e-line light-flint class rather than asserting a catalog melt.

### L3 — Biconvex positive borosilicate crown

$n_e = 1.51871$, $\nu_e = 64.0$; catalog equivalent: Schott N-BK7 / BK7 class, approximately $n_d = 1.51680$, $\nu_d = 64.17$. Standalone f = +58.9 mm after scaling.

L3 is the strong positive component of the central group. Its first surface r4 is the strongest positive surface in the lens, with normalized power about +1.879. This element begins the high-power central meniscus but is immediately paired with the much stronger negative L4.

BK7-class glass is consistent with the patent's stated economic objective. It is a conventional crown, not a high-index lanthanum crown and not an anomalous-dispersion material.

### L4 — Biconcave negative flint

$n_e = 1.60718$, $\nu_e = 37.8$; catalog equivalent: Schott F5 class, approximately $n_d = 1.60342$, $\nu_d = 38.03$. Standalone f = −34.1 mm after scaling.

L4 is the dominant negative element. The rear surface r6 is the steepest powered surface in the patent table, with normalized power about −3.282. Together, L3 and L4 form the thick negative meniscus that creates the telephoto shortening.

The r5 cemented interface is also diverging, but it is not the only negative contribution. Most of the group's negative power comes from r6. This distinction matters because the patent's prose emphasizes the diverging cemented surface, while the numerical prescription shows that the air-glass rear surface is the stronger negative surface.

### L5 — Rear positive dense-flint meniscus

$n_e = 1.69416$, $\nu_e = 30.9$; Schott N-SF8 / SF8 class by e-line comparison, but retained as explicit unmatched data because the stored prescription uses e-line values rather than d-line `nd`. Standalone f = +186.4 mm after scaling.

L5 is a rear positive meniscus separated from G2 by the long a2 air space. It brings the diverged beam back toward focus and participates in the final chromatic balance. The glass is a dense flint rather than a crown, so this element cannot be read as a simple field flattener or neutral relay; it is an active component of the telephoto power and color correction.

## Glass Identification and Selection

The patent publishes only e-line refractive indices and e-line Abbe numbers. It does not name glass manufacturers or melt numbers. The table below therefore distinguishes exact or close Schott catalog-class matches from the one unresolved light flint.

| Element | Patent $n_e / \nu_e$ | Catalog-class d-line equivalent | Identification used | Confidence | Role |
|---|---:|---:|---|---|---|
| L1 | 1.57125 / 55.8 | N-BAK4: 1.56883 / 55.98 | BaK4 barium crown | High | Front positive collector |
| L2 | 1.58403 / 41.4 | No exact public match; LF5-adjacent | Explicit unmatched 584/414 e-line light flint | Moderate | Weak negative in front doublet |
| L3 | 1.51871 / 64.0 | N-BK7: 1.51680 / 64.17 | BK7 borosilicate crown | High | Strong positive in G2 |
| L4 | 1.60718 / 37.8 | F5: 1.60342 / 38.03 | F5 ordinary flint | High | Main negative element |
| L5 | 1.69416 / 30.9 | N-SF8 e-line class | Explicit unmatched SF8 dense flint class | High | Rear positive meniscus |

The palette is conventional and economical: barium crown, borosilicate crown, light flint, ordinary flint, and dense flint. There is no evidence in the prescription for lanthanum crown or anomalous partial dispersion glass. That is consistent with the patent's stated objective of avoiding expensive very-high-index materials.

Because the patent lacks partial-dispersion data, no apochromatic or secondary-spectrum claim is supported. The design is better described as a well-corrected conventional achromat. Chromatic correction is distributed over the two cemented crown/flint pairs, the rear dense-flint singlet, and the group spacings; it is not localized in a single cemented doublet.

## Focus Mechanism

The patent gives only an infinity-focus prescription and no variable internal spacing table. The production lens is therefore modeled as unit focus: all glass surfaces keep fixed separations, and the optical cell translates as one rigid unit relative to the image plane.

For the data file, close focus is modeled from the 1.5 m production close-focus distance, measured from the image plane. Using the scaled e-line prescription, the infinity BFD is 64.361 mm. Solving the finite-conjugate paraxial condition for 1.5 m gives a close-focus BFD of 79.463 mm, an extension of 15.103 mm and a paraxial magnification of about 0.112, or roughly 1:8.9. The approximation is adequate for visualizing the unit-focus travel; the patent itself does not publish close-focus performance data.

| State | Object distance basis | BFD |
|---|---:|---:|
| Infinity | collimated object | 64.361 mm |
| Close focus | 1.5 m from image plane | 79.463 mm |

## Verification Summary

The patent transcription was re-run with a y-nu paraxial trace, using the patent's e-line indices and the standard photographic sign convention $R > 0$ for centers of curvature to the image side.

| Quantity | Normalized patent scale | Scaled ×135 |
|---|---:|---:|
| EFL | 0.99624268 | 134.493 mm |
| BFD | 0.47674664 | 64.361 mm |
| Mechanical track r1-r8 | 0.46928000 | 63.353 mm |
| Front vertex to image plane | 0.94602664 | 127.714 mm |
| Telephoto ratio | 0.949595 | 0.949595 |
| Petzval sum $\Sigma \phi/(nn')$ | +0.1580339 | reciprocal magnitude ≈ 854 mm |

The computed EFL is 0.376% below the patent's nominal f = 1.0. This is consistent with five-decimal rounding in the patent table and does not point to a single anomalous surface. The sign convention is internally consistent: the first group is positive, the central thick group is negative, and the rear meniscus is positive, exactly as the patent text requires.

The inferred aperture stop was also checked independently. With the stop placed 0.03000 f behind r6, the marginal-ray height at the stop is 0.5888256 times the entrance-pupil ray height. The stored stop semi-diameter of 9.8991 mm therefore gives an entrance-pupil semi-diameter of 16.8116 mm and f/# = 3.999999 at the computed 134.493 mm design EFL.

The grouped focal lengths at the 135 mm scale are:

| Group | Surfaces | Focal length |
|---|---|---:|
| G1 | r1-r3 | +147.6 mm |
| G2 | r4-r6 | −191.9 mm |
| G3 | r7-r8 | +186.4 mm |

The element focal lengths at the same scale are:

| Element | Focal length |
|---|---:|
| L1 | +114.2 mm |
| L2 | −478.8 mm |
| L3 | +58.9 mm |
| L4 | −34.1 mm |
| L5 | +186.4 mm |

The semi-diameters in the data file are inferred values. The patent does not provide clear apertures. The selected values preserve positive edge thicknesses, keep front/rear semi-diameter ratios conservative, respect the very tight r3-r4 air gap through signed sag clearance, and accept realistic wide-open off-axis vignetting rather than forcing an unrealistically large unvignetted 18° full-field envelope.

## Design Heritage and Context

This design sits within the older telephoto family in which positive menisci enclose a thick negative meniscus. Its distinct contribution is not exotic glass or aspherical correction, but an economical redistribution of power that produces a true 135 mm telephoto with ordinary crown and flint materials.

The optical formula was carried from the Leitz Tele-Elmar 135 mm f/4 into the later Tele-Elmar-M / Elmar-M 135 mm f/4 packaging. The later M-version should therefore be understood as a rehousing of the same basic five-element, three-group prescription rather than as a new optical calculation.

## Sources

- DE 1,183,707 B, Ernst Leitz G.m.b.H., filed 7 July 1960 and published 17 December 1964 — primary source for the prescription, claim language, inventor names, and drawing.
- Leica Classic product category for Elmar-M 4/135 mm — production naming and Leica order-number family, including 11850, 11851, and 11861.
- Lens-DB entries for Leitz Wetzlar Tele-Elmar 135 mm f/4 Type 1 and Leica Tele-Elmar-M 135 mm f/4 Type 2 — production element/group count, stop placement, and design continuity.
- Schouten-Select pre-series listing for Leitz 135 mm f/4 Elmar in Tele-Elmar barrel — 100-lens pre-series and patent-to-production context.
- Phillip Reeve review of Leica 135 mm f/4 Tele-Elmar — production specifications: 5/3 construction, Leica M mount, 18° field, 1.5 m close focus, and 10-blade aperture.
- SCHOTT datasheets for N-BAK4, N-BK7, F5, LF5, and N-SF8 — catalog comparison for the e-line and d-line glass values.
