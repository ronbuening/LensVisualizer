## Patent Reference and Design Identification

**Patent:** JP H03-39920 A (特開平3-39920)\
**Application Number:** 特願平2-39751 (JP3975190A)\
**Filed:** 1990-02-22\
**Published:** 1991-02-20\
**Priority:** 1989-04-19, 特願平1-97566\
**Inventor:** Akira Ishisaka (石坂 哲)\
**Applicant:** Konica Corporation (コニカ株式会社)\
**Title:** 小型の高変倍ズームレンズ (compact high-ratio zoom lens)\
**Example details:** 第1実施例, prescription on printed p. 247, asphere on p. 248, Figs. 1 and 2

This prescription is an **AiBORG-associated development candidate**, based on Example 1 of JP H03-39920 A. It preserves
the published numerical prescription and supplies explicitly inferred aperture geometry and an infinity image plane.
The evidence establishes a direct relationship between the AiBORG development and this patent, but does not establish
that Example 1 is the unchanged factory prescription of the retail camera.

The identification rests on the following primary-source evidence:

1. Konica's January 1992 technical paper, *Optical Systems and Lens Control Systems for Compact Zoom Cameras with a
   Zooming Ratio of 3*, identifies the AiBORG and its marketed **35–105 mm** range on printed p. 111.
2. The paper describes the camera's **positive–negative–positive–negative** four-group system, linked groups 1 and 3,
   and group-2 internal focusing on pp. 111–112. These properties agree with the patent's architecture and claims.
3. Reference 1 on p. 114 explicitly cites **石坂: 特開平3-39920**. This is a manufacturer-published product-to-patent
   link, rather than an identification based only on similar focal lengths or a similar drawing.
4. Example 1 supplies **13 elements in 11 air-separated components**, with three numerical zoom states of
   **36.03 / 62.13 / 102.91 mm** and f-numbers **3.8 / 5.7 / 8.5**. Its approximately threefold range is consistent with
   the development context. The paper does not name this example as the final production embodiment.

The inventor's Japanese name is read directly from the patent front page. The manufacturer's paper prints that same
name together with **“Ishisaka, Akira”** on p. 110; this primary-source Latin form is used for the structured author
attribution. The searchable patent database instead displays “Satoru Ishizaka.” That differing transliteration is not
treated as a second inventor. The paper's two other coauthors are not named inventors of this patent. Likewise, the
original applicant is retained as Konica Corporation rather than replaced with the database's modern successor name.

The data distinguishes the marketed 35–105 mm range from the calculated design endpoints of approximately
36.033–102.937 mm. No scaling or adjustment of the patent radii, material coordinates, thicknesses, asphere, or published
zoom gaps is used to force agreement with marketing values. The reconstruction is **infinity-only**; exact factory
clear apertures, the finite-focus movement law, and the physical diaphragm mechanism remain undetermined.

## Optical Architecture

The four moving optical groups contain **2 / 3 / 5 / 3 elements** respectively. Two cemented pairs reduce the total to
11 air-separated components. These 11 components are the catalog's group count; they should not be confused with the
four zoom groups G1–G4. The stop is a separate, zero-thickness air plane, not a fourteenth lens element.

| Zoom group | Elements | Patent surfaces | Calculated air-to-air focal length | Main architectural role |
|---|---|---|---:|---|
| G1, positive | L1–L2, cemented | 1–3 | +172.250 mm | Weak positive front group, linked to G3 |
| G2, negative | L3–L5 | 4–9 | −32.268 mm | Negative zoom group and documented internal-focus group |
| G3, positive | L6–L10 | 10–18 | +20.516 mm | Strong positive group containing the stop and plastic aspheric corrector |
| G4, negative | L11–L13 | 19–24 | −28.283 mm | Rear negative group carrying the largest published zoom-magnification change |

The group focal lengths above are d-line paraxial calculations from the preserved prescription, not values measured
from a manufactured camera. The patent's discussion on printed pp. 246–247 assigns progressively greater zooming load
to the rear groups. Reducing the zoom burden on G2 limits changes in aberration generated near the front and subsequently
magnified by the rear optics. This permits a compact arrangement without making G2 excessively strong.

### Zoom movement

The three source air gaps are retained exactly:

| Patent control point | D3, G1–G2 | D9, G2–G3 | D18, G3–G4 |
|---|---:|---:|---:|
| Wide, 36.03 mm | 6.40 mm | 8.00 mm | 13.37 mm |
| Middle, 62.13 mm | 8.76 mm | 5.64 mm | 5.74 mm |
| Tele, 102.91 mm | 12.40 mm | 2.00 mm | 2.88 mm |

The invariant **D3 + D9 = 14.40 mm** keeps G1 and G3 at a fixed separation. Relative to this linked assembly, G2 moves
6.00 mm imageward from wide to tele, while G4 approaches G3 by 10.49 mm. With the reconstructed infinity film plane held
fixed, the first vertices of G1/G3, G2, and G4 instead move objectward by approximately **33.352, 27.352, and 43.842 mm**,
respectively. These coordinate-dependent descriptions are consistent: the complete assembly also translates relative
to the film. The source describes at least G1, G3, and G4 moving objectward during the wide-to-tele transition.

The model contains **65 total zoom stations: three published anchors and 62 inferred intermediate stations**. D3, D9,
and D18 are interpolated piecewise linearly in an abstract zoom coordinate, with a newly calculated infinity D24 at every
station. Intermediate f-numbers are interpolated between the source values. This is a usable interpolation of the
published states, not a recovered factory cam or aperture-control law.

### Inferred stop and clear apertures

Figure 1 places the diaphragm inside G3, between source surfaces 14 and 15, where the table gives **D14 = 1.40 mm**.
No numerical stop offset or stop diameter is published. The model splits this air space into **0.70 mm before and
0.70 mm after** an explicit `STO` plane. All original refracting vertices remain unchanged.

The stop is infinitesimally thin and has no refractive power. The midpoint maximizes its minimum axial clearance to the
two neighboring vertices, 0.70 mm on each side. The bordering surfaces recede from the intervening plane off axis, so
the optical construction permits closure without a surface intersection. This does not establish the clearance of an
actual shutter blade stack, mounting edge, or moving mechanism.

For the midpoint position, first-order pupil mapping and the source f-numbers imply stop diameters of approximately
**9.311 / 10.077 / 10.165 mm** at wide/middle/tele. These are model-derived optical diameters. A fixed physical iris
diameter is not imposed while simultaneously claiming exact agreement with all three published f-numbers.

The refracting-surface semi-diameters are also inferred. They follow the relative rim sizes in the undimensioned patent
drawing, with clear-aperture estimates conservatively inside the drawn contours. In particular, surfaces 8–9 use
**8.0 mm**, compared with an approximately 8.16 mm drawn rim under the selected image scale. The drawing-reading
precision, roughly ±0.3 mm, is not a manufacturing tolerance or a bound on unknown factory dimensions. These choices
pass the modeled surface-separation and sag checks without an override, but retain substantial wide-angle edge clipping.

## Element-by-Element Analysis

The focal lengths in this section are **calculated isolated-element d-line focal lengths in air**. Each uses its own
two vertex radii, center thickness, and published index. Cemented members are mathematically separated for this
calculation; their isolated values are not additive in situ and do not replace the combined-group powers above.

For each element, the thick-lens expression is

$$
\frac{1}{f}=(n_d-1)\left[\frac{1}{R_1}-\frac{1}{R_2}+\frac{(n_d-1)t}{n_d R_1R_2}\right].
$$

An independent two-surface reduced-angle matrix calculation gives the same results. The aspheric coefficients on
surface 18 do not change its vertex paraxial power. Specific material trade names and suppliers are unpublished;
the class descriptions below interpret the numerical coordinates without identifying a commercial glass.

### L1: Negative Meniscus, Convex to Object

**nd = 1.80518, νd = 25.4. Glass: high-index, low-Abbe flint-like class; supplier unspecified. f = −78.741 mm.**

L1 is the negative front member of the cemented G1 pair, bounded by surfaces 1–2. Its high index and comparatively low
Abbe number contrast with the positive L2. This supplies a conventional chromatic-balancing degree of freedom within
the weak positive front group. The patent connects the simple negative–positive G1 structure to the decision to focus
with G2 rather than translate the front group separately (printed p. 247).

### L2: Positive Meniscus, Convex to Object

