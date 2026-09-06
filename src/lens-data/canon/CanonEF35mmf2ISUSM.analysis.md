## Patent Reference and Design Identification

**Patent:** US 2015/0205081 A1\
**Application Number:** 14/675,430\
**Priority:** March 28, 2012 (JP 2012-072806)\
**Filed:** March 31, 2015; division of U.S. application 13/801,467 filed March 13, 2013\
**Published:** July 23, 2015\
**Inventor:** Akira Mizuma\
**Applicant:** Canon Inc.\
**Title:** *Optical System and Imaging Apparatus Including the Same*\
**Embodiment analyzed:** Example 1 / First Numerical Embodiment

The prescription modeled here is the first numerical embodiment of US 2015/0205081 A1. The patent gives a 34.49 mm, F2.05 retrofocus wide-angle design with a 32.10° half field, 21.64 mm image height, 38.30 mm back focus, ten elements in eight air-separated groups, one image-stabilizing singlet immediately behind the aperture diaphragm, and one aspherical surface on the final positive lens (¶¶0030–0034, 0055, 0058–0060; Fig. 1).

The selected production correlation is the Canon EF 35mm f/2 IS USM. It is a project identification rather than a statement by Canon that this publication is the production prescription. The correlation rests on several converging facts:

1. Canon specifies the production lens as ten elements in eight groups, matching Example 1 exactly.
2. Canon specifies one glass-molded aspherical lens; Example 1 has exactly one aspherical surface, S18A, on the final positive element E10.
3. Canon markets the production lens as 35 mm f/2, while the patent tabulates 34.49 mm and F2.05. The final data preserve those design values separately from the rounded product specification.
4. Canon documents image stabilization, while Example 1 places a positive stabilizing singlet Gis directly behind the stop and devotes its principal design conditions to that unit.
5. Canon specifies a rear-focusing system, 0.24 m closest focus, and 0.24× maximum magnification. The patent fixes L1 and translates L2 during focusing; the constrained one-degree-of-freedom reconstruction described below reproduces the rounded 0.24× magnification at 0.24 m.
6. The Japanese priority date, March 28, 2012, precedes Canon's December 2012 market introduction of the production lens.

The product and design values are therefore intentionally kept distinct. The catalog identity is **CANON EF 35mm f/2 IS USM**, with a marketed 35 mm focal length and f/2 maximum aperture. The modeled prescription has a computed Gaussian EFL of 34.501498 mm and uses F2.05 as its optical aperture constraint. Canon lists a 63° diagonal angle of view for the production lens; Example 1 tabulates a 32.10° half angle, or 64.20° full design field.

## Optical Architecture

Example 1 is explicitly a retrofocus wide-angle system: the patent defines this family by a focal length shorter than the back focus (¶¶0005, 0026, 0055). The final prescription independently gives 34.501498 mm EFL and 38.300742 mm BFL, so the back focal distance exceeds the effective focal length. The total S1-to-image track is 104.50 mm, so the design is not telephoto under the `TL/EFL < 1` project definition.

The ten elements form eight air-separated groups in the following sequence:

`E1 – E2 – E3 – E4 – (E5+E6) – E7 – (E8+E9) – E10`

The patent divides the system kinematically into L1 and L2. L1 comprises E1 and E2 and remains fixed during focusing. L2 comprises E3 through E10, including the aperture stop and stabilizer, and translates as a unit along the axis (¶¶0030, 0033). Independent air-boundary calculations give L1 a very weak net positive EFL of +927.520 mm and L2 a much stronger positive EFL of +34.651 mm at the infinity spacing. These group powers are computed properties of the assembled groups, not sums of the standalone element focal lengths.

Ahead of the stop, E3 and E4 lead into the cemented pair Lc, whose net power is negative. Immediately behind the stop, E7 is the positive image-stabilizing singlet Gis. The image-side relay then uses the E8+E9 cemented pair followed by the final positive aspherical E10. The patent identifies the close placement of Gis to the diaphragm and the opposite-sign balance between Gis and Lc as the central architectural device for limiting stabilizer size and suppressing aberration variation during image stabilization (¶¶0035–0039).

