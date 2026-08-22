# MAMIYA SEKOR AF 55mm f/2.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 1997-297263 A<br>
**Application Number:** JP H08-109712<br>
**Filed:** 1996-04-30<br>
**Published:** 1997-11-18<br>
**Inventor:** Hisataro Shimada (島田 久太郎)<br>
**Applicant:** Mamiya-OP Co., Ltd. (マミヤ・オーピー株式会社)<br>
**Title:** 逆望遠型広角レンズ (retrofocus wide-angle lens)
**Embodiment analyzed:** Example 1 / 実施例1

The data file transcribes Example 1 of JP 1997-297263 A and treats it as the fixed production correlation for the Mamiya Sekor AF 55mm f/2.8. The patent itself does not identify a commercial product, so that correlation remains an author/modeling inference rather than a manufacturer-confirmed patent assignment.

Several independent facts converge on the selected correlation. The patent states that Examples 1–4 are F/2.8 designs with a full field of `2ω = 64°` (¶0011), and Example 1 is normalized to `f = 1.0` with `fb/f = 1.08` (¶0012). Mamiya's manufacturer-authored lens literature gives the AF 55mm f/2.8 a 7-element/6-group construction and a 64° angle of view, while Mamiya's 645AF system documentation places it in the Mamiya 645 AF mount for the 6×4.5 format. Mamiya's historical system chronology places the 645AF introduction in 1999, after this application's 1996 filing and 1997 publication.[1][2][3]

The optical section in Figure 1, reproduced on patent page 5, shows the same high-level sequence carried into the data file: a front negative Group A, a cemented Group B, the aperture stop, and a four-element Group C. The drawing is schematic and supplies no clear-aperture dimensions, so it is used for architectural confirmation rather than numerical semi-diameter extraction.

The patent prescription is dimensionless at `f = 1.0`. The LensVisualizer model applies a uniform scale factor of `s = 55.0`, producing a computed design EFL of `54.999970204812 mm` while retaining the marketed focal length separately as `55 mm`. Every radius and axial spacing is scaled by the same factor. The design is entirely spherical, so there are no aspheric coefficients to transform.

The aperture-stop position is a source fact: the rendered patent table contains an explicit flat stop row between B3 and C1. The stop diameter is not published. The modeled `STO.sd = 12.204586191723 mm` is therefore an inference obtained by imposing the patent's F/2.8 on the verified paraxial entrance-pupil geometry. Likewise, all refracting-surface semi-diameters are modeled values because the patent contains no clear-aperture or aperture-height table.

No sensor cover glass, filter plate, dummy plane, flare cutter, or mechanical component is present in the selected prescription, and none is inserted into the model.

## Optical Architecture

The design is a three-functional-group retrofocus prime with seven physical elements in six air-separated groups. From object to image, the patent architecture is:

1. **Group A:** one negative meniscus, convex toward the object;
2. **Group B:** a converging cemented doublet formed by a biconvex positive element and a negative meniscus;
3. **Aperture stop:** located between Groups B and C; and
4. **Group C:** four lenses in the sequence positive, biconcave negative, positive meniscus, positive meniscus.

The retrofocus classification is independently verified from the final TypeScript prescription. The computed EFL is `54.999970204812 mm`, while the paraxial back focal distance from the C8 vertex is `59.552260152106 mm`, giving `BFD/EFL = 1.082768952971`. This reproduces the patent's rounded `fb/f = 1.08` and satisfies the project's retrofocus criterion because the back focal distance exceeds the effective focal length.

Isolated powers should not be confused with the behavior of the assembled system. Group A, identical to L1 in isolation, has an equivalent focal length of `−49.049651 mm`. The cemented Group B doublet has a net equivalent focal length of `+39.965087 mm`, even though its two constituent elements have standalone focal lengths of `+22.930145 mm` and `−49.667315 mm`. The four-element Group C, isolated in air, has a much weaker net equivalent focal length of `+201.456654 mm`. These values are not additive: with the actual intergroup separations included, the cumulative A+B system is already convergent at `+66.115704 mm`, and Group C then brings the complete prescription to `+54.999970 mm`.

That power distribution is consistent with the patent's design objective. The front negative group provides the long back focus required by an SLR wide-angle lens, while the compact positive rear system corrects the aberration penalties created by the strongly asymmetric retrofocus geometry. The patent specifically frames distortion and lateral chromatic aberration as coupled problems and uses glass selection in the front and rear groups to control that interaction (¶0006–¶0008).

