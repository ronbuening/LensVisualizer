## Patent Reference and Design Identification

**Patent:** JP2000284174A\
**Application Number:** JP11087076A\
**Filed:** 1999-03-29\
**Published:** 2000-10-13\
**Inventor:** Akihiro Nishio\
**Applicant:** Canon Inc.\
**Title:** Zoom lens (ズームレンズ)\
**Embodiment analyzed:** Numerical Example 1

The Japanese publication names the inventor as `西尾 彰宏`; the normalized Latin-script form used here is Akihiro Nishio, consistent with a U.S. Canon zoom-lens patent by the same inventor and its assignment record.

The prescription modeled here is Numerical Example 1 of JP2000284174A. The patent presents a four-group inner-focusing zoom whose first group is subdivided into a fixed positive L1a subgroup and a positive L1b subgroup that moves toward the object for close focusing. L2 is the negative variator, L3 is the positive compensator, SP is the aperture stop, and L4 is the fixed positive relay group (¶0024–¶0027). The numerical table on patent PDF p. 6 gives `f = 71.92–194.57 mm`, `Fno = 4.1`, and the three published variable gaps D8, D15, and D18; Figure 1 on PDF p. 8 shows the corresponding L1/L2/L3/SP/L4 arrangement.

The fixed production correlation is the CANON EF 70-200mm f/4L USM. It is a correlation from convergent optical and product evidence, not a statement that Canon has identified this patent as the production prescription:

1. Canon lists the production lens as 16 elements in 13 groups, exactly matching the decomposition of Numerical Example 1.
2. Canon marketed the production lens in September 1999. The patent was filed on 1999-03-29 and published on 2000-10-13, placing the application in the production-development period.
3. The patent model computes to 71.901–194.540 mm at f/4.1, close to but not uniformly scalable to the marketed 70–200 mm f/4 specification. The model therefore retains the patent dimensions without scaling.
4. Canon states that the production lens uses one synthetic crystalline fluorite element and two UD elements. Numerical Example 1 contains one `nd = 1.433870, νd = 95.1` element and two `nd = 1.496999, νd = 81.5` elements. The data file correlates these with synthetic CaF2 and an S-FPL51/FCD1-class UD material, respectively; the vendor/melt attribution remains an inference.
5. Canon specifies inner focusing. The patent explicitly focuses by translating L1b toward the object (¶0025, ¶0029).
6. Canon specifies a 1.2 m closest focusing distance and 0.21× maximum magnification. The constrained focus model at the tele control point gives 0.2150×, consistent with the rounded production figure without treating it as a patent-published close-focus row.

Marketing and design values are kept separate throughout. The production specification is 70–200 mm f/4; the numerical model uses the patent zoom controls 71.92, 118.29, and 194.57 mm and the patent/model f-number 4.1. The data file's independently computed design endpoints are 71.901018 and 194.540481 mm.

No uniform scaling is applied. No sensor cover glass, filter, dummy surface, flare-cutter plane, or other inactive optical plate appears in the selected numerical prescription, so there is no omitted-plate correction or air-equivalent spacing adjustment. No patent radius, spacing, refractive index, or Abbe value is numerically corrected in the model.

Numerical Example 1 is all-spherical. The patent's ¶0054 statement that aspherical, diffractive, or gradient-index components may be introduced is a general option, not evidence that this embodiment contains such a surface. The data file therefore has no aspherical coefficients.

## Optical Architecture

The design is a four-group positive-negative-positive-positive zoom with an inner-focusing subdivision in the first group. In patent notation the power sequence is L1 positive, L2 negative, L3 positive, and L4 positive. Independent paraxial computation from the final data gives functional-group focal lengths of approximately +109.264 mm for L1, -31.387 mm for L2, +107.114 mm for L3, and +87.234 mm for L4. These are standalone equivalent focal lengths of the functional groups, computed from each group’s own surfaces and internal spacings with air on both sides. They should not be confused with the standalone focal lengths of individual elements or with an in-situ power contribution inside the complete zoom.

