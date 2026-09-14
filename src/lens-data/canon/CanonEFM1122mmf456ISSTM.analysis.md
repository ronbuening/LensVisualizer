## Patent Reference and Design Identification

**Patent:** US 2014/0098253 A1  
**Application Number:** 14/048,618  
**Priority:** JP 2012-225027, 2012-10-10  
**Filed:** 2013-10-08  
**Published:** 2014-04-10  
**Inventor:** Satoshi Maetaki  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** *Zoom Lens and Image-Pickup Apparatus*  
**Embodiment analyzed:** Numerical Example 3 / Embodiment 3

This entry uses Numerical Example 3 as the fixed production correlation for the **CANON EF-M 11-22mm f/4-5.6 IS STM**.
The patent does not identify the commercial product by name, so the relationship is a production-correlation inference
rather than a manufacturer-confirmed patent mapping. The correlation is nevertheless specific in several independent
respects:

1. Numerical Example 3 is an 11.00-22.00 mm zoom with published maximum f-numbers of 4.00, 4.63, and 5.60. Canon specifies
   the production lens as 11-22mm f/4-5.6.
2. The embodiment contains 12 glass elements in 9 air-separated groups, matching Canon's published 12-element/9-group
   construction.
3. The embodiment places three aspherical surfaces on two physical elements. Canon specifies two glass-molded aspherical
   elements in the production lens.
4. The embodiment contains one conspicuously high-Abbe positive element, L8 at $n_d=1.49700$, $\nu_d=81.5$. Its position
   is consistent with Canon's published statement that the production lens contains one UD element; the data file does
   not identify a specific vendor glass or claim a unique melt.
5. The patent places a single positive image-stabilizing lens LS immediately before the diaphragm and specifies its
   third lens unit as the rear axial focusing unit. In the authored nomenclature these are element L4/LS and zoom unit U3
   (element L10), respectively. Canon describes the production lens as having IS and a rear-focus system driven by a
   lead-screw-type STM.
6. Canon gives a 0.15 m closest focusing distance and 0.30× maximum magnification at 22 mm. Those production quantities
   provide an independent boundary check on the mechanism-constrained close-focus reconstruction used in the data file.
7. The patent gives a 51.16° half field at 11 mm, or 102.32° full field. Canon lists a 102°10′ diagonal angle of view for
   the production lens. The patent image height is 13.66 mm, corresponding to a 27.32 mm design image-circle diameter,
   consistent with the EF-M APS-C system field.

The timing is also compatible with a production design: the application claims priority from 2012-10-10, Canon marketed
this lens in July 2013, and the US publication followed in April 2014. These points establish the correlation used by this
entry, but they do not constitute an explicit statement by Canon that Example 3 is the production prescription.

The active prescription is transcribed at source scale. No patent radius, thickness, refractive index, Abbe number,
zoom spacing, or asphere coefficient is corrected. No uniform scale is applied ($s=1$).

## Optical Architecture

The design is a four-unit negative-positive-negative-positive zoom. To avoid confusion with the authored physical
element names L1-L12, the patent lens units L1-L4 are called U1-U4 here. Patent ¶0067 specifies U1 negative, U2 positive,
U3 negative, and U4 positive, with U3 serving as the focusing unit. Independent first-order calculation from the final
data file gives the following unit focal lengths:

| Unit | Elements | Computed focal length | Principal function in the model |
|---|---|---:|---|
| U1 | L1-L3 | −16.020916 mm | Front negative zoom unit |
| U2 | L4-L9 | +19.475817 mm | Main positive unit containing LS and the diaphragm |
| U3 | L10 | −38.066205 mm | Single-element rear-focus unit |
| U4 | L11-L12 | +105.582933 mm | Weak positive rear cemented unit |

This power distribution is characteristic of a compact wide-angle zoom with a negative lead group. Under the project's
strict classification rule, the lens is retrofocus at all three published zoom states because the source back focal
distance exceeds the source focal length: 11.04 > 11.00 mm, 17.16 > 15.50 mm, and 26.00 > 22.00 mm. It is not a
telephoto-form system under the separate $TL/EFL<1$ criterion.

U1 contains two negative elements followed by a biconvex positive element. U2 begins with the weak positive LS element, then the
aperture stop, followed by two cemented pairs separated by a positive singlet. U3 is the isolated negative focusing
meniscus. U4 is the final cemented positive-negative pair. The three cemented assemblies are C1 = L5+L6, C2 = L8+L9,
and C3 = L11+L12.

