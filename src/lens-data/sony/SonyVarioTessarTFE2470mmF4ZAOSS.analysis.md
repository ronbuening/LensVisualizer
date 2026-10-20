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

The accompanying prescription is **DIAGNOSTIC_ONLY**: a literal-table optical
model, not a verified production-lens model. It preserves the selected patent
numbers despite an unresolved difference between the computed first-order system
and the printed focal/back-focus quantities. Its modeled apertures, inferred iris
schedule and approximate catalog spectra support bounded diagnostic exploration.
They do not recover a production prescription, establish production defects or
supply missing manufacturing dimensions.

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
magnification. Neither finite-focus quantity is reproduced by this infinity-only
model. The source prescription is unscaled. No optional cover/filter plate is
invented from generic patent prose. [1,2,3]

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

The isolated functional-group focal lengths computed from the literal rows are:

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
variable gap follows L2. The candidate's generic coordinate label may select a
catalog spectral proxy, but it does not determine a phosphate-crown supplier. [1, ¶0190]

### L3 — Neg. Meniscus (2× Asph)

nd = 1.88202, νd = 37.22. Glass: 882372 — high-index glass class. f = -19.564 mm.

L3 is the strongest negative member of G2. Both surfaces, 4A and 5A, are
aspheric. Its relatively flat front vertex and much steeper rear vertex define a
negative meniscus, consistent with the patent description. The positive conic
constant on 4A is copied directly from the source equation. Clear aperture is
modeled separately from the vertex prescription and is constrained by the actual
profile, not by a universal radius ratio. [1, ¶0191, ¶0199]

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
The diagnostic prescription remains centered; it does not simulate an OSS actuator,
decentering range, control loop or stabilized image quality. Its axial placement is
retained as part of G3. [1, ¶0192, ¶0197]

### L8 — Biconcave Negative

nd = 1.75520, νd = 27.53. Glass: 755275 — dense flint class. f = -14.379 mm.

L8 is the negative member of the L8/L9 cemented pair. Its thin center and
strongly curved shared interface make the distinction between outer material entry
and internal cemented clearance important. The diagnostic outer entrance aperture
is narrower than the shared interface so sampled peripheral rays are intercepted
at a material boundary instead of first clipping inside the doublet. Those
semi-diameters are modeled limits, not published dimensions. [1, ¶0192]

### L9 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: 497816 — low-dispersion crown class. f = +23.930 mm.

L9 is the positive low-dispersion member of the second cemented pair. Its
large Abbe number is compatible with the production lens's ED-element count, but
the source does not identify a particular fluorophosphate glass or its partial
dispersion. The pair remains net negative in the literal model. No apochromatic or
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
infinity to a close distance. It supplies no numerical close-focus state, so the
candidate preserves only the three infinity zoom placements. No travel amount is
inferred from the marketed minimum focus distance. [1, ¶0189, ¶0193]

### L12 — Plano-Concave

nd = 1.48749, νd = 70.44. Glass: 487704 — low-dispersion crown class. f = -1232.066 mm.

L12 is the weak negative plano-concave element forming G5. Its front radius
is finite and negative; its rear face is planar. It is an optical lens, not a cover
glass or inactive dummy plane. The original BF air distance follows its planar
exit directly. Its weak standalone power remains distinct from the patent's
image-side pupil and ray-angle rationale for the group. [1, ¶0194–0195]

## Glass Identification and Selection

Ten distinct native nd/νd pairs occur in the twelve elements. Table 7 does not name
a glass vendor. The diagnostic annotations use six-digit coordinate codes plus
qualified classes. Candidate spectra resolved by software are substitutions for
exploration, not confirmed material identities. No C/F/g line indices or dPgF
values have been invented on the elements.

The actual runtime resolution at the recorded code revision is shown below.
Selection by small coordinate residual is not evidence of original supply and can
change when the shared catalog changes.

| Element | Source nd | Source νd | Runtime spectral proxy | Status                |
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
matches L1's printed coordinates; the runtime happens to choose another
coordinate-compatible curve. HIKARI J-LASF016 matches L4. HOYA's 2019 revision
changes M-TAF1's Abbe number from 49.47 to 49.46, explaining why a historical
candidate for L7/L11 need not match a modern displayed coordinate exactly. OHARA
S- and L-prefix families are not interchangeable. The L-LAM69 webpage and stored
catalog coordinate differ slightly; neither is used to overwrite L10's patent
index. [4–6]

