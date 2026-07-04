## Patent Reference and Design Identification

**Patent:** US 4,163,603
**Application Number:** 826,144
**Filed:** August 19, 1977
**Granted:** August 7, 1979
**Priority:** JP 51-98765, August 20, 1976
**Inventor:** Teruyoshi Tsunashima
**Assignee:** Nippon Kogaku K.K., Tokyo, Japan
**Title:** Wide-Angle Photographic Objective
**Embodiment analyzed:** Embodiment III / Claim 4

US 4,163,603 discloses a large-aperture inverted-telephoto wide-angle objective with ten optical components, eleven glass elements, an 84° angle of view, and a relative aperture of 1:2.0. The numerical examples are normalized to $f = 100$ mm. For the production 24 mm lens rendering, the prescription is scaled by $0.24$, giving a computed design focal length of 24.0305 mm.

Embodiment III is the appropriate transcription for the Nikon AI Nikkor 24mm f/2 family for the following reasons:

1. **Element and group count.** The patent architecture has ten components, with the eighth component formed as a cemented doublet. This gives 11 physical elements in 10 air-spaced groups, matching Nikon's published AI Nikkor 24mm F2S specification.
2. **Focal length and aperture.** The patent is normalized at $f = 100$ mm and relative aperture 1:2.0. A uniform scale of $0.24$ produces a 24 mm f/2 design.
3. **Field angle.** The patent gives $2\omega = 84°$, the same field angle Nikon publishes for the production lens.
4. **Production construction.** Nikon identifies the lens as a retrofocus type using close-range correction, 10 groups / 11 elements, 0 ED elements, and 0 aspherical elements.
5. **Designer and timing.** Nikon's own historical account identifies Teruyoshi Tsunashima as the designer, states that the Ai Nikkor 24mm F2 was released in October 1977, and describes the same 11-element/10-group retrofocus architecture. The patent priority date of August 1976 and filing date of August 1977 fit that development window.
6. **Embodiment preference.** The patent's aberration figures, FIGS. 2A-2D, are explicitly stated to illustrate Embodiment III at $f = 100$ mm.

The data file models the infinity prescription from Embodiment III. It does not attempt to model the production CRC close-focus motion because the patent does not publish variable close-focus spacings.

## Optical Architecture

The design is an all-spherical retrofocus wide-angle objective for a 35 mm SLR mirror-box register. The front portion is predominantly negative and establishes the long back focal distance; the rear portion is predominantly positive and reconverges the beam to the image plane. At patent scale, the computed back focal distance is 156.46 mm, or 1.562 times the computed 100.13 mm effective focal length. At the 24 mm production scale, that corresponds to a 37.55 mm back focal distance.

The patent describes ten components in object-to-image order: L1 positive meniscus, L2 negative meniscus, L3 negative meniscus, L4 positive, L5 negative meniscus, L6 positive, L7 positive, L8 biconcave negative cemented doublet, L9 positive meniscus, and L10 positive. The abstract and claims consistently describe L8 as a biconcave negative doublet. A sentence in the descriptive text calls it a “biconvex negative component,” which is an internal typographical error; the radii and the claim language support biconcave negative.

The aperture stop is not tabulated as a separate surface in the patent. The cross-section places the diaphragm in the air space between L5 and L6, corresponding to $d_{10}$ in the numerical table. In the data file, this air gap is split to insert an explicit `STO` surface near L6 while preserving the patent total $d_{10} = 8.98$ mm at patent scale.

Nikon's later historical description divides the production lens, for explanatory convenience, into a first four-element front group and a seven-element rear group. The patent's own condition set treats L5 as a separate negative meniscus whose air gap to L6 is a sensitive aberration-control lever, so the analytical front/rear boundary is best understood as a gradual retrofocus transition rather than a sharply separated two-group lens.

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens-in-air values at the patent's $f = 100$ scale, except where noted for the cemented L8 doublet. They were recomputed by ABCD matrix trace from the patent radii, thicknesses, and $n_d$ values.

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.65844$, $\nu_d = 50.8$. Glass: N-SSK5 catalog surrogate (Schott; S-BSM25/BACED5 class). $f = +706.8$ mm.

L1 is a weak positive meniscus at the front of the objective. It has only modest converging power, but its bending participates in the distortion and field-flatness balance controlled by condition (11). Its barium-crown index allows the front element to start bending the incident wide-angle bundle without the excessive curvature that would enlarge the front diameter.

### L2 — Negative Meniscus, Convex to Object

$n_d = 1.71300$, $\nu_d = 53.9$. Glass: S-LAL8 class (Ohara). $f = -126.4$ mm.

