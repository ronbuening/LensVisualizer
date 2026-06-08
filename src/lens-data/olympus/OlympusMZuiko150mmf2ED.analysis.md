# Olympus Zuiko Digital ED 150mm f/2.0

## Patent Reference and Design Identification

**Patent:** US 7,408,719 B2  
**Application Number:** 11/085,094  
**Filed:** 2005-03-22  
**Priority:** 2004-03-29 (JP 2004-094286)  
**Published:** 2005-09-29 (US 2005/0213225 A1)  
**Granted:** 2008-08-05  
**Inventor:** Takeshi Hosoya  
**Assignee:** Olympus Corporation, Tokyo  
**Title:** Telephoto Lens, Telephoto Lens System, and Imaging System Incorporating the Same  
**Embodiment analyzed:** Example 1 (FIGS. 1A/1B), the patent's lead embodiment

The prescription transcribed here is Example 1 of US 7,408,719 B2. The production lens corresponding to the design family is the Four Thirds **ZUIKO DIGITAL ED 150mm f/2.0**, not a Micro Four Thirds M.ZUIKO lens. The output file stem follows the requested name, but the optical and catalog identification in the analysis and data file use the production system name.

The patent discloses three closely related large-aperture telephoto examples for a small-format digital single-lens-reflex system. Example 1 is the first illustrated embodiment and gives a paraxial focal length of 149.5 mm at F/2.0. It is the most direct transcription candidate because its patent focal length is nearest the marketed 150 mm value and because its Example 1 diagrams and variable-spacing table are internally complete.

The identification with the production Zuiko Digital ED 150mm f/2.0 rests on several independent checks. The prescription contains eleven powered elements in nine air-spaced groups, matching the production 11-element / 9-group specification. The computed infinity EFL is 149.501 mm, matching the patent's 149.5 mm and the marketed 150 mm class. The patent gives a half angle of view of 4.4° and aberration plots to FIY = 11.45 mm; the production catalog gives an 8.2° full diagonal angle of view on Four Thirds, which is the same design class within normal field-definition tolerance. The first group contains two ultra-low-dispersion positive elements with νd = 81.54 and νd = 94.93, corresponding to the ED and Super-ED roles described in Olympus product literature. The focusing architecture is also distinctive: the front group and rear group remain fixed while two internal groups move in opposite directions.

There is one important production-versus-patent difference. The patent's Example 1 close-focus table is for β = −0.15 at a nominal object distance of 1.2 m. The official production specification gives closest focus as 1.4 m and maximum image magnification as 0.13×. The analysis therefore treats the patent's 1.2 m / β = −0.15 state as a patent endpoint and uses the manufacturer's 1.4 m / 0.13× figure for the data file's `closeFocusM` and close-focus interpolation endpoint. That is a correction to any reading that treats 1.2 m / 0.15× as the production hard specification.

The prescription's last three plane-parallel plates are not counted as lens elements. The patent identifies them as a dust-reduction plate, an IR-cut / low-pass filter plate, and a CCD cover glass in the camera body. The data file omits those plates from the optical surfaces array and folds their optical path into the final air-equivalent back focal distance.

## Optical Architecture

The design is a four-group internal-focus telephoto with group powers positive / near-afocal / positive / negative from front to rear. The aperture stop stands between G3 and G4 in Example 1 and moves with G3 during focusing.

**G1** is the positive collecting and chromatic-correction group. It consists of four air-spaced singlets: a weak positive biconvex crown, a positive ED meniscus, a dense-flint biconcave negative, and a Super-ED biconvex positive. Its isolated thick-lens focal length is +206.5 mm.

**G2** is a cemented focusing doublet of very weak positive power. In isolation its focal length is approximately +2002.8 mm, so it behaves nearly afocally. It moves imageward during close focusing.

**G3** is a positive moving group consisting of a cemented meniscus doublet followed by a positive meniscus. Its isolated focal length is +203.7 mm. G3 moves objectward during close focusing and carries the aperture stop with it.

**G4** is the fixed negative telephoto tail. It consists of a biconcave negative element followed by a biconvex high-index positive element. Its isolated thick-lens focal length is −199.0 mm. The patent's own condition-(6) convention assigns a stronger in-system negative group value; the distinction is handled in the conditional-expression section.

The governing architectural idea is not simply a fast long-focus front group. It is the division of focus compensation between a nearly afocal G2 and a positive G3 moving in the opposite direction. This keeps the overall lens length fixed while reducing focus-induced changes in spherical aberration, coma, and lateral color compared with single-group internal focus.

## Element-by-Element Analysis

