# FUJIFILM FUJINON XF 30mm f/2.8 R LM WR Macro — Patent Example 1 Analysis

## Patent Reference and Design Identification

**Patent:** CN 116500768 A\
**Application Number:** 202310078238.5\
**Priority:** JP 2022-011184, 2022-01-27\
**Filed:** 2023-01-19\
**Published:** 2023-07-28\
**Inventor:** Yuya Hirakawa (平川友也)\
**Applicant:** FUJIFILM Corporation (富士胶片株式会社)\
**Title:** Imaging lens and imaging apparatus (成像镜头及摄像装置)\
**Embodiment analyzed:** Example 1

The prescription is transcribed from Example 1 of CN 116500768 A. The patent describes a compact macro imaging lens in
which only the negative second group moves during focusing, while the first and third groups remain fixed relative to the
image plane [1, ¶0089–¶0094, ¶0313–¶0317]. The implemented data uses the patent's Example 1 optical surfaces 1–21 as
lens surfaces and models the source's rear plane-parallel optical member PP (surfaces 22–23), which the patent
identifies as a filter and/or cover-glass placeholder without refractive power [1, ¶0088; Table 1], as a rear plate that
is traced but not drawn.

The link between Example 1 and the production FUJINON XF30mmF2.8 R LM WR Macro is a strong research correlation rather
than manufacturer-confirmed patent attribution. No FUJIFILM source located for this dossier explicitly states that
CN 116500768 A Example 1 is the production prescription. The correlation rests on several independent matches:

1. **Element/group count.** Example 1 contains 11 physical lens elements in 9 air-separated lens components; FUJIFILM
   specifies 11 elements in 9 groups for the production lens [1, ¶0313–¶0317; Table 1] [2] [3].
2. **Aspherical-element count.** Example 1 places aspherical surfaces on L11, L17, and L31, i.e. three physical
   aspherical elements; FUJIFILM specifies three aspherical elements [1, Table 3] [2] [3].
3. **ED-element count.** L14 and L16 both use the `nd = 1.49700`, `νd = 81.54` coordinate pair, matching the
   S-FPL51/FCD1-class ED region; FUJIFILM specifies two ED elements [1, Table 1] [2] [3]. The supplier or melt is not
   established by the patent.
4. **Focal length and field.** The verified infinity EFL is 29.109243840 mm and the patent prints a 50.52° maximum total
   angle for Example 1; FUJIFILM markets the product as 30 mm with a 50.7° angle of view [1, Table 2] [2] [3].
5. **APS-C coverage.** Example 1 prints a maximum image height of 14.2 mm, corresponding to a 28.4 mm image diameter,
   consistent with the XF system's APS-C format [1, Table 2] [2] [3].
6. **Focus architecture.** Example 1 moves only the three-element G2 assembly L21–L23; FUJIFILM describes an inner-focus
   system in which three focusing elements are driven by a linear motor [1, ¶0093, ¶0314] [2].
7. **Macro endpoint.** With the published closest-focus spacings and the patent's 18.2 mm object distance from the first
   optical surface, the verified model gives transverse magnification `−1.000034724`, effectively 1:1 at source
   precision. FUJIFILM specifies 1.0× maximum magnification and a 0.10 m minimum focus distance measured from the focal
   plane [1, ¶0087, Table 2, Table 25] [2] [3]. These distances use different reference planes and are not numerically
   interchangeable.
8. **Timing.** The Japanese priority date is 2022-01-27. FUJIFILM’s official Mall listing gives a 2022-11-25 release
   date for the production lens [1, front page] [4].

The production lens is marketed as 30 mm f/2.8. The patent design value used by the verified optical model is
29.109243840 mm at infinity with design FNo = 2.9. These are kept as separate marketing and design quantities.

## Optical Architecture

Example 1 is a three-group internal-focus macro design with the power sequence **G1 positive — G2 negative — G3
positive**. G1 itself is split around the aperture stop into **G1A negative — stop — G1B positive**. The patent states
that the alternating positive/negative group powers permit a stronger focusing group and reduced focus travel, while the
internal stop subdivision supports compactness and aberration control [1, ¶0089–¶0109].

The verified isolated-group paraxial powers, computed from the final data revision at the d line, are:

| Group | Composition | Isolated EFL | Power |
|---|---|---:|---:|
| G1A | L11–L13 | −139.442129 mm | −0.007171434 mm⁻¹ |
| G1B | L14–L17 | +18.115643 mm | +0.055200912 mm⁻¹ |
| G1 | G1A + stop region + G1B | +13.826625 mm | +0.072324230 mm⁻¹ |
| G2 | L21–L23, focusing | −21.527811 mm | −0.046451542 mm⁻¹ |
| G3 | L31 | +60.767271 mm | +0.016456227 mm⁻¹ |

These are isolated group quantities, not additive contributions to the assembled system. The assembled infinity EFL is
29.109243840 mm. The physical distance from the first lens vertex to the image plane, including the PP plate, is
82.006 mm; its air-equivalent (PP thickness counted as 2.850/1.51680) is 81.034955696 mm. The air-equivalent paraxial
back focal distance from surface 21A is 20.702836598 mm, or 21.673881 mm physically through the plate.

The aperture stop lies between L13 and L14 at the patent-published axial station. Its physical diameter is not published.
The data therefore uses a modeled stop semi-diameter of 6.550410636 mm, calibrated so that the normalized infinity model
has F/2.9. Agreement with F/2.9 is a calibration result, not independent evidence of the physical production iris.

The source PP plate after L31 is modeled in the data file's `rearPlates` field: it is traced by every analysis but not
drawn and not counted as a lens element. The source path from surface 21 to the image plane is 17.731 mm of air, 2.850
mm of `nd = 1.51680`, `νd = 64.20` plate glass (θgF 0.53430), and 1.094 mm of air, and the data stores those values
directly. The plate has no power, so EFL and paraxial focus are the same as for its air-equivalent path of
20.703955696203 mm; it does add its own small spherical aberration, astigmatism and axial colour to the converging
image-side beam, as the patent design includes.

The data-file semi-diameters use the published Table 1 effective diameters divided by two. ED describes the effective ray diameter over the focus range [1, ¶0242–¶0245], not the larger mechanical rims drawn in Fig. 1. The earlier 0.30–0.40 mm padding has been removed; the optical model now preserves the source aperture limits.

## Element-by-Element Analysis

### L11 — Negative Meniscus, Two Aspherical Surfaces

`nd = 1.58254`, `νd = 59.44`. Glass: **583594 low-Tg crown class (supplier unconfirmed)**. Standalone
`f = −20.548862 mm`.

L11 is the front element of the fixed negative subgroup G1A. Both of its surfaces, 1A and 2A, are aspherical. The patent
specifically notes that an asphere on the most object-side lens component of G1A is advantageous for distortion
correction [1, ¶0100]. That statement supports the architectural role of the front asphere; it does not establish a
separable numerical distortion contribution for L11 alone.

The standalone negative power quoted above is an isolated thick-lens calculation. In the assembled system L11 works with
L12 and L13 as the weakly negative G1A subgroup, whose verified isolated EFL is −139.442129 mm.

### L12 — Negative Meniscus

`nd = 1.51633`, `νd = 64.14`. Glass: **516641 crown / S-BSL7-class (supplier unconfirmed)**. Standalone
`f = −44.699621 mm`.

L12 is the second negative element of G1A. Example 1 implements the patent's described negative-negative-positive G1A
sequence [1, ¶0099, ¶0314]. The patent discusses the subgroup configuration as an aberration-correction choice, but does
not assign a unique aberration budget to L12 individually.

The class label is based on the patent's d-line coordinates and catalog cross-checking. It is not a supplier attribution.

### L13 — Biconvex Positive

`nd = 1.80611`, `νd = 33.29`. Glass: **806333 high-index flint class (supplier unconfirmed)**. Standalone
`f = +18.807929 mm`.

L13 is the positive rear element of G1A and immediately precedes the aperture stop. The patent states that inclusion of a
positive lens in G1A is favorable for distortion and lateral chromatic correction [1, ¶0097]. Example 1 realizes that
condition with L13, but the benefit is a subgroup-level design statement rather than a measured single-element
contribution.

Its positive power partially offsets the two preceding negative lenses, leaving G1A only weakly negative overall.

### L14 — Biconvex Positive ED-Class Element

