## Patent Reference and Design Identification

**Patent:** JP 1963-011590 B\
**Application Number:** 特願 昭33-9941\
**Filed:** 1958-04-11\
**Published:** 1963-07-08\
**Inventor:** Tadayoshi Nito (仁藤 忠芳)\
**Applicant:** Minolta Camera Co., Ltd. (ミノルタカメラ株式会社)\
**Title:** 大口径比望遠写真対物 — *Large-aperture-ratio telephoto photographic objective* (working translation)\
**Embodiment analyzed:** Example 2

The implemented prescription is Example 2 of JP 1963-011590 B. The patent prints a focal length of 100 mm, an aperture ratio
of 1:2, and a 24° included field angle, and it gives a six-element prescription arranged in five air-separated groups.
Those source values are transcribed from the Example 2 table spanning patent pages 1–2. The optical section in Fig. 1 on
page 3 confirms the five-group layout and places the diaphragm in the long air space between the third and fourth groups.

The production-lens correlation is convergent rather than manufacturer-confirmed patent attribution. Minolta's surviving
*The Minolta SR System* brochure lists an Auto Tele Rokkor / MC Tele Rokkor 100mm f/2 with six elements in five groups and
a 24° angle of view. Those three product specifications independently coincide with Example 2's 100 mm, 1:2, 6/5, and 24°
source data. The patent also describes the objective as intended for a Leica-format small camera. No primary Minolta source
located in the dossier explicitly states that JP 1963-011590 B Example 2 is the production prescription, so the identification
should be read as a strong optical and product-specification match, not as a documented factory attribution.

The data file therefore separates product metadata from exact design quantities. The marketed focal length and aperture
are 100 mm and f/2, while the recomputed paraxial effective focal length of the implemented infinity model is
99.999986566 mm. The mount is recorded as Minolta SR and the image format as 135 full-frame on the basis of the Minolta SR
system context, the patent's Leica-format statement, and the supplied LensVisualizer taxonomy reference.

## Optical Architecture

The patent presents the design as a telephoto photographic objective. Under the LensVisualizer project's explicit
classification rule, however, the implemented infinity model is better described by its verified power architecture than
by that historical label. The five functional groups have power signs **positive, positive, negative, negative, positive**.
The first vertex to the modeled infinity image plane is 102.353983541 mm for an EFL of 99.999986566 mm, giving
`TL/EFL = 1.023539973`. Because that ratio is not below 1, the model is not independently classified as telephoto under the
project criterion, despite the patent title and product nomenclature.

The front half consists of a positive meniscus followed by a cemented two-element positive group. The cemented group is
unusual in that its front element is negative when evaluated as a standalone thick lens in air, while the rear element is
strongly positive; together, at their published cemented interface, the group has positive net paraxial power. A third
negative meniscus then precedes the diaphragm. Behind the stop are a second negative meniscus and a final positive
biconvex element. This yields the source-described five-group sequence without inserting any synthetic cement layer or
inactive optical plane.

The patent does not dimension the diaphragm coordinate. The model therefore splits the published `d7 = 24.08 mm` air space
into 8.11 mm from surface 7 to `STO` and 15.97 mm from `STO` to surface 8. That split comes from a measured reading of
Fig. 1 rather than from a tabulated patent dimension. The physical stop semi-diameter, 12.358522996 mm, is likewise a model
quantity: it is calibrated so the entrance-pupil diameter reproduces the published f/2 target. Agreement with f/2 is
therefore a calibration result, not independent evidence for the manufactured iris diameter.