The cemented assemblies should not be confused with the standalone element powers. Computed as complete cemented systems,
C1 has a net focal length of −39.060144 mm, C2 is nearly afocal at +9333.134153 mm, and C3 is +105.582933 mm. C2's very
small net first-order power means that its contribution to U2 cannot be understood by adding the standalone L8 and L9
powers independently; the in-situ cemented interface is essential. U4 is exactly C3 in the authored grouping, so the
cemented-pair and unit focal lengths coincide there.

### Zoom kinematics

Patent ¶0032 states that, for Embodiments 1-4, U1 follows a concave locus while U2-U4 move toward the object during zooming
from wide to telephoto. Using the fixed image plane as the common reference removes the apparent ambiguity caused by the
changing front-surface position. The calculated unit-start locations are:

| State | U1 | U2 | U3 | U4 |
|---|---:|---:|---:|---:|
| 11 mm | −89.97 mm | −51.43 mm | −25.47 mm | −18.89 mm |
| 15.5 mm | −86.39 mm | −57.55 mm | −31.36 mm | −25.01 mm |
| 22 mm | −88.28 mm | −66.39 mm | −39.98 mm | −33.85 mm |

U1 first moves imageward and then reverses objectward between the middle and telephoto states. U2, U3, and U4 move
monotonically objectward over the three published zoom positions. The authored optical track is 89.97, 86.39, and
88.28 mm, respectively. Each is 0.02 mm shorter than the patent's reported overall length, a constant difference retained
as accumulated source rounding rather than removed by altering a spacing.

### Aperture and clear-aperture model

The diaphragm position is source-published, not inferred: the patent places it at source surface 9, between L4/LS and L5,
and the data file represents it as the single `STO` plane. The patent's 9.62 mm "light effective diameter" at that row is
not treated as a fixed physical iris diameter because doing so does not reproduce the published f-number sequence.
Accordingly, `nominalFno` follows the patent values 4.00, 4.63, and 5.60.

The authored base `STO.sd` is a modeled physical stop radius rather than a patent-published radius. Exact finite-ray
calibration gives equivalent wide/middle/tele stop radii of 4.701431, 4.774619, and 4.811568 mm. All other surface
semi-diameters are one-half of the patent's published light-effective diameters; they are not inferred from layout or
expanded to make rendering easier.

The active Example-3 sequence contains no sensor cover, filter, inactive dummy plane, flare-cutter plane, mirror, or
folded path. No omitted plate therefore requires an air-equivalent rear-spacing correction.

## Element-by-Element Analysis

### L1 — Element 1 — Neg. Meniscus (2× Asph)

$n_d=1.58313$, $\nu_d=59.4$. Glass: **583594 crown class (vendor unresolved)**. Standalone $f=-18.912756$ mm.

L1 is the large front negative meniscus of U1 and carries the two front aspherical surfaces, 1A and 2A. Its standalone
negative power is the largest single negative contribution in the front unit. The aspherical shaping allows the first
element to carry substantial ray bending at the large front aperture without requiring additional elements in front of
it. That correction role is an inference from the authored shape and position; the patent does not assign aberrations to
L1 individually.

The class label deliberately remains vendor-neutral. The patent provides only the d-line coordinate pair, and current
catalog coordinate comparisons admit plausible equivalents in more than one catalog family.

### L2 — Element 2 — Biconcave Negative

$n_d=1.77250$, $\nu_d=49.6$. Glass: **773496 lanthanum-flint class (vendor unresolved)**. Standalone
$f=-15.513571$ mm.

L2 is the second negative member of U1. Its biconcave form reinforces the negative front-unit power established by L1.
Because U1's computed net focal length is −16.020916 mm rather than the sum of standalone focal powers, L2's effect must be
read together with the finite air spaces and the positive L3 that follows.

### L3 — Element 3 — Biconvex Positive

$n_d=1.91082$, $\nu_d=35.3$. Glass: **911353 high-index lanthanum-flint class (vendor unresolved)**. Standalone
$f=+22.565979$ mm.

L3 is the positive rear element of U1. It partially offsets the two negative front elements while retaining a negative net
U1. Its high index permits appreciable positive surface power in a relatively compact meniscus. The data file makes no
vendor-specific Sellmeier assignment for this coordinate pair.

### L4 — Element 4 / LS — Positive Meniscus

$n_d=1.69680$, $\nu_d=55.5$. Glass: **697555 lanthanum-crown class (vendor unresolved)**. Standalone
$f=+73.412956$ mm.

Authored element L4 is the patent's single-lens image-stabilizing unit LS. It is a weak positive meniscus at the object side of U2, directly
before the diaphragm. Patent ¶0030 identifies LS as the transversely movable image-stabilizing part of the second unit,
and Example 3 gives its focal length as 73.41 mm.

The final data file models the centered optical state only. Example 3 supplies no stabilization decenter table, so no
lateral displacement amplitude is invented.

### L5 — Element 5 — Biconvex Positive

$n_d=1.51742$, $\nu_d=52.4$. Glass: **517524 crown class (vendor unresolved)**. Standalone $f=+13.087150$ mm.

L5 is the positive front member of cemented pair C1. Its rear surface is the cemented interface at source surface 11, where
the medium changes directly into L6. The data file therefore assigns that shared interface to the downstream element L6,
not to an artificial cement layer.

### L6 — Element 6 — Biconcave Negative

$n_d=1.88300$, $\nu_d=40.8$. Glass: **883408 lanthanum-dense-flint class (vendor unresolved)**. Standalone
$f=-8.307869$ mm.

L6 is the strong negative member of C1. Although L5 and L6 individually have short positive and negative focal lengths,
the actual cemented doublet has a computed net focal length of −39.060144 mm. C1 therefore behaves as a moderate negative
subassembly inside the otherwise positive U2.

### L7 — Element 7 — Biconvex Positive

$n_d=1.53172$, $\nu_d=48.8$. Glass: **532488 light-flint class (vendor unresolved)**. Standalone $f=+13.831127$ mm.

L7 is an air-spaced positive singlet between the two cemented pairs in U2. It supplies substantial positive standalone
power without participating in a cemented interface, helping the entire U2 remain positive despite the negative C1
subassembly.

### L8 — Element 8 / high-Abbe — Biconvex Positive

$n_d=1.49700$, $\nu_d=81.5$. Glass: **497815 high-Abbe ED/UD class (vendor unresolved)**. Standalone
$f=+12.550737$ mm.

L8 is the unique very-high-Abbe member of the prescription and the positive front member of C2. Canon states that the
production lens contains one UD element; the position and dispersion class of L8 are consistent with that statement in
the fixed Example-3 correlation. This is not a vendor or melt identification.

No `nC`, `nF`, `ng`, or `dPgF` values are authored for L8, so the data does not support an anomalous-partial-dispersion or
apochromatic claim. Its chromatic significance is limited here to the directly published high $\nu_d$ value and the
production-lens UD statement.

### L9 — Element 9 — Neg. Meniscus (1× Asph)

$n_d=1.85400$, $\nu_d=40.4$. Glass: **854404 low-Tg lanthanum class (vendor unresolved)**. Standalone
$f=-11.817033$ mm.

L9 is the negative rear member of C2, entered through the cemented interface at source surface 16. Its rear surface 17A is
aspherical. The complete L8+L9 cemented pair has a computed focal length of about +9333.13 mm, effectively near-afocal at
first order. That result shows that C2 should not be interpreted as a major source of U2's net positive power. Any further
statement that the pair is primarily an aberration-correction module is a modeling inference from this near-afocal result,
not explicit patent prose.

### L10 — Element 10 / Focus — Negative Meniscus

$n_d=1.83400$, $\nu_d=37.2$. Glass: **834372 lanthanum-flint class (vendor unresolved)**. Standalone
$f=-38.066205$ mm.

L10 is the sole element of U3, so its standalone focal length is also the focal length of the focusing unit. Patent ¶0067
states that the third lens unit moves along the optical axis during focusing. The finite-focus motion stored in the data
file is a constrained reconstruction of that single degree of freedom, not a published close-focus spacing table.

### L11 — Element 11 — Biconvex Positive

$n_d=1.62588$, $\nu_d=35.7$. Glass: **626357 flint class (vendor unresolved)**. Standalone $f=+16.849844$ mm.

L11 is the positive front member of the final cemented pair C3. It contributes strong standalone positive power before the
shared surface transitions directly into the negative L12 medium.

### L12 — Element 12 — Negative Meniscus

$n_d=1.83481$, $\nu_d=42.7$. Glass: **835427 lanthanum-dense-flint class (vendor unresolved)**. Standalone
$f=-19.412929$ mm.

L12 is the negative rear member of C3. The complete cemented pair is much weaker than either standalone member, with a net
focal length of +105.582933 mm. Because U4 contains only C3, this is also the computed first-order focal length of U4.
The paired positive and negative powers therefore form a weak positive rear unit rather than two independent strong
thin-lens contributions.

## Glass Identification and Selection

The patent supplies d-line refractive indices and Abbe numbers but no glass maker or catalog designations. Cross-checking
those coordinate pairs against current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA resources produces multiple
plausible cross-vendor equivalents for several elements. The final data therefore retains the vendor-neutral coordinate
classes below rather than attaching one vendor's Sellmeier coefficients to an underdetermined patent pair.

| Element | Authored glass class | $n_d$ | $\nu_d$ | Use in the design |
|---|---|---:|---:|---|
| L1 | 583594 crown class (vendor unresolved) | 1.58313 | 59.4 | Front double-asphere negative meniscus |
| L2 | 773496 lanthanum-flint class (vendor unresolved) | 1.77250 | 49.6 | Negative U1 element |
| L3 | 911353 high-index lanthanum-flint class (vendor unresolved) | 1.91082 | 35.3 | Positive rear member of U1 |
| L4 | 697555 lanthanum-crown class (vendor unresolved) | 1.69680 | 55.5 | Positive LS element |
| L5 | 517524 crown class (vendor unresolved) | 1.51742 | 52.4 | Positive C1 member |
| L6 | 883408 lanthanum-dense-flint class (vendor unresolved) | 1.88300 | 40.8 | Negative C1 member |
| L7 | 532488 light-flint class (vendor unresolved) | 1.53172 | 48.8 | Positive U2 singlet |
| L8 | 497815 high-Abbe ED/UD class (vendor unresolved) | 1.49700 | 81.5 | High-Abbe positive C2 member |
| L9 | 854404 low-Tg lanthanum class (vendor unresolved) | 1.85400 | 40.4 | Negative aspherical C2 member |
| L10 | 834372 lanthanum-flint class (vendor unresolved) | 1.83400 | 37.2 | Negative focus singlet |
| L11 | 626357 flint class (vendor unresolved) | 1.62588 | 35.7 | Positive C3 member |
| L12 | 835427 lanthanum-dense-flint class (vendor unresolved) | 1.83481 | 42.7 | Negative C3 member |

The palette spans moderate crowns, high-index lanthanum-rich classes, and one very-high-Abbe material. L8 is the only
member with $\nu_d$ above 80. The data file intentionally does not convert that observation into an APO label or an
anomalous-dispersion assertion. No line indices or partial-dispersion deviation are available in Numerical Example 3, and
no unique catalog Sellmeier match is adopted.

## Focus Mechanism

The focus model is **CONSTRAINED_RECONSTRUCTION**. The patent publishes the three infinity-focus zoom states and identifies its third lens unit (U3 here, authored
element L10) as the axial focusing unit, but it does not publish close-focus spacings. The data therefore preserves the published
infinity rows and reconstructs only the one motion that the source mechanism permits: translation of U3 while the image
plane and the neighboring units remain fixed at each zoom position.

Canon specifies a 0.15 m closest focusing distance for the production lens. Canon's camera documentation defines minimum
focusing distance from the focal-plane mark to the subject, so the reconstruction uses 150 mm from the image plane to the
object. The adjacent U3 gaps obey the exact mechanism constraint

$$D_{17}+D_{19}=7.08\ \mathrm{mm}$$

at every zoom state. The resulting authored endpoints are:

| Zoom state | $D_{17}$ infinity | $D_{17}$ at 0.15 m | $D_{19}$ infinity | $D_{19}$ at 0.15 m | U3 imageward travel | Paraxial magnification |
|---|---:|---:|---:|---:|---:|---:|
| 11 mm | 1.300000 | 2.749509 | 5.780000 | 4.330491 | 1.449509 mm | −0.15168× |
| 15.5 mm | 1.530000 | 3.710303 | 5.550000 | 3.369697 | 2.180303 mm | −0.20783× |
| 22 mm | 1.750000 | 5.216319 | 5.330000 | 1.863681 | 3.466319 mm | −0.31148× |

At 22 mm the reconstructed paraxial magnitude, 0.3115×, is close to Canon's rounded production specification of 0.30×.
That agreement is a cross-check on the one-DOF reconstruction, not evidence that the close-focus rows were published in
the patent. No other internal group is given an invented focus motion.

## Aspherical Surfaces

Numerical Example 3 marks source surfaces 1, 2, and 17 as aspherical. The data file labels them 1A, 2A, and 17A, preserving
the required `A` suffix while leaving their axial positions unchanged. They belong to L1 front/rear and L9 rear,
respectively.

Patent ¶0088 uses the standard project conic convention directly:

$$
z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+\cdots
$$

No $\kappa\rightarrow K$ conversion is needed. No scaling is applied, so $K$ and all polynomial coefficients are the
source values. The patent stops at the tenth-order term for these surfaces; `A12` and `A14` are zero-filled only to satisfy
the data representation.

| Surface | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ |
|---|---:|---:|---:|---:|---:|
| 1A | 0 | 2.2514e-5 | −6.3808e-8 | 4.2156e-11 | 1.4451e-13 |
| 2A | −0.47832 | 9.5239e-6 | −6.2835e-8 | 2.4304e-9 | −4.1669e-11 |
| 17A | 0 | 2.6963e-5 | 3.6258e-7 | −5.2493e-9 | 1.9541e-10 |

At the source-published semi-diameters, the polynomial departure from the underlying conic is +0.752818 mm at 1A,
−0.207946 mm at 2A, and +0.040120 mm at 17A. Surface 2A is especially important to interpret with the patent's conic
base: its 10.26 mm semi-diameter exceeds $|R|=8.89$ mm, so a spherical reference sag is not real there, while the actual
$K=-0.47832$ conic remains within its valid domain. A "departure from sphere" for 2A would therefore be undefined.

Canon states that the production lens contains two glass-molded aspherical elements. In the fixed correlation, the two
aspherical elements are L1 and L9. That correspondence is part of the production-identification inference; the patent
does not identify the commercial manufacturing process of those specific Example-3 elements.

## Chromatic Correction Strategy

The source does not provide wavelength-specific refractive indices for the elements, so chromatic interpretation must
remain at the d-line/Abbe level. The most distinctive material is L8 at $\nu_d=81.5$, paired in C2 with L9 at
$\nu_d=40.4$. Canon's production specification of one UD element is consistent with assigning the high-Abbe position to
L8 in the correlation.

C2's computed net focal length is +9333.134153 mm, so its two members largely cancel at first order despite their
very different dispersion coordinates. That makes the pair structurally well placed to influence chromatic and
higher-order correction without carrying much net paraxial power, but the specific aberration contribution is a modeling
inference rather than an explicit patent allocation.

No claim of apochromatic correction or anomalous partial dispersion is made. Such a claim would require direct line data,
`dPgF`, or a uniquely validated catalog Sellmeier resolution, none of which is present in the final data file.

## Image Stabilization

The patent's stabilizing singlet LS is authored as element L4, a positive meniscus with standalone $f=+73.412956$ mm. Patent ¶0030
states that the image-stabilizing unit moves perpendicular to the optical axis during blur correction, while ¶0067 places
LS on the object side of U2 with the aperture stop immediately behind it. The architecture therefore keeps the moving IS
mass to one relatively weak positive element near the pupil.

The final data file represents only the centered state. Numerical Example 3 supplies no stabilization decenter positions,
sensitivity table, or finite lateral travel, so none is reconstructed. Canon's production description independently
confirms that the commercial lens incorporates IS, but that manufacturer statement is used only as correlation evidence,
not as a substitute for missing patent motion data.

## Conditional Expressions

The patent develops the design around the focal length of LS, the wide-angle exit-pupil distance, the minimum separation
between U1 and the stop, the LS material dispersion, the wide-angle back focus, and the maximum image height. Example 3
satisfies all six principal conditions and also lies inside the tighter preferred ranges stated in the description.

| Condition | Example-3 value | Primary range | Result |
|---|---:|---|---|
| $f_{LS}/f_w$ | 6.673636 | $1.30<\cdot<10.00$ | Pass |
| $T_{Exp}/f_w$ | 3.321818 | $2.00<\cdot<5.00$ | Pass |
| $T_{Ls,min}/f_w$ | 0.707273 | $0.30<\cdot<1.00$ | Pass |
| $\nu_{d,LS}$ | 55.5 | $>35$ | Pass |
| $BF_w/f_w$ | 1.003636 | $<1.6$ | Pass |
| $BF_w/Y_{max}$ | 0.808199 | $<1.8$ | Pass |

The same values also satisfy the patent's preferred forms (1a)/(1b), (2a)/(2b), (3a)/(3b), (4a)/(4b), (5a)/(5b), and
(6a)/(6b). This consistency is useful because the conditional table is independent of the detailed surface-by-surface
prescription yet constrains the intended wide-angle, pupil, IS, and back-focus architecture.

## Verification Summary

Independent reduced-angle $[y,\nu=n u]$ tracing of the final data arrays agrees with a separately assembled ABCD matrix
to better than $10^{-11}$ elementwise. The resulting first-order quantities reproduce the patent's rounded Example-3
values within source precision:

| State | Computed EFL | Patent focal length | Computed Gaussian BFD | Patent BF |
|---|---:|---:|---:|---:|
| 11 mm | 11.003720 mm | 11.00 mm | 11.057127 mm | 11.04 mm |
| 15.5 mm | 15.510363 mm | 15.50 mm | 17.189098 mm | 17.16 mm |
| 22 mm | 22.013236 mm | 22.00 mm | 26.033424 mm | 26.00 mm |

The surface-by-surface Petzval sum, evaluated as $\phi/(n n')$ at each interface, is
$+0.006356500264\ \mathrm{mm}^{-1}$, corresponding to a reciprocal curvature scale of 157.319273 mm. The reciprocal is
reported only as a curvature scale; no sign convention for a physical best-focus surface is inferred from it.

The authored clear apertures also remain geometrically valid across all six defined zoom/focus endpoints. The
minimum shared-rim element edge thickness is 1.078173 mm, the maximum actual rim-slope angle is 60.881397° at 2A, and the
maximum shared-band air-gap sag-intrusion fraction is 0.873610 at 2A→3. No hidden render trim is required by the
independent geometry surrogate. These checks use the patent-derived clear apertures and the actual spherical/aspherical surface geometry.

The final prescription thus preserves the patent's infinity zoom states, the published f-number sequence, the published
clear-aperture envelopes, and the original asphere coefficients, while separating three explicit modeling choices from
source facts: the production-lens correlation, the physical stop radii implied by the modeled f-numbers, and the
mechanism-constrained 0.15 m focus reconstruction.

## Sources and References

- Satoshi Maetaki, **US 2014/0098253 A1, “Zoom Lens and Image-Pickup Apparatus,”** Canon Kabushiki Kaisha, published
  2014-04-10. Numerical Example 3; especially ¶0030-¶0033, ¶0067-¶0070, ¶0087-¶0089, the Example-3 prescription tables,
  and Tables 1-2.
- Canon Camera Museum, **EF-M11-22mm f/4-5.6 IS STM** — production date, 12 elements/9 groups, seven-blade circular
  diaphragm, 0.15 m closest focus, 0.30× maximum magnification at 22 mm, two glass-molded aspherical elements, one UD
  element, and rear-focus/lead-screw STM description:
  https://global.canon/en/c-museum/product/ef429.html
- Canon U.S.A., **EF-M 11-22mm f/4-5.6 IS STM Support / Specifications** — focal-length/aperture range, construction,
  diagonal angle of view, and minimum focus:
  https://www.usa.canon.com/support/p/ef-m-11-22mm-f-4-5-6-is-stm
- Canon Camera Museum, **EOS M** — EF-M mount and approximately 22.3 × 14.9 mm APS-C sensor reference:
  https://global.canon/en/c-museum/product/dslr812.html
- Canon product manual, **minimum focusing distance convention** — distance measured from the camera focal-plane mark to
  the subject:
  https://cam.start.canon/en/C015/manual/html/UG-02_BasicShooting_0090.html
- OHARA Optical Glass, current detailed data: https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf
- HOYA Optical Glass data downloads: https://www.hoya-opticalworld.com/english/datadownload/index.html
- SCHOTT Advanced Optics glass catalog/search: https://www.us.schott.com/shop/advanced-optics/en/search/
- HIKARI Optical Glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
- CDGM Optical Glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data
- SUMITA Optical Glass data: https://www.sumita-opt.co.jp/en/download/
