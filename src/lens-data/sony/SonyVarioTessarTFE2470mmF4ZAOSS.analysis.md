## Patent Reference and Design Identification

**Patent:** US 2015/0085165 A1  
**Application Number:** 14/472,672  
**Filed:** 2014-08-29  
**Published:** 2015-03-26  
**Priority:** 2013-09-25, Japanese application 2013-198806  
**Inventors:** Masaki Maruyama; Masaharu Hosoi; Hiroshi Koizumi  
**Applicant:** Sony Corporation  
**Title:** Zoom lens and imaging apparatus  
**Embodiment analyzed:** Example 3, Tables 7–10 and Fig. 13

The data file transcribes Example 3 without scaling. Its semi-diameters, iris
schedule, close-focus state and glass spectra are modeled or inferred, not
published. The printed back focus is retained as the patent's image plane; it lies
slightly ahead of the paraxial focus at wide and middle, consistent with a
best-focus plane (see "First-Order Data and Model Scope").

The selected correlation is the Sony Vario-Tessar T\* FE 24–70mm F4 ZA OSS,
SEL2470Z. The patent does not name that product. The following evidence supports a
correlation, without making it a manufacturer-confirmed identification:

1. The patent has 12 elements in 10 air-separated components, matching Sony's
   published 12-element/10-group construction.
2. The nine aspheric surfaces fall on five elements. Sony specifies five
   aspherical elements and one ED element; the patent's low-dispersion L9 is a
   plausible counterpart, although its actual material is unnamed.
3. The source stations are 24.72, 47.00 and 67.90 mm at F/4.10, near the marketed
   24–70 mm F4 range. These are separate quantities, not an exact numerical match.
4. The patent describes G4 axial focusing and a laterally moving L7 blur-correction
   element. Sony specifies Optical SteadyShot; the exact production focus travel
   and stabilization control law are not supplied here.
5. The 2013-09-25 priority precedes Sony's 2013-10-16 announcement. The announcement
   gives January 2014 availability in Asia Pacific.

Sony specifies full-frame E mount, a 0.4 m minimum focus distance and 0.20× maximum
magnification. The patent prints no close-focus rows; the model's reconstructed
0.4 m state gives 0.20× at tele. The patent lists no cover glass or filter plate,
and none is added. [1,2,3]

## Optical Architecture

The design consists of five functional zoom groups in a
positive–negative–positive–negative–negative sequence. This functional grouping is
distinct from the ten air-separated components used in construction counts. G1
contains the L1/L2 cemented doublet; G2 contains L3–L5; G3 contains L6–L10, including
the L8/L9 doublet; G4 is L11; and G5 is L12. The aperture lies between G2 and G3 at
source surface 10 and moves with G3. [1, ¶0186–0197]

G1 provides positive front-group power despite its negative first member. G2 is
the principal negative variator. G3 combines positive power with the stop-adjacent
aspheres, blur-correction element and second cemented pair. G4 is the small
negative focusing element identified by the patent. G5 is a weak negative
plano-concave rear element; the patent connects the negative rear group with the
management of image-side ray angles and lens diameter. No telephoto or retrofocus
classification is inferred solely from the product's zoom range.

The isolated functional-group focal lengths computed from the printed rows are:

| Group | Elements | Isolated focal length (mm) |
| ----- | -------- | -------------------------: |
| G1    | L1–L2    |                +110.600239 |
| G2    | L3–L5    |                 -27.392786 |
| G3    | L6–L10   |                 +23.821367 |
| G4    | L11      |                 -38.918124 |
| G5    | L12      |               -1232.066299 |

These isolated powers describe each group in air and must not be interpreted as
separable in-situ image-forming contributions. The cemented L1/L2 unit has positive
net power, while the cemented L8/L9 unit has negative net power even though L9 is
individually positive.

During wide-to-tele zooming, all five groups move relative to the fixed image.
G1, G3, G4 and G5 move objectward across the published stations. G2 moves slightly
imageward from wide to middle, then reverses objectward. The middle keyframe is
therefore essential. G3 and G5 are described as moving together; the printed
bridge d19 + 0.80 + d21 is 12.24/12.23/12.24 mm, retaining the middle-station
rounding difference instead of imposing an artificial exact constraint. [1, ¶0187–0188]

