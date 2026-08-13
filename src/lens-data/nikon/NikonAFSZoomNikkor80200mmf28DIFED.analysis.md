# NIKON AI AF-S ZOOM-NIKKOR 80-200mm f/2.8 D IF-ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2000-19398 A
**Application:** 特願平10-199713
**Filed:** 1998-06-30
**Published:** 2000-01-21
**Inventor:** Susumu Sato
**Applicant:** Nikon Corporation
**Title:** 大口径比内焦式望遠ズームレンズ (“Large-aperture-ratio internal-focusing telephoto zoom lens”)
**Embodiment analyzed:** Example 1 / 第1実施例

The selected prescription is Example 1 of JP 2000-19398 A. The project treats this embodiment as the fixed production correlation for the NIKON AI AF-S ZOOM-NIKKOR 80-200mm f/2.8 D IF-ED. The patent itself does not identify a commercial product, so the correlation is not presented as manufacturer confirmation.

The identification rests on several convergent facts. Example 1 is an 18-element, 14-air-spaced-group, positive-negative-positive-positive zoom with a split first group; the rear part of the first group alone performs internal focusing, while the second and third groups perform zooming and the fourth group remains fixed. The prescription contains five elements at the same very-low-dispersion optical position, `nd = 1.497820`, `νd = 82.52`. Its verified design range is approximately 81.55–196.00 mm at a modeled f/2.88. Nikon's production archive lists the commercial lens as an 80–200 mm f/2.8 FX/35 mm lens with 18 elements in 14 groups, five ED elements, and nine diaphragm blades. Nikon's historical design account also describes the production lens as a positive-negative-positive-positive four-group afocal zoom whose first group is divided so that its rear portion performs internal focusing.

Nikon's retrospective dates the commercial release to December 1998 and identifies Susumu Sato among the optical designers. That timing and design attribution are consistent with the 1998 filing and with Susumu Sato as the named patent inventor. These facts support the production correlation, but they do not constitute an explicit Nikon statement that Example 1 is the production prescription.

The marketed and modeled quantities are therefore kept separate. The production specification is 80–200 mm f/2.8, while the data model carries a verified design EFL range of `81.549920824–195.999955682 mm` and a modeled maximum aperture of f/2.88. The patent's telephoto control column is printed as `194.0000 mm`, but the exact spacings in that column independently evaluate to `195.999955682 mm`; the raw control heading is retained for source traceability while the computed design EFL is reported separately.

## Optical Architecture

Example 1 is a four-group afocal zoom with the power sequence G1 positive, G2 negative, G3 positive, and G4 positive. The patent specifies that G2 and G3 move for zooming, while G1 and G4 remain fixed during zoom (¶0026–¶0029). G1 is itself divided into a fixed front subgroup G1F and an internal-focusing rear subgroup G1R. The aperture stop is a published physical plane between G3 and G4, one millimeter before the first surface of G4.

Independent first-order calculation from the final prescription gives the following group focal lengths in air:

| Functional group | Computed focal length |
|---|---:|
| G1F | +206.107143 mm |
| G1R | +142.265313 mm |
| G1 total | +92.469664 mm |
| G2 | −27.462139 mm |
| G3 | +105.493725 mm |
| G4 | +98.329822 mm |

These values are air-to-air effective focal lengths of the functional group partitions extracted from the prescription. They quantify each partition as an isolated subsystem; they are not measures of that partition's in-situ conjugate action inside the complete zoom. They also should not be confused with the standalone thick-lens focal lengths of individual physical elements listed below. In particular, the weak net powers of several cemented pairs do not determine the sign of the complete functional group in which they operate.

G2 is the variator. From wide to the source tele control column it moves imageward. G3 is the compensator: it moves slightly imageward between the wide and middle control states and then reverses to move objectward toward the tele state. This non-monotonic motion maintains the image plane while the variator changes magnification. G4 is the fixed master group. Nikon's retrospective describes the production lens with the same variator/compensator/master arrangement.