L2 is the first strong negative meniscus and one of the principal retrofocus-power elements. Its focal-length ratio $f_2/f = -1.263$ falls within condition (2), which the patent links to securing back focal distance while avoiding excessive negative distortion. Its high-index lanthanum crown character permits strong negative power with comparatively moderate surface curvatures.

### L3 — Negative Meniscus, Convex to Object

$n_d = 1.69680$, $\nu_d = 55.6$. Glass: S-LAL14 class (Ohara). $f = -187.7$ mm.

L3 continues the front-group divergence. Condition (3) places it between $-2.1f$ and $-1.7f$; the computed value is $-1.875f$. The patent specifically ties this condition to the balance between back focal distance and spherical aberration. The shape-factor condition (13) also uses L3's two radii, making this element one of the key spherical-aberration and meridional-coma control points.

### L4 — Biconvex Positive

$n_d = 1.65844$, $\nu_d = 50.8$. Glass: N-SSK5 catalog surrogate (Schott; same S-BSM25/BACED5 class as L1). $f = +344.4$ mm.

L4 is a thick biconvex positive element placed among the negative menisci. It counterbalances the front divergence and helps prevent the retrofocus section from becoming a simple high-power negative front attachment. The patent's condition (4) requires this component to remain between $2.9f$ and $4.0f$ to preserve meridional-coma symmetry; the computed value is $3.440f$.

### L5 — Negative Meniscus, Convex to Object

$n_d = 1.69680$, $\nu_d = 55.6$. Glass: S-LAL14 class (Ohara; same class as L3 and L10). $f = -342.9$ mm.

L5 is the last negative meniscus before the diaphragm region. Although its standalone power is weaker than L2 and L3, the patent treats it as a critical spherical-aberration control component. The air gap immediately behind L5, $d_{10}$, is described as a sensitive correction lever: decreasing or increasing it can pull spherical aberration in opposite directions but creates high-order residuals if the fifth component is outside the prescribed power range.

### L6 — Biconvex Positive

$n_d = 1.74950$, $\nu_d = 35.0$. Glass: 750350/750353 lanthanum flint class; S-LAM7 is a close Ohara catalog class. $f = +149.6$ mm.

L6 is the first major positive element after the stop region and the strongest positive component in the system. It begins the rear-group reconvergence after the negative front section. Its relatively low Abbe number makes it a lanthanum flint, not a crown, and it participates in both spherical-aberration and meridional-coma balance under condition (6).

### L7 — Positive Meniscus, Nearly Plano-Convex

$n_d = 1.56384$, $\nu_d = 60.8$. Glass: N-SK11 class (Schott) / BACD11 class (Hoya). $f = +172.4$ mm.

L7 is a positive element with a very weak object-side surface and a much stronger image-side surface. The glass is a medium-index, high-Abbe crown. It does not match a current Ohara catalog entry closely enough for a confident Ohara name, but Schott N-SK11 and Hoya BACD11 match the patent $n_d$ and $\nu_d$ essentially exactly. The component falls within condition (7), which the patent links to simultaneous control of spherical aberration and meridional coma.

### L8 — Biconcave Negative Cemented Doublet

Combined doublet: $n_d = 1.74443/1.80518$, $\nu_d = 49.4/25.5$. Glasses: 743494 lanthanum flint class + S-TIH6/SF6 dense flint class. Combined $f = -92.5$ mm.

L8 is the only cemented component. Its outer surfaces, $r_{15} = -115.510$ mm and $r_{17} = +225.576$ mm at patent scale, form a biconcave negative envelope. The cemented surface is convex toward the image side, as the patent prefers for correction of chromatic difference of magnification.

L8a is a weak positive meniscus with $n_d = 1.74443$, $\nu_d = 49.4$, and standalone $f = +897.0$ mm. Under the project convention that glasses with $\nu_d < 50$ are flint-side materials, it is not described as a true crown. Its role is the higher-Abbe partner in the achromatizing doublet.

L8b is a dense-flint negative element with $n_d = 1.80518$, $\nu_d = 25.5$, and standalone $f = -86.9$ mm. It supplies the doublet's dominant negative power and most of the dispersion contrast. The cemented pair as a whole satisfies condition (8), $f_8/f = -0.924$.

### L9 — Positive Meniscus, Convex to Image

$n_d = 1.74443$, $\nu_d = 49.4$. Glass: 743494 lanthanum flint class; S-LAM60 is a close Ohara catalog class but not an exact identity. $f = +141.6$ mm.

L9 is a positive meniscus with its stronger convex surface facing the image side. It works with L10 to complete the rear convergence and maintain image-plane flatness. Its glass matches L8a's patent index and dispersion, reducing the number of distinct melt classes needed for the design.

