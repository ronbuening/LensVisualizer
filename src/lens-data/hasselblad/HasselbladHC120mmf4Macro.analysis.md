# Hasselblad HC Macro 4/120 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2004-302170 A, "マクロレンズ" (Macro Lens).
**Applicant:** Fuji Photo Optical Co., Ltd. (富士写真光機株式会社), Saitama, Japan.
**Inventor:** Kazunori Ohno (大野 和則).
**Filed:** 31 March 2003 (Heisei 15). **Published:** 28 October 2004 (Heisei 16).
**Embodiment analyzed:** Example 4 (第4実施例, Table 4).

The prescription data in the patent is normalised to $f = 100\text{ mm}$. The production lens scales all linear dimensions by a factor of approximately 1.187 to reach the actual focal length of 118.7 mm.

The following convergent evidence links Example 4 to the production Hasselblad HC Macro 4/120 (also sold as Super-EBC FUJINON Macro 4/120):

1. **Element and group count.** 9 elements in 9 air-separated groups — matching the manufacturer specification exactly. The absence of any cemented elements is a distinctive feature of this design and is consistent across all four patent examples.
2. **Focal length.** The patent's normalised $f = 100\text{ mm}$ scales to 118.7 mm at the production scale factor (1.187), matching the manufacturer-stated focal length of 118.7 mm.
3. **Maximum aperture.** FNO = 4.10 in the patent; the production lens is marketed as f/4.
4. **Field angle.** The patent states $2\omega = 32.8°$ at $f = 100$. At production scale, the computed half-image-height of 29.43 mm (normalised) scales to 34.94 mm, closely matching the 645-format half-diagonal of 34.85 mm. The manufacturer states a diagonal angle of view of 33° on 645 format (coverage 56 × 41.5 mm), consistent with $2 \times \arctan(34.85/118.7) = 32.7°$.
5. **Focus mechanism.** Front-group focusing from infinity to 1:1, with the rear group fixed — matching the manufacturer description of "front focusing" with 1:1 maximum magnification.
6. **Minimum focus distance.** Paraxial computation from the variable gap data ($D_{13}$ infinity = 2.526, close = 51.784) yields an object-to-image distance of approximately 326.9 mm (normalised) or 388 mm (production), consistent with the manufacturer MFD of 0.39 m.
7. **Patent timing.** Filed March 2003, published October 2004; the HC Macro 4/120 was announced in September 2004.
8. **Applicant.** Fuji Photo Optical Co., Ltd. designed and manufactured all Hasselblad HC/HCD lenses.

Examples 1, 2, and 4 share the same 9-element lens configuration (Figs. 1–2) but differ in prescription values. Among these, Example 4 provides the closest match to the production specification in FNO (4.10 vs marketed f/4) and field angle (32.8° vs 33° diagonal). Example 3 uses a different 8-element structure (Figs. 3–4) with only 2 elements in the first front group.

## Optical Architecture

The HC Macro 4/120 is a front-focus macro lens with a positive–negative power arrangement optimised for focusing from infinity to life-size (1:1) magnification without a floating-element mechanism. Its all-spherical, 9-element design is distributed across three functional groups:

- **Front Group $G_F$ (positive, $f \approx 70.2\text{ mm}$):** subdivided by the aperture stop into two subgroups — the First Front Group $G_1$ (L1–L3, 3 elements) on the object side and the Second Front Group $G_{II}$ (L4–L6, 3 elements) on the image side.
- **Rear Group $G_2$ (negative, $f \approx -180.0\text{ mm}$):** 3 elements (L7–L9), fixed during focusing.

The Hasselblad specification counts this as "9 elements in 9 groups," reflecting that every element is air-spaced — there are no cemented doublets or triplets in the design.

The power distribution is front-heavy. The positive front group ($f_{G_F} \approx 70\text{ mm}$) carries substantially more power than the overall system ($f \approx 100\text{ mm}$), while the negative rear group ($f_{G_2} \approx -180\text{ mm}$) acts as a weak diverging relay. This positive-front/negative-rear arrangement is telephoto in type — the BFD of 70.50 mm (normalised) is shorter than the EFL (BFD/EFL = 0.705) — but the total mechanical track from front vertex to image plane is approximately 156 mm (normalised), yielding a total-track-to-EFL ratio of 1.56. The design does not achieve telephoto compaction (ratio < 1) because the 9 elements of the front group occupy a substantial axial length. For a macro lens that must house a leaf shutter and provide sufficient extension for 1:1 focusing, this track length is typical.

