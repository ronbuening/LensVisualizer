# CARL ZEISS DISTAGON T* 25mm f/2.8 (C/Y) — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** DE 1 250 153\
**Filed:** 15 February 1962\
**Published:** 14 September 1967\
**Inventor:** Erhard Glatzel\
**Applicant:** Fa. Carl Zeiss, Heidenheim (publication wording); Carl-Zeiss-Stiftung (canonical legal entity)\
**Title:** *Photographisches Objektiv*\
**Embodiment analyzed:** Example 2 — Table II / Figure 2

The prescription is taken from Example 2 of DE 1 250 153, specifically Table II and Figure 2. The patent normalizes the
focal length to `f = 1.00`, publishes an opening ratio of `1:2.8`, a full field of `80°` (`±40°`), and a rear focal
distance of `1.4877 f`. The implemented model applies a uniform scale of `25.9 mm/f`; the rounded patent prescription
then computes to an effective focal length of `25.903053 mm`. [DE 1 250 153, Table II, PDF p. 2 / printed p. 4;
Figure 2, PDF p. 9.]

The identification with the historical Contax/Yashica Distagon T* 2.8/25 is a strong correlation rather than an explicit
manufacturer patent attribution. Several independent features converge:

1. both have eight elements in seven groups and a maximum aperture of f/2.8;
2. scaling the patent by the ZEISS technical focal length of `25.9 mm` gives a first-to-last vertex track of
   `59.927 mm`, compared with `60.2 mm` in the ZEISS datasheet;
3. the computed principal-plane locations are `36.593 mm` behind the first vertex and `12.627 mm` behind the last,
   compared with ZEISS values of `36.7 mm` and `12.7 mm`;
4. the patent gives an `80°` full field, while the ZEISS technical table gives `82°` diagonal coverage;
5. a material remaining disagreement is back focal distance: the patent model computes `38.530 mm` from the last
   vertex, whereas the ZEISS datasheet gives `37.8 mm`.

The model therefore preserves the patent geometry instead of altering a spacing to force production agreement. The public
catalog identity is represented as the 25 mm C/Y lens, while the `25.9 mm` technical focal length is used only as the
uniform scale anchor. [ZEISS, *Distagon T* f/2.8 - 25 mm*, historical Contax/Yashica datasheet.]

## Optical Architecture

The design is a seven-group retrofocus wide-angle objective. In front-to-rear group order its verified paraxial power
sequence is

`negative — positive — negative — positive | stop | negative — positive — positive`.

The first three groups are single elements. The fourth pre-stop group is the cemented L4+L5 positive doublet. Behind the
stop are the strongly negative biconcave L6 followed by two positive groups, L7 and L8. This sequence directly reproduces
the structural conditions stated in Claims 1 and 2 of the patent. [DE 1 250 153, Claims 1–2, PDF p. 3 / printed p. 6.]

The computed effective focal length is `25.903053 mm`, while the paraxial back focal distance from the last refracting
surface is `38.529809 mm`. Thus `BFD/EFL = 1.487462`, satisfying the project definition of a retrofocus design. The
first-to-last vertex track is `59.927420 mm`, so `TL/EFL = 2.313527`; the design is therefore not telephoto under the
project definition.

Figure 2 shows the diaphragm within the air space between patent surfaces r9 and r10 but does not dimension its exact
position or diameter. The data model contains one explicit stop at that location; its precise split and size are modeling
choices discussed under Verification Summary rather than patent-published quantities.

## Element-by-Element Analysis

### L1 (LI) — Negative Meniscus

**nd = 1.62041, νd = 60.29. Glass: 620603 — SK16/BSM16-class (supplier unresolved). f = −50.108 mm.**

L1 forms the first negative group. Its rear face is the more strongly curved face, so the element follows the orientation
required for the front negative meniscus in the patent's claim structure. Its quoted focal length is the independently
computed standalone value for the isolated element in air; it should not be read as the element's in-situ contribution
to the complete objective.

### L2 (LII) — Biconvex Positive

**nd = 1.66755, νd = 41.88. Glass: 668419 — BASF6/ZBaF17/BAFD6/BAH26-class (supplier unresolved). f = +82.475 mm.**

L2 is the second pre-stop group and supplies positive paraxial power between the two negative meniscus groups. Its
standalone power is comparatively weak relative to the cemented L4+L5 positive group, but the patent's Claim 2 requires
the sign sequence rather than a particular isolated-element focal length.

### L3 (LIII) — Negative Meniscus

**nd = 1.58913, νd = 61.24. Glass: 589612/589613 — SK5/BAL35-class (supplier unresolved). f = −32.160 mm.**

L3 forms the third pre-stop group. As with L1, its stronger curvature faces the diaphragm side, matching the orientation
specified for the two negative groups in Claim 2. It is substantially stronger in isolated negative power than L1.

