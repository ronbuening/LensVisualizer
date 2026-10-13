## Patent Reference and Design Identification

**Patent:** US 2024/0151940 A1\
**Application Number:** US 18/049,484\
**Filed:** October 25, 2022\
**Published:** May 9, 2024\
**Inventor:** Ju Yeon Jo\
**Assignee:** Samyang Optics Co., Ltd.\
**Title:** Lens Optical System and Imaging Apparatus Using the Same\
**Embodiment analyzed:** Example 1 / first embodiment

This analysis follows the prescription stored in `SamyangAF24mmf18FE.data.ts`, which transcribes Example 1 of US 2024/0151940 A1 without uniform scaling. The structured data identifies the modeled production lens as the **SAMYANG AF 24mm f/1.8 FE**, with a marketed focal length of 24 mm and maximum aperture of f/1.8 kept separate from the patent design values of 24.8004 mm and f/1.86.

The patent itself does not name the commercial lens. The production correlation is therefore an author/modeling inference, not a manufacturer-confirmed patent identification. Several independent features converge on the same production lens:

1. Example 1 has 11 elements in 8 air-separated groups, matching Samyang's published construction for the AF 24mm F1.8 FE.
2. The patent uses two physical aspheric elements, L71 and L91, each aspheric on both surfaces; Samyang markets two ASP elements.
3. Two elements, L51 and L101, have `nd = 1.49700` and `νd = 81.61`, consistent with the production lens's published count of two ED elements, although the patent does not assign Samyang's ED label to them.
4. L21, L31, and L41 are conspicuous high-index members of the fixed front group, consistent with the marketed count of three HR elements without establishing a one-to-one manufacturer designation.
5. The patent gives an infinity field of view of 83.74°, while Samyang publishes 83.7° for full frame.
6. The patent's nearest state is labeled `TL = 0.19 m`, matching the marketed 0.19 m minimum focusing distance.
7. The independent first-order trace of the final data gives a close-state magnification of about 0.202× at the published rear plane, near the manufacturer's rounded 0.21× maximum magnification.

Samyang's April 9, 2021 launch announcement predates the US filing, so chronology by itself is not evidence of identity. The correlation rests instead on the optical construction, field, focus range, and special-element pattern. Samyang separately identifies the production lens as a Sony full-frame E-mount autofocus prime with a Linear STM drive, nine diaphragm blades, and a 0.19 m minimum focus.

The patent's first-embodiment description is concentrated in ¶0041–¶0059 and Tables 1–3. Figure 1 and ¶0042 identify the three functional groups; ¶0045 describes the focusing motion; ¶0047–¶0050 identify the element sequence and shapes; and ¶0054–¶0057 define the aspheres and published focus states.

## Optical Architecture

Example 1 is a wide-angle, three-functional-group inner-focus prime with a **positive / positive / negative** power sequence: G11(+), G21(+), G31(−). The architecture is not treated as a classical named family such as a double-Gauss because the patent does not establish such a lineage. Under the project's strict definitions it is neither telephoto nor retrofocus: the normalized total track is longer than the effective focal length, while the published filter-removed rear distance is shorter than the effective focal length.

The fixed front group G11 contains six elements. It begins with the large negative meniscus L11, then uses the nearly afocal L21+L31 cemented pair, the strong positive L41, and the L51+L61 direct-contact pair. Despite several negative standalone members, the complete G11 is positive. Independent paraxial evaluation of the final data gives the isolated G11 block a power of +38.023598 D (`f ≈ +26.2995 mm`) in air.

The aperture stop lies between G11 and G21, exactly where the patent places ST in ¶0044 and Figure 1. Its **axial position is source-published**, but its clear radius is not. The data file therefore uses an inferred stop semi-diameter of 10.0768345 mm, obtained by calibrating the entrance pupil to the patent EFL and f/1.86 design aperture. This inference is not a patent aperture dimension.

G21 is the two-element internal focusing group. L71 is a double-aspheric negative meniscus and L81 is a biconvex positive element; together the group is strongly positive, +31.051779 D (`f ≈ +32.2043 mm`) when the isolated G21 block is evaluated in air. During focusing G21 translates toward the object while G11 and G31 remain fixed, preserving the 71.690 mm first-to-last-active-surface length. This is the inner-focus arrangement described in ¶0042, ¶0045, and ¶0049.

G31 is a fixed negative rear group. Its first element, L91, is a double-aspheric biconcave negative lens, followed by the L101+L111 direct-contact pair. The isolated G31 block evaluates to −25.399040 D (`f ≈ −39.3716 mm`) in air. The negative rear-group sign is a functional-group property and should not be confused with the nearly neutral power of the final direct-contact pair considered by itself.

The ordinary sequential model ends at surface 20. The patent's rear filter plate and bookkeeping planes, source surfaces 21–23, are not included as lens elements. Instead, surface 20 uses the patent-published filter-removed **`in Air = 15.994 mm`** rear spacing. No scaling is applied: all radii, axial thicknesses, refractive indices, Abbe numbers, and aspheric coefficients retain the Example 1 prescription values.

The patent publishes no clear-aperture or semi-diameter table. Every non-stop `sd` value in the data file is therefore an inferred modeling quantity based on Figure 1, the calibrated stop, and ray-envelope/geometry checks. These semi-diameters must not be read as dimensions reported by Samyang or by the patent.

## Element-by-Element Analysis

### L11 — Negative Meniscus

`nd = 1.69680`, `νd = 55.46`. Glass: **697555 — lanthanum-crown class (vendor unresolved)**. Standalone `f = −36.296 mm`.

L11 is the large front negative meniscus of G11. The patent describes the first element as a negative meniscus convex toward the object side (¶0047–¶0048). Its standalone power is negative (−27.551411 D), but it belongs to a front group whose complete power is positive. The large front diameter and negative first-element power are consistent with the wide angular acceptance required by the approximately 84° full field.

### L21 — Biconcave Negative, J1 Front Member

`nd = 1.84666`, `νd = 23.78`. Glass: **847238 — high-index dense-flint class (vendor unresolved)**. Standalone `f = −23.036 mm`.

L21 is a strong negative, high-index member immediately ahead of L31. The patent explicitly describes L21 as biconcave and states that L21 and L31 may form a bonded double-junction pair (¶0047–¶0048). Its standalone power is −43.409884 D.

### L31 — Biconvex Positive, J1 Rear Member

`nd = 1.83481`, `νd = 42.72`. Glass: **835427 — high-index flint class (vendor unresolved)**. Standalone `f = +26.052 mm`.

L31 is the positive partner of J1 and is explicitly described as biconvex in ¶0048. Its standalone power is +38.385006 D. Evaluated as the complete bonded L21+L31 pair in air, J1 has only −0.115800 D of net power (`f ≈ −8.64 m`). That near-cancellation is a property of the isolated cemented pair, not a statement that the pair has no effect in situ: within G11 it still changes ray heights, vergence distribution, chromatic balance, and aberration correction.

### L41 — Biconvex Positive

`nd = 2.00100`, `νd = 29.13`. Glass: **001291 — ultra-high-index flint class (vendor unresolved)**. Standalone `f = +32.573 mm`.

L41 is the highest-index element in the prescription and is biconvex as described in ¶0047–¶0048. Its standalone power is +30.700332 D. Positioned after the nearly neutral J1 pair, it supplies substantial positive power inside G11 without requiring an unusually short pair of external radii for its focal strength.

The glass class is vendor-unresolved. The value `nd = 2.00100` is a source prescription coordinate, not evidence that a particular public 2.00-index glass was used in production.

### L51 — Positive Meniscus, J2 Front Member

`nd = 1.49700`, `νd = 81.61`. Glass: **497816 — low-dispersion crown class (vendor unresolved)**. Standalone `f = +53.189 mm`.

L51 is the high-Abbe positive member near the rear of G11. Its standalone power is +18.801046 D. The patent describes L51 as a positive lens and places it immediately before L61 (¶0047–¶0048). The zero-air interface in the numerical prescription requires surface 9 to pass directly into the L61 glass; the data therefore models J2 as a direct-contact/cemented pair. Unlike J1, this bonding status is inferred from the prescription rather than explicitly asserted for Example 1 in the prose.

The 497816 coordinate is the strongest two-element candidate for correlation with Samyang's marketed two-ED count because it is repeated and has the highest `νd` in the prescription. The patent itself does not designate either element as ED, and the public cross-vendor coordinate matches span differently named crown families; no vendor identity or anomalous-partial-dispersion behavior is asserted.

### L61 — Negative Meniscus, J2 Rear Member

