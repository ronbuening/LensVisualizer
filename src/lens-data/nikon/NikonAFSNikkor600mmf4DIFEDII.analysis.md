# NIKON AI AF-S NIKKOR ED 600mm f/4D II IF

## Patent Reference and Design Identification

**Patent:** US 5,745,306 A\
**Application Number:** US 08/634,032\
**Priority:** May 26, 1995\
**Filed:** April 17, 1996\
**Granted:** April 28, 1998\
**Inventor:** Susumu Sato\
**Assignee:** Nikon Corporation\
**Title:** *Internal Focusing Telephoto Lens*\
**Embodiment analyzed:** Example 3 / Table 3 / Fig. 7

The modeled prescription is the third embodiment of Sato's internal-focusing telephoto patent. The patent itself does not identify a commercial product. The association with the NIKON AI AF-S NIKKOR ED 600mm f/4D II IF is therefore a production-correlation inference rather than a manufacturer-confirmed patent attribution.

Several independent features converge on that correlation:

1. After the patent's front protective plate, rear filter, and inactive field-stop bookkeeping plane are excluded from the sequential model, Example 3 contains 10 glass elements in 7 air-separated groups. Nikon specifies the production lens as 10 elements in 7 groups, with a separate built-in protective front glass.
2. Three patent elements share `nd = 1.497820, νd = 82.52`; the production lens is specified with three ED elements. The data file therefore identifies those three prescription elements as production-correlated ED/high-Abbe elements without assigning an unsupported glass vendor.
3. Table 3 states a design focal length of 588.0 mm and f/4.08. Independent tracing of the final data file gives an effective focal length of 587.792929 mm. Nikon markets the production lens as 600 mm f/4; the rounded marketing values are not substituted into the prescription.
4. The patent focuses by translating the negative second group G2 along the optical axis. Nikon describes the production lens as an internal-focusing AF-S lens using a Silent Wave Motor.
5. The patent's maximum plotted image height is 21.6 mm, corresponding to a 43.2 mm image-circle diameter. The traced paraxial full field is about 4.209°, while Nikon specifies a 4°10′ picture angle on 35 mm format.
6. The patent's 1995 priority and 1998 grant precede Nikon's 2001 product-history listing of the 600mm F4D II (IF).

The final data file therefore keeps two layers of specification separate: `600 mm` and `f/4` are production marketing values, while `587.792929 mm` and `f/4.08` are the modeled design values. No uniform scaling has been applied.

A 600 dpi review of local PDF page 12 confirmed the Fig. 7 silhouette. The printed diameter condition independently anchors the front element, while the remaining optical rims track the authored relative proportions. Automated outliers came from the G1/G2/G3 brackets, leader labels, and the omitted protective/filter plates; visual isolation found no greater-than-25% shape discrepancy, so the semi-diameters were retained.

## Optical Architecture

Example 3 is a three-group positive–negative–positive internal-focusing telephoto system. The patent divides the positive first group G1 into a positive front group G11 and a positive rear group G12. G1 and the negative focusing group G2 are arranged to form a substantially afocal combination, after which the positive rear group G3 forms the final image. This power distribution is the central architectural device of the patent: a strong positive front section reduces the beam diameter before the negative focusing group, allowing focus to be obtained with relatively small axial travel of a comparatively small internal group.

Independent first-order calculations from the final data file give the following assembled thick-group focal lengths:

| Unit | Computed focal length | Function |
|---|---:|---|
| G11 | +402.612426 mm | Positive front collector |
| G12 / L14 | +310.680448 mm | Positive rear part of G1 |
| G1 | +242.970737 mm | Primary positive collector |
| G2 | −67.005800 mm | Translating negative focus group |
| G3 / L3 | +162.128117 mm | Positive rear imaging group |

These are assembled thick-group focal lengths computed from the corresponding air-to-air surface blocks. They are distinct from the standalone-in-air focal lengths listed for individual physical elements below.