L1 contains four air-spaced elements. E1 forms the fixed L1a subgroup, while E2–E4 form the translating L1b focus subgroup. The patent specifically uses this split to keep the first group positive while moving only the rear subgroup for focusing. The patent explains that the balance between L1a and L1b power limits focus travel, size, and aberration change (¶0034–¶0037).

L2 is the negative variator and contains E5, the cemented E6+E7 pair, and E8. From wide to tele, the L2 start position moves imageward from 32.97 to 72.32 mm relative to R1, a 39.35 mm shift. The published D8 gap grows from 1.90 to 25.60 to 41.25 mm, consistent with the patent's description of monotonic imageward variator motion (¶0026).

A point requiring care is the E6+E7 cemented pair. Patent ¶0051 describes a preferred L2 construction in which the cemented negative-plus-positive pair is negative overall. The actual Numerical Example 1 prescription, however, gives a weakly positive cemented net focal length of +417.738 mm when computed from R11–R13. The complete L2 group remains strongly negative at -31.387 mm because E5 and E8 dominate the group power. The numerical table governs this analysis; the optional preferred-construction prose is not used to override it.

L3 is the positive compensator and consists of the cemented E9+E10 pair. Its net focal length is +107.114 mm. The patent says L3 follows an object-side-convex compensation trajectory to correct image-plane displacement during zooming (¶0027). The three published states reproduce that behavior: the L3 start position moves from 71.78 to 87.00 mm and then reverses slightly to 86.67 mm. The final 0.33 mm objectward reversal is why D18 changes non-monotonically from 19.00 to 3.78 to 4.11 mm.

The physical stop lies between L3 and L4, exactly where the patent places SP. The stop location is source-published; its diameter is not. The modeled stop semi-diameter of 14.258451 mm is an inferred paraxial value chosen to reproduce f/4.1 across the three published zoom states.

L4 is fixed during zoom and contains six elements in five air-separated groups: E11, the cemented E12+E13 pair, E14, E15, and E16. Its group focal length is +87.234 mm. Patent ¶0048 describes L4 as imaging the approximately afocal beam emerging from L3 onto the image plane. The E12+E13 cemented pair is net negative at -133.803 mm, while the surrounding positive singlets give the complete relay positive power.

The patent uses the term 望遠型 (telephoto-type) for the zoom in ¶0061. Under the project's stricter architectural definition, however, the model is not labeled telephoto because total track divided by EFL remains greater than 1 at every authored infinity state: 2.960 at wide, 1.800 at the middle state, and 1.094 at tele. It is also not retrofocus because the modeled back focal distance is shorter than EFL at all three states.

The selected prescription has no image-stabilization group or decentered optical path. Patent ¶0055 only states that decentering part of L2 or L4 can be used for shake correction as a general option; that optional mechanism is not part of Numerical Example 1 and is not modeled for this non-IS production lens.

## Element-by-Element Analysis

### E1 — Positive Meniscus, Fixed L1a

`nd = 1.487490, νd = 70.2. Glass: S-FSL5 (OHARA) class. Standalone f = +504.979 mm.`

E1 is the single positive element of L1a and remains fixed during both zooming and the modeled focus movement. Its standalone power is weak relative to the complete L1 group; independent computation gives L1a the same +504.979 mm focal length because E1 alone forms that subgroup.

The patent's first-group power conditions deliberately avoid concentrating too much power in either L1a or L1b. In the final prescription, L1b is substantially stronger than E1 but not so strong that the first-group power is concentrated entirely in the moving focus subgroup.

### E2 — Negative Meniscus, Front of L1b

`nd = 1.721507, νd = 29.2. Glass: S-TIH18 (OHARA) class. Standalone f = -232.775 mm.`

E2 is the first element of the translating L1b subgroup. Its negative meniscus power opposes the two following positive elements while L1b remains positive as a whole. The patent's preferred L1b construction begins with an object-side-convex negative meniscus followed by two positive elements (¶0038), which is the sequence represented by E2–E4.

The element moves rigidly with E3 and E4 during focusing. It has no independent floating motion in the data model.

