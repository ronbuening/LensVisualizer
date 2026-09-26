# NIKON AF-S DX NIKKOR 10-24mm f/3.5-4.5G ED — US 8,169,718 B2, Example 4

## Patent Reference and Design Identification

**Patent:** US 8,169,718 B2\
**Application Number:** 12/662,355\
**Filed:** April 13, 2010\
**Priority:** JP 2009-097397, JP 2009-097398, JP 2009-097399, and JP 2009-097400, all April 13, 2009\
**Granted:** May 1, 2012\
**Inventors:** Dayong Li; Hiroshi Yamamoto; Hiroki Harada\
**Assignees:** Tamron Co., Ltd.; Nikon Corporation\
**Title:** *Wide-Angle Zoom Lens*\
**Embodiment analyzed:** Embodiment 4 / Example 4, optical layout of FIG. 10\

The implemented prescription transcribes Example 4 of US 8,169,718 B2 without a focal-length scale factor. The patent
publishes three infinity-focus zoom states at 10.295, 15.598, and 23.393 mm, with design F-numbers 3.60, 4.15, and
4.60 and full fields of 111.42°, 85.50°, and 62.84°. The Example-4 prescription, variable clearances, asphere
coefficients, group focal lengths, and conditional-expression results are printed on PDF pp. 19–20 of the supplied
patent. FIG. 10 on PDF p. 8 identifies the fourth embodiment and the internal-focus subset Gr1B.

The production-lens attribution is a convergent research correlation, not a manufacturer statement that Example 4 is
the production prescription. Nikon's product material identifies the AF-S DX NIKKOR 10-24mm f/3.5-4.5G ED as a Nikon
F-bayonet DX lens with a marketed 10–24 mm range, f/3.5–4.5 maximum aperture, 14 elements in 9 groups, two ED
elements, three aspherical elements, internal focusing, and a 0.24 m minimum focus distance. Nikon announced the lens on
April 14, 2009, one day after the four Japanese priority filings, with availability beginning in May 2009. The patent's
numerical endpoints are close but not identical to the marketed values, so the modeled design quantities and product
specifications remain separate.

The correlation rests on several mutually consistent features:

1. The patent priority date of April 13, 2009 immediately precedes Nikon's April 14, 2009 product announcement.
2. Example 4 spans 10.295–23.393 mm while the product is marketed as 10–24 mm.
3. Example 4 uses f/3.60–4.60 while the production name is f/3.5–4.5.
4. The patent gives 111.42° at the wide state and 62.84° at the tele state; Nikon markets approximately 109° and 61°.
5. The Example-4 sequence contains 16 refractive media segments, but two very thin aspheric media can be interpreted as
   composite layers on adjacent substrates, giving 14 physical lens pieces in 9 air-separated groups. That interpretation
   matches Nikon's 14-element/9-group specification but is not explicit patent wording.
6. Two physically separate elements use the low-dispersion coordinate `nd = 1.49700, νd = 81.61`, matching the product's
   count of two ED elements at the level of coordinate class. The patent does not name a supplier or ED trade designation.
7. Four aspherical surfaces lie on three interpreted physical elements: the front meniscus, the S3–S5 composite piece,
   and the S24–S26 rear composite piece. That physical-element count matches Nikon's three-aspherical-element specification.
8. The patent and Nikon both describe internal focusing. The patent specifically assigns near-focus movement to Gr1B,
   whereas Nikon's product material identifies the production focusing system but does not publish Gr1B travel.

No Nikon primary source located in the documented source review explicitly links US 8,169,718 B2 Example 4 to the production lens.
The identification should therefore be read as a strong correlation, not as manufacturer confirmation.

## Optical Architecture

Example 4 is a four-zoom-group negative-positive-negative-positive design. The verified group focal lengths are
`G1 = -15.198894 mm`, `G2 = +32.336736 mm`, `G3 = -40.493870 mm`, and `G4 = +33.240422 mm`. The first group is itself
split into the negative front subset Gr1A (`-21.547770 mm`) and negative rear subset Gr1B (`-95.656778 mm`). The patent
uses this split both in its conditional expressions and in the focus mechanism. These group powers are independently
reproduced from the final data file rather than copied from the patent's rounded group table.

