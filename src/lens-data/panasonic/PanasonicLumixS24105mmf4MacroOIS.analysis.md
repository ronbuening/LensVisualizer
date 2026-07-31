# PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S.

## Patent Reference and Design Identification

- **Patent:** JP 2020-118738 A
- **Application:** 特願2019-7447
- **Filed:** 2019-01-21
- **Published:** 2020-08-06
- **Inventors:** Hiroaki Suzuki; Yuka Kudo; Yoshiaki Kurioka
- **Applicant:** Panasonic Intellectual Property Management Co., Ltd.
- **Title:** Zoom lens system, imaging apparatus, and camera system
- **Embodiment analyzed:** Embodiment 1 / Numerical Example 1

The prescription models the patent's first numerical example as the optical design associated with the PANASONIC LUMIX S 24-105mm f/4 MACRO O.I.S. (S-R24105). The correlation is strong but inferential: neither the patent nor Panasonic's product literature states that Numerical Example 1 is the production prescription.

The identification rests on several convergent features:

1. Both designs use 16 elements in 13 air-spaced groups arranged as five functional zoom groups with positive, negative, positive, negative, and positive power.
2. Both place a single aspherical, low-dispersion negative focus element in the fourth functional group and a negative low-dispersion element immediately behind it in the fifth group.
3. Both use a single laterally shifted stabilization element in the third functional group.
4. Both specify a 0.30 m minimum focusing distance and approximately 0.5× magnification at the telephoto end.
5. The patent application was filed in January 2019, immediately before Panasonic announced the S-R24105 as one of the first three L-Mount lenses for the Lumix S system on 2019-02-01.

The production lens is marketed as 24–105 mm at f/4. The selected patent state is not an exact endpoint match: the published source focal lengths are 25.0078, 50.1541, and 100.5897 mm. After the model's disclosed adhesive and rear-plate normalization, the computed Gaussian focal lengths are 25.002987, 50.142962, and 100.568809 mm. No uniform scaling has been applied, and the marketing range remains separate from the modeled design range.

The patent table's angular values, 40.9808°, 23.2685°, and 12.0606°, are interpreted as half-field angles $\omega$. Their doubled fields, 81.9616°, 46.5370°, and 24.1212°, are consistent with the production lens's published 84°–23° diagonal angle of view. This is a source interpretation rather than an alteration of the prescription.

The PDF text layer splits several telephoto variable-gap values across lines. Inspection of the rendered table establishes `d6 = 32.9890`, `d14 = 0.9570`, `d27 = 1.8000`, `d29 = 29.6400`, and `d33 = 45.6290` mm. These are transcription repairs to the extracted text, not corrections to the patent itself.

Three 0.005 mm UV-curing adhesive layers published at the cemented pairs are not modeled as separate generic elements. Their thicknesses are absorbed into L1, L9, and L11 while preserving the downstream axial stations. The rear parallel plate P is omitted as sensor/filter glass, and its first-order optical effect is retained through the air-equivalent rear spacing

$$
d_{33,\mathrm{model}} = d_{33,\mathrm{patent}} + \frac{2.1}{1.5168} + 2.7\ \mathrm{mm}.
$$

The patent does not publish lens semi-diameters. Every authored semi-diameter is therefore a modeling inference derived from traced axial and off-axis bundles, the patent's Figure 1 layout, and geometry constraints. The stop position itself is source-published between G2 and G3; only the lens clear apertures are inferred.

## Optical Architecture

Numerical Example 1 is a five-functional-group zoom with the power sequence

$$
G1^{+}\;G2^{-}\;G3^{+}\;G4^{-}\;G5^{+}.
$$

The 16 elements form 13 air-spaced groups because L1–L2, L9–L10, and L11–L12 are cemented pairs. The stop lies between G2 and G3 and moves with G3 during zooming. The group-power values below are computed from the final normalized prescription; they describe each complete functional group, not the isolated elements within it.

