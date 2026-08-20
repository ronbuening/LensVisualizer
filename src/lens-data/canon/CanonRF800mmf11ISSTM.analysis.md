# CANON RF 800mm f/11 IS STM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2020-173349 A
**Application Number:** 特願2019-75405 (JP 2019-075405)
**Filed:** 2019-04-11
**Published:** 2020-10-22
**Inventors:** Maki Yokoya (横谷 真樹); Tomohiro Ino (井野 友裕)
**Applicant:** Canon Inc.
**Title:** 結像光学系および撮像装置 (*Imaging optical system and imaging apparatus*)
**Embodiment analyzed:** Numerical Example 2

Numerical Example 2 from JP 2020-173349 A is treated here as the selected patent correlation for the **CANON RF 800mm f/11 IS STM**. Canon's product literature does not identify JP 2020-173349 A as the production prescription. The identification therefore rests on convergent design evidence rather than a manufacturer patent cross-reference.

1. Numerical Example 2 contains 11 physical elements in 8 air-separated groups, matching Canon's published 11-element/8-group construction.
2. The patent gives a design focal length of 776.37 mm and F-number of 11.31, while Canon markets the production lens as 800 mm with a fixed f/11 aperture. These values are kept separate in the model rather than scaled together.
3. The patent places a diffractive surface in the second lens of the positive front unit L1 (¶0037); Canon describes the production lens as using gapless double-layer Diffractive Optics.
4. Numerical Example 2 uses a single positive L2 element for internal focusing. The patent states that L2 moves toward the object for close focus (¶0036). The modeled published close state gives a 6.013885757 m object distance from the image plane and |m| = 0.137533665, consistent with Canon's rounded 6.0 m / 0.14× production specifications.
5. The application was filed in April 2019 and published in October 2020. Canon announced the RF800mm F11 IS STM on 2020-07-09 and Canon's Camera Museum records it as marketed in July 2020.

The patent's 21.64 mm image height corresponds to the half-diagonal of the 135/full-frame format used by the production lens. No uniform focal-length scaling is applied: the data file retains the 776.37 mm design focal length while separately storing the 800 mm marketed focal length.

## Optical Architecture

Numerical Example 2 is an 11-element, 8-group telephoto prescription divided by the patent into three functional units with positive-positive-negative power sequence: L1 is positive, L2 is positive, and L3 is negative (¶0035). The aperture stop lies between the moving L2 element and the rear L3 unit.

The design also satisfies the project's strict telephoto definition. Using the patent's 365.06 mm total optical length and 776.37 mm focal length gives `TL/EFL = 0.470213944`, well below unity. The 138.30 mm published back focus is also much shorter than the focal length, so the design is not retrofocus.

L1 spans surfaces 1–7 and contains four physical elements: a front positive meniscus, a cemented positive/negative pair whose interface carries the diffractive phase profile, and a negative meniscus. The independently computed L1 equivalent focal length is +600.837369 mm, close to the patent's rounded +600.53 mm unit value. This front unit provides the principal positive power while placing the DOE comparatively far toward the object side, where the patent states that high paraxial ray heights improve chromatic-correction effectiveness (¶0020–¶0024).

L2 is the single positive E5 element between surfaces 8 and 9. Its standalone focal length and unit focal length are both +169.053213 mm, agreeing with the patent's +169.05 mm value. It is the only focusing element in the selected example.

L3 begins at the stop and extends through surface 20. It comprises two cemented doublets followed by a negative singlet and a positive singlet. Its independently computed equivalent focal length is -86.514216 mm, agreeing with the patent's -86.51 mm value. The rear unit therefore supplies the strong negative power required by the patent's telephoto arrangement (¶0028).

The selected numerical example contains no zoom state, no folded path, no perspective-control movement, and no published stabilization decenter prescription. The optional filters, faceplates, low-pass filters, and IR-cut filters mentioned generically in ¶0016 are not instantiated in Numerical Example 2 and are not included in the data model.

## Element-by-Element Analysis

