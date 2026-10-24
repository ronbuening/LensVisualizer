# SIGMA 60-600mm f/4.5-6.3 DG DN OS | Sports

## Patent Reference and Design Identification

**Patent:** JP 2023-180574 A
**Application Number:** JP 2022-093975
**Filed:** 2022-06-09
**Published:** 2023-12-21
**Inventor:** Ryosuke Sato
**Applicant:** Sigma Corporation
**Title:** Variable Magnification Image Formation Optical System
**Embodiment analyzed:** Numerical Example 5

The prescription is correlated with the Sigma 60–600mm F4.5–6.3 DG DN OS | Sports.
It describes three published zoom stations at infinity, with all source lengths retained at native scale.
The correlation is supported by construction and optical-system characteristics; it is not a
manufacturer confirmation that the numerical example is the unchanged production prescription.
This is the mirrorless DG DN design, distinct from the earlier DG OS HSM lens.

The source prescription appears in PDF pp.28–29, corresponding to printed pp.27–28.
Figure 41 is on PDF p.61, printed p.60. The PDF opens with a one-page English abstract,
which accounts for the one-page offset.

The convergent evidence is:

1. Both the selected design and the manufacturer specification contain 27 photographic elements
   in 19 air-separated groups. The patent's separate rear FL plate is not part of that count.
2. Sigma specifies two FLD and three SLD elements. The prescription includes two 95.10-Abbe
   fluorophosphate-class glasses, two 81.61-Abbe entries and one 68.62-Abbe entry, consistent with
   that special-glass pattern. These numerical classes do not establish a supplier or melt.
3. The native source zoom stations are 62.00, 190.20 and 580.00 mm at F4.64, F5.51 and F6.50.
   These remain distinct from the marketed 60–600 mm and F4.5–6.3 values.
4. The patent places a small axial focus group behind the positive stop-bearing group and a
   negative stabilization group in the fixed third group. The production lens has HLA autofocus
   and optical stabilization, consistent at the mechanism-category level.
5. The source image semi-height is 21.63 mm. Sigma identifies full-frame mirrorless coverage
   and L-Mount/Sony E-mount variants. Its announcement is dated 2023-01-12, following the
   application's 2022 filing; the public patent appeared later in 2023.
6. Sigma's construction diagram draws the same sequence and shapes: the L1–L2 doublet and L3
   in front, the image-convex L23 meniscus ahead of L24 in G7, and the negative-meniscus/biconvex
   doublet followed by a biconcave lens in G8. Its marked FLD and SLD elements fall at L3/L23 and
   L2/L14/L25, the positions of the 95.10- and 81.61/68.62-Abbe glasses.

The patent's other examples fit less well. Examples 1–4 have 25 or 26 elements; Example 6 has 28,
with a cemented G5; Example 7 reaches 673 mm; and Example 8 uses a 106.47-Abbe glass that does not
match Sigma's two-FLD/three-SLD description.

The manufacturer's quoted full angles are 39.6°–4.1°, compared with the patent's 38.05°–4.16°.
No angular or focal-length rescaling is applied to force the two descriptions into equality.
The production minimum focus range of 0.45–2.6 m is not used to fabricate a patent near-focus table.

## Optical Architecture

The optical train has eight functional groups, ordered positive–negative–negative–positive–
positive–negative–positive–negative. These functional groups are different from the 19
air-separated construction groups. All photographic refracting surfaces are spherical.
The source stop is surface 26, between L15 and L16 in G4 (¶0138).

The first pair of groups provides the principal zoom action. The patent explains that moving
G1 objectward and G2 imageward distributes the required zoom travel rather than assigning it
all to one group (¶¶0014, 0018–0024). G3 contains positive G3a ahead of negative G3b, the latter
being the optical-stabilization unit (¶¶0025, 0137). G4 provides positive power around the stop.
The later groups provide the focus and image-compensation arrangement described in ¶¶0016–0017.

The following group powers are calculated in air from the published surface intervals. They
are compound group powers, not sums of the isolated element focal lengths listed below.

