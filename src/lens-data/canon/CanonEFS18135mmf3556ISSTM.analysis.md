## Patent Reference and Design Identification

**Patent:** US 2013/0088622 A1\
**Application Number:** 13/613,481\
**Priority:** JP 2011-220910, 5 October 2011\
**Filed:** 13 September 2012\
**Published:** 11 April 2013\
**Inventor:** Shigenobu Sugita\
**Assignee:** Canon Inc.\
**Title:** *Zoom Lens and Image Pickup Apparatus Having the Same*\
**Embodiment analyzed:** Fourth exemplary embodiment / Numerical Example 4 (Fig. 13; ¶¶0037, 0088–0090, 0099)

The prescription represented here is the fixed project correlation for the **CANON EF-S 18–135mm f/3.5–5.6 IS STM**. The production identity and marketed specifications are kept distinct from the patent design quantities. Canon lists the production lens as an EF-S zoom marketed in June 2012, with 18–135 mm focal length, f/3.5–5.6 maximum aperture, 16 elements in 12 groups, seven diaphragm blades, 0.39 m closest focus, 0.28× maximum magnification, a six-group zoom, one UD element, one high-precision aspherical element, STM focusing, and image stabilization. The patent's Numerical Example 4 instead publishes 18.60, 50.99, and 130.48 mm zoom stations at f/3.59, f/4.88, and f/5.97, with 16 physical elements arranged as 11 air-separated construction groups and six moving optical units. These are not silently reconciled.

The correlation rests on several convergent features rather than on a manufacturer statement that identifies the patent:

1. Numerical Example 4 is a roughly 7× positive-lead zoom whose focal-length and aperture ranges closely bracket the production 18–135 mm f/3.5–5.6 specification (¶0037; ¶0099).
2. Both the production lens and the modeled example contain 16 physical elements. Canon's product specification says 12 groups, whereas the patent prescription has 11 air-separated construction groups; this group-count mismatch remains an explicit limitation of the correlation.
3. Canon identifies one UD element and one aspherical element. The patent contains one very-high-Abbe element (`nd = 1.49700`, `νd = 81.5`) and one aspherical surface, `27A`. The correspondence of those particular patent members to the production UD/aspherical elements is a project correlation inference, not manufacturer confirmation.
4. Canon's production block diagram identifies an IS unit, and the patent explicitly makes the negative L5B subunit transversely movable for image stabilization (¶¶0089–0090).
5. Canon specifies 0.39 m minimum focus and 0.28× maximum magnification. The patent publishes no close-focus spacing table, but the constrained L4-only reconstruction used by the data file reaches 0.39 m and gives a verified telephoto paraxial magnification magnitude of 0.278994, consistent with the rounded production figure.
6. The priority date precedes the June 2012 product release, while the US publication followed in April 2013; the chronology is compatible with a production-era design.

The data file retains the patent at its native scale. No uniform scaling is applied: the marketed wide endpoint would require a scale of `18/18.60`, whereas the marketed telephoto endpoint would require `135/130.48`; those factors move in opposite directions. Consequently, the aspherical coefficients are also retained exactly as published and require no scale transformation.

A source-normalization issue affects axial length. Patent surface 1 is explicitly declared a design dummy that “does not constitute a zoom lens” (¶0095), so it is omitted from the sequential model. The published “total lens length” is consistent, to the 0.01 mm precision of the spacing table, with inclusion of the dummy's 1.50 mm interval: subtracting 1.50 mm from the three published totals leaves values 0.01 mm longer than the independently summed active tracks. The data therefore uses the physical first lens surface as the active front reference without adding the dummy to the sequential model.

## Optical Architecture

Numerical Example 4 is a six-unit positive-lead zoom with the moving-unit power sequence **P–N–P–N–P–P** (¶0088). In the data file the units are labeled L1 through L6. L5 is subdivided into positive L5A and negative L5B; L5B is the image-stabilizing subunit. The aperture stop lies between L4 and L5A, corresponding to patent surface 20. Figure 13 shows the same overall arrangement.

The isolated paraxial focal lengths of the moving units, computed from the final data arrays in air, are:

| Unit | Isolated focal length | Principal function in the model |
|---|---:|---|
| L1 | +88.552 mm | Positive front collector / first zoom unit |
| L2 | −16.735 mm | Strong negative variator unit |
| L3 | +40.313 mm | Positive compensating unit |
| L4 | −31.851 mm | Negative compensating unit and reconstructed focus unit |
| L5 | +34.842 mm | Positive rear unit containing the IS subunit |
| L6 | +38.034 mm | Final positive relay unit |

These isolated focal lengths describe the units removed from the assembled zoom and placed in air. They are not additive power “contributions” to the in-situ system. The assembled lens changes effective focal length through the changing separations among all six units.

All six units move during zooming. Relative to the fixed image plane, the verified wide-to-telephoto motions are:

| Unit | Wide→Middle (mm) | Middle→Tele (mm) | Wide→Tele (mm) |
|---|---:|---:|---:|
| L1 | −20.99 | −28.45 | −49.44 |
| L2 | +0.70 | −8.94 | −8.24 |
| L3 | −17.46 | −14.72 | −32.18 |
| L4 | −16.02 | −10.96 | −26.98 |
| L5 | −17.46 | −14.72 | −32.18 |
| L6 | −20.29 | −15.81 | −36.10 |

Negative values in this table mean motion toward the object when positions are measured from a fixed image plane. L2 is the only reversing unit: it first moves 0.70 mm imageward from wide to middle, then reverses 8.94 mm objectward toward telephoto. L3 and L5 have identical movement, consistent with the patent's statement that those units may be driven simultaneously in the six-unit form (¶0062). L6's net −36.10 mm motion reproduces the patent's Table 1 value `mN = −36.100`.

The wide, middle, and telephoto patent stations are stored at 18.60, 50.99, and 130.48 mm. Independent paraxial computation from the data arrays gives 18.599255, 51.026653, and 130.546393 mm. The difference is attributable to the source table's rounded refractive indices, radii, and spacings rather than to rescaling.

The stop requires a modeling distinction. Patent surface 20 has a listed “effective diameter” of 14.52 mm, but treating that number as the literal physical iris does not reproduce the published f-numbers. The authored `STO` radius is therefore 7.123822 mm, inferred from the wide-state f/3.59 entrance pupil. The source 14.52 mm value is therefore retained as the patent's effective-diameter metadata; the model does not assert that the patent itself defines it as a mechanical iris or a clearance diameter.

Semi-diameters otherwise use one-half of the patent effective diameters, with one narrow validator-driven exception. Surface 9 is modeled at 11.2826 mm rather than the source 11.3000 mm so that the facing surfaces 8 and 9 satisfy the current 0.90 shared-gap sag criterion. The 0.0174 mm radial reduction is a rendering/validation model trim, not a correction to the patent prescription.

## Element-by-Element Analysis

The focal lengths given below are independently computed **standalone element focal lengths in air** from the final data file. For cemented pairs, the subsection also gives the isolated net focal length of the cemented assembly. Neither quantity should be read as the element's in-situ contribution to the effective focal length of the complete zoom.

### C1 — E1 + E2, Front Cemented Pair in L1

**E1:** `nd = 1.84666`, `νd = 23.8`. Glass: `847238 — dense flint class`. `f = −165.362 mm`.\
**E2:** `nd = 1.49700`, `νd = 81.5`. Glass: `497816 — ED fluorophosphate class`. `f = +116.091 mm`.

E1 is a negative meniscus and E2 is a biconvex positive element. Cemented together, C1 has an isolated net focal length of **+398.533 mm**. The pair is therefore weakly positive as a cemented assembly even though its two members have opposite standalone powers.

The very large Abbe-number contrast between E1 (`νd = 23.8`) and E2 (`νd = 81.5`) supplies strong first-order chromatic balancing leverage in the front unit. That statement is limited to the published d-line/Abbe coordinates; no anomalous partial-dispersion or apochromatic behavior is claimed because the patent does not provide `nC`, `nF`, `ng`, or `dPgF` for either element.

Under the fixed production correlation, E2 is the most plausible counterpart to Canon's marketed UD member because it is the sole patent element with an Abbe number above 80. This remains an inference from the prescription and manufacturer block diagram, not a supplier or material identification.

### E3 — Positive Meniscus Completing L1