The front group performs the strong negative work expected of an SLR ultra-wide-angle design. Its first physical element
is a large negative meniscus with two aspherical surfaces, followed by the weaker negative Gr1B subset. The second group
is net positive and lies immediately behind the aperture stop. The third group is a compact negative cemented doublet.
The fourth group is net positive and contains the two low-dispersion elements, a cemented triplet, and the rear composite
aspheric piece.

The computed paraxial states are:

| Zoom state | EFL (mm) | S26→image BFD (mm) | S1→S26 track (mm) | BFD/EFL |
|---|---:|---:|---:|---:|
| Wide | 10.294415 | 38.903508 | 94.6000 | 3.779089 |
| Middle | 15.597244 | 45.894621 | 85.6378 | 2.942483 |
| Tele | 23.392172 | 58.455034 | 80.3440 | 2.498914 |

Because `BFD > EFL` at all three source states, the verified design is retrofocus at wide, middle, and tele. The term is
used here in the project's explicit first-order sense. For the separate telephoto test, total optical-system length is
measured from S1 to the paraxial image plane, not merely to S26. The resulting `TL/EFL` ratios are 12.968538, 8.433056,
and 5.933568 at wide, middle, and tele respectively; all exceed 1, so no telephoto label is applied.

The zoom prescription varies three published internal air clearances. D7, from S7 to the stop plane, decreases from
21.1006 mm at wide to 10.4692 mm at middle and 3.7599 mm at tele. D14, between G2 and G3, increases from 0.8270 to
7.7520 to 14.2056 mm. D17, between G3 and G4, decreases from 11.0939 to 5.8381 to 0.8000 mm. The model adds a fourth
variable quantity, S26-to-image distance, because the patent does not tabulate an image-plane row.

When each state is placed in a fixed-image-plane frame, G1 reverses direction across the three published zoom samples.
Its front vertex moves +1.971087 mm from wide to middle and then -7.266613 mm from middle to tele, for a net
-5.295526 mm wide-to-tele shift. G2, G3, and G4 move monotonically objectward over the same sampled states by
-22.636226, -9.257626, and -19.551526 mm respectively. Gr1B shares G1's zoom movement in these infinity-focus states;
that shared zoom motion is not a reconstructed near-focus movement.

The computed paraxial Petzval sum is `+0.006679309476 mm^-1`, corresponding to a reciprocal magnitude of
149.716075 mm. This is a surface-by-surface first-order sum using `φ/(n·n′)` at each interface; it is not a traced field-
curvature surface and does not by itself describe the final off-axis image shell.

## Element-by-Element Analysis

The `fl` values below are standalone-in-air focal lengths of the individual modeled refractive media. They are not the
same as the net powers of cemented stacks or the in-situ powers of the four zoom groups. Where a cemented or composite
assembly is listed, its separately computed net focal length is given explicitly.

### L1 — Front Negative Meniscus, Surfaces 1A–2A

`nd = 1.74330, νd = 49.22. Glass: 743492 lanthanum-crown coordinate class; supplier unresolved. f = -21.547770 mm.`

L1 is Gr1A, the front subset of the negative first zoom group. Both major surfaces are aspherical. The patent describes the
front-end element as a negative meniscus with its concave side toward the image and uses the surface-normal conditions of
Formulae (12) and (13) to control the strongly aspheric front surface. The large 23.2 mm source-verified effective-aperture
radius belongs to surface 1A.

The patent's design discussion associates this front meniscus and its asphericity with obtaining the very wide field while
keeping the first-group effective aperture manageable and controlling field-dependent aberrations. Those statements are
patent design rationale; no more specific attribution of an individual aberration term to L1 is inferred from the glass
class alone. See US 8,169,718 B2, PDF pp. 11–14 and the Example-4 normal-angle table on PDF p. 20.

