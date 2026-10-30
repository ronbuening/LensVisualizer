# CANON RF 100-500mm f/4.5-7.1 L IS USM

## Patent Reference and Design Identification

**Patent:** US 2021/0003832 A1\
**Application Number:** 16/896,696\
**Priority:** JP 2019-123387, July 2, 2019\
**Filed:** June 9, 2020\
**Published:** January 7, 2021\
**Inventors:** Masato Katayose; Junya Ichimura\
**Applicant:** Canon Inc.\
**Title:** _Zoom Lens and Image Pickup Apparatus Having the Same_\
**Example details:** Numerical Example 2

The prescription is the fixed Numerical Example 2 selected for correlation with the production Canon RF100-500mm
F4.5-7.1 L IS USM. The patent itself does not state that this numerical example became that commercial lens; the
correlation is therefore treated as the selected production association rather than as a manufacturer-confirmed patent
mapping.

Several independent features make the association technically coherent:

1. Numerical Example 2 contains 20 glass elements in 14 air-separated groups, exactly matching Canon's published
   production construction of 20 elements in 14 groups.
2. The patent gives infinity-focus design control points of 103.00, 225.00, and 490.00 mm with corresponding maximum
   f-numbers of 4.60, 5.16, and 7.20. Canon markets the production lens as 100-500 mm f/4.5-7.1. The data file keeps
   these marketing and design values separate rather than scaling the patent to the product labels.
3. The patent image height is 21.64 mm at all three zoom positions, consistent with the 135/full-frame format used by
   the production RF lens.
4. The patent claims Japanese priority on July 2, 2019 and was filed in the United States on June 9, 2020. Canon
   announced the RF100-500mm F4.5-7.1 L IS USM on July 9, 2020, placing the optical filing in the expected development
   interval without requiring a later substitute embodiment.
5. Figure 3 and ¶0023 identify the selected example as an eight-unit system L1-L8 with the same 20-element count used
   in the numerical table. The analysis therefore remains within Example 2 and does not mix prescription data from the
   neighboring examples.

Canon's production specifications also list one Super UD element, six UD elements, nine diaphragm blades, RF mount,
and full-frame coverage. Those are product specifications. The patent instead identifies material behavior by
`nd`, `νd`, and `θgF`; no one-to-one assignment between Canon's UD/Super UD marketing categories and individual patent
elements is asserted here.

The patent's Figure 3 is the wide-end optical section for Example 2, and Figures 4A-4C are its wide, middle, and tele
aberration plots. The surface table and variable-spacing table in ¶0065 are the numerical authority for the modeled
prescription.

## Optical Architecture

Numerical Example 2 is an eight-unit positive-leading zoom with alternating unit powers
`+ − + − + − + −`. It contains 20 elements in 14 air-separated groups. The aperture stop lies between the third and
fourth units; patent surface 16 is represented by the required data-file label `STO`. All refracting surfaces are
spherical.

The patent unit powers, independently reproduced from the final data file, are:

| Unit | Power | Elements           | Unit focal length |
| ---- | ----: | ------------------ | ----------------: |
| L1   |     + | L11, L12, L13      |        +202.77 mm |
| L2   |     − | L21, L22, L23      |         −58.58 mm |
| L3   |     + | L31, L32, L33      |         +82.07 mm |
| L4   |     − | L41                |         −99.09 mm |
| L5   |     + | L51, L52, L53, L54 |         +48.05 mm |
| L6   |     − | L61, L62           |         −62.75 mm |
| L7   |     + | L71                |         +67.32 mm |
| L8   |     − | L81, L82, L83      |         −51.29 mm |

The power sequence distributes zooming and aberration correction across more units than a simple four-group
telephoto zoom. The strong negative L2 sits behind the positive front unit; L3 and L5 restore positive power around the
stop and middle relay; L4 and L6 are negative units that also participate in focusing; and L8 finishes the train with
negative power. This functional description is an interpretation of the published power distribution, while the unit
signs and focal lengths are source values verified from the prescription.

During zooming from wide to tele, ¶0029 states that L1, L3, L4, L5, L6, L7, and L8 move generally toward the object
side, while L2 remains fixed relative to the image plane. The stop moves with L3. L3, L5, and L7 are stated to follow the
same locus. Recalculation from the published control points confirms that relation to the precision of the two-decimal
spacing table: their wide-to-middle shifts are about 6.4 mm object-side and their middle-to-tele shifts about 19.48 mm
object-side.

The middle control point is essential because L4 reverses. Relative to the fixed image plane, its published coordinates
move approximately 2.05 mm image-side from 103 to 225 mm, then 14.51 mm object-side from 225 to 490 mm. The net
wide-to-tele motion is still object-side, consistent with the patent's general description, but a two-endpoint
interpolation would miss the reversal. The data file therefore preserves all three zoom positions.

L2 is axially stationary through zoom and is also the patent's image-stabilization unit. The separation of axial zoom
motion from transverse stabilization is structurally useful: the second unit can provide a strong negative contribution
while its axial station remains tied to the image plane.

By the project's geometric criterion `TL/EFL < 1`, only the 490 mm endpoint is telephoto-form: its normalized track is
about 0.636 times its computed EFL. The 103 and 225 mm states do not meet that criterion, and none of the three states is
retrofocus because the back focal distance remains shorter than the EFL.

The source camera-side optical block `G` is now modeled through `rearPlates`, using the directly printed S36–37 values: thickness 1.00 mm, nd 1.51633, νd 64.14, θgF 0.5353 and trailing air 1.00 mm. The physical gaps after S35 are **19.48 / 30.43 / 61.91 mm**. Paragraph 0062 identifies the final block as a filter/faceplate type; its diameter is absent, so no arbitrary plate clipping is added. Its qualified S-BSL7 proxy retains the source-derived ΔPgF −0.00061652. The camera plate remains hidden in the drawn lens element count while participating in every trace.

Paragraph 0063 defines source BF and overall length with **air-equivalent BF**. The former air fold preserved paraxial propagation but omitted plate spherical/chromatic behavior. Restoring the physical plate moves the image plane back by **0.340512949 mm** and leaves source-state EFL unchanged; defocus differs only by approximately 5.1e−8 mm from the former six-decimal fold. The source's air-equivalent length and the physical image-plane track are reported separately below.

The patent publishes no clear-aperture table. The stop station is a source fact, but its diameter and all surface
semi-diameters in the data file are modeling quantities. They are measured from the native Figure 3 optical rims, subject to the explicit retained edge/gap constraints and runtime checks recorded in the 2026-10-30 review below.
They should not be read as patent-published mechanical apertures.

## Element-by-Element Analysis

### L11 — Positive Meniscus

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +264.36 mm.`

L11 is the first positive element of L1 and carries comparatively weak positive standalone power for the large front
component. Paragraph ¶0051 specifically places a positive lens 11 ahead of the L12/L13 cemented pair and identifies
low-dispersion, high-partial-dispersion material in this position as part of the tele-end secondary-spectrum strategy.
The S-FPL51 label is a catalog-equivalent identification from the coordinate audit, not a claim that Canon sourced the
production element from OHARA.

The element's large modeled semi-diameter reflects its position at the entrance of the 103-490 mm zoom. Its aperture is
inferred; the patent provides the curvature, thickness, and material coordinates but no clear diameter.

### L12 + L13 — Cemented Pair 12+13 (D12-13)

- **L12 — Negative Meniscus:** `nd = 1.61340, νd = 44.27. Glass: S-NBM51 (OHARA). f = −203.84 mm.`
- **L13 — Positive Meniscus:** `nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA). f = +163.66 mm.`

L12 and L13 are cemented at the common surface represented by the downstream L13 material. Their standalone powers
have opposite signs. The verified standalone focal length of the cemented pair is about +882.695 mm, so the doublet by
itself is only weakly positive even though its individual components are substantially stronger. That net value must not
be confused with the full L1 unit focal length of +202.77 mm, which also includes L11 and the intervening spacing.

Paragraph ¶0051 assigns the L1 architecture to a positive L11 followed by a cemented negative L12 and positive L13. It
also identifies the high-`νd`, selected-partial-dispersion positive lenses L11 and L13 as important to lateral secondary
spectrum at the tele end. L13's adopted S-FPL55 equivalent supplies a qualified catalog curve; its vendor label remains an optical equivalent, not supplier evidence. The numerical partial-dispersion ratio is genuinely published by the original.

### L21 — Negative Meniscus

`nd = 1.69680, νd = 55.53. Glass: S-LAL14 (OHARA). f = −93.53 mm.`

L21 begins the strongly negative second unit. Paragraph ¶0052 describes L2 as a negative L21 followed by the cemented
L22/L23 pair, a combination used to correct field curvature and lateral chromatic aberration at the wide end. L21 is not
one of the patent's Example-2 lenses listed under the special low-dispersion/partial-dispersion conditions; its role is
therefore separated from the specific secondary-spectrum function assigned to L22.

L2 as a whole has a focal length of −58.58 mm, substantially stronger than L21 alone. Its axial station remains fixed
relative to the image plane during zooming, while the patent permits transverse motion for stabilization.

### L22 + L23 — Cemented Pair 22+23 (D22-23)

- **L22 — Biconcave Negative:** `nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = −64.48 mm.`
- **L23 — Positive Meniscus:** `nd = 1.76182, νd = 26.52. Glass: S-TIH14 (OHARA). f = +106.95 mm.`

The pair combines a low-dispersion biconcave negative element with a high-index, high-dispersion positive meniscus. Its
verified standalone cemented focal length is approximately −163.685 mm. Together with L21, the pair contributes to the
much stronger −58.58 mm L2 unit after the internal spacing is included.

Paragraph ¶0052 explicitly singles out the negative L22 material: using a low-dispersion material with the required
partial-dispersion behavior there is intended to correct secondary spectrum of longitudinal chromatic aberration at the
tele end. L22 is one of the Example-2 elements satisfying the patent's material conditions. L23 acts as the positive
cemented partner that allows the pair to retain useful negative power while controlling color and monochromatic
aberrations.

### L31 — Biconvex Positive

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +68.05 mm.`