## Element-by-Element Analysis

The following focal lengths are standalone thick-element values in air. At a
cemented interface, this deliberately differs from assigning the shared physical
interface's power wholly to either member. Glass descriptions are coordinate
classes, not confirmed suppliers or melts. The indices and Abbe numbers are the
native d-line values from Table 7.

### L1 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: 847238 — high-index dense flint class. f = -252.601 mm.

L1 is the thin negative meniscus at the front of the positive G1 doublet. Its
image-side surface is the physical cemented interface with L2, not an intervening
air layer. The high-dispersion negative member and lower-dispersion positive member
provide freedom for primary color balancing; actual residual color depends on the
complete zoom and on spectra absent from the source. Its negative standalone power
does not make G1 negative. [1, ¶0190]

### L2 — Positive Meniscus

nd = 1.61800, νd = 63.39. Glass: 618634 — low-dispersion crown class. f = +75.644 mm.

L2 supplies the stronger positive contribution in G1. Its steep object-side
surface is shared with L1; its rear surface is weakly curved. The data therefore
assign the junction's medium to L2 without inserting synthetic cement. The first
variable gap follows L2. The generic coordinate label selects a catalog spectral
proxy, but it does not determine a phosphate-crown supplier. [1, ¶0190]

### L3 — Neg. Meniscus (2× Asph)

nd = 1.88202, νd = 37.22. Glass: 882372 — high-index glass class. f = -19.564 mm.

L3 is the strongest negative member of G2. Both surfaces, 4A and 5A, are
aspheric. Its relatively flat front vertex and much steeper rear vertex define a
negative meniscus, consistent with the patent description. The positive conic
constant on 4A is copied directly from the source equation. The modeled 4A
semi-diameter (15.65 mm) is the smallest that passes the full-frame corner chief
ray at wide at both focus ends. [1, ¶0191, ¶0199]

### L4 — Biconcave Negative

nd = 1.77250, νd = 49.62. Glass: 773496 — lanthanum glass class. f = -89.935 mm.

L4 is a spherical biconcave element behind the thick air space following L3.
Its negative power supplements the negative G2 assembly, while its different
dispersion provides another chromatic degree of freedom. The following 0.40 mm air
gap is retained literally. No specific astigmatism, coma or distortion contribution
is assigned from power sign alone. [1, ¶0191]

### L5 — Positive Meniscus

nd = 1.94595, νd = 17.98. Glass: 946180 — high-dispersion flint class. f = +47.476 mm.

L5 is the positive meniscus at the rear of the net-negative G2 group. Its high
index and low Abbe number are compatible with a dense high-dispersion flint family.
HOYA's published FDS18 coordinates are a candidate, not an attribution. The large
variable distance after L5 leads to the stop and G3, rather than representing
thickness within an element. [1, ¶0191; 5]

### L6 — Pos. Meniscus (2× Asph)

nd = 1.88202, νd = 37.22. Glass: 882372 — high-index glass class. f = +44.928 mm.

L6 is the positive leading meniscus of G3, separated from the aperture by the
published 1.50 mm air interval. Both faces, 11A and 12A, are aspheric. This location
lets their shapes act on bundles near the stop, but the individual signs of the
polynomial terms do not prove a unique aberration allocation. The same native glass
coordinate as L3 is retained without presuming common production supply. [1, ¶0192, ¶0199]

### L7 — Biconvex Positive (1× Asph)

nd = 1.77250, νd = 49.47. Glass: 773495 — lanthanum glass class. f = +81.578 mm.

L7 is a positive biconvex element with an aspheric rear face, 14A. Paragraph
0197 explicitly assigns this element the transverse blur-correction movement.
The model remains centered; it does not simulate an OSS actuator,
decentering range, control loop or stabilized image quality. Its axial placement is
retained as part of G3. [1, ¶0192, ¶0197]

### L8 — Biconcave Negative