### H1 — Gr1B Composite Piece, L2 + L2c, Surfaces 3–5A

`L2: nd = 1.88300, νd = 40.80. Glass: 883408 dense lanthanum-flint / historical HOYA TAFD30 coordinate class; supplier unresolved. f = -30.558321 mm.`

`L2c: nd = 1.53610, νd = 41.21. Glass: Unmatched (thin composite-asphere layer coordinate 536412; no public catalog identity established). f = +315.088947 mm.`

The two media form the first inferred composite-asphere piece. The 0.3000 mm S4–S5 medium is retained explicitly in the
sequential model because it has its own refractive index and ends at aspherical surface 5A. Interpreting it as a bonded
composite layer on the L2 substrate reconciles the optical sequence with the production 14-element count, but the patent
does not label the material as resin, cement, or a separately manufactured lens. The analysis therefore does not assign a
specific manufacturing chemistry.

The computed net focal length of the S3–S5 stack is `-33.710429 mm`. This is substantially different from the very weak
positive standalone power of the thin L2c medium because the cemented interfaces and L2 substrate dominate the stack.
H1 is part of Gr1B rather than the whole focus subset: Gr1B also includes L3 and the intervening air space.

### L3 — Gr1B Positive Meniscus, Surfaces 6–7

`nd = 1.69895, νd = 30.05. Glass: 699301 dense-flint coordinate class; exact HOYA E-FD15L candidate, supplier unresolved. f = +50.534297 mm.`

L3 is the rear member of Gr1B. In isolation it is positive, but the complete Gr1B subset is strongly negative at
`-95.656778 mm`. That sign difference is a reminder that standalone element power cannot be substituted for in-situ
subset behavior. L3 and H1 move together during the published infinity-focus zoom states; the patent assigns the subset as
a whole to internal focusing toward near objects.

### D1 — First G2 Cemented Pair, L4 + L5, Surfaces 9–11

`L4: nd = 1.68893, νd = 31.16. Glass: 689312 dense-flint coordinate class; exact HOYA MP-FD80 candidate, supplier unresolved. f = +22.034449 mm.`

`L5: nd = 1.88300, νd = 40.80. Glass: 883408 dense lanthanum-flint / historical HOYA TAFD30 coordinate class; supplier unresolved. f = -22.334950 mm.`

The first G2 pair places a positive meniscus and a negative meniscus in cemented contact. Their standalone powers are
similar in magnitude and opposite in sign, and the computed cemented-stack focal length is `-924.117226 mm`, so the pair
is nearly afocal in first order. It should not therefore be described as the source of G2's net positive power by itself.
The positive G2 power emerges from the complete S9–S14 assembly, including D2 and the actual internal separations.

### D2 — Second G2 Cemented Pair, L6 + L7, Surfaces 12–14

`L6: nd = 1.58913, νd = 61.25. Glass: 589613 crown coordinate class; exact HOYA MP-BACD5N candidate, supplier unresolved. f = +17.364334 mm.`

`L7: nd = 1.80610, νd = 33.27. Glass: 806333 dense-flint coordinate class; exact HOYA NBFD15 candidate, supplier unresolved. f = -36.792704 mm.`

D2 has a computed cemented net focal length of `+32.533152 mm`, close to the net `+32.336736 mm` focal length of G2.
That numerical relationship indicates that D2 supplies most of G2's first-order positive power, while D1 and the spacing
between the two pairs modify the final group power. It does not, by itself, prove a particular higher-order aberration
assignment.

### D3 — Negative Third-Group Doublet, L8 + L9, Surfaces 15–17

`L8: nd = 1.77250, νd = 49.62. Glass: 773496 lanthanum-crown coordinate class; exact SCHOTT N-LAF34 / historical HOYA TAF1 candidates, supplier unresolved. f = -15.561608 mm.`