The aperture stop sits between the two front subgroups (between L3 and L4), deep within the front group. The patent text (¶0012–¶0015) explains that this placement creates quasi-symmetric off-axis ray paths across the stop, suppressing the astigmatism, distortion, coma, and lateral colour that would otherwise arise from the strongly asymmetric positive-front/negative-rear power split. The First Front Group introduces negative power on the object side of the stop to balance the Second Front Group's positive power on the image side, maintaining off-axis aberration symmetry even as the front group extends during close-focus operation.

The Petzval sum is $0.001002\text{ mm}^{-1}$ (normalised), corresponding to a Petzval radius of approximately 998 mm. This relatively mild field curvature reflects the careful balancing of positive and negative surface powers across all three groups, as required for a macro lens that must perform uniformly across a 56 × 41.5 mm image field at conjugates ranging from infinity to 1:1.

## Element-by-Element Analysis

### L1 — Equi-Biconvex Positive

$n_d = 1.76182$, $\nu_d = 26.5$. Glass: E-SF3 (HOYA). $f = +89.5\text{ mm}$.

L1 is a weakly positive equi-biconvex element ($R_1 = +135.67$, $R_2 = -135.67$) that serves as the front collector of the First Front Group. Despite its symmetric biconvex shape, it is made from a dense flint glass with high index ($n_d = 1.762$) and strong dispersion ($\nu_d = 26.5$) — an unusual choice for a positive element, where low-dispersion crown glasses are more typical. This selection reflects the patent's strategy of controlling chromatic aberration through the interaction of L1 with the strongly negative L2 immediately behind it: L1 contributes positive longitudinal chromatic aberration that L2 partially cancels. The high index also keeps surface curvatures gentle, minimising higher-order spherical aberration at the entrance of the system where beam diameters are largest.

### L2 — Biconcave Negative

$n_d = 1.72342$, $\nu_d = 38.0$. Glass: E-FD5 (HOYA). $f = -28.4\text{ mm}$.

L2 is the strongest negative element in the system and the linchpin of the First Front Group's aberration strategy. Its strongly concave image-side surface ($R_4 = +36.38$) produces powerful divergence close to the marginal-ray height maximum. The patent's conditional expression (2) governs this surface: $R_{N1}/f = 0.3638$, within the specified range $0.3 < R_{N1}/f < 0.5$. This radius balances spherical aberration correction against field curvature — too short a radius (below 0.3) produces overcorrected spherical aberration and tilted field; too long (above 0.5) produces undercorrected spherical aberration (¶0018–¶0019).

Condition (5) specifies $22 < \nu_{N1} < 47$, and L2's $\nu_d = 38.0$ sits comfortably within this range. The moderate Abbe number allows L2 to contribute enough chromatic aberration to balance both axial and lateral colour without dominating either (¶0026–¶0027).

### L3 — Equi-Biconvex Positive

$n_d = 1.69680$, $\nu_d = 55.6$. Glass: LAC14 (HOYA) — lanthanum crown. $f = +33.4\text{ mm}$.

L3 is the strongest positive element in the First Front Group and the last element before the aperture stop. Its symmetric equi-biconvex shape ($R_5 = +45.05$, $R_6 = -45.05$) provides strong convergence with a lanthanum crown glass that combines a usefully high index ($n_d = 1.697$) with low dispersion ($\nu_d = 55.6$). This glass choice minimises the chromatic load that L3 adds to the system while keeping surface curvatures moderate.

Together, L1–L3 form a positive triplet whose net focal length is $f_{G_1} \approx 90.9\text{ mm}$, with a back focal distance of $bf_1 \approx 100.9\text{ mm}$. The ratio $bf_1 / f_1 = 1.110$ satisfies condition (1): $1.0 < bf_1/f_1 < 1.2$. This condition ensures that the negative power within $G_1$ (provided by L2) is strong enough to push the rear principal point of $G_1$ substantially behind its last surface, enhancing the quasi-symmetry of the off-axis ray path across the aperture stop (¶0016–¶0017). The large air gap $D_6 = 19.37\text{ mm}$ between L3 and the aperture stop provides working space for the leaf shutter mechanism — a physical requirement of all HC-mount lenses, which incorporate an in-lens leaf shutter.

### L4 — Biconcave Negative