### L4 + L5 (LIV + LV) — Cemented Positive Group D1

**L4: nd = 1.64328, νd = 47.76. Glass: 643478 — BAF9/K-BaF9-class (supplier unresolved). f = +30.444 mm.**\
**L5: nd = 1.50137, νd = 56.46. Glass: 501564 — K10-class (supplier unresolved). f = +46.321 mm.**

L4 and L5 share the patent surface r8 and form the only cemented group in the prescription. Both components are positive
when isolated, but the physically relevant cemented-group result is not the arithmetic sum of those standalone powers.
Tracing the three-surface cemented assembly gives a net group focal length of `+19.968 mm` (`+0.0500802 mm⁻¹`).

This is the fourth and strongest positive pre-stop group in the paraxial group decomposition. Its total normalized glass
thickness is `d7 + d8 = 0.3958 f`, greater than the diaphragm-space thickness `d9 = 0.1996 f`, reproducing a specific
Claim 1 condition. [DE 1 250 153, Claim 1, PDF p. 3 / printed p. 6.]

### L6 (LVI) — Biconcave Negative

**nd = 1.75520, νd = 27.53. Glass: 755275/755276 — SF4/TIH4-class (supplier unresolved). f = −18.108 mm.**

L6 is the first group behind the stop and is the strongest isolated negative element in the design. The surface facing the
diaphragm is more strongly curved than its rear surface, matching the biconcave-negative orientation described in Claim 1.
Its standalone focal length equals its group focal length because G5 consists only of this element.

### L7 (LVII) — Positive Meniscus

**nd = 1.62041, νd = 60.29. Glass: 620603 — SK16/BSM16-class (supplier unresolved). f = +37.636 mm.**

L7 is the first positive group after L6. Its more strongly curved face is the rear, image-facing surface, again matching
the orientation prescribed for the post-stop positive groups. L7 reuses the same patent `nd/νd` coordinate as L1 but
has opposite power because of its different curvatures and thickness.

### L8 (LVIII) — Biconvex Positive

**nd = 1.56384, νd = 60.76. Glass: 564607/564608 — SK11-class (supplier unresolved). f = +47.283 mm.**

L8 is the final positive group. Its more strongly curved face is also toward the image side, completing the patent's
negative-positive-positive post-stop sequence. The modeled paraxial image plane lies `38.53143 mm` behind its rear
surface because that stored distance is the uniformly scaled form of the patent's published `1.4877 f` rear focal
distance; the independently traced paraxial focus is `38.52981 mm`, with the small difference attributable to the rounded
source prescription.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers; it does not identify suppliers or catalog melts.
The data file therefore uses supplier-neutral six-digit/class labels. Authoritative catalog review found coordinate-
compatible examples for all seven distinct patent coordinates, but these matches are equivalence evidence rather than
proof of the glass actually supplied to Carl Zeiss.

| Data label | nd | νd | Elements | Coordinate-compatible catalog examples |
|---|---:|---:|---|---|
| 620603 — SK16/BSM16-class | 1.62041 | 60.29 | L1, L7 | OHARA S-BSM16; HIKARI J-SK16; SUMITA SK16 |
| 668419 — BASF6/ZBaF17/BAFD6/BAH26-class | 1.66755 | 41.88 | L2 | HIKARI J-BASF6; CDGM ZBaF17; SUMITA BASF6 |
| 589612/589613 — SK5/BAL35-class | 1.58913 | 61.24 | L3 | HIKARI J-SK5; SCHOTT N-SK5; SUMITA SK5 |
| 643478 — BAF9/K-BaF9-class | 1.64328 | 47.76 | L4 | SUMITA K-BaF9 |
| 501564 — K10-class | 1.50137 | 56.46 | L5 | SCHOTT K10 |
| 755275/755276 — SF4/TIH4-class | 1.75520 | 27.53 | L6 | OHARA S-TIH4; HIKARI J-SF4; SUMITA SF4 |
| 564607/564608 — SK11-class | 1.56384 | 60.76 | L8 | HIKARI J-SK11; SCHOTT N-SK11; SUMITA SK11 |

No `nC`, `nF`, `ng`, or `dPgF` values are authored for the patent elements. Catalog line indices belonging to possible
modern equivalents are not transferred to the historical prescription. Consequently, the model does not support an APO
or anomalous-partial-dispersion performance claim from these glass labels alone.

## Focus Mechanism

The optical model has **NO_INTERNAL_RECONSTRUCTION**. Table II publishes a single static prescription and gives no
moving-group law or close-focus spacing table. The ZEISS product datasheet states focusing from infinity to `0.25 m`, and
that value is retained as product metadata, but it is not represented as a second optical state.

Accordingly, the data file contains no focus `var` entries. The available sources do not establish whether the production
lens should be modeled as unit focus, internal focus, or another motion scheme, and the single minimum-focus-distance
specification is insufficient to solve such a mechanism uniquely.

