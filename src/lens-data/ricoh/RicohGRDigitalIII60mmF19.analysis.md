## Patent Reference and Design Identification

**Patent:** JP 2010-72639 A

**Application:** 特願2009-191625

**Priority:** 2008-08-22

**Filed:** 2009-08-21

**Published:** 2010-04-02

**Inventor:** Yoshifumi Sudoh

**Applicant:** Ricoh Co., Ltd.

**Title:** Imaging optical system, camera apparatus, and portable information terminal apparatus
**Embodiment analyzed:** Example 4

The modeled lens is `RICOH GR LENS 6.0mm f/1.9 (Ricoh GR DIGITAL III)`, using Example 4 of JP 2010-72639 A as the fixed production correlation. The patent itself does not state that Example 4 is the shipped GR DIGITAL III prescription, so the identification is a production correlation rather than manufacturer confirmation of numerical identity.

Several independent features converge on that identification:

1. Example 4 publishes a design focal length of 6.00 mm, while Ricoh marketed the GR DIGITAL III with a 6.0 mm fixed lens.
2. The patent publishes F=1.93, close to the product's marketed F1.9; the data file deliberately keeps `apertureMarketing: 1.9` separate from `apertureDesign` and `nominalFno`, both 1.93.
3. The active patent prescription contains 8 elements in 6 air-separated groups, matching Ricoh's production specification.
4. Aspherical surfaces occur on two different elements, source surfaces 4 and 14, matching Ricoh's specification of two aspherical elements/two aspherical surfaces.
5. The prescription contains three high-Abbe/low-dispersion positions — L1 plus the two S-FPL51 elements L4 and L7 — consistent with Ricoh's statement that the production lens uses three special low-dispersion lenses.
6. The patent maximum image height is Y'=4.8 mm, giving a 9.6 mm design-field diameter that is compatible with the 1/1.7-inch-type production format.
7. The 2008 priority predates the July 2009 GR DIGITAL III announcement, while the April 2010 patent publication follows the product launch.
8. The patent's multi-group focusing architecture is qualitatively compatible with Ricoh's description of a separate macro-mode group shift, although Example 4 does not publish the production 1 cm macro endpoint numerically.

The patent gives Example 4 as f=6.00 mm, F=1.93, half-field angle ω=39.1°, and maximum image height Y'=4.8 mm. The final data file is not uniformly scaled: its independently recomputed infinity EFL is 5.9997208296 mm, so the patent dimensions are retained at source scale.

## Optical Architecture

Example 4 is an 8-element, 6-group wide-angle design divided by a fixed aperture stop into a weakly positive Group I and a substantially positive Group II. The patent explicitly describes the front group as performing a wide-converter-like function and divides it at its largest internal air space into a negative front section and a positive rear section (¶0034, ¶0050-¶0051).

Group I contains L1 and L2, two air-spaced negative menisci, followed after the large 8.21 mm air gap by the positive biconvex L3. Independent paraxial calculation gives the L1-L2 front section, at its published 2.56 mm separation, an equivalent focal length of -7.8223 mm, while the full Group I has only weak positive power, with equivalent focal length +114.5125 mm. These subsection/group values include the published internal separations and should not be confused with the standalone focal lengths of isolated elements.

The aperture stop lies between Group I and Group II exactly as published. Group II begins with two cemented pairs separated by only 0.20 mm of air. In front-to-rear order those four elements are positive L4, negative L5, negative L6, and positive L7. The patent identifies this positive-negative-negative-positive front section as the principal image-forming part of Group II (¶0036). The final L8 is a positive meniscus with an aspherical front surface and forms the rear section of Group II.

The first cemented pair D1, L4-L5, has a cemented net focal length of +60.6607 mm, while the second pair D2, L6-L7, is more strongly positive at +23.2810 mm. Taken together at the published 0.20 mm inter-pair spacing, the Group-II front section has equivalent focal length +17.0212 mm; including L8 gives Group II +12.9339 mm. The cemented-pair and group quantities are matrix-derived net powers of those actual subassemblies; the element values below are standalone focal lengths for each element isolated in air.