| Functional group | Elements | Normalized focal length | Principal function |
|---|---|---:|---|
| G1 | L1–L3 | +94.000297 mm | Moving positive front group |
| G2 | L4–L7 | −20.436497 mm | Negative variator |
| G3 | L8–L13 | +27.102207 mm | Main positive group; contains the stop-coupled optics and O.I.S. element |
| G4 | L14 | −47.661981 mm | Single-element internal focus group |
| G5 | L15–L16 | +132.201235 mm | Rear positive group |

From wide to telephoto, G1 moves toward the object; G2 follows a sampled trajectory that is convex toward the image side; the stop and G3 move together toward the object; and G4 and G5 also move toward the object. The G3–G4 separation first increases and then decreases, while the G4–G5 separation first decreases and then increases. The three tabulated positions define piecewise-linear interpolation control points in the visualization; the patent explicitly warns that the lines joining them do not specify the true continuous cam curves (¶0013–0015, ¶0040–0043).

The normalized infinity states are:

| State | Computed EFL | Modeled open f-number | Half-field $\omega$ | Surface 1 to image plane |
|---|---:|---:|---:|---:|
| Wide | 25.002987 mm | 4.119433 | 40.9808° | 135.785494 mm |
| Middle | 50.142962 mm | 4.119209 | 23.2685° | 147.814494 mm |
| Telephoto | 100.568809 mm | 4.119415 | 12.0606° | 180.074494 mm |

The stop's physical open radius changes with zoom in the source prescription: 7.270, 9.125, and 10.893 mm. Because the marketed and modeled lens is constant-aperture, the data file uses the scalar modeled value `nominalFno: 4.1194`; the 10.893 mm stored stop semi-diameter is the telephoto maximum, and the runtime aperture model scales the opening with zoom.

The system is not a telephoto-form design under the strict $TL/EFL < 1$ definition at any of the three states. The wide state alone marginally satisfies the strict retrofocus test $BFD > EFL$ in the normalized model; the middle and telephoto states do not. These classifications are computed descriptors, not patent terminology.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element focal lengths in air, recomputed from the final radii, normalized center thicknesses, and stored d-line indices. They do not equal an element's in-situ contribution after interaction with neighboring optics. Cemented-pair and complete-group powers are stated separately.

### L1 — Negative Meniscus, Convex to Object

**$n_d = 1.92286$, $\nu_d = 20.9$. Glass: 923209 high-index flint class. Standalone $f = -248.897072$ mm.**

L1 is the negative front member of the first cemented pair in G1. Its weak standalone negative power is combined with the stronger positive L2 so that the pair is net positive while retaining a high-index, low-Abbe component at the front of the system. The patent identifies L1 as an object-side-convex meniscus (¶0022, ¶0030).

### L2 — Biconvex Positive

**$n_d = 1.72916$, $\nu_d = 54.7$. Glass: 729547 lanthanum crown class. Standalone $f = +162.492940$ mm.**

L2 is the positive cemented partner of L1. In the normalized model, the L1–L2 assembly has a standalone net focal length of +471.130559 mm. That value is much weaker than either member's isolated power because the cemented interface redistributes the refraction; it is also distinct from the +94.000297 mm power of the complete G1 group.

### L3 — Positive Meniscus, Convex to Object

**$n_d = 1.72916$, $\nu_d = 54.7$. Glass: 729547 lanthanum crown class. Standalone $f = +116.753242$ mm.**

L3 is the air-spaced rear positive member of G1. It supplies the stronger positive component that brings the full front group to its computed +94.000297 mm focal length. Its shared glass class with L2 gives the front group two positive members with identical d-line constants.

### L4 — Negative Meniscus, Convex to Object

**$n_d = 1.77250$, $\nu_d = 49.6$. Glass: 773496 lanthanum crown class. Standalone $f = -24.248169$ mm.**