The source-first independent review freshly scanned manufacturer catalogs from
OHARA, HOYA, Schott, HIKARI and Sumita. Relevant numerical rows, download identities
and hashes are retained in the dossier. CDGM’s official catalog download returned
a missing-file response, so the runtime H-FK61 spectrum remains a pinned project
proxy without fresh primary-catalog confirmation. None of these comparisons
identifies the original supplier or melt. The 2019 HOYA change also records
TAF1’s νd change from 49.62 to 49.63; L4’s literal 49.62 remains unchanged. [5,8]

L1/L2 and L8/L9 pair opposite powers with different dispersions, which is a
reasonable first-order color-balancing structure. That observation is weaker than
a demonstrated achromatization or APO result. Unknown melt spectra, inferred clear
apertures and retained source-plane defocus preclude a production performance
claim from the diagnostic model.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. G4/L11 is the source-identified
axial focusing group, but there are no finite-object spacing rows, focus travel
amounts or conjugate magnifications for Example 3. Every focus vector duplicates
its infinity value. Operating the focus parameter therefore does not create an
internally reconstructed near-focus prescription. [1, ¶0189]

The data retain 0.4 m as Sony's marketed MFD, with an explicit statement that it is
not implemented as a verified conjugate. Sony's 0.20× production magnification is
likewise not claimed for this model. A future physically constrained reconstruction
would require additional evidence and a separate solvability check.

All three published zoom states are retained, including the G2 reversal bracket.
Intermediate states linearly interpolate the source gaps; those states are
computational samples, not measured cams or patent-published positions. The
physical source image plane is retained independently of the computed paraxial
focus. No manual replacement of BF, image-plane shift, or hidden refocus is made.

## Aspherical Surfaces

The nine aspheric faces are 4A/5A on L3, 11A/12A on L6, 14A on L7, 18A/19A on L10,
and 20A/21A on L11. Numerical Expression 1 uses the conventional base:

z(h) = c h² / [1 + sqrt(1 − (1 + K)c²h²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰.

Here c = 1/R, h and z are in mm, and **K equals the published κ**. No minus-one
conversion applies. Coefficient units are mm^(1−order). There is no dimensional
scale change. Required A12 and A14 slots are zero because the source publishes no
such terms; no odd-order or higher nonzero coefficient is invented. [1, ¶0139, Table 8]

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
| 4A      |              15.300 |                 +0.084966 |                               +0.086210 |
| 5A      |              15.300 |                 -1.202541 |                               -1.202541 |
| 11A     |               9.700 |                 -0.098050 |                               -0.098050 |
| 12A     |               9.700 |                 -0.091556 |                               -0.091556 |
| 14A     |              10.200 |                 +0.051800 |                               +0.051800 |
| 18A     |              12.500 |                 -0.631144 |                               -0.631144 |
| 19A     |              12.500 |                 -0.246246 |                               -0.246246 |
| 20A     |              11.800 |                 -0.102871 |                               -0.102871 |
| 21A     |              11.800 |                 -0.171406 |                               -0.171406 |

The apertures obey the current conic-domain and actual-rim-slope checks. No
universal sd/|R| rule or drawing-scale adjustment is used to hide invalid geometry.

## Conditional Expressions

Table 10 lists β5w = 1.019 and the G4 shape factor as 1.446. The literal model gives
β5w = 1.019000700 from the G5 matrix and the computed wide-end paraxial image
conjugate, and (R20 + R21)/(R20 − R21) = 1.446428571. Thus the stated conditions
1.0 < β5w ≤ 4.0, 1.018 < β5w ≤ 4.0 and 0.7 < shape factor ≤ 3.0 are satisfied.
These checks do not resolve the separately printed BF discrepancy. [1, Table 10]

## Image Stabilization

Paragraph 0197 identifies L7 as the group moved perpendicular to the optical axis
for blur correction. Sony's corresponding product specifies Optical SteadyShot.
The source provides aberration illustrations for blur correction, but the
candidate is a centered sequential prescription. No mechanical decenter limit,
actuator specification, closed-loop behavior or residual stabilized performance
is inferred. [1, ¶0197, Figs. 17–18; 2]

## Numerical Diagnostic and Scope Limits

The first-order quantities below use the final literal data at the d line and
infinity-labeled zoom states. EFL is Gaussian focal length in air. Computed BFD is
from surface 23's rear vertex. The printed BF is preserved as the actual source
image plane distance; track ends at that printed plane.

| State  | Printed f (mm) | Computed EFL (mm) | Printed BF (mm) | Computed BFD (mm) | Track to printed plane (mm) |
| ------ | -------------: | ----------------: | --------------: | ----------------: | --------------------------: |
| Wide   |          24.72 |         24.712006 |           21.95 |         22.065575 |                  111.210000 |
| Middle |          47.00 |         46.988490 |           35.79 |         35.911967 |                  124.840000 |
| Tele   |          67.90 |         67.858339 |           45.74 |         45.746766 |                  140.080000 |

The corresponding computed-BFD minus printed-BF residuals are +0.115575,
+0.121967 and +0.006766 mm. The data do not substitute the computed focus for the
source image plane. The actual runtime's prepared image coordinates retain the
printed gaps, so the residual is operationally present.

Separate scalar reduced-angle and ABCD calculations agree with the real project
paraxial engine. The raw last-printed-digit comparisons remain unresolved. An
unsuccessful bounded simultaneous rounding diagnostic is not proof that an
unpublished full-precision design or production lens is defective. No corrected
radius, index or thickness can be inferred from that failed fit.

The signed surface-by-surface Petzval sum is +0.001782350117 mm⁻¹. It is computed
using each actual transition's φ/(n n′), including cemented transitions; it is not
an asserted final field-curvature performance or a sum of standalone element
powers.

The physical stop radii are inferred, through exact on-axis tracing, from F/4.10:
5.611382511, 7.158931518 and 8.251085818 mm. Agreement with the target f-number is a
calibration, not independent verification of an unpublished diaphragm diameter.
The iris radii interpolate with zoom and remain fixed for the duplicate focus
slots. No intermediate constant-f-number or near-focus exposure claim is implied.

Usability checks cover 675 exact 3D ray cases over nine sampled zoom states. Of
these, 613 transmit through the model, 58 first clip at outer material boundaries,
and 4 peripheral aiming cases remain unavailable. The central and 0.6-half-field
bundles through 0.75 pupil radius pass, as do all full-source-field chief rays.
There is no sampled first clipping inside a cemented interface. The independent
audit reproduced that 675-case result and expanded the sample to 1,275 cases over
17 zoom states: 1,160 transmit, 110 first clip at outer material boundaries and
5 peripheral aiming cases remain unavailable. All required representative bundles
and full-field chiefs pass. Peripheral vignetting is retained; this is not an
unvignetted full-frame or full-pupil claim.

The real schema/geometry builder and production render diagnostics pass for the
candidate, with zero hidden material trim across 17 sampled zoom states. The
independent geometry check finds a minimum shared-band element thickness of
0.374244 mm, a minimum margin of 0.214736 mm against the 90%-of-gap intrusion
limit, and a maximum actual rim angle of 61.180566°. A focused TypeScript check
and production outline inspection support its use as a diagnostic model.

The sequential engine returns at the final optical surface and does not assert
its reachedImagePlane flag. Successful terminal rays were therefore explicitly
propagated forward to the retained printed image plane and compared with a
separately implemented vector trace. Maximum image-coordinate disagreement was
1.20e-9 mm over the successful sample. This confirms numerical agreement for
these rays without changing the source image plane. Those results do not imply production-lens fidelity, full application
integration, complete corpus tests, measured glass spectra or a validated MTF
prediction.

## Sources and References

1. Maruyama, M.; Hosoi, M.; Koizumi, H. Sony Corporation.
   [US 2015/0085165 A1, _Zoom lens and imaging apparatus_](https://patents.google.com/patent/US20150085165A1/en),
   published 2015-03-26. Original supplied PDF: pp26–27 for conventions, p30
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

8. Fresh manufacturer catalog downloads used in the independent source-first audit:
   [OHARA catalog](https://oharacorp.com/glass-catalog/),
   [HOYA catalog](https://www.hoya-opticalworld.com/english/datadownload/index.html),
   [Schott catalog](https://www.schott.com/en-gb/products/optical-glass-p1000267),
   [HIKARI catalog](https://www.hikari-g.co.jp/optical_glass/catalog/),
   [Sumita catalog](https://www.sumita-opt.co.jp/ja/download/).
   Current manufacturer coordinates are candidate evidence, not a patent-era melt
   identification. Retrieved 2026-10-02.