The selected prescription is entirely spherical and is modeled at native patent scale. No dimensional scaling was applied, and there are therefore no transformed aspheric coefficients. No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical component is present in the Example 1 optical prescription, so no plate omission or air-equivalent rear-spacing correction is required.

The patent and Nikon both use “telephoto zoom” in the ordinary design/product sense. LensVisualizer's stricter descriptive rule reserves “telephoto” for `TL/EFL < 1`. With first-surface-to-image track near `250.8296 mm`, the modeled control states have `TL/EFL` greater than 1, so this analysis does not apply the project's strict telephoto classification to the prescription itself.

The aperture location is source-published, but its physical semi-diameter is not. The authored stop semi-diameter, `18.801412058 mm`, is a modeling inference obtained from the source's f/2.88 aberration figure. A single stop of that size reproduces approximately f/2.88 at all three zoom control states. This is distinct from the marketed f/2.8 aperture.

Patent Table 1 publishes effective diameters only at source surfaces 1, 6, 10, and 17. Those four values are preserved directly as semi-diameters `35.75`, `28.00`, `17.40`, and `18.40 mm`. The remaining semi-diameters are modeling values constrained by the Example 1 optical section and the validated geometry of the final data file; they are not patent measurements.

## Element-by-Element Analysis

The focal length stated for each element in this section is its standalone thick-lens focal length in air, computed from the element's two bounding radii, center thickness, and refractive index. It is a diagnostic of the isolated element, not a claim that the element contributes the same power when embedded in the complete zoom.

### L1 — Negative Meniscus, D01 Front Member

`nd = 1.805182`, `νd = 25.41`. Glass: `805254 — optical-position class (vendor unproven)`. Standalone `f = −384.355197 mm`.

L1 is the negative member of the front cemented component in G1F. The patent describes the front part of G1 as a cemented positive component followed by a positive lens component (¶0028). L1 therefore acts as the negative member of a pair whose net cemented power is positive rather than as an isolated negative lens in the system.

### L2 — Positive Meniscus, D01 Rear Member

`nd = 1.497820`, `νd = 82.52`. Glass: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`. Standalone `f = +196.583024 mm`.

L2 is cemented directly to L1. The D01 pair has a computed net focal length of `+423.226325 mm`, so the pair is weakly positive even though L1 alone is negative. The patent's condition (4) constrains the shape of this front cemented positive component; the final prescription gives `(R2 − R1)/(R2 + R1) = 0.468239`, within the specified range. The patent links this shape balance to the focus-travel and spherical-aberration tradeoff (¶0017–¶0018).

### L3 — Positive Meniscus, G1F Singlet

`nd = 1.497820`, `νd = 82.52`. Glass: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`. Standalone `f = +383.837282 mm`.

L3 completes G1F. Its positive standalone power supplements the positive D01 cemented component, giving G1F a computed focal length of `+206.107143 mm`. G1F remains fixed during both zooming and focusing in the authored model.

### L4 — Negative Meniscus, G1R Front Member

`nd = 1.846660`, `νd = 23.82`. Glass: `847238 — optical-position class (vendor unproven)`. Standalone `f = −508.114145 mm`.

L4 is the front negative member of the two-element G1R focusing subgroup. The patent specifies a negative meniscus followed by a positive lens component for this subgroup and moves G1R alone for focusing (¶0011, ¶0026, ¶0028). Its relatively high index and low Abbe number participate directly in patent conditions (7) and (9).

### L5 — Positive Meniscus, G1R Rear Member

`nd = 1.487490`, `νd = 70.41`. Glass: `487704 — optical-position class (vendor unproven)`. Standalone `f = +109.328876 mm`.

L5 is the positive rear member of G1R. Together L4 and L5 form a net positive focusing subgroup with computed `f = +142.265313 mm`. The index difference `1.846660 − 1.487490 = 0.35917` satisfies patent condition (7), while L5's `νd = 70.41` and L4's `νd = 23.82` satisfy conditions (8) and (9). The patent explicitly associates these material constraints with maintaining good correction while limiting focus-induced change (¶0022–¶0025).

### L6 — Negative Meniscus, G2 Variator Front Member