`nd = 1.60342`, `νd = 38.01`. Glass: **603380 — flint class (vendor unresolved)**. Standalone `f = −82.925 mm`.

L61 is the negative partner to L51 and completes G11. Its standalone power is −12.059117 D. The complete J2 pair evaluates to +6.156928 D (`f ≈ +162.419 mm`) in air, so this pair remains weakly positive when isolated.

The strong Abbe-number contrast between L51 (`νd = 81.61`) and L61 (`νd = 38.01`) gives the pair a clear first-order chromatic balancing function, but the available source data are limited to `nd` and `νd`. The prescription does not support an APO or anomalous-dispersion claim.

### L71 — Double-Aspheric Negative Meniscus, Focus Group Front Element

`nd = 1.68863`, `νd = 31.19`. Glass: **689312 — dense-flint class (vendor unresolved)**. Standalone `f = −81.854 mm`.

L71 is the negative member at the front of moving group G21 and carries aspheric surfaces 12A and 13A. The patent specifically describes the seventh element as a negative meniscus, with both surfaces eligible for aspheric correction immediately behind the aperture (¶0046, ¶0049, ¶0054). Its standalone power is −12.216813 D.

L71's optical significance is not captured by its weak standalone power alone. It sits immediately behind the stop, where ray heights and pupil weighting make surface form particularly influential. The patent's design rationale explicitly favors an aspheric focusing element to maintain resolution while keeping the moving focus group light (¶0046 and the broader discussion preceding the first embodiment).

### L81 — Biconvex Positive, Focus Group Rear Element

`nd = 1.59349`, `νd = 67.00`. Glass: **593670 — dense phosphate-crown class (vendor unresolved)**. Standalone `f = +25.709 mm`.

L81 is the strong positive partner that makes G21 positive overall. The patent describes it as biconvex (¶0049). Its standalone power is +38.897128 D, substantially larger in magnitude than L71's negative standalone power, which is consistent with the computed +31.051779 D net power of the two-element focus group.

Because L71 and L81 move together, their internal 0.1 mm separation remains fixed while D1 ahead of the group decreases and D2 behind it increases by the same amount. This is a translating group, not a floating pair with changing internal spacing.

### L91 — Double-Aspheric Biconcave Negative

`nd = 1.68863`, `νd = 31.19`. Glass: **689312 — dense-flint class (vendor unresolved)**. Standalone `f = −38.683 mm`.

L91 begins the fixed negative rear group G31. The patent identifies it as a biconcave negative lens and an aspheric element (¶0050, ¶0054). Both surfaces, 16A and 17A, are aspheric. Its standalone power is −25.850913 D.

The patent's general discussion permits an aspheric lens in the third group for a bright optical system with a small F-number (¶0046). In Example 1, L91 fills exactly that position while remaining fixed during focus, separating rear-group aberration correction from the mass of the moving G21 assembly.

### L101 — Biconvex Positive, J3 Front Member

`nd = 1.49700`, `νd = 81.61`. Glass: **497816 — low-dispersion crown class (vendor unresolved)**. Standalone `f = +41.073 mm`.

L101 is the second 497816 high-Abbe element and the positive front member of the final direct-contact pair. The patent describes L101 as positive and biconvex (¶0050). Its standalone power is +24.346641 D.

As with J2, the numerical prescription's zero-air interface at surface 19 requires direct transition into the L111 glass. The data therefore models J3 as a cemented/direct-contact pair, but this particular bonding status is a prescription-derived inference rather than an explicit Example 1 prose statement.

### L111 — Negative Meniscus, J3 Rear Member

`nd = 1.58144`, `νd = 40.89`. Glass: **581409 — light-flint class (vendor unresolved)**. Standalone `f = −41.747 mm`.

L111 is the final refracting element and is described by the patent as a negative lens with meniscus form convex toward the image side (¶0050). Its standalone power is −23.953590 D, closely balancing L101's positive standalone power.

The isolated J3 pair therefore has only +0.386353 D of net power (`f ≈ +2.59 m`). As with J1, this near-neutral isolated power does not imply optical irrelevance in the assembled lens: the pair still affects the vergence and chromatic state presented to the image plane and forms part of the fixed negative G31 group.

## Glass Identification and Selection