## Element-by-Element Analysis

### L1 / A1 — Negative Meniscus

`nd = 1.516330`, `νd = 64.15`. Glass: `BSL7` legacy OHARA coordinate match, code `516642`. Standalone focal length: `−49.049651 mm`.

L1 is the complete patent Group A. Its negative power establishes the divergent front end that shifts the system principal planes rearward and creates the long back-focus condition. The patent requires this group to use low-index, low-dispersion glass through Conditions (1) and (2), and Example 1 falls inside both ranges.

The patent's chromatic strategy is not to suppress all front-group lateral color in isolation. Paragraph ¶0007 instead describes allowing an appropriate amount of lateral chromatic aberration in the front divergent system and correcting the resulting wide-angle color behavior later with anomalous-dispersion positive power in Group C. L1 therefore participates in a system-level chromatic balance rather than acting as an independently achromatized front element.

### L2 + L3 / B1–B3 — Cemented Converging Doublet

**L2:** `nd = 1.712995`, `νd = 53.84`. Glass: `LAL8` legacy OHARA coordinate match, code `713538`. Standalone focal length: `+22.930145 mm`.<br>
**L3:** `nd = 1.623740`, `νd = 47.09`. Glass: `BAM8` legacy OHARA coordinate match, code `624471`. Standalone focal length: `−49.667315 mm`.<br>
**Cemented doublet net focal length:** `+39.965087 mm`.

The B2 surface is the cemented interface. In the data model it correctly carries the downstream L3 glass index and `elemId`, with no synthetic cement layer. This preserves the patent's physical two-element cemented group.

The positive L2 and negative L3 powers combine into a net converging group that reverses the strongly negative action of Group A before the stop. Paragraph ¶0008 gives this doublet a particularly important balancing role: if the prescribed low-index/low-dispersion glass conditions in Groups A and C are not met, the correction burden shifts toward the Group B cemented pair, degrading axial chromatic aberration, distortion, Petzval balance, and astigmatism. The doublet is therefore not merely a power relay; it is part of the patent's coupled monochromatic/chromatic correction scheme.

### L4 / C1 — Positive Meniscus

`nd = 1.799516`, `νd = 42.24`. Glass: `LAH52` legacy OHARA coordinate match, code `800422`. Standalone focal length: `+53.491150 mm`.

L4 is the first positive lens of Group C and sits immediately behind the stop. Its front surface is extremely weak compared with its rear surface, so most of its isolated power is associated with the strongly curved rear boundary. In the assembled rear group it precedes the first patent-defined air lens, whose geometry is controlled by Conditions (5) and (7).

The location immediately behind the stop gives L4 strong leverage over axial and zonal ray behavior without requiring a large physical diameter. Paragraph ¶0009 attributes the first Group-C air-lens geometry to control of higher-order spherical aberration and to balancing axial and off-axis correction across the field.

### L5 / C2 — Biconcave Negative

`nd = 1.739997`, `νd = 31.71`. Glass: `BPH50` legacy OHARA coordinate match, code `740317`. Standalone focal length: `−25.561149 mm`.

L5 is the strongest negative element in the rear group. It is biconcave and is positioned between the two air spaces that the patent treats explicitly as aberration-control structures. Its negative power locally counteracts the surrounding positive lenses and gives the rear group the curvature freedom needed to control spherical aberration, coma, field behavior, and distortion without abandoning the long-back-focus architecture.

Because L5 lies between L4 and L6, it participates in both patent-defined air lenses: the C2–C3 gap on its object side and the C4–C5 gap on its image side. The corresponding conditions are discussed below under **Air Lenses**.

### L6 / C3 — Positive Meniscus, Anomalous-Dispersion Position

`nd = 1.496999`, `νd = 81.61`. Glass: `FPL51` legacy OHARA coordinate match, code `497816`. Standalone focal length: `+89.960881 mm`.

L6 is the Example-1 element that satisfies the patent's low-index, low-dispersion anomalous-dispersion requirement for either C5 or C7. Conditions (3) and (4) are met at C5 by `nd = 1.496999` and `νd = 81.61`. The patent uses this glass choice to address lateral chromatic overcorrection associated with distortion correction in a wide-angle retrofocus system (¶0007–¶0008).