The focal lengths below are the standalone refractive-element focal lengths stored in the validated data file. For cemented pairs, a separate net-group focal length is stated where independently computed. These quantities should not be confused with an element's in-situ ray action in the complete lens, which depends on the surrounding separations and transfer matrices.

### E1 — Positive Meniscus

nd = 1.48749, νd = 70.2. Glass: `487702 — optical-glass coordinate (vendor unresolved)`. f = +189.285305 mm.

E1 is the large front positive meniscus of L1. Its relatively strong positive standalone power begins the telephoto front collector. The data file assigns the same 39.8 mm semi-diameter to both E1 surfaces; that aperture is a modeling inference because the patent publishes no semi-diameters.

The patent does not assign an element-specific aberration function to E1. Its role as the first positive collector is therefore an architectural interpretation based on its sign, position, and membership in the positive L1 unit rather than a quoted patent statement.

### E2 — Biconvex Positive, Front Member of the DO Pair

nd = 1.48749, νd = 70.2. Glass: `487702 — optical-glass coordinate (vendor unresolved)`. f = +119.445580 mm.

E2 is a biconvex positive lens cemented directly to E3. Surface 4 is the E2→E3 junction and carries the diffractive radial polynomial. Under the data schema's cemented-interface rule, surface 4 uses E3's downstream index and element identifier.

E2 supplies substantial positive standalone power, but it must not be treated independently when describing the DO pair's system behavior. The cemented E2+E3 assembly, with the DOE included at surface 4, has a computed net focal length of -518.081454 mm.

### E3 — Biconcave Negative, Rear Member of the DO Pair

nd = 1.74400, νd = 44.8. Glass: `744448 — optical-glass coordinate (vendor unresolved)`. f = -91.715811 mm.

E3 is the negative partner of E2 and completes the cemented diffractive pair. Its stronger negative standalone power partly offsets E2's positive power. The DOE is not represented as a geometric asphere on E3; it is a separate phase interaction at the shared surface 4.

The patent explicitly associates the diffractive surface with chromatic correction rather than attributing that correction to a named vendor glass. Consequently, the data file preserves only the published nd/νd coordinate and does not infer a production glass identity.

### E4 — Negative Meniscus

nd = 1.69680, νd = 55.5. Glass: `697555 — optical-glass coordinate (vendor unresolved)`. f = -152.723030 mm.

E4 is an air-separated negative meniscus and the final physical element of L1. Together with E1 and the cemented DO pair, it yields the positive L1 unit power despite its own negative standalone power.

The contrast between E4's negative element power and the positive net L1 power illustrates why standalone focal lengths must not be substituted for group or full-system behavior.

### E5 — Positive Meniscus, L2 Focus Element

nd = 1.48749, νd = 70.2. Glass: `487702 — optical-glass coordinate (vendor unresolved)`. f = +169.053213 mm.

E5 is the complete L2 unit and is the only internal focusing element in Numerical Example 2. The patent specifies that L2 moves toward the object when focusing from infinity toward a near object (¶0036). Its single-element construction is also consistent with the patent's stated preference for reducing focus-unit mass (¶0033–¶0034).

The production lens uses a lead-screw STM focusing drive according to Canon. That motor specification is a manufacturer fact; the patent prescribes the optical movement but does not specify STM for Numerical Example 2.

### E6 — Biconcave Negative, Front Member of D2

nd = 1.90043, νd = 37.4. Glass: `900374 — optical-glass coordinate (vendor unresolved)`. f = -23.602837 mm.

E6 begins L3 immediately after the aperture stop. It is a strong negative biconcave element cemented to E7 at surface 12.

The E6+E7 cemented doublet has a computed net focal length of -341.995856 mm. This net value is much weaker than either member's standalone power because the cemented interface and element thickness alter the combined transfer power.

### E7 — Biconvex Positive, Rear Member of D2

nd = 1.65412, νd = 39.7. Glass: `654397 — optical-glass coordinate (vendor unresolved)`. f = +27.148865 mm.

E7 is the positive member of the first rear cemented doublet. Its positive standalone power closely opposes E6's negative power, leaving the pair weakly negative as a cemented unit.

