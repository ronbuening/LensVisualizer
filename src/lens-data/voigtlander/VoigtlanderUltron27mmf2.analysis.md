# VOIGTLÄNDER ULTRON X 27mm f/2

## Patent Reference and Design Identification

**Patent:** JP 2024-167569 A  
**Application Number:** JP 2023-083739  
**Filed:** 2023-05-22  
**Published:** 2024-12-04  
**Inventor:** Tatsuya Moriyama  
**Applicant:** Cosina Co., Ltd.  
**Title:** Optical Lens System (光学レンズ系)  
**Embodiment analyzed:** Example 1

Example 1 is the fixed prescription correlated here with the production VOIGTLÄNDER ULTRON 27mm F2 X-mount. The patent does not expressly state that Example 1 is the production prescription, so the identification rests on convergent source evidence rather than a manufacturer confirmation:

1. The patent gives a design focal length of 27.8000 mm and an f-number of 2.0441; Cosina markets the lens as 27mm f/2.
2. The patent gives a full field of 53.6546°; Cosina's current product specification gives 53.7°.
3. Both sources specify six elements in four air-spaced groups.
4. Patent Figure 1 and Cosina's optical section share the same sequence: a cemented front doublet, the aperture stop, a cemented rear doublet, a positive singlet, and a rear negative meniscus.
5. The production section marks the rear member of the front cemented doublet as special-dispersion glass. In the patent prescription that position is L1r, HIKARI J-SF14, for which catalog line data give positive anomalous partial dispersion.
6. The published close conjugate evaluates to a 0.24906 m object-plane-to-image-plane distance and a paraxial reproduction ratio of 1:6.7316, corresponding to Cosina's rounded 0.25 m and 1:6.7 specifications.
7. The patent front page identifies a Cosina website disclosure dated 2023-05-15 under the Japanese Patent Act Article 30 exception. Cosina's release notice identifies 2023-05-15 as the product announcement date and 2023-06-14 as the release date.

The production metadata therefore uses Fujifilm X mount and APS-C format. The prescription itself remains governed by the patent rather than by the rounded marketed values.

## Optical Architecture

The design is an asymmetric, stop-centered normal-lens form with six elements in four air-spaced groups. The patent organizes those physical groups into two positive functional groups, G1 and G2, separated by the aperture stop. G1 is a cemented positive-negative doublet. G2 consists of a cemented negative-positive doublet, a high-index positive singlet, and a rear negative meniscus.

The exact modeled system has an independently computed equivalent focal length of 27.7991 mm, an authored wide-open f-number of 2.0441, and a full field of 53.6546° at a published maximum image height of 14.2 mm. These design quantities are distinct from the 27mm f/2 product designation.

The rear concave surface of G1 and the front concave surface of G2 face one another across the stop. The patent attributes this compact stop region to reduced axial spacing and to correction of coma, astigmatism, and axial chromatic aberration (¶¶0020–0022). The final negative meniscus is used to restrain astigmatism and distortion while shortening the back focus (¶0022).

The two functional groups are both positive: G1 has a computed equivalent focal length of +35.9587 mm and G2 has +54.4024 mm. The system is neither telephoto nor retrofocus under the project definitions. Its first-surface-to-image track divided by EFL is 1.38597, not less than one, and its authored back focus divided by EFL is 0.54962, not greater than one.

All refracting surfaces are spherical. There is no aspherical surface, folded path, image-stabilization group, perspective-control movement, or independent aberration-control mechanism in the modeled prescription.

## Element-by-Element Analysis

### D1 — L1f and L1r, Front Cemented Positive Group

**L1f:** nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA). Standalone f = +16.4273 mm.  
**L1r:** nd = 1.76181, νd = 26.58. Glass: J-SF14 (HIKARI). Standalone f = −27.3216 mm.

L1f is the front biconvex positive collector. Its high refractive index supplies substantial positive power within a short axial thickness. L1r is a biconcave negative element cemented directly to it. The patent prose calls L1r a negative meniscus, but the numerical prescription has R2 = −59.566 mm and R3 = +32.202 mm, so the data file follows the radii rather than that terminology. The member powers quoted above are isolated thick-element powers in air; they are not the power of the cemented component.