**E3:** `nd = 1.60311`, `νd = 60.6`. Glass: `603607 — crown class`. `f = +111.975 mm`.

E3 is an air-separated positive meniscus following C1. Together with the weakly positive C1 pair it produces the overall positive L1 power of +88.552 mm. Its comparatively moderate index and high Abbe number contrast with the dense-flint E1 member ahead of it, but the data do not support a stronger claim about partial dispersion.

The first unit is physically the largest part of the prescription and moves furthest objectward during zooming, with a verified wide-to-telephoto displacement of 49.44 mm relative to the fixed image plane.

### E4 — Strong Negative Meniscus, Front of L2

**E4:** `nd = 1.83481`, `νd = 42.7`. Glass: `835427 — lanthanum crown class`. `f = −20.292 mm`.

E4 is a strong negative meniscus and the first member of L2. Its isolated power is substantially stronger than the net power of the complete L2 unit because later members partially compensate it. The high refractive index permits strong curvature-driven power in a relatively thin singlet.

L2 is the design's principal negative variator. Its non-monotonic zoom trajectory—slight imageward motion to the middle station followed by objectward reversal—is one of the kinematic features that requires all three published zoom stations to be retained.

### E5 — Biconcave Negative Member of L2

**E5:** `nd = 1.77250`, `νd = 49.6`. Glass: `773496 — lanthanum crown class`. `f = −33.612 mm`.

E5 is an air-separated biconcave negative singlet. It reinforces the negative action begun by E4 before the rear cemented pair of L2. Because both E4 and E5 are individually negative, the later positive net action of C2 is important to understanding why the entire unit is negative but not as strong as either simple front-member description might suggest.

The source effective diameters at the facing surfaces 8 and 9 create the tightest shared-gap geometry in the rendered model. The data therefore trims the semi-diameter of surface 9 by 0.0174 mm as described above; the radius, axial spacing, and glass values remain exactly those of the patent.

### C2 — E6 + E7, Rear Cemented Pair of L2

**E6:** `nd = 1.84666`, `νd = 23.8`. Glass: `847238 — dense flint class`. `f = +24.157 mm`.\
**E7:** `nd = 1.77250`, `νd = 49.6`. Glass: `773496 — lanthanum crown class`. `f = −46.647 mm`.

C2 has an isolated cemented focal length of **+45.435 mm**. It is therefore a positive cemented subassembly despite containing a negative rear element. In combination with E4 and E5, the complete L2 unit remains strongly negative at −16.735 mm.

The repeated use of the `847238` and `773496` coordinate classes in this pair creates another large Abbe-number contrast within a cemented interface. The analysis treats this as ordinary achromatizing structure at the Abbe level only; no vendor-specific dispersion curve is attached to either class in the data file.

### E8 — L3 Positive Singlet

**E8:** `nd = 1.80518`, `νd = 25.4`. Glass: `805254 — dense flint class`. `f = +40.313 mm`.

E8 is a biconvex positive singlet and constitutes the entire L3 moving unit. Its standalone focal length is therefore also the isolated L3 focal length. The unit moves monotonically objectward during zooming and shares exactly the same wide-to-middle and middle-to-telephoto motion as L5 in the authored three-station model.

Although E8 uses a low-Abbe dense-flint-class coordinate, no specific vendor glass is asserted. Its role in the data is defined by the patent coordinates and paraxial power, not by a catalog material name.

### E9 — L4 Negative Singlet and Reconstructed Focus Unit

**E9:** `nd = 1.90366`, `νd = 31.3`. Glass: `904313 — high-index lanthanum class`. `f = −31.851 mm`.

E9 is a thin biconcave negative singlet and constitutes the entire L4 moving unit. Its high index allows the strong negative power needed in a 0.70 mm center thickness. The patent describes L4 as the negative fourth zoom unit in the six-unit P–N–P–N–P–P sequence (¶0088).

The data file also assigns L4 the axial focus motion, but this is **not** a patent-published spacing state. The assignment is a constrained reconstruction discussed in the Focus Mechanism section. The patent supplies only an objectward focus arrow in the L3/L4 region; L4 is selected by the independently solved movement hypotheses, the numerical power signs, positive adjacent-gap constraints at all three zoom stations, and the production 0.39 m / 0.28× constraints.