The normalized active-lens back focal distance from surface 15 is 7.2464761 mm, greater than the 5.9997208 mm EFL. It therefore satisfies the project's strict numerical definition of a retrofocus system, `BFD > EFL`. The patent's own background also discusses retrofocus-type wide-angle architectures in this application class (¶0007).

The modeled semi-diameters are not patent values. Example 4 publishes neither clear apertures nor a stop diameter. The stop position is explicit in the patent, but its modeled semi-diameter, 3.2766967 mm, is calibrated to the published F=1.93. The other clear semi-diameters are derived from meridional ray containment and geometry checks, then checked against Figure 4. That comparison reduced L3's two rims to 4.1 mm so its relative height matches the isolated positive element in the drawing while retaining at least 0.60 mm of clearance around the traced display rays at both published focus endpoints. The clear apertures remain modeling inferences rather than source facts.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA). Standalone f = -22.4444 mm.`

L1 is the first negative member of the front section of Group I. Its relatively high Abbe number limits the chromatic penalty of assigning appreciable negative power to the large-diameter front of the system. In combination with L2 it forms the strongly negative front subsection that opens the field before the weakly positive Group I is completed by L3.

The normalized glass name and spectral line data are catalog-derived; the patent itself supplies the legacy OHARA designation, `nd`, and `νd` only.

### L2 — Negative Meniscus, Rear Asphere

`nd = 1.51633, νd = 64.06. Glass: L-BSL7 (OHARA). Standalone f = -13.8121 mm.`

L2 is the stronger of the two front negative elements by standalone focal length. Its rear face is data surface `4A`, corresponding to source surface 4*. The patent states that placing an asphere on the strongly curved image-side surface of the front negative section is useful for distortion correction and can also contribute to coma correction (¶0051).

The L1-L2 pair is air-spaced rather than cemented. Its combined equivalent focal length, -7.8223 mm, is therefore an air-spaced subsection result that includes their 2.56 mm separation; it is not a cemented-doublet power.

### L3 — Biconvex Positive

`nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). Standalone f = +15.8812 mm.`

L3 is the positive rear subsection of Group I. It reverses most of the negative power generated by L1 and L2, leaving the full first group only weakly positive. The patent emphasizes the large spacing between the negative front subsection and this positive rear subsection as part of the compromise between wide field and aberration correction (¶0034, ¶0050).

Its high index supplies substantial positive refraction in a short axial distance. The Group-I result is nevertheless much weaker than L3 alone because it acts after the negative L1-L2 subsection.

### L4 — Biconvex Positive, Front Member of D1

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). Standalone f = +13.5815 mm.`

L4 begins the principal positive Group-II front section and is cemented directly to L5 at surface 9. The very high Abbe number makes it a natural positive partner for the much more dispersive S-TIH4 negative element behind it.

The standalone +13.5815 mm focal length describes L4 isolated in air. The complete cemented D1 pair is far weaker, with net focal length +60.6607 mm, because the negative L5 cancels much of L4's positive power.

### L5 — Negative Meniscus, Rear Member of D1

`nd = 1.75520, νd = 27.51. Glass: S-TIH4 (OHARA). Standalone f = -17.5860 mm.`

L5 is the dispersive negative partner in D1. Its low Abbe number contrasts sharply with L4's S-FPL51 value of 81.54. The patent explains that placing the stop in front of the Group-II front section makes the ray heights through its positive-negative pairs unequal, a degree of freedom used to reduce both axial and lateral chromatic aberration (¶0037).

The complete D1 cemented pair remains net positive. It therefore contributes converging power while using the strong dispersion contrast between its two glasses for chromatic balancing.

### L6 — Negative Meniscus, Front Member of D2

`nd = 1.62588, νd = 35.70. Glass: S-TIM1 (OHARA). Standalone f = -45.7023 mm.`

After the 0.20 mm air gap, L6 begins the second cemented pair. Its standalone negative power is relatively weak, but its position between D1 and the strong positive L7 lets it shape the middle negative part of the Group-II positive-negative-negative-positive sequence.

The patent states that dividing the central negative power into two negative lenses increases shape freedom and can reduce the chromatic difference of coma (¶0038). L6 is the first element of the second of those negative/positive balancing pairs.

### L7 — Biconvex Positive, Rear Member of D2

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). Standalone f = +14.9967 mm.`