`L9: nd = 1.84666, νd = 23.78. Glass: 847238 high-dispersion flint coordinate class; exact HOYA FDS90 and CDGM H-ZF52 candidates, supplier unresolved. f = +25.379929 mm.`

These two elements comprise the entire third zoom group. Their computed cemented net focal length is
`-40.493870 mm`, which is therefore also the verified G3 focal length. The pair combines a strong negative constituent
with a positive high-dispersion partner. The glass-coordinate contrast is source-supported, but no supplier-specific
partial-dispersion behavior is assigned because the patent gives only `Nd` and `ABV`.

### L10 — Front G4 Low-Dispersion Positive Element, Surfaces 18–19

`nd = 1.49700, νd = 81.61. Glass: 497816 ED fluorophosphate coordinate class; exact HOYA FCD1 and CDGM D-FK61 candidates, supplier unresolved. f = +41.262882 mm.`

L10 is an air-spaced positive element at the front of G4 and is the first of two physically separate elements using the
same high-Abbe coordinate. Nikon markets the production lens as containing two ED elements, and the two `1.49700/81.61`
physical elements provide a strong count-level correlation. The patent itself does not use Nikon's ED branding or identify
a glass supplier, so the label remains a coordinate class rather than a vendor assignment.

### T1 — Central G4 Cemented Triplet, L11 + L12 + L13, Surfaces 20–23

`L11: nd = 1.90366, νd = 31.31. Glass: 904313 dense lanthanum-flint coordinate class; HOYA TAFD25-class match within source rounding, supplier unresolved. f = -30.274849 mm.`

`L12: nd = 1.49700, νd = 81.61. Glass: 497816 ED fluorophosphate coordinate class; exact HOYA FCD1 and CDGM D-FK61 candidates, supplier unresolved. f = +18.125056 mm.`

`L13: nd = 1.90366, νd = 31.31. Glass: 904313 dense lanthanum-flint coordinate class; HOYA TAFD25-class match within source rounding, supplier unresolved. f = -58.831690 mm.`

The triplet places the second low-dispersion positive element between two high-index, lower-Abbe negative members. Its
computed cemented net focal length is `+78.290564 mm`. The arrangement is consistent with a chromatically balanced
positive subassembly, but the available patent data do not support an apochromatic claim or a supplier-specific secondary-
spectrum calculation. The complete G4 power also includes L10 and the rear composite piece with the intervening air gaps.

### H2 — Rear Composite Aspheric Piece, L14c + L14, Surfaces 24A–26

`L14c: nd = 1.51460, νd = 49.96. Glass: Unmatched (thin composite-asphere layer coordinate 515500; no public catalog identity established). f = +466.372595 mm.`

`L14: nd = 1.58144, νd = 40.89. Glass: 581409 light-flint coordinate class; exact CDGM H-QF50 candidate, supplier unresolved. f = -211.373338 mm.`

The 0.3500 mm S24–S25 medium is modeled explicitly and terminates at aspherical surface 24A. As with H1, the treatment as
a thin bonded composite layer is an interpretation used to reconcile the optical media count with the production
14-element specification; the patent does not name a resin or manufacturing process. The computed net focal length of the
S24–S26 stack is `-380.484395 mm`, so H2 is a very weak negative subassembly in first-order terms compared with the net
`+33.240422 mm` power of the complete fourth zoom group.

## Glass Identification and Selection


The integration audit uses these runtime spectral curves: L1: `NBF1`; L2, L5: `TAFD30`; L2c, L14c: `Unmatched`; L3: `E-FD15`; L4: `M-FD80`; L6: `M-BACD5N`; L7: `NBFD15`; L8: `N-LAF34`; L9: `H-ZF52`; L10, L12: `FCD1`; L11, L13: `TAFD25`; L14: `E-FL5`. The coordinate/class descriptions below retain the source-identification context; catalog names are qualified proxies, not evidence of production suppliers.

The prescription contains 13 distinct non-air `Nd/νd` coordinates across 16 refractive media entries. Authoritative
catalogs from HOYA, OHARA, SCHOTT, HIKARI, CDGM, and SUMITA were checked during source verification. Coordinate equality
or near-equality is treated as candidate evidence, not as proof of the supplier or melt actually used in the patented or
production lens.