L4 is the strongest isolated negative element in G2 and establishes the variator's negative character near its object-side entrance. Its inferred clear aperture is one of the first limits reached by some full-field wide-angle diagnostics. Because the patent publishes no lens semi-diameters, this is a consequence of the authored aperture model rather than proof of intentional mechanical vignetting.

### L5 — Negative Meniscus, Convex to Image, Two Aspherical Surfaces

**$n_d = 1.80755$, $\nu_d = 40.9$. Glass: 808409 molded high-index glass class. Standalone $f = -50.273604$ mm.**

L5 is a doubly aspherical negative meniscus within G2. The paired aspheres at surfaces 9A and 10A allow the variator's surface shape to depart substantially from same-radius spheres without introducing another physical element. Its position in the negative group makes it a principal wide-angle correction surface pair, although the exact aberration allocation is an optical interpretation rather than an explicit patent statement.

### L6 — Biconvex Positive

**$n_d = 1.92119$, $\nu_d = 24.0$. Glass: 921240 dense flint class. Standalone $f = +36.056399$ mm.**

L6 is a strong positive, high-index, low-Abbe member embedded in the otherwise negative G2 group. It opposes the negative powers of L4, L5, and L7 while the complete variator remains strongly negative at −20.436497 mm.

### L7 — Negative Meniscus, Convex to Image

**$n_d = 1.77250$, $\nu_d = 49.6$. Glass: 773496 lanthanum crown class. Standalone $f = -66.914547$ mm.**

L7 is the rear negative meniscus of G2 and lies immediately before the aperture stop. It completes the net-negative variator and helps define the ray heights delivered to the moving stop/G3 assembly (¶0023, ¶0027, ¶0032).

### L8 — Positive Meniscus, Convex to Object, Two Aspherical Surfaces

**$n_d = 1.68820$, $\nu_d = 31.1$. Glass: Unmatched (688311; M-FD80 / S-TIM28 / J-SF8 class). Standalone $f = +40.101124$ mm.**

L8 is the first powered element after the stop and the positive entrance member of G3. Both surfaces are aspherical. No reviewed public catalog pair reproduces the stored $n_d$ and $\nu_d$ closely enough to justify a unique vendor glass, so the annotation remains explicitly unmatched.

### L9 — Negative Meniscus, Convex to Object

**$n_d = 1.87070$, $\nu_d = 40.7$. Glass: 871407 high-index lanthanum glass class. Standalone $f = -56.940936$ mm.**

L9 is the negative front member of cemented pair D2. It is coupled directly to the low-dispersion positive L10. The normalized L9–L10 assembly has a weak net negative focal length of −1217.405232 mm; this cemented net power is separate from either element's isolated focal length and from G3's strong net positive power.

### L10 — Positive Meniscus, Convex to Object

**$n_d = 1.49700$, $\nu_d = 81.6$. Glass: 497816 ED fluorophosphate crown class. Standalone $f = +54.997366$ mm.**

L10 is the positive low-dispersion partner of L9. Its high Abbe number places low-dispersion positive power inside the main positive group, where it can oppose the chromatic contribution of the high-index negative cemented member without requiring an air gap.

### L11 — Negative Meniscus, Convex to Object

**$n_d = 1.84666$, $\nu_d = 23.8$. Glass: 847238 dense flint class. Standalone $f = -28.012841$ mm.**

L11 is the negative front member of the second G3 cemented pair. It is the strongest isolated negative element in G3 and is paired with the very low-index, very high-Abbe L12.

### L12 — Biconvex Positive

**$n_d = 1.43700$, $\nu_d = 95.1$. Glass: 437951 UED fluorophosphate class. Standalone $f = +35.912961$ mm.**

L12 is the positive ultra-low-dispersion partner of L11. The normalized D3 pair remains net negative at −135.375458 mm despite L12's positive standalone power. Its modeled minimum edge thickness is 0.214875 mm at the shared 11.8 mm semi-diameter, the tightest positive edge thickness in the prescription.