The element focal lengths quoted below are **standalone air-boundary focal lengths** computed from each physical element in isolation. Cemented-group powers are stated separately, and neither should be confused with the elements' installed, in-situ behavior inside the complete system.

## Element-by-Element Analysis

### E1 — Negative Meniscus, convex to object

`nd = 1.48749, νd = 70.2. Glass: 487702 (vendor unresolved). f = −113.401636 mm.`

E1 is the front negative meniscus of the fixed L1 unit. The patent specifies this first element as a negative meniscus with its convex surface toward the object (¶0033). Its negative standalone power supplies the front-diverging action expected in a retrofocus wide-angle form, while the following positive E2 largely compensates that power within L1.

No separate aberration-correction task is assigned to E1 in the patent. Its interpretation as the front diverging member follows from its sign, shape, and placement within the verified retrofocus system.

### E2 — Positive Meniscus

`nd = 1.77250, νd = 49.6. Glass: 773496 (vendor unresolved). f = +102.722803 mm.`

E2 is the positive member that completes the fixed L1 unit. In isolation its power is comparable in magnitude to E1 but opposite in sign. Once the air spacing and thick-lens effects of the two elements are included, L1 is only weakly positive as a complete unit, with a computed air-boundary EFL of +927.520 mm.

This distinction is important: the individual +102.723 mm focal length of E2 is not the effective power of L1 in situ. The front unit mainly establishes the retrofocus geometry while the translating L2 carries most of the system's positive power.

### E3 — Negative Meniscus, concave to image

`nd = 1.58144, νd = 40.8. Glass: 581407-class (vendor unresolved). f = −34.187654 mm.`

E3 is the first element of the translating L2 unit. The patent describes this lens as a negative meniscus with its concave surface toward the image (¶0033). Its strong negative standalone power alters the convergence entering the following positive E4 and begins the internal power redistribution of L2.

Because E3 moves with the complete L2 unit during focus, its separations to E4 and the rest of L2 remain fixed in the modeled mechanism. Only the external gaps bordering L2 change.

### E4 — Biconvex Positive

`nd = 1.88300, νd = 40.8. Glass: 883408 (vendor unresolved). f = +28.090931 mm.`

E4 is one of the strongest positive standalone elements in the design. It follows the negative E3 and precedes the supplementary cemented pair Lc. The patent's architecture requires a positive lens in this position before Lc and the aperture diaphragm (¶0033).

E4's high refractive index allows substantial positive power in a short axial thickness. The data do not assign a vendor glass, and the 883408 coordinate label resolves to a catalog-equivalent dispersion curve without identifying the production supplier.

### E5/E6 — Cemented Lc: Positive Meniscus + Biconcave Negative

**E5:** `nd = 1.88300, νd = 40.8. Glass: 883408 (vendor unresolved). f = +35.348452 mm.`\
**E6:** `nd = 1.61293, νd = 37.0. Glass: 613370 (vendor unresolved). f = −25.127604 mm.`

E5 and E6 form the patent's cemented lens Lc on the object side of the diaphragm. The individual standalone powers have opposite signs, but the complete cemented pair has a verified air-boundary EFL of **−79.460196 mm**. That cemented net power, rather than either isolated element focal length, is the quantity used in the patent's Lc/Gis balance.

The patent explicitly describes Lc as a negative supplementary lens placed ahead of Gis to cancel aberration generated by the small stabilizing unit and to establish a useful image-shaking sensitivity (¶¶0038–0039, 0047–0048). It also states that this balance assists axial chromatic-aberration control (¶0047). That patent statement does not establish anomalous partial dispersion or apochromatic correction; the data contain only d-line index and Abbe-number information.

In the installed infinity paraxial ray, Lc bends the reduced angle in the opposite direction to Gis. That in-situ behavior is consistent with the patent's compensating-power description, but it should not be equated with the −79.460 mm standalone cemented-group EFL.

