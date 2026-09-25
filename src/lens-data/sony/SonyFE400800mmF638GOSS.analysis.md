## Patent Reference and Design Identification

**Patent:** WO 2024/154461 A1
**Application Number:** PCT/JP2023/043529
**Priority:** JP 2023-007267, 2023-01-20
**Filed:** 2023-12-05
**Published:** 2024-07-25
**Inventor:** Fumikazu Kanetaka
**Applicant:** Sony Group Corporation
**Title:** ZOOM LENS AND IMAGE CAPTURE DEVICE
**Embodiment analyzed:** Example 1

This prescription is a transcription and model of Example 1 of WO 2024/154461 A1. The patent gives the complete
Example 1 surface tables, three infinity zoom states, a finite-focus state at each zoom position, group focal lengths,
and the conditional-expression parameters used by the specification. The LensVisualizer data retains the patent at
native scale and does not force the telephoto endpoint to the product's marketed 800 mm value. The source prescription
is all-spherical. [WO 2024/154461 A1, ¶¶0063–0078, PDF pp. 21–25; Tables 1–5, PDF pp. 26–28; Fig. 1, PDF p. 87.]

The research correlation to the production **Sony FE 400–800mm F6.3–8 G OSS (SEL400800G)** is substantial but is not
manufacturer-confirmed. The evidence converges in several independent ways:

1. Example 1 contains 27 physical glass elements, matching Sony's published 27-element specification.
2. The patent publishes 399.99–775.96 mm at f/6.40–8.24, close to the marketed 400–800 mm f/6.3–8 range without
   scaling the prescription.
3. The patent image height is 21.63 mm, corresponding to a 43.26 mm image diameter and therefore closely matching the
   diagonal of the 35 mm full-frame format specified by Sony.
4. G1 and G7 remain fixed during zoom while the internal G2–G6 groups move. Sony describes the production lens as an
   internal-zoom design whose physical length does not change during zooming.
5. The patent identifies G6 as the focusing group, and Sony states that two precision linear motors drive the production
   focus group.
6. The chronology is consistent: the patent claims 2023 priority and was published in 2024, while Sony's operating
   instructions for SEL400800G are dated 2025-02-26.

There is also a material contradiction. Example 1 resolves into **17 air-separated physical optical groups** because its
27 elements contain ten cemented interfaces, whereas Sony specifies **19 groups / 27 elements** for the production lens.
The patent tele endpoint is 775.96 mm rather than 800 mm, and its published finite state is 3.799 m rather than the
production lens's marketed 1.7–3.5 m minimum-focus range. Those differences are preserved rather than reconciled by
scaling or reconstructed motion. The data therefore represents a research-supported patent model correlated to
SEL400800G, not a claim that Sony has confirmed Example 1 as the exact production prescription. [Sony specifications;
Sony product; Sony manuals.]

## Optical Architecture

Example 1 is a seven-functional-group internal zoom. Its first-order group-power sequence is
**positive – negative – negative – positive – weak negative – negative – negative**. The verified group focal lengths
from the final data are approximately +230.444 mm (G1), −174.237 mm (G2), −104.663 mm (G3), +58.477 mm (G4),
−1829.116 mm (G5), −100.744 mm (G6), and −51.247 mm (G7). These are focal lengths of the complete functional groups,
not sums of the isolated element focal lengths. [WO 2024/154461 A1, Table 5; verified final-data group calculation.]

G1 is fixed at the object side. G2 through G6 move for zooming, while G7 is fixed immediately image-side of the aperture
stop. The patent identifies G3 as the strongest negative group among the front-group moving negative groups and G4 as the
strongest positive moving group in that front section. G6 additionally serves as the focusing group and moves toward the
image for closer focus. [WO 2024/154461 A1, ¶¶0067–0071; Table 5.]

The wide-to-tele change in functional-group start position is 0.00 mm for G1, +33.69 mm for G2, +33.93 mm for G3,
−8.72 mm for G4, −8.44 mm for G5, −14.14 mm for G6, and effectively 0.00 mm for G7. G5 and G6 are not monotonic over the
three published zoom positions: both reverse their direction of zoom motion across the middle state. The final data keeps
all six source variable gaps required to reproduce those movements rather than approximating the system as a linear zoom.
[Verified final-data group-station calculation; WO 2024/154461 A1, Tables 3–5.]