### L13 — Biconvex Positive O.I.S. Element, Two Aspherical Surfaces

**$n_d = 1.55333$, $\nu_d = 71.8$. Glass: 553718 aspherical ED glass class, with M-FCD500 as a near match. Standalone $f = +35.009818$ mm.**

L13 is the final element of G3 and the single-element optical image-stabilization unit. The patent moves it perpendicular to the optical axis rather than axially (¶0045). Its paired aspherical surfaces provide substantial rim departures while keeping the stabilization mass to one element. Panasonic's design account independently describes the O.I.S. member as an aspherical/ED lens in the third zoom group.

### L14 — Biconcave Negative Focus Element, Two Aspherical Surfaces

**$n_d = 1.55333$, $\nu_d = 71.8$. Glass: 553718 aspherical ED glass class, with M-FCD500 as a near match. Standalone $f = -47.661981$ mm.**

L14 alone forms G4, so its standalone and functional-group focal lengths are the same. It translates toward the image for closer focus (¶0044). The element's low-dispersion glass class and two aspherical surfaces allow the focus group to remain a single lens while the patent limits its power through condition (4).

### L15 — Biconcave Negative

**$n_d = 1.49700$, $\nu_d = 81.6$. Glass: 497816 ED fluorophosphate crown class. Standalone $f = -194.172794$ mm.**

L15 is the first element of G5 and lies immediately behind the moving focus lens. Its Numerical Example 1 radii, $R_{30}=-106.5052$ mm and $R_{31}=+1030.8842$ mm, define a weak biconcave element under the patent's left-to-right radius convention; this numerical prescription governs the model despite ¶0038 describing L15 in prose as an image-side-convex meniscus. The patent specifically requires this negative element to have $\nu_d > 65$ so that focus-induced lateral chromatic variation remains controlled (¶0121–0127). Panasonic's optical-design account describes a negative ED member behind the focus lens.

### L16 — Positive Meniscus, Convex to Object

**$n_d = 1.90043$, $\nu_d = 37.4$. Glass: 900374 high-index lanthanum glass class. Standalone $f = +78.852647$ mm.**

L16 supplies the positive power that makes the two-element rear group net positive at +132.201235 mm. Its Numerical Example 1 radii, $R_{32}=+61.5545$ mm and $R_{33}=+449.3914$ mm, define an object-side-convex positive meniscus under the patent's radius convention; this numerical prescription governs the model despite ¶0038 describing L16 as biconvex. Its high index supports substantial positive power with moderate curvature while L15 provides the preceding weak negative, high-Abbe contribution.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number, not commercial glass names. The labels below are catalog-coordinate classes or cautious near matches. They should not be read as proof that Panasonic used a particular vendor or melt.

| Stored optical constants | Elements | Authored identification | Data status |
|---|---|---|---|
| 1.92286 / 20.9 | L1 | 923209 high-index flint class | Class coordinate |
| 1.72916 / 54.7 | L2, L3 | 729547 lanthanum crown class | Strong cross-vendor class match |
| 1.77250 / 49.6 | L4, L7 | 773496 lanthanum crown class | Strong cross-vendor class match |
| 1.80755 / 40.9 | L5 | 808409 molded high-index glass class | Class coordinate |
| 1.92119 / 24.0 | L6 | 921240 dense flint class | Class coordinate |
| 1.68820 / 31.1 | L8 | Unmatched 688311; M-FD80 / S-TIM28 / J-SF8 class | Explicitly unmatched |
| 1.87070 / 40.7 | L9 | 871407 high-index lanthanum glass class | Class coordinate |
| 1.49700 / 81.6 | L10, L15 | 497816 ED fluorophosphate crown class | Strong class match |
| 1.84666 / 23.8 | L11 | 847238 dense flint class | Strong cross-vendor class match |
| 1.43700 / 95.1 | L12 | 437951 UED fluorophosphate class | Strong class match |
| 1.55333 / 71.8 | L13, L14 | 553718 aspherical ED class; M-FCD500 near match | Near match, not exact identity |
| 1.90043 / 37.4 | L16 | 900374 high-index lanthanum glass class | Class coordinate |