L31 is the principal standalone positive element at the front of L3. Paragraph ¶0053 describes L3 as L31 followed by a
cemented positive L32 and negative L33, with the unit used to correct spherical and longitudinal chromatic aberration
across the zoom range. The patent further identifies the selected low-dispersion/partial-dispersion material of L31 as a
tele-end longitudinal-color control.

L31's +68.05 mm standalone power is stronger than the complete L3 unit's +82.07 mm focal length. The following
cemented pair is net negative, so it moderates L31 while supplying additional chromatic degrees of freedom.

### L32 + L33 — Cemented Pair 32+33 (D32-33)

- **L32 — Biconvex Positive:** `nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA). f = +55.31 mm.`
- **L33 — Biconcave Negative:** `nd = 1.95375, νd = 32.32. Glass: HOYA TAFD45L modeling equivalent (production supplier unspecified). f = −44.06 mm.`

The cemented L32/L33 pair has a verified standalone net focal length of approximately −278.695 mm. It is therefore a
weak negative doublet despite the strong individual positive and negative element powers. In situ, that weak negative
pair follows L31 and leaves the complete L3 unit positive at +82.07 mm.

HOYA TAFD45L is used as the coordinate-compatible modeling curve for the 954323
class and supplies the modeled C/d/F dispersion. The patent row's `θgF`
supplies the separate partial-dispersion correction. OHARA S-LAH98 carries the same
six-digit class but publishes `θgF = 0.5905`, rather than the patent's `0.5898`.
The explicit equivalent label therefore improves spectral modeling without
claiming a full-triad identity or production supplier.

