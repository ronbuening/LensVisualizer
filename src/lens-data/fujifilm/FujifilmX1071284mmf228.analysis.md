## Patent Reference and Design Identification

**Patent:** US 2014/0133036 A1\
**Application number:** US 14/160,716\
**Filed:** January 22, 2014\
**Published:** May 15, 2014\
**Priority:** August 11, 2011\
**Inventors:** Taiga Noda; Michio Cho\
**Assignee:** Fujifilm Corporation\
**Title:** *Zoom Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The prescription is Example 1 of US 2014/0133036 A1, modeled as the fixed production correlation selected for the Fujifilm X10’s SUPER EBC FUJINON 7.1–28.4 mm F2.0–2.8 zoom. The patent itself publishes design focal lengths of 7.34, 14.25, and 27.68 mm and f-numbers of 2.05, 2.36, and 2.89 at its three infinity-focus states. The marketed lens is separately identified as a 7.1–28.4 mm F2.0–2.8 four-times zoom. Marketing and design values are therefore retained as distinct quantities rather than reconciled by scaling.

The correlation rests on several convergent features:

1. Fujifilm specifies a 7.1–28.4 mm F2.0–2.8 lens with 11 elements in 9 groups; Example 1 contains 11 elements in 9 air-separated groups and calculates to 7.342–27.682 mm.
2. Fujifilm identifies three aspherical elements and two ED elements. Example 1 places five aspherical surfaces on three elements and contains two catalog-supported ED-class positions, L32 and L35.
3. Fujifilm describes optical stabilization by shifting a five-element lens group. Example 1’s five-element G3 is expressly identified as the group displaced perpendicular to the optical axis for image stabilization (¶0066).
4. The patent’s August 2011 priority date falls within the X10’s development and release period.

The correspondence is strong, but it is not manufacturer confirmation that Example 1 is the exact production prescription. Fujifilm’s public materials do not publish the production radii, spacings, or asphere coefficients, and the modeled file therefore preserves the correlation qualification stated in its metadata.

No uniform scale factor was applied. The marketed endpoints, 7.1 and 28.4 mm, do not bear a common ratio to the calculated 7.342 and 27.682 mm endpoints. All radii, thicknesses, semi-diameters, and asphere coefficients remain in the patent example’s native scale.

## Optical Architecture

Example 1 is a four-group positive–negative–positive–positive zoom. The patent places the aperture stop between G2 and G3 and moves it with G3 during zooming (¶¶0054–0055). The active model contains 11 elements, 9 air-separated groups, and one stop plane:

| Group | Contents | Calculated isolated group focal length | Function in the modeled system |
|---|---|---:|---|
| G1 (+) | Cemented L11–L12 | +54.589 mm | Positive front collector and first zoom group |
| G2 (−) | L21, L22, L23 | −11.224 mm | Principal negative variator |
| G3 (+) | L31, cemented L32–L33, L34, L35 | +16.550 mm | Fast positive relay, stop-associated moving group, and stabilization group |
| G4 (+) | L41 | +48.633 mm | Positive rear group and patent-identified possible quick-focus group |

These group focal lengths are isolated paraxial results. They do not imply that each group acts independently once separated by the state-dependent air spaces. In particular, the L32–L33 cemented pair is net negative at −39.240 mm when isolated, while the complete five-element G3 remains strongly positive because L31, L34, L35, the pair, and their internal spacings operate together.

The three published infinity states are retained because two group trajectories reverse near the middle position. Relative to the fixed image plane, G2 moves imageward from wide to middle and then slightly objectward toward tele; G4 moves objectward and then reverses imageward. Endpoint-only interpolation would therefore misrepresent the patent kinematics.

| Moving item | Wide z from image (mm) | Middle z from image (mm) | Tele z from image (mm) |
|---|---:|---:|---:|
| G1 front | −65.34 | −67.37 | −75.09 |
| G2 front | −59.53 | −52.93 | −53.38 |
| STO | −29.98 | −34.66 | −41.98 |
| G3 front | −29.13 | −33.81 | −41.13 |
| G4 front | −9.65 | −11.10 | −10.22 |