No element carries authored $n_C$, $n_F$, $n_g$, or $\Delta P_{g,F}$. The model therefore supports statements about relative d-line dispersion and the patent's Abbe-number conditions, but it does not support an apochromatic designation or a quantitative anomalous-partial-dispersion claim.

## Focus Mechanism

The lens uses single-group internal focusing. G4 consists only of L14 and moves imageward from infinity toward close focus. The patent publishes the direction of travel, a telephoto travel of 13.76 mm, a 300 mm object-to-image-plane distance, and approximately 0.5× magnification, but it does not publish close-focus spacing rows at any zoom position (¶0044, ¶0182–0183).

The data therefore uses a **CONSTRAINED_RECONSTRUCTION** rather than presenting inferred spacings as source values. At each zoom position, only G4 moves: D27 increases by the same amount that D29 decreases, so the sum of the two adjacent gaps is invariant.

| State | D27 at infinity | D27 at close | D29 at infinity | D29 at close | G4 imageward travel | Computed magnification |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 1.800000 mm | 3.394494 mm | 16.125000 mm | 14.530506 mm | 1.594494 mm | 0.129901× |
| Middle | 2.620000 mm | 7.221741 mm | 14.555000 mm | 9.953259 mm | 4.601741 mm | 0.258551× |
| Telephoto | 1.800000 mm | 15.469691 mm | 29.640000 mm | 15.970309 mm | 13.669691 mm | 0.492597× |

The telephoto reconstruction differs from the source checkpoints by −0.090309 mm in travel and −0.007403× in magnification. Those residuals are consistent with normalization of the finite-index adhesive layers and rear plate, the source prescription's limited decimal precision, and the patent's rounded 0.5× statement. The wide and middle close-focus states are model solutions, not published patent states.

The reconstruction is solved to a 300 mm object-to-image-plane distance at each sampled focal state, matching the patent's reference plane and Panasonic's sensor-plane minimum-focus specification. The data does not infer additional floating groups or an undocumented focus cam law between the defined endpoints.

## Aspherical Surfaces

The design has eight aspherical surfaces on four elements:

- L5: 9A and 10A in the negative variator G2;
- L8: 16A and 17A at the entrance of positive group G3;
- L13: 26A and 27A on the O.I.S. element;
- L14: 28A and 29A on the focus element.

The patent uses the standard conic convention

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_p h^p,
$$

so $K=0$ is a spherical base. No conic conversion is required. The model is native scale; consequently no asphere coefficient scaling or transformation has been applied. Coefficients not published above $A_{12}$ are zero in the data.

| Surface | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ | $A_{12}$ |
|---|---:|---:|---:|---:|---:|---:|
| 9A | 0 | 4.45022E−05 | −5.52511E−07 | 3.75457E−09 | −1.55004E−11 | 2.73712E−14 |
| 10A | 0 | 3.22285E−05 | −5.67377E−07 | 3.84163E−09 | −1.61204E−11 | 2.85010E−14 |
| 16A | 0 | −5.20686E−07 | 5.98614E−08 | −1.43541E−09 | 1.04537E−11 | −3.02756E−14 |
| 17A | 0 | 7.38509E−06 | 4.63019E−08 | −1.39981E−09 | 1.04276E−11 | −3.09412E−14 |
| 26A | 0 | 3.90077E−06 | −5.00465E−08 | 1.45882E−09 | −1.62372E−11 | 9.28054E−14 |
| 27A | 0 | 1.50035E−05 | −3.78157E−08 | 1.43815E−09 | −1.72507E−11 | 1.03537E−13 |
| 28A | 13.5840 | 1.32500E−04 | −1.71126E−06 | 1.83203E−08 | −1.24693E−10 | 3.74570E−13 |
| 29A | 1.27323 | 1.25914E−04 | −1.60049E−06 | 1.58641E−08 | −1.01935E−10 | 2.89438E−13 |