At infinity, the verified design EFLs are 399.651, 554.858, and 774.704 mm for the Wide, Mid, and Tele states. The total
first-surface-to-image track remains about 349.15 mm, so `TL/EFL` is 0.874, 0.629, and 0.451 respectively. Under the
project definition (`TL/EFL < 1`), all three sampled states are telephoto configurations. The corresponding verified BFDs
are 50.775, 50.757, and 50.544 mm, all far shorter than EFL; the design is therefore not retrofocus under the project's
`BFD > EFL` criterion. These quantities refer to the final parsed patent model at infinity, not to mechanical flange
back or a production-lens measurement. [Verified final-data paraxial calculation.]

The 27 physical elements form ten cemented pairs and seven singlets, giving the 17 air-separated physical groups recorded
in the data. The cemented annotations D1–D10 describe physical contact between neighboring elements; they are distinct
from the seven moving/fixed functional groups G1–G7 used by the zoom architecture.

## Element-by-Element Analysis

The focal length stated for each element below is the verified **standalone thick-element focal length in air** from the
final prescription. It is not the element's in-situ contribution inside the assembled zoom. Where a pair is cemented, the
shared paragraph also gives the verified net focal length of the isolated cemented stack when that distinction is useful.
Glass names are intentionally conservative class/code annotations because Example 1 publishes `nd` and `νd` but not a
glass manufacturer or melt designation.

### G1 — D1: L11 + L12

**L11** — nd = 1.75584, νd = 26.9. Glass: 756269 — catalog unresolved (supplier unconfirmed). Standalone f = −444.487 mm.
**L12** — nd = 1.55032, νd = 75.5. Glass: 550755 — low-dispersion crown class (supplier unconfirmed). Standalone f = +288.789 mm.

L11 is a negative meniscus and L12 is a biconvex positive element. They are cemented across source surface 2 and together
have a verified isolated-stack focal length of about +828.308 mm. Their large `νd` contrast is consistent with ordinary
achromatizing use of a cemented pair, but the patent does not publish the line indices or partial-dispersion data needed
to attribute a more specific secondary-spectrum role. The pair occupies the fixed positive G1 front group.
[WO 2024/154461 A1, ¶0072; Tables 1 and 5.]

### G1 — L13

**L13** — nd = 1.49700, νd = 81.6. Glass: 497816 — fluorophosphate/low-dispersion crown class (supplier unconfirmed). Standalone f = +317.094 mm.

L13 is a positive meniscus separated by a narrow air gap from D1. Together D1 and L13 form the complete positive G1
functional group. The 497816 coordinate has several exact or near cross-vendor catalog correspondences, so the data keeps
only a class-level identification and does not assign a supplier. [WO 2024/154461 A1, ¶0072; Tables 1 and 5.]

### G2 — D2: L21 + L22

**L21** — nd = 1.84367, νd = 23.8. Glass: 844238 — catalog unresolved (supplier unconfirmed). Standalone f = +89.966 mm.
**L22** — nd = 1.72884, νd = 36.4. Glass: 729364 — catalog unresolved (supplier unconfirmed). Standalone f = −58.903 mm.

The biconvex L21 and biconcave L22 are cemented and form the entire G2 group. The verified isolated cemented-stack focal
length is −174.237 mm, equal to the functional-group focal length because G2 contains no other glass. The pair translates
imageward from Wide to Tele by about 33.69 mm. [WO 2024/154461 A1, ¶0073; Tables 1, 4, and 5.]

### G3 — D3: L31 + L32

**L31** — nd = 1.65439, νd = 39.5. Glass: 654395 — dense-flint/KZFS-adjacent class (supplier unconfirmed). Standalone f = −142.788 mm.
**L32** — nd = 1.83909, νd = 19.6. Glass: 839196 — catalog unresolved (supplier unconfirmed). Standalone f = +100.998 mm.

L31 is a negative meniscus and L32 a positive meniscus. Cementing the pair produces a verified isolated net focal length
of about +366.521 mm, showing why isolated pair power must not be confused with the power of the complete G3 group. G3
also includes L33; with that singlet present the functional group is negative, about −104.663 mm. [WO 2024/154461 A1,
¶0074; Tables 1 and 5.]

### G3 — L33