The stop remains 0.85 mm ahead of surface 11A at all three states. This fixed stop-to-G3 spacing implements the patent’s statement that the stop moves integrally with G3.

Under the project’s strict terminology, the design is neither telephoto nor retrofocus at any defined state. The air-equivalent total-track-to-EFL ratios are 8.800, 4.674, and 2.686, all greater than unity, while the rear-air-space-to-EFL ratios are 0.834, 0.531, and 0.242, all less than unity.

The patent includes a plane-parallel optical member PP after G4 (¶0057 and Table 1). The data model omits this cover/filter surrogate and preserves its paraxial effect by replacing the rear region with the air-equivalent spacing

$$
D_{21,\mathrm{model}} = DD21 + \frac{2.14}{1.516798} + DD23.
$$

The resulting authored rear spaces are 6.12087, 7.57087, and 6.69087 mm. No sensor cover, filter, dummy surface, or mechanical component remains in the ordinary sequential model.

## Element-by-Element Analysis

### G1 cemented doublet: L11 and L12

**L11:** nd = 1.945945, νd = 17.98. Glass: FDS18 (HOYA; exact 946180 coordinate match). f = −99.116 mm.\
**L12:** nd = 1.834807, νd = 42.72. Glass: S-LAH55 (OHARA; exact 835427 coordinate match). f = +34.645 mm.

The patent specifies G1 as a cemented negative–positive pair (¶0060). L11 is a weak negative meniscus in very high-index, low-Abbe material. L12 is the substantially stronger positive member. Their cemented net is positive, with an isolated focal length of +54.589 mm, so the front group collects the broad wide-angle bundle without requiring an air-spaced pair.

The glass labels identify exact catalog-coordinate matches rather than proven production compositions. They provide usable Sellmeier models, but the patent does not name a melt supplier.

### L21 — negative meniscus

nd = 1.882997, νd = 40.76. Glass: S-LAH58 (OHARA; exact 883408 coordinate match). f = −10.991 mm.

L21 is the strongest standalone negative element in G2. It establishes most of the variator group’s negative power before the double-aspherical biconcave L22. Its comparatively high index allows substantial negative power with limited surface curvature and compact axial thickness.

### L22 — double-aspherical biconcave negative

nd = 1.583129, νd = 59.37. Glass: S-BAL42 (OHARA; exact 583594 coordinate match). f = −24.231 mm.

L22 is the central biconcave member of G2, with aspherical surfaces 6A and 7A. The patent makes the biconcave element and its curvature relation central to the claimed aberration and compactness conditions (¶¶0061, 0068–0071, 0094–0096). Its isolated negative power supplements L21 while its two aspheres provide radial degrees of freedom that would not be available from the group powers alone.

The coordinate resolves exactly to OHARA S-BAL42. This is a defensible catalog assignment for spectral tracing, but not proof that Fujifilm used that supplier in production.

### L23 — biconvex positive

nd = 1.922860, νd = 20.88. Glass: N-SF66 (SCHOTT; exact 923209 coordinate match). f = +25.767 mm.

L23 closes G2 with positive power. Its role is not to reverse the group sign: G2 remains strongly negative at −11.224 mm. Instead, the positive rear element moderates the negative group, adds another air/glass boundary for aberration balancing, and helps control the way G2 exchanges power with the stop-associated G3 over the zoom range.

The stored optical position resolves to SCHOTT N-SF66 under the catalog's duplicate-code precedence. Equivalent cross-vendor positions may exist, so supplier identity remains unproven.

### L31 — front positive asphere of G3

nd = 1.803603, νd = 40.28. Glass: Unmatched (nd=1.803603, νd=40.28). f = +16.812 mm.

L31 is a biconvex positive element immediately behind the stop. Surface 11A is its aspherical entrance surface. The placement of a strong positive asphere next to the stop gives the design direct control over the fast axial bundle while limiting the asphere’s required clear diameter.