Refractive indices are d-line values at 587.6 nm. Element focal lengths are standalone thick-lens-in-air values computed from the transcribed radii, thicknesses, and d-line indices.

### G1 — First Group, Positive Collector and Chromatic Corrector

**L11 — Biconvex Positive.** nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA), FK5-class crown. f = +403.2 mm.

The first element is a weak positive collector and the exposed weather-facing glass. Its νd is below the νd ≥ 80 threshold imposed by condition (5) on the first group's abnormal-dispersion positive lenses, which is consistent with the patent's separate condition (5-2) requiring the most-object-side element to remain below νd = 80. The likely design reason is durability and manufacturability at the exposed front surface rather than maximum anomalous dispersion.

**L12 — Positive Meniscus, convex to object.** nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA), ED fluorophosphate. f = +199.1 mm.

L12 is the first of the two high-Abbe positive elements in the front group. Its glass match is S-FPL51, with catalog line indices nC = 1.49514, nF = 1.50123, and ng = 1.50451. The resulting catalog-derived ΔPgF is about +0.0319, so it contributes to secondary-spectrum correction rather than merely reducing primary longitudinal color.

**L13 — Biconcave Negative.** nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA), dense flint. f = −112.0 mm.

L13 is the front group's principal negative achromatizing component. It is high-index and low-Abbe, so it supplies strong negative power and dispersion against the two high-Abbe positive crowns around it. Its placement between the ED meniscus and the Super-ED positive keeps the major chromatic work in the front group, where marginal ray heights are high.

**L14 — Biconvex Positive.** nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA), Super-ED fluorophosphate. f = +167.6 mm.

L14 is the strongest abnormal-dispersion positive in the prescription. The catalog match is S-FPL53, with nC = 1.43733, nF = 1.44195, ng = 1.44442, and catalog-derived ΔPgF ≈ +0.0505. Its very high Abbe number and anomalous partial dispersion make it the natural Super-ED member of the front group.

### G2 — Second Group, Near-Afocal Internal Focusing Doublet

**L21 — Biconvex Positive (cemented).** nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA), dense flint. f = +70.9 mm.  
**L22 — Biconcave Negative (cemented).** nd = 1.74400, νd = 44.78. Glass: S-LAM2 (OHARA), lanthanum flint. f = −67.6 mm.

G2 is a cemented pair whose positive and negative powers almost cancel. The isolated group focal length of +2002.8 mm is weak enough that G2 functions primarily as a conjugate-shifting group rather than a strongly powered imaging group. The unusual sign-dispersion pairing is deliberate: the positive element is the higher-dispersion dense flint, while the negative element is a lower-dispersion lanthanum flint. For a moving focus group, this limits the aberration changes introduced by translation.

### G3 — Third Group, Positive Moving Group with Stop

**L31 — Positive Meniscus, convex to object (cemented).** nd = 1.62280, νd = 57.05. Glass: S-BSM10 (OHARA), barium crown. f = +63.2 mm.  
**L32 — Negative Meniscus, convex to object (cemented).** nd = 1.71736, νd = 29.52. Glass: S-TIH1 (OHARA), flint. f = −45.6 mm.

L31 and L32 form the cemented doublet at the front of the third group. The doublet itself is net negative in isolation, but it moderates the aberration changes created as G3 moves. The patent's condition (4) uses the outer surface radii of this cemented pair, R32/R31, to constrain the balance of spherical aberration and coma during focusing.

**L33 — Positive Meniscus, convex to object.** nd = 1.80518, νd = 25.42. Glass: S-TIH6 (OHARA), dense flint. f = +109.2 mm.

L33 restores the positive net power of G3. It is a high-index dense-flint positive placed close to the aperture stop, where it works near the pupil and helps control the transition between the moving focus assembly and the fixed negative rear group.

### G4 — Fourth Group, Fixed Negative Telephoto Tail

**L41 — Biconcave Negative.** nd = 1.60342, νd = 38.03. Glass: S-TIM5 (OHARA), F5-class light flint. f = −60.8 mm.

L41 is the main diverging element of the rear group. In Example 1 its object-side surface is very weakly curved rather than planar; Examples 2 and 3 make the corresponding surface flat. The image-side radius, R = +38.839 mm, is the surface used in condition (3) against the object-side radius of L42.

**L42 — Biconvex Positive.** nd = 1.78800, νd = 47.37. Glass: S-LAH64 (OHARA), high-index lanthanum. f = +99.0 mm.