**L33** — nd = 1.86758, νd = 32.3. Glass: 868323 — catalog unresolved (supplier unconfirmed). Standalone f = −78.091 mm.

L33 is a biconcave negative singlet following D3. Its addition changes the sign and magnitude of the complete G3 power;
G3 is the patent's strongest negative moving front-group lens group `Gn1`. No separate aberration-control function is
assigned to L33 beyond what the patent and computed group power establish. [WO 2024/154461 A1, ¶0074; Table 5.]

### G4 — L41

**L41** — nd = 1.49700, νd = 81.6. Glass: 497816 — fluorophosphate/low-dispersion crown class (supplier unconfirmed). Standalone f = +165.248 mm.

L41 is a biconvex positive singlet at the front of G4. The group is the strongest positive moving group `Gp1` identified
by the patent. L41 is one of four elements in the prescription that share the 497816 low-dispersion coordinate.
[WO 2024/154461 A1, ¶0075; Tables 1 and 5.]

### G4 — L42

**L42** — nd = 1.49700, νd = 81.6. Glass: 497816 — fluorophosphate/low-dispersion crown class (supplier unconfirmed). Standalone f = +128.183 mm.

L42 is another biconvex positive singlet using the same low-dispersion coordinate as L41. It is separated from L41 by a
small air gap rather than cemented. The use of repeated high-`νd` positive elements is directly visible in the prescription,
but the absence of element-specific line data prevents a claim about anomalous partial dispersion or apochromatic
correction. [WO 2024/154461 A1, ¶0075; Table 1.]

### G4 — D4: L43 + L44

**L43** — nd = 1.49700, νd = 81.6. Glass: 497816 — fluorophosphate/low-dispersion crown class (supplier unconfirmed). Standalone f = +99.240 mm.
**L44** — nd = 1.83720, νd = 33.3. Glass: 837333 — catalog unresolved (supplier unconfirmed). Standalone f = −137.998 mm.

The biconvex L43 and biconcave L44 are cemented at the rear of G4. Their isolated stack is positive, with a verified net
focal length of about +314.909 mm. Combined with L41 and L42, the complete G4 group is much stronger at +58.477 mm and
moves objectward overall from Wide to Tele by about 8.72 mm. [WO 2024/154461 A1, ¶0075; Tables 1 and 5.]

### G5 — D5: L51 + L52

**L51** — nd = 1.95787, νd = 30.0. Glass: 958300 — catalog unresolved (supplier unconfirmed). Standalone f = −64.716 mm.
**L52** — nd = 1.67300, νd = 34.3. Glass: 673343 — catalog unresolved (supplier unconfirmed). Standalone f = +64.132 mm.

L51 is a negative meniscus and L52 a positive meniscus. Their nearly opposed standalone powers leave the cemented stack
with only weak negative net power: the verified isolated focal length is about −1829.116 mm. G5 therefore acts as a weak
negative functional group in first-order terms. Its zoom motion reverses between the Wide→Mid and Mid→Tele intervals,
which is preserved explicitly in the variable-spacing table. [WO 2024/154461 A1, ¶0076; Tables 1 and 5.]

### G6 — D6: L61 + L62

**L61** — nd = 1.72146, νd = 23.4. Glass: 721234 — catalog unresolved (supplier unconfirmed). Standalone f = +72.179 mm.
**L62** — nd = 1.76505, νd = 36.2. Glass: 765362 — catalog unresolved (supplier unconfirmed). Standalone f = −41.553 mm.

The biconvex L61 and biconcave L62 form the entire negative G6 group. Their verified isolated cemented focal length is
−100.744 mm, again equal to the functional-group power because no other element belongs to G6. This is the published
focusing group. Its axial position changes for both zooming and focusing, while the adjacent d23 and d26 gaps preserve
its one-group translation mechanism within the 0.01 mm precision of the source table. [WO 2024/154461 A1, ¶0068 and
¶0077; Tables 2, 4, and 5.]

### G7 — D7: L71 + L72

**L71** — nd = 1.98612, νd = 16.5. Glass: 986165 — very-high-index flint class (supplier unconfirmed). Standalone f = −37.359 mm.
**L72** — nd = 1.66961, νd = 26.6. Glass: 670266 — catalog unresolved (supplier unconfirmed). Standalone f = +39.274 mm.

