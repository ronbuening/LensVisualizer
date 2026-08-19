# CANON RF 100-500mm f/4.5-7.1 L IS USM

## Patent Reference and Design Identification

**Patent:** US 2021/0003832 A1\
**Application Number:** 16/896,696\
**Priority:** JP 2019-123387, July 2, 2019\
**Filed:** June 9, 2020\
**Published:** January 7, 2021\
**Inventors:** Masato Katayose; Junya Ichimura\
**Applicant:** Canon Inc.\
**Title:** *Zoom Lens and Image Pickup Apparatus Having the Same*\
**Embodiment analyzed:** Example 2 / Numerical Example 2

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

| Unit | Power | Elements | Unit focal length |
|---|---:|---|---:|
| L1 | + | L11, L12, L13 | +202.77 mm |
| L2 | − | L21, L22, L23 | −58.58 mm |
| L3 | + | L31, L32, L33 | +82.07 mm |
| L4 | − | L41 | −99.09 mm |
| L5 | + | L51, L52, L53, L54 | +48.05 mm |
| L6 | − | L61, L62 | −62.75 mm |
| L7 | + | L71 | +67.32 mm |
| L8 | − | L81, L82, L83 | −51.29 mm |

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

The patent includes a rear optical block `G` after the final active lens surface. Paragraph ¶0062 describes the last two
surfaces as an optical block such as a filter or faceplate. Those surfaces are excluded from the ordinary LensVisualizer
prescription. Their optical effect is retained by replacing the raw rear path with the air-equivalent distance from
active surface 35 to the paraxial image plane. The authored values are 21.139487, 32.089487, and 63.569487 mm at the
three zoom controls. This is a reference-plane normalization, not a correction to the patent.

The patent publishes no clear-aperture table. The stop station is a source fact, but its diameter and all surface
semi-diameters in the data file are modeling quantities. They were derived from the verified pupil and ray envelopes and
checked against edge thickness, rim slope, shared-gap clearance, off-axis containment, and the Figure 3 silhouette.
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
spectrum at the tele end. L13's adopted S-FPL55 equivalent supplies explicit catalog line data in the model; its vendor
label remains an optical equivalent, not supplier evidence.

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
C/d/F dispersion, while each structured `dPgF` is derived from the patent's published `θgF` row and controls the
violet-channel correction. This separation is especially important for L81 because FCD515 has a measurable
partial-dispersion mismatch from the patent row.

| Glass annotation | `nd` | `νd` | Patent-derived `dPgF` | Elements | Status |
|---|---:|---:|---:|---|---|
| S-FPL51 (OHARA) | 1.49700 | 81.54 | +0.0280 | L11, L22, L31, L41, L54, L82 | Exact coordinate equivalent within source precision |
| S-NBM51 (OHARA) | 1.61340 | 44.27 | −0.0065 | L12 | Exact coordinate equivalent within source precision |
| S-FPL55 (OHARA) | 1.43875 | 94.66 | +0.0457 | L13 | Exact coordinate equivalent |
| S-LAL14 (OHARA) | 1.69680 | 55.53 | −0.0082 | L21 | Exact coordinate equivalent within source precision |
| S-TIH14 (OHARA) | 1.76182 | 26.52 | +0.0150 | L23 | Exact coordinate equivalent within source precision |
| S-FTM16 (OHARA) | 1.59270 | 35.31 | +0.0090 | L32 | Exact coordinate equivalent within source precision |
| HOYA TAFD45L modeling equivalent | 1.95375 | 32.32 | −0.0002 | L33 | Coordinate-compatible curve; supplier unspecified |
| S-TIM28 (OHARA) | 1.68893 | 31.07 | +0.0092 | L51 | Exact coordinate equivalent within source precision |
| S-NSL3 (OHARA) | 1.51823 | 58.90 | −0.0005 | L52 | Exact coordinate equivalent within source precision |
| HOYA TAFD65 modeling equivalent | 2.05090 | 26.94 | +0.0055 | L53 | Coordinate-compatible curve; full-triad identity not proven |
| S-TIM22 (OHARA) | 1.64769 | 33.79 | +0.0070 | L61 | Exact coordinate equivalent within source precision |
| S-LAH66 (OHARA) | 1.77250 | 49.60 | −0.0092 | L62 | Exact coordinate equivalent within source precision |
| S-FSL5 (OHARA) | 1.48749 | 70.23 | +0.0022 | L71 | Exact coordinate equivalent |
| HOYA FCD515 modeling equivalent | 1.59282 | 68.63 | +0.0194 | L81 | Coordinate-compatible curve; partial-dispersion mismatch |
| S-NBH8 (OHARA) | 1.72047 | 34.71 | −0.0019 | L83 | Exact coordinate equivalent within source precision |

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

