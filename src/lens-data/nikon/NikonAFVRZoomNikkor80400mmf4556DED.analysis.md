# NIKON AI AF VR ZOOM-NIKKOR 80-400mm f/4.5-5.6 D ED

## Patent Reference and Design Identification

**Patent:** US 6,141,156 A
**Application Number:** 09/265,473
**Priority:** JP 10-061764, 1998-03-12
**Filed:** 1999-03-10
**Granted:** 2000-10-31
**Inventor:** Masayuki Aoki
**Assignee:** Nikon Corporation
**Title:** *Antivibration Zoom Lens*
**Embodiment analyzed:** Working Example 4

The prescription is the fixed Working Example 4 of US 6,141,156 A. The patent does not identify a commercial lens by
product name, so the production relationship is a correlation rather than a patent-stated identity. The correlation is
nevertheless unusually specific. Nikon's own design retrospective names Masayuki Aoki as optical designer of the AI AF
VR Zoom-Nikkor 80-400mm f/4.5-5.6 D ED, states that its optical design was completed in 1997 and released commercially in
November 2000, and describes a six-group positive-front zoom in which G1 focuses, G2 is fixed relative to the focal
surface, and a subset of G2 moves laterally for vibration reduction.[2]

The production lens is documented by Nikon as a 17-element, 11-group Nikon F-mount lens for the 35 mm/FX format, with a
marketed 80-400 mm range, f/4.5-5.6 designation, three ED elements, nine diaphragm blades, and a 2.3 m minimum focusing
distance.[3][4] Working Example 4 contains the same 17 elements in 11 air-separated optical units, arranged into the six
functional groups G1-G6, and covers 81.976-390.000 mm at published design f-numbers from 4.600 to 5.701.[1] Its G2B
subgroup is the laterally shifted vibration-reduction unit, while G1 is the focusing group. These converging structural,
kinematic, focal-length, aperture, inventor, and timing facts establish the selected production correlation used here;
they do not amount to an explicit Nikon statement that US 6,141,156 Working Example 4 is the production prescription.

Marketing and design quantities are therefore kept separate. The data file retains the patent at native scale with
`focalLengthDesign: [81.976, 390]` and `nominalFno: [4.6, 5.29, 5.701]`, while the production metadata remains
80-400 mm and f/4.5-5.6. No uniform scaling was applied: 81.976 and 390.000 mm cannot both be transformed to 80 and
400 mm by one scale factor.

## Optical Architecture

The optical system contains 17 physical elements in 11 air-separated optical units. Those 11 units are organized by the
patent into six functional zoom groups with power sequence **positive-negative-positive-negative-positive-negative**.
The distinction matters: the data field `groupCount: 11` follows the ordinary lens-construction count, whereas the
patent's G1-G6 notation describes the six moving or stationary functional groups.

| Functional group | Elements / units | Computed EFL | Principal role in the selected model |
|---|---|---:|---|
| G1 | L11 cemented doublet + L12 | +135.328411 mm | Positive front group; axial focusing group |
| G2 | G2A (L21), G2B (L22), G2C (L23) | -37.997623 mm | Negative fixed group containing the VR subgroup |
| G3 | L31 + L32 cemented doublet | +61.641706 mm | Positive moving zoom group |
| G4 | L41 | -229.999620 mm | Negative group fixed relative to the image plane in the published states |
| G5 | L51 cemented doublet + L52 | +59.948417 mm | Positive moving zoom group with a direction reversal |
| G6 | L61 cemented doublet | -50.082345 mm | Negative moving rear group |

The independently traced infinity states place G2 and G4 at essentially fixed positions relative to the image plane,
within the precision of Table 4B. G1, G3, and G6 move objectward as focal length increases. G5 moves objectward from the
wide to the 200 mm state, then reverses and moves imageward toward the 390 mm state. That reversal is preserved by using
all three published zoom control points rather than interpolating only between the endpoints.

Stationarity of G2 and G4 in an image-plane reference frame does not contradict the patent's statement that the
inter-group spacings change during zooming. The adjacent groups move around them, so the relevant air gaps still change.
The normalized G2-to-G4 front-vertex separation remains 68.006 mm at all three published states, with G3 moving inside
that interval.