### E3 — Positive Meniscus, Fluorite-Correlated L1b Element

`nd = 1.433870, νd = 95.1. Glass: Synthetic fluorite (CaF2; Canon Optron spectral surrogate). Standalone f = +185.184 mm.`

E3 is the central positive member of L1b. Its patent `nd/νd` pair lies very close to current optical-grade CaF2 data. Canon separately states that the production lens contains one synthetic crystalline fluorite element; the identification of E3 as the corresponding element is therefore a production-correlation inference rather than a material name published in the patent.

The data file stores Canon Optron CaF2 line indices as a current spectral surrogate (`nC = 1.43246`, `nF = 1.43701`, `ng = 1.43947`, `dPgF = +0.057086661`). These values support spectral modeling but are not evidence for the exact historical melt used in 1999.

### E4 — Biconvex Positive, Low-Dispersion L1b Element

`nd = 1.496999, νd = 81.5. Glass: S-FPL51 (OHARA) / FCD1-class UD glass. Standalone f = +151.553 mm.`

E4 completes L1b and is the stronger of its two positive elements in standalone focal-length terms. Its stored d-line pair is essentially coincident with the modern S-FPL51/FCD1 family. Canon states that the production lens uses two UD elements; assigning E4 to one of those positions is an inference from the numerical material coordinates and production block-diagram correlation.

Together E2–E4 form a positive focus subgroup with computed focal length +133.620 mm. The complete L1 group, including fixed E1 and the intervening air gap, is +109.264 mm in the infinity reference state.

### E5 — Biconcave Negative, Front Variator Element

`nd = 1.804000, νd = 46.6. Glass: 804466 LASF class (HIKARI J-LASF015 spectral surrogate). Standalone f = -40.041 mm.`

E5 is the strongest standalone negative element at the front of L2. Its high index permits substantial negative surface power within the compact variator. The patent assigns L2 the principal zooming action and constrains its overall power so that the required zoom ratio does not demand excessive axial travel (¶0043–¶0045).

The data file uses J-LASF015 only as the current spectral surrogate for the 804466 coordinate pair; the patent does not specify HIKARI as the glass supplier.

### D1 — E6 + E7, Cemented Pair in L2

**E6:** `nd = 1.516330, νd = 64.1. Glass: S-BSL7 (OHARA) / N-BK7 class. Standalone f = -48.772 mm.`\
**E7:** `nd = 1.846658, νd = 23.9. Glass: S-TIH53WN (OHARA) class; current spectral surrogate. Standalone f = +44.068 mm.`

E6 is biconcave and negative; E7 is biconvex and positive. They share the R12 cemented interface, which belongs to downstream element E7 in the data model. The individual powers are nearly balanced, and the actual cemented pair is only weakly positive: +417.738 mm net focal length. This cemented net power is distinct from either standalone element focal length and from the complete L2 group power of -31.387 mm.

The E7 glass annotation is intentionally conservative. Its `nd/νd` pair is very close to current S-TIH53WN, but OHARA introduced the modified-dispersion `WN` version in 2025. Its line indices and `dPgF` are therefore used only as a present-day spectral surrogate; the data does not claim that S-TIH53WN was the historical Canon material.

### E8 — Negative Meniscus, Rear Variator Element

`nd = 1.749500, νd = 35.0. Glass: 750350 LAFN7/LAF7 class (SCHOTT LAFN7 spectral surrogate). Standalone f = -123.029 mm.`

E8 is the rear negative singlet of L2. Together with the much stronger negative E5, it ensures that the complete variator remains strongly negative despite the weak positive net power of D1.

The `750350` class label is retained because the d-line pair is compatible with more than one vendor family at patent precision. The SCHOTT LAFN7 line data in the file is a spectral surrogate, not a historical vendor attribution.

### D2 — E9 + E10, Positive Compensator L3

**E9:** `nd = 1.622992, νd = 58.2. Glass: S-BSM15 (OHARA) class. Standalone f = +42.106 mm.`\
**E10:** `nd = 1.762001, νd = 40.1. Glass: 762401 lanthanum-flint class (OHARA S-LAM55 spectral surrogate). Standalone f = -69.682 mm.`