**nd = 1.65844, νd = 50.9. Glass: higher-Abbe, moderate-index class; supplier unspecified. f = +50.791 mm.**

L2 completes the front cemented pair at surfaces 2–3. Its isolated positive power exceeds the magnitude of L1's isolated
negative power, but the cemented interface and finite thickness must be included to obtain G1's actual **+172.250 mm**
air-to-air focal length. The higher Abbe number relative to L1 provides the dispersion contrast within that pair.

### L3: Biconcave Negative, Nearly Plano on the Front

**nd = 1.77250, νd = 49.6. Glass: high-index, moderate-dispersion class; supplier unspecified. f = −22.005 mm.**

L3 begins the negative G2 group at surfaces 4–5. Its first radius is **−56,728.0 mm**, extremely weak but still finite;
the model preserves that radius rather than substituting a plane. The stronger concave side faces the image. The patent
describes this orientation as part of the negative–positive–negative G2 arrangement used to limit chromatic and off-axis
aberration changes during internal focusing (printed p. 247).

### L4: Biconvex Positive

**nd = 1.71736, νd = 29.5. Glass: high-index, low-Abbe flint-like class; supplier unspecified. f = +22.772 mm.**

L4 is the positive middle element of G2, at surfaces 6–7. Its lower Abbe number contrasts with both negative neighbors,
providing chromatic balance while partly offsetting their negative power. The rear air spacing is the published
**D7 = 1.20 mm**. The complete three-element group remains negative even though L4 alone is strongly positive.

### L5: Biconcave Negative

**nd = 1.69680, νd = 55.5. Glass: higher-Abbe, high-index crown-like class; supplier unspecified. f = −33.291 mm.**

L5 completes G2 at surfaces 8–9, with its stronger concave side facing the object. Together with L3 it supplies the
negative power around the lower-Abbe positive L4. The two opposed strong concave orientations are explicitly described
in the patent's explanation of the focus group's aberration control. The modeled 8.0 mm clear semi-diameter is an
inference from the drawing, not a published optical tolerance.

### L6: Positive Meniscus, Convex to Object

**nd = 1.59551, νd = 39.2. Glass: intermediate-index, intermediate-dispersion class; supplier unspecified. f = +32.002 mm.**

L6 starts G3 at surfaces 10–11. Its front surface supplies most of its positive paraxial power, while the rear surface
is weakly curved. It is a major positive member ahead of the internal cemented pair and stop. The patent does not assign
a separate named aberration correction to L6, so its role here is limited to its position and calculated power.

### L7: Negative Meniscus, Convex to Object

**nd = 1.84666, νd = 23.8. Glass: very-high-index, low-Abbe flint-like class; supplier unspecified. f = −22.968 mm.**

L7 is the negative member of G3's cemented pair, at surfaces 12–13. It has the highest index and lowest Abbe number in
the prescription. Its negative power and strong dispersion contrast with positive L8 provide a further chromatic
balancing pair immediately before the diaphragm. The material's numerical coordinates do not identify its supplier.

### L8: Biconvex Positive

**nd = 1.51633, νd = 64.1. Glass: low-index, high-Abbe crown-like class; supplier unspecified. f = +20.811 mm.**

L8 completes the second cemented pair at surfaces 13–14. Its relatively high Abbe number opposes the lower-Abbe L7.
The complete L7/L8 pair has a calculated air-to-air focal length of **+236.589 mm**, much weaker than either isolated
member; it is therefore not treated as two independent powers in the system. Surface 14 borders the inferred stop gap.

### L9: Biconvex Positive

**nd = 1.58144, νd = 40.7. Glass: intermediate-index, intermediate-dispersion class; supplier unspecified. f = +56.477 mm.**

L9 is the first element after the stop, at surfaces 15–16. It adds positive power in G3 behind the near-canceling
cemented pair. Its location and dispersion give the group another degree of freedom for balancing the contributions
on either side of the diaphragm. A unique allocation of spherical aberration or coma correction to this element is
not specified by the source.

### L10: Weak Positive Meniscus with an Aspheric Rear Surface

**nd = 1.49200, νd = 58.3. Glass/material: plastic, formulation and supplier unspecified. f = +444.372 mm.**

