## Patent Reference and Design Identification

**Patent:** CN 211826699 U\
**Application Number:** 202020728206.7\
**Filed:** 2020-05-07\
**Granted / Published:** 2020-10-30\
**Inventors:** 刘瑞军; 陈宝锋\
**Applicant / Assignee:** 深圳市雷影光电科技有限公司\
**Title:** 内合焦式成像镜头 (*Internal-Focusing Imaging Lens*)\
**Embodiment analyzed:** Example 1 (实施例1)

The prescription is the fixed project correlation for the **VILTROX AF 33mm f/1.4 E**. The patent is the numerical
source; the production identity and marketed specifications are taken separately from Viltrox's current Sony E product
page. The correlation is not presented as a manufacturer-confirmed patent attribution.

Several independent characteristics converge on the selected Example 1:

1. Viltrox specifies the production Sony E lens as an APS-C 33 mm f/1.4 prime with 10 elements in 9 groups, a 45.7°
   viewing angle, internal focusing, and a 0.4 m to infinity focus range.
2. Example 1 contains 10 physical lens elements, gives a published infinity focal length of 33.21 mm, uses f/1.4 in the
   aberration plots, and states a 22.8° half-field, equivalent to 45.6° full field.
3. The patent publishes a 0.4 m nearest-focus state and makes the third functional group, G3, a single negative lens
   that moves toward the image during focusing while G1, G2, and G4 remain fixed relative to the image plane (¶0057,
   ¶0067).
4. The layout in Fig. 1 and the numerical prescription agree on the same four functional groups and on a single cemented
   pair, L21+L22. Viltrox's official construction graphic is also topologically consistent with the patent figure at the
   level visible in the schematic: a negative front element, a large positive second element, a compact central cluster,
   a slim negative internal-focus element, and a two-element rear group. This is supporting correlation evidence, not a
   surface-by-surface manufacturer confirmation.

The production page additionally describes one ED element and one high-refractive-index element. Those marketing labels
are not used to assign a specific patent glass because the patent supplies only two-decimal `Nd`/`Vd` coordinates and no
production glass map.

## Optical Architecture

The data model contains **10 elements in 9 air-separated groups**, matching the production construction count. Within
that physical construction, the patent organizes the lens into **four functional power groups**, G1 through G4, with a
positive / positive / negative / positive power sequence. The distinction matters: `groupCount: 9` records the
air-separated physical grouping used by the catalog, while G1-G4 are the patent's functional optical groups.

Independent first-order calculation from the final data gives the following functional-group focal lengths:

| Functional group | Elements | Computed focal length | Net sign |
|---|---|---:|---|
| G1 | L11-L14 | +55.070 mm | Positive |
| G2 | L21-L23 | +41.589 mm | Positive |
| G3 | L31 | -49.429 mm | Negative |
| G4 | L41-L42 | +48.576 mm | Positive |

G1 is a front positive group built from a negative leading meniscus followed by a net-positive L12-L14 subassembly. The
patent explains that distributing the strong positive power among L12-L14 helps control peripheral spherical-aberration
behavior, while L11 counterbalances the front group and limits the sensitivity/length trade described by conditions (1)
and (2) (¶0058-¶0062).

The aperture stop lies between G1 and G2. The source table contains an explicit labeling error: it prints `STP` on the
curved L21→L22 cemented interface, but the claims, prose, Fig. 1, surface media, and condition (3) place the physical
stop at the preceding plane air surface. The data therefore labels source row 9 as the sole `STO` and retains the curved
cemented junction as surface `11`. This is a source correction, not an OCR substitution.

G2 combines the cemented negative/positive L21+L22 pair with the strong positive L23. The patent attributes to G2 a
ray-bundle-compressing role that helps control rear-group diameter and overall length (¶0063-¶0066). G3 is the entire
focus group: a single negative meniscus. G4 is a net-positive rear group formed by positive L41 and negative L42; the
patent uses its axial thickness as a design constraint governing exit-pupil placement and the trade between image-height
stability and spherical/astigmatic correction (¶0071-¶0074).

The source GL plane-parallel filter behind L42 is not present in the LensVisualizer prescription. Under the current data
rules, its optical effect is represented by an air-equivalent final spacing from L42 to the image plane of **19.325789
mm**, replacing the source sequence of 17.01 mm air + 2.00 mm at `n = 1.52` + 1.00 mm air. The source physical rear
distance is 20.01 mm; the data-model distance is deliberately shorter because it is an air-equivalent optical
normalization.

The patent publishes no clear semi-diameters and no stop diameter. The stop semi-diameter and all element semi-diameters
in the data file are therefore modeling inferences, not source measurements. The stop is calibrated to the rounded-index
prescription so the modeled wide-open f-number is exactly f/1.4; the remaining clear apertures were chosen from
exact-ray envelopes, the patent section drawing, and the current geometry limits. No uniform scale is applied
(`s = 1.0`). The patent states that all ten lens elements are spherical, so no aspheric coefficient transformation
applies.