The data file carries catalog-derived line indices for this element: `nC = 1.4951381834`, `nF = 1.5012277589`, and `ng = 1.5045016696`. Under the project definition of `dPgF` as the deviation of `Pg,F` from the Schott K7/F2 normal line, those indices give `dPgF = +0.0311013769`. OHARA uses a different anomalous-dispersion normal-line convention and publishes `Δθg,F = +0.0280` for current S-FPL51. Both conventions identify the glass as strongly anomalous in the same direction. These values support an anomalous-partial-dispersion interpretation; they do not justify calling the complete lens apochromatic.

The glass name remains deliberately qualified. The patent does not name OHARA or any glass manufacturer. The `FPL51` label records a legacy OHARA coordinate match recovered from the patent's `nd/νd` pair and checked against OHARA dispersion data; it is not presented as a documented production melt identity. Current OHARA S-FPL51 retains the same six-digit code `497816` and closely related C/d/F/g coordinates, which independently supports the family-level identification.[4][5]

### L7 / C4 — Final Positive Meniscus

`nd = 1.740999`, `νd = 52.65`. Glass: `LAL61` legacy OHARA coordinate match, code `741527`. Standalone focal length: `+96.776200 mm`.

L7 supplies the final positive refractive action before the image space. Its numerical Example-1 shape also exposes a direct contradiction between the patent prose and the worked prescriptions. The descriptive text says that the fourth positive lens of Group C presents a weak-curvature surface toward the image side. Example 1 instead has `C7 = −349.5042375 mm` and `C8 = −59.7190055 mm` after scaling, so the weaker surface is C7 on the object side. The same directional contradiction appears in Examples 2–4.

The model follows the numerical Example-1 table rather than silently altering the prescription to satisfy the prose. This is a source conflict, not an optical correction introduced by the model.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number but no glass trade names. The data file therefore preserves every patent `nd/νd` value exactly and treats the glass strings as catalog-derived annotations. Stage-1 matching found a coherent seven-element set of historical, no-prefix OHARA coordinates; the six-digit codes provide the most stable identifiers because present-day `S-` and `L-` families are not always numerically identical to their historical namesakes.

| Element | Patent `nd` | Patent `νd` | Data-file glass annotation | Code | `nC` | `nF` | `ng` | `dPgF` |
|---|---:|---:|---|---:|---:|---:|---:|---:|
| L1 | 1.516330 | 64.15 | BSL7 legacy OHARA match | 516642 | 1.5138548101 | 1.5219035855 | 1.5262107819 | −0.0007626 |
| L2 | 1.712995 | 53.84 | LAL8 legacy OHARA match | 713538 | 1.7089752941 | 1.7222167086 | 1.7294407354 | −0.0076682 |
| L3 | 1.623740 | 47.09 | BAM8 legacy OHARA match | 624471 | 1.6197849268 | 1.6330286011 | 1.6404904035 | −0.0011586 |
| L4 | 1.799516 | 42.24 | LAH52 legacy OHARA match | 800422 | 1.7938706534 | 1.8127979818 | 1.8235125549 | −0.0066599 |
| L5 | 1.739997 | 31.71 | BPH50 legacy OHARA match | 740317 | 1.7331846087 | 1.7565209957 | 1.7702940206 | −0.0002685 |
| L6 | 1.496999 | 81.61 | FPL51 legacy OHARA match | 497816 | 1.4951381834 | 1.5012277589 | 1.5045016696 | +0.0311014 |
| L7 | 1.740999 | 52.65 | LAL61 legacy OHARA match | 741527 | 1.7367286812 | 1.7508030633 | 1.7585026852 | −0.0081783 |

The line-index and `dPgF` fields are catalog-derived rather than patent-published. The project defines `dPgF` on the Schott normal line, so each value in the table is recomputed from the stored `nC`, `nF`, and `ng` values using Schott equation 10.8 and the catalog-consistent Abbe number recovered from those line indices. The rounded patent `νd` values remain unchanged in the data file. The vendor identity remains inferential because the patent is silent on the actual glass supplier.

The most important glass selection is L6. The patent explicitly requires anomalous dispersion at C5 or C7. OHARA's current S-FPL51 data report `Δθg,F = +0.0280` under OHARA's native normal-line convention,[5] while the same C/F/g coordinate set yields the project-standard Schott-line value `dPgF = +0.0311014` using Schott equation 10.8.[6] The positive deviation is therefore physically meaningful and consistent with the patent's stated anomalous-dispersion strategy, without implying an apochromatic classification for the complete lens.