The aperture stop is a modeling inference rather than a published numbered surface. Figure 7 and the patent text place
the stop between G3 and G4, but Table 4A gives only the unsplit S18-S19 spacing.[1] The data file inserts one neutral
`STO` 2.500000 mm objectwise of S19 and preserves the complete patent `d18` spacing as
`S18 -> STO + STO -> S19`. The modeled wide-state base stop semi-diameter is 11.841235 mm. Because the patent publishes
f-number but neither stop diameter nor exact axial location, both the stop position and physical stop radius are author
modeling inferences.

The first-order trace gives total S1-to-image tracks of 215.68812, 254.73137, and 272.95884 mm at 81.976, 200, and
390 mm. Under the project's strict definition, the design is telephoto only at the 390 mm state, where `track/EFL` is
0.699893. The wide and middle states have ratios above unity. None of the three published states is retrofocus because
its back focal distance never exceeds its effective focal length.

## Element-by-Element Analysis

The focal lengths in the element entries are **standalone thick-element focal lengths in air**. They are not the same as
the power of a cemented pair or the in-situ power of the functional group containing that pair. Cemented net powers and
functional-group powers quoted below were recomputed from the final prescription so that those three concepts remain
separate.

### L11 — Cemented Front Doublet

- **L11a — Negative Meniscus.** `nd = 1.805182`, `νd = 25.41`.
  Glass annotation: `805254 - dense-flint class (vendor unresolved; vd=25.41)`.
  Standalone `f = -278.611491 mm`.
- **L11b — Biconvex Positive.** `nd = 1.497820`, `νd = 82.52`.
  Glass annotation: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`.
  Standalone `f = +148.075239 mm`.

L11 is a cemented negative/positive pair whose computed cemented net focal length is +323.599779 mm. That weak positive
net contribution is only part of G1: after L12 and the internal spacing are included, G1 has a substantially stronger
computed EFL of +135.328411 mm. The high-Abbe L11b is one of the clearest low-dispersion coordinates in the patent
prescription. Nikon's production retrospective states that two ED elements are used in the first group, but the data file
does not convert that production designation into a historical vendor-glass identity that the patent does not publish.[2]

### L12 — Biconvex Positive

`nd = 1.487490`, `νd = 70.41`. Glass annotation:
`487704 - low-dispersion crown class (vendor unresolved)`. Standalone `f = +224.570387 mm`.

L12 is the separate rear positive element of G1. Together with the L11 doublet it completes the positive focusing group.
The combination illustrates why standalone element focal length cannot be read as group power: neither the +323.600 mm
cemented L11 net nor the +224.570 mm standalone L12 value equals the in-situ +135.328 mm power of the complete G1.

### L21 — Cemented Subgroup G2A

- **L21a — Positive Meniscus.** `nd = 1.805182`, `νd = 25.41`.
  Glass annotation: `805254 - dense-flint class (vendor unresolved; vd=25.41)`.
  Standalone `f = +77.560005 mm`.
- **L21b — Biconcave Negative.** `nd = 1.796310`, `νd = 40.90`.
  Glass annotation: `NBFD2 catalog equivalent (patent 796409; production supplier unspecified)`.
  Standalone `f = -55.111186 mm`.

Although L21a is positive by itself, the cemented L21 pair is negative overall: its recomputed net EFL is
-190.651026 mm. It therefore forms the first of the three negative subgroups within G2, as required by the selected
patent architecture.

### L22 — Cemented Vibration-Reduction Subgroup G2B

- **L22a — Biconcave Negative.** `nd = 1.640000`, `νd = 60.03`.
  Glass annotation: `S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)`.
  Standalone `f = -37.679975 mm`.
- **L22b — Positive Meniscus.** `nd = 1.803840`, `νd = 33.89`.
  Glass annotation: `E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)`.
  Standalone `f = +69.165175 mm`.

The cemented L22 pair has a computed net EFL of -79.994798 mm, matching the patent's `f2B = -79.995 mm` to source
precision. It is the middle negative subgroup of G2 and the subgroup shifted laterally for vibration reduction.

This pair also exposes a source-label contradiction that must not be silently normalized. The patent's general
discussion calls L22a positive and L22b negative, but the detailed element construction inherited by Example 4, Figure 7,
and the Table 4A curvatures and indices place a biconcave negative member objectwise and a positive meniscus imagewise.
The final data follows the numerical prescription and figure order. The `Na` and `Nb` values used by the patent's index-
difference condition are therefore treated as positive- and negative-material symbols rather than literal suffix mappings
to L22a and L22b.

### L23 — Biconcave Negative Subgroup G2C

`nd = 1.796681`, `νd = 45.37`. Glass annotation: `J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)`.
Standalone `f = -141.155081 mm`.

L23 is the third negative subgroup of G2. G2A, G2B, and G2C together produce the much stronger in-situ G2 power of
-37.997623 mm. The patent's three-subgroup construction distributes the required negative power rather than assigning it
to a single compact group, and its central subgroup is selected for the stabilization shift.[1]

### L31 — Biconvex Positive

`nd = 1.487490`, `νd = 70.41`. Glass annotation:
`487704 - low-dispersion crown class (vendor unresolved)`. Standalone `f = +101.538072 mm`.

L31 is the front positive element of G3. G3 moves objectward across the three published zoom positions and contributes to
the changing system magnification between the effectively fixed G2 and G4 stations.

### L32 — Cemented Doublet in G3

- **L32a — Biconvex Positive.** `nd = 1.497820`, `νd = 82.52`.
  Glass annotation: `J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)`.
  Standalone `f = +74.249883 mm`.
- **L32b — Negative Meniscus.** `nd = 1.772789`, `νd = 49.45`.
  Glass annotation: `773495 - lanthanum-flint class (vendor unresolved)`.
  Standalone `f = -139.409686 mm`.

The cemented L32 pair has a computed net EFL of +154.418578 mm. With L31 it forms the complete positive G3, whose
computed EFL is +61.641706 mm. Nikon's production account places one of the three ED elements in the third group.[2]
The high-Abbe L32a coordinate is consistent with a low-dispersion role, but the patent does not identify its historical
supplier or publish line-index data, so the data retains a class annotation rather than a named vendor glass.

### L41 — Negative Meniscus

`nd = 1.487490`, `νd = 70.41`. Glass annotation:
`487704 - low-dispersion crown class (vendor unresolved)`. Standalone and group `f = -229.999620 mm`.

L41 is the single element of G4, so its standalone thick-element EFL is also the computed G4 EFL. In the published zoom
states G4 is effectively stationary relative to the image plane. The inferred aperture stop lies immediately objectwise
of this group.

### L51 — Cemented Doublet in G5

- **L51a — Biconvex Positive.** `nd = 1.487490`, `νd = 70.41`.
  Glass annotation: `487704 - low-dispersion crown class (vendor unresolved)`.
  Standalone `f = +52.698608 mm`.
- **L51b — Negative Meniscus.** `nd = 1.805182`, `νd = 25.35`.
  Glass annotation: `805254 - dense-flint class (vendor unresolved; vd=25.35)`.
  Standalone `f = -92.413689 mm`.

The L51 cemented pair has a computed net EFL of +124.373134 mm. It combines with L52 to form G5, whose computed EFL is
+59.948417 mm. G5 is kinematically distinctive because its image-plane-normalized movement changes sign between the
200 mm and 390 mm states.

L51b also belongs to the second of the patent's two `nd = 1.805182` Abbe populations. Its `νd = 25.35` is retained
exactly rather than being silently changed to the `νd = 25.41` printed for L11a and L21a.

### L52 — Positive Meniscus

`nd = 1.487490`, `νd = 70.41`. Glass annotation:
`487704 - low-dispersion crown class (vendor unresolved)`. Standalone `f = +115.143208 mm`.

L52 is the rear positive element of G5. The patent explicitly identifies Example 4 as using a positive meniscus L52 with
its convex surface objectwise. Its interaction with L51 yields the stronger +59.948 mm complete G5 power quoted above.

### L61 — Cemented Rear Group G6

- **L61a — Biconcave Negative.** `nd = 1.796681`, `νd = 45.37`.
  Glass annotation: `J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)`.
  Standalone `f = -22.946592 mm`.
- **L61b — Positive Meniscus.** `nd = 1.805182`, `νd = 25.35`.
  Glass annotation: `805254 - dense-flint class (vendor unresolved; vd=25.35)`.
  Standalone `f = +41.380533 mm`.

Because G6 consists only of this cemented pair, its recomputed cemented net and functional-group EFL are both
-50.082345 mm. The rear group moves objectward as the lens is zoomed from the wide state toward 390 mm.

## Glass Identification and Selection

Working Example 4 publishes `Nd` and `Vd` at the d-line (587.6 nm) but does not name glass suppliers. The final data file
therefore treats the patent coordinates as authoritative and uses compatible coefficient-backed catalog equivalents
where available. Those equivalents improve dispersion modeling without establishing the historical production melt.

| Patent `nd` / `νd` | Data-file glass annotation | Elements | Disposition |
|---|---|---|---|
| 1.805182 / 25.41 | `805254 - dense-flint class (vendor unresolved; vd=25.41)` | L11a, L21a | Class-level identification only |
| 1.497820 / 82.52 | `J-FKH1 catalog equivalent (patent 498825)` | L11b, L32a | Compatible coefficient-backed ED curve; production supplier unspecified |
| 1.487490 / 70.41 | `487704 - low-dispersion crown class (vendor unresolved)` | L12, L31, L41, L51a, L52 | Class-level identification only |
| 1.796310 / 40.90 | `NBFD2 catalog equivalent (patent 796409)` | L21b | Compatible coefficient-backed curve; production supplier unspecified |
| 1.640000 / 60.03 | `S-BSM81 catalog equivalent (patent 640600)` | L22a | Compatible coefficient-backed curve; production supplier unspecified |
| 1.803840 / 33.89 | `E-LAFH2 catalog equivalent (patent 804339)` | L22b | Exact coefficient-backed coordinate; production supplier unspecified |
| 1.796681 / 45.37 | `J-LASF017 catalog equivalent (patent 797454)` | L23, L61a | Compatible coefficient-backed curve; production supplier unspecified |
| 1.772789 / 49.45 | `773495 - lanthanum-flint class (vendor unresolved)` | L32b | Class-level identification only |
| 1.805182 / 25.35 | `805254 - dense-flint class (vendor unresolved; vd=25.35)` | L51b, L61b | Source-distinct Abbe value retained |

Nikon's production documentation states that the commercial lens uses three ED elements, two in G1 and one in G3.[2][3]
That is a manufacturer product fact. It is not used here to overwrite the patent's glass coordinates or to force a
one-to-one vendor-glass identity where the selected example does not supply one. In particular, the final data labels the
`νd = 82.52` elements as an ED fluorophosphate/fluorocrown class but leaves other high- or low-dispersion coordinates at
the class level dictated by the catalog audit.

No element in Working Example 4 has authored `nC`, `nF`, `ng`, or `dPgF` values. No aspheric or diffractive spectral data
are present. Consequently, the model supports no claim of apochromatic correction or anomalous partial-dispersion
behavior from its authored spectral data. Statements about the production lens's ED elements remain manufacturer facts,
not an assertion of APO status.

## Focus Mechanism

The patent states that G1 moves axially for focusing, while Working Example 4 publishes only infinity-focus zoom
spacings.[1] Nikon documents a 2.3 m minimum focusing distance for the production lens.[3][4] The final data therefore
uses a **CONSTRAINED_RECONSTRUCTION** rather than presenting a nonexistent patent close-focus table.

At each of the three zoom stations, G2-G6 and the image plane remain fixed. Only G1 translates objectward. The code-solved
G1 shifts required to image an object 2.3 m from the fixed image plane are:

| Zoom state | G1 objectward shift | `d5` at infinity | `d5` at modeled 2.3 m |
|---|---:|---:|---:|
| 81.976 mm | 9.414818 mm | 3.282160 mm | 12.696978 mm |
| 200.000 mm | 9.607815 mm | 42.325420 mm | 51.933235 mm |
| 390.000 mm | 9.700881 mm | 60.552870 mm | 70.253751 mm |

The corresponding paraxial absolute magnifications are 0.042139, 0.104923, and 0.206585. At the endpoints those values
are consistent with Nikon's published approximately 1:25 behavior at 80 mm in the instruction manual and 1:4.8 maximum
reproduction specification at the telephoto end.[3][4] The reconstruction is not a claim that Nikon published these
three G1 shifts, nor does it establish the exact internal trajectory at every intermediate object distance. The data file
stores the verified infinity and 2.3 m endpoint gaps; interpolation between them is a model control, not a patent table.

Nikon USA's archived product page lists a maximum reproduction ratio of `0.42xx`, while Nikon Imaging Japan lists 1/4.8
and the Nikon manual gives 1:25 at 80 mm through 1:4.8 at 400 mm, consistent with the reconstructed optical model.
[5][3][4] The `0.42xx` entry is therefore treated as a product-page data error and was not used to constrain the focus
model.

## Chromatic Correction Strategy

The strongest source-supported chromatic statement comes from Nikon's retrospective, which identifies three ED elements
in the production lens: two in G1 and one in G3. Nikon describes the G1 ED elements as contributing to lateral chromatic
correction at the wide end and longitudinal chromatic correction at the telephoto end, while the G3 ED element primarily
contributes to longitudinal chromatic correction toward the wide end.[2]

The selected patent prescription is consistent with a deliberate alternation of high- and low-dispersion members, but
its only spectral descriptors are d-line index and Abbe number. L11b and L32a have `νd = 82.52`; L12 and several later
positive elements use the `νd = 70.41` coordinate; the dense-flint members at `nd = 1.805182` use much lower Abbe values
of 25.41 or 25.35. These are source facts and data-file classifications. Without line-index or validated Sellmeier data,
the analysis does not infer secondary-spectrum behavior beyond what the manufacturer and patent explicitly describe.

G2B uses a large refractive-index difference between its cemented members. The patent formalizes this through condition
(2), using `Na = 1.803840` and `Nb = 1.640000`, while also requiring the correction subgroup to retain net negative power.
The detailed Example 4 geometry shows that the high-index member is the positive L22b and the lower-index member is the
negative L22a, notwithstanding the patent's isolated suffix-label reversal discussed above.

## Conditional Expressions

The patent defines five conditions governing the stabilization subgroup and the overall zoom architecture. Each value
below was recomputed from the final prescription rather than copied only from the rounded Table 4D result.

| Condition | Expression | Recomputed value | Result |
|---|---|---:|---|
| (1) | `1.0 < f2B/f2 < 3.7` | 2.10525794 | Pass |
| (2) | `0.1 < Na - Nb` | 0.16384000 | Pass |
| (3) | `-0.5 < (R2 + R1)/(R2 - R1) < 0.5` | -0.06631578 | Pass |
| (4) | `1.5 < FNO_T * f1/fT < 3.0` | 1.97822378 | Pass |
| (5) | `0.3 < |f2|/fW < 0.7` | 0.46352131 | Pass |

Condition (1) keeps the G2B power in a range intended to limit the required stabilization displacement without making
the correction subgroup excessively strong. Condition (2) specifies the large index separation of the cemented VR
members. Condition (3) constrains the shape of the outer surfaces of G2B. Conditions (4) and (5) relate the positive G1
power and negative G2 power to the telephoto aperture and wide-angle system power, respectively.[1]

## Image Stabilization

G2B, the cemented L22 pair, is the vibration-reduction subgroup. The patent places it between G2A and G2C and specifies a
lateral shift of +0.8 mm at the three tabulated focal-length states. The corresponding published image shifts are
-0.717, -1.152, and -1.704 mm.[1]

An independent affine paraxial decenter calculation from the final prescription gives image shifts of -0.717194,
-1.152425, and -1.703436 mm. The residual against the patent is below 0.001 mm at every state. This cross-check is
important because it validates both the identity of the shifted subgroup and the sign convention without relying on the
L22a/L22b prose labels that conflict with the numerical example.

Nikon's production retrospective independently describes the commercial VR group as only part of the second group and
states that it shifts vertically in response to angular-velocity sensing.[2] The centered `.data.ts` prescription
represents the nominal optical axis; the +0.8 mm decentered state is a verified patent behavior recorded in the audit,
not an authored alternate surface state or runtime VR slider.

## Verification Summary

The final TypeScript prescription reproduces the three patent infinity states to the precision expected from the printed
radii and indices:

| State | Patent focal length | Computed EFL | Patent `Bf` | Computed BFD |
|---|---:|---:|---:|---:|
| Wide | 81.976 mm | 81.976852 mm | 40.97780 mm | 40.978147 mm |
| Mid | 200.000 mm | 200.001269 mm | 61.17974 mm | 61.180108 mm |
| Tele | 390.000 mm | 390.000810 mm | 71.37383 mm | 71.373815 mm |

The surface-by-surface Petzval calculation, using `φ/(n*n')` for every refracting surface, gives
`ΣP = +0.0004836170372 mm^-1`. Under the adopted image-Petzval convention this corresponds to
`R_P = -2067.751802 mm`. The inserted neutral stop contributes no refractive power and leaves this sum unchanged.

The inferred clear-aperture model was checked at all three zoom positions and at both infinity and the reconstructed
2.3 m state. The minimum modeled element edge thickness is 0.704944 mm, the largest actual spherical rim angle is
30.786371°, and the minimum modeled material cross-gap clearance is 1.547322 mm. These results support the authored
semi-diameters as internally valid geometry; they do not convert those semi-diameters into patent-published quantities.

## Modeling Inferences and Source Corrections

The data/analysis pair deliberately separates published facts from author modeling choices:

- **Focus:** the 2.3 m G1-only close-focus state is a code-solved constrained reconstruction. The patent publishes only
  infinity-focus spacing rows for Example 4.
- **Stop:** the stop's existence between G3 and G4 is published, but its 2.5 mm offset from S19 and modeled diameter are
  inferred from Figure 7 and f-number consistency.
- **Semi-diameters:** the patent does not publish clear apertures. The authored `sd` values are inferred from the Figure 7
  silhouette, ray envelopes, 135-format field, and geometry constraints.
- **Scaling:** none. All radii, spacings, and focal-length coordinates remain at Working Example 4's native scale.
- **Aspheres:** none are present in Working Example 4. No conic convention or asphere-coefficient transformation is
  applicable.
- **Omitted planes:** no sensor cover glass, filter, inactive dummy/flare-cutter plane, or mechanical optical plane is
  present in the selected example, so no omitted-plate air-equivalent correction is required.
- **Cemented interfaces:** the data uses the downstream element's index and `elemId` at each cemented junction; no
  synthetic cement layer is inserted.
- **Patent L22 labels:** the isolated prose assignment of positive L22a / negative L22b conflicts with the detailed
  construction, Figure 7, and Table 4A. The numerical geometry and element order are retained without altering a patent
  number.
- **Patent Abbe inconsistency:** `nd = 1.805182` appears with `νd = 25.41` at the earlier dense-flint elements and
  `νd = 25.35` at L51b and L61b. Both printed values are preserved separately.
- **Production reproduction ratio:** Nikon USA's archived `0.42xx` entry conflicts with Nikon Japan's 1/4.8
  specification, the instruction manual, and the constrained optical trace.[5] The inconsistent USA value is not used as
  a focus constraint.

## Sources

1. Masayuki Aoki, **US 6,141,156 A, “Antivibration Zoom Lens,”** Nikon Corporation, granted 2000-10-31. Working
   Example 4: Figure 7, Tables 4A-4D, and Figures 8A-8D.
2. Nikon, **NIKKOR — The Thousand and One Nights No.35: “Ai AF VR Zoom-Nikkor 80-400mm f/4.5-5.6D ED.”**
   https://imaging.nikon.com/imaging/information/story/0035/
3. Nikon Imaging Japan, **AI AF VR Zoom-Nikkor 80-400mm f/4.5-5.6D ED — product specifications.**
   https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_vr_zoom-nikkor_80-400mm_f45-56d_ed/
4. Nikon, **AF Zoom-Nikkor ED 80-400mm f/4.5-5.6D instruction manual.**
   https://nij.nikon.com/support/manual/nikkor/AFVRED80-400_Jp%2880%2909.pdf
5. Nikon USA, **AF VR Zoom-NIKKOR 80-400mm f/4.5-5.6D ED — archived product specifications.**
   https://www.nikonusa.com/p/af-vr-zoom-nikkor-80-400mm-f45-56d-ed/1996/overview