E9 is biconvex and positive; E10 is a negative meniscus. The pair is cemented at R17, with the interface assigned to downstream E10. The cemented pair has net focal length +107.114 mm and forms the complete L3 compensator.

This pair's positive net power agrees with the patent's preferred L3 description of a biconvex positive lens cemented to a negative meniscus to form a positive group (¶0052). During zooming the whole pair moves as one compensator and reverses slightly after the middle control point.

### E11 — Biconvex Positive, Front Relay Singlet

`nd = 1.603112, νd = 60.6. Glass: 603607 barium-crown class (OHARA S-BSM14 spectral surrogate). Standalone f = +62.581 mm.`

E11 is the first refractive element after the aperture stop and begins the fixed L4 relay. Its relatively strong positive standalone power contributes to converting the beam leaving the moving front groups into the final image-forming relay.

The 603607 annotation is class-level because the patent supplies only the d-line coordinates. S-BSM14 supplies the current line-index surrogate used by the model.

### D3 — E12 + E13, Negative Cemented Relay Pair

**E12:** `nd = 1.496999, νd = 81.5. Glass: S-FPL51 (OHARA) / FCD1-class UD glass. Standalone f = +62.260 mm.`\
**E13:** `nd = 1.804398, νd = 39.6. Glass: 804396 LASF class (HIKARI J-LASF013 spectral surrogate). Standalone f = -40.069 mm.`

E12 and E13 share the R23 cemented interface, assigned to downstream E13. Their combined focal length is -133.803 mm, so the pair is negative in isolation even though E12 itself is strongly positive.

E12 is the second `nd = 1.496999, νd = 81.5` element in the prescription and is therefore the second UD-class correlation in the data model. Its placement in a negative cemented relay pair provides a second low-dispersion positive component away from the front focus subgroup. The precise historical vendor remains unresolved.

### E14 — Biconvex Positive Relay Singlet

`nd = 1.603112, νd = 60.6. Glass: 603607 barium-crown class (OHARA S-BSM14 spectral surrogate). Standalone f = +117.644 mm.`

E14 is separated from D3 by the longest fixed internal air gap in L4, 30.56 mm. It restores positive power after the negative cemented pair while remaining part of the fixed relay.

E14 uses the same patent `nd/νd` coordinates as E11 and therefore shares the same class-level spectral surrogate in the data file.

### E15 — Negative Meniscus, Rear Relay Element

`nd = 1.696797, νd = 55.5. Glass: 697555 lanthanum-crown class (OHARA S-LAL14 spectral surrogate). Standalone f = -75.164 mm.`

E15 is a negative meniscus in the rear portion of L4. Its negative power is balanced by the surrounding positive relay elements rather than acting as an independent moving correction group.

The `697555` class assignment closely matches current S-LAL14/J-LAK14-type coordinates, but the data file deliberately avoids claiming a historical vendor.

### E16 — Biconvex Positive, Final Relay Element

`nd = 1.592701, νd = 35.3. Glass: 593353 flint class (OHARA S-FTM16 spectral surrogate). Standalone f = +208.665 mm.`

E16 is the final positive element before the modeled image space. Its standalone power is modest compared with E11 and E12, and it completes the fixed positive L4 relay.

Example 1 does not publish a D30 back-focus distance. The air space after E16 is therefore not a patent row: the model uses a fixed 53.130856 mm image-space distance derived from the mean of the three independently computed infinity-focus BFDs.

## Glass Identification and Selection

JP2000284174A defines `Ni` and `νi` as d-line refractive index and Abbe number (¶0056) but does not name glass manufacturers or publish per-element C-, F-, or g-line indices. The exact `nd/νd` pairs below are patent data; the named glasses and line-index sets are current catalog matches or surrogates used by the data model. They should not be read as proof of the 1999 production melts.