nd = 1.75520, νd = 27.53. Glass: 755275 — dense flint class. f = -14.379 mm.

L8 is the negative member of the L8/L9 cemented pair. Its thin center sits
against a strongly curved shared interface. Fig. 13 draws the pair as one
square-cut block, so all three faces share one modeled semi-diameter (9.6 mm),
the height at which the biconvex L9 still keeps a positive edge. That value is
a modeled limit, not a published dimension. [1, ¶0192]

### L9 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: 497816 — low-dispersion crown class. f = +23.930 mm.

L9 is the positive low-dispersion member of the second cemented pair. Its
large Abbe number fits Sony's single ED element, so the data file tags it as an
inferred ED position, but the source does not identify a particular
fluorophosphate glass or its partial dispersion. The pair remains net negative. No apochromatic or
secondary-spectrum performance follows from this Abbe number alone. [1, ¶0192; 2]

### L10 — Biconvex Positive (2× Asph)

nd = 1.73077, νd = 40.50. Glass: 731405 — lanthanum glass class. f = +22.949 mm.

L10 is the positive biconvex rear element of G3, with both faces 18A and 19A
aspheric. The following variable gap separates G3 from the focusing element. The
polynomial signs describe departures from the base surfaces; they are not an
independent proof of which aberrations are corrected. The L-LAM family and HOYA
molding-glass candidates remain distinct in the material evidence. [1, ¶0192, ¶0199]

### L11 — Neg. Meniscus (2× Asph)

nd = 1.77250, νd = 49.47. Glass: 773495 — lanthanum glass class. f = -38.918 mm.

L11 is the negative meniscus forming G4, with both faces 20A and 21A
aspheric. The patent states that axial motion of this group changes focus from
infinity to a close distance. It supplies no numerical close-focus state; the
model's G4 travel is reconstructed from the marketed 0.4 m minimum focus
distance (see "Focus Mechanism"). [1, ¶0189, ¶0193]

### L12 — Plano-Concave

nd = 1.48749, νd = 70.44. Glass: 487704 — low-dispersion crown class. f = -1232.066 mm.

L12 is the weak negative plano-concave element forming G5. Its front radius
is finite and negative; its rear face is planar. It is an optical lens, not a cover
glass or inactive dummy plane. The original BF air distance follows its planar
exit directly. Its weak standalone power remains distinct from the patent's
image-side pupil and ray-angle rationale for the group. [1, ¶0194–0195]

## Glass Identification and Selection

Ten distinct native nd/νd pairs occur in the twelve elements. Table 7 does not name
a glass vendor. The data file uses six-digit coordinate codes plus qualified
classes. The catalog spectra resolved from them are substitutes, not confirmed
material identities. No C/F/g line indices or ΔPgF values are added to the
elements.

The catalog resolution is shown below. Selection by small coordinate residual is
not evidence of original supply and can change when the shared catalog changes.

| Element | Source nd | Source νd | Catalog spectral proxy | Status                |
| ------- | --------: | --------: | ---------------------- | --------------------- |
| L1      |   1.84666 |     23.78 | J-SF03 (Hikari)        | Coordinate proxy only |
| L2      |   1.61800 |     63.39 | S-PHM52 (Ohara)        | Coordinate proxy only |
| L3      |   1.88202 |     37.22 | M-TAFD307 (Hoya)       | Coordinate proxy only |
| L4      |   1.77250 |     49.62 | J-LASF016 (Hikari)     | Coordinate proxy only |
| L5      |   1.94595 |     17.98 | FDS18 (Hoya)           | Coordinate proxy only |
| L6      |   1.88202 |     37.22 | M-TAFD307 (Hoya)       | Coordinate proxy only |
| L7      |   1.77250 |     49.47 | M-TAF105 (Hoya)        | Coordinate proxy only |
| L8      |   1.75520 |     27.53 | E-FD4 (Hoya)           | Coordinate proxy only |
| L9      |   1.49700 |     81.61 | H-FK61 (CDGM)          | Coordinate proxy only |
| L10     |   1.73077 |     40.50 | L-LAM69 (Ohara)        | Coordinate proxy only |
| L11     |   1.77250 |     49.47 | M-TAF105 (Hoya)        | Coordinate proxy only |
| L12     |   1.48749 |     70.44 | N-FK5 (Schott)         | Coordinate proxy only |