No public catalog position was close enough to support a vendor or six-digit code assignment within the adopted matching tolerance. The same unmatched nd/νd pair is used for L34.

### Cemented L32–L33 pair

**L32:** nd = 1.592824, νd = 68.62. Glass: FCD515 (HOYA) / 593686 ED phosphate-crown class. f = +11.902 mm.\
**L33:** nd = 1.698947, νd = 30.13. Glass: S-TIM35 (OHARA; exact 699301 coordinate match). f = −7.743 mm.

The patent specifies this positive–negative cemented pair inside G3 (¶0062). L32 is a strong positive ED-class crown and L33 is an even stronger negative dense flint. Their isolated cemented net is negative at −39.240 mm; this is distinct from the positive power of G3 as a whole.

For L32, the data file stores the catalog-derived HOYA FCD515 line data directly: nC = 1.59021, nF = 1.59884, ng = 1.60355, and dPgF = +0.0192. These values support a specific partial-dispersion model for this element. They are catalog matches, not glass names published by the patent.

### L34 — double-aspherical negative meniscus

nd = 1.803603, νd = 40.28. Glass: Unmatched (nd=1.803603, νd=40.28). f = −25.310 mm.

L34 is a negative meniscus with its concave surface facing the object, matching the patent’s description of the fourth lens in G3 (¶0062). Both surfaces 16A and 17A are aspherical. The patent specifically identifies the image-side surface of L34 as a surface whose positive refractive contribution weakens toward the periphery, using that profile to address spherical aberration at the small f-number (¶¶0064, 0090).

L34’s negative standalone power does not make G3 negative. It works between the negative cemented pair and the strongly positive L35, contributing a controlled negative interval within the complete positive relay.

### L35 — rear ED biconvex positive

nd = 1.496999, νd = 81.54. Glass: S-FPL51 (OHARA). f = +15.210 mm.

L35 is the rear positive member of G3. Its very high Abbe number and verified S-FPL51 catalog position make it the clearest low-dispersion assignment in the prescription. The data file stores nC = 1.495136, nF = 1.501231, ng = 1.504507, and dPgF = +0.0280.

Placed after the negative L34, L35 restores strong positive power while supplying a second low-dispersion positive element in G3. The chromatic strategy is therefore distributed within the same moving group rather than confined to a single cemented interface.

### L41 — positive rear meniscus

nd = 1.487490, νd = 70.24. Glass: S-FSL5 (OHARA; exact 487702 coordinate match). f = +48.633 mm.

L41 is the sole element of G4 and is a weak positive meniscus. The patent notes that a lightweight one-element fourth group can facilitate quick focusing when G4 is selected as the focusing group (¶0093). That statement describes a permitted mechanism; Example 1 does not publish the required close-focus spacings, so the data model does not convert it into a reconstructed focus trajectory.

## Glass Identification and Selection

The glass palette combines several high-index positive and negative members with two low-dispersion positions in G3. Exact catalog-coordinate matches provide Sellmeier models for nine elements, while the patent's lack of vendor names means those assignments are not supplier proof.

| Element(s) | nd | νd | Data-file identification | Status and optical role |
|---|---:|---:|---|---|
| L11 | 1.945945 | 17.98 | FDS18 (HOYA; 946180) | Very high-index negative member of G1; exact catalog-coordinate match |
| L12 | 1.834807 | 42.72 | S-LAH55 (OHARA; 835427) | Strong positive member of G1; exact catalog-coordinate match |
| L21 | 1.882997 | 40.76 | S-LAH58 (OHARA; 883408) | Strong negative variator; exact catalog-coordinate match |
| L22 | 1.583129 | 59.37 | S-BAL42 (OHARA; 583594) | Double-aspherical negative element; exact catalog-coordinate match |
| L23 | 1.922860 | 20.88 | N-SF66 (SCHOTT; 923209) | Positive rear member of G2; exact catalog-coordinate match |
| L31, L34 | 1.803603 | 40.28 | Unmatched | No defensible public-catalog match |
| L32 | 1.592824 | 68.62 | FCD515 (HOYA) / 593686 ED phosphate-crown class | Catalog-derived line indices and dPgF stored in data |
| L33 | 1.698947 | 30.13 | S-TIM35 (OHARA; 699301) | Negative partner to L32; exact catalog-coordinate match |
| L35 | 1.496999 | 81.54 | S-FPL51 (OHARA) | Exact nd match and catalog-supported low-dispersion position |
| L41 | 1.487490 | 70.24 | S-FSL5 (OHARA; 487702) | Weak positive rear group; exact catalog-coordinate match |