`nd = 1.49700`, `νd = 81.54`. Glass: **497816 S-FPL51/FCD1-class ED glass (supplier unconfirmed)**. Standalone
`f = +30.540834 mm`.

L14 is the first element of positive subgroup G1B. The patent makes the Abbe number of this front positive lens an
explicit design variable: condition (3) requires `60 < ν1Bp1 < 105`, and Example 1 prints 81.54 [1, ¶0120–¶0123;
Table 25]. The patent associates that high-Abbe selection with axial-color correction while avoiding excessively low
index and overly strong curvature.

L14 is one of the two Example 1 elements sharing the `1.49700 / 81.54` ED-class coordinate pair. The data does not claim
an OHARA or HOYA supplier.

### L15 + L16 — Cemented Negative/Positive Doublet D1

**L15:** `nd = 1.77047`, `νd = 29.74`. Glass: **770297 / NBFD29-class flint (supplier unconfirmed)**.
Standalone `f = −10.585567 mm`.

**L16:** `nd = 1.49700`, `νd = 81.54`. Glass: **497816 S-FPL51/FCD1-class ED glass (supplier unconfirmed)**.
Standalone `f = +22.784496 mm`.

L15 and L16 form the cemented doublet D1 in G1B. Their cemented net EFL is **−24.789291 mm**; this value is calculated
through the actual cemented interface and is not the sum of the two standalone powers.

The patent explicitly prefers a negative/positive cemented pair in G1B because the pairing can suppress chromatic
variation as object distance changes [1, ¶0101, ¶0129–¶0143]. Conditions (5)–(7) are written around the index, Abbe, and
partial-dispersion contrasts of this pair. Example 1 reproduces the printed condition values within the stated source
precision for all three conditions.

L16 is the second `1.49700 / 81.54` ED-coordinate element in the design. The use of two ED-class positions is consistent
with the production specification of two ED elements, but supplier identity remains unproven.

### L17 — Biconvex Positive, Two Aspherical Surfaces

`nd = 1.69350`, `νd = 53.20`. Glass: **694532 lanthanum crown / M-LAC130-class (supplier unconfirmed)**.
Standalone `f = +17.166701 mm`.

L17 closes G1B and carries aspheres on both surfaces 13A and 14A. G1B as a whole is strongly positive at
`f = +18.115643 mm`. The patent discusses a positive rear element in G1B and uses state-dependent beam-diameter condition
(4) to constrain the transition into that element [1, ¶0124–¶0128].

Condition (4) is not treated as independently reproduced in this model because it depends on state-dependent effective
beam diameters while the physical stop and clear apertures are inferred. The prescription therefore preserves the source
value without presenting the modeled aperture as equivalent source evidence.

### L21 — Biconvex Positive, Front of the Focusing Group

`nd = 1.98613`, `νd = 16.48`. Glass: **986165 high-index flint / FDS16-W-class (supplier unconfirmed)**.
Standalone `f = +56.770690 mm`.

L21 is the first positive element of the translating G2 focus group. The patent prefers at least one, and more preferably
at least two, positive lenses in G2 to suppress chromatic variation as object distance changes [1, ¶0103–¶0105]. Example 1
contains the positive L21 and L22 followed by negative L23.

Condition (9) constrains the minimum Abbe number among G2's positive lenses to `10 < ν2min < 22`; Example 1 gives
`ν2min = 16.48`, matching the patent's condition table [1, ¶0148–¶0151; Table 25]. This is a patent-defined material
constraint, not a claim that L21 alone determines the focus group's chromatic behavior.

### L22 + L23 — Cemented Positive/Negative Doublet D2

**L22:** `nd = 1.67270`, `νd = 32.17`. Glass: **673322 dense flint / H-ZF2-class (supplier unconfirmed)**.
Standalone `f = +73.898630 mm`.

**L23:** `nd = 1.88300`, `νd = 39.22`. Glass: **883392 lanthanum flint / H-ZLaF68N-class (supplier unconfirmed)**.
Standalone `f = −12.612466 mm`.

L22 and L23 form the cemented D2 doublet. Its cemented net EFL is **−15.123024 mm**. Together with L21 it produces the
negative G2 group power, whose isolated EFL is **−21.527811 mm**.

The patent explicitly recommends a positive/negative cemented pair in G2 as part of the strategy for limiting chromatic
variation with focus [1, ¶0104–¶0105, ¶0176–¶0197]. Conditions (16)–(20) constrain the pair's index, Abbe, and
partial-dispersion relations. Example 1 reproduces those printed values within source precision.

### L31 — Positive Meniscus, Two Aspherical Surfaces

`nd = 1.51633`, `νd = 64.06`. Glass: **516641 low-Tg crown / L-BSL7-class (supplier unconfirmed)**. Standalone
`f = +60.767271 mm`.

L31 is the sole element of fixed group G3 and carries aspheres on both surfaces 20A and 21A. The patent states that a
fixed third group behind the focus group can assist correction of field curvature, and that using one lens component in
G3 supports a shorter system length [1, ¶0107–¶0110]. Example 1 implements the one-component form as a single positive
meniscus.

The final rear spacing in the data is the raw source distance, 17.731 mm, from surface 21A to the PP plate; the plate
and the 1.094 mm of air behind it are stored in `rearPlates`.

## Glass Identification / Selection

The patent publishes d-line refractive index `nd`, Abbe number `νd`, and partial-dispersion ratio `θgF`; it does not name
suppliers or glass melts [1, Table 1]. Catalog research therefore supports coordinate classes and candidate families, not
manufacturer-specific assignments. The final data retains patent `nd`/`νd` and derives `dPgF` directly from Table 1 as `θgF − (0.6438 − 0.001682νd)`. No catalog-derived `nC`/`nF`/`ng` overrides are authored.

| Element(s) | nd | νd | Data-file glass identification | Evidence status |
|---|---:|---:|---|---|
| L11 | 1.58254 | 59.44 | 583594 low-Tg crown class | Supplier unconfirmed |
| L12 | 1.51633 | 64.14 | 516641 crown / S-BSL7-class | Coordinate-class match; supplier unconfirmed |
| L13 | 1.80611 | 33.29 | 806333 high-index flint class | Multiple catalog candidates; supplier unconfirmed |
| L14, L16 | 1.49700 | 81.54 | 497816 S-FPL51/FCD1-class ED glass | Exact ED-class coordinates; supplier unconfirmed |
| L15 | 1.77047 | 29.74 | 770297 / NBFD29-class flint | Coordinate-class match; supplier unconfirmed |
| L17 | 1.69350 | 53.20 | 694532 lanthanum crown / M-LAC130-class | Candidate class; supplier unconfirmed |
| L21 | 1.98613 | 16.48 | 986165 high-index flint / FDS16-W-class | Exact coordinate class; supplier unconfirmed |
| L22 | 1.67270 | 32.17 | 673322 dense flint / H-ZF2-class | Exact coordinate class; supplier unconfirmed |
| L23 | 1.88300 | 39.22 | 883392 lanthanum flint / H-ZLaF68N-class | Exact coordinate class; supplier unconfirmed |
| L31 | 1.51633 | 64.06 | 516641 low-Tg crown / L-BSL7-class | Coordinate-class match; supplier unconfirmed |

The catalog audit covered OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA sources [5]–[10]. The distinction between OHARA
S- and L-prefix families is retained where relevant; L31's low-Tg 516641 class is not silently collapsed into the S-BSL7
entry used as a coordinate comparison for L12.

All eleven elements carry the patent-derived `dPgF`. L14 and L16 have ΔPgF = +0.03083028 and receive patent-backed APD coloring. L21 has ΔPgF = +0.04949936: it is an anomalous high-dispersion flint, not an ED element. These tags describe measured material dispersion, not an APO-performance claim. The other elements retain their standard/high-index colors.

The catalog now includes OHARA L-BSL7, using the vendor's July 2026 Sellmeier constants. L31 explicitly resolves to this low-softening-temperature proxy rather than S-BSL7; its θgF ≈ 0.53343 also agrees with the patent's 0.53345. Production supplier identity remains unconfirmed.

## Focus Mechanism

Focus status is **PUBLISHED**. No internal focus reconstruction is used. G1 and G3 remain fixed relative to the image
plane; only G2, comprising L21–L23, translates as a rigid unit toward the image as focus moves from infinity to the
closest published state [1, ¶0089–¶0094, ¶0314; Fig. 2; Table 2].