## Patent Conditions and Verification

The implemented scaled prescription preserves the quantitative structure of Claims 1 and 2. Recomputed values from the
final data include:

- the published half-field is `40°`, exceeding the Claim 1 threshold of `32°`;
- the source-normalized paraxial back focal distance is approximately `1.4876 f`, exceeding `1.20 f`;
- the sum of the r1–r6 surface powers is `−1.06626/f`;
- `d2 + d6 = 0.5762 f`, with both individual spaces inside the claimed `0.10–0.80 f` range;
- the cemented positive-group thickness is `0.3958 f`, greater than `d9 = 0.1996 f`;
- `d11 = 0.0600 f`, smaller than `d9`;
- the four pre-stop group signs are negative / positive / negative / positive;
- their glass-thickness sum is `1.1604 f`, greater than the three intervening air spaces, `0.5800 f`.

The separate Claim 4 surface-power column also provides an independent check on the radius and refractive-index sign
convention. Recalculation from the rounded Table II values agrees with that column to a maximum absolute residual of
`0.00022053/f`; the residual is retained as source-rounding behavior rather than treated as a patent correction.
[DE 1 250 153, Claims 1–2 and Claim 4 tables, PDF pp. 3 and 5–6.]

## Verification Summary

The source prescription is uniformly scaled by `25.9 mm/f`. Because all surfaces are spherical, there are no conic
constants or aspheric coefficients to transform. The completed optical model has eight elements, seven air-separated
groups, one cemented junction, and exactly one explicit aperture stop.

The diaphragm position is only approximately located by Figure 2. The model divides the scaled `d9 = 5.169640 mm` air
space into `1.283791 mm` from surface 9 to the stop and `3.885849 mm` from the stop to surface 10. That position is
constrained to reproduce the recorded ZEISS entrance-pupil location of `23.0 mm` behind the first vertex. The physical
stop semi-diameter, `6.966177 mm`, is then calibrated to the patent's f/2.8 opening ratio. The resulting modeled
`f/2.800000` is therefore a calibration result, not independent evidence for an unpublished diaphragm diameter.

The patent publishes no surface semi-diameters. Every clear aperture in the data file is modeled. The final set passes
positive edge-thickness, spherical rim-slope, and shared-band gap-clearance checks; the minimum modeled element edge
thickness is `1.864 mm`. Exact spherical tracing passes the complete on-axis wide-open stop bundle, the project's default
`±24°` off-axis samples, and the `±40°` chief rays. A denser one-dimensional meridional sample at `40°` shows substantial
edge-field clipping, but that finite sample is not an area-throughput measurement and is not used as proof over the full
pupil continuum.

Surface-by-surface Petzval computation using `φ/(n·n′)` gives a total of `0.00663461 mm⁻¹` for the implemented state.
This is reported as a verified paraxial sum only; no unsupported field-curvature performance conclusion is inferred from
that scalar alone.

The production comparison retains its principal discrepancy. The modeled patent BFD is `38.529809 mm`, or
`0.729809 mm` longer than the `37.8 mm` value in the ZEISS datasheet. No patent radius or spacing is changed to remove
that difference.

## Sources and References

- Deutsches Patentamt, **DE 1 250 153**, *Photographisches Objektiv; Zusatz zum Patent 1 187 393*, filed 15 February 1962,
  published 14 September 1967. Prescription: Table II, PDF p. 2 / printed p. 4; Claims 1–2, PDF p. 3 / printed p. 6;
  Claim 4 data, PDF pp. 5–6; Figure 2, PDF p. 9.
- ZEISS, **Distagon T* f/2.8 - 25 mm**, historical Contax/Yashica datasheet:
  https://www.zeiss.com/content/dam/consumer-products/downloads/historical-products/photography/contax-yashica/en/datasheet-zeiss-distagon-2825-en.pdf
- Carl Zeiss / ZEISS, **Distagon, Biogon, Hologon / Lens Names: Distagon**:
  https://lenspire.zeiss.com/photo/app/uploads/2018/02/en_CLB41_Nasse_LensNames_Distagon.pdf
- OHARA INC., **Glass Type**: https://www.ohara-inc.co.jp/en/product/01000/
- HIKARI GLASS CO., LTD., **J-SK / J-BASF / J-SF general optical glass**:
  https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sk/ ;
  https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-basf/ ;
  https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/
- SCHOTT, **Optical Glass Datasheet Collection** and **K10 datasheet**:
  https://media.schott.com/api/public/content/38cbbe876d324e03b1881d33f3d26635 ;
  https://www.schott.com/shop/medias/SCHOTT-datasheet-K10.pdf
- CDGM, **Optical Glass Database — ZBaF**:
  https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=13&url=database
- SUMITA OPTICAL GLASS, **Zemax all-glass catalog including discontinued types**:
  https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf
