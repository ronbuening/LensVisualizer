## Patent Reference and Design Identification

**Patent:** JP 2021-86024 A\
**Application Number:** JP 2019-215441\
**Filed:** 2019-11-28\
**Published:** 2021-06-03\
**Inventor:** Yuichi Gyoda\
**Applicant:** Canon Inc.\
**Title:** Zoom lens and image capturing device having the same\
**Embodiment analyzed:** Numerical Example 2 (Example 2)

The prescription represented here is the unscaled Numerical Example 2 of JP 2021-86024 A. The patent describes a negative-lead zoom in which the first, second, third, and fourth functional lens groups have negative, positive, negative, and positive refractive power respectively; its Example 2 kinematics are specified in ¶0058–0060, and the numerical prescription is given in ¶0086. The production correlation to the **CANON RF-S 18-45mm f/4.5-6.3 IS STM** is treated as fixed for this dataset, but remains an author inference rather than a manufacturer statement that this patent is the production prescription.

Several independent features converge on that correlation:

1. Numerical Example 2 contains seven physical lenses, all air-spaced, matching Canon's published 7-element / 7-group construction.
2. L2 and L7 are the only aspherical physical elements, with two aspherical surfaces each. Canon specifies two aspherical elements for the production lens.
3. The patent's infinity-focus focal-length stations are 18.53, 30.00, and 43.65 mm, while the production lens is marketed as 18–45 mm.
4. The patent gives maximum f-numbers of 4.56, 5.48, and 6.50 across those design stations; Canon markets the lens as f/4.5–6.3. The design and marketing values are therefore kept separate rather than forced into agreement.
5. Example 2 assigns image stabilization to the front part of B2, specifically the fourth physical lens, while the production lens has in-lens optical stabilization.
6. The patent's 12.40–13.66 mm image heights are consistent with APS-C coverage, and Canon identifies the production optic as an RF-S lens for APS-C EOS R bodies.
7. The patent was filed in 2019 and published in 2021; Canon records the production lens as marketed in June 2022.

No uniform scale factor is applied. Scaling the 18.53 mm wide state to the marketed 18 mm endpoint and the 43.65 mm tele state to the marketed 45 mm endpoint would require different factors, so the patent prescription remains at native dimensions. Consequently, the radii, spacings, semi-diameters, image-plane coordinates, and aspherical coefficients are not rescaled or transformed.

The selected numerical example contains no sensor cover glass, low-pass filter, infrared-cut plate, inactive dummy plane, or flare-cutter plane. The patent notes generally that a substantially powerless plate may be placed behind the lens (¶0021), but no such plate occurs in Numerical Example 2. The modeled rear spacing is therefore the patent's published air-equivalent back focus from the final optical surface to the image plane.

## Optical Architecture

Numerical Example 2 is a compact negative-lead zoom with four **functional motion groups** but seven **physical air-spaced lens groups**. The distinction is important: the data file's `elementCount` and `groupCount` are both seven because each physical lens is separated by air, while the diagram annotations B1–B4 follow the patent's moving functional groups.

The power sequence is:

- **B1:** negative, containing L1–L3.
- **B2:** positive, containing L4–L5 with the aperture stop between them; L4 is the stabilization subgroup B2A.
- **B3:** negative, the single-lens focus group L6.
- **B4:** positive, the single-lens rear group L7.

The patent identifies the design as a negative-lead type and explains the general motivation for that architecture in ¶0026–0028: a negative front group supports a smaller front diameter, B2 acts as the principal variator, and a compact negative B3 is used for focusing. Example 2 adds a positive B4 behind the focus group.

At infinity focus, the published zoom stations are 18.53, 30.00, and 43.65 mm. From wide to tele, B1 moves net image-side, while B2, B3, and B4 move object-side. The intermediate station reveals a small reversal of B1 between 30.00 and 43.65 mm: its image-plane-normalized station moves 7.89 mm image-side from wide to middle and then 0.18 mm object-side from middle to tele. This does not contradict the patent's endpoint statement in ¶0059 that B1 moves toward the image side from wide to tele; it refines the path using the published midpoint.

B2 and B4 follow the same zoom trajectory, as stated explicitly in ¶0059. B3 travels on a slightly different path because it is also the focus group. The published infinity-focus gaps adjacent to B3 preserve `d11 + d13 = 10.05 mm` at every zoom station, consistent with a single translating B3 assembly between B2 and B4.

The aperture stop is not inferred: the patent explicitly places the stop at surface 9. In the LensVisualizer data it is labeled `STO`, with `sd = 4.58 mm`, exactly half of the patent's 9.16 mm effective diameter. Independent pupil analysis shows that treating 9.16 mm as an exact hard-iris diameter would not reproduce the printed design f-numbers. The data therefore preserves that value as the published effective clear-aperture envelope while `nominalFno` is governed by the patent's design values `[4.56, 5.48, 6.50]`.

All semi-diameters are direct patent values: each is one-half of the printed effective diameter. No semi-diameter is inferred from ray bundles or adjusted to conceal invalid geometry.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.63854, νd = 55.4. Glass: 639554/639555 crown class (vendor unresolved). f = −35.03 mm.**

L1 is the front negative element of B1. Its standalone negative power is substantially stronger than the completed B1 group's net power, because the following L2 and L3 redistribute the first group's total power. The patent's general discussion of the negative-lead architecture states that putting a negative lens first helps reduce the diameter of the most object-side lens (¶0027).

The material is kept at a catalog-coordinate class rather than assigned to a specific vendor. Multiple authoritative catalogs contain close 639-55x families, but the patent names no glass manufacturer and does not provide composition or melt identification.

### L2 — Biconcave Negative, Double Aspherical

**nd = 1.53110, νd = 55.9. Glass: Unmatched (nd=1.53110, νd=55.9; vendor unresolved). f = −60.57 mm.**

L2 is the second negative lens in B1 and carries the aspherical surfaces `3A` and `4A`. Its two aspheres are the most strongly departing aspherical pair in the design at the published clear aperture. The patent generally identifies a first-group aspherical lens as useful for suppressing wide-end field curvature and astigmatic difference (¶0050), which is consistent with L2's location in the strongly negative front group.

The patent also says that a first-group aspherical lens may preferably be resin (¶0050), but it does not identify Numerical Example 2's `nd = 1.53110`, `νd = 55.9` material as resin, nor does it identify the same coordinate pair used again in L7. The data therefore does not label either occurrence as a specific polymer or glass composition.

### L3 — Positive Meniscus

**nd = 1.84666, νd = 23.8. Glass: 847238 high-index flint class (vendor unresolved). f = +74.25 mm.**

L3 is the positive rear element of B1. The patent requires B1 to contain at least one positive lens and explains that this arrangement is used to control changes in lateral and axial chromatic aberration as the first group moves during zooming (¶0027). L3 is the only positive element in this three-lens functional group and therefore provides the positive component of that front-group power balance.

Its standalone focal length is positive, while the complete B1 group remains negative at approximately −31.01 mm. The 847238 label is a cross-vendor coordinate class rather than a vendor-specific assignment; the same `nd`/`νd` pair is also used for L6.

### L4 — Biconvex Positive, Stabilization Subgroup B2A

**nd = 1.69680, νd = 55.5. Glass: 697555 lanthanum-crown class (vendor unresolved). f = +48.63 mm.**

L4 is the first positive lens of B2 and the patent-designated stabilization subgroup B2A. Example 2 states that this fourth physical lens is displaced in a direction containing a component perpendicular to the optical axis for image stabilization (¶0060).

B2 is the principal positive variator. The patent's general design discussion favors a second group composed only of positive lenses so that the group can carry strong positive power without requiring additional compensating negative power and thickness (¶0028). L4 and L5 together produce a B2 focal length of approximately +16.38 mm in the published group calculation; this group power must not be confused with either lens's standalone focal length.

### L5 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum optical-glass class (vendor unresolved). f = +23.39 mm.**

L5 is the rear positive element of B2, positioned immediately behind the aperture stop. Its standalone positive power is stronger than L4's, but the optical behavior of B2 is determined by the two separated positive elements, their internal spacings, and the stop position rather than by simple addition of standalone powers.

The 773496 designation is retained as a coordinate class. Several major catalog vendors publish close or effectively coincident glasses in this region, but Numerical Example 2 does not establish which, if any, was intended.

### L6 — Biconcave Negative Focus Lens

**nd = 1.84666, νd = 23.8. Glass: 847238 high-index flint class (vendor unresolved). f = −23.06 mm.**

L6 is both the single physical element and the complete functional group B3. Because B3 contains only this lens, its standalone and group focal lengths coincide at the source precision. The patent identifies B3 as the focus group and states that it moves toward the image side when focusing from infinity toward a nearer object (¶0060).

This is a useful case where standalone power and in-situ function can be separated cleanly. The lens is intrinsically negative, but its focusing effect depends on translation within the complete zoom system and on the neighboring B2 and B4 groups. No finite-focus B3 position is authored because Numerical Example 2 supplies no finite-object spacing table.

### L7 — Positive Meniscus, Double Aspherical

**nd = 1.53110, νd = 55.9. Glass: Unmatched (nd=1.53110, νd=55.9; vendor unresolved). f = +59.61 mm.**

L7 is the single physical element of B4 and carries the rear aspherical surfaces `14A` and `15A`. Because B4 contains only L7, its standalone focal length and the patent's B4 group focal length coincide at approximately +59.61 mm.

The aspheric departures on L7 are much smaller at the published effective radii than those on L2. This rear positive element therefore provides a comparatively mild aspherical shaping contribution in the final group rather than the large peripheral departure seen in the front double-asphere. As with L2, the `1.53110 / 55.9` material is deliberately left unmatched rather than being assigned to a named resin or catalog glass without source support.

## Glass Identification / Selection

The patent supplies d-line `nd` and `νd` values but no vendor names, melt codes, C/F/g line indices, partial-dispersion data, or Sellmeier coefficients. The data file therefore uses conservative class labels or explicit `Unmatched (...)` annotations.

| Data-file glass annotation | nd | νd | Elements | Identification status |
|---|---:|---:|---|---|
| 639554/639555 crown class (vendor unresolved) | 1.63854 | 55.4 | L1 | Cross-vendor coordinate family; vendor not established |
| Unmatched (nd=1.53110, νd=55.9; vendor unresolved) | 1.53110 | 55.9 | L2, L7 | No defensible exact six-vendor catalog identity |
| 847238 high-index flint class (vendor unresolved) | 1.84666 | 23.8 | L3, L6 | Strong cross-vendor coordinate family; vendor not established |
| 697555 lanthanum-crown class (vendor unresolved) | 1.69680 | 55.5 | L4 | Strong cross-vendor coordinate family; vendor not established |
| 773496 lanthanum optical-glass class (vendor unresolved) | 1.77250 | 49.6 | L5 | Strong cross-vendor coordinate family; vendor not established |

The catalog audit found close equivalents for four of the five coordinate pairs across OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita. Those matches support class-level labeling but not a claim that Canon used any particular catalog vendor. The `1.53110 / 55.9` pair remains explicitly unmatched.

No element carries `nC`, `nF`, `ng`, or `dPgF` in the data file because the patent does not publish those quantities and no vendor identity is sufficiently established to backfill them as source facts. Accordingly, the analysis makes no APO or anomalous-partial-dispersion claim. The chromatic strategy that can be stated from the patent is limited to its d-line/Abbe framework and the patent's explanation that a positive lens in B1 helps manage chromatic variation during zooming.

## Focus Mechanism

The focus architecture is an internal single-group mechanism using B3/L6. Example 2 states that B3 moves image-side when focusing from infinity toward a near object (¶0060). The neighboring infinity-focus spacings also confirm the expected single-group topology: B3 lies between variable gaps `D11` and `D13`, whose sum is conserved across the three published zoom stations.