### L41 — Negative Meniscus

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = −99.09 mm.`

L41 is both the only element in L4 and therefore the complete −99.09 mm fourth unit. Paragraph ¶0054 describes it as a
negative lens with a concave surface facing the object side and assigns it a role in spherical-aberration correction
across the zoom range. The same paragraph ties its selected low-dispersion/partial-dispersion material to correction of
tele-end longitudinal secondary spectrum.

Its location immediately behind the stop makes L4 optically influential without requiring a multi-element cell. It is
also one of the two units used for focusing in the patent. The finite-focus travel, however, is not published and is not
reconstructed in the data file.

### L51 — Positive Meniscus

`nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA). f = +63.84 mm.`

L51 opens the four-element positive L5 unit. Paragraph ¶0055 assigns the L5 combination to correction of spherical
aberration, coma, and longitudinal chromatic aberration over the zoom range. L51 supplies positive power ahead of the
negative-net cemented pair L52/L53 and the final positive L54.

The complete L5 unit is +48.05 mm. That unit value is not the standalone power of any one element; it results from the
combination of L51, D52-53, L54, and their separations.

### L52 + L53 — Cemented Pair 52+53 (D52-53)

- **L52 — Biconvex Positive:** `nd = 1.51823, νd = 58.90. Glass: S-NSL3 (OHARA). f = +52.11 mm.`
- **L53 — Negative Meniscus:** `nd = 2.05090, νd = 26.94. Glass: HOYA TAFD65 modeling equivalent (production supplier unspecified). f = −40.36 mm.`

The L52/L53 cemented pair has a verified standalone net focal length of approximately −189.670 mm. The positive L52
and very high-index negative L53 therefore act as a weak negative corrector inside an overall positive unit. The
arrangement allows L5 to retain positive power while adding a strong refractive-index contrast at the cemented
interface.

HOYA TAFD65 shares the 051269 class and supplies the coordinate-compatible
modeling curve for C/d/F dispersion. The separate partial-dispersion correction
comes from the patent's printed `θgF = 0.6054`, so the label remains an optical
equivalent rather than a vendor identity or Canon supplier attribution.

### L54 — Plano-Convex Positive

`nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +93.30 mm.`

L54 closes the positive fifth unit. Paragraph ¶0055 specifically states that a selected low-dispersion,
partial-dispersion material in this positive lens can help correct secondary spectrum of lateral chromatic aberration at
the wide-angle end. That assignment is distinct from the tele-end roles emphasized for L11, L13, L22, L31, L41, L81,
and L82.

The rear surface of L54 is plane in the numerical prescription. Its modeled clear aperture is inferred and is
constrained by the same edge-thickness, shared-gap, and ray-containment limits applied to the rest of the model.

### L61 + L62 — Cemented Pair 61+62 (D61-62)

- **L61 — Biconvex Positive:** `nd = 1.64769, νd = 33.79. Glass: S-TIM22 (OHARA). f = +72.60 mm.`
- **L62 — Biconcave Negative:** `nd = 1.77250, νd = 49.60. Glass: S-LAH66 (OHARA). f = −33.13 mm.`

L6 consists only of this cemented pair, so its verified standalone cemented focal length and its unit focal length are
the same to source precision: approximately −62.752 mm computed versus −62.75 mm published. This is a useful example
of why individual element powers cannot be added arithmetically; the +72.60 mm and −33.13 mm elements form a negative
cemented unit once the shared curvature and thickness are included.

Paragraph ¶0056 states that L62 may have a concave surface facing the image side and assigns the L61/L62 combination to
coma and field-curvature correction throughout the zoom range. L6 is also the second patent focusing unit.

### L71 — Biconvex Positive

`nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA). f = +67.32 mm.`

L71 is the sole element of L7, so its standalone focal length is also the +67.32 mm unit focal length. Paragraph ¶0057
states that Examples 2 and 4 use a single positive L71 and associates this seventh unit with off-axis correction,
including coma, across the zoom range.

During zooming L7 follows essentially the same axial locus as L3 and L5. That coordinated motion keeps three positive
units moving together while the negative units supply the compensating separations needed for focal-length change.

### L81 — Biconcave Negative

`nd = 1.59282, νd = 68.63. Glass: HOYA FCD515 modeling equivalent (production supplier unspecified). f = −51.96 mm.`

L81 provides most of the standalone negative power at the entrance to the final L8 unit. Paragraph ¶0058 describes L8
as a negative L81 followed by the cemented L82/L83 pair and identifies the selected material behavior of L81 and L82 as
part of tele-end lateral secondary-spectrum correction.

The 593686 coordinate uses the coordinate-compatible HOYA FCD515 curve for C/d/F dispersion without claiming an exact
catalog identity. FCD515 reproduces the `nd`/`νd` neighborhood but not the patent's full `nd`/`νd`/`θgF` triad. The
runtime therefore retains the `dPgF` derived from the patent row for the violet-channel correction; neither the curve
nor its HOYA label is a production-supplier attribution.

### L82 + L83 — Cemented Pair 82+83 (D82-83)

- **L82 — Biconcave Negative:** `nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = −63.16 mm.`
- **L83 — Biconvex Positive:** `nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA). f = +66.42 mm.`

The cemented L82/L83 pair is nearly power-neutral in standalone form: its verified focal length is approximately
−1940.021 mm. The complete L8 unit is nevertheless strongly negative at −51.29 mm because L81 supplies most of the
unit power. The cemented pair consequently behaves more as a chromatic and aberration-correction partner than as the
primary source of L8's negative power.

Paragraph ¶0058 explicitly includes L82 among the negative elements selected for tele-end lateral secondary-spectrum
correction. Its S-FPL51 catalog equivalent provides the C/d/F curve, while the patent-derived `dPgF` controls the
violet-channel correction. L83 supplies the opposite positive component at the cemented interface and is represented
by the S-NBH8 coordinate match.

## Glass Identification and Selection

The patent does not name glass manufacturers. It publishes `nd`, `νd`, and `θgF`, and the data file resolves those
coordinates against current optical-glass catalogs. A named OHARA glass in the table below means that the audited
catalog entry reproduces the patent coordinates closely enough to serve as a defensible optical equivalent. It does not
establish Canon's production supplier. The three HOYA rows are explicitly labeled as modeling equivalents so their
coordinate-compatible curves do not become production-material claims.

No catalog-derived `nC`, `nF`, or `ng` values are authored in the data file. The named compatible catalog curves supply
C/d/F dispersion, while each structured `dPgF` is calculated from the patent's published `θgF` row as
`θgF - (0.6438 - 0.001682νd)` and controls the violet-channel correction. This separation is especially important for
L81 because FCD515 has a measurable partial-dispersion mismatch from the patent row.

| Glass annotation                 |    `nd` |  `νd` | Patent-derived `dPgF` | Elements                     | Status                                                      |
| -------------------------------- | ------: | ----: | --------------------: | ---------------------------- | ----------------------------------------------------------- |
| S-FPL51 (OHARA)                  | 1.49700 | 81.54 |           +0.03085028 | L11, L22, L31, L41, L54, L82 | Exact coordinate equivalent within source precision         |
| S-NBM51 (OHARA)                  | 1.61340 | 44.27 |           −0.00603786 | L12                          | Exact coordinate equivalent within source precision         |
| S-FPL55 (OHARA)                  | 1.43875 | 94.66 |           +0.04941812 | L13                          | Exact coordinate equivalent                                 |
| S-LAL14 (OHARA)                  | 1.69680 | 55.53 |           −0.00699854 | L21                          | Exact coordinate equivalent within source precision         |
| S-TIH14 (OHARA)                  | 1.76182 | 26.52 |           +0.01440664 | L23                          | Exact coordinate equivalent within source precision         |
| S-FTM16 (OHARA)                  | 1.59270 | 35.31 |           +0.00889142 | L32                          | Exact coordinate equivalent within source precision         |
| HOYA TAFD45L modeling equivalent | 1.95375 | 32.32 |           +0.00036224 | L33                          | Coordinate-compatible curve; supplier unspecified           |
| S-TIM28 (OHARA)                  | 1.68893 | 31.07 |           +0.00885974 | L51                          | Exact coordinate equivalent within source precision         |
| S-NSL3 (OHARA)                   | 1.51823 | 58.90 |           +0.00096980 | L52                          | Exact coordinate equivalent within source precision         |
| HOYA TAFD65 modeling equivalent  | 2.05090 | 26.94 |           +0.00691308 | L53                          | Coordinate-compatible curve; full-triad identity not proven |
| S-TIM22 (OHARA)                  | 1.64769 | 33.79 |           +0.00683478 | L61                          | Exact coordinate equivalent within source precision         |
| S-LAH66 (OHARA)                  | 1.77250 | 49.60 |           −0.00837280 | L62                          | Exact coordinate equivalent within source precision         |
| S-FSL5 (OHARA)                   | 1.48749 | 70.23 |           +0.00432686 | L71                          | Exact coordinate equivalent                                 |
| HOYA FCD515 modeling equivalent  | 1.59282 | 68.63 |           +0.01623566 | L81                          | Coordinate-compatible curve; partial-dispersion mismatch    |
| S-NBH8 (OHARA)                   | 1.72047 | 34.71 |           −0.00201778 | L83                          | Exact coordinate equivalent within source precision         |

Camera plate G uses the compatible S-BSL7 curve at nd 1.51633 / νd 64.14 and source θgF 0.5353, with source-derived dPgF −0.00061652. Its supplier and chemical identity remain unresolved.

The palette is not simply a sequence of low- and high-dispersion pairs. It repeatedly places very high-`νd` materials
at optically strategic locations: positive L11 and L13 in the first unit, negative L22 near the front negative unit,
positive L31 before the stop, negative L41 immediately behind the stop, positive L54 in L5, and negative L81/L82 in the
final negative unit. The patent's conditional expressions formalize that distribution rather than relying on a generic
"ED glass" designation.

No apochromatic classification is inferred. The patent and catalog data support discussion of partial dispersion and
secondary-spectrum correction, but they do not by themselves establish an APO performance label for the production
lens.

## Focus Mechanism

The focus model is intentionally limited to the published infinity-focus states. Its status is
`NO_INTERNAL_RECONSTRUCTION`.

Paragraph ¶0032 states that focusing from infinity toward shorter object distances is performed by moving L4 toward the
object side and L6 toward the image side. The two groups move on different loci. Their neighboring gap sums are
conserved at each zoom position, which is consistent with translating internal units within fixed surrounding optical
stations.

The patent does not publish finite-focus spacing rows, cam ratios, close-focus magnifications for the numerical example,
or another constraint sufficient to determine both group translations at all three zoom positions. Consequently, every
close-focus member of the data-file `var` pairs duplicates its infinity value. The focus slider must not be interpreted
as a reconstructed close-focus optical prescription.

Canon's production specification gives minimum focusing distances of 0.9 m at 100 mm, 1.0 m at 300 mm, and 1.2 m at
500 mm, with maximum magnification reaching 0.33× at 500 mm. The data file uses `closeFocusM: 0.9` only as required
product metadata. Those commercial endpoints do not uniquely solve the two independent L4/L6 translations and are not
used to manufacture a finite-focus patent state.

Canon specifies Dual Nano USM as the production AF actuator. That is product mechanical metadata, not a prescription
parameter and not evidence that the patent discloses the production focus-drive implementation.

## Chromatic Correction Strategy

The central patent theme is control of longitudinal and lateral chromatic aberration, especially secondary spectrum at
the telephoto end, without sacrificing zoom ratio. Paragraphs ¶0033-¶0036 require selected lenses to combine high Abbe
number with a constrained partial-dispersion ratio `θgF`. Example 2 applies those conditions to L11, L13, L22, L31,
L41, L54, L81, and L82.

The distribution is asymmetric by sign and location. L11 and L13 are positive front-unit lenses; L22 and L41 are
negative lenses nearer the stop; L31 is a positive lens in L3; L54 is a positive lens in L5; and L81/L82 are negative
lenses in the last unit. The patent's explanation is that placing selected material in both positive and negative
components gives independent leverage over longitudinal and lateral secondary spectrum rather than concentrating all
low-dispersion glass in the first unit.

The catalog matches supply C/d/F dispersion, and the patent-derived `dPgF` values preserve the source's partial-
dispersion evidence for the violet channel. This is a coherent path beyond an Abbe-only approximation without treating
the modeling equivalents as measured production glasses. In particular, no chromatic conclusion that depends on an
exact production FCD515 identity is drawn for L81.

Canon's production specification of one Super UD and six UD elements is not used to relabel the patent prescription.
The production categories and the patent's `νd`/`θgF` conditions are different classification systems, and the sources
do not provide an element-by-element crosswalk.

## Conditional Expressions

The patent's material conditions are, using the notation preserved in the analysis:

$$
60 < \nu_d < 100
$$

$$
-0.00047\nu_d + 0.5666 < \theta_{gF} < -0.00047\nu_d + 0.5966
$$

$$
-0.00274\nu_d + 0.7144 < \theta_{gF}
$$

Table 1 contains a direct source error in the upper coefficient of the second expression: the rendered table prints
`−0.0047 × νd + 0.5966`. Paragraphs ¶0006 and ¶0033 and the claims repeatedly give `−0.00047`, which is also the value
consistent with the listed qualifying glasses. The analysis preserves the existence of the table error and uses the
repeated text/claim coefficient for verification; it is not silently corrected as though the table had printed it
properly.

The remaining Example-2 conditions reproduce the patent's rounded Table 1 values from the final prescription:

| Condition              | Verified value | Table 1 | Result |
| ---------------------- | -------------: | ------: | ------ |
| `1.00 < f4/f2 < 2.00`  |       1.691591 |   1.692 | Pass   |
| `0.30 < f1/ft < 0.70`  |       0.413832 |   0.414 | Pass   |
| `0.80 < fn2/f2 < 1.50` |       1.100691 |   1.101 | Pass   |
| `0.50 < fp3/f3 < 1.10` |       0.829098 |   0.829 | Pass   |
| `3.5 < ft/fw < 7.0`    |       4.757691 |   4.760 | Pass   |

Here `fn2` is the standalone focal length of qualifying negative L22 and `fp3` is the standalone focal length of
qualifying positive L31. The ratios therefore use the patent's intended distinction between element power and complete
unit power.

## Image Stabilization

Paragraphs ¶0049-¶0050 specify image stabilization by moving L2 so that it has a component perpendicular to the optical
axis, thereby shifting the image to counter angular vibration. The patent also allows other stabilization arrangements,
but Example 2's stated mechanism is the transverse second unit.

The data file models only the centered sequential prescription; it does not author a decentered stabilization state.
The L2 stabilization statement is therefore a patent fact about permitted movement, not a traced off-axis IS condition
in the current model.

Canon's production specification lists optical image stabilization rated at five stops. That value describes the
commercial mechanism and is not used to infer a decenter distance or to modify the patent's centered surface data.

## Sources and References

1. **US 2021/0003832 A1**, Masato Katayose and Junya Ichimura, _Zoom Lens and Image Pickup Apparatus Having the Same_,
   Canon Inc., published January 7, 2021. Primary sections used: Figure 3, Figures 4A-4C, ¶¶0023, 0026,
   0029, 0032, 0033-0046, 0049-0065, Numerical Example 2, and Table 1.
2. **Canon U.S.A. — RF100-500mm F4.5-7.1 L IS USM product/support specifications.** Production focal range,
   maximum aperture, 20/14 construction, one Super UD plus six UD elements, focusing distances, nine diaphragm blades,
   and mechanical dimensions. https://www.usa.canon.com/shop/p/rf100-500mm-f4-5-7-1-l-is-usm
3. **Canon Europe — RF 100-500mm F4.5-7.1 L IS USM Specifications.** Full-frame format, 20/14 construction, nine
   diaphragm blades, optical IS, closest focusing distance, and Dual Nano USM. https://www.canon-europe.com/lenses/rf-100-500mm-f-4-5-7-1-l-is-usm/specifications/
4. **Canon U.S.A., July 9, 2020 launch release.** Announcement timing and scheduled September 2020 availability of the
   RF100-500mm F4.5-7.1 L IS USM. https://www.usa.canon.com/newsroom/2020/20200709-camera
5. **OHARA optical-glass catalog and glass datasheets.** April 2, 2026 six-decimal recommended-glass data plus the
   official S-TIM22 and S-LAH66 datasheets were used for the named OHARA equivalents. https://oharacorp.com/
6. **HOYA Optics Division optical-glass catalog/data downloads.** The July 7, 2026 Zemax catalog supplies the
   coordinate-compatible TAFD45L, TAFD65, and FCD515 modeling curves for patent classes 954323, 051269, and 593686.
   https://www.hoya-opticalworld.com/english/

## 2026-10-30 Original-PDF Shape and Glass Review

The selected original `US20210003832A1.pdf` was freshly inspected: Numerical Example 2, ¶0065, **PDF p. 19 / printed p. 6**, with single-lens continuation p. 20; **Fig. 3, PDF p. 5 / Sheet 4**, and Fig. 4A–C, pp. 6–7. Definitions ¶0062–63 are on PDF p. 18 / printed p. 5. The native front page confirms Masato Katayose and Junya Ichimura, Canon as applicant, filing 2020-06-09, priority 2019-07-02 and publication 2021-01-07. No family publication was substituted.

Every PDF page is a native **2560 × 3300 bilevel image at 300 ppi**. Fig. 3 was rotated and cropped at native resolution. Earlier 600 dpi views are 2× upsampling. The wide S1→S35 span is about **2,183 native pixels for 200.38 mm**, approximately **0.0918 mm/pixel**. The independent R1 curvature check gives about 59 pixels of sag at a 35.6 mm half-height, or 5.42 mm, versus 5.43 mm from printed R1 = 119.358; the scale is approximately isotropic. Two-pixel contour uncertainty is roughly 0.18 mm; the short bonded-cap endpoint carries about 0.3 mm uncertainty. Source figure contours, sampled runtime clearance and production dimensions remain separate.

The former rims were largely fitted to ray envelopes at 60% field and a production barrel-diameter bound. The native optical rims support the following replacements, excluding leaders, rays, group brackets and mechanical barrel dimensions. All 20 elements, concave ends, six cemented interfaces and the camera plate were reviewed; the original contains no hybrid layer or asphere.

| Body / source surfaces | Native figure approximate optical half-height (mm) | Adopted clear caps (mm)           |
| ---------------------- | -------------------------------------------------- | --------------------------------- |
| L11, S1–2              | 35.6                                               | 35.6 / 35.6                       |
| L12/L13, S3–5          | outer 34.2; bonded optical cap about 33.0          | 34.2 / 33.0 / 34.2                |
| L21, S6–7              | about 16.1                                         | 16.1 / 14.9, tight-gap constraint |
| L22/L23, S8–10         | 16.3                                               | 16.3 throughout the bond          |
| L31, S11–12            | 17.3                                               | 17.3 / 17.3                       |
| L32/L33, S13–15        | 16.5                                               | 16.5 throughout the bond          |
| L41, S17–18            | 12.7                                               | 12.7 / 12.7                       |
| L51, S19–20            | 13.9                                               | 13.9 / 13.9                       |
| L52/L53, S21–23        | 13.4                                               | 13.4 throughout the bond          |
| L54, S24–25            | 13.6                                               | 13.6 / 13.6                       |
| L61/L62, S26–28        | 12.7                                               | 12.7 throughout the bond          |
| L71, S29–30            | 15.9                                               | 15.9 / 15.9                       |
| L81, S31–32            | 15.4                                               | 15.4 / 14.7, tight-gap constraint |
| L82/L83, S33–35        | 17.3                                               | 17.3 throughout the bond          |

Rejected trials preserve the numerical prescription and the unchanged guards. S7 at the full drawn 16.1 mm gives S7→S8 combined sag **4.52 mm > 3.879 mm** allowed in D7 = 4.310 mm; its adopted cap is 14.9 mm. S32 at 15.4 mm gives **4.49 > 4.131 mm** allowed in D32 = 4.590 mm. Even 14.8 mm gives about **4.14 > 4.131 mm**, so 14.7 mm is adopted. These two physical-outline differences remain visible. The short vertical endpoint on the L12/L13 bond was not interpreted as an opaque interface land; the optical cap stays about 33.0 mm beneath the 34.2 mm outer box, producing a retained tapered outer contour. No `rimExtensionSd`, inferred cut, source exemption or unsupported equal-height block is introduced.

All **20 lens material rows plus G** were checked directly against the original's nd, νd and θgF. Paragraph 0062 explicitly defines d = 587.6 nm, g = 435.8 nm, F = 486.1 nm and C = 656.3 nm and the Abbe/partial-dispersion equations. All 21 media now carry explicit d references. **All 20 genuine lens θ-derived `dPgF` values are retained**, with numerical residual below 1.3e−16 against the printed ratios and the model’s reference line 0.6438 − 0.001682νd; the restored plate adds its genuine θ-derived −0.00061652. No numerical per-lens C/F/g line indices existed, were removed or were invented. Twenty-one compatible catalog curves are qualified spectral proxies; source supplier, melt and chemistry remain unidentified.

The catalog's design range is restored from computed 102.988151 / 489.985751 to the **directly printed 103.00 / 490.00 mm**. The source three nominal apertures **4.60 / 5.16 / 7.20**, stop location, all R/d and all zoom/focus gap controls remain unchanged except replacing the rear air fold with the original physical plate path. Computed EFLs are **102.988151 / 225.038656 / 489.985751 mm**. Source-state paraxial residuals are **−0.010945 / +0.012809 / −0.003351 mm**; these residuals are retained, not fitted away.

Physical image-plane tracks after restoring G are **221.86 / 284.51 / 311.86 mm**. Their air-equivalent counterparts are **221.519487 / 284.169487 / 311.519487 mm**. The source prints overall lengths 221.52 / **284.18** / 311.52, leaving a middle-state **0.010513 mm discrepancy** (literal result rounds to 284.17). Rounding is an unproved hypothesis; structured `source.errata` preserves that contradiction and every printed spacing.

## Sampled Controls and Rendered SVG Verification

The **65-position zoom grid** includes the three source stations and 62 illustrative intervals. A geometry census checked all **1,365 zoom/focus combinations** (65 × 21): every focus setting duplicates infinity geometry. No finite-focus optical state is reconstructed, despite the source's qualitative L4/L6 focus directions and the approximate product distance label.

The ray census traces the **65 unique geometries**, 49 disk pupil samples at axial/60%/full format field: **9,555 aimed rays**, zero unaimed, all **195 chiefs pass**. Source-station bundles are **49/42/27**, **49/47/31**, **49/42/34**. Across illustrative zoom positions, **3,121 / 3,185 axial samples pass**; 16 intervals clip four marginal samples at S17/S18. The separate continuous axial-boundary census finds a maximum effective-aperture deficit **1.9043%** at zoom 0.296875, with none over 3%. Requested f/5.6 leaves eight marginal samples clipped across two intervals; **f/8 clears all 3,185 sampled axial rays**. These are sampled runtime limits, not changes to the source aperture targets.

The 65-position first-order census finds a maximum paraxial residual **+9.827378 mm at zoom 0.8125**. Only the three printed configurations are published designs; the linear spacing interpolation is not a factory cam and is not source-verified infinity focus between stations. Its source controls and gaps remain unchanged.

Actual generated SVG element paths were compared with native Fig. 3 at matching scale and at wide/middle/tele. All **20 drawn paths are finite, closed and connected at every sampled geometry**, with **zero hidden renderer trimming**. The restored camera plate is synthetic and participates in tracing while remaining outside the drawn lens count. Canonical surface, source-state aperture, image-circle and runtime corner-field checks pass; no inferred cuts exist.

At the **published half-fields 11.86 / 5.49 / 2.53°**, clear chiefs reach **21.628196 / 22.006767 / 22.039963 mm**, approximately **99.90 / 101.65 / 101.80%** of the generic full-frame semi-diagonal 21.65 mm. Source field evidence, sampled runtime clearance, the three published numerical states and retail-lens correlation are separate conclusions. Physical outer-margin constraints, interval clipping/defocus, infinity-only focus, centered IS and unidentified production materials remain explicit limitations.

The model’s ΔPgF reference line is distinct from the source’s claimed material bounds in ¶0033 (PDF p. 16): 60 < νd < 100, −0.00047νd + 0.5666 < θgF < −0.00047νd + 0.5966, and −0.00274νd + 0.7144 < θgF. Each original lens θgF is retained explicitly in its material note; neither conversion nor a compatible catalog code replaces those source inequalities.

The four-decimal θgF and two-decimal νd rows imply roughly ±0.00006 printed precision in the converted ΔPgF. Eight-decimal stored results preserve arithmetic, not melt precision. The actual source θ values and their reference-line definitions remain the evidence.