No numerical image-plane spacing follows the final patent surface. The model uses the independently recomputed infinity
back focal distance of 37.795983541 mm after surface 11. This is a derived image-plane placement and not a value printed in
the patent.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.67975`, `νd = 55.7`. Glass: `680557 — supplier unresolved`. Standalone `f = +114.765 mm`.

L1 forms the first positive group. Its two positive radii produce a positive meniscus. The element supplies the first
converging action in the five-group sequence and feeds a very small 0.2 mm air gap before the cemented second group.

The six-digit glass label records only the patent's d-line coordinate pair. It is not a claim that a specific catalog
supplier or melt has been identified. The same source coordinate reappears in L3.

### L2 — Negative Meniscus, Front Element of Cemented Group D1

`nd = 1.68287`, `νd = 31.5`. Glass: `683315 — supplier unresolved`. Standalone `f = −97.184 mm`.

L2 is the negative front member of the cemented second group. Its standalone negative focal length describes the element
only as a hypothetical thick lens in air; it is not the power of the cemented assembly in the actual prescription. The
published junction at surface 4 changes directly into L3 glass with no air layer.

The patent gives special design conditions at this cemented group. The Abbe-number difference across the pair is 24.2,
exceeding the stated minimum of 20, and the cemented-surface radius is 23.624 mm, or 0.23624 times the 100 mm source focal
length, below the patent's 0.3 limit. These conditions identify the junction as a deliberately constrained part of the
source design; they do not by themselves isolate a particular Seidel contribution.

### L3 — Positive Meniscus, Rear Element of Cemented Group D1

`nd = 1.67975`, `νd = 55.7`. Glass: `680557 — supplier unresolved`. Standalone `f = +46.476 mm`.

L3 is the stronger positive member of the cemented pair. In the assembled cemented group it operates together with L2
and the shared interface. The complete second group has verified net power
+0.0102646 mm⁻¹, corresponding to a group focal length of +97.422 mm.

L3 uses the same d-line coordinate as L1. The recurrence is source data, not evidence that both elements came from a known
modern catalog glass.

### L4 — Negative Meniscus Before the Stop

`nd = 1.66797`, `νd = 35.8`. Glass: `668358 — supplier unresolved`. Standalone `f = −41.998 mm`.

L4 forms the third functional group and is the strongest negative standalone element in the model. It terminates at
surface 7, after which the patent's long `d7` air space contains the diaphragm.

Because the stop coordinate is not tabulated, the exact relationship between L4 and the physical iris is partly a modeling
inference. The implemented placement preserves the entire published 24.08 mm separation between surfaces 7 and 8.

### L5 — Negative Meniscus After the Stop

`nd = 1.57526`, `νd = 39.1`. Glass: `575391 — supplier unresolved`. Standalone `f = −136.819 mm`.

L5 is the fourth functional group and the second negative meniscus in succession. It lies immediately behind the modeled
stop and has relatively weak standalone negative power. Its position places it between the aperture plane and the final
positive group rather than combining it into a cemented rear assembly.

The patent constrains the index relationship between this group and L6: the d-line index difference is 0.12916, exceeding
the specified minimum of 0.07. The source thus explicitly treats the rear-group index contrast as a design condition.

### L6 — Biconvex Positive Rear Group

`nd = 1.70442`, `νd = 40.8`. Glass: `704408 — supplier unresolved`. Standalone `f = +57.076 mm`.

L6 is the final positive group and the only biconvex element in the prescription. The patent requires this rear positive
element to have the highest refractive index in the system; the
published value 1.70442 satisfies that condition. The patent also requires every positive standalone element to have
`nd >= 1.64`; L1, L3, and L6 all satisfy that requirement, with the lowest of the three at 1.67975.

The final surface is followed in the data file by the modeled infinity BFD rather than a patent-published spacing. No rear
cover glass, filter, or dummy plane is added.

## Glass Identification and Selection

The patent does not name a glass manufacturer. It supplies five distinct d-line `nd/νd` coordinates, with L1 and L3 sharing
one coordinate. The data file therefore preserves coordinate-derived six-digit labels and leaves the supplier unresolved.
This avoids attaching modern catalog Sellmeier data to a vintage prescription without evidence of supplier or melt identity.

| Elements | Glass label | nd | νd | Status |
|---|---|---:|---:|---|
| L1, L3 | 680557 — supplier unresolved | 1.67975 | 55.7 | Source coordinate only |
| L2 | 683315 — supplier unresolved | 1.68287 | 31.5 | Source coordinate only |
| L4 | 668358 — supplier unresolved | 1.66797 | 35.8 | Source coordinate only |
| L5 | 575391 — supplier unresolved | 1.57526 | 39.1 | Source coordinate only |
| L6 | 704408 — supplier unresolved | 1.70442 | 40.8 | Source coordinate only |

The dossier audited these coordinates against authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog
sources. Several modern glasses are coordinate-near, but none was promoted to a production identity because the residuals
and historical provenance do not establish a specific supplier or melt. In particular, numerical agreement at a different
spectral reference line is not treated as a valid d-line match.

No element carries source-published `nC`, `nF`, `ng`, or `dPgF`, and no validated catalog identity supplies those values.
Accordingly, the analysis makes no apochromatic or anomalous-partial-dispersion performance claim. The available chromatic
information is limited to the patent's d-line index and Abbe number pairs and to the explicit index/dispersion conditions
stated in the patent.

## Focus Mechanism

The optical model is **NO_INTERNAL_RECONSTRUCTION**. JP 1963-011590 B publishes no finite-distance spacing table, focus-group
movement law, or second prescription state from which an internal focus mechanism can be solved. The data file therefore
contains no `var` entries and represents the published Example 2 prescription only at infinity.

Minolta's brochure gives a production minimum focus of 4 ft, stored as 1.2192 m in the data metadata. That product
specification is not converted into a unit-focus, inner-focus, or floating-group model. A single minimum-focus distance is
insufficient to determine how the individual optical gaps change, so the production mechanical focus type remains outside
the implemented optical reconstruction.

## Conditional Expressions

The selected example satisfies all six source conditions tested from the patent text and prescription:

1. The Abbe-number difference across the cemented second group is 24.2, satisfying the requirement `>= 20`.
2. The cemented-interface radius ratio is `|r4|/F = 0.23624`, satisfying the requirement `< 0.3`.
3. The d-line index difference between the fifth and fourth groups is 0.12916, satisfying the requirement `>= 0.07`.
4. L6 has the highest d-line refractive index in the prescription, 1.70442.
5. The positive standalone elements L1, L3, and L6 all have `nd >= 1.64`; the minimum is 1.67975.
6. The diaphragm is between the third and fourth functional groups, within the published surface-7-to-surface-8 air gap.

These checks confirm that the transcribed Example 2 satisfies the patent's stated numerical relationships. They do not
prove that the production lens used the exact same melt data or mechanical diaphragm coordinate.

## Verification Summary

The final data revision was recomputed directly from the parsed `.data.ts` payload. The reduced-angle paraxial trace gives
an EFL of 99.999986566 mm and a BFD of 37.795983541 mm from surface 11. A separately coded `y, θ` ABCD implementation
agrees with the reduced-angle matrix to approximately 1.4e-14 in the largest matrix element, and a directly propagated
unit paraxial ray agrees with the matrix first column.

The surface-by-surface Petzval calculation, using `φ/(n·n′)` at each of the eleven refracting interfaces, sums to
+0.001609834580 mm⁻¹. This value is reported as a verified model quantity only; no qualitative field-flatness claim is
inferred from it here.

The physical stop semi-diameter is a calibrated model value. With the Fig. 1-derived stop position, the paraxial entrance
pupil diameter is 49.999993283 mm and the modeled wide-open f-number is 2.000000000. Because the stop size was solved from
the published f/2 target, this match cannot be used as independent confirmation of the unpublished iris diameter.

The patent provides no semi-diameters. The authored apertures are therefore modeled clear apertures derived from exact
spherical Snell tracing and then given modest positive clearance. The verification set contains 43 requested finite rays,
including the full on-axis f/2 pupil, intermediate fields, the default 7.2° off-axis bundles, and representative 12°
edge-field rays. All requested construction samples reach the image plane and remain within the authored apertures.
The modeled 12° field does not pass the entire pupil, so the result is correctly characterized as finite-sample containment
with edge-field vignetting rather than as proof of an unvignetted 24° field.

Portable geometry checks also pass for positive element thickness, current shared-band gap clearance, and actual spherical
rim slope. Surface 4 is the tightest modeled rim-slope case at 63.8174°, just below the current 64.2° policy threshold.
This remains subject to the real LensVisualizer validator and production render diagnostics at integration.

The patent's printed Seidel table contains a separate source ambiguity that does not alter the prescription. On patent
page 2, the `II` entries for rows K=2 and K=3 visibly lack signs; reading both as positive does not reproduce the printed
column sum, while interpreting both as negative reproduces it within the rounding expected from five-decimal rows. The raw
cells remain preserved as printed, and the sign resolution is treated only as a checksum-based source hypothesis. The
Seidel table is not used to force the paraxial prescription to match.

No aspherical surfaces are present, no dimensional scaling is applied, and no sensor cover glass, filter, flare-cutter
plane, or synthetic cement layer is included. Real LensVisualizer `LensDataInput` type checking, `buildLens()` /
`validateLensData()`, exact project tracing, runtime glass resolution, Prettier execution, live taxonomy validation, and
production render diagnostics remain integration-stage checks rather than claimed results of this portable dossier.

## Sources and References

1. Japan Patent Office. **JP 1963-011590 B**, `大口径比望遠写真対物`. Example 2 prescription and conditions on pp. 1–2;
   optical section and diaphragm placement in Fig. 1 on page 3; Seidel coefficient table on p. 2. Filed 1958-04-11;
   published 1963-07-08. Supplied original patent PDF in this dossier.
2. Minolta Camera Co., Ltd. **The Minolta SR System**. Manufacturer brochure; the archived scan used by the dossier lists
   the Auto Tele Rokkor / MC Tele Rokkor 100mm f/2, 6 elements in 5 groups, 24° angle of view, and 4 ft minimum focus.
   Archival access: https://www.pacificrimcamera.com/rl/01951/01951.pdf
3. OHARA INC. Optical Glass catalog/downloads: https://www.ohara-inc.co.jp/en/product/catalog/
4. HOYA GROUP Optics Division. Optical Glass Data Download: https://www.hoya-opticalworld.com/english/datadownload/index.html
5. SCHOTT. Optical glass downloads: https://www.schott.com/en-us/products/optical-glass-p1000267
6. HIKARI GLASS CO., LTD. **OPTICAL GLASS** catalog: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
7. CDGM GLASS CO., LTD. Colourless Optical Glass data: https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
8. SUMITA OPTICAL GLASS, Inc. Optical glass downloads: https://www.sumita-opt.co.jp/en/download/