### E10 — Front Positive Member of L5A

**E10:** `nd = 1.60311`, `νd = 60.6`. Glass: `603607 — crown class`. `f = +29.605 mm`.

E10 is a biconvex positive singlet at the front of L5A, immediately behind the aperture stop. It supplies most of the direct positive action at the front of the fifth unit before the C3 cemented pair.

L5A as a whole has an isolated focal length of +25.351 mm. It precedes the negative, transversely movable L5B subunit, so L5 retains positive net power while still placing the IS subunit in the rear portion of the fifth unit as required by the patent (¶0089).

### C3 — E11 + E12, Rear Cemented Pair of L5A

**E11:** `nd = 1.60311`, `νd = 60.6`. Glass: `603607 — crown class`. `f = +19.866 mm`.\
**E12:** `nd = 1.84666`, `νd = 23.8`. Glass: `847238 — dense flint class`. `f = −19.926 mm`.

C3 is nearly balanced in its individual positive and negative standalone element powers, yet the cemented assembly has a weak isolated positive focal length of **+247.912 mm**. The complete L5A subunit remains much more strongly positive because E10 precedes it.

The repeated high-/low-Abbe pairing again provides ordinary chromatic balancing leverage. Because the data intentionally omits supplier-specific line indices, the analysis does not infer anomalous-dispersion behavior from the class labels.

### C4 — E13 + E14, Negative L5B Image-Stabilizing Subunit

**E13:** `nd = 1.74950`, `νd = 35.3`. Glass: `750353 — lanthanum flint/crown transition class`. `f = −15.126 mm`.\
**E14:** `nd = 1.84666`, `νd = 23.8`. Glass: `847238 — dense flint class`. `f = +23.171 mm`.

C4 is the L5B subunit. Its isolated cemented focal length is **−39.320 mm**, independently reproducing the patent Table 1 value `fB = −39.321 mm` to source precision. This is the negative second subunit of the positive fifth lens unit described at ¶0089.

The patent's image-stabilization mechanism is tied to this assembly rather than to a generic shift of L5. L5B moves with a component perpendicular to the optical axis to displace the image, while L5A remains the positive first subunit. The axial zoom motion of L5 is distinct from that transverse stabilization motion.

### C5 — E15 + E16, Final Positive L6

**E15:** `nd = 1.72151`, `νd = 29.2`. Glass: `722292 — dense flint class`. `f = −141.374 mm`.\
**E16:** `nd = 1.59551`, `νd = 39.2`. Glass: `596392 — flint class`. `f = +29.924 mm`.

E15 is a weak negative meniscus whose front surface `27A` is aspherical; E16 is a biconvex positive rear member. Cemented together, C5 forms the complete L6 unit with an isolated focal length of **+38.034 mm**, matching the patent Table 1 `fN = 38.030 mm` within the source precision.

This final positive unit moves 36.10 mm objectward from wide to telephoto relative to the fixed image plane. The patent's conditional expressions deliberately constrain its power, back-focus relationship, block length, and movement so that the last unit receives a moderate convergent beam at telephoto while the preceding negative L5B unit can operate in a favorable ray bundle for stabilization (¶¶0044–0060).

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not name glass suppliers. The data file therefore stores six-digit coordinate/class labels rather than assigning a vendor glass solely because a modern catalog entry lies near the same `nd`/`νd` point.

| Data label | `nd` | `νd` | Elements | Authored classification |
|---|---:|---:|---|---|
| `847238` | 1.84666 | 23.8 | E1, E6, E12, E14 | Dense flint class |
| `497816` | 1.49700 | 81.5 | E2 | ED fluorophosphate class |
| `603607` | 1.60311 | 60.6 | E3, E10, E11 | Crown class |
| `835427` | 1.83481 | 42.7 | E4 | Lanthanum crown class |
| `773496` | 1.77250 | 49.6 | E5, E7 | Lanthanum crown class |
| `805254` | 1.80518 | 25.4 | E8 | Dense flint class |
| `904313` | 1.90366 | 31.3 | E9 | High-index lanthanum class |
| `750353` | 1.74950 | 35.3 | E13 | Lanthanum flint/crown transition class |
| `722292` | 1.72151 | 29.2 | E15 | Dense flint class |
| `596392` | 1.59551 | 39.2 | E16 | Flint class |