| State | DD14: L17→G2 | DD19: G2→G3 | G2 displacement from infinity |
|---|---:|---:|---:|
| Infinity | 2.301 mm | 13.210 mm | 0 mm |
| Closest published state | 10.754 mm | 4.757 mm | +8.453 mm imageward |

The two adjacent gaps sum to 15.511 mm at both endpoints, confirming rigid G2 translation at the printed precision. The
verified model reproduces an 8.453 mm group travel exactly from the published spacings.

At the closest patent state, the object is 18.2 mm in front of the first lens surface [1, ¶0087, ¶0317]. Using that
source object plane together with the final normalized data gives transverse magnification `−1.000034724`, consistent
with the patent's 1.0× condition at source precision. The system's d-line EFL changes from 29.109243840 mm at infinity to
19.101214831 mm at the closest published spacing state. This is an assembled-system first-order result; it is not a
claim that the production lens reports a variable marked focal length.

FUJIFILM describes the production lens as an inner-focus design in which three focusing elements are driven by a
high-precision linear motor [2]. That mechanical description converges strongly with Example 1's three-element G2 motion,
but it does not itself identify this patent example as the production prescription.

## Aspherical Surfaces

Example 1 has six aspherical surfaces on three physical elements: **1A and 2A on L11, 13A and 14A on L17, and 20A and
21A on L31** [1, Table 3].

The patent writes the conic term as

`Zd = C h² / [1 + sqrt(1 − KA C² h²)] + Σ Am h^m`.

LensVisualizer uses the standard denominator containing `(1 + K)`, so the conversion is `K = KA − 1`. Every Example 1
asphere has `KA = 1`, therefore every implemented conic constant is `K = 0`. No uniform scaling is applied (`s = 1`), so
the published polynomial coefficients are retained without dimensional rescaling. The patent uses radial height `h`; the
nonzero odd powers on surfaces 20A and 21A therefore remain rotationally symmetric and do not imply decenter or anamorphic
shape [1, ¶0318–¶0325; Table 3].

The implemented coefficients are:

### Surface 1A — L11 front

```text
K   =  0
A4  =  1.4396948e-05
A6  = -7.5963315e-07
A8  = -2.2725354e-09
A10 =  7.2019214e-10
A12 = -2.1291689e-11
A14 =  2.8269476e-13
A16 = -1.4725889e-15
```

### Surface 2A — L11 rear

```text
K   =  0
A4  = -4.0187236e-05
A6  = -3.8178518e-07
A8  = -5.4098636e-08
A10 =  2.3495932e-09
A12 = -4.9163190e-11
A14 =  4.9032401e-13
A16 = -1.7126359e-15
```

### Surface 13A — L17 front

```text
K   =  0
A4  = -1.7843847e-05
A6  = -6.5995223e-08
A8  =  1.8437096e-09
A10 = -2.5347955e-11
A12 =  1.5476592e-13
A14 =  1.1527442e-16
A16 = -4.4874977e-18
```

### Surface 14A — L17 rear

```text
K   =  0
A4  =  3.8791719e-05
A6  = -1.4891402e-07
A8  =  3.5802063e-09
A10 = -4.1769287e-11
A12 =  2.0464846e-13
A14 =  6.0430443e-16
A16 = -7.4079572e-18
```

### Surface 20A — L31 front

```text
K   =  0
A4  = -2.2626567e-06
A5  = -7.0952262e-07
A6  =  1.4860493e-07
A7  = -4.3810692e-09
A8  = -5.4028261e-10
A9  =  6.3776223e-12
A10 =  1.4554305e-12
A11 =  3.5058198e-13
A12 =  9.7555868e-15
A13 = -1.7508595e-15
A14 = -1.4774613e-17
A15 = -1.5738626e-17
A16 = -9.6280788e-19
A17 =  4.3535877e-20
A18 =  1.1041635e-20
A19 =  2.3670175e-21
A20 = -2.0340105e-22
```

### Surface 21A — L31 rear