The normalized active optical model has 10 elements in 7 groups. It begins at patent surface 3 and retains patent surfaces 3–20, with surface 20 represented as the single `STO`. The patent's plane-parallel front protective glass, inactive field-stop bookkeeping plane, and rear filter are excluded in accordance with the data specification. The rear filter is not simply deleted from the optical distance: its d-line reduced distance is preserved by an air-equivalent stop-to-image spacing of 155.504765 mm. From the last powered surface to the image plane, the normalized spacing is 158.204765 mm.

The active surface-3-to-image track is 455.596265 mm at infinity. With the traced EFL of 587.792929 mm, `TL/EFL = 0.775097`, satisfying the project's quantitative telephoto criterion. The normalized back-focus ratio is much smaller than unity, so the design is not retrofocus.

All powered surfaces in Example 3 are spherical. The data contains no aspherical coefficients, no folded optical path, no perspective-control movement, and no independent spherical-aberration control.

The patent's general disclosure discusses lateral decentering of a rear positive group for vibration correction, but Example 3 does not supply a numerical decenter range. Nikon's manual identifies the correlated production lens as AF-S/IF and does not specify a VR mechanism. Accordingly, the data model includes no stabilization movement.

## Element-by-Element Analysis

### L11 — Biconvex Positive

`nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +369.599452 mm.`

L11 is the first positive collector in G11. Its two convex surfaces begin the strong convergence needed to reduce the diameter of the beam before the internal-focus section. The patent describes the first positive element as having a convex object-side surface and explains that the front members of G11 are shaped to keep refraction distributed rather than concentrated at a single strongly bent surface (US 5,745,306 A, cols. 7–8).

The element's very high Abbe number is significant to the production correlation because L11 is one of exactly three elements with the 1.497820/82.52 coordinate pair, matching Nikon's published count of three ED elements. The data file does not attach a vendor glass name or anomalous-dispersion coefficients to this element.

### L12 — Biconvex Positive

`nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +305.823995 mm.`

L12 is the second positive collector in G11 and has greater standalone positive power than L11. The patent places L12 immediately ahead of the negative L13 and describes the pair as part of the front-group strategy for controlling the spherical and chromatic consequences of the strong positive front power. Its object-side surface has the stronger curvature, consistent with the patent's preferred shape description.

Like L11, L12 uses the high-Abbe 1.497820/82.52 coordinate pair and is one of the three production-correlated ED/high-Abbe elements.

### L13 — Biconcave Negative

`nd = 1.804109, νd = 46.54. Glass: TAF3D catalog equivalent (patent 804465; production supplier unspecified). Standalone f = −261.915920 mm.`

L13 follows the two high-Abbe positive elements and supplies negative power within G11. The patent explicitly places a negative element after L11 and L12 so that the strong positive front group can be corrected without simply weakening its collecting power. Condition (4), `νa < 48`, applies to this negative element; the Example-3 value is 46.54. Condition (5) constrains the shape relationship between the rear surface of L12 and the front surface of L13, and Example 3 gives a value near zero, −0.02970.

The result is not a negative front group: the complete G11 remains positive at +402.612426 mm. L13's standalone negative focal length therefore describes its isolated element power, not the sign of the assembled G11 section.

### L14 — Cemented Positive G12 Doublet

`L14a: nd = 1.804109, νd = 46.54. Glass: TAF3D catalog equivalent (patent 804465; production supplier unspecified). Standalone f = −258.787937 mm.`\
`L14b: nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +137.825098 mm.`

L14 is the complete rear part G12 of the first group. It is a cemented positive doublet formed from a negative meniscus L14a followed by a positive meniscus L14b, both convex toward the object side. This matches the patent's preferred G12 construction (US 5,745,306 A, col. 9).

Although L14a is negative when treated alone in air, the cemented L14 combination is positive, with a computed net focal length of +310.680448 mm. The distinction matters because the cemented interface operates between refractive indices 1.804109 and 1.497820 rather than between either glass and air. L14b is the third 1.497820/82.52 element and completes the production-correlated set of three ED/high-Abbe elements.

G12 is separated from G11 by the lens's largest internal air gap. The patent uses this separated positive rear group to divide the strong positive power of G1 between two sections while maintaining the compact internal-focus architecture.