L42 closes the optical train with high positive index and moderate dispersion. It reduces the harshness of the preceding negative element's Petzval contribution and helps shape the exit cone for the digital sensor stack behind it.

## Glass Identification and Selection

The d-line index and Abbe number pairs match public OHARA catalog entries. The table lists the values used in the data file; ΔPgF is computed from the catalog line indices against the Schott normal line and is not a patent-published value.

| Element | Glass | nd | νd | nC | nF | ng | ΔPgF | Role |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| L11 | S-FSL5 (OHARA) | 1.48749 | 70.23 | 1.48534 | 1.49228 | 1.49596 | +0.0046 | Durable positive front crown |
| L12 | S-FPL51 (OHARA) | 1.49700 | 81.54 | 1.49514 | 1.50123 | 1.50451 | +0.0319 | ED positive, secondary-spectrum control |
| L13 | S-TIH11 (OHARA) | 1.78472 | 25.68 | 1.77596 | 1.80652 | 1.82534 | +0.0152 | Dense-flint negative |
| L14 | S-FPL53 (OHARA) | 1.43875 | 94.93 | 1.43733 | 1.44195 | 1.44442 | +0.0505 | Super-ED positive |
| L21 | S-TIH11 (OHARA) | 1.78472 | 25.68 | 1.77596 | 1.80652 | 1.82534 | +0.0152 | Positive member of G2 mover |
| L22 | S-LAM2 (OHARA) | 1.74400 | 44.78 | 1.73905 | 1.75566 | 1.76506 | −0.0026 | Negative member of G2 mover |
| L31 | S-BSM10 (OHARA) | 1.62280 | 57.05 | 1.61949 | 1.63041 | 1.63637 | −0.0021 | Positive member of G3 doublet |
| L32 | S-TIH1 (OHARA) | 1.71736 | 29.52 | 1.71033 | 1.73463 | 1.74933 | +0.0108 | Negative member of G3 doublet |
| L33 | S-TIH6 (OHARA) | 1.80518 | 25.42 | 1.79611 | 1.82777 | 1.84729 | +0.0155 | Positive stop-adjacent power |
| L41 | S-TIM5 (OHARA) | 1.60342 | 38.03 | 1.59875 | 1.61462 | 1.62388 | +0.0037 | Rear diverging element |
| L42 | S-LAH64 (OHARA) | 1.78800 | 47.37 | 1.78300 | 1.79963 | 1.80888 | −0.0079 | High-index rear positive |

The chromatic correction is concentrated in G1. Condition (5) requires a plurality of first-group positive lenses with νd ≥ 80; Example 1 uses L12 at νd = 81.54 and L14 at νd = 94.93. The high-νd positives are paired with the dense-flint L13, so the front group acts as the main axial-color and secondary-spectrum correction block. The patent does not call the design apochromatic, and the prescription should not be described as such. The defensible statement is that it is a strongly corrected telephoto using ED and Super-ED front-group correction.

## Focus Mechanism

The lens uses two-group internal focusing. G1 and G4 are fixed. During movement from infinity toward the near object distance, G2 moves toward the image and G3, together with the aperture stop, moves toward the object. The mechanical length of the optical assembly is therefore fixed.

The patent-published Example 1 variable spacings are the endpoint for β = −0.15 at 1.2 m. The data file uses the same relative focus path but stops earlier at the manufacturer-specified 1.4 m production close focus. The interpolation factor along the patent travel is t = 0.846934515.

| Variable space | Location | Infinity (mm) | Patent endpoint, β = −0.15 / 1.2 m (mm) | Data endpoint, 1.4 m production spec (mm) |
|---|---|---:|---:|---:|
| d8 | G1 → G2 | 1.0000 | 3.7306 | 3.312639 |
| d11 | G2 → G3 | 29.7593 | 8.5359 | 11.784470 |
| d17 | Stop → G4 | 2.5000 | 20.9928 | 18.162191 |

At the patent endpoint, the traced object-to-image conjugate is 1206.7 mm and the transverse magnification is −0.1509, matching the patent's nominal 1.2 m / β = −0.15 statement. At the production/data endpoint, the traced object-to-image conjugate is 1400.0 mm and the transverse magnification is −0.1261, which rounds to the official 0.13× maximum magnification.

## Aspherical Surfaces

The patent Example 1 prescription is all-spherical. No aspherical coefficients are published and the data file therefore uses `asph: {}`.

## Conditional Expressions

The patent states seven conditions and tabulates the first six for Examples 1–3. The following values are independently recomputed from the Example 1 prescription unless otherwise noted.