## Focus Mechanism

The production AF 55mm f/2.8 is described by Mamiya literature as using a floating-element mechanism, with a minimum focusing distance of `0.45 m` and a maximum magnification of `0.18×`.[3] Those are manufacturer product specifications, not parameters published in JP 1997-297263 Example 1.

The patent supplies only one prescription state. It gives no focus-spacing table, object-distance table, moving-group designation, travel distance, or magnification-dependent geometry. The data file therefore uses the focus status `NO_INTERNAL_RECONSTRUCTION`, has an empty `var` object, and models only the published infinity-like state.

No attempt is made to infer which physical element or subgroup performs the production floating motion. The marketed `0.45 m` minimum focus distance is retained as product metadata only; it is not used to synthesize an underdetermined close-focus prescription.

## Chromatic Correction Strategy

The patent's chromatic argument is unusually explicit for this otherwise simple seven-element design. In a retrofocus wide-angle system, correcting negative distortion can drive lateral chromatic aberration toward overcorrection at the maximum field, especially for short wavelengths (¶0006). The proposed remedy is a coordinated glass strategy rather than simply adding more elements.

First, the front divergent Group A uses low-index, low-dispersion glass. Second, one of the later positive lenses at C5 or C7 must also use low-index, low-dispersion glass with anomalous dispersion. Paragraph ¶0007 states that the front group is allowed to produce a controlled amount of lateral color, while the anomalous-dispersion positive power in the rear group corrects the field-dependent overcorrection created by distortion correction.

Example 1 selects the C5 position, corresponding to L6 in the data file. The patent conditions require `1.48 < n < 1.52` and `67 < νd < 85` for the qualifying C5/C7 element; L6 uses `1.496999 / 81.61`. The catalog-derived `nC/nF/ng` values and positive Schott-line `dPgF` provide independent dispersion evidence that this is an anomalous-partial-dispersion glass family rather than a classification inferred from Abbe number alone.

Paragraph ¶0008 also makes clear that Group B is part of this chromatic balance. If the front and rear glass conditions are violated, correction load shifts into the cemented doublet and the patent predicts simultaneous deterioration of axial color, distortion, Petzval sum, and astigmatism. The design therefore treats lateral color, axial color, distortion, and field curvature as coupled system variables.

## Air Lenses

Two curved air spaces inside Group C are explicit design variables in the patent rather than incidental mechanical gaps.

The first lies between the rear surface of L4 (C2) and the front surface of L5 (C3). Its scaled axial thickness is `1.4668115 mm`; normalized by the modeled focal length it reproduces `dc2/f = 0.0266693`. Its curvature ratio is `rc2/rc3 = 1.517981909878`. Paragraph ¶0009 states that this air-lens shape is used to control higher-order spherical aberration at the periphery and to maintain balance between axial and off-axis correction.

The second lies between the rear surface of L5 (C4) and the front surface of L6 (C5). Its scaled axial thickness is `3.3498245 mm`, corresponding to `dc4/f = 0.0609059`, and its curvature ratio is `rc4/rc5 = −0.828890599110`. Paragraph ¶0010 ties this air space to higher-order off-axis correction, particularly coma symmetry, image-field behavior, and short-wavelength lateral color.

These air spaces help explain why the rear Group C can have only weak net positive power in isolation while still exerting substantial aberration control in situ: the surface curvatures and gaps shape ray bending locally even when their net first-order power is modest.

## Conditional Expressions

Example 1 satisfies all eight patent conditions when evaluated from the final scaled TypeScript prescription. Ratios involving lengths or radii are scale-invariant, so the uniform `s = 55` transformation does not alter the condition values.

| Patent condition | Example-1 value | Result |
|---|---:|---|
| `1.48 < Na < 1.52` | 1.516330 | Pass |
| `59 < νa < 72` | 64.15 | Pass |
| `1.48 < Nc5 or Nc7 < 1.52` | `Nc5 = 1.496999` | Pass |
| `67 < νc5 or νc7 < 85` | `νc5 = 81.61` | Pass |
| `0.02 < dc2/f < 0.07` | 0.0266693 | Pass |
| `0.045 < dc4/f < 0.065` | 0.0609059 | Pass |
| `1.15 < rc2/rc3 < 1.55` | 1.517981909878 | Pass |
| `−0.95 < rc4/rc5 < −0.47` | −0.828890599110 | Pass |