The computed project track is much longer than the model EFL (`TL/EFL = 2.527`), and the air-equivalent rear spacing is
shorter than the EFL (`BFD/EFL = 0.573`). Under the project definitions, the design is therefore neither telephoto nor
retrofocus.

## Element-by-Element Analysis

### L11 — Negative Meniscus

`nd = 1.71, νd = 29.51. Glass: Unmatched (717295-class dense flint; nd=1.71, νd=29.51). f = -42.252 mm.`

L11 is the negative front element of positive G1. Its isolated power is substantial, but its function must be understood
inside the complete positive front group rather than as a stand-alone negative group. Condition (1) directly constrains
its focal length relative to the complete lens. The patent states that excessive negative power would increase ray
height into the rear part of G1 and increase decenter sensitivity, whereas insufficient negative power would lengthen
the lens (¶0059, ¶0062).

### L12 — Biconvex Positive

`nd = 1.73, νd = 54.67. Glass: 729547 — high-index crown class (vendor unproven). f = +34.309 mm.`

L12 begins the L12-L14 positive subassembly of G1. Together with L13 and L14, it produces a computed subassembly focal
length of **+28.459 mm**. The patent treats this three-element combination as a single design variable in condition (2):
if its net focal length becomes too short, the positive power and surface curvatures become excessive, complicating
aberration correction and edge-thickness control (¶0060-¶0062).

### L13 — Positive Meniscus

`nd = 1.81, νd = 33.29. Glass: Unmatched (806333-class high-index flint; nd=1.81, νd=33.29). f = +64.889 mm.`

L13 contributes positive power inside the same G1 subassembly without carrying the full refractive burden of L12. The
patent does not assign L13 an independent aberration term; its role is best read as part of the distributed
positive-power strategy for L12-L14. The combination permits G1 to remain strongly positive while avoiding concentration
of the required power in one highly curved element.

### L14 — Negative Meniscus

`nd = 1.51, νd = 81.59. Glass: Unmatched (low-dispersion crown; nd=1.51, νd=81.59). f = -63.310 mm.`

L14 is a negative, very-high-Abbe member at the rear of G1. Its negative isolated power does not make the L12-L14
subassembly negative; the three-element combination remains strongly positive. The patent explicitly names L14 in its
abnormal-dispersion statement (¶0023, ¶0075), but the numerical example provides no `nC`, `nF`, `ng`, `PgF`, or `dPgF`.
The data therefore records only its `nd`/`νd` position and does not encode an anomalous-dispersion property.

### L21 + L22 — Cemented Negative/Positive Pair

**L21:** `nd = 1.85, νd = 23.79. Glass: Unmatched (847238-class dense flint; nd=1.85, νd=23.79). f = -12.693 mm.`\
**L22:** `nd = 1.73, νd = 54.67. Glass: 729547 — high-index crown class (vendor unproven). f = +18.583 mm.`

L21 and L22 form the design's only cemented pair. Surface `11` is their common curved interface; it is not the aperture
stop despite the erroneous `STP` text printed in the patent table. Treating the two elements as an isolated cemented
unit in air gives a net focal length of **-82.775 mm**. That negative cemented-pair power must not be confused with the
in-situ power of G2: after L23 is included, G2 has a computed focal length of **+41.589 mm**.

The large dispersion contrast between the L21 and L22 coordinates is consistent with a cemented chromatic-correction
pairing, but no vendor-specific glass identity or partial-dispersion behavior is required to make that statement. The
patent's broader description is that the strong positive G2 controls the ray bundle presented to the following groups
(¶0063-¶0066).

### L23 — Biconvex Positive

`nd = 1.92, νd = 20.88. Glass: 923209 — high-index flint class (vendor unproven). f = +35.161 mm.`

L23 supplies the positive power that turns the L21+L22 negative cemented pair into a net-positive G2. Its high index
allows substantial refractive power without requiring the element alone to carry the extreme curvature that a lower
index material would demand. The patent also names L23 in its abnormal-dispersion statement (¶0023, ¶0075), but the data
contains no line indices or `dPgF`; no anomalous-partial-dispersion behavior is therefore claimed from the model.

### L31 — Negative Meniscus, Internal-Focus Element

`nd = 1.57, νd = 42.81. Glass: 567428 — optical-glass class (vendor unproven). f = -49.429 mm.`