### L10 — Biconvex Positive

$n_d = 1.69680$, $\nu_d = 55.6$. Glass: S-LAL14 class (Ohara; same class as L3 and L5). $f = +212.3$ mm.

L10 is the final positive component. It contributes the last stage of convergence and participates in the field-curvature and spherical-aberration balance addressed by condition (10). The reuse of the S-LAL14 class in L3, L5, and L10 is consistent with a production-minded glass palette.

## Glass Identification and Selection

The patent gives refractive index and Abbe number, not vendor glass names. The identifications below are catalog-class matches, checked against current Ohara, Schott, and Hoya published data. Where no exact public catalog identity is available, the table uses the six-digit glass-code class rather than forcing a specific manufacturer name.

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Catalog/class assignment | Confidence | Notes |
|---|---:|---:|---|---|---|
| L1, L4 | 1.65844 | 50.8 | N-SSK5 catalog surrogate; S-BSM25/BACED5 class | High | N-SSK5 is the available coefficient-backed 658509 row and matches the patent $n_d$ exactly; the vendor name is not treated as production proof. |
| L2 | 1.71300 | 53.9 | S-LAL8 class (Ohara) | High | 713539 lanthanum crown class. |
| L3, L5, L10 | 1.69680 | 55.6 | S-LAL14 class (Ohara) | High | 697556 / 697555 lanthanum crown class. |
| L6 | 1.74950 | 35.0 | 750350/750353 lanthanum flint class; S-LAM7 close | Moderate | Current S-LAM7 data has a slightly higher $\nu_d$ than the patent value. |
| L7 | 1.56384 | 60.8 | N-SK11 (Schott) / BACD11 (Hoya) | High | Exact or essentially exact public catalog match. |
| L8a, L9 | 1.74443 | 49.4 | 743494 lanthanum flint class; S-LAM60 close | Moderate | S-LAM60 is close but not exact; treated as a class match. |
| L8b | 1.80518 | 25.5 | S-TIH6 (Ohara), SF6 class | High | Dense flint; main dispersion partner in L8. |

The glass palette is economical for an 11-element fast retrofocus lens. Two barium-crown-class elements are reused at L1 and L4; S-LAL14-class glass appears at L3, L5, and L10; and the L8a/L9 class is reused in the rear group. No ED or aspherical elements are present in the Nikon production specification.

## Focus Mechanism

US 4,163,603 publishes only the infinity-focus prescription. No close-focus, floating-group, or variable-air-space table is included.

The production AI/AI-S lens uses Nikon's close-range correction system. Nikon's product specification gives a minimum focus distance of 0.3 m and maximum reproduction ratio of 1/8.6. Nikon's historical discussion describes the close-range correction behavior as correcting field curvature and astigmatism at close shooting distances in wide-angle retrofocus lenses.

Because no CRC movement table is available in the patent, the `NikonAINikkor24mmf2.data.ts` file leaves all focus spacings fixed. The `closeFocusM` metadata records Nikon's published 0.3 m minimum focus distance, but the rendered prescription is the infinity state only.

The production specification also gives a maximum reproduction ratio of 1/8.6. If the lens were modeled as a simple unit-extension lens, the thin-lens close-focus extension would be approximately $24.0305 / 8.6 = 2.79$ mm at the image side. That is a useful bound for a viewer-only approximation, but it is not applied in the data file because Nikon identifies this lens as using close-range correction rather than pure unit focusing.

## Conditional Expressions

The patent specifies ten component focal-length conditions and four shape-factor conditions. Embodiment III satisfies all fourteen when recomputed from the prescription.

### Focal-Length Conditions

| Condition | Expression | Patent bounds | Computed value | Result |
|---|---|---:|---:|---|
| (1) | $f_1/f$ | $6.1 < \cdot < 8.0$ | 7.059 | Pass |
| (2) | $f_2/f$ | $-1.4 < \cdot < -1.1$ | -1.263 | Pass |
| (3) | $f_3/f$ | $-2.1 < \cdot < -1.7$ | -1.875 | Pass |
| (4) | $f_4/f$ | $2.9 < \cdot < 4.0$ | 3.440 | Pass |
| (5) | $f_5/f$ | $-5.0 < \cdot < -2.4$ | -3.425 | Pass |
| (6) | $f_6/f$ | $1.3 < \cdot < 1.7$ | 1.495 | Pass |
| (7) | $f_7/f$ | $1.6 < \cdot < 1.8$ | 1.722 | Pass |
| (8) | $f_8/f$ | $-1.0 < \cdot < -0.8$ | -0.924 | Pass |
| (9) | $f_9/f$ | $1.3 < \cdot < 1.6$ | 1.414 | Pass |
| (10) | $f_{10}/f$ | $2.0 < \cdot < 2.3$ | 2.120 | Pass |