$n_d = 1.67270$, $\nu_d = 32.2$. Glass: E-FD4 (HOYA) — dense flint. $f = -33.4\text{ mm}$.

L4 is the sole negative element in the Second Front Group and the element closest to the aperture stop on its image side. The patent identifies this element as critical for controlling spherical aberration in $G_{II}$ (¶0020–¶0022). Its strongly concave object-side surface ($R_8 = -23.80$) is the sharpest curvature in the entire system, creating a powerful divergence that counteracts the convergence of L5 and L6 downstream. Condition (3) governs this surface: $R_{N2}/f = -0.2380$, within the required range $-0.5 < R_{N2}/f < -0.18$. Departing below $-0.5$ would weaken the negative power and leave spherical aberration undercorrected with outer coma; departing above $-0.18$ would overcorrect spherical aberration and produce inner coma (¶0022).

The nearly flat rear surface ($R_9 = +444.65$) minimises the element's contribution to off-axis aberrations while concentrating its negative power on the steeply curved front surface.

### L5 — Positive Meniscus, Convex to Image

$n_d = 1.77250$, $\nu_d = 49.6$. Glass: TAFD30 (HOYA) — lanthanum dense flint. $f = +57.7\text{ mm}$.

L5 is a positive meniscus with both surfaces concave toward the object ($R_{10} = -125.58$, $R_{11} = -33.77$). The much shorter radius on the rear surface gives the element its positive power. The high-index lanthanum dense flint glass ($n_d = 1.773$) allows strong convergence with moderate curvatures, contributing to coma correction through its meniscus geometry. L5's role, together with L6, is to provide the positive power of $G_{II}$ while maintaining low residual spherical aberration and coma — the two positive elements balance L4's strong divergence to produce a net weakly positive second front group ($f_{G_{II}} \approx 131.8\text{ mm}$).

### L6 — Biconvex Positive

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: FC5 (HOYA) — fluorophosphate crown (FK5 class). $f = +83.8\text{ mm}$.

L6 is the last element of the front group and the first of two FK5-class elements in the design (L9 being the second). Its low index ($n_d = 1.487$) and high Abbe number ($\nu_d = 70.2$) mark it as a chromatic corrector — placed at the end of $G_{II}$ where the axial ray height is relatively low but the off-axis chief ray is displaced, L6 primarily controls lateral colour. The biconvex shape ($R_{12} = +349.42$, $R_{13} = -45.96$) is strongly asymmetric, with most of the power on the steeply curved image-side surface. The variable air gap $D_{13}$ immediately follows L6, separating the front group from the fixed rear group.

### L7 — Equi-Biconvex Positive

$n_d = 1.80518$, $\nu_d = 25.5$. Glass: E-FD2 (HOYA) — dense flint (SF6 class). $f = +94.1\text{ mm}$.

L7 opens the rear group with a symmetric equi-biconvex element ($R_{14} = +150.55$, $R_{15} = -150.55$) made from the highest-index glass in the system ($n_d = 1.805$). The patent explains (¶0014) that placing a positive element at the front of the negative rear group is essential for macro performance: as the front group extends toward the object at close focus, the off-axis ray height at L7 increases, and the positive power of L7 grows in its effect on the off-axis beam, providing increased correction to compensate for the growing front-group/rear-group separation. Without L7's positive contribution, the rear group's overall negative power would produce uncorrectable astigmatism and field curvature at high magnifications.

Like L1, L7 uses a dense flint glass for a positive element — the very high index ($n_d = 1.805$) keeps the curvatures gentle despite the element's moderate positive power, while the strong dispersion ($\nu_d = 25.5$) is deliberate: L7's chromatic contribution is partially cancelled by L8 (the negative element behind it), and the residual is balanced against the front group's chromatic state.

### L8 — Biconcave Negative

$n_d = 1.80440$, $\nu_d = 39.6$. Glass: NBFD10 (HOYA) — lanthanum dense flint. $f = -39.1\text{ mm}$.