### E7 / Gis — Biconvex Positive Stabilizing Singlet

`nd = 1.69680, νd = 55.5. Glass: 697555 (vendor unresolved). f = +64.771182 mm.`

E7 is the single positive image-stabilizing lens Gis. It lies immediately behind the aperture stop, with 2.68 mm from the diaphragm plane to its object-side surface. The patent makes this near-stop placement fundamental: reducing the ray height at Gis permits a smaller stabilizer and reduces off-axis aberration variation as the unit moves laterally (¶¶0035–0037).

For image stabilization, Gis is displaced in a direction containing a component perpendicular to the optical axis (¶0040). The patent's first-embodiment lateral-aberration diagrams compare the centered reference state with a 0.3° image-stabilization correction state (Figs. 3A–3B). It does not publish the corresponding physical decenter of E7, so no stabilizer travel is inferred in the data.

The standalone E7 focal length is +64.771182 mm. The verified Example-1 image-shaking sensitivity is 0.614385, reproducing Table 1's 0.614 value. This sensitivity is an in-system paraxial quantity and is not the reciprocal of E7's standalone focal length.

### E8/E9 — Rear Cemented Pair J2: Negative Meniscus + Positive Meniscus

**E8:** `nd = 1.73800, νd = 32.3. Glass: 738323 (vendor unresolved). f = −24.324857 mm.`\
**E9:** `nd = 1.59522, νd = 67.7. Glass: 595677 (vendor unresolved). f = +36.470531 mm.`

E8 and E9 form the negative/positive cemented pair that follows Gis. The patent specifies this cemented sequence on the image side of the stabilizer (¶0034). The data annotate it as `J2`; that label is a LensVisualizer convenience rather than a patent designation.

The isolated elements are relatively strong and opposite in sign, while the complete cemented pair has a verified air-boundary EFL of **−105.993967 mm**. This is another case where cemented net power differs materially from the individual focal lengths. Within the complete lens, the pair works at the ray heights and conjugates established by Gis and therefore cannot be reduced to its standalone cemented EFL when discussing in-situ aberration behavior.

The large dispersion contrast between E8 (`νd = 32.3`) and E9 (`νd = 67.7`) is directly present in the prescription and is consistent with ordinary chromatic balancing in a cemented pair. No claim of ED, anomalous dispersion, or APO behavior is justified without resolved line-index or partial-dispersion data.

### E10 — Positive Meniscus with S18A Asphere

`nd = 1.58313, νd = 59.4. Glass: 583594-class (vendor unresolved). f = +52.756446 mm.`

E10 is the final positive lens and carries the prescription's sole asphere on its front surface, S18A. The patent specifically prefers a positive aspherical lens closest to the image plane because this placement can reduce sagittal image-plane tilt toward the field edge (¶0049).

Canon's production documentation states that the EF 35mm f/2 IS USM uses one glass-molded aspherical lens. Under the selected production correlation, E10/S18A is the patent counterpart to that sole production asphere; Canon does not identify this patent publication as the production prescription.

The final element also works immediately ahead of the long rear air space. Its modeled E10 rim geometry is constrained by the inferred semi-diameter rather than a published clear aperture, so quantitative rim-departure statements are tied explicitly to that modeled aperture in the asphere section below.

## Glass Identification and Selection

The patent supplies only d-line refractive index `nd` and Abbe number `νd`. It does not name glass manufacturers and does not publish per-element `nC`, `nF`, `ng`, `PgF`, `dPgF`, or Sellmeier coefficients. The final data therefore retain conservative six-digit/code-family labels rather than asserting a vendor melt.

| Authored glass label | nd | νd | Element(s) | Prescription role |
|---|---:|---:|---|---|
| 487702 (vendor unresolved) | 1.48749 | 70.2 | E1 | Front negative meniscus |
| 773496 (vendor unresolved) | 1.77250 | 49.6 | E2 | Positive member of fixed L1 |
| 581407-class (vendor unresolved) | 1.58144 | 40.8 | E3 | Negative front member of L2 |
| 883408 (vendor unresolved) | 1.88300 | 40.8 | E4, E5 | Strong positive elements before the stop |
| 613370 (vendor unresolved) | 1.61293 | 37.0 | E6 | Negative member of Lc |
| 697555 (vendor unresolved) | 1.69680 | 55.5 | E7 / Gis | Positive stabilizing singlet |
| 738323 (vendor unresolved) | 1.73800 | 32.3 | E8 | Negative member of rear cemented pair |
| 595677 (vendor unresolved) | 1.59522 | 67.7 | E9 | Positive member of rear cemented pair |
| 583594-class (vendor unresolved) | 1.58313 | 59.4 | E10 | Final positive aspherical lens |

Catalog comparison against OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA finds several exact or near-exact optical-coordinate matches, often with more than one vendor occupying the same `nd`/`νd` position. Those are catalog-derived equivalences, not evidence of the actual Canon melt. The conservative labels in the data are therefore more defensible than assigning a specific catalog name.

The prescription uses substantial ordinary dispersion contrast, especially in Lc and the rear E8+E9 cemented pair. The patent additionally constrains the stabilizer glass to `νdis > 35`, preferably `νdis > 40`, and Example 1 uses `νd = 55.5` (¶¶0050, 0053–0054). This supports a conventional chromatic-correction discussion, but not an APO or anomalous-partial-dispersion claim.

## Focus Mechanism

Canon describes the production EF 35mm f/2 IS USM as using a rear-focusing system. The patent gives the optical kinematics more specifically: L1, surfaces S1–S4, is fixed, while the complete positive L2 unit, surfaces S5–S19 including the aperture stop, translates on the optical axis (¶¶0030, 0033). No finite-distance spacing table is published for Example 1.

The data therefore use a **CONSTRAINED_RECONSTRUCTION**, not a source-published close-focus state. The mechanism has one axial degree of freedom, so the reconstruction preserves L2 internally and varies only the gap ahead of L2 and the back-focus gap behind it. Canon's rounded 0.24 m closest-focus distance provides the conjugate target; the rounded 0.24× maximum magnification provides an independent check. For this reconstruction, the 0.24 m distance is normalized from the object plane to the image/sensor plane; with the 104.50 mm lens track fixed, the close-state object plane is 135.50 mm in front of S1.

| Spacing / result | Infinity | Reconstructed 0.24 m state |
|---|---:|---:|
| D4, S4→S5 | 9.910000 mm | 1.686668 mm |
| BF, S19→image | 38.300000 mm | 46.523332 mm |
| D4 + BF | 48.210000 mm | 48.210000 mm |
| L2 axial shift | 0 | 8.223332 mm objectward |
| Gaussian EFL | 34.501498 mm | 34.199596 mm |
| Absolute magnification | — | 0.240100 |

The solved close state has a paraxial conjugacy residual of `8.53 × 10⁻14 mm`. Solving the inverse problem from exactly 0.24× instead predicts an object-to-image distance of 240.056 mm, only 0.056 mm from the rounded 0.24 m Canon specification. The agreement is the basis for retaining the reconstruction, but the close-state spacings remain a model rather than patent-published data.

Canon documents ring-USM drive for the production lens. The patent itself specifies the moving optical unit but does not tie that movement to a particular production motor or mechanical cam law.

## Aspherical Surfaces

The sole asphere is S18A, the front surface of E10. Patent ¶0058 defines the sag as

$$
x(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}
+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

The patent's `k` maps directly to the standard conic constant `K`; therefore `K = 0` is the spherical-base case. The final data use:

| Coefficient | S18A value |
|---|---:|
| K | 0 |
| A4 | −1.49529 × 10⁻5 mm⁻3 |
| A6 | +4.91763 × 10⁻9 mm⁻5 |
| A8 | −4.11063 × 10⁻11 mm⁻7 |
| A10 | 0 |
| A12 | 0 |
| A14 | 0 |

A10 and A12 are not tabulated for Example 1 and are represented as zero; A14 is the schema-required zero term beyond the published polynomial. No uniform scale was applied (`s = 1.000000`), so the patent radii, spacings, image-plane coordinates, and asphere coefficients remain unscaled. Consequently, no `A_p/s^(p-1)` coefficient transformation is required, and K remains unchanged.

The patent does not publish clear apertures or semi-diameters. S18A's authored `sd = 11.9 mm` is therefore a validated modeling inference, not a source dimension. At that semi-diameter the verified polynomial departure is **−0.302422 mm** from the K=0 spherical base, and the actual modeled rim-slope angle is 13.255°.

The dominant negative A4 term drives the rim toward more negative sag relative to the spherical base; the positive A6 term partially offsets that change and the negative A8 term reinforces it at higher radial order. The patent links the final positive asphere to reduced sagittal image-plane tilt at the periphery (¶0049). Canon identifies the production lens's single asphere as glass-molded, but does not publish the production asphere coefficients on its product page.

## Image Stabilization

The patent's stabilization strategy is unusually explicit. Gis is kept adjacent to the image side of the diaphragm so the off-axis ray height through the moving element remains small. The stated purposes are to limit the stabilizer's effective diameter, reduce the load on its drive mechanism, and reduce aberration variation during correction (¶¶0035–0037).

The negative cemented Lc pair lies on the object side of the diaphragm as a supplementary unit. The patent says Lc is intended to cancel aberration generated by Gis and to establish a useful power balance for image-shaking sensitivity (¶¶0038–0039, 0047–0048). The verified air-boundary focal lengths are −79.460196 mm for Lc and +64.771182 mm for Gis. Their ratio gives `−fc/fis = 1.226783`, reproducing the Example-1 Table 1 value of 1.23.

This pair of group powers should not be read as two isolated thin lenses inside the assembled camera lens. In situ, each unit acts at the ray height and reduced angle delivered by the preceding groups. The standalone/cemented EFLs quantify the groups themselves; the verified image-shaking sensitivity of 0.614385 quantifies their installed paraxial action in the complete system.

Canon's product documentation confirms that the production lens includes optical image stabilization. The patent evaluates the first embodiment at a 0.3° correction state in its lateral-aberration figures, but does not supply the physical Gis decenter needed to produce that correction. The data therefore do not invent a lateral stabilizer travel.

## Conditional Expressions

The patent defines five principal conditions controlling stabilizer placement, stabilizer power, Lc/Gis power balance, image-shaking sensitivity, and Gis dispersion (¶¶0041–0054). Using the final prescription and the patent's stated `f = 34.49 mm` where Table 1 does so, independent calculation reproduces all five Example-1 entries.

| Eq. | Patent condition | Computed Example 1 | Patent Table 1 |
|---|---|---:|---:|
| (1) | `0 < Dis/DL < 0.25` | 0.040483 | 0.040 |
| (2) | `0.3 < fis/f < 3.5` | 1.877970 | 1.88 |
| (3) | `0.3 < −fc/fis < 3.5` | 1.226783 | 1.23 |
| (4) | `0.1 < |(1 − βis)βr| < 1.3` | 0.614385 | 0.614 |
| (5) | `35 < νdis` | 55.5 | 55.5 |

Condition (1) is governed directly by the 2.68 mm stop-to-Gis separation and the 66.20 mm first-to-last-surface length. Condition (2) limits the positive Gis power relative to the whole lens. Condition (3) governs the opposite-sign balance of Lc and Gis. Condition (4) is the in-system image-shaking sensitivity rather than a standalone group power. Condition (5) constrains the d-line Abbe number of the stabilizing singlet.

The computed values also place conditions (1), (2), (4), and (5) inside the preferred ranges stated in the patent. No stronger chromatic interpretation is drawn from condition (5) than the patent supports.

## Verification Summary

The final data file preserves the Example-1 prescription without a uniform scale or a numerical patent correction. Independent sequential height/reduced-angle tracing and an ABCD product agree on an EFL of **34.501498 mm**, compared with the patent's rounded 34.49 mm, and a BFL of **38.300742 mm**, compared with the patent's 38.30 mm. The S1-to-image track is exactly 104.50 mm from the authored distances. The stop geometry reproduces the modeled **F2.05** aperture exactly.

Surface-by-surface Petzval evaluation using `φ/(n·n′)` gives a sum of **0.003998541 mm⁻¹**, whose reciprocal is 250.091 mm. This is a paraxial Petzval quantity; it is not asserted to be the radius of the actual best-focus image surface.

The patent publishes the location of the aperture diaphragm as S12 but does not publish its diameter. The authored physical stop semi-diameter, **9.767427 mm**, is inferred from the verified F2.05 pupil geometry. The patent likewise publishes no surface semi-diameters. All authored `sd` values are model-derived from the stop/pupil solution, exact meridional ray envelopes, the patent's 21.64 mm image height and 32.10° half field, the reconstructed 0.24 m state, and Fig. 1 proportions.

The screenshot-led 600-dpi Fig. 1 review refined S1/S2 to 25.2 mm, S5/S6 to 15.2/12.6 mm, Gis to 10.5 mm, and S18A/S19 to 11.9 mm. The front meniscus and final asphere now have level rims closer to the drawing. S5/S6 excludes the drawn mounting flange. Smaller central and rear cemented-pair rims were rejected because they clipped rays, including at the internal cemented interface. The retained apertures pass surface validation, image-circle coverage, and render diagnostics through infinity/close focus. The default infinity 0.6-field, ±0.75-pupil fan remains clear; full-field vignetting is still possible. These are modeling apertures, not patent clear-aperture specifications.

No sensor cover glass, filter, inactive dummy plane, flare cutter, blocker, mirror, or other mechanical plane appears in the Example-1 numerical prescription, so no such optical plate was omitted or replaced by an air-equivalent spacing. No patent numerical value was corrected. Machine-extracted text contains OCR defects, but the modeled values correspond to the rendered source table rather than to those OCR errors.

The data also contain no vendor-resolved spectral annotation: `nC`, `nF`, `ng`, and `dPgF` are absent. Accordingly, this analysis makes no APO or anomalous-partial-dispersion claim.

## Sources and References

- Akira Mizuma, **US 2015/0205081 A1**, *Optical System and Imaging Apparatus Including the Same*, Canon Inc., published July 23, 2015. Relevant material: Fig. 1; Figs. 3A–3B; ¶¶0026–0055; ¶¶0058–0060; Table 1.
- Canon Camera Museum, **EF35mm f/2 IS USM**: <https://global.canon/en/c-museum/product/ef426.html>. Production identity, December 2012 introduction, 10 elements/8 groups, 8-blade diaphragm, 0.24 m MFD, 0.24× maximum magnification, image stabilization, ring USM, and one glass-molded aspherical lens.
- Canon U.S.A., **EF 35mm f/2 IS USM Support — Technical Specifications**: <https://www.usa.canon.com/support/p/ef-35mm-f-2-is-usm>. Production focal length/aperture, 10/8 construction, 63° diagonal angle of view, rear-focusing system, and 0.24 m closest focus.
- OHARA optical-glass catalogs: <https://www.ohara-inc.co.jp/en/product/catalog/>.
- HOYA optical-glass data: <https://www.hoya-opticalworld.com/english/datadownload/index.html>.
- SCHOTT optical-glass data: <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>.
- HIKARI optical-glass catalog: <https://www.hikari-g.co.jp/optical_glass/catalog/>.
- CDGM optical-glass database: <https://www.cdgmgd.com/database/toWebDatabase.htm?url=database>.
- SUMITA optical-glass downloads: <https://sumita-opt.co.jp/en/download/>.