Together the two members form G1, whose computed cemented equivalent focal length is +35.9587 mm. The negative member therefore moderates, rather than reverses, the front group's positive power. Its lower Abbe number and catalog line data provide the dispersion contrast required for the patent's stated axial-color correction around the stop.

Cosina's production section marks the corresponding rear member of the front doublet as special-dispersion glass. Mapping that colored production element to patent element L1r follows from the section correspondence and is an author inference; the J-SF14 identity and its line indices are catalog-derived facts.

### D2 — L2f and L2r, Rear Cemented Doublet

**L2f:** nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA). Standalone f = −10.1830 mm.  
**L2r:** nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA). Standalone f = +12.0330 mm.

L2f is a strong biconcave negative element immediately behind the stop. L2r is a strong biconvex positive member cemented to it. The patent prose calls L2f a negative meniscus, but Table 1 gives R5 = −10.126 mm and R6 = +61.183 mm. Their isolated powers are large and opposite, but the cemented pair has a computed equivalent focal length of approximately +284.43 mm. It is therefore only weakly positive as a component.

This distinction is important: L2f is not a weak negative lens, and L2r is not the complete source of rear-group power. Their close cancellation creates a low-net-power cemented corrector within the broader positive G2 assembly. The patent places this pair opposite the front doublet across the stop and associates the arrangement with correction of off-axis aberrations and axial color (¶0022).

### L3 — High-Index Positive Singlet

**nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA). Standalone f = +30.8784 mm.**

L3 is the principal positive singlet within the rear functional group. The patent calls it plano-convex, but Table 1 gives a finite front radius of +430.535 mm and a rear radius of −33.211 mm. It is therefore recorded as a weak-front biconvex positive element; the rear surface supplies most of its bending.

The element satisfies the patent condition that the highest-index positive member in G2 have nd greater than 1.9. The patent states that this high-index positive element supports compactness while improving spherical-aberration and coma correction (¶0023). The computed power of the complete G2 assembly remains +54.4024 mm after L3 is combined with the weakly positive D2 component, the air spacings, and the negative L4 meniscus.

### L4 — Rear Negative Meniscus

**nd = 1.65411, νd = 39.68. Glass: S-NBH5 (OHARA). Standalone f = −43.7707 mm.**

L4 is the final negative meniscus and the only element behind the 3.89 mm air space following L3. The patent assigns it three related functions: reduction of back focus, control of astigmatism and distortion, and chromatic correction through a glass with anomalous-dispersion behavior (¶¶0022, 0025).

Its negative standalone power does not make G2 negative. The preceding positive components and their separations leave the complete functional group positive. Surface-by-surface Petzval calculation gives the two L4 surfaces a combined contribution of approximately −0.01429 mm⁻¹, offsetting positive field-curvature contributions elsewhere in the system.

The data file stores OHARA line indices nC = 1.64923, nF = 1.66571, and ng = 1.67517, together with dPgF = −0.0036. These are catalog-derived spectral properties; the prescription's nd and νd remain the patent values.

## Glass Identification and Selection

The prescription uses five distinct named glasses across six elements. Patent nd and νd values govern the optical model. The spectral-line indices and dPgF fields are catalog-derived additions used for chromatic modeling.

| Glass | Elements | nd | νd | dPgF | Provenance and role |
|---|---|---:|---:|---:|---|
| TAFD37A (HOYA) | L1f, L2r | 1.90043 | 37.37 | −0.0043 | High-index positive members in both cemented pairs; line indices evaluated from HOYA catalog dispersion data. |
| J-SF14 (HIKARI) | L1r | 1.76181 | 26.58 | +0.0130 | Negative front-doublet partner; HIKARI line indices support anomalous partial-dispersion behavior. |
| FDS90 (HOYA) | L2f | 1.84666 | 23.78 | +0.0137 | Strong, high-dispersion negative member behind the stop. |
| TAFD55 (HOYA) | L3 | 2.00100 | 29.13 | +0.0036 | Highest-index positive element; satisfies the patent's nd > 1.9 condition. |
| S-NBH5 (OHARA) | L4 | 1.65411 | 39.68 | −0.0036 | Rear negative meniscus; OHARA line indices agree with the stored prescription at source precision. |