L8 is the negative element of the rear group and carries the bulk of $G_2$'s diverging power. Condition (4) governs its image-side surface: $R_{N3}/f = R_{17}/f$. From the tabulated prescription, $R_{17}/f = 41.27/100 = 0.4127$, which satisfies the required range $0.35 < R_{N3}/f < 0.55$ comfortably. The patent's condition-value table reports $R_{N3}/f = 0.4578$ for Example 4; this value does not correspond to $R_{17}$ but instead matches $R_{18}/f = 45.78/100 = 0.4578$ exactly — evidently a transcription error in the condition table, as the three other examples all correctly cite the $R_{17}$ surface for this quantity. Both values satisfy condition (4); the prescription itself is unaffected. This condition maintains field flatness from infinity to 1:1 by preventing the strong negative field curvature that would arise if L8's diverging power were too concentrated (¶0023–¶0025). The high-index lanthanum dense flint glass ($n_d = 1.804$, $\nu_d = 39.6$) is unusual — combining high index with moderate dispersion — and enables strong negative power with moderate curvatures.

### L9 — Positive Meniscus, Convex to Object

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: FC5 (HOYA) — fluorophosphate crown (FK5 class). $f = +128.5\text{ mm}$.

L9 closes the rear group and the entire system with a positive meniscus ($R_{18} = +45.78$, $R_{19} = +162.51$) made from the same FK5-class glass as L6. Its weakly positive power acts primarily as a field flattener, correcting the residual Petzval curvature of the preceding elements. The low-dispersion glass helps cancel the lateral colour introduced by L7 and L8, completing the rear group's chromatic correction. The meniscus shape — convex toward the object — also helps control distortion by bending the chief ray gently back toward the axis before it reaches the image plane.

## Glass Selection

The glass palette of Example 4 uses 6 distinct glass types across 9 elements. Since the patent was filed by Fuji Photo Optical Co., Ltd., HOYA glasses are the most probable production supplier, though OHARA equivalents exist for every type used.

| Element | $n_d$   | $\nu_d$ | Likely Glass         | Type                    | Role in Design                       |
|---------|---------|---------|----------------------|-------------------------|--------------------------------------|
| L1      | 1.76182 | 26.5    | E-SF3 (HOYA)         | Dense flint             | High-index front collector           |
| L2      | 1.72342 | 38.0    | E-FD5 (HOYA)         | Dense flint             | Strong negative, SA/chromatic control|
| L3      | 1.69680 | 55.6    | LAC14 (HOYA)         | Lanthanum crown         | Strong positive, low chromatic load  |
| L4      | 1.67270 | 32.2    | E-FD4 (HOYA)         | Dense flint             | Near-stop negative, SA control       |
| L5      | 1.77250 | 49.6    | TAFD30 (HOYA)        | Lanthanum dense flint   | Positive meniscus, coma correction   |
| L6      | 1.48749 | 70.2    | FC5 (HOYA)           | Fluorophosphate crown   | Chromatic corrector (lateral colour) |
| L7      | 1.80518 | 25.5    | E-FD2 (HOYA)         | Dense flint (SF6 class) | Positive collector in rear group     |
| L8      | 1.80440 | 39.6    | NBFD10 (HOYA)        | Lanthanum dense flint   | Negative diverger, field flatness    |
| L9      | 1.48749 | 70.2    | FC5 (HOYA)           | Fluorophosphate crown   | Field flattener, lateral colour      |

All glass identifications carry high confidence ($\Delta n_d < 10^{-4}$, $\Delta\nu_d < 0.1$ against published catalog values).

Several design-level observations emerge from the glass palette:

**Dense flints for positive elements.** Both L1 and L7 use high-index, high-dispersion dense flints ($\nu_d = 26.5$ and 25.5) in positive biconvex roles — the opposite of the typical crown-for-positive, flint-for-negative achromatic convention. This choice prioritises index (and hence gentle curvatures at the entrance and in the rear group) over per-element achromatism, relying instead on the negative elements (L2, L4, L8) to handle chromatic correction at the group level.

**FK5-class pair (L6, L9).** The two fluorophosphate crown elements appear in structurally symmetric positions — one at the end of the front group, one at the end of the rear group — and both function primarily as chromatic correctors and field flatteners. Their low index ($n_d = 1.487$) means their surface curvatures must be correspondingly stronger to achieve meaningful power, but their high Abbe number ($\nu_d = 70.2$) ensures that the chromatic penalty is minimal.

**No ED or anomalous-dispersion glasses.** The design achieves adequate chromatic correction for a moderate-aperture (f/4) macro lens without resorting to any ED, super-ED, or fluorite-equivalent glasses. The Abbe numbers span 25.5 to 70.2 — a wide range that provides sufficient dispersion contrast between positive and negative elements for conventional achromatic correction. This is consistent with the design's 2003 vintage and its intended use at f/4, where the chromatic demands are substantially less severe than in faster lenses.