| Patent coordinate | Modeled use | Defensible model label / catalog evidence |
|---|---|---|
| 1.74330 / 49.22 | L1 | 743492 lanthanum-crown class; CDGM H-LaF53 exact, OHARA S-LAM60 and SCHOTT N-LAF35 nearby; supplier unresolved |
| 1.88300 / 40.80 | L2, L5 | 883408 dense lanthanum-flint class; historical HOYA TAFD30 coordinate exact; supplier unresolved |
| 1.53610 / 41.21 | L2c | Unmatched thin composite-asphere coordinate 536412 |
| 1.69895 / 30.05 | L3 | 699301 dense-flint class; HOYA E-FD15L coordinate exact; supplier unresolved |
| 1.68893 / 31.16 | L4 | 689312 dense-flint class; HOYA MP-FD80 coordinate exact; supplier unresolved |
| 1.58913 / 61.25 | L6 | 589613 crown class; HOYA MP-BACD5N coordinate exact; supplier unresolved |
| 1.80610 / 33.27 | L7 | 806333 dense-flint class; HOYA NBFD15 coordinate exact; supplier unresolved |
| 1.77250 / 49.62 | L8 | 773496 lanthanum-crown class; SCHOTT N-LAF34 and historical HOYA TAF1 coordinates exact; supplier unresolved |
| 1.84666 / 23.78 | L9 | 847238 high-dispersion flint class; HOYA FDS90 and CDGM H-ZF52 coordinates exact; supplier unresolved |
| 1.49700 / 81.61 | L10, L12 | 497816 ED fluorophosphate class; HOYA FCD1 and CDGM D-FK61 coordinates exact; supplier unresolved |
| 1.90366 / 31.31 | L11, L13 | 904313 dense lanthanum-flint class; HOYA TAFD25-class match within `Δνd = +0.006`; supplier unresolved |
| 1.51460 / 49.96 | L14c | Unmatched thin composite-asphere coordinate 515500 |
| 1.58144 / 40.89 | L14 | 581409 light-flint class; CDGM H-QF50 coordinate exact; supplier unresolved |

The two `1.49700/81.61` elements are the strongest low-dispersion coordinates in the prescription and occupy separate
physical positions in G4. Their count aligns with Nikon's two-ED-element product specification. The identification does not
extend to a specific FCD1 or D-FK61 supplier because the patent does not name one.

The patent publishes only d-line index and Abbe number. It does not publish per-element `nC`, `nF`, `ng`, or `dPgF`.
Some catalog candidates have such data, but using those line indices would silently assume the candidate glass identity.
The final data therefore does not author those spectral fields, and this analysis makes no APO or anomalous-partial-
dispersion performance claim.

## Focus Mechanism

The patent divides the negative first zoom group into Gr1A and Gr1B and states that the rear subset Gr1B moves toward the
object when focus changes from infinity toward a near object. FIG. 10 shows the focus arrow under Gr1B. This is a published
mechanism statement, not a reconstructed numerical focus curve.

Example 4 supplies only the infinity-focus zoom prescription. It does not give a second internal-spacing row at close
focus, a Gr1B travel distance, a second object-distance/magnification pair, or a table of focus-variable clearances. The
LensVisualizer model therefore uses `NO_INTERNAL_RECONSTRUCTION`: every zoom-variable gap has identical infinity and
close entries at a given zoom position, so the viewer does not invent a close-focus optical state.

Nikon publishes a 0.24 m minimum focus distance for the production lens and identifies AF-S Silent Wave Motor operation
with internal focusing. The model retains 0.24 m as production metadata only. That number is not used to solve Gr1B
travel, because a production MFD by itself does not uniquely determine the patent's internal focus state.

## Aspherical Surfaces