The focus status is **NO_INTERNAL_RECONSTRUCTION**. Numerical Example 2 publishes no finite-object spacing table, no close-focus B3 travel, and no set of object distances or magnifications sufficient to determine a unique internal focus model at all zoom positions. The data file therefore uses identical infinity and close members for every `var` pair; the viewer does not invent B3 motion.

`closeFocusM: 0.2` is production metadata only. Canon specifies an AF minimum focusing distance of 0.20 m at 18 mm, while the published AF maximum magnification of 0.16× is specified at 45 mm. Those two marketing values are not treated as one common conjugate and are not used to create a synthetic close-focus spacing table.

Canon identifies the production focusing drive as lead-screw STM. That mechanical product specification is not used to infer any missing optical travel in the patent model.

## Aspherical Surfaces

The design has four aspherical surfaces on two physical elements: `3A` and `4A` on L2, and `14A` and `15A` on L7. Paragraphs 0082–0084 define the asphere directly in the standard conic-constant form:

$$
X(H)=\frac{H^2/R}{1+\sqrt{1-(1+K)(H/R)^2}}+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}+\cdots
$$

The patent therefore uses the ordinary conic constant `K`; no κ-to-`K` conversion is required. All four surfaces use `K = 0`, so the conic base is spherical and the departure is carried by the even-order polynomial terms.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 3A | 0 | −1.41463e−4 | +7.66013e−7 | −1.27190e−9 | −1.10963e−11 |
| 4A | 0 | −1.69055e−4 | +8.63631e−7 | −2.53183e−9 | −7.27576e−12 |
| 14A | 0 | −9.44164e−6 | +5.54551e−7 | −1.94972e−8 | +2.35602e−10 |
| 15A | 0 | +3.12388e−5 | +2.31800e−7 | 0 | 0 |

At the patent's published effective semi-diameters, the computed polynomial departures from the `K = 0` base conics are approximately −0.83110 mm on `3A`, −1.00802 mm on `4A`, −0.003396 mm on `14A`, and +0.041880 mm on `15A`. These values quantify the much stronger peripheral reshaping of L2 compared with L7.

No uniform prescription scaling is applied, so the coefficients above are the patent values without dimensional transformation. In particular, no `A_p / s^(p-1)` scaling has been performed.

The parsed patent text wraps three A10 exponents across lines. Inspection of the rendered Numerical Example 2 page resolves them as `3A A10 = −1.10963e−11`, `4A A10 = −7.27576e−12`, and `14A A10 = +2.35602e−10`. These are treated as source-reading resolutions, not corrections to the patent. No radius, spacing, index, Abbe value, or asphere coefficient is otherwise corrected.

## Conditional Expressions

The patent defines six principal conditions in ¶0029–0045, with progressively narrower preferred and further-preferred ranges. Independent calculation from the final prescription gives the following Example 2 values.

| Condition | Computed value | Principal range | Preferred range | Further-preferred range | Result |
|---|---:|---|---|---|---|
| (1) `Nd_G1` | 1.63854 | 1.40 < x < 1.80 | 1.43 < x < 1.79 | 1.45 < x < 1.78 | Pass |
| (2) `SF_B3n` | −0.8983823 | −5.0 < x < 0.50 | −4.5 < x < 0.30 | −4.0 < x < 0.10 | Pass |
| (3) `|f1|/fw` | 1.6735886 | 1.0 < x < 3.0 | 1.25 < x < 2.6 | 1.5 < x < 2.2 | Pass |
| (4) `f2/fw` | 0.8840110 | 0.2 < x < 5.0 | 0.4 < x < 3.0 | 0.5 < x < 2.0 | Pass |
| (5) `f3/f1` | 0.7434950 | 0.1 < x < 5.0 | 0.2 < x < 3.5 | 0.3 < x < 2.0 | Pass |
| (6) `νd_B3n` | 23.8 | 18 < x < 36 | 19 < x < 34 | 20 < x < 32 | Pass |

For condition (2), the shape factor is computed from L6 as `(R2 + R1) / (R2 − R1)`. Condition (6) uses the surface-prescription value `νd = 23.8`; the patent's summary Table 1 prints the same quantity at the slightly finer value 23.78. Both source precisions are preserved rather than reconciled by altering the element data.

## Image Stabilization

Example 2 identifies the object-side part of B2—physical lens L4, subgroup B2A—as the image-stabilization mover. The patent states that this subgroup is displaced in a direction containing a component perpendicular to the optical axis to correct image displacement (¶0060).

Canon independently specifies in-lens optical image stabilization for the RF-S 18-45mm f/4.5-6.3 IS STM, rated at four stops in the production specification. This architectural agreement supports the production correlation, but it is not evidence that Canon has publicly confirmed Numerical Example 2 as the production formula.

The selected patent example does not publish a numerical transverse decenter range for B2A, so the data file contains no invented IS displacement amplitude. The ordinary centered prescription remains the modeled optical state.

## Verification Summary

The final TypeScript prescription was independently evaluated with sequential height/reduced-angle tracing and a separately assembled 2×2 ABCD matrix. The two methods agree to machine precision at the three authored zoom stations.

| State | Patent focal length (mm) | Computed EFL (mm) | Patent BF (mm) | Computed BFD (mm) |
|---|---:|---:|---:|---:|
| Wide | 18.53 | 18.529406 | 28.48 | 28.478223 |
| Middle | 30.00 | 29.996627 | 38.21 | 38.210406 |
| Tele | 43.65 | 43.626750 | 47.77 | 47.763980 |

The differences remain within source-precision tolerances for the printed radii, spacings, and rounded summary values. The surface-by-surface Petzval sum, using `φ/(n·n′)`, is +0.00213350498 mm⁻¹; its reciprocal is 468.7123 mm. The reciprocal is not interpreted here as an exact physical field-curvature radius without additional sign and reference conventions.

Geometry is checked at every authored zoom state using the patent semi-diameters. All seven elements retain positive edge thickness, all shared-band cross-gaps remain clear under the current project policy, and the largest computed rim-slope angle is 57.159°. Exact meridional on-axis and off-axis containment also remains positive at all three zoom stations; the minimum sampled clearance is 0.244 mm at the middle state.

The stop-envelope interpretation is likewise numerically supported. The patent's 9.16 mm stop effective diameter would imply f-numbers of approximately 4.461, 5.409, and 6.463 if treated as an exact hard stop. Matching the patent design f-numbers instead requires physical stop diameters of approximately 8.961, 9.041, and 9.108 mm, all within the published 9.16 mm effective envelope. This is why the data uses the published design f-number array for aperture modeling while retaining the patent stop semi-diameter unchanged.

## Sources / References

1. **JP 2021-86024 A**, Canon Inc., *Zoom lens and image capturing device having the same*, filed 2019-11-28, published 2021-06-03. Numerical Example 2: ¶0086; Example-2 kinematics: ¶0058–0060; numerical conventions: ¶0080–0084. [Google Patents](https://patents.google.com/patent/JP2021086024A/en)
2. **Canon Camera Museum**, *RF-S18-45mm F4.5-6.3 IS STM*. Production introduction date, 7-element / 7-group construction, seven diaphragm blades, minimum focusing distance, maximum magnification, dimensions, and weight. https://global.canon/en/c-museum/product/rf514.html
3. **Canon U.S.A.**, *RF-S18-45mm F4.5-6.3 IS STM — Technical Specifications*. RF mount, 18–45 mm marketed focal range, 7 elements in 7 groups, two aspherical elements, four-stop in-lens IS, lead-screw STM, AF MFD 0.20 m at 18 mm, and AF maximum magnification 0.16× at 45 mm. https://www.usa.canon.com/support/p/rf-s18-45mm-f4-5-6-3-is-stm
4. **OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita optical-glass catalogs**, used for cross-vendor `nd`/`νd` coordinate comparison. The patent itself does not identify a glass vendor; class-level or `Unmatched (...)` annotations are therefore used in the data file rather than speculative vendor names.