## Focus Mechanism

The HC Macro 4/120 employs a front-group focusing design. During focusing from infinity to 1:1 magnification, the entire front group ($G_F = G_1 + G_{II}$, comprising L1–L6) translates forward along the optical axis as a rigid unit, while the rear group ($G_2$, L7–L9) remains fixed. There are no floating elements and no differential movement within the front group — this is a simple unit-focus mechanism applied to $G_F$ alone.

The sole variable air gap is $D_{13}$, the spacing between L6 (the last element of $G_F$) and L7 (the first element of $G_2$):

| Conjugate          | $D_{13}$ (normalised) | $D_{13}$ (production) |
|--------------------|----------------------:|----------------------:|
| Infinity ($\beta = 0$) | 2.526 mm            | 3.00 mm               |
| 1:1 ($\beta = -1$)     | 51.784 mm           | 61.47 mm              |

The total focus extension is 49.26 mm (normalised) or approximately 58.5 mm in production units. This is a large travel — the front group moves forward by more than half the system's focal length to reach 1:1 — which is characteristic of macro lenses that achieve life-size magnification without extension tubes.

The patent explains (¶0007–¶0010) that front-group focusing was chosen over whole-lens unit focus to reduce the required focus travel for autofocus compatibility. In a whole-lens unit-focus design, achieving 1:1 magnification requires extending the entire lens by approximately one full focal length (≈120 mm production). By focusing only the front group while leaving the diverging rear group fixed, the required mechanical extension is reduced to approximately 58.5 mm (production) — less than half the focal length. The negative rear group further reduces the effective conjugate distance that the front group must span, contributing to the compact travel. This shorter extension enables faster autofocus response — a key requirement for the Hasselblad H system, where each HC lens carries its own integral focus drive motor.

At infinity focus, the front group sits close to the rear group ($D_{13} = 3.0\text{ mm}$ production), and the lens is compact. At 1:1, the front group has extended far forward, and the object distance from the front vertex is approximately 144 mm (production), yielding a total sensor-to-subject distance of approximately 388 mm — consistent with the manufacturer's stated MFD of 0.39 m.

The patent does not employ a floating-element mechanism. The inventor states (¶0004–¶0006) that while floating focus can further reduce aberration variation across the focus range, it adds mechanical complexity. The present design instead achieves uniform performance from infinity to 1:1 through the quasi-symmetric power distribution around the aperture stop — the patent's core innovation.

## Aspherical Surfaces

The design is entirely spherical. None of the four patent examples include aspherical surfaces, and no aspherical coefficient table is presented. All aberration correction is achieved through the choice of glass types, surface curvatures, element spacing, and the quasi-symmetric power distribution around the aperture stop. For a moderate-aperture (f/4) macro lens designed in 2003, this is not unusual — aspherical surfaces were not yet standard in medium-format optics of this era, and the relatively slow aperture keeps higher-order spherical aberration manageable with spherical surfaces alone.

## Conditional Expressions

The patent defines five conditional expressions (¶0016–¶0027) that govern the optical design. All are satisfied by Example 4:

| Condition | Expression                          | Required Range         | Prescription Value | Patent Table Value | Status |
|-----------|-------------------------------------|------------------------|-------------------:|-------------------:|--------|
| (1)       | $bf_1 / f_1$                        | $1.0 < \cdot < 1.2$   |             1.1099 |             1.1099 | ✓      |
| (2)       | $R_{N1} / f$                        | $0.3 < \cdot < 0.5$   |             0.3638 |             0.3638 | ✓      |
| (3)       | $R_{N2} / f$                        | $-0.5 < \cdot < -0.18$|            −0.2380 |            −0.2380 | ✓      |
| (4)       | $R_{N3} / f$                        | $0.35 < \cdot < 0.55$ |             0.4127 |             0.4578 | ✓ *    |
| (5)       | $\nu_{N1}$                          | $22.0 < \cdot < 47.0$ |              38.0  |              38.0  | ✓      |

\* The patent's condition table reports $R_{N3}/f = 0.4578$ for Example 4, but the prescription gives $R_{17}/f = 41.2675/100 = 0.4127$. The value 0.4578 corresponds to $R_{18}/f = 45.7780/100$, the front surface of L9 rather than the image-side surface of L8. Cross-checking Examples 1–3 confirms that $R_{N3}$ is defined as $R_{17}$ in every case ($R_{N3}/f$ matches $R_{17}/f$ exactly), so the Example 4 condition table entry is a transcription error. Both 0.4127 and 0.4578 satisfy condition (4).