D7 begins the fixed rear group immediately after the stop. The standalone powers nearly oppose one another, and the
verified isolated pair is correspondingly very weakly positive, with a focal length near +11.65 m. The 986165 coordinate
has an exact HOYA cross-reference code for FDS16-W, but Example 1 does not establish that supplier or melt; the final data
therefore retains only a class label. [WO 2024/154461 A1, ¶0078; Table 2.]

### G7 — D8: L73 + L74

**L73** — nd = 1.95268, νd = 25.7. Glass: 953257 — catalog unresolved (supplier unconfirmed). Standalone f = +75.460 mm.
**L74** — nd = 1.61889, νd = 47.9. Glass: 619479 — catalog unresolved (supplier unconfirmed). Standalone f = −35.130 mm.

The positive-meniscus L73 and biconcave L74 form a cemented pair with a verified isolated focal length of about
−63.945 mm. It is one component of the much longer G7 fixed rear group and should not be interpreted as the power of G7
by itself. [WO 2024/154461 A1, ¶0078; Table 2.]

### G7 — D9: L75 + L76

**L75** — nd = 1.63362, νd = 29.9. Glass: 634299 — catalog unresolved (supplier unconfirmed). Standalone f = +24.562 mm.
**L76** — nd = 1.82673, νd = 33.6. Glass: 827336 — catalog unresolved (supplier unconfirmed). Standalone f = −19.035 mm.

The biconvex L75 and biconcave L76 are a compact cemented pair with a verified isolated net focal length of about
−142.417 mm. Their relatively strong isolated element powers are moderated substantially when the pair is treated as a
thick cemented stack, another example of why surface spacing and refractive-index transitions matter to first-order power.
[WO 2024/154461 A1, ¶0078; Table 2.]

### G7 — L77

**L77** — nd = 1.57567, νd = 38.8. Glass: 576388 — catalog unresolved (supplier unconfirmed). Standalone f = +33.452 mm.

L77 is a biconvex positive singlet. It follows D9 with an air gap and remains part of the fixed G7 rear group throughout
zoom and focus. [WO 2024/154461 A1, ¶0078; Table 2.]

### G7 — L78

**L78** — nd = 1.49883, νd = 80.5. Glass: 499805 — catalog unresolved (supplier unconfirmed). Standalone f = −40.112 mm.

L78 is a biconcave negative singlet with an unusually high Abbe number for a negative element in this prescription. The
source does not publish a named glass or line-index set, so the analysis does not infer an ED trade name or anomalous
partial-dispersion behavior from `nd`/`νd` alone. [WO 2024/154461 A1, ¶0078; Table 2.]

### G7 — D10: L79 + L710

**L79** — nd = 1.65611, νd = 27.7. Glass: 656277 — catalog unresolved (supplier unconfirmed). Standalone f = +16.096 mm.
**L710** — nd = 2.00100, νd = 29.1. Glass: 001291 — ultra-high-index lanthanum flint class (supplier unconfirmed). Standalone f = −11.066 mm.

The biconvex L79 and biconcave L710 form the most strongly powered individual element pair in the rear group by standalone
focal length. The isolated cemented stack is much weaker, at about −55.435 mm. Code 001291 appears in several vendor
families, including HOYA TAFD55/TAFD55-W, OHARA S-LAH99, and HIKARI J-LASFH16; the multiplicity prevents a supplier
assignment from the patent coordinate alone. [WO 2024/154461 A1, ¶0078; Table 2; HOYA cross-reference.]

### G7 — L711

**L711** — nd = 1.64579, νd = 28.7. Glass: 646287 — catalog unresolved (supplier unconfirmed). Standalone f = +51.623 mm.

L711 is the final biconvex positive singlet before the image-side air space. Together with D7, D8, D9, L77, L78, and D10,
it completes the fixed negative G7 rear group whose verified net focal length is about −51.247 mm. [WO 2024/154461 A1,
¶0078; Table 2 and Table 5.]

## Glass Identification and Selection

Example 1 uses 24 distinct `nd`/`νd` coordinates across 27 elements. The patent does not name the glass manufacturer and
does not publish element-specific `nC`, `nF`, `ng`, or `dPgF`. The final data therefore stores d-line `nd` and `νd` and
uses supplier-unconfirmed six-digit/class annotations. The class labels are identifiers for the coordinate family; they
are not claims that Sony used a particular public catalog glass in the production lens.