L31 is the complete G3 focus group and is the design's most distinctive mechanical simplification: focus is performed by
moving one negative lens rather than translating a multi-element assembly. The patent's condition (4) constrains G3
power against the ray-height term `h4` at the front of G4 for the maximum field and principal wavelength. The source
does not specify the pupil coordinate of that ray. It states that making G3 too weak tends to increase lens length,
while making it too strong increases ray height into the rear group and sensitivity to decenter and tilt (¶0067-¶0070).

### L41 — Biconvex Positive

`nd = 1.74, νd = 52.67. Glass: 741527 — high-index crown class (vendor unproven). f = +21.828 mm.`

L41 is the strong positive member of G4. It receives the beam after the negative focus element and begins the final
relay to the image plane. Its positive power dominates the rear pair sufficiently that L41+L42 remains net positive even
after L42's negative contribution.

### L42 — Negative Meniscus

`nd = 1.85, νd = 23.79. Glass: Unmatched (847238-class dense flint; nd=1.85, νd=23.79). f = -36.225 mm.`

L42 completes G4 and moderates the strong positive power of L41. The rear-group combination has a computed focal length
of **+48.576 mm**. Patent condition (5) applies to the complete axial thickness from the front of L41 to the rear of
L42, not to either element in isolation. The patent links that spacing to exit-pupil position, image-height variation,
and a trade between those benefits and increasing spherical aberration/astigmatism when the rear group is made too thick
(¶0071-¶0074).

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. Catalog curves below are coordinate-compatible spectral proxies, not identifications of the production supplier or melt. The authored patent indices remain unchanged; no catalog-derived `nC`, `nF`, `ng`, or `dPgF` values are stored as if they were measured source data. The runtime compatibility guard checks the evaluated catalog index within ±0.003 and Abbe number within ±2.

| Element | Patent nd / νd | Runtime catalog curve |
| --- | --- | --- |
| L11 | 1.71 / 29.51 | Unmatched; patent Abbe fallback |
| L12 | 1.73 / 54.67 | TAC8 |
| L13 | 1.81 / 33.29 | Unmatched; patent Abbe fallback |
| L14 | 1.51 / 81.59 | Unmatched; patent Abbe fallback |
| L21 | 1.85 / 23.79 | Unmatched; patent Abbe fallback |
| L22 | 1.73 / 54.67 | TAC8 |
| L23 | 1.92 / 20.88 | E-FDS1 |
| L31 | 1.57 / 42.81 | S-TIL26 |
| L41 | 1.74 / 52.67 | S-LAL61 |
| L42 | 1.85 / 23.79 | Unmatched; patent Abbe fallback |

5/10 elements resolve to catalog dispersion. Explicitly unmatched elements retain the patent-derived Abbe fallback. No APO or patent-backed anomalous-partial-dispersion claim follows from the proxy assignments.

## Focus Mechanism

The focus model is **PUBLISHED**, not reconstructed. G1, G2, and G4 remain fixed relative to the image plane; the single
negative L31/G3 group moves toward the image as focus changes from infinity to the published 0.4 m state (¶0057).

| Published spacing | Infinity | 0.4 m state | Change |
|---|---:|---:|---:|
| D1, after L23 / before L31 | 1.00 mm | 4.94 mm | +3.94 mm |
| D2, after L31 / before L41 | 6.24 mm | 2.29 mm | -3.95 mm |

The D1 change places the L31 vertex **3.94 mm toward the image**. Ideally the two adjacent gaps would conserve their sum
for a rigidly translating single element, but the published totals are 7.24 mm and 7.23 mm. The data retains this 0.01
mm difference as source rounding rather than silently altering either endpoint.

The patent labels the near endpoint simply as 0.4 m and does not define the mechanical reference plane for that
distance. Viltrox likewise markets a 0.4 m minimum focus distance. The analysis therefore treats 0.4 m as the published
focus-state label and does not claim that the patent's distance datum has been uniquely recovered.

Viltrox's product specification identifies the production drive as **STM + lead screw** and the mechanism as internal
focus. The patent establishes the optical movement but does not specify that production motor architecture, so the drive
description remains manufacturer metadata rather than a patent fact.

## Chromatic Correction Strategy

The numerical design distributes refractive index and dispersion over a wide range, from the L14 coordinate `nd = 1.51,
νd = 81.59` to the L23 coordinate `nd = 1.92, νd = 20.88`. The most explicit chromatic pairing in the model is
the cemented L21+L22 pair, whose neighboring elements combine a high-index/low-Abbe coordinate with a lower-index,
higher-Abbe coordinate. L14 provides another very high-Abbe coordinate in the front group.

The patent states that its glass choices are intended to improve chromatic correction (¶0025), but its
abnormal-dispersion language is not numerically supported by line-index or partial-dispersion tables. The production
product page lists one ED element and one high-refractive-index element, but it does not map those marketing categories
onto the patent's L11-L42 identifiers. No one-to-one ED assignment, anomalous-partial-dispersion claim, or apochromatic
claim is made here.