No cross-vendor substitute is used in the data file. The named vendor glasses agree with the patent's nd/νd pairs within transcription precision. The available line data justify discussion of anomalous partial dispersion in individual elements, but they do not establish an apochromatic classification for the complete lens.

## Focus Mechanism

The patent publishes unit focusing rather than an internal or floating focus model. All optical elements retain their internal separations while the complete optical assembly translates toward the object. In the fixed-camera LensVisualizer representation, this is expressed by changing only the final image-space gap D11.

| State | D11, last surface to image plane | Internal spacings |
|---|---:|---|
| Infinity | 15.2788 mm | Fixed |
| Published close state | 19.41 mm | Fixed |

The endpoint difference is 4.1312 mm. Solving the close conjugate from the patent's D0 = 206.40 mm gives an image gap of 19.40186 mm, consistent with the published 19.41 mm after source rounding. The calculated paraxial magnification is −0.148553, or 1:6.7316.

The normalized object-plane-to-image-plane distance is 0.24906 m. Cosina markets this as a 0.25 m minimum focus and 1:6.7 maximum reproduction ratio. The production lens is manually focused through a helicoid; that mechanical implementation does not alter the patent's unit-focus optical model.

## Chromatic Correction Strategy

Chromatic correction is distributed across both cemented components and the rear negative meniscus. D1 pairs a high-index positive TAFD37A member with lower-Abbe J-SF14. D2 pairs the very dispersive negative FDS90 member with another TAFD37A positive member. These pairings allow positive and negative refractive powers to be balanced while their wavelength dependence differs.

The stored line data provide more than an Abbe-only approximation. J-SF14 has dPgF = +0.0130, FDS90 has +0.0137, and the two TAFD37A elements have −0.0043. L4 contributes dPgF = −0.0036. The opposing signs give the model a basis for secondary-spectrum behavior that cannot be represented by nd and νd alone.

The patent expressly attributes axial-color correction to the cemented groups around the stop and specifies anomalous-dispersion behavior for the rear meniscus. The analysis does not extend those statements into an APO claim, because neither the patent nor the verified model establishes apochromatic correction of the complete system.

## Conditional Expressions

| Patent condition | Example 1 evaluation | Result |
|---|---:|---|
| Highest-index positive element in G2: nd > 1.9 | L3 nd = 2.00100 | Satisfied |
| L-H / L-BF > 2.5 | 38.5290 / 15.2788 = 2.521716 | Satisfied |
| Rear negative meniscus: 56 > νd > 34 | L4 νd = 39.68 | Satisfied |
| All refracting surfaces spherical | No aspherical coefficient or `A`-surface occurs | Satisfied |
| G1 and G2 movable toward the object for focus | Published D0/D11 unit-focus state | Satisfied |

The printed rear-glass nd–νd inequality contains a source error. As printed with a positive slope, it would require 2.293576 ≤ nd ≤ 2.343576 at νd = 39.68 and would exclude the patent's own L4 glass. Figure 2 instead implies

$$
-0.0082\nu_d + 1.9682 \le n_d \le -0.0082\nu_d + 2.0182.
$$

At νd = 39.68, the corrected bounds are 1.642824 to 1.692824; L4 at nd = 1.65411 satisfies that band. The correction is treated as a documented patent defect, not as an unmarked alteration of the prescription.

## Modeling Boundaries and Source Corrections

No dimensional scaling is applied. The patent radii, thicknesses, refractive indices, and Abbe numbers are retained directly, and no asphere-coefficient transformation is applicable.