### L21 — Negative Meniscus, Convex to Object

`nd = 1.787971, νd = 47.47. Glass: TAF4 catalog equivalent (patent 788475; production supplier unspecified). Standalone f = −145.383568 mm.`

L21 is the first element of the translating focus group G2. Its weakly convex object-side surface and strongly convex image-side surface form a negative meniscus in the patent sign convention. Condition (9) requires the Abbe number of this first negative focusing element to exceed 45; Example 3 uses 47.47.

The patent emphasizes that G2 is intended to remain relatively small and light because it is the moving group. L21 therefore participates in a focus group whose total computed focal length is −67.005800 mm, much stronger than L21 alone. The second cemented negative unit L22 supplies the remaining negative action and chromatic balance.

### L22 — Cemented Negative Focus Doublet

`L22a: nd = 1.805182, νd = 25.41. Glass: SF6 catalog equivalent (patent 805254; production supplier unspecified). Standalone f = +101.458936 mm.`\
`L22b: nd = 1.640000, νd = 60.03. Glass: S-BSM81 catalog equivalent (patent 640600; production supplier unspecified). Standalone f = −57.087016 mm.`

L22 is a cemented negative doublet within the translating G2 group. Its front component L22a is a positive meniscus with a concave object-side surface; its rear component L22b is biconcave and negative. The complete cemented unit has a computed net focal length of −129.984571 mm.

The glass pairing is deliberately unusual in sign: the positive component carries the much lower Abbe number, while the negative component has the higher Abbe number. The patent directly constrains this interface through conditions (10) and (11). For Example 3, `Nc − Nd = 0.165182` and `νd − νc = 34.62`, both comfortably inside the stated ranges. The patent explains these conditions in terms of the refractive power of the cemented achromatic surface and its contribution to spherical and chromatic correction across focus (US 5,745,306 A, cols. 7–8).

L21 and L22 together form the negative G2 focus group. Their negative group power, rather than either standalone focal length, is the quantity relevant to the internal-focus motion.

### L3 — Cemented Positive Rear Doublet

`L3a: nd = 1.518601, νd = 69.98. Glass: J-PKH1 catalog equivalent (patent 519700; production supplier unspecified). Standalone f = +93.589918 mm.`\
`L3b: nd = 1.803840, νd = 33.89. Glass: E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified). Standalone f = −221.760734 mm.`

The rear group G3 is modeled as the cemented L3 positive doublet shown numerically by Table 3 and geometrically by Fig. 7. L3a is a strong biconvex positive element, and L3b is a weaker negative meniscus with its concave surface toward the object. Their cemented combination has a computed net focal length of +162.128117 mm.

The patent's prose description of the third embodiment is grammatically ambiguous at this point and can be read as implying more glass than Table 3 contains. The numerical prescription and Fig. 7 instead resolve G3 as this two-element cemented positive unit. The data file follows the mutually consistent table and drawing and does not invent an additional element.

G3 receives a beam that the patent intends to remain substantially stable as G2 focuses. In first-order terms, this allows the negative focusing group to move while the rear image location remains nearly fixed.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not name glass manufacturers or catalog designations for Example 3. The final data file therefore preserves conservative six-digit coordinate classes and qualifies compatible catalog curves as spectral proxies rather than assigning a production vendor from nearest-neighbor matching alone.

| Data-file glass label | `nd` | `νd` | Elements | Interpretation |
|---|---:|---:|---|---|
| J-FKH1 catalog equivalent (498825) | 1.497820 | 82.52 | L11, L12, L14b | Low-dispersion coordinate class; production supplier unspecified |
| TAF3D catalog equivalent (804465) | 1.804109 | 46.54 | L13, L14a | High-index lanthanum proxy; production supplier unspecified |
| TAF4 catalog equivalent (788475) | 1.787971 | 47.47 | L21 | Lanthanum proxy; production supplier unspecified |
| SF6 catalog equivalent (805254) | 1.805182 | 25.41 | L22a | Dense-flint proxy; production supplier unspecified |
| S-BSM81 catalog equivalent (640600) | 1.640000 | 60.03 | L22b | Barium-crown proxy; production supplier unspecified |
| J-PKH1 catalog equivalent (519700) | 1.518601 | 69.98 | L3a | Phosphate-crown proxy; production supplier unspecified |
| E-LAFH2 catalog equivalent (804339) | 1.803840 | 33.89 | L3b | High-index flint proxy; production supplier unspecified |