No anomalous-partial-dispersion designation is assigned. The patent publishes only nd and νd for this element, and the data file contains no nC, nF, ng, or dPgF values.

### E8 — Biconvex Positive, Front Member of D3

nd = 1.65412, νd = 39.7. Glass: `654397 — optical-glass coordinate (vendor unresolved)`. f = +28.539796 mm.

E8 begins the second cemented doublet in L3 and is joined to E9 at surface 15. Its glass coordinate is the same as E7's, but this does not establish that the production lens uses a particular vendor melt.

The E8+E9 cemented pair has a computed net focal length of +146.121347 mm. The pair therefore contributes positive group power within an L3 unit whose total equivalent power remains negative.

### E9 — Biconcave Negative, Rear Member of D3

nd = 1.59282, νd = 68.6. Glass: `593686 — optical-glass coordinate (vendor unresolved)`. f = -34.943037 mm.

E9 is the negative member of the second rear cemented pair. Its higher published νd contrasts with the lower-νd positive E8 coordinate, but the absence of independently identified glass and line-index data prevents a more specific claim about anomalous partial dispersion or apochromatic correction.

The element's negative standalone power is again distinct from the positive net power of the complete E8+E9 pair.

### E10 — Biconcave Negative Singlet

nd = 1.80400, νd = 46.5. Glass: `804465 — optical-glass coordinate (vendor unresolved)`. f = -39.371451 mm.

E10 is an air-separated negative singlet in the rear part of L3. It follows the two cemented doublets and contributes substantial negative standalone power to the rear unit.

Its role is described here only in terms of verified power distribution and position. The selected patent does not assign a unique named aberration-correction function to this element.

### E11 — Biconvex Positive Rear Singlet

nd = 1.59551, νd = 39.2. Glass: `596392 — optical-glass coordinate (vendor unresolved)`. f = +98.012225 mm.

E11 is the final positive singlet and completes L3. It partially offsets E10's negative power while leaving the overall L3 unit strongly negative at -86.514216 mm.

The last refracting surface is followed by the patent's 138.30 mm air-equivalent back-focus spacing to the paraxial image plane.

## Glass Identification and Selection

The patent supplies d-line nd and νd values but does not name a glass manufacturer or catalog designation for Numerical Example 2. The validated data file therefore uses six-digit coordinate labels derived from the stored nd/νd pairs. These are authoring identifiers for the published optical coordinates, not assertions that the patent specified a particular vendor glass.

| Coordinate label | nd | νd | Elements | Data-file status |
|---|---:|---:|---|---|
| 487702 | 1.48749 | 70.2 | E1, E2, E5 | Vendor unresolved |
| 744448 | 1.74400 | 44.8 | E3 | Vendor unresolved |
| 697555 | 1.69680 | 55.5 | E4 | Vendor unresolved |
| 900374 | 1.90043 | 37.4 | E6 | Vendor unresolved |
| 654397 | 1.65412 | 39.7 | E7, E8 | Vendor unresolved |
| 593686 | 1.59282 | 68.6 | E9 | Vendor unresolved |
| 804465 | 1.80400 | 46.5 | E10 | Vendor unresolved |
| 596392 | 1.59551 | 39.2 | E11 | Vendor unresolved |

No nC, nF, ng, or dPgF values are authored for any element because the patent does not publish them and no production glass identity has been independently established. The model therefore does not make an APO or anomalous-partial-dispersion claim from nd/νd alone.

The glass coordinates still show the broad dispersion structure available to the designer: the positive front/focus coordinate 1.48749/70.2 is used three times, while the rear unit alternates several higher-index and lower-νd coordinates. Any stronger statement about specific melt families would exceed the evidence retained in the data file.

## Focus Mechanism

The patent uses internal focus by translating the single positive L2 element E5. Paragraph 0036 states that L2 moves toward the object as focus changes from infinity toward a near object. The two variable gaps are d7, between L1 and L2, and d9, between L2 and the stop/L3 side.

The patent prints the following spacing rows:

| State | d7 (mm) | d9 (mm) | d7+d9 (mm) |
|---|---:|---:|---:|
| Printed infinity row | 35.90 | 21.43 | 57.33 |
| Printed near row | 21.25 | 36.08 | 57.33 |

The printed infinity row directly contradicts the same numerical example's cardinal data: independent sequential y–ν and ABCD calculations give an EFL of 725.598539 mm for 35.90/21.43 mm rather than the published 776.37 mm. The data file therefore declares `CONSTRAINED_RECONSTRUCTION` rather than silently transcribing that inconsistent row.

The adopted infinity state preserves the patent's single-element translation mechanism and exact 57.33 mm adjacent-gap sum, then solves the one remaining L2 position degree of freedom for the published 776.37 mm EFL:

| Modeled state | d7 (mm) | d9 (mm) | d7+d9 (mm) |
|---|---:|---:|---:|
| Reconstructed infinity | 38.42721463001324 | 18.90278536998676 | 57.33 |
| Published near | 21.25 | 36.08 | 57.33 |

The resulting L2 travel is 17.177214630 mm toward the object. The near row is not reconstructed; it is retained exactly as printed. With the published 138.30 mm back-focus spacing, that close state images an object 6.013885757 m from the image plane with |m| = 0.137533665. Canon's production specifications round these quantities to 6.0 m and 0.14×.

For production identity, the model retains Canon's 6.0 m MFD, while the longer computed value remains a design-model verification result. No additional hidden focus group or invented close-focus spacing is introduced.

## Diffractive Surface

Surface 4 is a diffractive interface, not a geometric aspheric sag surface. The patent gives the phase function in ¶0021 as a rotationally symmetric polynomial of radial height h and diffraction order m. In the LensVisualizer data model this is represented as `diffractive.kind = "radial-polynomial"` at the d-line reference wavelength of 587.6 nm and diffraction order +1.

For Numerical Example 2 the retained polynomial is:

| Radial power p | Cp |
|---:|---:|
| 2 | -5.38010e-05 |
| 4 | +6.66877e-09 |
| 6 | -3.04640e-13 |
| 8 | -3.57268e-15 |
| 10 | +2.50469e-18 |

The patent defines the paraxial diffractive power as `φDOE = -2 C2` for the reference wavelength and first diffraction order. The selected coefficients therefore give `φDOE = +0.000107602 mm^-1` and `fDOE = 9293.507556 mm`.

No geometric asphere, conic constant, or sag-polynomial coefficient is present in the selected example. Accordingly, the data file has `asph: {}` and surface 4 carries no `A` suffix. The polynomial coefficients are not converted into geometric asphere coefficients.

The scale factor is `s = 1.0`. Radii, spacings, image-plane coordinates, and diffractive coefficients therefore remain at patent scale; no `Cp / s^(p-1)` transformation changes the published phase terms.

## Chromatic Correction Strategy

The patent explicitly assigns chromatic-correction work to the diffractive surface. Paragraph 0022 describes the effective diffractive material as having negative Abbe number and explains that positive diffractive power can counter axial and lateral chromatic aberration generated in the positive front unit. Paragraphs 0020–0024 also place the DOE toward the object side so that it acts where paraxial ray heights are comparatively large.

Canon's production description is consistent with that architectural intent: the RF800mm F11 IS STM is specified as using gapless double-layer Diffractive Optics to reduce chromatic aberration. This is production-level functional evidence, not confirmation that Canon manufactured the exact patent glass coordinates or phase prescription unchanged.

No apochromatic designation is inferred. The data file lacks per-element nC/nF/ng data, dPgF values, and defensible vendor Sellmeier identities, so only the patent's stated DOE correction strategy is claimed.

## Conditional Expressions

JP 2020-173349 A gives six principal design conditions for the disclosed telephoto arrangement. Evaluated with the selected example's published global and unit values, all six are satisfied.

| Condition | Evaluated value | Patent bound | Result |
|---|---:|---|---|
| dDOE / f | 0.076123498 | 0.00 < x ≤ 0.13 | Pass |
| fDOE / f | 11.970461965 | 3.3 ≤ x ≤ 33.2 | Pass |
| f1 / f | 0.773510053 | 0.14 ≤ x ≤ 1.56 | Pass |
| f3 / f | -0.111428829 | -0.55 ≤ x ≤ -0.06 | Pass |
| f2 / f | 0.217744117 | 0.14 ≤ x ≤ 0.70 | Pass |
| L / f | 0.470213944 | 0.35 ≤ x ≤ 0.70 | Pass |

Here `dDOE = 59.10 mm`, measured from the first optical surface to surface 4, and `fDOE = 9293.507556 mm`. The patent's Table 1 prints the corresponding rounded values for Example 2 as 0.08, 12.0, 0.77, -0.11, 0.22, and 0.47.

A source-text ambiguity in claim 10 does not alter condition (6): paragraph 0032 and Table 1 establish `0.35 ≤ L/f ≤ 0.70`. Paragraph 0033 refers to “condition (7)” while displaying equation `(6b)`; the displayed inequality is treated as the refined form of condition (6), not as a seventh independent condition.

## Image Stabilization

Canon specifies optical image stabilization with up to 4 stops of shake correction for the production RF800mm F11 IS STM. The selected patent example, however, does not publish a stabilization group identity, decenter range, or compensating movement table.

The data file therefore models only the centered sequential prescription and the published L2 focusing mechanism. It does not infer that any particular L3 subgroup is the production IS unit, and it contains no synthetic IS decenter state. The 4-stop figure is a manufacturer specification rather than a property computed from Numerical Example 2.

## Verification Summary

The validated TypeScript prescription uses the mechanism-constrained infinity state and reproduces an EFL of 776.370000000 mm. The corresponding paraxial BFD is 138.317903593 mm, compared with the patent's rounded 138.30 mm, and the modeled fixed stop reproduces F/11.31.

The physical stop semi-diameter is inferred rather than patent-published. The data file uses 8.323960831 mm, solved from the reconstructed infinity pupil geometry so that the entrance pupil gives the modeled F/11.31. All glass-surface semi-diameters are likewise modeling quantities derived from ray envelopes and geometric constraints; none is presented as a patent clear-aperture value.

Surface-by-surface Petzval computation using `φ/(n·n')` gives a refractive sum of -0.000519695048412 mm^-1. The DOE adds +0.000041478191111 mm^-1 at surface 4, for a total of -0.000478216857302 mm^-1 and `Rp = -1/P = 2091.101526 mm` under the stated sign convention.

No sensor cover glass, filter plate, inactive dummy plane, flare cutter, or mechanical component is included. The patent's optional rear optical blocks are not part of the selected numerical example. No scaling is applied, and no geometric asphere coefficient transformation is required.

## Sources

1. **JP 2020-173349 A**, *結像光学系および撮像装置* — selected source patent. Relevant passages include ¶0012, ¶0016, ¶0020–¶0024, ¶0028, ¶0033–¶0039, Numerical Example 2 on patent pages 10–11, Table 1 on page 14, and Fig. 2 on page 15.
2. **Canon U.S.A., RF800mm F11 IS STM product/specification page** — marketed 800 mm f/11, 6.0 m minimum focusing distance, 0.14× maximum magnification, 11 elements in 8 groups, gapless double-layer DO, no aperture blades, 4-stop IS, and lead-screw STM. https://www.usa.canon.com/shop/p/rf800mm-f11-is-stm
3. **Canon Camera Museum, RF800mm F11 IS STM** — marketed July 2020; 11 elements/8 groups; fixed f/11; 6.0 m; 0.14×; DO lens; official block diagram. https://global.canon/en/c-museum/product/rf493.html
4. **Canon U.S.A., 2020-07-09 EOS R5/R6 and RF lens launch release** — announcement timing, fixed f/11, 4-stop IS for the RF800mm, lead-screw STM, and end-of-July 2020 availability. https://www.usa.canon.com/newsroom/2020/20200709-camera