L32 and L35 provide two low-dispersion positive powers within G3. L32 is cemented directly to the low-Abbe negative L33, while L35 follows the negative meniscus L34. This arrangement gives the designer two separate chromatic balancing locations inside the same moving and stabilizing group.

The explicit nC, nF, ng, and dPgF values justify discussion of anomalous partial dispersion for L32 and L35. They do not, by themselves, justify calling the complete zoom apochromatic. No APO designation is assigned.

## Focus Mechanism

The modeled focus status is **NO_INTERNAL_RECONSTRUCTION**. The patent illustrates only infinity-focused wide, middle, and tele states (¶0053). It states that G4 may be used for quick focusing (¶0093), but it does not publish a close-focus spacing table, group travel, object-distance calibration, or magnification data for Example 1.

All authored focus pairs are therefore identical at each zoom state. The data file’s `closeFocusM` value of 0.50 m records the X10’s ordinary wide-angle focusing limit as catalog metadata; it is not a traced optical state. Fujifilm separately specifies ordinary tele focus from approximately 0.80 m, macro modes down to approximately 0.10 m at wide and 0.50 m at tele, and a wide-only Super Macro mode to approximately 0.01 m. None of those internal mechanisms is reconstructed.

The absence of a close-focus state also means that no close-focus magnification, floating-group behavior, or focus-induced aberration change is claimed from this prescription.

## Aspherical Surfaces

Example 1 has five aspherical surfaces on three elements: 6A and 7A on L22, 11A on L31, and 16A and 17A on L34. The patent writes the sag as

$$
Z(h)=\frac{C h^2}{1+\sqrt{1-K_A C^2 h^2}}+\sum_{m=3}^{20}A_m h^m,
$$

where $C=1/R$. LensVisualizer uses the denominator $\sqrt{1-(1+K)(h/R)^2}$, so every conic was converted by

$$
K=K_A-1.
$$

The odd powers are not decenter or freeform terms. Because $h$ is non-negative radial height, A3, A5, A7, A9, and A11 remain rotationally symmetric contributions to the meridional sag.

### Surface 6A — object-side surface of L22

```text
K   = -5.148111
A3  = +1.150223e-3
A4  = -6.585878e-4
A5  = +1.685927e-4
A6  = -1.904884e-6
A7  = -5.155217e-6
A8  = +4.256246e-8
A9  = +1.426374e-7
A10 = -1.188533e-8
```

The mixed odd and even terms produce a profile that cannot be characterized reliably from the sign of A4 alone. Its design role is read from its position on the high-ray-height biconcave variator element and from the patent’s emphasis on L22’s curvature and aberration balance.

### Surface 7A — image-side surface of L22

```text
K   = -10.950295
A3  = +9.646437e-4
A4  = -4.885791e-4
A5  = +1.432608e-4
A6  = -3.875323e-6
A7  = -4.241185e-6
A8  = +9.597971e-8
A9  = +1.081173e-7
A10 = -9.188089e-9
```

Together, 6A and 7A give L22 two independent aspherical boundaries. This is the principal aspherical correction site in the negative variator group.

### Surface 11A — object-side surface of L31