The patent provides `nd` and `νd` coordinates but names no glass manufacturer. An independent glass audit compared the distinct coordinate pairs against current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita references and found multiple cross-vendor candidates for several rows. Exact or near-exact public coordinates therefore establish **equivalence classes**, not production provenance. The final data intentionally uses vendor-neutral six-digit/class labels.

| Stored glass label | `nd` | `νd` | Elements | Data-file interpretation |
| --- | ---: | ---: | --- | --- |
| 697555 — lanthanum-crown class | 1.69680 | 55.46 | L11 | Medium-dispersion lanthanum-crown class; vendor unresolved |
| 847238 — high-index dense-flint class | 1.84666 | 23.78 | L21 | High-index, high-dispersion negative member |
| 835427 — high-index flint class | 1.83481 | 42.72 | L31 | High-index positive partner in J1 |
| 001291 — ultra-high-index flint class | 2.00100 | 29.13 | L41 | Highest-index element in the prescription |
| 497816 — low-dispersion crown class | 1.49700 | 81.61 | L51, L101 | Highest-Abbe repeated coordinate; candidate for marketed two-ED count |
| 603380 — flint class | 1.60342 | 38.01 | L61 | Flint partner to high-Abbe L51 |
| 689312 — dense-flint class | 1.68863 | 31.19 | L71, L91 | Both double-aspheric negative elements |
| 593670 — dense phosphate-crown class | 1.59349 | 67.00 | L81 | Positive focus-group partner |
| 581409 — light-flint class | 1.58144 | 40.89 | L111 | Negative rear partner in J3 |

The final data contains no authored `nC`, `nF`, `ng`, or `dPgF` fields. That omission is deliberate. Example 1 publishes only d-line index and Abbe number; it does not publish the line indices or partial-dispersion quantities required to justify an apochromatic or anomalous-partial-dispersion claim. Although the patent's ray-fan figure is plotted at C, d, and F wavelengths, those plots do not supply per-element spectral indices.

The two 497816 elements are the strongest candidates for the production lens's marketed two ED elements because the coordinate is repeated and has the highest `νd` in the prescription. That is a production-correlation inference, not a patent material designation. The official construction drawing additionally marks the fifth and tenth element positions ED. The final data keeps the vendor-neutral **low-dispersion crown class** labels and adds inferred ED/APD display tags at L51/L101 through that product correlation. No patent-measured anomalous partial dispersion or specific supplier identity is asserted. Construction source: <https://www.lksamyang.com/upload/editor/1630727300>.

## Focus Mechanism

The focus status is **PUBLISHED**. No close-focus reconstruction is used. Example 1's Table 3 gives three object-distance states and both variable spacings, while ¶0045 states that G11 and G31 remain fixed and G21 moves independently from the image side toward the object side.

| Published state | D0 (mm) | D1: STO→L71 (mm) | D2: L81→G31 (mm) | FOV | Source Fno |
| --- | ---: | ---: | ---: | ---: | ---: |
| Infinity | ∞ | 10.562 | 1.000 | 83.74° | 1.86 |
| `m = −1/40` | 915.554 | 10.155 | 1.407 | 84.55° | 1.85 |
| `TL = 0.19 m` | 101.451 | 7.642 | 3.920 | 86.07° | 2.04 |

D1 + D2 remains 11.562 mm in all three rows. Relative to infinity, G21 moves 0.407 mm objectward at the intermediate state and 2.920 mm objectward at the nearest Table 3 state. Table 13 gives the higher-precision movement parameter `Ls = −2.9198 mm`.

The data file preserves all three source spacing rows. Its intermediate `focusT = 0.1893867656528162` is only a UI interpolation coordinate derived from the source-normalized focus-distance mapping; it is not a patent-published optical parameter and does not alter the published keyframe spacings.

The source calls Table 3 “zoom data” (¶0057), but the focal length is not zoomed. Only object distance and the two adjacent gaps of the translating G21 focus group change. The model therefore treats these rows as focus states of a fixed-focal-length prime.

The patent's `D0 = 101.451 mm` at the nearest state is not the complete object-to-sensor distance. Adding D0, the 71.690 mm active OAL, and the 15.994 mm filter-removed rear spacing gives 189.135 mm, consistent with the manufacturer's rounded 0.19 m minimum focus. This reference-plane interpretation is an author inference supported by the table arithmetic; the patent does not explicitly define D0 as a front-vertex object distance in those words.