L7 is the second S-FPL51 element and the positive rear member of D2. Its high Abbe number again opposes a more dispersive negative partner, here S-TIM1. The pair's cemented net focal length is +23.2810 mm, appreciably stronger than D1.

Together D1 and D2 form the +17.0212 mm Group-II front section identified by the patent as the main image-forming portion of the rear half of the design (¶0036).

### L8 — Positive Meniscus, Front Asphere

`nd = 1.51633, νd = 64.06. Glass: L-BSL7 (OHARA). Standalone f = +38.1861 mm.`

L8 is the positive rear section of Group II. Its front surface `14A`, source surface 14*, is aspherical. The patent assigns this rear section both aberration-balancing and exit-pupil-control functions and states that an asphere here can be used chiefly to improve coma correction (¶0039).

L8 is weaker than the Group-II front section by itself, but its positive power increases the complete Group-II power from the G2F focal length of +17.0212 mm to +12.9339 mm for the full group.

## Glass Identification and Selection

The prescription explicitly names OHARA glasses. The final data preserves the patent `nd`/`νd` coordinates while normalizing the legacy names to current OHARA naming. The stored `nC`, `nF`, `ng`, and `dPgF` values are catalog-derived spectral annotations, not values published in Example 4.

| Glass | Patent/data `nd` | `νd` | Catalog `dPgF` | Elements | Function in this design |
|---|---:|---:|---:|---|---|
| S-FSL5 (OHARA) | 1.48749 | 70.24 | +0.0022 | L1 | High-Abbe negative front element |
| L-BSL7 (OHARA) | 1.51633 | 64.06 | -0.0045 | L2, L8 | Moderate-dispersion aspheric carriers |
| S-LAH59 (OHARA) | 1.81600 | 46.62 | -0.0092 | L3 | High-index positive Group-I rear element |
| S-FPL51 (OHARA) | 1.49700 | 81.54 | +0.0280 | L4, L7 | Very-high-Abbe positive members of D1 and D2 |
| S-TIH4 (OHARA) | 1.75520 | 27.51 | +0.0133 | L5 | High-dispersion negative member of D1 |
| S-TIM1 (OHARA) | 1.62588 | 35.70 | +0.0056 | L6 | Negative member of D2 |

The most conspicuous chromatic strategy is the use of S-FPL51 in both positive members of the Group-II cemented pairs against markedly lower-Abbe negative glasses. This matches the patent's discussion of controlling axial and lateral color through the two positive-negative pairings and their different ray heights behind the stop (¶0037).

L1 supplies a third high-Abbe position at the front of the design. That arrangement is consistent with Ricoh's production statement that three special low-dispersion lenses are present. The data includes enough catalog line information to support dispersion modeling beyond a plain `nd`/`νd` approximation, but neither the patent nor the final data justifies an apochromatic designation.

OHARA distinguishes the sodium D line from the helium d line for L-BSL7: its current datasheet gives `nD = 1.51626` at 589.29 nm and `nd = 1.51633` at 587.56 nm. Example 4 prints 1.51633, so the modeled prescription correctly retains the helium d-line coordinate rather than substituting the nearby D-line value.

## Focus Mechanism

The modeled focus is the patent's published two-group focus system, with the aperture stop fixed between the groups. From infinity to the Table 11 close state, Group I moves 0.10 mm imageward while Group II moves 0.14 mm objectward. The opposing motion is the patent's mechanism for controlling focus-dependent field curvature/image-plane tilt while avoiding front-group extension toward the object (¶0012-¶0014, ¶0053).