L10 occupies surfaces 17–18, with its concave side toward the object. The patent explicitly states that the aspheric
elements in Examples 1 and 3 are plastic and made nearly powerless to reduce performance changes with the environment
(printed p. 247). The calculated weak positive power is consistent with that description. A specific polymer, such as
PMMA, is not identified merely from these index and Abbe values.

The rear asphere is part of the patent's strategy for reducing astigmatism generated by G3 and controlling the resulting
image surface. This allows more freedom in shaping G2 for smaller focus-induced aberration changes. Its function is
principally higher-order correction rather than a large contribution to focal length.

### L11: Positive Meniscus, Concave to Object

**nd = 1.72342, νd = 38.0. Glass: high-index, intermediate-dispersion class; supplier unspecified. f = +30.619 mm.**

L11 begins G4 at surfaces 19–20. The stronger rear curvature gives this concave-front meniscus positive power. It partly
balances the two following negative elements in the net-negative rear group. The rear group's documented role is to
carry a comparatively large zoom-magnification change; the source does not isolate a specific aberration assignment
for L11 alone.

### L12: Biconcave Negative

**nd = 1.71300, νd = 53.9. Glass: higher-Abbe, high-index crown-like class; supplier unspecified. f = −18.627 mm.**

L12, at surfaces 21–22, is the strongest isolated negative element in G4. Its strongly concave front surface dominates
over the much weaker rear surface. Its higher Abbe number relative to positive L11 supplies a dispersion contrast
within the rear group. The group calculation includes their 2.06 mm air separation, rather than adding isolated powers.

### L13: Negative Meniscus, Concave to Object

**nd = 1.69680, νd = 55.5. Glass: higher-Abbe, high-index crown-like class; supplier unspecified. f = −62.726 mm.**

L13 ends the train at surfaces 23–24 and adds negative power behind L12. It shares the published material coordinates
of L5 but has a different bending and a weaker isolated power. The air distance following surface 24 is absent from
the source table and is supplied by the independent infinity paraxial calculation described below. No terminal plate
or additional refracting surface is introduced.

## Glass Identification and Selection

The source gives **12 distinct nd/νd pairs for 13 elements**. L5 and L13 share a pair. It does not identify optical-glass
manufacturers or catalog designations. The data therefore uses the published coordinates directly, without treating a
modern catalog match as a verified historical material. L10 is explicitly plastic in the patent; the remaining class
labels are numerical descriptions, not trade-name identifications.

| Material class or source identification | nd | νd | Elements |
|---|---:|---:|---|
| High-index, low-Abbe flint-like | 1.80518 | 25.4 | L1 |
| Higher-Abbe, moderate-index | 1.65844 | 50.9 | L2 |
| High-index, moderate-dispersion | 1.77250 | 49.6 | L3 |
| High-index, low-Abbe flint-like | 1.71736 | 29.5 | L4 |
| Higher-Abbe, high-index crown-like | 1.69680 | 55.5 | L5, L13 |
| Intermediate-index and dispersion | 1.59551 | 39.2 | L6 |
| Very-high-index, low-Abbe flint-like | 1.84666 | 23.8 | L7 |
| Low-index, high-Abbe crown-like | 1.51633 | 64.1 | L8 |
| Intermediate-index and dispersion | 1.58144 | 40.7 | L9 |
| Plastic, formulation unspecified | 1.49200 | 58.3 | L10 |
| High-index, intermediate-dispersion | 1.72342 | 38.0 | L11 |
| Higher-Abbe, high-index crown-like | 1.71300 | 53.9 | L12 |

The front and central cemented pairs combine negative lower-Abbe members with positive higher-Abbe members. G2 and G4
instead include positive lower-Abbe members among higher-Abbe negative elements. These relationships provide
conventional chromatic-balancing degrees of freedom; they do not establish perfect achromatization of any isolated
pair. No measured partial-dispersion data, ED designation, anomalous-dispersion assignment, or apochromatic performance
is asserted. Spectral behavior inferred from nd/νd alone remains approximate.

## Focus Mechanism

The **documented camera/patent mechanism is group-2 internal focusing**. Patent claim 2 and the discussion on printed
pp. 246–247 assign focusing to G2. The maker paper, §3.1 on p. 112, likewise states that G2 performs internal focusing,
that G1 and G3 are linked, and that the focusing drive is also used during zooming. This does not mean that G2 is
stationary during the infinity zoom sequence.