| Elements | Patent `nd / νd` | Data-file glass annotation | Spectral/model status |
|---|---|---|---|
| E1 | 1.487490 / 70.2 | S-FSL5 (OHARA) class | Current OHARA line-index surrogate |
| E2 | 1.721507 / 29.2 | S-TIH18 (OHARA) class | Current OHARA line-index surrogate |
| E3 | 1.433870 / 95.1 | Synthetic fluorite (CaF2; Canon Optron spectral surrogate) | Strong CaF2 coordinate match; production correlation inference |
| E4, E12 | 1.496999 / 81.5 | S-FPL51 (OHARA) / FCD1-class UD glass | Current low-dispersion line-index surrogate; vendor unresolved |
| E5 | 1.804000 / 46.6 | 804466 LASF class | HIKARI J-LASF015 spectral surrogate |
| E6 | 1.516330 / 64.1 | S-BSL7 (OHARA) / N-BK7 class | Current crown line-index surrogate |
| E7 | 1.846658 / 23.9 | S-TIH53WN (OHARA) class | Current spectral surrogate only; `WN` dispersion dates from 2025 |
| E8 | 1.749500 / 35.0 | 750350 LAFN7/LAF7 class | SCHOTT LAFN7 spectral surrogate; vendor unresolved |
| E9 | 1.622992 / 58.2 | S-BSM15 (OHARA) class | Current OHARA line-index surrogate |
| E10 | 1.762001 / 40.1 | 762401 lanthanum-flint class | OHARA S-LAM55 spectral surrogate |
| E11, E14 | 1.603112 / 60.6 | 603607 barium-crown class | OHARA S-BSM14 spectral surrogate |
| E13 | 1.804398 / 39.6 | 804396 LASF class | HIKARI J-LASF013 spectral surrogate |
| E15 | 1.696797 / 55.5 | 697555 lanthanum-crown class | OHARA S-LAL14 spectral surrogate |
| E16 | 1.592701 / 35.3 | 593353 flint class | OHARA S-FTM16 spectral surrogate |

The low-dispersion correlation is particularly significant. Canon states that the production EF70-200mm f/4L USM uses one synthetic crystalline fluorite element and two UD elements to suppress secondary spectrum. The patent example supplies exactly one very-low-index/high-Abbe element at E3 and two identical high-Abbe glass elements at E4 and E12. The numerical correspondence supports the production match, but the patent does not label these materials as “fluorite” or “UD.”

The data file carries `nC`, `nF`, `ng`, and `dPgF` directly on all elements so the spectral model does not fall back to Abbe-only dispersion where a current catalog surrogate is available. These fields are catalog-derived. In particular, E3 uses Canon Optron CaF2 line indices, E4/E12 use current S-FPL51 line indices, and E7 uses current S-TIH53WN line indices. The E7 surrogate must not be interpreted historically because OHARA announced S-TIH53WN's modified dispersion in 2025.

No apochromatic classification is assigned. The available line data is sufficient for modeled chromatic tracing, but much of it is surrogate data attached to class-level glass identifications rather than confirmed historical melts.

## Focus Mechanism

The patent's focus mechanism is explicit even though its close-focus spacings are not. L1 is divided into fixed L1a and moving L1b; focusing from infinity to a close object moves L1b toward the object (¶0025, ¶0029). In the final data, L1b is the rigid E2–E4 subgroup spanning R3–R8. Only its two adjacent air gaps change with focus: D2 decreases and D8 increases by the same amount. E1, L2, L3, the stop, and L4 remain at their current zoom positions during the focus reconstruction.

The focus state is therefore `CONSTRAINED_RECONSTRUCTION`, not a published close-focus table. Canon's 1.2 m production minimum focusing distance is used as the external constraint, normalized from the fixed modeled image plane. The corresponding object-to-R1 distance is 987.169144 mm. Solving the paraxial conjugate condition at each of the three zoom control points gives:

| Zoom control | L1b objectward shift | D2 infinity → close | D8 infinity → close | Computed `|m|` at close |
|---:|---:|---:|---:|---:|
| 71.92 mm | 13.542577 mm | 14.820000 → 1.277423 mm | 1.900000 → 15.442577 mm | 0.079485× |
| 118.29 mm | 13.534711 mm | 14.820000 → 1.285289 mm | 25.600000 → 39.134711 mm | 0.130729× |
| 194.57 mm | 13.532270 mm | 14.820000 → 1.287730 mm | 41.250000 → 54.782270 mm | 0.215047× |

The nearly constant ~13.53–13.54 mm travel follows directly from the rigid-subgroup constraint and the fixed 1.2 m object-to-image normalization. The tele result of 0.2150× is close to Canon's rounded 0.21× specification. That agreement is a cross-check of the reconstruction, not evidence that the patent published these exact close-focus spacings.

Canon describes the production lens as using ring USM and an inner-focusing system. The drive technology is a production mechanical feature; it is not encoded as an optical movement beyond the L1b translation specified in the data.

## Chromatic Correction Strategy

The patent frames control of chromatic-aberration variation as one of the design problems of a high-ratio four-group zoom with internal focusing (¶0014, ¶0028, ¶0035, ¶0045). It does not, however, assign material names to individual numerical elements. The production lens's special-material statement therefore has to remain separate from the prescription data.

The production correlation places the very-high-Abbe E3 in the moving L1b focus subgroup and one of the two UD-class `1.496999 / 81.5` elements, E4, immediately behind it. A second UD-class element, E12, appears in the fixed relay as the positive member of the negative D3 cemented pair. This distributes low-dispersion positive power between the front focusing assembly and the rear relay rather than concentrating both UD-class elements in one air-spaced group.

Current catalog-surrogate line data makes that dispersion contrast explicit in the model. E3's Canon Optron CaF2 surrogate carries `dPgF = +0.057086661`, while the S-FPL51 surrogates at E4 and E12 carry `dPgF = +0.031938129`. Those values belong to the surrogate catalogs, not to patent-published melts. They support chromatic ray-trace behavior in LensVisualizer but do not establish the exact partial-dispersion characteristics of the historical production glasses.

Canon's statement that the production fluorite and UD elements suppress secondary spectrum is a manufacturer product claim. The present analysis does not elevate that statement into an APO classification and does not assume that every class-level catalog surrogate reproduces the original Canon material dispersion exactly.

## Conditional Expressions

The patent defines `Fm = sqrt(Fw × Ft)` and gives five conditions governing the power balance of the first group, its focus subdivision, the variator, the compensator, and the relay (¶0031–¶0049). Independent computation from the final data gives `Fm = 118.294017 mm` and reproduces the printed Example 1 values to the patent's three-decimal precision.

| Condition | Patent range | Computed | Patent Table 1 | Residual |
|---|---:|---:|---:|---:|
| `F1 / Fm` | `0.6 < ... < 1.2` | 0.923662 | 0.924 | -0.000338 |
| `F1b / F1a` | `0.16 < ... < 0.4` | 0.264605 | 0.265 | -0.000395 |
| `|F2 / Fm|` | `0.18 < ... < 0.35` | 0.265330 | 0.265 | +0.000330 |
| `F3 / Fm` | `0.6 < ... < 1.2` | 0.905488 | 0.906 | -0.000512 |
| `F4 / Fm` | `0.45 < ... < 1` | 0.737433 | 0.738 | -0.000567 |

All five conditions lie inside their stated bounds. The results also explain the design's motion allocation: L2 has enough negative power to provide zoom action without excessive travel, L3 has enough positive power to compensate image-plane motion without excessive compensator travel, and L4 retains enough positive power to form the final image without an excessively long back-focus requirement.

## Verification Summary

The final data was independently recomputed with sequential height/reduced-angle tracing and a separately composed ABCD matrix. The two methods agree to within 2×10⁻¹² in the matrix coefficients, and the ABCD determinants remain unity to the same tolerance.

| Patent zoom control | Computed EFL | EFL residual | Best paraxial BFD from R30 | Fixed-stop f-number |
|---:|---:|---:|---:|---:|
| 71.92 mm | 71.901018 mm | -0.018982 mm | 53.134605 mm | 4.100151 |
| 118.29 mm | 118.264443 mm | -0.025557 mm | 53.131905 mm | 4.100042 |
| 194.57 mm | 194.540481 mm | -0.029519 mm | 53.126058 mm | 4.099807 |