```text
K   = +2.660046
A3  = -4.036084e-5
A4  = -5.899152e-5
A5  = -3.723504e-5
A6  = +1.055957e-5
A7  = -9.760767e-7
A8  = -4.976513e-7
A9  = +1.682713e-7
A10 = -2.503631e-8
A11 = +2.157418e-9
A12 = -1.060850e-10
```

Surface 11A is the only positive-K conic in the prescription and therefore the only asphere with a finite real conic-domain limit. Its authored semi-diameter is 5.50 mm, below the validator’s 0.98-domain limit of 7.28303 mm. Its stop-adjacent location concentrates correction on the fast axial bundle entering G3.

### Surface 16A — object-side surface of L34

```text
K   = -9.971192
A3  = -7.781902e-4
A4  = -8.305061e-4
A5  = -2.230827e-5
A6  = -1.358257e-5
A7  = +1.334413e-5
A8  = +2.007369e-6
A9  = -1.003647e-6
A10 = -1.949607e-7
A11 = +8.686077e-8
A12 = -7.236734e-9
```

### Surface 17A — image-side surface of L34

```text
K   = -6.658450
A3  = -8.424122e-4
A4  = +7.988741e-4
A5  = -2.765325e-4
A6  = +4.453843e-5
A7  = +2.895206e-6
A8  = +3.897227e-7
A9  = -7.739047e-7
A10 = +1.551732e-7
A11 = -1.172742e-8
A12 = +3.933323e-10
```

The L34 pair acts late in G3, between the negative cemented pair and the positive ED rear element. The patent expressly attributes peripheral weakening of positive power on the image-side surface to spherical-aberration control at small f-number (¶¶0064, 0090). The full 16A/17A polynomial combination, rather than any one coefficient, defines that behavior.

The patent publishes no clear-aperture heights. Every surface semi-diameter in the data file is therefore a modeling inference derived from exact rotationally symmetric ray intersections at all three zoom states. The values were checked against edge thickness, actual rim slope, conic limits, shared-gap intrusion, off-axis containment, and render trim. No asphere coefficient was scaled or refitted.

The Table 2 continuation contains a source row-label error in the all-zero A17–A20 block: the fourth row is printed as surface 18, but sequence and the preceding coefficient blocks identify it as surface 16. Because all four entries are zero, the correction changes no numerical surface profile.

## Chromatic Correction Strategy

The design’s chromatic correction is concentrated in G3 but distributed across more than one interface. L32 combines positive power, νd = 68.62, and catalog-derived anomalous partial dispersion with the negative, low-Abbe L33 in a cemented pair. L35 supplies a second positive low-dispersion element at νd = 81.54 after the negative L34.

This is not a simple positive-crown/negative-flint doublet strategy. The L32–L33 pair is net negative in isolation, while L35 and L31 restore the positive power required of G3. The design can therefore allocate axial color, lateral color, and monochromatic power among the cemented pair, the aspherical negative meniscus, and the rear ED positive member without forcing any single component to carry the complete correction burden.

The catalog matches permit higher-fidelity dispersion modeling for nine elements. Only L31 and L34 remain unresolved and use stored nd/νd; they should not be assigned vendor Sellmeier curves without a defensible match.

## Conditional Expressions

The patent defines six principal conditions and three tighter preferred ranges. All are satisfied by the independently computed Example 1 values.

| Condition | Required range | Computed value |
|---|---:|---:|
| $(R_6+R_7)/(R_6-R_7)$ | $-0.75 < x < 0.50$ | −0.489933 |
| Preferred form of condition 1 | $-0.60 < x < 0.30$ | −0.489933 |
| $D_7/f_w$ | $0.005 < x < 0.150$ | 0.054480 |
| Preferred form of condition 2 | $0.04 < x < 0.09$ | 0.054480 |
| $f_3/f_w$ | $1.9 < x < 2.6$ | 2.254181 |
| Preferred form of condition 3 | $2.1 < x < 2.3$ | 2.254181 |
| $f_1/f_w$ | $6.6 < x < 8.5$ | 7.435081 |
| Preferred form of condition 4 | $7.3 < x < 7.8$ | 7.435081 |
| $f_w\tan\omega$ | $5.5 < x < 7.0$ | 6.122646 mm |
| Half field $\omega$ | $36^\circ < \omega < 44^\circ$ | 39.825° |