| Group | Elements | Source surface interval | Calculated group EFL (mm) | Patent EFL (mm) |
|---|---|---|---:|---:|
| G1 | L1–L3 | 1–5 | +240.924 | +240.93 |
| G2 | L4–L6 | 6–10 | -67.913 | -67.91 |
| G3 | L7–L12 | 11–20 | -140.933 | -140.93 |
| G4 | L13–L19 | 21–32 | +58.175 | +58.18 |
| G5 | L20 | 33–34 | +87.042 | +87.04 |
| G6 | L21–L22 | 35–38 | -70.173 | -70.17 |
| G7 | L23–L24 | 39–42 | +288.002 | +288.00 |
| G8 | L25–L27 | 43–47 | -102.510 | -102.51 |
| G3a | L7–L9 | 11–15 | +61.530 | +61.53 |
| G3b | L10–L12 | 16–20 | -35.662 | -35.66 |

At tele, physical first-surface-to-image track divided by computed EFL is 0.679940, supporting a
telephoto classification at that state. This classification is not generalized to the wide state.
The rear FL plate is retained with its physical thickness and gaps; it is not replaced by
an air-equivalent gap in the implemented prescription.

At the published stations, G1, G4, G5, G6 and G7 move objectward and G2 moves imageward as the
system zooms from wide to tele. G3 and G8 remain fixed relative to the image to the precision
of the rounded spacing table (¶0134). The table below uses the first vertex of each functional
group, with the image plane at zero and negative distances toward the object.

| Group | Wide position (mm) | Middle position (mm) | Tele position (mm) |
|---|---:|---:|---:|
| G1 | -295.5472 | -349.0129 | -394.2494 |
| G2 | -268.7664 | -238.1268 | -233.1258 |
| G3 | -213.9654 | -213.9653 | -213.9653 |
| G4 | -139.7119 | -159.2130 | -184.7514 |
| G5 | -78.2702 | -100.1897 | -108.9201 |
| G6 | -71.8016 | -90.4897 | -102.4515 |
| G7 | -52.0025 | -70.7846 | -76.5459 |
| G8 | -44.8854 | -44.8854 | -44.8854 |

The tabulated gaps d32, d34 and d38 reverse their direction of change across the middle station.
A reversing gap does not by itself imply a reversing absolute group position. The source
positions are preserved; the solved path between them is described under Model Scope and Zoom Path.

## Element-by-Element Analysis

The focal length on each first line is the calculated standalone thick-element focal length
in air, using that element's two physical surfaces and centre thickness. At a cemented junction,
this hypothetical isolated-element value differs from the actual inter-glass surface power.
Glass names are explicitly catalog-coordinate equivalents rather than factory identifications.

### L1 — Negative Meniscus

nd = 1.87070, νd = 40.73. Glass: TAFD32 class (HOYA coordinate equivalent). f = -347.250 mm.

L1 is the object-convex negative meniscus at the front of G1, cemented to L2. The patent's
front-group discussion assigns a negative lens to the front assembly's chromatic balancing
strategy (¶¶0058, 0135). This is a stated architectural purpose, not a measured separation of
L1's chromatic contribution from its two positive neighbours.

### L2 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 class (HOYA coordinate equivalent). f = +260.587 mm.

L2 is the positive meniscus sharing surface 2 with L1. Its lower dispersion contrasts with
L1's higher-index glass, but the cemented pair is only weakly positive as a complete unit.
The shared interface is represented once, with the medium after that surface assigned to L2
(¶0135). The factory glass supplier is not specified by the patent.

### L3 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 class (HOYA coordinate equivalent). f = +306.151 mm.

L3 is a separate object-convex positive meniscus. It has the largest Abbe number among G1's
positive lenses and supplies the material coordinate used by conditions 12 and 13. Paragraphs
0062–0068 explicitly discuss high Abbe number and anomalous partial dispersion for this
position; the absolute source θgF is retained rather than replaced by a catalog estimate.

### L4 — Biconvex Positive

nd = 1.80809, νd = 22.76. Glass: FD225 class (HOYA coordinate equivalent). f = +121.981 mm.

L4 is the positive member of the first G2 doublet. It precedes the strongly negative L5
and the separate negative L6. The patent specifically prefers a positive lens together with
two negative lenses in this zoom group (¶¶0018, 0136), connecting the arrangement to chromatic
balance while distributing the negative group power.

### L5 — Biconcave Negative

nd = 1.87070, νd = 40.73. Glass: TAFD32 class (HOYA coordinate equivalent). f = -58.827 mm.

L5 is biconcave and shares surface 7 with L4. The doublet has negative net power despite
L4's positive standalone power. The material retains the exact source index and Abbe number;
no catalog coordinate has been substituted into the prescription (¶0136).

### L6 — Biconcave Negative

nd = 1.87070, νd = 40.73. Glass: TAFD32 class (HOYA coordinate equivalent). f = -162.894 mm.

L6 is the separate biconcave lens that completes G2. It shares L5's published glass coordinate.
The air separation from the doublet provides an additional spacing degree of freedom within
the negative group, while the group as a whole translates imageward during zooming (¶0136).
No independent aberration contribution is inferred from its negative power alone.

### L7 — Biconvex Positive

nd = 1.51742, νd = 52.15. Glass: E-CF6 class (HOYA coordinate equivalent). f = +61.999 mm.

L7 is the biconvex front member of the G3a doublet. G3a precedes the negative stabilizing
subgroup and has positive compound power. The patent connects this ordering with control of
the ray height entering the stabilizer and with balancing the third group's aberrations
(¶¶0025, 0137).

### L8 — Negative Meniscus

nd = 1.68960, νd = 31.14. Glass: E-FD80 class (HOYA coordinate equivalent). f = -149.064 mm.

L8 is the image-convex negative meniscus cemented behind L7. The source curvature signs and
common interface define its shape without requiring a separate fictitious cement layer.
Together with L9, the L7–L8 doublet forms the positive G3a subgroup described in ¶0137.

### L9 — Positive Meniscus

nd = 1.51742, νd = 52.15. Glass: E-CF6 class (HOYA coordinate equivalent). f = +145.753 mm.

L9 is the separate object-convex positive meniscus at the back of G3a. It uses the same
published glass coordinate as L7. The next air gap separates the positive subgroup from
G3b's laterally movable negative assembly; G3 remains axially fixed during the tabulated
zoom movement (¶0137).

### L10 — Biconcave Negative

nd = 1.59349, νd = 67.00. Glass: PCD51 class (HOYA coordinate equivalent). f = -62.815 mm.

L10 is the first biconcave element of the stabilization subgroup G3b. It is separated from
L11–L12, rather than cemented to them. The patent describes the stabilizer as two negative
lenses and one positive lens and links that arrangement with chromatic and decentering
aberration control (¶¶0033, 0137).

### L11 — Biconcave Negative

nd = 1.59349, νd = 67.00. Glass: PCD51 class (HOYA coordinate equivalent). f = -39.425 mm.

L11 is the negative member of the G3b doublet. It shares L10's νd = 67.00 coordinate,
whereas its positive cemented partner has substantially greater dispersion. The Abbe-number
difference used in condition 7 applies to the average of the two negative glasses relative
to L12; it is not a complete secondary-spectrum assessment.

### L12 — Biconvex Positive

nd = 1.78880, νd = 28.43. Glass: S-NBH58 class (OHARA coordinate equivalent). f = +71.453 mm.

L12 is the positive biconvex rear member of the stabilizing doublet. Its catalog-equivalent
name and the patent's partial-dispersion value are both retained with their different evidence
roles. G3b moves transversely for stabilization according to the patent, but the implemented
surfaces remain centred (¶0137).

### L13 — Biconvex Positive

nd = 1.80518, νd = 25.46. Glass: FD60-W / FD60 class (HOYA coordinate equivalents). f = +85.279 mm.

L13 is the first positive lens in the stop-bearing G4. The patent describes G4 as a strongly
positive group that converges the beam and assists zooming (¶0016). That group-level statement
does not isolate a spherical-aberration contribution for this individual element (¶0138).

### L14 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 class (HOYA coordinate equivalent). f = +56.558 mm.

L14 is the lower-dispersion positive component of the L14–L15 doublet. It uses the same
published coordinate as L2. The pair's small positive net power illustrates why the isolated
powers on the first lines must not be substituted for the compound cemented calculation
(¶0138).

### L15 — Biconcave Negative

nd = 2.00100, νd = 29.13. Glass: TAFD55-W / TAFD55 class (HOYA coordinate equivalents). f = -56.953 mm.

L15 is the high-index biconcave member of that doublet and lies immediately before the stop's
air space. The native nd = 2.00100 value is preserved. The catalog class is a coordinate
comparison, not permission to replace this high index with a more familiar glass (¶0138).

### L16 — Positive Meniscus

nd = 1.80518, νd = 25.46. Glass: FD60-W / FD60 class (HOYA coordinate equivalents). f = +106.501 mm.

L16 is the image-convex positive meniscus immediately after the stop. Its relatively weak
front curvature and stronger rear curvature set the positive standalone power. The source
identifies its shape and its place ahead of the three-element cemented component (¶0138).

### L17 — Negative Meniscus

nd = 1.85896, νd = 22.73. Glass: S-NPH5 class (OHARA coordinate equivalent). f = -55.082 mm.

L17 is the negative, object-convex front meniscus of the G4 triplet. Its image-side boundary
is shared with L18. Paragraph 0074 associates a negative–positive–negative triplet in G4
with reduced sensitivity to decentring; that is the source's stated design rationale, not
a tolerance simulation of the production lens.

### L18 — Biconvex Positive

nd = 1.51742, νd = 52.15. Glass: E-CF6 class (HOYA coordinate equivalent). f = +32.813 mm.

L18 is the central biconvex member of the triplet, between two negative elements. Its large
positive standalone power is substantially cancelled within the assembled group. The shared
interfaces remain refracting glass-to-glass boundaries and are not duplicated as air surfaces
(¶0138).

### L19 — Biconcave Negative

nd = 1.88100, νd = 40.14. Glass: TAFD33 class (HOYA coordinate equivalent). f = -49.509 mm.

L19 is the final biconcave member of the triplet and the final element in G4. The full
negative–positive–negative component is negative in net power, although G4 as a whole is
positive. The following variable air gap separates G4 from the focus singlet (¶0138).

### L20 — Biconvex Positive

nd = 1.57135, νd = 52.95. Glass: S-BAL3 class (OHARA coordinate equivalent). f = +87.042 mm.

L20 is the single biconvex lens of G5. Paragraphs 0134 and 0139 identify it as the axial
focusing unit, moving toward the object for nearer objects. The numerical example publishes
no finite-focus spacing row; its focus travel cannot be obtained from the production MFD
without an additional, explicitly solved reconstruction.

### L21 — Biconvex Positive

nd = 1.77047, νd = 29.74. Glass: NBFD29 class (HOYA coordinate equivalent). f = +90.274 mm.

L21 is the positive first lens of G6. It is air-separated from L22, so the thin intervening
source air gap is preserved. G6 has negative compound power and moves objectward over the
published wide-to-tele sequence (¶¶0134, 0140).

### L22 — Negative Meniscus

nd = 1.88100, νd = 40.14. Glass: TAFD33 class (HOYA coordinate equivalent). f = -38.813 mm.

L22 is the object-convex negative meniscus behind L21. Its negative standalone power exceeds
the positive power of L21 in the combined G6 arrangement. The TAFD33-like coordinate
and source θgF are retained, with no claim that Sigma used that named catalog product
(¶0140).

### L23 — Negative Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 class (HOYA coordinate equivalent). f = -89.028 mm.

L23 is the image-convex negative meniscus of G7. It uses the same 95.10-Abbe coordinate as
L3, but its negative power and different position mean that L3's front-group condition must
not be transferred to this element as a separate design claim. The patent identifies L23's
shape and its pairing within G7 with the positive L24 (¶0141).

### L24 — Biconvex Positive

nd = 1.67270, νd = 32.17. Glass: E-FD5 class (HOYA coordinate equivalent). f = +69.179 mm.

L24 is the biconvex second element of G7. It is separated from L23 by a small air gap,
not a cemented interface. The pair forms a weakly positive functional group, whose spacing
relative to the fixed final group changes with zoom (¶¶0134, 0141).

### L25 — Negative Meniscus

nd = 1.59282, νd = 68.62. Glass: FCD515 / FCD505 class (HOYA coordinate equivalents). f = -147.702 mm.

L25 is the object-convex negative meniscus at the front of G8. It is cemented to L26 and
uses the 68.62-Abbe coordinate compatible with more than one HOYA catalog class. The label
therefore retains the FCD515/FCD505 ambiguity rather than selecting a supplier/melt identity
(¶0142).

### L26 — Biconvex Positive

nd = 1.74077, νd = 27.76. Glass: E-FD13 class (HOYA coordinate equivalent). f = +44.762 mm.

L26 is the positive biconvex rear member of the G8 doublet. The doublet has positive net
power and is followed by the separate negative L27. G8 is fixed relative to the image in
the tabulated zoom states, and the patent also specifies that the final image-side group
remains fixed during focusing (¶¶0053, 0134, 0142).

### L27 — Biconcave Negative

nd = 2.05090, νd = 26.94. Glass: TAFD65 class (HOYA coordinate equivalent). f = -37.559 mm.

L27 is the final biconcave photographic element. Its native nd = 2.05090 coordinate is
preserved; it is not a transcription repair or a generic substitute glass. After this lens
come the source air gap, the rear FL plate and the image plane. Together with the preceding
doublet, it gives G8 its negative compound power (¶0142).

The calculated cemented-component focal lengths distinguish the assembled components from
their isolated members. All values below are for each complete cemented component in air.

| Component | Elements | Net focal length (mm) |
|---|---|---:|
| D1 | L1–L2 | +1075.206 |
| D2 | L4–L5 | -118.792 |
| D3 | L7–L8 | +107.328 |
| D4 | L11–L12 | -89.414 |
| D5 | L14–L15 | +925.494 |
| T1 | L17–L19 | -156.905 |
| D6 | L25–L26 | +63.311 |

## Glass Identification and Selection

The prescription supplies nd, νd and absolute θgF for every glass interval, including the rear
plate. It does not identify glass suppliers. Primary catalog comparisons cover OHARA, HOYA,
Schott, Hikari, CDGM and Sumita. Named entries below are coordinate equivalents only; spectral
compatibility provides supporting discrimination but does not prove melt identity.

The table gives the source coordinate and its conversion to the model's normal-line convention.
Catalog-coefficient checks are separate from the native prescription, which remains unchanged.

| Position(s) | Coordinate-equivalent class | nd | νd | Source θgF | Model ΔPgF |
|---|---|---:|---:|---:|---:|
| L3, L23 | FCD100 class (HOYA coordinate equivalent) | 1.43700 | 95.10 | 0.5336 | +0.04975820 |
| L2, L14 | FCD1 class (HOYA coordinate equivalent) | 1.49700 | 81.61 | 0.5389 | +0.03236802 |
| FL plate | BSC7 class (HOYA coordinate equivalent) | 1.51680 | 64.20 | 0.5343 | -0.00151560 |
| L7, L9, L18 | E-CF6 class (HOYA coordinate equivalent) | 1.51742 | 52.15 | 0.5590 | +0.00291630 |
| L20 | S-BAL3 class (OHARA coordinate equivalent) | 1.57135 | 52.95 | 0.5553 | +0.00056190 |
| L25 | FCD515 / FCD505 class (HOYA coordinate equivalents) | 1.59282 | 68.62 | 0.5440 | +0.01561884 |
| L10, L11 | PCD51 class (HOYA coordinate equivalent) | 1.59349 | 67.00 | 0.5366 | +0.00549400 |
| L24 | E-FD5 class (HOYA coordinate equivalent) | 1.67270 | 32.17 | 0.5963 | +0.00660994 |
| L8 | E-FD80 class (HOYA coordinate equivalent) | 1.68960 | 31.14 | 0.6031 | +0.01167748 |
| L26 | E-FD13 class (HOYA coordinate equivalent) | 1.74077 | 27.76 | 0.6078 | +0.01069232 |
| L21 | NBFD29 class (HOYA coordinate equivalent) | 1.77047 | 29.74 | 0.5951 | +0.00132268 |
| L12 | S-NBH58 class (OHARA coordinate equivalent) | 1.78880 | 28.43 | 0.6009 | +0.00491926 |
| L13, L16 | FD60-W / FD60 class (HOYA coordinate equivalents) | 1.80518 | 25.46 | 0.6157 | +0.01472372 |
| L4 | FD225 class (HOYA coordinate equivalent) | 1.80809 | 22.76 | 0.6287 | +0.02318232 |
| L17 | S-NPH5 class (OHARA coordinate equivalent) | 1.85896 | 22.73 | 0.6284 | +0.02283186 |
| L1, L5, L6 | TAFD32 class (HOYA coordinate equivalent) | 1.87070 | 40.73 | 0.5682 | -0.00709214 |
| L19, L22 | TAFD33 class (HOYA coordinate equivalent) | 1.88100 | 40.14 | 0.5700 | -0.00628452 |
| L15 | TAFD55-W / TAFD55 class (HOYA coordinate equivalents) | 2.00100 | 29.13 | 0.5995 | +0.00469666 |
| L27 | TAFD65 class (HOYA coordinate equivalent) | 2.05090 | 26.94 | 0.6052 | +0.00671308 |

The model convention is ΔPgF = θgF − (0.6438 − 0.001682νd). This differs from the patent's
condition-13 normal line, 0.6483 − 0.0018νd. For the highest-Abbe positive G1 material,
condition 13 evaluates to 0.056480, while its stored ΔPgF is +0.04975820. Both numbers
come from the same native θgF and νd; neither is a contradictory source reading.

The published partial dispersion is preserved even when a compatible catalog's g-line ratio
differs slightly. Absolute nC, nF and ng values are not derivable uniquely from nd, νd and θgF
alone, and are not invented. Where a catalog label resolves, its C/F shape is a catalog
proxy; otherwise the Abbe-plus-ΔPgF path is an approximation. No APO performance designation
or quantified secondary-spectrum correction follows from this data alone.

In the viewer's dispersion model, every element label and the plate's BSC7 label resolve to
the named catalog entries. Those entries are dispersion proxies; they do not identify the
source supplier.

The two negative stabilizer lenses have νd = 67.00 and the positive partner has νd = 28.43.
Their 38.57 Abbe-number difference satisfies the patent's material contrast condition.
The source's discussion links this negative–negative–positive arrangement to chromatic control
under decentring (¶0033); the centred model does not establish decentered residual aberrations.

The calculated Petzval sum is +0.000347620 mm⁻¹ using each refracting interface's
(n′ − n)/(Rnn′). The rear plane plate contributes zero surface power. This sum reflects the
balance of positive and negative surface contributions, but is not a standalone prediction
of the tangential/sagittal image surfaces or proof of flat-field image quality.

## Focus Mechanism

The patent identifies internal focusing by G5, the single L20 lens moving objectward from
infinity toward a nearer object (¶0134). The smaller, rearward focus group is part of the
patent's effort to limit moving mass (¶0017). Sigma's production lens uses the HLA linear
actuator; that commercial motor description does not supply a numerical cam or travel law.

No near-focus state is modeled. Every published Example 5 d0 entry is infinity. The general
introductory paragraph 0081 mentions 1 m data, but the Example 5 table contains no finite row.
Both focus positions therefore repeat the infinity gaps; there is no reconstructed focus
travel, finite magnification or production minimum-distance state.

The 0.45 m value is Sigma's wide-end minimum-focus specification, retained as product context;
the telephoto minimum is 2.6 m. Neither value corresponds to a modeled optical state, and
quantitative near-focus performance is not available from this example.

## Conditional Expressions

The fourteen expressions below are calculated from the native prescription at the specified
states. The printed correspondence values are given beside the recomputed results. All
inequalities are satisfied. Differences in the last printed digit are treated as rounding,
not an invitation to adjust the source prescription.

Here fT is the complete-system tele EFL, f1/f2/f3/f3a/f4 are functional-group focal lengths,
and fOS is G3b's focal length. β denotes the paraxial transverse magnification of the
identified subgroup at its intermediate conjugates; βR denotes the following optical train.
EXPT is the distance from the exit pupil to the image, Ymax is the source image semi-height,
and LTT is the physical first-vertex-to-image track including the rear plate.

| No. | Condition | Computed | Printed |
|---:|---|---:|---:|
| 1 | 4 < β2T/β2W < 15 | 8.833579 | 8.8 |
| 2 | −15 < fT/f2 < −5 | -8.537789 | -8.5 |
| 3 | −8 < fT/f3 < 0 | -4.114219 | -4.1 |
| 4 | 5 < fT/f3a < 15 | 9.423571 | 9.4 |
| 5 | 3.5 < abs[(1−βOST)βROST] < 10 | 5.131356 | 5.1 |
| 6 | −25 < fT/fOS < −10 | -16.259180 | -16.3 |
| 7 | νOSN−νOSP > 30 | 38.570000 | 38.6 |
| 8 | 4 < fT/f4 < 18 | 9.966986 | 10.0 |
| 9 | 3.5 < abs[(1−βFOCT²)βRFOCT²] < 10 | 5.162496 | 5.2 |
| 10 | 2.5 < EXPT/Ymax < 6 | 4.142180 | 4.1 |
| 11 | 1 < fT/f1 < 4 | 2.406697 | 2.4 |
| 12 | νmax1P > 85 | 95.100000 | 95.1 |
| 13 | θgFmax1P−0.6483+0.0018νmax1P > 0.040 | 0.056480 | 0.056 |
| 14 | 0.40 < LTT/fT < 0.85 | 0.679940 | 0.68 |

The expressions and definitions are in ¶¶0018–0071, with the Example 5 correspondence
column on PDF p.38, printed p.37. Conditions 5 and 9 describe paraxial shift/focus sensitivity
at tele; they are not calculated image-quality ratings or a recovered control law.

## Image Stabilization

G3b, consisting of L10, L11 and L12, is the patent's laterally translated stabilization unit.
It has negative net power and sits behind positive G3a. Paragraph 0137 describes movement
approximately perpendicular to the axis, while G3's axial station remains fixed with zoom.
The arrangement is analysed here only in its centred position.

The tele stabilization sensitivity expression evaluates to 5.131356. That paraxial result
reproduces the patent's rounded value of 5.1; it does not establish actuator stroke, stabilization
stops, decentered image quality, or the production OS2 algorithm's performance. No invented
lateral displacement, tilt or stabilization state is added to the sequential model.

## Model Scope and Zoom Path

The three published zoom stations are the only source optical states. The model preserves
every source radius, axial spacing, index, Abbe number and partial-dispersion ratio at native
scale, with no marketing-based scaling or source repair.

The table below is calculated from the implemented surfaces, including the physical rear plate.
Image defocus is the paraxial best-focus displacement from the unchanged source image plane;
positive means a further imageward displacement would be needed. Iris values are inferred
by exact axial tracing of the entrance pupil implied by the published station f-number.

| State | EFL (mm) | Physical track (mm) | Image defocus (mm) | Inferred iris radius (mm) |
|---|---:|---:|---:|---:|
| Wide | 61.997487 | 295.5472 | -0.004234 | 15.237751 |
| Middle | 190.180196 | 349.0129 | -0.008853 | 15.261106 |
| Tele | 579.829927 | 394.2494 | -0.029101 | 15.240399 |

The computed tele EFL is 0.170073 mm below the printed 580.00 mm, and the middle EFL also falls
outside the printed focal-length rounding interval. Propagating the table's rounding precision
brackets the printed focal lengths, and the group powers and all conditional-expression values
agree, so the differences are read as rounding of the published table rather than as an error.

Between the published stations the model uses a solved zoom path, not Sigma's cam. Linear
interpolation of all seven variable gaps would leave the paraxial image up to about 32 mm from
the image plane between the middle and tele stations, because the rear groups do not move
linearly. The patent assigns image-plane compensation to the groups behind G4 (¶0017). In the
model, d5, d10, d20, d32 and d42 run linearly between published rows, and G6 is placed by
re-dividing the paired gaps d34 and d38, whose sum stays linear, so that the paraxial image
stays on the printed image plane. Every group keeps the direction stated in ¶0134: G1 and
G4–G7 move toward the object, G2 toward the image, and G3 and G8 stay fixed. The largest
departure from linear spacing is near 338 mm, where d34 opens to 9.23 mm against about 4.5 mm
on a straight line. Paraxial defocus stays within 0.029 mm at all 201 stations, the tele row's
own rounding residual. The 198 solved stations are marked unpublished; their focal lengths are
computed EFLs and their f-numbers are interpolated between the printed values. The path is a
visualization of one consistent motion, not a recovered production cam, and the solved
intermediate states carry no published aberration data.

The source FL plate is 2.1000 mm thick, has nd = 1.51680 and νd = 64.20, and is followed by
1.0000 mm of air. Surface 47 has a 32.7606 mm physical gap to its front face. The printed
BF is the final plate-to-image air gap, not the back focal distance of the last lens.
The plate is modeled physically rather than folded into an air-equivalent gap.

No clear apertures are published. The semi-diameters are estimated from Figure 41 and checked
by exact real-ray tracing. The front group carries 48 mm, slightly above the figure's roughly
46–47 mm. G3b tapers to 14.17 mm and 14.3 mm at surfaces 17 and 18, where the two facing
concave surfaces would meet at the 16 mm the figure draws. The cemented surface 44 is 15.4 mm,
slightly larger than its 15.2 mm neighbours, to pass the full-field bundle. G6 follows the
smaller step that both Figure 41 and Sigma's diagram draw below G5 and G7: L21 is 12.2 mm and
L22 11.8 mm, comfortably above the 9.1 mm and 8.6 mm the axial beam needs there.
The stop diameter is likewise inferred: it is set to reproduce the printed f-numbers and is
not a published diaphragm diameter.

At every station the axial beam at the printed f-number and the full-field chief ray to the
21.63 mm image height pass all rims. Off-axis bundles are partly vignetted, most strongly at the
front group and at G6, as is normal for a lens of this type; the model keeps that vignetting
rather than enlarging rims to remove it.

## Sources

- [JP2023180574A, complete original publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2023180574A),
  JPO; original complete PDF preserved through DPMA. Numerical Example 5: PDF pp.28–29,
  printed pp.27–28; mechanism ¶¶0132–0143; Figure 41: PDF p.61; conditions: PDF p.38.
- [Sigma 60–600mm F4.5–6.3 DG DN OS Sports specifications](https://www.sigma-global.com/en/lenses/s023_60_600_45_63/),
  including construction, mount/format, production focus limits, diaphragm and mechanism descriptions.
- [Sigma announcement, 2023-01-12](https://www.sigma-global.com/en/news/2023/01/12/19742/).
- [OHARA catalog downloads](https://www.ohara-inc.co.jp/en/product/catalog/), all-products AGF 2026-07-01.
- [HOYA optical glass data](https://www.hoya-opticalworld.com/english/datadownload/index.html),
  2026-07-07 catalog including obsolete glasses; primary formula coefficients and coordinates.
- [Schott optical glass](https://www.schott.com/en-gb/products/optical-glass), preferred/special AGF June-2025-B.
- [Hikari optical glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/), all-catalog workbook,
  Data-sheet revision history beginning 2025-06-01.
- [CDGM optical-glass downloads](https://www.cdgmgd.com/go.htm?k=ge_lei_xia_zai&url=downList), September 2026 AGF.
- [Sumita optical-glass downloads](https://www.sumita-opt.co.jp/en/download/), optical/molding AGF dated 2026-08-21.

Manufacturer and catalog sources were checked on 2026-10-04. Catalog dates identify the
comparison data, not proof of what was commercially available when the optical design was made.