A fresh catalog audit was performed without assuming the authored labels. Current OHARA tables contain exact six-digit coordinate matches for all ten authored codes; for example, `497816` maps to S-FPL51 (`nd = 1.49700`, `νd = 81.54`), `847238` to S-TIH53/S-TIH53W (`1.84666`, `23.78`), and `904313` to S-LAH95 (`1.90366`, `31.34`). The patent rounds `νd` to one decimal place, so those residuals are consistent with source precision. The codes are not supplier-unique: HIKARI, HOYA, SCHOTT, and CDGM publish coordinate-equivalent families for several rows, SUMITA publishes an exact `1.49700 / 81.5` low-dispersion glass, and even OHARA code `750353` is shared by S-LAM7 and S-NBH51 with slightly different full-precision dispersion. The patent does not name a supplier or melt. Assigning a vendor-specific glass would therefore imply provenance the source does not establish.

No element in the final data file carries patent-published `nC`, `nF`, `ng`, or `dPgF`. Although modern catalog candidates can supply such data for particular commercial glasses, binding those line indices or Sellmeier curves to the patent elements would first require a defensible vendor/material identification. The authored record therefore remains at the six-digit coordinate/class level and makes no APO or anomalous-partial-dispersion claim.

## Focus Mechanism

Canon specifies an **inner focusing system**, 0.39 m closest focus, and 0.28× maximum magnification for the production lens. The patent, however, does not publish a finite-focus spacing table for Numerical Example 4. Figure 13 contains a single focus arrow in the L3/L4 region pointing toward the object for focusing from infinity to close distance, while ¶0088 identifies the corresponding positive and negative units as L3 and L4.

Figure 13 itself appears to transpose the local `L3` and `L4` labels. The numerical prescription resolves the ambiguity: surfaces 14–15 form the positive +40.313 mm singlet and surfaces 16–17 form the negative −31.851 mm singlet, matching ¶0088's L3(+), L4(−) sequence. The data treats the figure's local text as a drawing-label error, not as a reason to swap prescription rows.

Because no published close-focus spacings exist, the data uses the explicit focus status **CONSTRAINED_RECONSTRUCTION**. Three rigid axial hypotheses were tested against a 390 mm object-to-image-plane distance while conserving the neighboring gap sums. Only L4 alone produced positive adjacent gaps at all three zoom stations, moved in the objectward direction shown by the patent, and reproduced the production telephoto magnification constraint.

The authored infinity and reconstructed 0.39 m spacings are:

| Zoom state | `d15` infinity | `d15` at 0.39 m | `d17` infinity | `d17` at 0.39 m | L4 travel |
|---|---:|---:|---:|---:|---:|
| Wide | 2.650000 | 1.479070 | 6.670000 | 7.840930 | −1.170930 mm |
| Middle | 4.090000 | 1.676421 | 5.230000 | 7.643579 | −2.413579 mm |
| Tele | 7.850000 | 1.609328 | 1.470000 | 7.710672 | −6.240672 mm |

The negative travel sign denotes objectward motion of L4. At every zoom station `d15 + d17 = 9.32 mm` both at infinity and at close focus, so the reconstruction translates L4 rigidly without moving the adjacent L3 or L5 boundaries.

Independent finite-conjugate tracing of the final TypeScript arrays drives the system matrix `B` term to numerical zero at all three reconstructed close-focus states. At telephoto, the paraxial magnification is −0.278994, whose magnitude agrees with Canon's rounded 0.28× production specification. This agreement constrains the reconstruction but does not convert it into a patent-published mechanism or mechanical travel measurement.

## Aspherical Surfaces

The prescription contains one aspherical surface: **`27A`**, the object-side surface of E15 in the final L6 cemented pair. Patent ¶0093 prints the spherical-base equation

$$
X(H)=\frac{H^2/r}{1+\sqrt{1-(H/r)^2}}
+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}+A_{12}H^{12}.
$$

The Numerical Example 4 asphere table separately gives `K = 0`. Thus the printed patent equation and the project's standard conic form are numerically identical for this surface. The data stores project `K = 0`; no `κ → K` or other conic conversion changes the sag.