Example 4 has four aspherical surfaces: 1A and 2A on the front meniscus L1, 5A on the inferred H1 composite piece, and
24A on the inferred H2 composite piece. The patent uses the standard conic form

`z(h) = (h^2/R) / (1 + sqrt(1 - (1 + K)(h/R)^2)) + A4 h^4 + A6 h^6 + ...`

with `K = 0` spherical and `K = -1` parabolic. No conic conversion is applied in the data file. The source scale is
`s = 1.0`, so the polynomial coefficients are retained directly without dimensional rescaling. The source equation and
coefficient convention are shown on PDF p. 16; Example-4 coefficients are on PDF p. 19.

### Surface 1A

- `K = -4.855874`
- `A4 = +1.47578e-5 mm^-3`
- `A6 = -3.54016e-8 mm^-5`
- `A8 = +4.54072e-11 mm^-7`
- `A10 = -1.16025e-14 mm^-9`
- `A12 = +2.27158e-17 mm^-11`
- `A14 = -3.08920e-20 mm^-13`
- `A16 = -6.77424e-23 mm^-15`
- `A18 = -3.35578e-26 mm^-17`
- `A20 = +1.37873e-28 mm^-19`

Surface 1A is the only asphere with a source-verified outer effective-aperture radius. The patent's normal-angle table
extends to `h = 23.2 mm`. Differentiating the surface equation gives `27.660209°` at that radius, reproducing the printed
`27.6603°` within `0.000091°`. At the same verified radius the aspheric sag is `5.256197 mm`; relative to the same-radius
`K = 0` sphere, the departure is `+1.464446 mm`.

The patent table is headed as the normal angle of surface “#11,” but surface 11 is spherical and cannot produce the printed
sequence. Surface 1A reproduces all 20 rows within 0.00015°, and Formulae (12)–(13) explicitly concern the front-end
aspherical surface. The raw “#11” heading is therefore preserved as a source error while the calculations use surface 1.

### Surface 2A

- `K = -1.110553`
- `A4 = +2.77891e-5 mm^-3`
- `A6 = +4.04370e-8 mm^-5`
- `A8 = +6.12679e-11 mm^-7`
- `A10 = +3.62235e-13 mm^-9`
- `A12 = -1.10342e-14 mm^-11`
- `A14 = +5.28104e-18 mm^-13`
- `A16 = +3.20816e-19 mm^-15`
- `A18 = +1.45731e-22 mm^-17`
- `A20 = -3.47259e-24 mm^-19`

Surface 2A is the rear face of the front negative meniscus. The patent gives the coefficients but no surface-specific clear
semi-diameter. The model therefore does not use the authored 17.1 mm semi-diameter as source evidence, and no source-
verified departure is quoted for this surface.

### Surface 5A

- `K = +0.335030`
- `A4 = +2.26449e-5 mm^-3`
- `A6 = -9.66072e-8 mm^-5`
- `A8 = +1.76373e-10 mm^-7`
- `A10 = +1.14032e-13 mm^-9`
- `A12 = +1.38279e-15 mm^-11`

Surface 5A terminates the 0.3000 mm thin H1 medium. Its positive conic constant makes the mathematical conic domain a
relevant geometry constraint. The modeled 13.7 mm semi-diameter passes the implemented conic-domain and actual-rim-slope
checks, but that radius remains a modeled aperture rather than a patent value. No unique aberration contribution is
assigned to 5A beyond the additional shape freedom it provides within Gr1B.

### Surface 24A

- `K = -0.608663`
- `A4 = -9.83362e-6 mm^-3`
- `A6 = +2.14587e-8 mm^-5`
- `A8 = -1.14789e-10 mm^-7`
- `A10 = +1.30510e-12 mm^-9`
- `A12 = -2.67583e-15 mm^-11`

Surface 24A is the front surface of the rear thin composite medium. Its modeled semi-diameter is 12.7 mm, but the patent
does not publish that aperture. The asphere is therefore described from its source coefficients without presenting its
modeled edge departure as a patent-supported quantity.

## Chromatic Correction Strategy