Samyang identifies the production lens's autofocus drive as Linear STM. That is a product-level mechanical specification, not a statement contained in Example 1. The patent's optical contribution is the light two-element internal focus group and the fixed front/rear groups.

## Aspherical Surfaces

Example 1 has four aspherical surfaces on two physical elements: 12A and 13A on L71, and 16A and 17A on L91. The patent explicitly identifies L71 and L91 as aspheric lenses in ¶0054 and provides the coefficients in Table 2.

The patent equation is already the same standard conic convention used by LensVisualizer:

$$
z(r)=\frac{c r^2}{1+\sqrt{1-(1+K)c^2r^2}}+A_4r^4+A_6r^6+A_8r^8+A_{10}r^{10}+A_{12}r^{12},\qquad c=1/R.
$$

No conic conversion is required. No scale factor is applied, so the aspheric coefficients are copied directly rather than transformed. The source publishes no `A14` term; the data file's `A14: 0` entries are schema padding, not additional patent coefficients.

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) | A12 (mm⁻¹¹) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 12A | −2.3486810E+00 | +1.2773409E−04 | +5.0049330E−07 | −3.2547623E−08 | +2.9173457E−10 | −1.0415829E−12 |
| 13A | −1.4469360E+00 | +3.2842384E−04 | −6.0327396E−07 | −1.4526860E−08 | +1.3703348E−10 | −4.1052113E−13 |
| 16A | −1.0000000E+01 | −9.2691251E−05 | +4.4152933E−07 | −4.0515264E−10 | −4.8374620E−12 | +1.3667864E−14 |
| 17A | −1.0315520E+00 | −1.0271893E−04 | +7.8806043E−07 | −3.2185848E−09 | +7.7624063E−12 | −8.8352174E−15 |

Because the patent publishes no asphere clear-aperture heights, no departure can be called source-published. The following departures are computed only at the final **inferred and independently verified** semi-diameters stored in the data file:

| Surface | Verified modeled SD | Departure from same-R sphere | Rim angle |
| --- | ---: | ---: | ---: |
| 12A | 9.0 mm | +3.836422 mm | 30.968° |
| 13A | 10.0 mm | +3.746674 mm | 3.848° |
| 16A | 12.3 mm | −1.023940 mm | 14.858° |
| 17A | 11.4 mm | −0.778726 mm | 14.689° |

The L71 pair therefore carries the largest modeled departures from its same-radius spherical bases, while the L91 pair uses smaller negative departures at the inferred rims. The patent's own design rationale places aspheric correction immediately behind the stop and in the fixed rear group to control focus-dependent and small-F-number aberrations (¶0046). The patent does not specify a manufacturing process for these aspheres, so no molded/polished/hybrid method is assigned here.

## Chromatic Correction Strategy

The glass palette combines large index and Abbe-number contrasts rather than relying on a single low-dispersion group. G11 contains the 497816 high-Abbe L51 paired directly with the lower-Abbe L61, while G31 repeats the 497816 coordinate in L101 against the lower-Abbe L111. G21 itself combines `νd = 31.19` L71 with `νd = 67.00` L81.

The patent frames this strategy through its dispersion condition and states that one or more low-dispersion lenses may be used in each lens group to reduce chromatic variation (¶0117–¶0119). For Example 1, the highest `νd` member of each functional group is 81.61 in G11, 67.00 in G21, and 81.61 in G31, whose arithmetic mean is 76.74.

These d-line/Abbe relationships support discussion of first-order chromatic balancing only. They do **not** establish secondary-spectrum correction or apochromatism because the element-level C/F/g indices and `dPgF` values are absent and the vendor identities remain unresolved.

## Conditional Expressions and Source Contradictions

The patent summarizes the four embodiments in Table 13 and then discusses Equations 2–5 in ¶0114–¶0124. Example 1 exposes several source inconsistencies that are preserved rather than silently repaired.

| Condition | Printed condition | Example 1 value | Assessment |
| --- | --- | ---: | --- |
| Eq. 2 | `0.29 ≤ fEffective / Ltotal ≤ 0.39` | 0.3459 | Passes as printed |
| Eq. 3 | prose/equation prints `Vd_G-average ≤ 56.8`; Table 13 prints `≥ 56.8` | 76.7400 | Source contradiction; Table 13 and the accompanying “lower limit” explanation support the `≥` reading |
| Eq. 4 | `−0.44 ≤ Ls / Lf ≤ −0.32` | −0.2764 | Does **not** satisfy the printed interval |
| Eq. 5 | `0.54 ≤ 1 / na ≤ 0.63` | 0.5937 | Passes numerically, but the prose definition of `na` conflicts with Table 13 |