`nd = 1.796681`, `νd = 45.37`. Glass: `J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)`. Standalone `f = −46.928561 mm`.

L6 is the front strongly negative member of G2. J-LASF017 supplies a compatible public dispersion curve for the patent coordinate without identifying the historical production melt. In combination with L7–L9, it contributes to the strongly negative G2 variator, whose computed group focal length is `−27.462139 mm`.

### L7 — Biconcave Negative, D02 Front Member

`nd = 1.487490`, `νd = 70.41`. Glass: `487704 — optical-position class (vendor unproven)`. Standalone `f = −48.906317 mm`.

L7 is a biconcave negative element cemented to L8. Its strong negative standalone power is paired with L8's positive power at a cemented interface. The pair is not itself the principal negative power source of G2: D02 has a weak computed net focal length of `+643.295889 mm`, while the complete G2 group remains strongly negative because of the surrounding negative members.

### L8 — Biconvex Positive, D02 Rear Member

`nd = 1.846660`, `νd = 23.82`. Glass: `847238 — optical-position class (vendor unproven)`. Standalone `f = +46.386461 mm`.

L8 is the positive member of D02. Its opposite power and different dispersion coordinate from L7 make the cemented pair a local balancing component inside the negative variator. The patent describes G2 as a multi-component negative group; the complete negative sign is confirmed by the independently computed G2 focal length rather than by the sign of this cemented pair alone.

### L9 — Biconcave Negative, G2 Rear Member

`nd = 1.796681`, `νd = 45.37`. Glass: `J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)`. Standalone `f = −75.437214 mm`.

L9 is the rear negative member of G2. Its surface radii have opposite signs (`R15 < 0`, `R16 > 0`), making it biconcave in the final data file. Like L6, it uses J-LASF017 only as a compatible public dispersion curve, not as a historical supplier claim.

### L10 — Biconvex Positive, G3 Front Member

`nd = 1.497820`, `νd = 82.52`. Glass: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`. Standalone `f = +131.264963 mm`.

L10 is the front positive singlet of the G3 compensator. The patent specifies that G3 begins with a positive lens component and applies conditions (5) and (6) to a positive component in this group, requiring `1.4 < Np3 < 1.6` and `62 < νp3 < 100` (¶0019–¶0021). The authored `1.497820 / 82.52` coordinate satisfies both conditions.

### L11 — Biconvex Positive, D03 Front Member

`nd = 1.497820`, `νd = 82.52`. Glass: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`. Standalone `f = +77.025752 mm`.

L11 is the positive front member of the second G3 component and is cemented to L12. It carries the same very-low-dispersion optical position used by L2, L3, L10, and L14. The production lens is specified by Nikon as having five ED elements; the presence of exactly five elements at this coordinate is part of the project’s production-correlation evidence, not proof of a particular vendor glass.

### L12 — Negative Meniscus, D03 Rear Member

`nd = 1.744000`, `νd = 45.00`. Glass: `H-LaF3B catalog equivalent (patent 744450; production supplier unspecified)`. Standalone `f = −91.665206 mm`.

L12 is the negative member of D03. The computed net focal length of the cemented pair is `+500.966956 mm`, so D03 remains weakly positive in air. Together with L10, the pair contributes to the complete G3 focal length of `+105.493725 mm`. During zooming, this group serves as the compensator and follows the source-published reversing trajectory.

### L13 — Positive Meniscus, G4 Front Member

`nd = 1.787971`, `νd = 47.47`. Glass: `788475 — optical-position class (vendor unproven)`. Standalone `f = +155.188810 mm`.

L13 is the first positive member of the fixed G4 master group. G4 remains fixed during zoom and focus in the authored prescription. Its job in the first-order architecture is to provide a fixed positive imaging group behind the moving afocal front system.

### L14 — Positive Meniscus, D04 Front Member