The strongest source-supported chromatic feature is the use of two separate `nd = 1.49700, νd = 81.61` positive elements
in G4, paired elsewhere in the group with `nd = 1.90366, νd = 31.31` negative media. This large Abbe-number contrast is
consistent with achromatizing strategy and matches Nikon's count of two ED production elements. The patent, however, does
not publish the line-index or partial-dispersion data needed to quantify secondary-spectrum behavior.

G3 likewise combines a `νd = 49.62` negative component with a `νd = 23.78` positive partner. G2 contains both crown-like
and denser lower-Abbe media. These pairings establish broad dispersion contrast, but the analysis does not infer an APO
classification, anomalous-partial-dispersion mechanism, or exact longitudinal chromatic correction from Abbe numbers
alone.

## Conditional Expressions

The patent evaluates a set of design inequalities for Example 4. Independent computation from the extracted prescription
reproduces the printed values within source-precision-aware tolerances. Formula (14) uses the visible `14.50 mm` maximum
image-height ordinate in Example-4 FIGS. 11–12 as a source cross-check rather than an exact field ray trace.

| Formula | Printed Example-4 value | Recomputed value | Residual |
|---|---:|---:|---:|
| (11) | 4.439 | 4.439289 | +0.000289 |
| (12) | 5.077 | 5.076885 | -0.000115 |
| (13) | 5.448 | 5.448264 | +0.000264 |
| (14) | 1.409 | 1.408531 | -0.000469 |
| (15) | 0.849 | 0.848746 | -0.000254 |
| (21) | 3.385 | 3.385878 | +0.000878 |
| (22) | 0.739 | 0.738896 | -0.000104 |
| (23) | 34.857 | 34.855637 | -0.001363 |
| (24) | 9.412 | 9.412097 | +0.000097 |
| (31) | 1.050 | 1.049747 | -0.000253 |
| (32) | 13.895 | 13.896221 | +0.001221 |
| (33) | 1.484 | 1.483927 | -0.000073 |
| (34) | 0.144 | 0.144149 | +0.000149 |
| (35) | 2.462 | 2.461583 | -0.000417 |
| (41) | 0.223 | 0.223051 | +0.000051 |

Three source issues require explicit qualification. First, Formulae (12)–(13) depend on the front asphere and are reproduced
from surface 1 despite the normal-angle table's “#11” heading. Second, the patent prose defines `D12w` as the distance
between G1 and G2, but the printed Example-4 results for Formulae (33) and (34) reproduce only when `D7 = 21.1006 mm` is
used. The literal S7-to-S9 clearance is `22.6080 mm` after including the fixed 1.5074 mm stop-to-S9 spacing; substituting
that geometric clearance would give approximately 1.384985 and 0.134538 rather than the printed 1.484 and 0.144. The
implemented geometry retains both S7→STO and STO→S9 distances and does not alter them to force the patent's prose
definition. Third, the Example-4 text labels the two G2 cemented pairs as “Positive-Negative & Negative-Positive,” while
the numerical prescription and FIG. 10 resolve both pairs as positive-then-negative when each physical constituent is
evaluated as a standalone lens in air. The implemented sequence follows the numerical prescription and figure; the
conflicting prose arrangement label is retained as a source inconsistency rather than used to reverse either pair.

## Verification Summary and Modeling Limits

The final data revision was loaded through a TypeScript-aware literal parser and recomputed directly. Sequential
height/reduced-angle tracing and independent ABCD composition agree at all three published zoom states. The computed EFLs
match the patent's rounded 10.295, 15.598, and 23.393 mm values within 0.00083 mm. Group powers, cemented-stack powers,
principal planes, Petzval terms, zoom movement, and the surface-1 normal-angle table were likewise recomputed from the
implemented prescription.

The stop plane itself is source-published, but its physical diameter is not. The model's base `STO.sd = 4.826159 mm` is
the wide-state paraxial calibration needed to reproduce the published f/3.60 target. The corresponding per-state implied
stop radii are 4.826159, 5.028647, and 5.681596 mm for the f/3.60, f/4.15, and f/4.60 states. These are calibration
quantities, not measurements of the manufactured diaphragm.