| Condition | Verified value | Table 1 | Result |
|---|---:|---:|---|
| `1.00 < f4/f2 < 2.00` | 1.691591 | 1.692 | Pass |
| `0.30 < f1/ft < 0.70` | 0.413832 | 0.414 | Pass |
| `0.80 < fn2/f2 < 1.50` | 1.100691 | 1.101 | Pass |
| `0.50 < fp3/f3 < 1.10` | 0.829098 | 0.829 | Pass |
| `3.5 < ft/fw < 7.0` | 4.757691 | 4.760 | Pass |

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

## Verification Summary

Independent verification of the final data file against the selected numerical example uses sequential reduced-angle
tracing and a separate ABCD assembly. The resulting EFLs are 102.988151, 225.038656,
and 489.985751 mm for the 103, 225, and 490 mm design controls. The largest difference from the patent's rounded focal
lengths is 0.038656 mm. Direct and matrix states agree to approximately `5.55 × 10⁻17` in the verification calculation.

After removal of optical block `G`, the normalized front-to-image tracks are 221.519487, 284.169487, and 311.519487 mm.
The wide and tele values differ from the patent's rounded overall lengths by about 0.0005 mm; the middle value differs by
about 0.0105 mm, consistent with the source's two-decimal variable spacings and the explicit air-equivalent rear
normalization.

The active-surface Petzval sum, computed surface by surface as `φ/(n·n′)`, is
`+0.000383853245902 mm⁻¹`, with reciprocal 2605.162287 mm. It is unchanged with zoom because the glass surfaces and
indices are fixed while only axial separations vary.

The stop station is published but the stop diameter is not. The authored wide-state `STO.sd = 12.134006 mm` is derived
from the verified wide EFL and f/4.60 pupil geometry. The independently solved maximum-aperture stop radii at the middle
and tele controls are 13.256905 and 13.106825 mm. The variable maximum aperture is represented by the design
`nominalFno` values 4.60, 5.16, and 7.20 rather than by inventing extra stop surfaces.

All semi-diameters are modeled. A 600 dpi comparison against the wide-angle
panel in Figure 3 found one strong shape mismatch: the terminal cemented
L82/L83 group measured about 17.5 mm at its optical rim, while the draft stored
12.8-13.3 mm. Surfaces 33-35 therefore use a proportional 17.2/17.5/17.9 mm
envelope. The remaining groups differ from the drawing by less than the audit
threshold. Verified geometry retains positive edge clearance, a maximum
spherical rim slope below the validator limit, and its tightest shared-gap
utilization between surfaces 7 and 8 at the wide state. Default on-axis and
0.60-field off-axis ray bundles remain inside the authored apertures at all
three zoom controls. These checks support the modeled silhouette; they do not
convert the inferred semi-diameters into source facts.

No uniform scaling was applied. Numerical Example 2 is all-spherical, so no conic convention or aspheric coefficient
transformation is applicable. No diffractive or folded-path interaction is introduced. The only omitted source optical
component is rear block `G`, whose effect is retained through the documented air-equivalent image spacing.


## Sources and References

1. **US 2021/0003832 A1**, Masato Katayose and Junya Ichimura, *Zoom Lens and Image Pickup Apparatus Having the Same*,
   Canon Kabushiki Kaisha, published January 7, 2021. Primary sections used: Figure 3, Figures 4A-4C, ¶¶0023, 0026,
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