### Shape-Factor Conditions

| Condition | Expression | Patent bounds | Computed value | Result |
|---|---|---:|---:|---|
| (11) | $(r_2 + r_1)/(r_2 - r_1)$ | $1.3 < \cdot < 1.8$ | 1.462 | Pass |
| (12) | $(r_4 + r_3)/(r_4 - r_3)$ | $-2.2 < \cdot < -1.8$ | -1.840 | Pass |
| (13) | $(r_6 + r_5)/(r_6 - r_5)$ | $-3.2 < \cdot < -2.8$ | -3.050 | Pass |
| (14) | $(r_{11} + r_{10})/(r_{11} - r_{10})$ | $4.5 < \cdot < 9.5$ | 6.916 | Pass |

The component focal lengths are standalone in-air thick-lens values. For L8, the value is the combined ABCD focal length of the cemented doublet, not the focal length of either individual glass member. This distinction matters because L8a is weakly positive by itself while the cemented component is strongly negative.

## Verification Summary

Independent paraxial verification was performed from the re-extracted Embodiment III prescription. Surface refraction used the patent sign convention with positive radius centers to the image side. Results were checked by both direct $y,u$ ray tracing and ABCD matrix multiplication.

| Quantity | Patent / source value | Computed value at patent scale | Computed value at 24 mm scale |
|---|---:|---:|---:|
| Effective focal length | 100 mm | 100.1273 mm | 24.0305 mm |
| Relative aperture | 1:2.0 | 1:2.0 from inferred stop | 1:2.0 nominal |
| Full field angle | 84° | 84° target field | 84° target field |
| Back focal distance | Not tabulated | 156.4647 mm | 37.5515 mm |
| Front vertex to image | Not tabulated | 393.2147 mm | 94.3715 mm |
| BFD / EFL | Retrofocus requirement | 1.5627 | 1.5627 |
| Petzval sum | Not tabulated | 0.001220 mm^-1 | 0.005083 mm^-1 |
| Petzval radius | Not tabulated | -819.65 mm | -196.72 mm |
| Patent conditions | 14 conditions | 14/14 pass | Same ratios after scaling |

The Petzval calculation uses the surface-by-surface sum $\sum \Phi/(n n')$, not a thin-element approximation. This gives a positive Petzval sum under the adopted sign convention and a negative Petzval radius. The sign and magnitude are consistent with a fast retrofocus wide-angle lens retaining residual field curvature.

The data file's semi-diameters are not patent data. They are inferred rendering apertures constrained to avoid spherical-rim slope violations, impossible edge thickness, and cross-gap sag intrusion. The front group is also constrained by Nikon's 52 mm filter thread for the production lens.

## Design Heritage and Context

The Ai Nikkor 24mm F2 was part of Nikon's early fast wide-angle SLR line. Nikon's historical account states that Tsunashima began the design work around 1973, the final design was completed in 1974, a second prototype passed testing in 1975, mass production was ordered in January 1976, and the lens was released in October 1977. The later Ai-S version appeared in 1981, and discontinuation was announced in January 2006.

The design follows the established retrofocus problem for fast wide-angle SLR lenses: the back focal distance must exceed the focal length enough to clear the mirror box, while the negative front group tends to create distortion, spherical aberration, coma, and field curvature. The patent's unusually explicit condition set is essentially a map of those compromises. Nikon's later account also notes the design pressure created by the requirement to keep the front diameter compatible with a 52 mm filter attachment size.

## Sources

- US Patent 4,163,603, Teruyoshi Tsunashima, “Wide-Angle Photographic Objective,” Nippon Kogaku K.K., granted August 7, 1979.
- Nikon Imaging Japan, “AI Nikkor 24mm F2S,” official product specification page, including lens construction, field angle, close-focus distance, aperture blades, and filter size.
- Nikon Consumer, “NIKKOR The Thousand and One Nights No.98 — Ai Nikkor 24mm F2,” by Kouichi Ohshita, Nikon Corporation.
- Ohara optical glass catalog and product data sheets for S-BSM25, S-LAL8, S-LAL14, S-LAM7, S-LAM60, and S-TIH6 classes.
- SCHOTT optical glass data sheet for N-SSK5 as the coefficient-backed 658509 surrogate used for the S-BSM25/BACED5-class rows.
- SCHOTT optical glass data sheet for N-SK11.
- HOYA optical glass catalog / cross-reference data for BACD11 and related six-digit glass-code equivalences.