| Code / class | nd | νd | Elements | Catalog observation |
|---|---:|---:|---|---|
| 497816 low-dispersion crown class | 1.49700 | 81.6 | L13, L41, L42, L43 | Exact/near code families include HOYA FCD1/FCD1B, SCHOTT N-PK52A, OHARA S-FPL51, HIKARI J-FK01A, SUMITA K-PFK80, and CDGM H-FK61. |
| 550755 low-dispersion crown class | 1.55032 | 75.5 | L12 | HOYA cross-reference contains exact code 550755 for FCD705; supplier remains unconfirmed. |
| 654395 dense-flint/KZFS-adjacent class | 1.65439 | 39.5 | L31 | Exact CDGM H-TF5 code exists; nearby families include HOYA E-ADF50, SCHOTT N-KZFS5, and OHARA S-NBH5. |
| 986165 very-high-index flint class | 1.98612 | 16.5 | L71 | HOYA cross-reference contains exact code 986165 for FDS16-W; not assigned as the patent supplier. |
| 001291 ultra-high-index lanthanum-flint class | 2.00100 | 29.1 | L710 | Exact code occurs in multiple vendor families including HOYA TAFD55/TAFD55-W, OHARA S-LAH99, and HIKARI J-LASFH16. |
| Other 19 coordinates | — | — | Remaining elements | Retained as six-digit or unresolved classes because the catalog audit did not establish a unique defensible public identity. |

The 497816 coordinate is the most conspicuous low-dispersion family because it is repeated four times in positive elements.
L12 and L78 also have high Abbe numbers. Conversely, several rear-group elements use very high refractive indices, including
L71 (`nd = 1.98612`) and L710 (`nd = 2.00100`). These statements describe the published d-line coordinates only. This does not establish anomalous partial dispersion,
glass chemistry, melt supplier, or apochromatic performance.

Sony markets the production FE 400–800mm F6.3–8 G OSS as using six ED elements. That marketing statement is not mapped
onto six specific patent elements here because Example 1 does not identify those elements as ED and does not publish the
spectral data needed to make that mapping independently. [Sony product; glass-catalog sources listed below.]

## Focus Mechanism

The patent publishes G6 as the focusing group and gives complete infinity and finite spacing rows at Wide, Mid, and Tele.
The final data therefore uses focus status **PUBLISHED**, not a reconstruction. At the source finite state, the shooting
distance is 3.799 m at all three sampled zoom positions. G6 moves toward the image by 4.80 mm at Wide, 9.69 mm at Mid,
and 16.07 mm at Tele. The adjacent d23 gap increases while d26 decreases by essentially the same amount; the Tele pair
retains the source table's 0.01 mm last-digit mismatch rather than silently correcting it. [WO 2024/154461 A1, ¶0068;
Table 4.]

| Zoom state | d23 infinity → finite (mm) | d26 infinity → finite (mm) | G6 imageward travel (mm) |
|---|---:|---:|---:|
| Wide | 12.36 → 17.16 | 18.57 → 13.77 | 4.80 |
| Mid | 11.92 → 21.61 | 17.78 → 8.09 | 9.69 |
| Tele | 6.66 → 22.73 | 32.71 → 16.63 | 16.07 |

Paraxial tracing of the rounded finite-state prescriptions gives signed lateral magnifications of approximately −0.108,
−0.149, and −0.214 for Wide, Mid, and Tele. The Tele magnitude is close to Sony's marketed 0.23 maximum magnification,
but the quantities are not measured at the same distance and should not be treated as an exact production match.
The final model does not extrapolate G6 travel to Sony's marketed production MFD of 1.7–3.5 m. [Verified final-data finite
conjugate calculation; Sony specifications.]

Sony states that two precision linear motors drive the production focus group. That mechanical fact is useful correlation
evidence, but it is not used to alter the patent's G6 spacing law. [Sony product.]

## Chromatic Correction Strategy

The prescription combines repeated high-`νd` positive elements with lower-`νd` partners in several cemented groups. D1,
for example, pairs L11 (`νd = 26.9`) with L12 (`νd = 75.5`), while D4 pairs L43 (`νd = 81.6`) with L44 (`νd = 33.3`).
Those dispersion contrasts are consistent with ordinary longitudinal-chromatic balancing in cemented assemblies. The
analysis does not extend that observation into an APO or anomalous-dispersion claim because the source lacks element-level
partial-dispersion data and the data file does not assign vendor Sellmeier curves.

The production product's advertised six ED elements are therefore kept separate from the patent-model glass audit. The
manufacturer statement describes the marketed lens; the patent model describes only the anonymous `nd`/`νd` coordinates
actually published for Example 1.

## Conditional Expressions

The patent frames the design with seven conditional expressions involving the first positive group, total track, relative
movement of the strongest negative and positive moving groups, the front-group thickness, and back focus. The final-data
calculation replays the Example 1 parameters rather than copying the rounded values from Table 29. All seven computed
values fall within the stated bounds and agree with the table at its published precision. [WO 2024/154461 A1,
conditions (1)–(7), PDF pp. 13–18; Tables 28–29, PDF pp. 58–59.]

| Condition | Computed | Published | Patent range |
|---|---:|---:|---|
| (1) `f11 / sqrt(fw·ft)` | 0.414150 | 0.414 | 0.200 < x < 0.455 |
| (2) `TL / ft` | 0.450701 | 0.450 | 0.300 < x < 0.520 |
| (3) `Dn1 / Dp1` | 3.891055 | 3.891 | 0.300 < x < 4.300 |
| (4) `fp1 / sqrt(fw·ft)` | 0.105094 | 0.105 | 0.050 < x < 0.200 |
| (5) `|fn1| / sqrt(fw·ft)` | 0.188099 | 0.188 | 0.070 < x < 0.250 |
| (6) `Lf / sqrt(fw·ft)` | 0.037849 | 0.038 | 0.020 < x < 0.060 |
| (7) `BF / sqrt(fw·ft)` | 0.091253 | 0.091 | 0.040 < x < 0.120 |

These conditions constrain the first-order layout described by the patent. Satisfying them does not by itself establish
production identity or image-quality performance; it only shows that the implemented Example 1 prescription reproduces
the patent's own numerical design framework.

## Aperture and Semi-Diameter Modeling

Source surface 27 is the aperture stop. Its published effective diameter is `φ = 19.98 mm`, but treating that number as a
single fixed physical iris diameter would produce an approximately constant f/6.3 system across the three zoom positions.
Table 3 instead publishes f/6.40, f/7.31, and f/8.24. The final model therefore calibrates a separate physical stop opening
for each infinity zoom state by back-projecting the published f-number through the verified front-group pupil geometry.
This is a modeling calibration, not an independent measurement of an unpublished diaphragm diameter.

| Zoom state | Published Fno target | Calibrated stop semi-diameter (mm) | Modeled `nominalFno` |
|---|---:|---:|---:|
| Wide | 6.40 | 9.859373 | 6.394568 |
| Mid | 7.31 | 8.624538 | 7.308395 |
| Tele | 8.24 | 7.640350 | 8.226660 |

The modeled `nominalFno` values use the verified final-data EFLs rather than copying the patent targets. The small residual
difference is therefore expected and reflects the rounded source prescription used to compute EFL. [WO 2024/154461 A1,
Tables 2–3; verified pupil/aperture calculation.]

The patent's surface `φ` values are effective diameters, not published mechanical glass-edge diameters. The data starts
from `φ/2` and then changes only the semi-diameters needed to obtain a physically usable LensVisualizer geometry under the
current edge-thickness, rim-slope, shared-gap, and representative ray-containment checks. Surfaces 2–5 and 11–12 are
reduced relative to `φ/2`; surfaces 1, 6, and 14 are modestly enlarged. The stop is separately set by the f-number
calibration above. The resulting minimum conservative edge thickness is 0.572 mm, and the maximum shared-gap intrusion is
0.8982 of the gap under the 0.90 policy. These are properties of the authored model, not Sony mechanical specifications.
[Verified final-data geometry calculation.]

All three published infinity full-stop on-axis states pass the exact meridional sampling used in the geometry verifier. At the published Tele close-focus state, however, the full stop-edge on-axis diagnostic is rim-limited at surface
11 in this conservative semi-diameter model. The patent does not publish a close-state f-number, so the model retains the
limitation instead of widening the glass rims, relaxing the gap policy, or inventing a close-focus diaphragm law.

No uniform scale is applied (`s = 1.0`), no cover/filter plate or inactive dummy plane is omitted, and no air-equivalent
rear-spacing conversion is required for Example 1.

## Image Stabilization

Sony specifies Optical SteadyShot for the production FE 400–800mm F6.3–8 G OSS. The selected Example 1 prescription and
its implemented LensVisualizer model do not publish or encode a decentered stabilization state, an IS travel range, or a
surface/group variable that can be independently identified as the production OSS actuator. The data therefore contains
no synthetic image-stabilization motion, and this analysis does not assign a particular patent group to the OSS function.
[Sony specifications; Sony product.]

## Verification Summary

The final data file was loaded from the actual `.data.ts` by both the installed TypeScript compiler API and an
independent strict literal parser. The parsed prescription was then used for all model computations. The two independent
paraxial matrix formulations agree to better than `2 × 10⁻¹³` in their matrix elements across the three published
infinity states. The final model reproduces the source EFL, BFD, track, functional-group powers, zoom movement, published
focus motion, Petzval sum, and conditions (1)–(7) within the source-precision-aware tolerances recorded in the dossier.

The surface-by-surface Petzval calculation uses `φ / (n·n′)` for every refracting surface and gives a summed curvature of
approximately −3.0580 × 10⁻⁴ mm⁻¹ for the final prescription. The sign is quoted in the verifier's convention; it is not
a measurement of the production lens's best-focus field curvature.

The prescription is all-spherical. The patent gives a general asphere equation elsewhere in the specification, but
Example 1 has no `ASP`-marked surface and no Example 1 asphere-coefficient table. The final `asph` object is therefore
empty and no asphere departure is quoted. [WO 2024/154461 A1, ¶¶0064–0065; Tables 1–5.]

Repository-level LensVisualizer checks remain separate from this analysis. Real project type checking, project Prettier,
`buildLens()` / `validateLensData()`, runtime glass resolution, and production renderer diagnostics were not available in
the local verification environment and are not represented here as passed checks.

## Sources and References

- **WO 2024/154461 A1**, *ZOOM LENS AND IMAGE CAPTURE DEVICE*, Fumikazu Kanetaka, applicant Sony Group Corporation,
  published 2024-07-25. Example 1: ¶¶0063–0078; Tables 1–5 on PDF pp. 26–28; Fig. 1 on PDF p. 87. Conditional-expression
  definitions and Example 1 values: PDF pp. 13–18 and Tables 28–29 on PDF pp. 58–59.
- **Sony, SEL400800G specifications.** https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel400800g/specifications
- **Sony, FE 400–800mm F6.3–8 G OSS product/features.** https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel400800g
- **Sony, SEL400800G manuals/support.** https://www.sony.com/electronics/support/product/sel400800g/manuals
- **HOYA Optics, optical-glass cross-reference.** https://www.hoya-opticalworld.com/japanese/products/crossreference.html
- **OHARA optical-glass catalog/data.** https://www.oharacorp.com/
- **SCHOTT Advanced Optics glass data.** https://www.us.schott.com/shop/advanced-optics/en/search/
- **HIKARI / Nikon optical-glass catalog.** https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/fk.html
- **SUMITA Optical Glass data downloads.** https://www.sumita-opt.co.jp/en/download/
- **CDGM optical-glass database.** https://www.cdgmgd.com/

[Sony specifications]: https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel400800g/specifications
[Sony product]: https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel400800g
[Sony manuals]: https://www.sony.com/electronics/support/product/sel400800g/manuals
[HOYA cross-reference]: https://www.hoya-opticalworld.com/japanese/products/crossreference.html

## Catalog spectral proxy audit

The integration audit retains every patent index and Abbe value. The following annotations now select coordinate-compatible catalog curves at runtime, without identifying the production supplier or melt. Earlier coordinate-only descriptions above remain source descriptions; an unresolved supplier does not mean that no spectral proxy is available. No measured line indices or unsupported APD tags are added.

| Element | Patent nd / vd | Runtime spectral proxy |
|---|---|---|
| L11 | 1.75584 / 26.9 | S-TIH4 |
| L21 | 1.84367 / 23.8 | S-TIH53 |
| L62 | 1.76505 / 36.2 | S-NBH59 |
| L73 | 1.95268 / 25.7 | NBFD265 |
| L74 | 1.61889 / 47.9 | S-BSM28 |
| L78 | 1.49883 / 80.5 | FCD1 |