## Conditional Expressions

The patent gives five explicit design conditions. The source Table 9 values are preserved below, alongside an
independent check from the final rounded-index data. Conditions (1), (2), and (5) use the final model's recomputed EFL;
condition (3) uses the source-normalized physical stop-to-image distance because the data file omits GL and stores an
air-equivalent rear spacing. For condition (4), the patent defines `h4` as the ray height at the L41 object-side surface
for a ray at the principal wavelength entering from the maximum field, but it does not publish that ray's pupil
coordinate. The independent value below is therefore a stop-centered 22.8° d-line chief-ray proxy, not a claimed
reconstruction of the patent's `h4`.

| Condition | Patent bound | Source Table 9 | Independent check / proxy | Result |
|---|---:|---:|---:|---|
| (1) `F1a/F` | -1.3 to -1.2 | -1.24 | -1.25175 | Pass |
| (2) `F1b/F` | 0.8 to 0.9 | 0.84 | 0.84312 | Pass |
| (3) `Ds/F2` | 1.2 to 1.3 | 1.29 | 1.27439 | Pass |
| (4) `F3/h4` | -5.5 to -4.5 | -5.11 | -4.90245 | Pass; proxy only, pupil coordinate unpublished |
| (5) `TH4/F` | 0.2 to 0.35 | 0.25 | 0.24679 | Pass |

Condition (3) also supplies an independent check on the stop correction. Using the actual plane stop between G1 and G2
places the ratio inside the claimed interval; treating the patent's printed curved `STP` cemented interface as the stop
would not.

## Verification Summary

The final TypeScript arrays were independently re-read and traced rather than relying on the extraction table alone. The
load-bearing results are:

| Quantity | Infinity | Published / comparison |
|---|---:|---:|
| Computed EFL | 33.754006 mm | Patent: 33.21 mm |
| Computed close-state EFL | 32.607944 mm | Patent: 32.08 mm |
| Modeled wide-open f-number | 1.400000 | Patent aberration plots: f/1.4 |
| Air-equivalent L42-rear→IMG spacing | 19.325789 mm | Source physical distance with GL: 20.01 mm |
| Petzval sum, `Σ φ/(n·n′)` | +0.005283735 mm⁻¹ | Reciprocal: +189.260 mm |

The approximately 1.64% focal-length difference at both focus endpoints follows from tracing the patent's indices
exactly as printed to two decimal places. A source-precision sensitivity calculation shows that the patent's stated
33.21/32.08 mm focal lengths are compatible with indices lying inside the printed two-decimal rounding intervals; the
data file does not substitute a fitted index set.

Sequential height/reduced-angle tracing and an independent ABCD calculation agree to machine precision. The stored
per-element focal lengths also reproduce from the finished arrays. With the inferred semi-diameters, the modeled
geometry satisfies edge-thickness, actual rim-slope, and shared-band cross-gap constraints at both published mechanical
focus configurations. Exact-ray containment passes for the infinity field set and for a finite-conjugate proxy traced
through the published close-focus configuration; the latter is not used to redefine the patent's 0.4 m distance datum.

### Patent-figure SD review (2026-09-10 UTC)

Reviewed the local `patents/CN211826699U.pdf`, PDF page 16, Figure 1, at 600 dpi. Surfaces 8 and 10 were reduced from 11.7/12.3 mm to 11.3/11.3 mm to remove hidden stop-gap trims (0.33/0.93 mm). Figure 1 supports the stop-adjacent optical rim rather than the taller mechanical blank. The physical stop and all prescription radii/spacings are unchanged. All semi-diameters remain modeling inferences. Surface and image-circle audits were run for this prescription.

## Sources

1. **CN 211826699 U**, *内合焦式成像镜头*, Example 1, especially ¶0057-¶0075, Tables 1-2 and 9, and Fig. 1.
2. **Viltrox**, “Viltrox AF 33mm F1.4 APS-C Lens for Sony E-Mount,” official product specification:
   https://viltrox.com/products/viltrox-33mm-f1-4-e-mount-autofocus-prime-lens
3. **OHARA**, optical-glass catalog and S-LAL18 / S-LAL61 / S-TIH-family data used for class-coordinate checks:
   https://www.ohara-inc.co.jp/en/product/01000/
4. **Hikari Glass / Nikon**, J-LASF catalog data, including J-LASFH6 (code 806333), used only as a coordinate-family
   check: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lasf/
5. **HOYA**, optical-glass product data, including E-FDS1-W / code 923-209, used only as a coordinate-family check:
   https://www.hoya-opticalworld.com/english/products/press_01.html
6. **CDGM**, optical-glass database, including H-QF56 (code 567-428), used only as a coordinate-family check:
   https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=13&url=database