Example 1 does not publish D30/BFD. The three computed infinity BFDs span only 0.008547 mm, so the model uses their mean, 53.130855839 mm from R30, as one fixed image plane. This is a modeling inference intended to absorb source rounding, not a published image-space distance or a moving image plane.

The aperture-stop position is published, but its diameter is not. The inferred fixed stop semi-diameter of 14.258451 mm reproduces the patent's f/4.1 at the three zoom states to within 0.0003 in f-number. The entrance-pupil semi-diameters at the authored infinity states are 8.768094, 14.422345, and 23.725566 mm.

The surface-by-surface Petzval sum, using `φ/(n·n′)` at each refracting surface, is +0.001149444422 mm⁻¹, corresponding to a reciprocal magnitude of 869.986 mm. This is a computed first-order quantity, not a patent-published field-curvature radius.

Semi-diameters are not published in Numerical Example 1. The data values are inferred from marginal/chief-ray envelopes, the patent and Canon optical sections, and geometry constraints. A 600 dpi audit of Figure 1 on local PDF page 8 enlarged the final three elements to common rims of 15.3, 15.8, and 16.4 mm respectively. Their measured optical rims were approximately 15.3, 15.9, and 16.4 mm. Surface and image-circle checks pass with the default 0.90-gap policy. The tightly spaced front elements retain their geometry-constrained apertures; these inferred values are not production mechanical dimensions. All 16 elements resolve to qualified catalog Sellmeier curves without identifying historical suppliers.

The selected example contains no conic or polynomial asphere, so no asphere convention or coefficient transformation applies. No scaling is applied, and there is no sensor-cover or filter plate whose optical effect needs to be folded into the rear spacing.

## Sources and References

- Canon Camera Museum, “EF70-200mm f/4L USM,” production specifications, release timing, construction count, fluorite/UD statement, minimum focusing distance, magnification, and inner-focus/ring-USM description: <https://global.canon/en/c-museum/product/ef356.html>
- Canon U.S.A., “EF 70-200mm f/4L USM” support specifications, confirming 70–200 mm f/4, 16 elements in 13 groups, inner focusing with USM, and 1.2 m closest focus: <https://www.usa.canon.com/support/p/ef-70-200mm-f-4l-usm>
- JP2000284174A, “ズームレンズ,” Canon Inc., Numerical Example 1, patent prescription and mechanism: <https://patents.google.com/patent/JP2000284174A/ja>
- US6429978B2, Canon Inc., inventor/assignment record identifying the same Canon optical inventor `西尾 彰宏` as Akihiro Nishio; used only to normalize the Latin-script inventor name: <https://patents.google.com/patent/US6429978B2/en>
- OHARA INC., current optical-glass catalog, used for the S-FSL5, S-TIH18, S-FPL51, S-BSL7, S-BSM15, S-BSM14, S-LAL14, S-FTM16, and other current line-index surrogates: <https://www.ohara-inc.co.jp/en/product/01000/>
- OHARA INC., “Introducing S-TIH53WN, S-LAH66N, and S-LAL18N,” 2025-01-30, documenting that S-TIH53WN is a modified-dispersion glass introduced long after the selected patent: <https://www.ohara-inc.co.jp/en/news/2025/0127/14998/>
- HIKARI, J-LASF catalog, used for current 804466/J-LASF015 and 804396/J-LASF013 class surrogates: <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lasf/>
- SCHOTT, LAFN7 optical-glass datasheet, used for the E8 current line-index surrogate: <https://media.schott.com/api/public/content/c842d31345bc40ae86b67732d6eb4eea>
- Canon Optron, “Fluorite CaF2,” current optical-crystal refractive-index and dispersion data used as the E3 spectral surrogate: <https://optron.canon/ja/img/fluorite/pamphlet_caf2_en.pdf>