The coordinate-code audit against authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs found compatible coefficient-backed curves for every element. The data labels now name the selected curve explicitly so runtime resolution is deterministic and the inspector exposes the modeled material, while retaining “production supplier unspecified” on every proxy. These are runtime spectral proxies only; none establishes historical vendor provenance or a production melt identity.

No element carries authored `nC`, `nF`, `ng`, or `dPgF` in the final data file because Example 3 does not publish those quantities. The qualified catalog-equivalent curves improve runtime chromatic tracing without converting their coefficients into patent evidence. Accordingly, this analysis makes no claim that the design is apochromatic and does not attribute anomalous partial dispersion to any particular element.

## Focus Mechanism

The lens uses published internal focus. Only G2 moves; G1 and G3 remain fixed in the modeled states. Focusing from infinity toward the patent's close endpoint translates G2 toward the image side by approximately 10.8634 mm. The two adjacent variable gaps change in opposite directions and preserve their sum to 0.0001 mm, which is consistent with rigid translation of one group.

| Spacing | Infinity | Published close state |
|---|---:|---:|
| d11, G1→G2 | 33.4177 mm | 44.2811 mm |
| d16, G2→G3 | 16.5738 mm | 5.7105 mm |
| d11 + d16 | 49.9915 mm | 49.9916 mm |

The patent defines the close state as `R = 6000 mm`, where `R` is object-to-image-surface distance, and gives `D0 = 5537.4340 mm` from the object to the first source surface. Its tabulated magnification is `β = −0.1082`. Independent finite-conjugate tracing of the final modeled state gives `β = −0.10816023`, a difference of about 0.000040, with an imaging-matrix B residual of 0.00272 mm.

The data field `closeFocusM: 6.0` labels this published patent endpoint; it is not a substitution for the production lens's marketed minimum focusing distance. Nikon specifies 5.6 m in AF and 5.4 m in MF for the commercial lens. No extrapolation from the patent's 6.0 m state to those production endpoints is included.

Nikon identifies the production focus system as Nikon Internal Focusing driven by an internal Silent Wave Motor. That mechanical product specification supports the correlation but does not alter the patent's exact internal spacings.

## Chromatic Correction Strategy

The prescription distributes chromatic correction across all three major optical sections rather than relying on one rear achromat. In G11, the two high-Abbe positive elements L11 and L12 are followed by the lower-Abbe, high-index negative L13. G12 then pairs another high-index negative component with the third high-Abbe positive component. This places the three production-correlated ED/high-Abbe elements entirely in the strong positive first group, where axial color generated by the large front-group power can be addressed early in the optical train.

The moving G2 group uses a different pairing. L21 has moderate dispersion, while the cemented L22 combines a very low-Abbe positive element (`νd = 25.41`) with a much higher-Abbe negative element (`νd = 60.03`). Conditions (10) and (11) explicitly regulate the index and dispersion difference across that cemented interface. This is important because G2 changes axial position during focusing; its residual aberrations must remain controlled across the published focus travel.

The rear L3 doublet again combines a relatively high-Abbe positive element (`νd = 69.98`) with a lower-Abbe, high-index negative element (`νd = 33.89`). The available source data support describing these pairings in ordinary achromatic terms. They do not support a quantitative claim about secondary-spectrum or anomalous-partial-dispersion correction beyond what can be inferred from `nd` and `νd` alone.

## Aberration-Control Architecture

The patent's design rationale is closely tied to the division of power between G1, G2, and G3. G1 is made strong enough to reduce the beam diameter entering G2, while G2 is made strongly negative so that a relatively small translation produces the required focus change. The patent then divides G1 into G11 and G12, each positive, to distribute the aberration burden of the front collector rather than concentrating it in a single compact group.