The patent does not publish clear semi-diameters. The physical stop semi-diameter of 5.71192 mm is inferred from the modeled entrance pupil and the patent f-number of 2.0441. The remaining surface semi-diameters are modeling values constrained by first-order marginal and chief rays, Cosina's production section, edge thickness, actual rim slope, cross-gap clearance, and off-axis containment. They must not be read as patent-published clear apertures.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical part appears in the sequential model. No omitted plate requires an air-equivalent spacing correction. The manufacturer's 23.5 mm overall length is a mechanical mount-to-front dimension and is not directly comparable with the patent's 38.5290 mm first-optical-surface-to-image-plane track.

The following source defects are kept explicit:

- Paragraph 0024 prints L-H = 58.5290 mm; Table 4 and the prescription give 38.5290 mm.
- Paragraph 0028 prints f = 27.20 mm; Table 1, Table 4, and independent tracing give approximately 27.80 mm.
- Paragraph 0017 describes 38.5–39.0 mm as a focal-length range, although those values correspond to the examples' optical tracks.
- Table 4 repeats the front-group label for its L2 row; the value is the rear functional group's axial length.
- The rear-glass inequality requires the negative slope shown by Figure 2, as detailed above.
- Paragraph 0019 calls L1r a negative meniscus, but Table 1 surfaces 2–3 define a biconcave negative element.
- Paragraph 0021 calls L2f a negative meniscus, but Table 1 surfaces 5–6 define a biconcave negative element.
- Paragraph 0021 calls L3 plano-convex, but Table 1 surfaces 8–9 define a weak-front biconvex positive element.

The infinity image gap uses Table 4's four-decimal 15.2788 mm value rather than the variable-spacing table's rounded 15.28 mm entry.

## Verification Summary

Independent sequential height/reduced-angle tracing and a conventional height/angle ABCD calculation agree to a maximum matrix difference of 2.22 × 10⁻¹⁶. Recalculation from the final TypeScript arrays gives:

| Quantity | Recomputed | Patent or authored reference |
|---|---:|---:|
| Equivalent focal length | 27.799082 mm | 27.8000 mm |
| Paraxial BFD from rounded surfaces | 15.272207 mm | 15.2788 mm |
| First-surface-to-image track | 38.528800 mm | 38.5290 mm |
| Stop-derived f-number | 2.0440999 | 2.0441 |
| G1 equivalent focal length | +35.958666 mm | +35.9552 mm |
| G2 equivalent focal length | +54.402400 mm | +54.3874 mm |
| Close-state solved image gap | 19.401857 mm | 19.41 mm |
| Close-state reproduction ratio | 1:6.7316 | Marketed 1:6.7 |
| Petzval sum | +0.005958246 mm⁻¹ | Image-space radius −167.8346 mm |

The modeled geometry retains positive edge thickness at every element; the minimum is 0.139644 mm at L2r. The maximum actual spherical rim angle is 53.0034° at surface 10. The tightest shared-band cross-gap policy margin is 0.037988 mm in the gap between surfaces 9 and 10. Representative configured off-axis bundles remain contained at infinity and at the published close state.

## Sources

1. JP 2024-167569 A, Example 1: Table 1 (p. 7), Table 4 (p. 12), Figures 1–3 (p. 13), and cited paragraphs.
2. Cosina, [ULTRON 27mm F2 product page](https://www.cosina.co.jp/voigtlander/en/x-mount/ultron-27mm-f2/).
3. Cosina, [ULTRON 27mm F2 X-mount release-date notice](https://www.cosina.co.jp/news/%E3%83%95%E3%82%A9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BCultron-27mm-f2-x-mount-%E7%99%BA%E5%A3%B2%E6%97%A5%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/).
4. Cosina, official ULTRON 27mm F2 optical-section SVG, preserved with the audit package.
5. HOYA Optics Europe, [optical-glass data and product catalog](https://www.hoyaoptics.eu/download/optical-glass-data).
6. HIKARI, [J-SF14 optical-glass data sheet](https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/SF/J_SF14.pdf).
7. OHARA, [S-NBH5 catalog page and data sheet](https://oharacorp.com/glass/s-nbh5/).