The first two conditions constrain the shape and spacing around the double-aspherical biconcave L22. Conditions 3 and 4 regulate the relative powers of G3 and G1. Conditions 5 and 6 tie the wide-angle focal length to image height and angular coverage. The calculated values reproduce Table 19 within its printed precision.

## Image Stabilization

The patent states that image displacement may be corrected by moving G3 perpendicular to the optical axis (¶0066) and argues that shifting the complete group preserves correction better than shifting only one member in a fast design (¶0092). Fujifilm’s X10 brochure independently describes OIS as shifting a group of five lens elements. Example 1’s G3 contains exactly five elements, L31 through L35, which is one of the strongest production-correlation features.

The data file remains a centered rotationally symmetric prescription. It contains no decentered stabilization state, shift magnitude, actuator travel, or aberration calculation under lateral displacement because none is published for Example 1.

## Verification Summary

All quantitative values below were recomputed from the final TypeScript surface and spacing arrays, not copied from the Stage 1 notes.

| State | Calculated EFL | Patent f | Modeled f-number | Air-equivalent rear spacing | Patent Bf |
|---|---:|---:|---:|---:|---:|
| Wide | 7.342112 mm | 7.34 mm | 2.063598 | 6.120867 mm | 6.12 mm |
| Middle | 14.258609 mm | 14.25 mm | 2.356517 | 7.570867 mm | 7.57 mm |
| Tele | 27.682243 mm | 27.68 mm | 2.875095 | 6.690867 mm | 6.69 mm |

The modeled f-numbers use the common inferred stop radius of 4.804766 mm. This stop is a geometry model derived from the three patent f-numbers and entrance-pupil magnification; it is not a published mechanical iris diameter.

Sequential height/reduced-angle tracing and independent ABCD multiplication agree to at most $1.42\times10^{-14}$, and every system matrix has unit determinant within numerical precision. The surface-by-surface Petzval sum, computed as $\phi/(n n')$, is +0.0041797943 mm⁻¹, corresponding to a conventional signed image-surface radius of −239.246 mm.

The geometry validation covers every defined zoom state. The limiting shared gap is surface 15 to 16A, where the 2.10 mm vertex gap retains 0.03469 mm of margin under the current shared-sag criterion. The smallest non-stop exact-ray aperture margin is 0.11254 mm at tele on surface 15. The independent render-trim proxy requires no hidden material trim.

The source correction with numerical significance is the middle focal length in Table 3: rendered-page inspection gives 14.25 mm, not the 13.75 mm produced by one parsed-text reading. The calculated middle EFL of 14.258609 mm confirms the rendered value. The patent’s parsed wavelength unit of 587.6 mm is likewise normalized to the d-line value 587.6 nm.

## Sources and References

1. Taiga Noda and Michio Cho, *Zoom Lens and Imaging Apparatus*, US 2014/0133036 A1, Fujifilm Corporation, Example 1, especially ¶¶0053–0067, ¶¶0090–0093, ¶¶0103–0117, Tables 1–3, and Table 19.
2. Fujifilm, *X10* product catalogue, official lens specifications and descriptions of the 11-element/9-group lens, three aspherical elements, two ED elements, five-element-group OIS, marketed focal length and aperture, and focus ranges: <https://www.fujifilm.com.hk/products/digital_cameras/x/fujifilm_x10/pdf/index/x10_catalogue_01.pdf>.
3. Fujifilm, *X10 Owner’s Manual*, normal, macro, and Super Macro focus ranges: <https://dl.fujifilm-x.com/support/manual/x/fujifilm_x10_manual_en.pdf>.
4. Current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA optical-glass catalog data used for the nd/νd audit and the L32/L35 spectral annotations.