The **authored model is infinity-only**, identified by `NO_INTERNAL_RECONSTRUCTION`. The schema's `closeFocusM: 0.8`
entry is not a solved 0.8 m optical state, and every focus column duplicates its infinity value. No finite-conjugate
solution, focus travel, close-range aberration prediction, or continuous internal-focus cam is reconstructed. Neither
the factory autofocus calibration nor the missing close-focus spacings can be deduced uniquely from the three
published infinity zoom rows.

## Aspherical Surfaces

The only asphere in Example 1 is **surface 18, the image-side face of L10**. The source defines sag along the optical
axis, with radial height $Y$ and vertex curvature $C=1/R_{18}$:

$$
X=\frac{CY^2}{1+\sqrt{1-(1+K)C^2Y^2}}+A_4Y^4+A_6Y^6.
$$

The patent explicitly uses **1 + K** under the square root. Thus its tabulated K is the standard conic constant;
no sign reversal or subtraction of one is applied.

| Surface | Vertex radius | K | A4 | A6 |
|---|---:|---:|---:|---:|
| 18 | −12.900 mm | +1.9205 × 10⁻1 | +4.9648 × 10⁻5 mm⁻3 | +1.4617 × 10⁻7 mm⁻5 |

The positive polynomial terms move the sag in the positive axial direction relative to the negative-curvature conic
base. Their optical effect must be evaluated together with the base conic and the glass-to-air refraction. The patent
describes the intended effect as weakening G3's positive refractive action off axis, reducing astigmatism, and avoiding
an excessively overcorrected image surface (printed p. 247 and claim 4). It also states that placing the stop within
or behind G3 makes this correction particularly effective.

The native equation and all three coefficients are preserved. The material is source-identified plastic, but the
polymer formulation and manufacturing process are not established. No glass-molded or hybrid-resin-on-glass construction
is inferred from the asphere alone.

## Conditional Expressions and Design Rationale

The patent's claim 1 requires a positive, smaller zoom magnification ratio in G2 than in G3. The discussion extends
that ordering to G4. Example 1 tabulates **M2T/M2W = 1.05**, **M3T/M3W = 1.20**, and **M4T/M4W = 2.27**, satisfying
the stated ordering. These are source group-magnification ratios, not the complete lens's focal-length zoom ratio.

Claim 3 constrains the group-power ratio to **0.10 < |φ1/φ2| < 0.27**. The source gives 0.19 for this example. The
independently calculated G1 and G2 powers give approximately **0.1873**, consistent with that rounded value. The
discussion explains that excessive G1 power increases the required G2 focus movement and creates wide-end mechanical
interference concerns, while insufficient G1 power lengthens the lens (printed p. 247).

These conditions describe the design strategy and its numerical embodiment. They are not manufacturing tolerances
or evidence that the production camera retained every prescription value unchanged.

## Verification Summary

The preserved source quantities comprise all 24 vertex radii, all fixed glass and air thicknesses, all nd/νd values,
the surface-18 asphere, and all three published D3/D9/D18 rows. The only split of a published interval is the explicit
air stop inside D14, whose two parts still total 1.40 mm. No gap-sag allowance is increased and no published optical
quantity is optimized to improve the reported results.

### Calculated infinity image planes

For reduced-angle rays $[y,n\theta]$, let the system matrix immediately after surface 24 be
$M=\begin{pmatrix}A&B\\C&D\end{pmatrix}$. In air, the d-line effective focal length is $-1/C$ and the following
infinity image distance is $-A/C$. The omitted **D24** is supplied by this calculation, not read as zero or confused
with focal length.

| State | Source focal length | Calculated EFL | Inferred D24 | First vertex to image |
|---|---:|---:|---:|---:|
| Wide | 36.03 mm | 36.033203 mm | 3.998160 mm | 69.708160 mm |
| Middle | 62.13 mm | 62.128071 mm | 24.084039 mm | 82.164039 mm |
| Tele | 102.91 mm | 102.937451 mm | 47.840446 mm | 103.060446 mm |