```text
K   =  0
A4  = -1.4960212e-05
A5  =  5.0389048e-06
A6  = -4.8304387e-07
A7  = -8.0620131e-10
A8  =  1.4080434e-09
A9  =  7.9810471e-11
A10 =  1.3654881e-12
A11 = -5.2410713e-13
A12 = -3.7873139e-14
A13 = -2.0502988e-15
A14 =  5.2818284e-17
A15 =  1.5352864e-17
A16 =  1.3005284e-18
A17 =  5.0895333e-20
A18 = -1.5766933e-21
A19 = -2.8173143e-23
A20 = -4.2744026e-23
```

The numerical audit evaluates the complete aspheric sag and actual rim slope at the modeled semi-diameters. The largest
modeled aspheric rim slope is below the project's 64.2° policy threshold. These geometry checks validate the authored
model; they do not establish FUJIFILM's production clear-aperture dimensions or manufacturing process.

## Chromatic Correction Strategy

The patent repeatedly treats chromatic stability over object distance as a central constraint. Three features are directly
supported by the source rather than inferred from generic glass behavior:

- G1B uses the cemented negative/positive D1 pair L15+L16, with explicit conditions on `nd`, `νd`, and `θgF`
  differences [1, ¶0129–¶0143].
- G2 contains two positive lenses and the cemented positive/negative D2 pair L22+L23, again with explicit index, Abbe,
  and partial-dispersion conditions [1, ¶0103–¶0105, ¶0176–¶0197].
- L14 and L16 occupy the high-Abbe `1.49700 / 81.54` ED-class positions, matching the production lens's published count
  of two ED elements [1, Table 1] [2] [3].

These facts support a deliberate chromatic-correction strategy, particularly against focus-dependent color change. They
do not by themselves establish apochromatic performance. Compatible catalog curves supply the C/d/F shape while the patent-derived `dPgF` controls the g-line; no production supplier identity or complete measured line-index set is claimed.

## Conditional Expressions

CN 116500768 A gives a large set of design inequalities in ¶0111–¶0307. The table below reproduces the primary form of
each numbered condition and gives the final independent replay disposition for Example 1. `MATCH` means the recomputed
value agrees with the patent's printed Example 1 condition table to the stated source-precision tolerance. `DISCREPANCY`
means the literal prescription and definition do not reproduce the printed table value. `SOURCE ONLY` is reserved for a
condition whose required state-dependent effective-ray quantity cannot be independently recovered from the published
static prescription alone. `N/A` means Example 1 lacks the required structure.