The computed focal-length ratio `f11/f12 = 1.295905` places Example 3 at the upper edge of the patent's later preferred 0.8–1.3 range. The G1/G2/G3 power relation also reproduces condition (1) essentially exactly, confirming the intended substantially afocal relationship between G1 and G2.

The Petzval sum calculated surface by surface as `φ/(n·n′)` is `−3.5552789603 × 10⁻⁵ mm⁻¹`. This is a computed first-order property of the final prescription, not a patent-tabulated value. Cemented junctions are included individually in that sum rather than collapsed into equivalent thin elements.

## Conditional Expressions

The patent defines twelve conditions governing the group powers, element shapes, dispersions, and front effective diameter. The final prescription reproduces the Example-3 values with two patent-internal exceptions that remain visible rather than being silently reconciled.

| Cond. | Patent bound | Value from final prescription | Assessment |
|---:|---|---:|---|
| 1 | `0.7 < |f1 f3/(f2 F)| < 1.3` | 0.999822 using F = 588.0 | Satisfies; printed 1.0 |
| 2 | `0.24 < |f2/f1| < 0.41` | 0.275777 | Satisfies; printed 0.28 |
| 3 | `0.7 < f11/f12 < 1.4` | 1.295905 | Satisfies; printed 1.30 |
| 4 | `νa < 48` | 46.54 | Satisfies |
| 5 | `−0.46 < (Rb−Ra)/(Rb+Ra) ≤ 0` | −0.0297045 | Satisfies; printed −0.030 |
| 6 | `0.35 < f1/F < 0.60` | 0.413216 using F = 588.0 | Satisfies, but differs from printed 0.419 |
| 7 | `0.7 < f22/f21 < 1.8` | 0.894080 | Satisfies |
| 8 | `−1.4 < (Rd+Rc)/(Rd−Rc) < −0.4` | −1.435196 | Reproduces printed −1.435 but violates the stated lower bound |
| 9 | `45 < νb` | 47.47 | Satisfies |
| 10 | `0.1 < Nc−Nd < 0.35` | 0.165182 | Satisfies |
| 11 | `25 < νd−νc` | 34.62 | Satisfies |
| 12 | `0.55 < Φ/f1 < 0.72` | Patent prints 0.593 | Published value used as a diameter constraint; Φ is not separately tabulated |

Condition (6) exposes a source inconsistency. The patent prints 0.419 for Example 3, whereas the Table-3 header focal length of 588.0 mm gives 0.413216 with the independently computed G1 focal length. The printed 0.419 is instead consistent with the anomalous 579.3529 value appearing in the infinity side of the variable-spacing table. Independent tracing of the prescription gives 587.792929 mm and simultaneously reproduces the stated back focus, so the model retains the traced/header focal-length interpretation.

Condition (8) is an independent contradiction within the patent. The stated radii reproduce approximately −1.435, but the patent's own inequality requires a value greater than −1.4. The data file preserves the prescription rather than altering a radius to force compliance.

Condition (12) requires special treatment because Table 3 does not independently tabulate the effective diameter Φ. The printed Example-3 value 0.593, combined with the independently computed G1 focal length, gives an inferred front effective diameter of about 144.08 mm. Because 0.593 is printed to three decimal places, the implied diameter should not be treated as more precise than the source permits. The data file uses this as the primary model constraint for the front semi-diameter rather than claiming it as a separately published clear-aperture measurement.

## Verification and Modeling Notes

The final prescription has no scale transformation. All radii, thicknesses, and focus spacings are retained at the patent's native size. The design focal length is the independently traced 587.792929 mm, not the rounded commercial 600 mm designation.