An independent scalar paraxial recursion agrees with the matrix solution. The calculated focal lengths differ from
the printed values by at most **0.027%**, with no fitting to remove the residuals. Dividing the calculated total lengths
by the source focal lengths gives ratios of approximately **1.9347 wide** and **1.0015 tele**, consistent with the
source's rounded 1.93 and 1.0 values. Using the calculated EFLs instead gives **1.9346** and **1.0012**, respectively.

The dense zoom model recalculates D24 at each of its 65 stations. Between those stations, a 4,097-point scalar check
found a maximum interpolated image-plane discrepancy of **0.004488 mm**, corroborated by 129 near-axis engine states.
This bounds the tested interpolation error relative to the chosen inferred zoom law, not uncertainty in the factory cam.

### Finite-aperture sensitivity and transmission

Exact d-line ray tests used a 48-by-48 equal-area aimed-stop lattice at three zooms, three fields, and five stop offsets
within the unchanged 1.40 mm gap. All 45 cases had zero failed and zero unaimed rays. Aperture-blocked rays were counted
separately; successful aiming therefore does not imply unvignetted transmission.

At the selected midpoint stop, the full-field transmitted fractions were approximately **57.87% wide, 93.57% middle,
and 98.00% tele**. The field angles were **30.3°, 18.8°, and 11.65°** respectively. The patent's tele table gives a
23.3° full field, while Fig. 2 rounds its tele half-field to 11.6°; the tests use the table-derived half-field without
rewriting the different source rounding. These transmission fractions describe clipping of the sampled, stop-aimed
geometric rays. They are not measured relative illumination and exclude coating, absorption, and other radiometric losses.

The wide-angle result, approximately **58% transmission**, remains an important limitation of the drawing-based
aperture reconstruction. It is not evidence that the retail AiBORG had that exact vignetting. Changing the inferred rims
would change these results, while exact factory apertures remain unavailable.

At the midpoint stop, the calculated axial geometric RMS radii at the paraxial image plane were **8.94 / 9.20 / 8.79 µm**
at wide/middle/tele. A separate least-RMS plane search found axial shifts of **−0.0946 / −0.1472 / +0.2048 mm**, reducing
the sampled axial RMS to **1.54 / 1.51 / 2.60 µm**. Those shifts are sensitivity results only; the model retains its
independently calculated paraxial image planes. These are monochromatic geometric simulations, not measured resolution,
factory focus settings, or MTF.

Increasing the lattice from 24 to 48 samples per side changed the midpoint axial RMS by 0.14%–0.44%. Across the tested
cases, the largest RMS change was 4.02%, and the largest transmitted-fraction change was 1.504 percentage points.
Clipped-field results therefore retain percent-level sampling sensitivity. Independent replay of the terminal rays
verified the image-plane intersection and RMS arithmetic to numerical precision, but did not constitute a second
independent full-surface raytrace.

The validation supports an explicitly inferred infinity development model. It does not establish exact production
identity, finite-focus performance, physical shutter clearance, or completed browser/application integration.

## Sources / References

- **JP H03-39920 A**, 小型の高変倍ズームレンズ, 石坂 哲, applicant コニカ株式会社, published 1991-02-20.
  Original eight-page Japanese publication: front-page parties and dates; printed pp. 246–247 for design rationale;
  p. 247 for Example 1; p. 248 for its asphere and group ratios; Fig. 1 for the optical arrangement; Fig. 2 for the
  three f-numbers and field annotations. [Searchable patent record](https://patents.google.com/patent/JPH0339920A/en).
  Database romanization and modern assignee normalization are not substituted for the primary-source attribution.
- **Haruki Nakayama, Hironobu Mikoshiba, and Akira Ishisaka**, *Optical Systems and Lens Control Systems for Compact
  Zoom Cameras with a Zooming Ratio of 3*, **Konica Technical Report**, vol. 5, January 1992, pp. 110–114.
  Page 110 supplies the bilingual author line; pp. 111–112 identify AiBORG and explain the architecture; §3.1 and
  Fig. 3-1 document the mechanical arrangement; reference 1 on p. 114 cites JP H03-39920 A.
  [Official manufacturer PDF](https://research.konicaminolta.com/jp/pdf/technology_report/1992/pdf/19.pdf).
