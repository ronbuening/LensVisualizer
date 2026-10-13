## Patent Reference and Design Identification

**Patent:** JP 2024-066164 A
**Application Number:** JP 2022-175533
**Filed:** 1 November 2022
**Published:** 15 May 2024
**Inventor:** Yasuharu Yamada (山田 康晴)
**Applicant:** OM Digital Solutions Corporation
**Title:** 望遠光学系、および望遠光学系を備える撮像装置 (Telephoto optical system and imaging apparatus equipped with the telephoto optical system)
**Embodiment analyzed:** Example 1, numerical prescription in ¶0133; Figures 2–4

This analysis describes the patent-derived model paired with the OM SYSTEM
M.ZUIKO DIGITAL ED 90mm f/3.5 MACRO IS PRO data file. The commercial identification
is a correlation, not a manufacturer-confirmed production prescription.
The patent front page supplies the native inventor name; the Latin spelling is
supported by an official US publication for the same-named inventor at the same
applicant and address in a different patent family. [1, 4]

The following evidence converges on the commercial lens:

1. The prescription contains 18 lens elements in 13 air-separated groups, including
   five cemented doublets. The manufacturer publishes the same element/group count.
2. Its two lowest-dispersion elements have νd = 94.66, and four further elements
   have ED-class coordinates (νd = 68.62 to 81.61). This is consistent with the
   manufacturer's two Super ED and four ED elements, published as counts without
   positions; it does not identify proprietary materials. [11]
3. The two independently moving internal focus groups and separate rear
   stabilization subgroup agree with the manufacturer's floating-focus and
   in-lens stabilization descriptions.
4. The patent lists an infinity EFL of 88.21 mm, full field of 14.02°, and image
   semiheight of 10.82 mm, corresponding to a 21.64 mm image circle. These are
   consistent in scale with the marketed 90 mm lens and its Four Thirds coverage.
5. The published terminal magnification is β = −2.00. The derived object-to-source-
   image distance at this state is approximately 223.54 mm, close to the marketed
   0.224 m minimum focus distance. The derived distance is not a published object
   distance and does not establish an exact production conjugate.
6. The filing predates the manufacturer's 8 February 2023 announcement; publication
   followed the launch. Timing supports plausibility, not prescription identity.

The marketed f/3.5 aperture remains distinct from the patent table's FNO 3.64 and
Figure 3's more precise 3.638. No focal-length scaling has been applied: the model
retains the published dimensions at scale 1. The manufacturer's mechanical barrel
length must not be substituted for an optical vertex-to-image distance. [1–3]

## Optical Architecture

Example 1 is an all-spherical, long-focus macro design with a
positive–negative–positive–negative sequence of four functional groups. The
aperture stop lies between G2 and G3. The functional groups are distinct from the
13 air-separated components used for the commercial group count. [1, ¶0118]

| Functional group | Elements | Calculated d-line EFL in air | Function                                               |
| ---------------- | -------- | ---------------------------- | ------------------------------------------------------ |
| G1               | L1–L5    | +36.358 mm                   | Fixed positive front group                             |
| G2               | L6–L8    | -26.600 mm                   | Negative internal focus group, moving imageward        |
| G3               | L9–L11   | +36.361 mm                   | Positive internal focus group, moving objectward       |
| G4               | L12–L18  | -68.535 mm                   | Axially fixed rear assembly containing the IS subgroup |

The patent attributes the smaller beam diameters at the moving groups to the
positive front group, and associates the opposing focus-group powers and motions
with control of focus-dependent spherical aberration and field curvature.
These are the inventor's stated design arguments, rather than an element-resolved
aberration decomposition of the present model. [1, ¶¶0024–0030]

The rear assembly separates into G4a (L12), G4b (L13–L15), and G4c (L16–L18), with
negative, negative, and positive net powers respectively. Their calculated EFLs
are −103.013 mm, −27.032 mm, and +33.434 mm. G4b is the transverse stabilization
group; the prescription modeled here is centered. The diagram brackets G4 by
these three subgroups, as Figure 2 does, and marks G4b as the IS unit.
[1, ¶¶0112, 0123–0128]

Although the patent title uses “telephoto,” the infinity air-equivalent
first-vertex-to-source-image track is 152.0730 mm and its ratio to the calculated
88.2076 mm EFL is 1.7240. Thus the title does not imply a short-track telephoto
ratio below unity. The calculated infinity back focal distance in air, measured
from the last lens vertex, is 35.4020 mm. It is also below the EFL, so a retrofocus
classification is unsupported by these reference planes.

The source-listed camera-side plate OF is retained as a physical rear plate. The
last lens vertex is followed by 30.649 mm of air, 4.1082 mm of plate material
(nd = 1.51633, νd = 64.14), and 2.045 mm of air to the source image plane.
The physical first-vertex-to-image track is 153.4719 mm at infinity. The plate is
not counted among the 18 lens elements, consistent with the patent's statement
that it belongs to the imaging apparatus, and its thickness is not folded into
an air-equivalent final gap. [1, ¶0119; ¶0133, surfaces 32–35]

## Element-by-Element Analysis

The following focal lengths are calculated d-line thick-element focal lengths
with each element isolated in air. For cemented elements, these values do not
describe the actual glass-to-glass interface and must not be added to obtain a
doublet's power. The glass names are the model's coordinate-compatible spectral
analogues, not identified production suppliers. Shapes and element labels follow
the data file and the patent's front-to-rear numbering. [1, ¶¶0120–0126]

### L1 — Negative Meniscus

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA, spectral analogue). f = -153.9 mm.

L1 is the object-convex negative meniscus at the front of G1. Its negative
standalone power precedes the positive elements of the group; it therefore
participates in the front group's balance of surface powers rather than acting
as a positive collector by itself. The patent specifies a water-repellent,
anti-soiling coating on its front surface, but supplies no coating prescription
for quantitative transmission modeling. [1, ¶0120]

### L2 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA, spectral analogue). f = +79.9 mm.

L2 is the first positive singlet in G1. Its lower-dispersion coordinate is shared
with L3, while its separate air interfaces provide an independent bending degree
of freedom. Interpreting it as part of the front group's beam-concentrating action
follows the net group architecture; the prescription alone does not assign a
unique spherical- or coma-correction contribution to this singlet. [1, ¶¶0024, 0120]

### L3 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA, spectral analogue). f = +44.5 mm.

L3 supplies the positive member of D1, cemented to the high-index negative L4.
The contrast in refractive index and dispersion creates a chromatic design
degree of freedom within the fixed front group. The patent attributes suppression
of spherical and chromatic aberrations to the complete front-group arrangement,
not to a separately specified correction target for L3. [1, ¶¶0085–0086, 0120]

### L4 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA, spectral analogue). f = -57.6 mm.

L4 completes D1 as a negative meniscus convex toward the image. Its high index
and lower Abbe number contrast with L3. The air-to-air doublet matrix gives D1
a net EFL of +188.362 mm: the cemented pair is positive despite L4's
negative isolated power. That net value includes the real cemented interface;
it is not the sum of the isolated lens powers. [1, ¶0120]

### L5 — Biconvex Positive

nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA, spectral analogue). f = +58.4 mm.

L5 is the final positive singlet of G1 and uses one of the two very-low-dispersion
coordinates in the prescription. It places low-dispersion positive power before
the moving negative group. This is consistent with the front group's stated
chromatic role, but the catalogue analogue does not identify the manufacturer's
Super ED material or establish apochromatic correction. [1, ¶¶0085–0086, 0120]

### L6 — Positive Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA, spectral analogue). f = +48.8 mm.

L6 is the image-convex positive meniscus in D2, the leading cemented pair of G2.
Its low Abbe number contrasts with the negative crown-like L7. This is an example
of why a focus group's sign must be evaluated from its full matrix: the moving
negative group includes a positive element. No individual aberration magnitude
is inferred from that sign or glass class. [1, ¶0121]

### L7 — Biconcave Negative

nd = 1.69680, νd = 55.53. Glass: S-LAL14 (OHARA, spectral analogue). f = -30.7 mm.

L7 is the biconcave member of D2. The complete cemented pair has calculated EFL
−82.888 mm in air; it remains negative after the positive L6 is included. With
L8, it forms the negative G2 focus group. The patent's discussion of close-focus
spherical-aberration balance concerns G2 relative to G3, rather than L7 in
isolation. [1, ¶¶0031–0034, 0121]

### L8 — Biconcave Negative

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA, spectral analogue). f = -40.5 mm.

L8 is the separate biconcave element at the rear of G2. Its high Abbe number
places low-dispersion negative power in the moving group, illustrating that
low-dispersion glass is distributed across both power signs. Its role in the
chromatic balance must be evaluated in the full focused system; it is not
equivalent to a positive ED element merely because of its glass class. [1, ¶0121]

### L9 — Negative Meniscus

nd = 1.78880, νd = 28.43. Glass: S-NBH58 (OHARA, spectral analogue). f = -84.8 mm.

L9 is the object-convex negative meniscus of D3, followed by the very-low-
dispersion positive L10. This mixed-sign, mixed-dispersion pair sits immediately
behind the stop within G3. The patent explicitly relates the positive and
negative elements of G3 to control of axial and off-axis color as focus changes.
[1, ¶¶0089–0090, 0122]

### L10 — Biconvex Positive

nd = 1.43875, νd = 94.66. Glass: S-FPL55 (OHARA, spectral analogue). f = +45.9 mm.

L10 completes D3. Its very high Abbe number supplies low-dispersion positive
power against L9's more dispersive negative power. D3 has a calculated net EFL
of +98.572 mm in air. This supports a positive cemented contribution to G3,
without demonstrating complete achromatization of the pair or identifying an
exact secondary-spectrum residual. [1, ¶¶0087–0090, 0122]

### L11 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA, spectral analogue). f = +56.1 mm.

L11 is the positive singlet at the rear of G3. Together with L10 it realizes the
patent's preference for at least two positive elements in this group with Abbe
numbers of at least 80. The patent gives suppression of chromatic variation
from infinity into the macro range as the rationale. The data preserve the
different source Abbe coordinates for L8 and L11 even though their analogue
glass families are closely related. [1, ¶¶0087–0088, 0122]

### L12 — Biconcave Negative

nd = 1.51742, νd = 52.43. Glass: S-NSL36 (OHARA, spectral analogue). f = -103.0 mm.

L12 alone forms the negative subgroup G4a. It is fixed axially and precedes the
transverse stabilization group, so it is not one of the two axial focus groups.
Its placement is consistent with a distributed rear correction assembly; calling
it a quantitatively established field flattener would require an aberration
decomposition that is not supplied by its negative sign. [1, ¶¶0123–0124]

### L13 — Biconvex Positive

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA, spectral analogue). f = +35.0 mm.

L13 is the positive member of D4 in G4b. Its relatively dispersive high-index
glass is paired with the lower-index negative L14. It moves with the entire
stabilization subgroup during transverse compensation, not as a separate focus
element. The numerical model retains the centered position. [1, ¶¶0125, 0128]

### L14 — Biconcave Negative

nd = 1.53996, νd = 59.46. Glass: S-BAL12 (OHARA, spectral analogue). f = -26.1 mm.

L14 completes D4, whose calculated air-to-air EFL is −125.681 mm. The cemented
pair is therefore negative overall. Its combination with L15 gives the stronger
negative G4b subgroup used for image stabilization. These are net paraxial
power statements, not a prediction of decentered coma or stabilization efficiency.
[1, ¶¶0125, 0128]

### L15 — Biconcave Negative

nd = 1.62004, νd = 36.26. Glass: S-TIM2 (OHARA, spectral analogue). f = -34.1 mm.

L15 is the final negative singlet of G4b. It shares the transverse motion of the
cemented pair ahead of it. The patent places this subgroup behind G3 to reduce
the size and mass of the stabilizing assembly, but does not publish a decenter
stroke or an actuator model for this numerical example. [1, ¶¶0071–0072, 0125, 0128]

### L16 — Biconvex Positive

nd = 1.90043, νd = 37.37. Glass: TAFD37 (HOYA, spectral analogue). f = +57.3 mm.

L16 opens the positive rear subgroup G4c. It provides positive power using a
high-index analogue and remains axially fixed with the rear assembly. Its
position and sign support a rear positive relay interpretation; no individual
distortion or field-curvature correction is assigned from these facts alone.
[1, ¶¶0123, 0126]

### L17 — Biconvex Positive

nd = 1.58913, νd = 61.14. Glass: S-BAL35 (OHARA, spectral analogue). f = +28.0 mm.

L17 is the positive member of the final cemented doublet D5. Its higher Abbe
number contrasts with the negative L18, providing another chromatic degree of
freedom in the fixed rear assembly. D5 has a calculated net EFL of +85.733 mm
in air. The complete G4c remains positive even though G4 as a whole is negative.
[1, ¶¶0123, 0126]

### L18 — Biconcave Negative

nd = 1.78880, νd = 28.43. Glass: S-NBH58 (OHARA, spectral analogue). f = -37.3 mm.

L18 is the biconcave rear member of D5, followed by the physical air space and
camera-side plate. Its more dispersive negative power complements L17, but does
not by itself establish a flat image surface. The patent permits a water-
repellent, anti-soiling coating on the rear surface; that possibility is not
converted into a modeled coating or transmission curve. [1, ¶0126]

## Glass Identification and Selection

The table retains the patent's nd/νd coordinates. The named OHARA and HOYA
glasses are the model's annotations, not supplier identifications.
The source does not disclose C-, F-, or g-line indices, partial-dispersion
departures, glass trade names, or melts. Available OHARA, HOYA, SCHOTT, HIKARI,
CDGM, and SUMITA catalogues were compared; multiple coordinate-compatible
candidates remain possible. [1, ¶0133; 5–10]

| Elements | Model analogue | Catalogue vendor | Patent nd | Patent νd |
| -------- | -------------- | ---------------- | --------- | --------- |
| L1       | S-FSL5         | OHARA            | 1.48749   | 70.23     |
| L2, L3   | FCD515         | HOYA             | 1.59282   | 68.62     |
| L4       | TAFD55         | HOYA             | 2.00100   | 29.13     |
| L5, L10  | S-FPL55        | OHARA            | 1.43875   | 94.66     |
| L6       | S-TIH53        | OHARA            | 1.84666   | 23.78     |
| L7       | S-LAL14        | OHARA            | 1.69680   | 55.53     |
| L8       | S-FPL51        | OHARA            | 1.49700   | 81.54     |
| L9, L18  | S-NBH58        | OHARA            | 1.78880   | 28.43     |
| L11      | FCD1           | HOYA             | 1.49700   | 81.61     |
| L12      | S-NSL36        | OHARA            | 1.51742   | 52.43     |
| L13      | S-NBH56        | OHARA            | 1.85478   | 24.80     |
| L14      | S-BAL12        | OHARA            | 1.53996   | 59.46     |
| L15      | S-TIM2         | OHARA            | 1.62004   | 36.26     |
| L16      | TAFD37         | HOYA             | 1.90043   | 37.37     |
| L17      | S-BAL35        | OHARA            | 1.58913   | 61.14     |

OF uses an S-BSL7 analogue (OHARA) at its source nd = 1.51633 and νd = 64.14.
The OHARA S- prefixes are intentional; the model does not substitute L-series
molding glasses. Catalogue spectra provide a reproducible dispersion
approximation, while the printed nd/νd values remain authoritative.

The manufacturer lists two Super ED and four ED elements by count, without
positions. The data file marks L5 and L10 (νd = 94.66) as Super ED and L2, L3,
L8, and L11 (νd = 68.62 to 81.61) as ED: class-level matches to the patent
glasses, not positions from a manufacturer construction diagram. Its one Super
HR and one HR element are not assigned; six elements have nd above 1.78. [11]

The model represents FCD1 and TAFD37 with fitted Sellmeier approximations,
rather than the current HOYA catalogue polynomial coefficients. At C/d/F/g,
the largest index differences from those original polynomials are approximately
4.03 × 10⁻⁶ and 1.38 × 10⁻⁶, respectively. The fitted indices remain compatible
with the manufacturer’s five-decimal line-index tables, but their derived Abbe
numbers and partial dispersions are not identical to the catalogue values.
The printed source nd/νd values remain unchanged; these fits are spectral
approximations, not measured patent-glass spectra. [6]

The broad chromatic strategy is distributed rather than confined to a single
front achromat. G1 and G3 combine positive low-dispersion elements with more
dispersive negative partners; G2 includes low-dispersion negative power. Within
G3, the two positive high-Abbe elements and mixed-sign cemented pair correspond
directly to the patent's stated chromatic rationale. This explains the available
degrees of freedom without claiming that an individual doublet is perfectly
achromatic. No APO performance, production partial dispersion, or validated
secondary-spectrum residual is asserted. [1, ¶¶0085–0090]

## Focus Mechanism

The source describes floating internal focus: G1 and G4 stay fixed axially, G2
moves toward the image, and G3 moves toward the object as magnification increases.
The stop is stationary to the precision of the rounded tabulation. The four
published configurations are retained, with no reconstructed internal spacing
state. Values between them use piecewise-linear gap interpolation; they are not
a verified mechanical cam law. [1, ¶¶0127, 0131]

| Published state | D9 (mm) | D14 (mm) | D15 (mm) | D20 (mm) | G2 travel (mm) | G3 travel (mm) |
| --------------- | ------- | -------- | -------- | -------- | -------------- | -------------- |
| Infinity        | 1.1931  | 21.6627  | 27.7204  | 3.5261   | +0.0000        | +0.0000        |
| β = −0.50       | 5.4051  | 17.4507  | 20.4450  | 10.8015  | +4.2120        | -7.2754        |
| β = −1.00       | 10.5950 | 12.2607  | 13.8691  | 17.3774  | +9.4019        | -13.8514       |
| β = −2.00       | 18.2238 | 4.6320   | 2.8945   | 28.3520  | +17.0307       | -24.8259       |

Travel is relative to the infinity group vertex, positive imageward. The small
residual shifts of nominally fixed stations are source-rounding effects.

| Published state | Calculated EFL (mm) | Derived object-to-first-vertex distance (mm) | Derived object-to-source-image distance (mm) | Paraxial best-image shift from source plane (mm) |
| --------------- | ------------------- | -------------------------------------------- | -------------------------------------------- | ------------------------------------------------ |
| Infinity        | 88.2076             | ∞                                            | ∞                                            | -0.00126                                         |
| β = −0.50       | 76.5145             | 171.812                                      | 325.284                                      | -0.03126                                         |
| β = −1.00       | 62.4432             | 96.353                                       | 249.825                                      | -0.03624                                         |
| β = −2.00       | 38.0572             | 70.067                                       | 223.538                                      | -0.01957                                         |

The finite distances are calculated from the published magnification and the
rounded d-line prescription, and serve as focus-scale labels only. The viewer
solves its own object distance for each state, which can differ slightly;
neither is a published object distance. The patent's image plane is kept despite
the small residual defocus in the last column, and off-axis behavior for a
finite object is not established.

The manufacturer documents independently driven floating focus groups, but the
reviewed sources do not establish a specific focus-motor type for this prescription.
The manual distinguishes ordinary and S-MACRO operating ranges. At 1x it lists
effective f/4.5 in the ordinary range and f/6.3 in S-MACRO; at 2x, S-MACRO lists
effective f/8. [2; 3, printed p. 10]

The patent describes two focusing modes with different maximum iris diameters,
each constant within its mode, and prints no diameter. Figure 2 draws the stop
marks 9.3 ± 0.15 mm from the axis at infinity and 6.6 ± 0.15 mm at β = −2.00.
The smaller value is consistent with the printed FNO 0.51, which as focal length
over paraxial entrance-pupil diameter corresponds to a 6.5 mm stop semi-diameter
(the infinity stop would give 0.36), and with the manual: a 6.5 mm stop traces
to a working f/7.9 at 2x and f/6.1 at 1x, and the infinity stop to f/4.4 at 1x.
On the same reading the printed 2.71 and 1.61 correspond to 7.8 mm and 7.0 mm.
Figure 2 has no panel for those states, but the spherical-aberration curves of
Figures 3 and 4 fit the reading: at full aperture they end near −0.15, +0.02,
and −0.27 mm at 0.5x, 1x, and 2x, and the model gives −0.16, +0.02, and −0.27 mm
with stops of 7.8, 7.0, and 6.5 mm, against +0.32 and +0.23 mm at 1x and 2x with
the infinity stop. [1, ¶¶0101–0104, ¶0133; Figs. 2–4]

The model does not implement this change. It keeps the infinity stop, 9.172 mm
for f/3.638 and set by aperture calibration rather than a printed dimension, at
every focus state. Its close-focus beam is therefore wider than the patent's:
the traced working f-number at 2x is about f/6.2, set by the rim of L5, against
f/7.9 for the drawn stop. The printed 2.71, 1.61, and 0.51 are kept as source
labels only.

## Conditional Expressions

The following d-line quantities use the model's group boundaries. fTL is
the infinity system focal length; fA and fB refer to G2 and G3; f1 and fr refer
to G1 and G4. Bf is the source sensor spacing behind the last lens expressed as
air-equivalent distance, consistent with the tabulated comparison. [1, claims 1,
6, 11–12; ¶0130; Fig. 1]

| Condition | Published inequality     | Calculated | Figure 1 value |
| --------- | ------------------------ | ---------- | -------------- |
| (1)       | 0.64 ≤ abs(fA)/fB ≤ 0.86 | 0.731565   | 0.732          |
| (2)       | 2.0 ≤ fTL/f1 ≤ 2.8       | 2.426103   | 2.426          |
| (3)       | 0.30 ≤ Bf/fTL ≤ 0.53     | 0.401363   | 0.401          |
| (4)       | 1.0 ≤ fTL/abs(fr) ≤ 1.5  | 1.287038   | 1.287          |
| (5)       | 2.7 ≤ fTL/abs(fA) ≤ 3.8  | 3.316062   | 3.316          |

All five calculated values lie inside their stated bounds and round to the
published condition values. The patent connects the focus-group power ratio to
close-focus spherical-aberration balance, and the rear-group ratio to a compromise
between converter clearance and coma correction. Satisfying these inequalities
does not by itself validate every aberration curve or establish production
performance. [1, ¶¶0031–0034, 0073–0076, 0079–0082]

## Image Stabilization

G4b, comprising the L13–L14 cemented pair and L15, translates perpendicular to the
axis to compensate image motion. The patent explicitly identifies this subgroup
as the stabilizing unit; it remains part of the axially fixed rear assembly.
Its calculated centered EFL is −27.032 mm. No decenter range is published for
Example 1, and the modeled prescription contains no decentered stabilization
state. Consequently, stabilization stroke, corrected shake amplitude, and
decentered aberrations cannot be inferred from the centered model. [1, ¶¶0125,
0127–0128]

The manufacturer describes an in-lens stabilization mechanism that can cooperate
with body stabilization. This corroborates the commercial correlation but
supplies neither the production prescription nor a decenter law. [2]

## First-Order Results and Modeling Limitations

The computed infinity EFL of the rounded d-line prescription, 88.2076 mm, rounds
to the published 88.21 mm. The surface-by-surface Petzval sum is
+0.0013046033 mm⁻¹. It is a paraxial Petzval quantity, not the full
sagittal/tangential field-curvature result or a claim of a flat focal surface.

The printed air-equivalent total length, 152.0692 mm, differs from the sum of
the printed prescription, 152.0730 mm at infinity, by approximately +0.003805 mm.
The computed back focal distance and group focal lengths also do not reproduce
every printed final digit. These differences are compatible with the precision
of the tabulated spacings and indices; the source radii, gaps, indices, image
plane, and published states remain unchanged. [1, ¶¶0129–0133]

The following limitations determine how the displayed close-focus readouts
should be interpreted:

- Clear semi-diameters are estimated from Figure 2, including the steps it draws
  at the cemented joints, and checked by exact ray tracing at the four published
  states; the source does not publish them. The stop is sized at infinity, and
  the estimated rims can block peripheral rays at close focus: at 2x the drawn
  L5 rim, rather than the fixed stop, limits the on-axis beam.
- Ray fans at 1x and 2x are sparse. The off-axis chromatic spread can fall back
  to the chief ray alone, which is not a marginal-ray spread, and the
  spherical-aberration summary is unavailable at these states.
- At 2x the near-focus blur previews keep only 13, 13, 9, and 7 of 337 pupil rays
  at the four field heights, too few to read as smooth blur distributions.
- Some analysis panels send collimated light through the selected close-focus
  geometry; such readouts do not describe a finite object at the displayed focus
  distance. MTF for a finite object is unavailable, and off-axis performance for
  a finite object is not established.
- Rays that miss a clear aperture are blocked. The fraction that passes is a
  geometric count of ray samples, not measured throughput (coatings, absorption,
  and tolerances are not modeled), and does not establish unvignetted coverage.
- Catalogue glass identities are spectral analogues. Their wavelength behavior
  cannot establish the exact production materials, secondary spectrum, or APO
  performance.

## Sources and References

1. Japan Patent Office, **JP 2024-066164 A**, _望遠光学系、および望遠光学系を備える撮像装置_,
   published 15 May 2024. Original Japanese publication, `JP2024066164A.pdf`:
   front page; claims 1, 6, 11–21; ¶¶0024–0034, 0071–0090,
   0101–0104, 0112, 0116–0133; Example 1 table on printed/PDF pp. 17–18;
   Figures 1–2 on p. 35 and Figures 3–4 on p. 36. The original PDF governs
   the prescription, not a machine translation or a commercial lens drawing.
2. OM Digital Solutions Corporation, [launch announcement for the M.Zuiko Digital ED
   90mm F3.5 Macro IS PRO](https://learnandsupport.getolympus.com/sites/default/files/media/files/2023/03/OM_SYSTEM_Press%20Release_90mm.pdf),
   8 February 2023, especially pp. 1 and 3: commercial identity, element palette,
   floating-focus description, and in-lens stabilization.
3. OM Digital Solutions Corporation, [IM031 instruction manual](https://download.omsystem.com/pages/inst/mzded90f35macroispro/manual_mzded90f35macroispro.pdf),
   issue 2022.10, English printed pp. 9–11 (PDF pp. 7–9): operating modes,
   effective aperture table, mount, optical construction, and minimum focus distance.
4. United States Patent and Trademark Office, [US 2022/0413268 A1](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20220413268),
   front-page inventor and priority fields; corresponding Japanese publication
   JP 2023-005568 A, front page. These establish a Latin spelling for the matching
   native name at the same applicant/address. They are a different patent family
   from the analyzed publication and do not supply its prescription.
5. OHARA, [optical-glass catalogue archive](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip),
   1 July 2026, and associated S- and L-series tables; used for coordinate and
   catalogue-spectrum comparisons, preserving prefix distinctions.
6. HOYA, [optical-glass AGF catalogue including obsolete entries](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   7 July 2026; FCD515, TAFD55, FCD1, and TAFD37 analogue comparisons.
7. SCHOTT, [optical-glass catalogue download](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true),
   preserved catalogue snapshot retrieved 11 October 2026; alternative coordinates.
8. HIKARI, [all-glass catalogue workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx),
   preserved snapshot retrieved 11 October 2026; alternative coordinates.
9. CDGM, [September 2026 Zemax catalogue](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX),
   alternative coordinate and dispersion comparisons.
10. SUMITA, [optical-glass download service](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php),
    preserved archive retrieved 11 October 2026; alternative coordinates.
11. OM Digital Solutions Corporation, [M.Zuiko Digital ED 90mm F3.5 Macro IS PRO
    specifications](https://explore.omsystem.com/us/en/m-zuiko-ed-90mm-f3-5-macro-is-pro), viewed 13 October 2026: 18 elements in
    13 groups; 2 Super ED, 4 ED, 1 Super HR, and 1 HR elements; 7 circular blades;
    closest focus 0.250 m (0.224 m in S-MACRO); magnification 1.00x (2.00x).