The patent does not provide per-surface semi-diameters. The authored clear apertures are therefore modeling inferences. Surface 3 is anchored to the printed condition (12): using 0.593 and the computed G1 focal length gives an implied front semi-diameter of about 72.04 mm. If the printed ratio is rounded to the nearest 0.001, that implication carries roughly ±0.061 mm of semi-diameter uncertainty; the data uses 72.05 mm. The remaining semi-diameters are constrained by paraxial marginal/chief-ray envelopes, Fig. 7 proportions, the patent's G2 effective-diameter scale, and geometry validation. The printed G2 effective diameter of 38.8 mm is treated as a scale reference rather than as a universal `sd = 19.4 mm` clear-aperture limit, because imposing that value on every G2 surface would clip the modeled f/4.08 marginal ray.

The aperture-stop position is published by Table 3; its diameter is not. The data-file stop semi-diameter of 19.057003 mm is inferred from the traced EFL and the design f-number 4.08, giving an entrance-pupil semi-diameter of 72.033447 mm. At the published close state, a stop-filling paraxial marginal ray would reach 73.458348 mm at surface 3, slightly beyond the condition-(12)-anchored 72.05 mm semi-diameter. The model therefore allows the source-derived front aperture to become the limiting aperture at that extreme state rather than enlarging the front element beyond the patent-derived diameter constraint.

The omitted rear filter is represented by the air-equivalent rear spacing described above. The front protective plate is omitted without altering the powered prescription because it has zero first-order power; when object-distance reference planes are compared, its reduced distance must still be distinguished from physical distance. The inactive source field-stop plane is omitted, and no additional S3 plane is invented because Table 3 does not provide a separate numerical surface for it.

Rendered inspection of Table 3 resolves three OCR-prone entries used by the model: the infinity value of d16 is 16.5738 mm, the Table-3 header is F = 588.0 mm, and surface 10 has radius +68.0010 mm. These are source readings, not alterations to the optical design.

Independent tracing of the final arrays gives EFL = 587.792929 mm and BFL = 158.205141 mm from the last powered surface. The normalized authored last-surface-to-image spacing is 158.204765 mm, leaving a 0.000376 mm residual attributable to source rounding. All ten modeled elements retain positive rim thickness under the authored semi-diameters; the minimum computed edge thickness is 2.004156 mm. The maximum spherical rim angle is 36.0313°, and the tightest cross-gap check is the 13→14 air space, with 0.03759 mm margin under the current 90% sag-intrusion criterion.

These geometry values are calculations from the final data arrays, not patent specifications.

## Sources

- Sato, Susumu. **US 5,745,306 A, “Internal Focusing Telephoto Lens.”** Nikon Corporation. Filed April 17, 1996; granted April 28, 1998. Example 3, Table 3, and Fig. 7 are the prescription sources. <https://patents.google.com/patent/US5745306A/en>
- Nikon Corporation. **AF-S Nikkor ED 600mm f/4D II IF instruction manual.** Product specifications include Nikon F mount, 600 mm f/4, 10 elements in 7 groups, three ED elements, built-in front protective glass, 4°10′ picture angle, Nikon IF/Silent Wave Motor focusing, and 5.6 m AF / 5.4 m MF minimum focusing distances. <https://cdn-10.nikon-cdn.com/pdf/manuals/lenses/AF/AFS_600_4_04.pdf>
- Nikon Corporation. **Our Product History: 2000's.** The 2001 section lists the AI AF-S Nikkor ED 400mm F2.8D II (IF) / 600mm F4D II (IF). <https://imaging.nikon.com/imaging/information/products_history/2000/>
- OHARA Inc. **Optical Glass Catalog.** <https://www.ohara-inc.co.jp/en/product/catalog/>
- HOYA Corporation. **Optical Glass catalog data.** <https://www.hoya-opticalworld.com/>
- SCHOTT AG. **Optical Glass data and catalogs.** <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>
- HIKARI Glass Co., Ltd. **Optical Glass Catalog.** <https://www.hikari-g.co.jp/optical_glass/catalog/>
- Chengdu Guangming Optoelectronic Corp. (CDGM). **Optical glass catalog.** <https://www.cdgmgd.com/>
- SUMITA Optical Glass, Inc. **Optical Glass catalog resources.** <https://www.sumita-opt.co.jp/en/download/>