Because the patent supplies no clear apertures, the following departures are evaluated only at the final verified model semi-diameters. They are not presented as patent-published rim values.

| Surface | Verified semi-diameter | Departure from same-$R$ sphere |
|---|---:|---:|
| 9A | 14.2 mm | +0.159347 mm |
| 10A | 14.2 mm | −0.448372 mm |
| 16A | 12.5 mm | −0.106921 mm |
| 17A | 12.5 mm | +0.043468 mm |
| 26A | 13.3 mm | +1.304364 mm |
| 27A | 13.3 mm | +1.852466 mm |
| 28A | 12.0 mm | +0.988941 mm |
| 29A | 12.0 mm | +0.969354 mm |

The L13 and L14 pairs carry the largest verified departures. Their placement on the stabilization and focus elements is consistent with Panasonic's stated objective of using single moving elements while limiting focus-dependent and decenter-dependent aberration changes. This interpretation does not imply a particular manufacturing process beyond the data's cautious aspherical-glass class annotations.

## Chromatic Correction Strategy

The chromatic strategy can be described at the Abbe-number level. G3 contains three elements with $\nu_d > 65$: L10 at 81.6, L12 at 95.1, and L13 at 71.8. This satisfies the patent's preferred requirement for at least three such members in G3 (¶0134–0136). The negative first element of G5, L15, has $\nu_d = 81.6$, comfortably above the patent's lower bound of 65 (¶0121–0127).

Within G3, the two cemented pairs combine negative high-index members with positive low-dispersion members. D2 couples L9 to L10 and remains only weakly negative as a cemented assembly; D3 couples dense-flint L11 to UED-class L12 and remains more strongly negative. Positive L8 and L13 then bring the complete group to +27.102207 mm. These power relationships describe the final model's architecture; detailed secondary-spectrum behavior cannot be established without line indices or validated Sellmeier identities.

The production literature lists one UED and four ED/aspherical-ED elements. The data's Abbe classes identify L12 as UED-class and L10, L13, L14, and L15 as low-dispersion or ED-class members, which is a further correlation point. It is not proof of exact production glass composition.

## Conditional Expressions

The patent defines five principal conditions for balancing close-focus travel, focus speed, chromatic behavior, and group power (¶0104–0143). The first column below reproduces the patent's Table 10 value. The normalized-model column is independently evaluated from the final data arrays; condition (5) uses the reconstructed telephoto travel in that column.

| Condition | Required interval | Patent Table 10 | Normalized model | Result |
|---|---:|---:|---:|---|
| (1) $T_{35t}/TL_t$ | $0.12 < x < 0.25$ | 0.182 | 0.182758 | Pass |
| (2) $T_{35w}/TL_w$ | $0.05 < x < 0.20$ | 0.142 | 0.142836 | Pass |
| (3) $\nu_d(LG5F)$ | $x > 65$ | 81.6 | 81.6 | Pass |
| (4) $|f_4|/f_t$ | $0.30 < x < 0.70$ | 0.474 | 0.473924 | Pass |
| (5) $|d_F|/f_t$ | $0.05 < x < 0.30$ | 0.137 | 0.135924 | Pass |

For condition (5), using the patent-published 13.76 mm travel with the normalized telephoto EFL gives 0.136822; using the reconstructed 13.669691 mm travel gives the tabulated 0.135924. Both remain comfortably inside the claimed interval.

## Image Stabilization

L13 is shifted perpendicular to the optical axis to compensate image motion (¶0045). The patent gives lateral shifts of 0.095, 0.139, and 0.231 mm at wide, middle, and telephoto for image displacement equivalent to a 0.3° tilt of the complete lens (¶0178–0179).