For Equation 4, recomputation from the Table 13 quantities gives `−2.9198 / 10.5620 = −0.276443855`, reproducing the listed −0.2764 but still lying outside the printed interval. The value is therefore internally arithmetic-consistent while the stated condition is not.

For Equation 5, the arithmetic mean of all eleven Example 1 element indices is 1.684443636, matching Table 13's `na = 1.6844`. Its reciprocal is 0.593667831, matching the reported Eq. 5 value. Paragraphs ¶0110 and ¶0124 nevertheless define `na` itself as the reciprocal of the average index. The table and the prose cannot both use the symbol in the same way.

The fourth source issue is terminological rather than numerical: ¶0057 labels Table 3 as “zoom data,” even though Example 1 is a fixed-focal-length design and the table varies only focus/object distance.

## Verification Summary

The load-bearing first-order quantities were recomputed from the literal arrays in the final `SamyangAF24mmf18FE.data.ts`, rather than copied forward from extraction notes.

| Quantity | Recomputed model | Source/design reference |
| --- | ---: | ---: |
| Effective focal length | 24.821890358 mm | Table 13: 24.8004 mm |
| Rear paraxial BFD from surface 20 | 16.029635312 mm | Filter-removed `in Air`: 15.994 mm |
| Modeled wide-open f-number | 1.861611751 | Table 3 design Fno: 1.86 |
| Petzval sum | +0.002684640593 mm⁻¹ | Computed, not patent-tabulated |
| Petzval reciprocal | 372.489339 mm | Computed paraxial reciprocal, not measured field curvature |

The EFL residual is +0.0867% and the BFD residual is +0.2228% relative to the rounded source values. These small differences are retained as source-precision effects; no patent radius, thickness, index, Abbe number, focus gap, or asphere coefficient is altered to force an exact first-order match.

The three functional groups independently reproduce the patent's sign sequence: G11 +38.023598 D, G21 +31.051779 D, and G31 −25.399040 D. The isolated direct-contact pairs are J1 −0.115800 D, J2 +6.156928 D, and J3 +0.386353 D. These isolated powers are not in-situ contribution factors and should not be added as if they partitioned the complete lens power.

The inferred aperture geometry was also checked at every published focus state. The smallest modeled element rim thickness is 0.808714 mm, the maximum actual rim slope is 55.0571°, the binding positive shared-gap intrusion ratio is 0.856954 of its air gap, and the minimum representative exact-ray surface clearance is 0.892021 mm. These values support the authored geometry but do not convert the inferred semi-diameters into source facts.

## Sources and References

1. **US 2024/0151940 A1**, *Lens Optical System and Imaging Apparatus Using the Same*, Ju Yeon Jo, Samyang Optics Co., Ltd., published May 9, 2024. Primary prescription source; Example 1, Figure 1, Tables 1–3 and 13, and ¶0041–¶0059 / ¶0108–¶0124. Google Patents: https://patents.google.com/patent/US20240151940A1/en
2. **Samyang official product page — AF 24mm F1.8 FE.** Production identity, Sony FE mount, 11 elements / 8 groups, 2 ASP / 3 HR / 2 ED, 0.19 m MFD, 0.21× magnification, 83.7° full-frame angle of view, nine blades, and Linear STM: https://www.lksamyang.com/en/product/product-view.php?seq=527
3. **Samyang launch notice, April 9, 2021.** Product launch timing and production construction: https://www.lksamyang.com/en/about/notice-view.php?seq=1116
4. **OHARA optical-glass catalog:** https://oharacorp.com/glass-catalog/
5. **HOYA optical-glass data and cross-reference:** https://www.hoya-opticalworld.com/english/datadownload/index.html and https://www.hoya-opticalworld.com/japanese/products/crossreference.html
6. **SCHOTT optical-glass data:** https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
7. **HIKARI optical-glass data:** https://www.nikon.com/business/components/lineup/materials/optical-glass/
8. **CDGM optical-glass database:** https://www.cdgmgd.com/database/toWebDatabase.htm?url=database
9. **Sumita optical-glass data:** https://www.sumita-opt.co.jp/en/download/