The primary-source checks distinguish several useful ambiguities. OHARA S-TIH53
matches L1's printed coordinates; the catalog resolver chooses another
coordinate-compatible curve. HIKARI J-LASF016 matches L4. HOYA's 2019 revision
changes M-TAF1's Abbe number from 49.47 to 49.46, explaining why a historical
candidate for L7/L11 need not match a modern displayed coordinate exactly. OHARA
S- and L-prefix families are not interchangeable. The L-LAM69 webpage and stored
catalog coordinate differ slightly; neither is used to overwrite L10's patent
index. [4–6]

Current OHARA, HOYA, Schott, HIKARI and Sumita catalogs were compared with the
printed coordinates. The H-FK61 spectrum used for L9 could not be confirmed
against a current CDGM catalog. None of these comparisons identifies the original
supplier or melt. The 2019 HOYA change also records
TAF1’s νd change from 49.62 to 49.63; L4’s literal 49.62 remains unchanged. [5,8]

L1/L2 and L8/L9 pair opposite powers with different dispersions, which is a
reasonable first-order color-balancing structure. That observation is weaker than
a demonstrated achromatization or APO result. Unknown melt spectra and inferred
clear apertures preclude a production performance claim.

## Focus Mechanism

Focus is internal: G4 (L11) is the patent's axial focusing group, but Example 3
prints no finite-object spacing rows, focus travel or close-focus magnification.
[1, ¶0189] The close-focus state is therefore **reconstructed**. G4 moves toward the
image until a paraxial object 0.4 m from the printed image plane is in focus, with
d19 + d21 held constant and BF unchanged:

| State  | d19 ∞ → 0.4 m (mm) | d21 ∞ → 0.4 m (mm) | G4 travel (mm) | Magnification |
| ------ | -----------------: | -----------------: | -------------: | ------------: |
| Wide   |      5.86 → 6.8030 |      5.58 → 4.6370 |          0.943 |        0.078× |
| Middle |      3.59 → 5.4498 |      7.84 → 5.9802 |          1.860 |        0.144× |
| Tele   |      2.00 → 4.7932 |      9.44 → 6.6468 |          2.793 |        0.205× |

The tele magnification agrees with Sony's specified 0.20×. The travel is a model
reconstruction, not Sony's focus cam.

All three published zoom states are retained, including the G2 reversal bracket.
Intermediate states linearly interpolate the source gaps; those states are
computational samples, not measured cams or patent-published positions. The
printed image plane is retained rather than the computed paraxial focus.

## Aspherical Surfaces

The nine aspheric faces are 4A/5A on L3, 11A/12A on L6, 14A on L7, 18A/19A on L10,
and 20A/21A on L11. Numerical Expression 1 uses the conventional base:

z(h) = c h² / [1 + sqrt(1 − (1 + K)c²h²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰.

Here c = 1/R, h and z are in mm, and **K equals the published κ**. No minus-one
conversion applies. Coefficient units are mm^(1−order). There is no dimensional
scale change. The source publishes no A12 or higher terms and no odd-order
terms; none are added. [1, ¶0139, Table 8]

| Surface |     K |          A4 |          A6 |          A8 |         A10 |
| ------- | ----: | ----------: | ----------: | ----------: | ----------: |
| 4A      | 9.399 |  5.0545e-06 | -1.9085e-08 |  1.4671e-11 |  1.2449e-14 |
| 5A      | 0.000 | -2.6430e-06 |  6.2786e-09 | -1.4840e-10 | -9.8534e-13 |
| 11A     | 0.000 | -1.7333e-06 | -4.3031e-07 |  5.3145e-09 | -1.9092e-11 |
| 12A     | 0.000 |  1.3809e-06 | -5.7456e-07 |  7.7232e-09 | -3.1256e-11 |
| 14A     | 0.000 | -6.4561e-07 |  1.9499e-07 | -3.0532e-09 |  1.6155e-11 |
| 18A     | 0.000 | -2.0025e-05 |  6.1888e-08 | -7.0364e-10 |  4.4094e-13 |
| 19A     | 0.000 |  1.5915e-06 |  5.6216e-08 | -1.0189e-09 |  1.1571e-12 |
| 20A     | 0.000 | -2.7694e-06 |  1.7991e-07 | -3.2400e-09 |  1.3050e-11 |
| 21A     | 0.000 | -3.7192e-06 |  1.0869e-07 | -2.4497e-09 |  1.0090e-11 |

The nonzero positive conic on 4A changes the base profile as well as its
polynomial departure. The other faces use spherical bases. Positive polynomial
departure means greater positive axial sag than the stated base at that radius;
it does not automatically mean reduced spherical aberration. Alternating higher
orders can reverse a leading-term trend near the edge. Manufacturing method is
not established by the numerical coefficients.

The following departures are evaluated only at the **modeled** semi-diameters,
not at source-published clear apertures:

| Surface | Modeled radius (mm) | Polynomial departure (mm) | Total departure from same-R sphere (mm) |
| ------- | ------------------: | ------------------------: | --------------------------------------: |
| 4A      |              15.650 |                 +0.086569 |                               +0.087931 |
| 5A      |              15.300 |                 -1.202541 |                               -1.202541 |
| 11A     |              10.500 |                 -0.123520 |                               -0.123520 |
| 12A     |              10.500 |                 -0.121239 |                               -0.121239 |
| 14A     |              10.200 |                 +0.051800 |                               +0.051800 |
| 18A     |              12.500 |                 -0.631144 |                               -0.631144 |
| 19A     |              12.500 |                 -0.246246 |                               -0.246246 |
| 20A     |              11.800 |                 -0.102871 |                               -0.102871 |
| 21A     |              11.800 |                 -0.171406 |                               -0.171406 |

The modeled apertures stay within each surface's conic domain and rim-slope
limits.

## Conditional Expressions

Table 10 lists β5w = 1.019 and the G4 shape factor as 1.446. The model gives
β5w = 1.019000700 from the G5 matrix and the computed wide-end paraxial image
conjugate, and (R20 + R21)/(R20 − R21) = 1.446428571. Thus the stated conditions
1.0 < β5w ≤ 4.0, 1.018 < β5w ≤ 4.0 and 0.7 < shape factor ≤ 3.0 are satisfied.
[1, Table 10]

## Image Stabilization

Paragraph 0197 identifies L7 as the group moved perpendicular to the optical axis
for blur correction. Sony's corresponding product specifies Optical SteadyShot.
The source provides aberration illustrations for blur correction, but the
model is a centered sequential prescription. No mechanical decenter limit,
actuator specification, closed-loop behavior or residual stabilized performance
is inferred. [1, ¶0197, Figs. 17–18; 2]

## First-Order Data and Model Scope

The first-order quantities below are d-line values at infinity focus. EFL is the
Gaussian focal length in air. Computed BFD is from surface 23's rear vertex. The
printed BF is kept as the image-plane distance; track ends at that printed plane.

| State  | Printed f (mm) | Computed EFL (mm) | Printed BF (mm) | Computed BFD (mm) | Track to printed plane (mm) |
| ------ | -------------: | ----------------: | --------------: | ----------------: | --------------------------: |
| Wide   |          24.72 |         24.712006 |           21.95 |         22.065575 |                  111.210000 |
| Middle |          47.00 |         46.988490 |           35.79 |         35.911967 |                  124.840000 |
| Tele   |          67.90 |         67.858339 |           45.74 |         45.746766 |                  140.080000 |

The computed BFD exceeds the printed BF by +0.116, +0.122 and +0.007 mm. No
single misprint (sign, digit, transposition or decimal shift in any row) removes
these differences. A real-ray, d-line on-axis trace at F/4.10 places the
minimum-RMS focus 0.121, 0.112 and 0.075 mm ahead of the paraxial focus, so the
printed BF coincides with on-axis best focus at wide and middle; at tele the
positive tangential field in Fig. 16 plausibly pulls the chosen plane back toward
paraxial. Example 1 of the same patent shows the same pattern (BF differences of
+0.053, −0.007 and −0.107 mm), so the printed Bf is read as the designer's
best-focus image plane rather than a paraxial value. The traced spherical
aberration and distortion match Figs. 14–16. The tele EFL is 0.06 % short of the
printed 67.90 mm, also as in Example 1. [1, Tables 3, 9; Figs. 14–16]

The signed surface-by-surface Petzval sum is +0.001782350117 mm⁻¹. It is computed
using each actual transition's φ/(n n′), including cemented transitions; it is not
an asserted final field-curvature performance or a sum of standalone element
powers.

The physical stop radii are inferred, through exact on-axis tracing, from F/4.10:
5.611382511, 7.158931518 and 8.251085818 mm. Agreement with the target f-number is a
calibration, not independent verification of an unpublished diaphragm diameter.
The iris radii interpolate with zoom and do not change with focus. No intermediate
constant-f-number or near-focus exposure claim is implied.

Full-field chief rays pass at every zoom state. Peripheral vignetting at wide is
heavy and is retained: the patent's 42.42° half-field reaches 20.8 mm image
height, so the full-frame corner relies on in-camera correction of the roughly
−7.5 % wide-angle barrel distortion shown in Fig. 14. This is not an unvignetted full-frame or
full-pupil claim, nor a validated MTF prediction.

## Sources and References

1. Maruyama, M.; Hosoi, M.; Koizumi, H. Sony Corporation.
   [US 2015/0085165 A1, _Zoom lens and imaging apparatus_](https://patents.google.com/patent/US20150085165A1/en),
   published 2015-03-26. PDF pp. 26–27 for conventions, p. 28 Tables 1–3, p30
   Table 7, p31 Tables 8–10, p14 Fig. 13. Paragraphs and table numbers in this
   analysis refer to this exact publication and Example 3.
2. Sony. [SEL2470Z specifications and features](https://www.sony.com.sg/electronics/camera-lenses/sel2470z/specifications).
   Product data and construction counts, accessed 2026-10-02.
3. Sony Electronics Asia Pacific.
   [_Sony Debuts First Full-Frame E-mount Lenses_](<https://www.sony-asia.com/corporate/resources/en_AP/pdf/AP(16October13)-SonyDebutsFirstFull-FrameE-mountLenses.pdf>),
   2013-10-16, pp1,3,6. Announcement and availability timing.
4. OHARA. [S-TIH/S-NPH table](https://oharacorp.com/glass-type/s-tih-s-nph/),
   [S-FPL table](https://oharacorp.com/glass-type/s-fpl/),
   [L-LAM69](https://oharacorp.com/glass/l-lam69/). Candidate coordinates and
   family distinctions only, accessed 2026-10-02.
5. HOYA. [Optics news](https://www.hoya-opticalworld.com/japanese/news/index.html),
   [2019 catalog changes](https://www.hoya-opticalworld.com/chinese/datadownload/data_up2019.html),
   [current data downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html).
   FDS18 coordinates, historical M-TAF1 change and catalog provenance.
6. HIKARI. [_Optical Glass_ catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf),
   PDF p145, J-LASF016; accessed 2026-10-02.
7. [US9042030B2](https://patents.google.com/patent/US9042030B2/en), granted family
   member, Tables 7 and 9. Used only to check repeated source quantities;
   it does not replace the selected A1 transcription.
8. Manufacturer glass catalogs:
   [OHARA catalog](https://oharacorp.com/glass-catalog/),
   [HOYA catalog](https://www.hoya-opticalworld.com/english/datadownload/index.html),
   [Schott catalog](https://www.schott.com/en-gb/products/optical-glass-p1000267),
   [HIKARI catalog](https://www.hikari-g.co.jp/optical_glass/catalog/),
   [Sumita catalog](https://www.sumita-opt.co.jp/ja/download/).
   Current manufacturer coordinates are candidate evidence, not a patent-era melt
   identification. Retrieved 2026-10-02.