Only surface 1A has a source-verified semi-diameter, 23.2 mm. All other surface semi-diameters are modeled. The authored
geometry passes the portable edge-thickness, actual-rim-slope, conic-domain, and shared-gap checks. Exact meridional
spherical/aspherical rays pass at the on-axis stop edges and at five pupil samples for 0.60 of the interpolated published
half-field over nine zoom samples. That sampling does not establish exact full-edge-field containment.

A separate paraxial edge scan exposes the remaining aperture-model limitation. At the wide state at least one sampled ray
is supported to approximately 0.93 of the published half-field, corresponding to about 103.62° full field rather than the
published 111.42°. Middle and tele reach the published paraxial field edge in that scan. The wide discrepancy is retained
as a modeled semi-diameter limitation rather than hidden by enlarging the strongly aspherical front geometry.

The patent does not tabulate an image-plane row after surface 26. The model therefore appends computed paraxial air BFDs of
38.903508, 45.894621, and 58.455034 mm at wide, middle, and tele. No sensor cover glass, filter, inactive dummy plane, or
mechanical part is removed from Example 4 because no such rear plane appears in the selected prescription.

No uniform scaling is applied. The source prescription and the implemented prescription use the same millimeter scale,
and the aspheric coefficients therefore require no scale transformation.

The product-to-patent attribution, the two composite-layer interpretations, the non-source semi-diameters, and the stop
radius are modeling or correlation inferences. The patent radii, thicknesses, indices, Abbe numbers, zoom clearances, and
aspheric coefficients remain source values apart from the explicit application representation of the flat stop and the
computed S26-to-image distance.

## Sources and References

1. Li, Dayong; Yamamoto, Hiroshi; Harada, Hiroki. **US 8,169,718 B2, “Wide-Angle Zoom Lens.”** Granted May 1, 2012.
   Example 4 prescription and asphere tables: supplied PDF p. 19; normal-angle and condition tables: p. 20; asphere
   equation: p. 16; FIG. 10 focus/layout: p. 8; FIGS. 11–12 aberration plots: p. 9.
2. Nikon USA. **AF-S DX NIKKOR 10-24mm f/3.5-4.5G ED** product page.
   https://www.nikonusa.com/p/af-s-dx-nikkor-10-24mm-f35-45g-ed/2181/overview
3. Nikon USA. **“Nikon introduces versatile ultra wide-angle 10-24mm DX-format NIKKOR lens.”** April 14, 2009.
   https://www.nikonusa.com/press-room/nikon-introduces-versatile-ult
4. Nikon Corporation. **Nikon News 2009** index.
   https://www.nikon.com/company/news/2009/
5. Nikon Corporation. **NIKKOR — The Thousand and One Nights No. 90.**
   https://imaging.nikon.com/imaging/information/story/0090/
6. HOYA GROUP Optics Division. **Designation of Glass Types** and current/historical optical-glass data resources.
   https://www.hoya-opticalworld.com/english/technical/001.html
   https://www.hoya-opticalworld.com/english/datadownload/index.html
7. OHARA INC. **Catalog Download — Optical Glass.**
   https://www.ohara-inc.co.jp/en/product/catalog/
8. SCHOTT. **Optical Glass Datasheet Collection** and N-LAF34 datasheet.
   https://www.schott.com/en-us/products/optical-glass-p1000267
9. CDGM Glass Co., Ltd. **Optical Glass Database** and H-QF50 catalog data.
   https://www.cdgmgd.com/database/toWebDatabase.htm
10. HIKARI GLASS Co., Ltd. **Optical Glass Catalog Download.**
    https://www.hikari-g.co.jp/optical_glass/catalog/
11. SUMITA OPTICAL GLASS, Inc. **Optical Glass Data Downloads.**
    https://www.sumita-opt.co.jp/en/download/