| Condition | Patent form | Patent Ex. 1 value | Recomputed value | Comment |
|---|---|---:|---:|---|
| (1) | 0 < \|ΔG2 / ΔG3\| < 0.3 | 0.15 | 2.7306 / 18.4928 = 0.1477 | Opposed internal-focus group travel |
| (2) | −0.1 < f / f2 < 0.4 | 0.07 | 149.501 / 2002.763 = 0.0746 | G2 is near-afocal |
| (3) | 0.2 < R41 / R42 < 0.8 | 0.37 | 38.839 / 104.607 = 0.3713 | Rear-group radius balance |
| (4) | 0.5 < R32 / R31 < 1.5 | 0.83 | 30.722 / 36.976 = 0.8309 | G3 cemented-doublet outer faces |
| (5) | νd ≥ 80 for plural G1 positives | 94.93, 81.54 | L14 = 94.93; L12 = 81.54 | ED / Super-ED front correction |
| (6) | −1.7 < f / f4 < −0.5 | −1.33 | see note | Patent group-focal convention differs from isolated group value |

Condition (6) uses the patent's own group-focal convention. If G4 is computed as an isolated thick group in air, f4 = −199.0 mm and f/f4 = −0.751. That still satisfies the published inequality but does not reproduce the patent's tabulated −1.33. The discrepancy is systematic and reflects the difference between isolated thick-group focal length and the in-system group-power convention used by the patent.

Condition (5-2), which is not listed in the per-example table, is also satisfied: the lens nearest the object is L11 with νd = 70.23, below 80. Condition (7) is likewise satisfied: the patent's half angle of view is 4.4°, within the specified 2° < ω < 8° range.

## Verification Summary

The prescription was rechecked by independent paraxial ray trace using a y / n·u matrix formulation.

| Quantity | Verified value | Reference value / implication |
|---|---:|---|
| Infinity EFL | 149.501486 mm | Patent Example 1 gives f = 149.5 mm |
| Half-field from FIY = 11.45 mm | 4.3796° | Patent gives ω = 4.4° |
| Petzval sum, surface-by-surface Σφ/(n·n′) | 1.134526 × 10⁻³ mm⁻¹ | Petzval radius ≈ 881.4 mm; normalized EFL·P ≈ 0.1696 |
| Stop semi-diameter for F/2 marginal ray | 14.02495 mm | Data file uses 14.025 mm |
| Patent endpoint magnification | −0.1509 | Patent β = −0.15 |
| Patent endpoint object-to-image conjugate | 1206.7 mm | Patent nominal nearest distance 1.2 m |
| Production/data endpoint magnification | −0.1261 | Official maximum magnification 0.13× |
| Production/data endpoint conjugate | 1400.0 mm | Official closest focusing distance 1.4 m |
| Air-equivalent rear path after surface 21 | 44.577741 mm | Folds dust/IR/OLPF/cover-glass plates into BFD |

The inferred semi-diameters were checked against the F/2 marginal ray, an off-axis chief-ray trace, a maximum front clear aperture of 41.0 mm corresponding to the 82 mm filter class, element front/rear semi-diameter ratios, and signed cross-gap sag clearance. The two tightest air spaces are the front-group 3.06 mm gap and the G3 doublet-to-L33 3.10 mm gap; both retain positive edge clearance under the stored semi-diameters.

## Sources

- US 7,408,719 B2, *Telephoto Lens, Telephoto Lens System, and Imaging System Incorporating the Same* (Olympus Corporation; inventor Takeshi Hosoya; application 11/085,094; filed 2005-03-22; granted 2008-08-05). Primary source for Example 1 prescription, group movement, variable spacings, and conditional expressions.
- OM Digital Solutions / Olympus China, *2016 Lens and Accessory Product Book*, specification table for ZUIKO DIGITAL ED 150mm f/2.0. Used for production hard specifications: 300 mm equivalent field, 9 groups / 11 elements, 8.2° angle of view, 9-blade circular aperture, closest focusing distance 1.4 m, maximum magnification 0.13×, minimum aperture f/22, 82 mm filter thread, and Four Thirds system context.
- OHARA optical glass catalog and individual glass data sheets for S-FSL5, S-FPL51, S-TIH11, S-FPL53, S-LAM2, S-BSM10, S-TIH1, S-TIH6, S-TIM5, and S-LAH64. Used for d-line glass identification and C/F/g-line dispersion fields.
- HOYA Optical Glass Cross Reference Index. Used only for class-equivalent notes such as S-FPL51 / FCD1 and S-FPL53 / FCD100; the stored glass labels remain OHARA because the patent values match OHARA catalog entries directly.