The data file transcribes the Numerical Example 4 coefficients without scaling:

| Coefficient | Value |
|---|---:|
| `K` | 0 |
| `A4` | −2.10453e−5 |
| `A6` | −4.04601e−8 |
| `A8` | +9.66019e−10 |
| `A10` | −2.17624e−11 |
| `A12` | +1.50968e−13 |
| `A14` | 0 (schema completion; not a patent term) |

Because the prescription remains at the patent's native scale, none of the dimensional asphere coefficients is transformed. Had a uniform scale `s` been applied, the project convention would require `A_p → A_p / s^(p−1)` while leaving `K` unchanged; that transformation is **not** used here.

At the authored semi-diameter `H = 7.715 mm`, independent evaluation gives a spherical-base sag of 0.635978 mm and full aspheric sag of 0.555467 mm. The polynomial departure is therefore **−80.511 µm** at that verified height. This is a computed model result, not a patent-tabulated departure.

Canon identifies a high-precision aspherical element in the production lens. Under the fixed correlation, `27A` is the natural patent counterpart, but the cited manufacturer sources do not establish a precision-molding process for this particular element, and the patent does not state a manufacturing process for E15.

## Chromatic Correction Strategy

The chromatic strategy visible from the published d-line coordinates is based primarily on strong Abbe-number contrast inside several cemented combinations. The most conspicuous example is C1, which pairs E1 (`νd = 23.8`) with E2 (`νd = 81.5`). C2 and C3 also place 23.8-class dense flint against substantially higher-Abbe partners. These pairings provide the first-order dispersion balancing expected in a wide-ratio photographic zoom without requiring a vendor-specific glass identity.

E2 is the only element with `νd > 80`, making it the clear low-dispersion outlier in the patent prescription. Canon's production literature identifies one UD element, so E2 is the strongest correlation candidate for that role. The identification remains at the **ED fluorophosphate class** level because the patent supplies no maker name or line-index data.

The final data intentionally stops at Abbe-level chromatic information. No claim is made that the prescription is apochromatic, and no anomalous partial-dispersion correction is attributed to any element without `dPgF`, line indices, or a validated supplier Sellmeier resolution.

## Image Stabilization

The patent makes image stabilization an explicit architectural function rather than a generic product feature. In the six-unit embodiment, L5 is split into positive L5A and negative L5B, and L5B is moved with a component perpendicular to the optical axis to shift the image (¶¶0089–0090). In the data model L5B is cemented pair C4, consisting of E13 and E14.

The isolated focal length of C4/L5B is **−39.320 mm**, which independently matches the patent's Table 1 value `fB = −39.321 mm`. L5A is +25.351 mm in isolation, and the complete L5 unit is +34.842 mm. These values distinguish the negative stabilization subunit from the positive net power of the fifth zoom unit.

Patent ¶0094 defines its stabilization comparison at a 0.3° image displacement, with image-plane shift `ΔY = f tan(0.3°)`. The patent does not publish a mechanical decenter stroke for L5B, so no production travel is assigned in the data file. The transverse IS motion is also not encoded as an axial `var` gap; the authored `var` values describe zoom and the separate reconstructed axial focus movement only.

Canon's production literature identifies the lens as image-stabilized and marks an IS unit in its block diagram. The precise identification of the production moving elements with patent C4 remains part of the fixed correlation rather than a manufacturer-confirmed patent mapping.

## Conditional Expressions

The patent constrains the final unit and the negative stabilization subunit with five dimensionless relationships (¶¶0044–0060). Recomputing them from the final data arrays gives:

| Condition | Expression | Computed | Patent Table 1 | Preferred range | Result |
|---|---|---:|---:|---:|---|
| (1a) | `fN / (bkt − fN)` | 1.127986 | 1.129 | 1.10–1.60 | Pass |
| (2a) | `fN / (bkt − okN − fN)` | 1.085750 | 1.087 | 1.05–1.60 | Pass |
| (3a) | `−mN / fN` | 0.949140 | 0.949 | 0.80–1.10 | Pass |
| (4a) | `−fN / fB` | 0.967300 | 0.967 | 0.80–1.25 | Pass |
| (5a) | `bldN / fN` | 0.120417 | 0.120 | 0.08–0.25 | Pass |

The recomputation uses `fN = +38.034424 mm` for L6, `fB = −39.320210 mm` for L5B, telephoto back focal distance `bkt = 71.753311 mm`, L6 movement `mN = −36.10 mm`, and L6 block length `bldN = 4.58 mm`.

Condition (2) exposes a source wording problem. Paragraph 0050 describes `okN` as the distance from the final L6 surface to the rear principal point of the **entire zoom lens**. That literal reading does not reproduce Table 1. The full-system telephoto rear-principal-point offset from the last surface is −58.793082 mm and would give condition (2) ≈ 0.411, outside the stated range. Using the rear principal point of **L6 alone** gives `okN = −1.311653 mm` and condition (2) = 1.085750, matching the patent's 1.087. The analysis therefore records ¶0050 as a source-wording inconsistency and uses the interpretation that reproduces the patent's own Table 1 rather than silently forcing the literal full-system reading.

## Verification Summary

Independent height/reduced-angle tracing and an independently rebuilt ABCD basis matrix were run from the final TypeScript arrays. The two matrix constructions agree to machine precision at every authored zoom/focus state.

At infinity focus:

| State | Computed EFL | Patent focal length | Computed BFD | Patent BF | F/# from authored physical stop | `nominalFno` |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 18.599255 mm | 18.60 mm | 35.605086 mm | 35.60 mm | 3.590000 | 3.59 |
| Middle | 51.026653 mm | 50.99 mm | 55.924349 mm | 55.89 mm | 4.873061 | 4.88 |
| Tele | 130.546393 mm | 130.48 mm | 71.753311 mm | 71.70 mm | 5.975224 | 5.97 |

The maximum focal-length discrepancy from the rounded patent table is 0.0719%, and the maximum BFD discrepancy is 0.0533 mm. Those residuals are consistent with the source precision. The single physical iris inferred at the wide state remains within 0.007 f-number of the published middle and telephoto values, while `nominalFno` carries the exact source schedule used by the viewer.

Every one of the 16 standalone element focal lengths in the data file was independently recomputed from the TypeScript surfaces, and the six moving-unit powers reproduce the required P–N–P–N–P–P sequence. The five patent conditional expressions also recompute to the values shown above.

Geometry verification passes at all six wide/middle/telephoto × infinity/close-focus states. The minimum shared-rim edge thickness is 1.172435 mm at E8, the maximum rim-slope angle is 48.441929° at surface 8, and the binding surface-8/surface-9 air gap remains just inside the 0.90 sag-intrusion limit after the documented semi-diameter trim. Exact representative meridional rays remain inside every authored semi-diameter; the smallest tested clearance is 0.478560 mm at surface 14 in the wide/infinity state.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives **0.001057056 mm⁻¹**, corresponding to a Petzval-radius magnitude of approximately **946.024 mm**. This is a computed first-order property of the model, not a patent-published number.


## Sources and References

1. **US 2013/0088622 A1**, Shigenobu Sugita, *Zoom Lens and Image Pickup Apparatus Having the Same*, Canon Inc., published 11 April 2013. Relevant portions: ¶¶0037–0040, 0042–0062, 0088–0095, Numerical Example 4 and Table 1 at ¶0099; Figures 13–16.
2. **Canon Camera Museum, EF-S18-135mm f/3.5-5.6 IS STM** — production identity, June 2012 release, 16 elements/12 groups, seven blades, 0.39 m minimum focus, 0.28× maximum magnification, six-group zoom, UD/aspherical/IS annotations: <https://global.canon/en/c-museum/product/ef418.html>
3. **Canon U.S.A. support, EF-S 18-135mm f/3.5-5.6 IS STM** — Canon EF-S product specification and inner-focusing-system identification: <https://www.usa.canon.com/support/p/ef-s-18-135mm-f-3-5-5-6-is-stm>
4. **OHARA Optical Glass catalog and glass-type datasheets** — six-digit coordinate checks for S-FPL51, S-BSM14, S-LAH55V, S-LAH66, S-TIH6, S-LAH95, S-LAM7/S-NBH51, S-TIH18, S-TIM8, and S-TIH53 families: <https://oharacorp.com/optical-glass/>