The source and model spacings are:

| Quantity | Infinity | Published 300 mm state | Interpretation |
|---|---:|---:|---|
| A: surface 6 → stop | 6.12 mm | 6.02 mm | Group I shifts 0.10 mm imageward |
| B: stop → surface 8 | 3.82 mm | 3.68 mm | Group II shifts 0.14 mm objectward |
| Source C: surface 15 → equivalent filter | 5.52 mm | 5.66 mm | Source rear gap grows 0.14 mm |
| Modeled surface 15 → IMG | 7.2464761 mm | 7.3864761 mm | Air-equivalent normalized rear spacing |

The final modeled rear spacing differs from source C because the patent's surfaces 16-17 represent an equivalent 1.24 mm, n=1.50000 sensor-cover/color-filter plate. That plate is excluded from the ordinary LensVisualizer prescription. Its optical effect, together with the inferred post-plate infinity air gap, is folded into the surface-15-to-image air spacing. This is a modeling normalization, not a claim that the patent printed 7.2464761 mm as its C value.

The focus status is `PUBLISHED`; no constrained reconstruction is used for the modeled endpoints. The patent's 300 mm datum is object-to-image-plane distance, whereas Ricoh's production focus distances are specified from the front of the lens. Accordingly, `closeFocusM: 0.3` identifies the only modeled close endpoint in the viewer and should not be interpreted as an independently reconstructed production minimum-focus state. A paraxial back-solve using the printed 0.01 mm Table 11 spacings gives about 293.5 mm from object to image plane; changing the close-state C spacing by -0.00343 mm, still inside the table's ±0.005 mm rounding interval, returns 300.0 mm. The difference is therefore consistent with source rounding rather than evidence for an unreported focus state.

Ricoh separately specifies approximately 1 cm macro focusing from the front of the lens and describes an additional macro-mode shift of part of a lens group that is normally stationary during ordinary focusing. Example 4 does not give enough numerical information to reconstruct that production 1 cm macro motion, so the data deliberately stops at the published infinity/300 mm patent state.

## Aspherical Surfaces

Example 4 has two aspherical surfaces: `4A` on the rear face of L2 and `14A` on the front face of L8. The patent writes the sag as