A first-order decenter trace of the final normalized arrays independently reproduces this relation. The published L13 shifts generate image-plane displacements within 0.28% of those produced by a 0.3° input-axis tilt at all three states. The corresponding computed decenter values for exact first-order equality are 0.095184, 0.139382, and 0.231194 mm. The small residuals are consistent with the source values being rounded to 0.001 mm and with the model's adhesive/plate normalization.

The stabilization element is distinct from the focus element: L13 moves laterally inside G3, whereas L14 moves axially as G4. The data file records the element role but does not add a runtime decenter control, so the centered prescription remains the visualization's base optical state.

## Verification Summary

The final normalized data arrays were evaluated independently by sequential height/reduced-angle propagation and ABCD matrix multiplication. Their maximum matrix disagreement is below numerical precision at the three zoom states.

| Verification quantity | Result |
|---|---:|
| Petzval sum | +0.001932314608 mm⁻¹ |
| Signed Petzval radius | −517.514071 mm |
| Minimum positive edge thickness | 0.214875 mm at L12 |
| Maximum actual rim angle | 61.927513° at surface 20 |
| Maximum shared-band gap intrusion | 0.881980 of the 0.90 limit |
| Clearance at the maximum-intrusion gap | 0.208895 mm at surfaces 12→13 |
| Positive-$K$ conic limits | 28A and 29A pass |
| Representative exact ray containment | Pass at infinity and reconstructed close focus for all three zoom states |

The Petzval sum is calculated surface by surface as $\phi/(n n')$. The signed radius follows the convention $R_P=-1/\sum P_i$. It is a paraxial field-curvature descriptor, not a direct prediction of the final sagittal or tangential image surface after higher-order correction.

The authored semi-diameters pass the local edge-thickness, actual aspherical rim-slope, conic-height, shared-band cross-gap, and representative-ray checks. Some full-field diagnostic rays encounter the inferred apertures first at L4 in the wide state and at L3 in a telephoto corner bundle; no first limit occurs within a cemented pair. Since the patent publishes no lens semi-diameters, these results document the present aperture model and do not establish intentional mechanical vignetting in the source design.


## Sources and References

1. Japan Patent Office, **JP 2020-118738 A**, “Zoom lens system, imaging apparatus, and camera system,” published 2020-08-06. Numerical Example 1; especially ¶0021–0045, ¶0104–0143, ¶0168–0185, Tables 1–3, Table 10, and Figure 1.
2. Panasonic, **LUMIX S 24-105mm F4 MACRO O.I.S. Lens S-R24105 — Specifications**. Product identity, 24–105 mm marketing range, L-Mount/full-frame format, 16 elements in 13 groups, 0.30 m minimum focus, 0.5× maximum magnification, angle of view, and nine-blade aperture. <https://www.panasonic.com/au/consumer/lumix-cameras-video-cameras/lumix-camera-lenses/lumix-s-lenses/s-r24105gc.specs.html>
3. Panasonic Optical Design Department, **Ninth Edition: LUMIX S 24-105mm F4 MACRO O.I.S.** Five-group architecture, single aspherical/ED focus lens, negative ED lens behind the focus lens, third-group O.I.S. element, 0.30 m minimum focus, and 0.5× telephoto magnification. <https://www.panasonic.com/au/consumer/lumix-cameras-video-cameras/lumix-s-series-full-frame-cameras-learn/article/this-is-the-optical-design-department-ninth-edition.html>
4. Panasonic, **Panasonic Launches Three L-Mount Interchangeable Lenses for the LUMIX S Series**, 2019-02-01. Product release timing and S-R24105 identity. <https://na.panasonic.com/news/panasonic-launches-three-l-mount-interchangeable-lenses-for-the-lumix-s-series-full-frame-digital-single-lens-mirrorless-camera>
5. Current official optical-glass catalogs from OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita. Catalog comparisons are used only as class or near-match evidence; the patent's stored $n_d$ and $\nu_d$ remain authoritative.