| Cond. | Patent inequality | Example 1 replay |
|---:|---|---|
| 1 | `0.45 < |β|` | MATCH: 1.000035; table 1.0 |
| 2 | `−15 < f1A/f1B < −1.7` | **DISCREPANCY:** −7.697333; table −3.068 |
| 3 | `60 < ν1Bp1 < 105` | MATCH: 81.54 |
| 4 | `0.5 < DMpa/DMp < 1` | SOURCE ONLY: table 0.931; state-dependent effective beam diameters |
| 5 | `−0.5 < N1Bp−N1Bn < 0` | MATCH: −0.27347 |
| 6 | `30 < ν1Bp−ν1Bn < 70` | MATCH: 51.80; table 51.81 |
| 7 | `−0.1 < θ1Bp−θ1Bn < −0.03` | MATCH: −0.05766 |
| 8 | `0 < f/f1B < 4` | **DISCREPANCY:** 1.606857; table 0.641 |
| 9 | `10 < ν2min < 22` | MATCH: 16.48 |
| 10 | `−6 < (1−β2i²)βri² < −2` | MATCH: −3.992067; table −3.992 |
| 11 | `−0.3 < f/f3 < 0.8` | MATCH: 0.479028; table 0.479 |
| 12 | `0.35 < Expm/Expi < 1` | **DISCREPANCY:** 0.637046; table 0.682 |
| 13 | `0.2 < f/f1 < 4` | **DISCREPANCY:** 2.105304; table 0.664 |
| 14 | `0 < (R1f+R1r)/(R1f−R1r) < 3` | MATCH: 1.092141; table 1.092 |
| 15 | `0.3 < Bf/(f·tanωi) < 4` | MATCH: 1.507384; table 1.507 |
| 16 | `−0.6 < N2p−N2n < −0.1` | MATCH: −0.21030 |
| 17 | `−20 < ν2p−ν2n < 50` | MATCH: −7.05 |
| 18 | `−0.3 < θ2p−θ2n < 0.15` | MATCH: 0.02537 |
| 19 | `1.75 < N2n < 2.2` | MATCH: 1.883 |
| 20 | `20 < ν2n < 40` | MATCH: 39.22 |
| 21 | `0 < (R3f+R3r)/(R3f−R3r) < 2` | MATCH: 1.173702; table 1.174 |
| 22 | `0.05 < M2/f < 0.5` | MATCH: 0.290389; table 0.29 |
| 23 | `0 < D1St/TL < 0.4` | MATCH: 0.145246; table 0.145 |
| 24 | `−1 < f/f1A < 0` | MATCH: −0.208755; table −0.209 |
| 25 | `0.03 < M2/TL < 0.3` | **DISCREPANCY:** 0.104313; table 0.103 |
| 26 | `0 < (R2f−R2r)/(R2f+R2r) < 3` | **DISCREPANCY:** 0.974367; table −0.160 |
| 27 | `−2.5 < f/f2 < 0` | MATCH: −1.352169; table −1.352 |
| 28 | `−1.5 < f1/f2 < 0` | **DISCREPANCY:** −0.642268; table −0.636 |
| 29 | `−1 < f1/f3 < 2` | **DISCREPANCY:** 0.227534; table 0.722 |
| 30 | `−0.5 < f2/f3 < 0.5` | MATCH: −0.354267; table −0.354 |
| 31 | `0.035 < Z2min < 0.13` | **DISCREPANCY:** 0.074125 from patent ED/radii; table 0.086 |
| 32 | `−5 < (1−β2m²)βrm² < −1` | MATCH: −2.963159; table −2.968 |
| 33 | `0.5 < ED3m/ED3i < 1` | SOURCE ONLY: table 0.798; state-dependent effective diameters |
| 34 | `0 < D2min/TL < 0.05` | MATCH: 0.006170; table 0.006 |
| 35 | `−0.7 < N3p−N3n < 0` | N/A: G3 is not a cemented positive/negative component |
| 36 | `5 < ν3p−ν3n < 80` | N/A |
| 37 | `−0.2 < θ3p−θ3n < 0` | N/A |
| 38 | `1.3 < N3p < 1.7` | N/A |
| 39 | `−20 < (R1Bf+R1Br)/(R1Bf−R1Br) < 0` | MATCH: −4.862892; table −4.863 |
| 40 | `0 < N1Ap−N1An < 0.5` | N/A: G1A has no cemented negative/positive pair |
| 41 | `−50 < ν1Ap−ν1An < 0` | N/A |
| 42 | `0 < θ1Ap−θ1An < 0.1` | N/A |
| 43 | `−0.3 < (R1Baf−R1Bar)/(R1Baf+R1Bar) < 0.6` | MATCH: 0.237467; table 0.237 |
| 44 | `−0.4 < (R2af−R2ar)/(R2af+R2ar) < 0.4` | MATCH: −0.160305; table −0.160 |
| 45 | `0 < D1Bmin/TL < 0.05` | MATCH: 0.006540; table 0.007 |
| 46 | `20° < arctan(Ymax/f) < 60°` | MATCH: 26.003932° from source Ymax = 14.2 mm; table 26.00° |

The discrepancies are retained rather than reconciled by modifying the prescription. Conditions 2, 8, and 13 depend on
G1A/G1B/G1 focal quantities; the literal surfaces reproduce both headline EFL states but not those printed derived rows.
Condition 25 becomes 0.103078 when the patent's raw geometric track is used instead of its stated air-equivalent `TL`,
which explains the printed 0.103 without changing the normalized model. Condition 26 is especially conspicuous: its text
defines an outer-G2 radius factor that evaluates to 0.974367, while the printed −0.160 matches the separate G2 air-lens
shape factor used by condition 44. Condition 31 is likewise a direct source replay: the patent-defined `ED` values and
outer radii give `Z2min = 0.074125`, not the printed 0.086. These are treated as source-table inconsistencies, not
data-file corrections.

## Verification Summary

The final data revision was reloaded through a TypeScript compiler AST and all quantitative checks were recomputed from
the parsed payload. A source-first reduced-angle baseline and a separately assembled ABCD implementation agree to
floating-point precision. The principal verified values are:

| Quantity | Verified result | Basis |
|---|---:|---|
| Infinity EFL | 29.109243840 mm | Final data, d line, infinity state |
| Closest-state EFL | 19.101214831 mm | Final data, d line, published closest gaps |
| Infinity BFD | 20.702836598 mm | From surface 21A vertex, air-equivalent (21.673881 mm physically through PP) |
| Rear air-equivalent spacing | 20.703955696203 mm | 17.731 + 2.850/1.51680 + 1.094; PP is modeled in `rearPlates` |
| Closest transverse magnification | −1.000034724 | Published 18.2 mm object plane + final normalized model |
| G2 focus travel | 8.453 mm imageward | Published DD14/DD19 endpoints |
| Petzval sum | +0.005632207838 mm⁻¹ | Surface-by-surface `φ/(n·n′)` |
| Modeled stop semi-diameter | 6.550410636 mm | Calibrated to design F/2.9; inferred |
| Modeled minimum element edge thickness | 1.014034 mm | Final modeled semi-diameters |
| Maximum actual rim slope | 38.154° | Final spherical/aspherical geometry |
| Maximum positive cross-gap intrusion | 0.624259 of gap | Below the 0.90 policy limit |
| Infinity front principal plane H1 | +29.253435 mm from surface 1 vertex | Final data, d line |
| Infinity rear principal plane H2 | −8.406407 mm relative to surface 21A vertex | Final data, d line |
| Infinity exit pupil | −104.809145 mm relative to surface 21A vertex | Paraxial pupil image |
| `TL/EFL` | 2.783822 | Air-equivalent TL; not telephoto (`TL/EFL > 1`) |
| `BFD/EFL` | 0.711212 | Air-equivalent BFD; not retrofocus (`BFD/EFL < 1`) |

Portable exact meridional tracing sampled infinity, an interpolation midpoint, and the closest state. Forty-eight of 54
sampled rays passed; six extreme off-axis samples clipped at air-facing surfaces 8, 9, or 10. There were no on-axis clips,
no cemented-interface or stop clips, and no solver failures. This is a portable independent chat check, not the
LensVisualizer production tracer or renderer.

These portable calculations do not substitute for the real LensVisualizer project toolchain. `buildLens()`,
`validateLensData()`, project `LensDataInput` type checking, project Prettier execution, runtime glass resolution, and
the subsequent repository integration audit passes the shared surface, image-circle, and render-diagnostics checks.

## Sources / References

1. **CN 116500768 A**, *Imaging lens and imaging apparatus* (成像镜头及摄像装置), FUJIFILM Corporation,
   inventor Yuya Hirakawa (平川友也), published 2023-07-28. Example 1; especially ¶0087–¶0110, ¶0111–¶0307,
   ¶0313–¶0325, Tables 1–3 and 25–26, Figures 1–3.
2. **FUJIFILM X Series**, “FUJINON XF30mmF2.8 R LM WR Macro” product page:
   https://www.fujifilm-x.com/en-us/products/lenses/xf30mmf28-r-lm-wr-macro/
3. **FUJIFILM**, *FUJINON XF30mmF2.8 R LM WR Macro Owner Manual / Specifications*:
   https://dl.fujifilm-x.com/support/manual/lenses/lens_xf30mmf28_r_lm_wr_macro_02.pdf
4. **FUJIFILM Mall Japan**, FUJINON XF30mmF2.8 R LM WR Macro listing, including 2022-11-25 release date:
   https://mall-jp.fujifilm.com/shop/g/g16792576/
5. **OHARA INC.**, optical-glass catalog and glass-type data: https://www.ohara-inc.co.jp/en/product/01000/
6. **HOYA Corporation Optics Division**, optical-glass cross-reference and product data:
   https://www.hoya-opticalworld.com/english/products/crossreference.html
7. **SCHOTT Advanced Optics**, *Optical Glass Collection Datasheets*:
   https://www.us.schott.com/shop/medias/schott-optical-glass-collection-datasheets-english-us-march2018.pdf
8. **HIKARI Glass Co., Ltd.**, general optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-lasf/
9. **CDGM Glass Co., Ltd.**, optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=28&url=database
10. **SUMITA Optical Glass, Inc.**, optical-glass data downloads: https://www.sumita-opt.co.jp/en/download/