The patent's symbol-definition sentence after the inequalities is internally incomplete: it defines only `dc1`, `dc2`, `rc1`, and `rc2` even though Conditions (6)–(8) also use `dc4`, `rc3`, `rc4`, and `rc5`. Paragraph ¶0016 and the worked numerical table make the intended sequential C-surface notation clear. The model preserves the printed numerical values and does not alter the conditions.

## Verification Summary

Independent reduced-angle sequential tracing and an ABCD reconstruction of the final TypeScript arrays agree to machine precision. The modeled EFL is `54.999970204812 mm`; the back focal distance from C8 is `59.552260152106 mm`; and `BFD/EFL = 1.082768952971`, reproducing the patent's rounded `fb/f = 1.08`.

With the authored stop semi-diameter, the paraxial model returns `f/2.800000`. This is an internal consistency check, not an independent measurement of the patent stop diameter, because the stop size was inferred by imposing the patent's published F/2.8.

The surface-by-surface Petzval sum, accumulated as `φ/(n·n′)`, is `+0.002300210577326279 mm⁻¹`. The model also passes the current geometry checks implemented in the independent verifier: the minimum modeled element edge thickness is `1.723467 mm`, the maximum actual spherical rim-slope angle is `43.605786°`, and the largest positive shared-band cross-gap sag intrusion is `0.588078` of the corresponding air gap. All modeled on-axis and off-axis sizing rays remain within the authored semi-diameters.

Those semi-diameters are modeling inferences, not patent data. They were derived from exact spherical traces using the F/2.8 on-axis marginal bundle, a 0.60-field off-axis fan at `19.2°`, and the full-field `32°` chief ray, followed by conservative clearance. No layout parameter is used to conceal an invalid surface geometry.

The prescription contains no aspherical surfaces and no omitted optical plate whose effect must be folded into the rear spacing. The final `C8.d` is the independently computed paraxial image distance for the scaled Example-1 state.

## Sources and References

1. JP 1997-297263 A, **逆望遠型広角レンズ**, Mamiya-OP Co., Ltd., inventor Hisataro Shimada; filed 1996-04-30, published 1997-11-18. The supplied Japanese publication is the numerical prescription authority. Patent metadata cross-check: <https://jglobal.jst.go.jp/detail?JGLOBAL_ID=200903091372604850>.
2. Mamiya UK historical system chronology, **Mamiya Masters of the Medium — 80–90**, identifying the 1999 Mamiya 645AF and its new line of autofocus lenses: <https://mamiya.co.uk/about/80-90.html>.
3. Mamiya, **Mamiya Lens Range**, AF 55mm f/2.8 entry: 7 elements/6 groups, 64° angle of view, floating-element mechanism, 45 cm minimum focus, 0.18× maximum magnification, and 58 mm filter. Manufacturer-authored brochure, archival mirror: <https://allphotolenses.com/public/files/pdfs/921a29c96be9a5d809921e415e1871a9.pdf>. Mamiya's historical 645AF specifications identify the Mamiya 645 AF mount and 56 × 41.5 mm image size: <https://mamiya.co.uk/cameras/645afd/specs.html>. Mamiya's September 2004 price list explicitly lists the Mamiya AF 55mm F/2.8 lens in the 645 AFD system: <https://mamiya.co.uk/library/645AFD.pdf>.
4. OHARA, **Glass Type**, current optical-glass coordinate table. Current S-FPL51 is code 497816 and publishes C/d/F/g indices near the legacy FPL51 coordinate set used in the audit: <https://www.ohara-inc.co.jp/en/product/01000/>.
5. OHARA, **S-FPL51 data sheet** and technical information. The current S-FPL51 sheet gives code `497816`, C/d/F/g line data, and `Δθg,F = +0.0280` in OHARA's native anomalous-dispersion convention: <https://www.ohara-inc.co.jp/assets/en/product/pdf/esfpl51.pdf>. General technical information: <https://www.ohara-inc.co.jp/en/product/technology/>.
6. SCHOTT, **Optical Glass — Collection of Formulas and Wavelength Table**, equation 10.8: `ΔPg,F = (ng − nF)/(nF − nC) − (0.6438 − 0.001682νd)`, with the normal line based on K7 and F2: <https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f4adcbf1>.