`nd = 1.497820`, `νd = 82.52`. Glass: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`. Standalone `f = +103.567980 mm`.

L14 is the fifth element in the prescription at the `498825` ED-class coordinate. It is cemented to L15. The pair's computed net focal length is `−602.953907 mm`; therefore D04 is weakly negative even though L14 alone is positive.

### L15 — Negative Meniscus, D04 Rear Member

`nd = 1.620040`, `νd = 36.27`. Glass: `620363 — optical-position class (vendor unproven)`. Standalone `f = −80.938391 mm`.

L15 supplies the negative member of D04 and reverses the sign of the cemented pair's net power. This weak negative component operates within a G4 group that is positive overall, illustrating why standalone and cemented powers must be separated from the in-situ power of the complete master group.

### L16 — Biconvex Positive, G4 Relay Member

`nd = 1.531721`, `νd = 48.97`. Glass: `S-TIL6 catalog equivalent (patent 532490; production supplier unspecified)`. Standalone `f = +95.921995 mm`.

L16 is a positive biconvex singlet in the long internal spacing of G4. Its standalone positive power contributes to recovery from the weak negative D04 component and to the net positive power of the master group.

### L17 — Negative Meniscus, G4 Rear Negative Member

`nd = 1.803840`, `νd = 33.89`. Glass: `E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)`. Standalone `f = −59.170650 mm`.

L17 is the rear negative member of G4. E-LAFH2 is an exact coefficient-backed match to its `804339` patent coordinate, while the historical production supplier remains unspecified. The negative standalone power is followed by the final positive element L18.

### L18 — Biconvex Positive, Final G4 Member

`nd = 1.772789`, `νd = 49.45`. Glass: `773495 — optical-position class (vendor unproven)`. Standalone `f = +80.426550 mm`.

L18 is the final positive element before the fixed back-focus space. Together with the preceding G4 members it yields a complete G4 focal length of `+98.329822 mm`. The final refracting surface is followed by the patent back-focus spacing of `57.01947 mm` to the image plane.

## Glass Identification and Selection

The selected patent publishes only d-line refractive index and Abbe number. It does not name the historical glass manufacturer or catalog glass for any element. The final data file retains the patent coordinates and uses compatible coefficient-backed catalog equivalents where available, without treating those equivalents as production-supplier evidence.

| Optical-position annotation | `nd` | `νd` | Elements | Authored interpretation |
|---|---:|---:|---|---|
| 805254 | 1.805182 | 25.41 | L1 | optical-position class; vendor unproven |
| J-FKH1 equivalent (498825) | 1.497820 | 82.52 | L2, L3, L10, L11, L14 | Compatible ED curve; production supplier unspecified |
| 847238 | 1.846660 | 23.82 | L4, L8 | optical-position class; vendor unproven |
| 487704 | 1.487490 | 70.41 | L5, L7 | optical-position class; vendor unproven |
| J-LASF017 equivalent (797454) | 1.796681 | 45.37 | L6, L9 | Compatible coefficient-backed curve; production supplier unspecified |
| H-LaF3B equivalent (744450) | 1.744000 | 45.00 | L12 | Compatible coefficient-backed curve; production supplier unspecified |
| 788475 | 1.787971 | 47.47 | L13 | optical-position class; vendor unproven |
| 620363 | 1.620040 | 36.27 | L15 | optical-position class; vendor unproven |
| S-TIL6 equivalent (532490) | 1.531721 | 48.97 | L16 | Compatible coefficient-backed curve; production supplier unspecified |
| E-LAFH2 equivalent (804339) | 1.803840 | 33.89 | L17 | Exact coefficient-backed coordinate; production supplier unspecified |
| 773495 | 1.772789 | 49.45 | L18 | optical-position class; vendor unproven |

The strongest production-correlation feature in the glass palette is the repeated `498825` coordinate: it occurs in exactly five physical elements, while Nikon specifies five ED elements for the production lens. J-FKH1 provides a compatible public dispersion curve, but its use does not identify Nikon's historical supplier or production melt.

The patent's material conditions show that dispersion placement is structurally important. Conditions (5) and (6) constrain a positive G3 component to the low-index/high-Abbe region, while conditions (7)–(9) constrain the index separation and Abbe values of the positive and negative members of the G1R focusing subgroup. These are source-published glass-coordinate requirements rather than retrospective catalog assignments.

No element carries authored `nC`, `nF`, `ng`, or `dPgF`, and no `apd` flag is present. Nikon's retrospective discusses very strong axial chromatic correction in the production lens, but the available prescription data do not support an APO or anomalous-partial-dispersion claim under the project's evidence rules. Chromatic interpretation is therefore limited to the published `nd/νd` coordinates, the patent conditions, and the manufacturer-confirmed count of five ED elements.

## Focus Mechanism

The patent uses internal focusing by moving only G1R, the two-element L4–L5 subgroup. G1F, G2, G3, and G4 remain fixed with respect to their current zoom positions during focusing. Nikon's production history describes the same split-first-group internal-focus architecture and connects the small focusing group to the mechanical constraints imposed by the early ring-type Silent Wave Motor.

The final data file uses a **CONSTRAINED_RECONSTRUCTION** for the close-focus state. The patent's own mechanism requires rigid translation of G1R, which means the decrease in the air gap ahead of G1R (`d5`) must equal the increase in the air gap behind it (`d9`). The source close-focus table does not satisfy that identity exactly: its `d5` change is `8.59615 mm`, whereas its printed `d9` change is `8.60325 mm`, a `0.00710 mm` discrepancy.

The authored model preserves the source close value `d5 = 8.48886 mm`, fixing G1R travel at `8.59615 mm`, and applies exactly the same travel to `d9` at each zoom control state:

| Zoom control | `d5` infinity | `d5` close | `d9` infinity | Raw source `d9` close | Authored `d9` close |
|---:|---:|---:|---:|---:|---:|
| 81.55 | 17.08501 | 8.48886 | 1.99906 | 10.60231 | 10.59521 |
| 135 | 17.08501 | 8.48886 | 16.04981 | 24.65306 | 24.64596 |
| 194 source column | 17.08501 | 8.48886 | 22.87155 | 31.47480 | 31.46770 |

This is not a free fit. The motion is fully constrained by the patent's rigid-group mechanism and one preserved source endpoint. With the reconstructed spacings, finite-conjugate calculation gives object-to-image distances of approximately `1500.021`, `1500.035`, and `1500.040 mm` at wide, middle, and tele control states, respectively, while satisfying the paraxial imaging condition. Those values closely reproduce the patent's stated `R = 1500 mm` close-focus condition.

The focus model therefore preserves the patent's stated 1.5 m close-focus intent while correcting only the internally inconsistent adjacent gap. The raw source values remain source evidence and are not silently overwritten conceptually. Quantitative focus verification applies to the three published zoom control columns. Between those columns, LensVisualizer's standard piecewise-linear spacing interpolation is a visualization of the available states, not a reconstruction of Nikon's continuous zoom cam law and not a claim that the interpolated close-focus slider remains exactly at 1.5 m.

## Chromatic Correction Strategy

The chromatic strategy is visible principally in the repeated very-low-dispersion positive elements and in the patent's explicit material inequalities. Five physical elements use the `1.497820 / 82.52` coordinate: two in G1F, two in G3, and one in G4. This distributes low-dispersion positive power through the front collector, compensator, and master group rather than confining it to a single achromatizing pair.

G1R uses the deliberately separated material pair `1.846660 / 23.82` and `1.487490 / 70.41`. Patent conditions (7)–(9) explicitly constrain the index difference and both Abbe values. The computed prescription gives an index difference of `0.35917`, with `νd = 70.41` for the positive member and `νd = 23.82` for the negative member, all within the patent limits. This establishes that material selection in the focusing subgroup is part of the patent's correction strategy rather than an incidental glass choice.

G3 likewise places high-Abbe positive glass at `1.497820 / 82.52`, satisfying conditions (5) and (6). The cemented positive-negative D03 pair combines that coordinate with `1.744000 / 45.00`. The available source supports describing this as a chromatic-correction strategy based on index/Abbe placement; it does not support a higher-order partial-dispersion model because no line indices or `dPgF` values are published.

## Conditional Expressions

JP 2000-19398 A gives nine principal inequalities for the design family (¶0012–¶0025). Recomputed from the final data file, Example 1 satisfies all nine:

| Condition | Recomputed value | Required interval | Result |
|---:|---:|---|---|
| `f1R / (f1F·D1)` | 0.0404008723 | 0.005–0.05 | pass |
| `(|f23|·FW)/(f1·f4·ΔD1)` | 0.0924093261 | 0.04–0.13 | pass |
| `|f2|/(f1·FW)` | 0.00364175830 | 0.002–0.0038 | pass |
| `(R2−R1)/(R2+R1)` | 0.4682391201 | 0–1 | pass |
| `Np3` | 1.497820 | 1.4–1.6 | pass |
| `νp3` | 82.52 | 62–100 | pass |
| `Nn1−Np1` | 0.35917 | 0.25–0.55 | pass |
| `νp1` | 70.41 | 65–100 | pass |
| `νn1` | 23.82 | 20–30 | pass |

The first three conditions govern the relationship among subgroup power, zoom-group power, wide-angle focal length, and focus travel. Condition (4) constrains the shape of the front G1F cemented positive component. Conditions (5)–(6) select the G3 positive-glass region, while conditions (7)–(9) constrain the material pairing of the G1R focusing subgroup. The design values are calculated from the prescription rather than copied from the rounded corresponding-value table.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD calculation agree for the final prescription. The three authored infinity control states evaluate to:

| Source zoom control | Computed EFL | Computed BFD | First surface to image plane |
|---:|---:|---:|---:|
| 81.55 | 81.549920824 mm | 57.019519138 mm | 250.829600 mm |
| 135 | 134.999788354 mm | 57.019785346 mm | 250.829600 mm |
| 194 source column | 195.999955682 mm | 57.020259556 mm | 250.829610 mm |

The wide and middle states reproduce the patent headings to source precision. The final column exposes a source contradiction: the patent prints `194.0000 mm`, while the same published spacings calculate to essentially `196.0000 mm`. The data file retains `194` as the interpolation control heading and reports the independently calculated tele design EFL separately.

The surface-by-surface Petzval sum, using `φ/(n·n′)` at every refracting surface, is `+0.00137533239976616 mm⁻¹`. This is a first-order surface-power diagnostic and is not presented as a measured or optimized best-focus field-curvature radius.

The modeled stop is fixed at the source-published aperture plane. Its semi-diameter is inferred, not source-tabulated. The same stop reproduces approximately f/2.88 at wide, middle, and tele control states; accordingly `nominalFno` and `apertureDesign` are 2.88, while `apertureMarketing` remains 2.8.

Only four semi-diameters are direct patent values. The remaining clear apertures are inferred from the source optical section and the validated ray/geometry model. They are therefore modeling data and should not be read as Nikon manufacturing dimensions.

Example 1 contains no aspherical surfaces, no diffractive phase surface, no folded optical path, and no auxiliary cover/filter plate in the modeled prescription. No scaling was applied. Those absences are material to interpretation because there is no hidden asphere coefficient conversion, no omitted plate correction, and no nonsequential ray path behind the reported first-order quantities.

## Sources and References

1. Nikon Corporation, **JP 2000-19398 A**, “大口径比内焦式望遠ズームレンズ,” published 2000-01-21. Example 1 / 第1実施例 is the prescription analyzed here. Relevant material includes ¶0011–¶0029, Table 1, and Figures 1–7.
2. Nikon Imaging, **“NIKKOR — The Thousand and One Nights No.67: AI AF-S Zoom-Nikkor 80-200mm f/2.8D IF-ED.”** The retrospective gives the December 1998 release, development attribution, and the production lens's positive-negative-positive-positive afocal architecture with split first-group internal focusing. https://imaging.nikon.com/imaging/information/story/0067/
3. Nikon USA, **“AF-S Zoom-Nikkor 80-200mm f/2.8D IF-ED”** product archive. The archive gives the marketed 80–200 mm range, FX/35 mm format, 18-element/14-group construction, nine diaphragm blades, and five ED elements. https://www.nikonusa.com/p/af-s-zoom-nikkor-80-200mm-f28d-if-ed/1993/overview