$$
X = \frac{C h^2}{1+\sqrt{1-(1+K)C^2h^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10}.
$$

This is the standard conic-constant convention used by the data model: the published `K` is entered directly, with no κ-to-K conversion. Only even radial powers through A10 are published. The data file carries A12=A14=0 as explicit schema zeros; those are not additional source coefficients.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| `4A` | -0.85391 | +1.14455E-04 | -4.25901E-06 | -1.59355E-08 | -2.97123E-09 |
| `14A` | 0 | -3.89523E-04 | +2.62694E-06 | -1.62806E-07 | +1.73934E-09 |

Surface 4A combines a near-paraboloidal conic base with a positive fourth-order term and negative higher orders. Its location on the rear face of the second front negative meniscus is consistent with the patent's stated use of a front-group asphere for distortion and coma control (¶0051).

Surface 14A uses a spherical base (`K=0`) with a comparatively strong negative A4 term followed by alternating higher-order corrections. At the rear of Group II, the patent associates this asphere principally with coma correction and overall aberration balance (¶0039).

No dimensional scaling is applied to the prescription, so the asphere coefficients are copied at source scale; no `A_p / s^(p-1)` transformation is required. The clear semi-diameters used by the viewer are derived values, not patent aperture heights, so any departure evaluated at those rims would be a model result rather than a source-published departure.

## Chromatic Correction Strategy

The chromatic design is concentrated in the two cemented pairs of Group II. D1 combines the high-Abbe positive S-FPL51 L4 (`νd=81.54`) with the much more dispersive negative S-TIH4 L5 (`νd=27.51`). D2 repeats the high-Abbe S-FPL51 positive glass at L7 against negative S-TIM1 L6 (`νd=35.70`).

The patent's arrangement is more specific than simply placing achromatizing glass pairs in sequence. Because the aperture stop is in front of Group II, the two positive-negative pairs are sampled at different off-axis ray heights. The patent states that this geometry is used to reduce both axial and lateral chromatic aberration and that splitting the central negative power between L5 and L6 adds freedom for controlling the chromatic difference of coma (¶0037-¶0038).

The final data's catalog-derived `nC`, `nF`, `ng`, and `dPgF` values allow the viewer to use higher-quality wavelength-dependent glass behavior than Abbe interpolation alone. They do not convert the patent into an APO claim; the analysis therefore describes the chromatic architecture without assigning an apochromatic label.

## Conditional Expressions

The patent gives three principal first-order conditions and narrower preferred ranges. Recalculation from the final TypeScript arrays reproduces Table 12 at its printed three-decimal precision.

| Condition | Preferred patent range | Computed from final data | Patent Table 12 |
|---|---|---:|---:|
| `f/f1` | `-0.1 < f/f1 < 0.2` | 0.052394 | 0.052 |
| `D_S2/D_1S` | `0.5 < D_S2/D_1S < 1.5` | 0.624183 | 0.624 |
| `D_12/f` | `1.0 < D_12/f < 2.0` | 1.656744 | 1.657 |

All three computed values lie within the patent's preferred ranges as well as its broader claimed ranges. The first value reflects the extremely weak positive net power of Group I; the second and third constrain the stop-to-group and group-to-group separations used to balance compactness, off-axis ray height, and focus travel (¶0047-¶0049).

## Verification Summary

Independent computation from the modeled prescription gives an infinity EFL of 5.9997208296 mm, within 0.0002792 mm of the patent's printed 6.00 mm. ABCD multiplication and an independent sequential y-ν basis trace agree to machine precision.

The normalized BFL from surface 15 is 7.2464760762 mm. The summed Petzval curvature, calculated surface by surface as `φ/(n·n′)`, is +0.01809050253 mm^-1, corresponding to +55.2776 mm under the project's reciprocal sign convention.

The physical stop semi-diameter is not published; it is calibrated in the model so that the actual prescription gives the source F=1.93. The resulting stop semi-diameter is 3.2766967 mm and the recomputed f-number is 1.9300000 by construction. This is therefore an authored aperture inference, not an independent source measurement.

The derived clear semi-diameters pass the reproduced edge-thickness, actual rim-slope, conic-domain, shared-gap-intrusion, and ray-containment checks at both modeled focus endpoints. At infinity, the traced 39.1° chief ray reaches image height 4.7955 mm, consistent with the patent's Y'=4.8 mm value without using the image height as a semi-diameter fit target.

No sensor cover plate, inactive dummy surface, flare cutter, folded path, or mechanical component remains in the active prescription. No uniform scale is applied, and no production 1 cm macro state is reconstructed.

## Sources

- Ricoh Co., Ltd., JP 2010-72639 A, Example 4, especially ¶0034-¶0042, ¶0050-¶0053, ¶0071-¶0072, ¶0094-¶0108, Tables 10-12, and Figures 4, 11, and 12.
- Ricoh, "GR DIGITAL III — Specifications": https://www.ricoh-imaging.co.jp/english/r_dc/gr/gr_digital3/specs.html
- Ricoh, "GR DIGITAL III — Features": https://www.ricoh-imaging.co.jp/english/r_dc/gr/gr_digital3/features.html
- Ricoh, "GR DIGITAL III — Features 3": https://www.ricoh-imaging.co.jp/english/r_dc/gr/gr_digital3/features3.html
- Ricoh, GR DIGITAL III announcement, 2009-07-27: https://www.ricoh-imaging.co.jp/english/r_dc/press/release/nr_grd3.html
- OHARA optical-glass catalog, used for normalized glass identities and the catalog-derived line-index/partial-dispersion annotations stored in the final data file: https://oharacorp.com/glass/