Where:

- $bf_1$ = back focal distance of the First Front Group ($G_1$, surfaces 1–6)
- $f_1$ = focal length of $G_1$
- $R_{N1}$ = image-side radius of the negative lens in $G_1$ (L2 rear, $R_4 = 36.38$)
- $R_{N2}$ = object-side radius of the negative lens in $G_{II}$ (L4 front, $R_8 = -23.80$)
- $R_{N3}$ = image-side radius of the negative lens in $G_2$ (L8 rear, $R_{17} = 41.27$)
- $f$ = system focal length at infinity ($f = 100\text{ mm}$ normalised)
- $\nu_{N1}$ = Abbe number of the negative lens in $G_1$ (L2, $\nu_d = 38.0$)

Condition (1) is the patent's central design principle: it forces the First Front Group to carry substantial internal negative power (through L2), pushing $G_1$'s rear principal point behind its last surface and ensuring that the off-axis ray path is quasi-symmetric about the aperture stop. Conditions (2)–(4) fine-tune the three key negative surfaces (one per group) that balance spherical aberration against field curvature across the focus range. Condition (5) constrains L2's glass dispersion to maintain the axial–lateral chromatic balance.

## Verification Summary

The prescription was verified against paraxial ABCD-matrix computations:

| Parameter         | Computed (normalised) | Computed (production) | Manufacturer Spec |
|-------------------|-----------------------|-----------------------|-------------------|
| EFL               | 100.00 mm             | 118.7 mm              | 118.7 mm          |
| FNO               | 4.10                  | 4.10                  | f/4               |
| Half-field (diag.)| 16.4°                 | 16.4°                 | ~16.5° (33° diag.)|
| MFD (1:1)         | 326.9 mm              | 388.0 mm              | 390 mm            |
| BFD (infinity)    | 70.50 mm              | 83.68 mm              | —                 |

All computed values agree with the manufacturer specification within rounding tolerance.

## Design Heritage and Context

The HC Macro 4/120 was introduced in 2004 as part of the initial Hasselblad H-system lens lineup, designed and manufactured by Fuji Photo Optical Co., Ltd. (later Fujinon). It was also sold under the Fujifilm brand as the Super-EBC FUJINON Macro 4/120 for the Fujifilm GX645AF. It was one of the earliest autofocus 1:1 macro lenses designed specifically for medium-format digital imaging, where the 56 × 41.5 mm 645 image field and the large pixel pitch of contemporary CCD sensors (Kodak, Phase One, Leaf) demanded high resolution at moderate field angles.

The all-spherical, 9-element design reflects a conservative but well-optimised approach. The patent's core contribution — placing the aperture stop between two positive subgroups and tuning the internal negative power to achieve quasi-symmetric off-axis ray paths — is a refinement of classical macro-lens architecture that enables uniform performance from infinity to 1:1 without the mechanical complexity of a floating-element focus system. The use of 6 distinct glass types (including two FK5-class fluorophosphate crowns as chromatic correctors and field flatteners) shows careful glass selection within the constraint of an all-spherical, no-ED design.

An updated Mark II version was introduced with an improved leaf shutter mechanism (1/2000 sec top speed, rated to 1,000,000 actuations); the optical formula is understood to be unchanged, though Hasselblad has not published a detailed comparison. The HC Macro 4/120 remains usable on current Hasselblad X-system cameras (X1D II, X2D, 907X) via the XH Lens Adapter for manual-focus operation.

## Sources

1. JP 2004-302170 A (2004), "マクロレンズ," Fuji Photo Optical Co., Ltd. Inventor: Kazunori Ohno. Filed 31 March 2003, published 28 October 2004. J-PlatPat.
2. Hasselblad HC Macro 4/120 II product page: https://www.hasselblad.com/h-system/lenses/hc-macro-4-120mm/
3. Hasselblad HC Macro 4/120 II specifications (B&H Photo): 9 elements / 9 groups, f = 118.7 mm, f/4–f/45, MFD 0.39 m, 67 mm filter, 1410 g.
4. Global Media Pro specification sheet: focal length 118.7 mm, diagonal angle of view 33°, coverage 56 × 41.5 mm at close range.
5. HOYA optical glass catalog: FC5, E-FD2, E-FD4, E-FD5, NBFD10, TAFD30, LAC14, E-SF3.
