# SIGMA 60-600mm f/4.5-6.3 DG OS HSM | Sports

## Patent Reference and Design Identification

**Patent:** JP 2020-020948 A  
**Application Number:** JP 2018-144102  
**Filed:** 31 July 2018  
**Published:** 6 February 2020  
**Inventor:** Noriyuki Ogasawara  
**Applicant:** Sigma Corporation  
**Title:** Zoom imaging optical system  
**Embodiment analyzed:** Numerical Example 1

The prescription is an architectural correlation with the DSLR Sports lens,
not a manufacturer-confirmed copy of its factory optical prescription.
The publication's first numerical example supplies every radius,
thickness, refractive index and tabulated zoom/focus spacing in the model.
The original Japanese publication, whose front page prints the serial as
2020-20948, is the controlling source [1].

Several independent features support the correlation:

1. Both the numerical example and the production specification have
   25 elements in 19 air-separated groups.
2. The example contains three elements at nd = 1.43700, νd = 95.10
   (L3, L17, L23) and one at nd = 1.49700, νd = 81.61 (L2). Sigma's
   construction diagram colours three FLD elements at positions 3, 17
   and 23 and one SLD element at position 2, a one-to-one match [2].
   Those production labels do not identify the patent's actual melts.
3. Its focal-length range of 62.03–577.73 mm is close to the marketed
   60–600 mm. The patent's infinity f-numbers are 4.48 / 5.55 / 6.50,
   against the marketed endpoint range f/4.5–6.3.
4. A stationary intermediate group contains a transversely movable
   stabilizing subgroup, while the rear negative group provides focus.
   The production lens has optical stabilization and HSM autofocus [2].
5. The application was filed in July 2018. Sigma identifies the lens
   as a Photokina 2018 introduction in its first-person development history [3].

The product is a full-frame DSLR lens for Sigma SA, Canon EF and Nikon F.
These mounts describe the correlated commercial family, not separate
numerical prescriptions derived from the patent. The later DG DN model
is a different product and is outside this analysis.

The marketed minimum focus distance runs from 0.6 m to 2.6 m across the
zoom range. The patent tabulates 2.6 m as its nearest state at all three
zoom stations. The model keeps those states without extrapolating the wide
setting to the production lens's 0.6 m. No uniform rescaling to
marketing values has been applied.

## Optical Architecture

The six functional groups follow a positive–negative–negative–positive–
positive–negative power sequence. Functional groups are mechanical/optical
units, whereas the 19-group construction count refers to air-separated
components. Six cemented doublets account for the difference between
25 elements and 19 components.

The reference wavelength is the d-line at 587.56 nm. All surfaces are spherical or plane; there are no aspherical surfaces.
The prescription contains no source-listed rear cover plate, internal
filter plate or omitted dummy plane. The flat face at surface 5 belongs
to L3. Surface 25 is the aperture stop, modeled at its published location
inside G4 between L14 and L15 [1, ¶¶117–128].

The following focal lengths are calculated for each isolated group in air
from the final prescription. They are not the focal lengths of individual
elements or measurements of the manufactured lens.

| Group | Calculated focal length, mm | Structure and function |
|---|---:|---|
| G1 | +237.552 | L1–L3; positive front group |
| G2 | -60.923 | L4–L6; negative variator |
| G3 | -246.402 | L7–L11; image-fixed intermediate group |
| G4 | +66.302 | L12–L18; positive group containing the stop |
| G5 | +72.871 | L19–L21; positive rear relay group |
| G6 | -57.898 | L22–L25; negative rear focusing group |
| G3a | +76.823 | L7–L8; positive stationary subgroup |
| G3b | -47.402 | L9–L11; negative stabilizing subgroup |

From wide to tele infinity, G1 moves objectward and G2 imageward.
G3 is effectively fixed relative to the image plane to the precision of
the printed spacings. G4, G5 and G6 move objectward between the source
endpoints. The gaps after surfaces 32 and 38 reverse across the three
stations; a reversing separation does not by itself mean that both
neighboring groups reverse their absolute direction.

The complete optical track is measured from the first surface vertex
to the source image plane. It is not the manufacturer's filter-to-mount
barrel length. At patent scale the infinity quantities are:

| Station | Computed EFL, mm | Printed EFL, mm | First vertex to image, mm | Paraxial BFD, mm |
|---|---:|---:|---:|---:|
| Wide | 62.028172 | 62.03 | 307.8858 | 53.586134 |
| Middle | 183.641735 | 183.64 | 364.3936 | 77.247262 |
| Tele | 577.770793 | 577.73 | 407.8801 | 98.688834 |

At tele infinity, the optical-track/EFL ratio is 0.705955, establishing
telephoto shortening at that state. This designation is not extended to
the wide state. Small differences from the printed focal lengths and
back focuses are retained, including the computed 577.770793 mm versus
printed 577.73 mm tele EFL. The differences are compatible with local sensitivity to the last printed
digits of R, d and nd; this does not establish the unpublished exact values.
The source numbers have not been re-optimized to force a numerical identity.

## Element-by-Element Analysis

The focal lengths below are calculated standalone thick-element values
with air on both sides. At a cemented interface, this deliberately differs
from the element's contribution inside the assembled component.
Catalog names identify coordinate-compatible equivalents, not the
actual supplier or melt. Each element's geometry and grouping follows
the source prescription and its associated prose [1, ¶¶119–127].

### L1 — Negative Meniscus

nd = 1.87071, νd = 40.73. Glass: TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -325.0 mm.

L1 is the negative, object-convex meniscus at the front of the system.
It is cemented to L2. The large index change at their shared surface is
one of the quantities explicitly constrained by the patent's condition 3.
Its negative standalone power should not be confused with the positive
net power of the entire G1 front group (¶119).

### L2 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +256.3 mm.

L2 is the positive, object-convex member of the first cemented component.
Its low-dispersion coordinate contrasts with the high-index L1 partner.
The pair's calculated net focal length is +1271.790 mm, much weaker than
either standalone element. Their common inferred clear radius is
47.6 mm, read from Figure 1, where L2 keeps 0.706 mm of edge. L2 sits
at the position Sigma's construction diagram marks as SLD glass [2].

### L3 — Plano-Convex

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +287.4 mm.

L3 is a positive plano-convex element with its curved face toward the object.
It follows the weak front doublet and supplies substantial positive power
to G1. Its very high Abbe number is consistent with an extreme-low-dispersion
catalog class, and its position is one of the three that Sigma's diagram
marks as FLD glass [2]. The plane rear face is a lens boundary, not a
separately modeled plate (¶119).

### L4 — Biconvex Positive

nd = 1.80518, νd = 25.46. Glass: FD60-W (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +131.2 mm.

L4 is the positive biconvex front member of the G2 cemented doublet.
It shares its rear surface with L5. The pair combines opposite element
powers within an overall negative variator group; attributing a specific
aberration correction to L4 alone would require a perturbation analysis
beyond the source's group description (¶120).

### L5 — Biconcave Negative

nd = 1.87071, νd = 40.73. Glass: TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -73.9 mm.

L5 is the negative biconcave member of the L4–L5 pair.
The component has calculated net focal length −177.687 mm. Its rear
clear radius is geometry-constrained by the next air gap; the inferred
component profile is consequently not a cylinder of constant radius.
No internal synthetic aperture or cement layer has been introduced.

### L6 — Negative Meniscus

nd = 1.87071, νd = 40.73. Glass: TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -93.1 mm.

L6 is an additional negative meniscus behind the G2 doublet.
Together these elements form the −60.923 mm variator. The source assigns
G2 imageward motion during wide-to-tele zooming. Its role is therefore
understood within the moving group rather than from its standalone
power alone (¶120).

### L7 — Biconvex Positive

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +136.1 mm.

L7 begins the positive G3a subgroup. Its biconvex geometry contributes
positive power ahead of the negative stabilization section.
G3a remains stationary relative to the image plane during the tabulated
zoom and focus motions; it is not the translating focus unit
(¶¶121–122).

### L8 — Positive Meniscus

nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +165.6 mm.

L8 is an object-convex positive meniscus completing G3a.
The two positive elements form a calculated +76.823 mm subgroup.
Their separated construction precedes the relatively strong negative G3b;
the full G3 combination nevertheless has negative net power
(¶¶121–123).

### L9 — Biconcave Negative

nd = 1.75700, νd = 47.82. Glass: S-LAM54 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -73.8 mm.

L9 is the first negative element in G3b, the subgroup identified for
transverse stabilization. Its biconcave surfaces bracket a thin central
thickness. The rear boundary at surface 16 faces the critical air gap
to L10; its inferred radius is limited by full-aperture ray clearance on
one side and by the air clearance to L10 on the other (¶123).

### L10 — Biconcave Negative

nd = 1.61997, νd = 63.88. Glass: PCD40 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -50.4 mm.

L10 is the negative biconcave front member of the stabilizer's cemented pair.
All three faces of the pair carry the 16.5 mm that Figure 1 draws for the
square-cut block. Across the gap, L9's rear face ends at the constrained
14.6 mm radius.
The modeled configuration is centered, not a displaced stabilization state.

### L11 — Biconvex Positive

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +80.7 mm.

L11 is the positive member cemented behind L10.
Their calculated net focal length is −138.212 mm, so the pair does not
reverse the negative sign of G3b. The patent moves L9 and this pair
transversely together. The analysis does not infer a separate autofocus
motion for any of these three elements (¶123).

### L12 — Biconvex Positive

nd = 1.80610, νd = 33.27. Glass: NBFD15-W (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +119.4 mm.

L12 begins the positive G4 group with a separated biconvex element.
It precedes the L13–L14 pair and the internal aperture stop.
G4 moves objectward from wide to tele in the source states;
its internal air/glass structure is preserved during ordinary focusing
(¶¶124–125).

### L13 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +97.7 mm.

L13 is the positive biconvex member of the next cemented component.
Its coordinate matches HOYA PCD51 exactly (1.59349 / 67.00), and the
element takes that catalog glass's dispersion like the others, not the
moldable M-PCD51 variant. The inferred common radius of surfaces 22–24
is 18.4 mm, read from Figure 1. It leaves 0.861 mm of edge thickness on
the positive element, inside its 20.876 mm zero-edge height; the published
thickness is unchanged.

### L14 — Biconcave Negative

nd = 1.84666, νd = 23.78. Glass: FDS90-SG (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -175.9 mm.

L14 is the negative biconcave member of the L13–L14 pair.
The component remains net positive, with calculated focal length
+215.107 mm. The source stop lies in the following air interval,
between this component and L15, rather than on their cemented interface
(¶125).

### L15 — Positive Meniscus

nd = 1.58913, νd = 61.25. Glass: BACD5 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +111.4 mm.

L15 is a positive meniscus immediately behind the stop.
Its coordinate matches HOYA BACD5 (1.58913 / 61.25), a dense barium
crown, and the element takes that catalog glass's dispersion.

### L16 — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: TAFD45L (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -100.2 mm.

L16 is a negative meniscus made from a high-index, relatively dispersive
coordinate. It lies between positive L15 and the low-dispersion L17–L18
component. The source identifies its shape and position, but does not
justify assigning it a unique named coma or spherical-aberration
correction function in isolation (¶124).

### L17 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +62.2 mm.

L17 is a positive biconvex element using the same very-high-Abbe coordinate
as L3 and L23, at the second of the three positions Sigma's diagram marks
as FLD glass [2]. It is cemented to the high-index negative L18.
The positive element's finite edge thickness sets an upper bound of
17.796 mm on the shared inferred aperture; the cemented component carries
15.8 mm, read from Figure 1, which leaves 1.323 mm of edge.
This is an inferred clear radius, not a published effective diameter.

### L18 — Negative Meniscus

nd = 1.91082, νd = 35.25. Glass: TAFD35L (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -71.0 mm.

L18 is the negative, image-convex meniscus behind L17.
The resulting doublet remains weakly positive, with calculated focal
length +404.600 mm. It closes the G4 group after the internal stop;
its next air gap is one of the separations that changes non-monotonically
across the source zoom stations (¶124).

### L19 — Negative Meniscus

nd = 1.87071, νd = 40.73. Glass: TAFD32 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -115.6 mm.

L19 is a negative meniscus at the beginning of G5.
It is followed by two separated positive elements, L20 and L21,
which make the group positive overall. G5 does not move internally
for the published focus changes; its motion is part of the source
zoom arrangement (¶126).

### L20 — Biconvex Positive

nd = 1.56883, νd = 56.04. Glass: BAC4 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +122.0 mm.

L20 is the first positive biconvex element in the rear G5 relay.
Its moderate-index coordinate differs from the high-index negative L19.
The geometry and power ordering are clear from the prescription;
a unique element-level field-curvature or chromatic assignment is not
asserted without a separate sensitivity calculation (¶126).

### L21 — Biconvex Positive

nd = 1.62041, νd = 60.34. Glass: BACD16 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +82.7 mm.

L21 is the second positive biconvex element of G5.
The patent's nd/νd pair matches HOYA BACD16 to within 0.01 in νd, and
the element takes that catalog glass's dispersion. Its rear surface faces
the variable d38 gap, which grows during near focusing as G6 moves
imageward (¶¶126–127).

### L22 — Positive Meniscus

nd = 1.67300, νd = 38.15. Glass: S-NBH52 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +160.1 mm.

L22 is a positive meniscus, convex toward the image, at the front of G6.
It is followed by three elements with an overall negative group balance.
The patent moves the complete G6 assembly for focusing;
L22 has no separate focus travel (¶127).

### L23 — Biconcave Negative

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -78.4 mm.

L23 is a negative biconcave element with the same low-index,
very-high-Abbe coordinate used by positive L3 and L17, at the third
position Sigma's diagram marks as FLD glass [2].
The changed power sign illustrates why an ED-material count alone is
not a chromatic-performance calculation. It belongs to the translating
rear focus group, not the stationary stabilizer (¶127).

### L24 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45L (HOYA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = -28.4 mm.

L24 is the strongly negative front member of the final cemented doublet.
It uses the same high-index coordinate as L16 but has biconcave geometry.
The doublet's position near the image-side end of G6 is retained at every
published focus state; no added field flattener or sensor plate follows
it in the source prescription.

### L25 — Biconvex Positive

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA coordinate-compatible catalog equivalent; supplier unconfirmed). Standalone f = +42.2 mm.

L25 is the positive biconvex final element, cemented to L24.
The pair has calculated net focal length −101.638 mm.
The component's common 15.1 mm radius, read from Figure 1, leaves
1.112 mm of positive edge thickness. The final source gap remains the physical distance to
the image plane and varies with the published focus/zoom schedule.

## Glass Identification and Selection

The patent gives d-line nd and νd for each glass, not supplier names or
melt certificates. Every distinct coordinate was compared across the full
HOYA current/obsolete and OHARA all-products catalogs [4–5].
The table records the coordinate-compatible catalog glass for each.
Its nd and νd columns keep the patent coordinates, not substituted catalog
values; for example, TAFD32 differs by −0.00001 in catalog nd and BACD16
by +0.01 in catalog νd. The match does not establish exclusive cross-vendor
identity; four other major vendor catalogs were not searched.

| Catalog equivalent | nd | νd | Elements |
|---|---:|---:|---|
| FCD100 (HOYA) | 1.43700 | 95.10 | L3, L17, L23 |
| FCD1 (HOYA) | 1.49700 | 81.61 | L2 |
| E-CF6 (HOYA) | 1.51742 | 52.15 | L8 |
| BAC4 (HOYA) | 1.56883 | 56.04 | L20 |
| BACD5 (HOYA) | 1.58913 | 61.25 | L15 |
| PCD51 (HOYA) | 1.59349 | 67.00 | L13 |
| E-F5 (HOYA) | 1.60342 | 38.01 | L7 |
| PCD40 (HOYA) | 1.61997 | 63.88 | L10 |
| BACD16 (HOYA) | 1.62041 | 60.34 | L21 |
| S-NBH52 (OHARA) | 1.67300 | 38.15 | L22 |
| S-LAM54 (OHARA) | 1.75700 | 47.82 | L9 |
| FD60-W (HOYA) | 1.80518 | 25.46 | L4 |
| NBFD15-W (HOYA) | 1.80610 | 33.27 | L12 |
| FDS90-SG (HOYA) | 1.84666 | 23.78 | L14 |
| S-NBH56 (OHARA) | 1.85478 | 24.80 | L11, L25 |
| TAFD32 (HOYA) | 1.87071 | 40.73 | L1, L5, L6, L19 |
| TAFD35L (HOYA) | 1.91082 | 35.25 | L18 |
| TAFD45L (HOYA) | 1.95375 | 32.32 | L16, L24 |

The retained catalog equations reproduce their tabulated reference
coordinates. They provide defensible spectral proxies for compatible
catalog glasses, but they do not reveal the actual patent melt's full
partial-dispersion behavior. OHARA S-family prefixes are preserved rather
than conflated with similarly named moldable L-family materials.

All 25 elements take their dispersion from these catalog glasses; none
relies on an nd/νd estimate, and no catalog line indices are added to the
prescription. The -W and -SG variants resolve through their base glasses
FD60, NBFD15 and FDS90. Catalog indices can differ slightly from the
rounded patent indices, so the chromatic channels are spectral models,
not the patent's own spectral data.

The two special-glass families carry the anomalous partial dispersion:
the catalog FCD100 and FCD1 curves give ΔPgF of +0.0498 and +0.0312 from
the Schott normal line. L3, L17 and L23 (FCD100) and L2 (FCD1) are tagged
as inferred special-dispersion elements because they sit at the FLD and
SLD positions of Sigma's construction diagram [2]; the patent itself does
not designate them.

With every glass resolved, broadband C/d/F and photopic MTF are computed
at infinity. Finite-focus MTF is unavailable because the model carries no
finite-conjugate record for the 13 m and 2.6 m states.

No source-published nC, nF, ng or partial-dispersion deviation is available
for this numerical example. No such value has been invented or copied
from another lens. The assembly is not claimed to reproduce the
manufacturer's chromatic correction quantitatively, and no apochromatic
performance claim follows from the FLD/SLD count alone.

## Focus Mechanism

The published focus mechanism is rear-group focusing. G6, containing
L22–L25, moves imageward as the object approaches. The preceding gap d38
increases while the final BF decreases. Other source variable gaps are
fixed with focus at each zoom station [1, ¶127].

The tabulated states are infinity, 13 m and 2.6 m, at focus-slider
positions 0, 0.2 and 1. The distances are taken as object-to-image, which
the numbers support but the patent's distance-table heading does not
state; the reference plane is therefore an inference, not a quoted
patent definition.

| Station | d38 at infinity, mm | d38 at 13 m, mm | d38 at 2.6 m, mm | Near-minus-infinity d38, mm |
|---|---:|---:|---:|---:|
| Wide | 2.1949 | 2.2771 | 2.6364 | 0.4415 |
| Middle | 7.8423 | 8.3089 | 10.2351 | 2.3928 |
| Tele | 4.3890 | 7.7134 | 20.2935 | 15.9045 |

Rounding differences in the printed spacings remain as printed;
the model does not force every summed track to identical last digits.
Between the tabulated focus and zoom states the viewer interpolates the
gaps, an approximation that is not evidence for the exact cam law.

The first-order EFL changes with focusing. At 2.6 m it is
61.023280 mm at wide, 166.020666 mm at middle and 319.703265 mm at tele.
These values quantify the prescription's power change; they
are not measurements of production-lens breathing or an assertion that
a marked focal length must remain constant at close focus.

The product's HSM motor is a manufacturer fact [2]. The optical model
contains the published group displacement but no motor dynamics,
autofocus speed, stabilization response or mechanical drive simulation.

## Conditional Expressions

The following expressions are calculated from the prescription as
printed, at the states the patent defines [1, claims 1–9; ¶218].
Here fi denotes an isolated group focal length; ft and fw are whole-system
tele/wide infinity focal lengths. LT is the tele first-vertex-to-image
track, and ht is the tele infinity entrance-pupil radius derived from
the patent's f-number. The printed values are kept for comparison.

| No. | Expression | Source range | Computed | Printed |
|---|---|---|---:|---:|
| 1 | f1 / ft | 0.3 < value < 0.55 | 0.411153 | 0.41 |
| 2 | abs(ft / f2) | 8.2 < value < 10.7 | 9.483648 | 9.5 |
| 3 | [(n2−n1)/r2] / [(n1−1)/r1] | -0.85 < value < -0.5 | -0.724855 | -0.72 |
| 4 | r3 / bf1 | 0.5 < value < 2 | 0.798962 | 0.8 |
| 5 | ht / r2 | 0.3 < value < 0.45 | 0.392059 | 0.39 |
| 6 | ft / fw | 8.5 < value | 9.314651 | 9.31 |
| 7 | LT / ft | 0.55 < value < 0.85 | 0.705955 | 0.71 |
| 8 | β6 | 2 < value < 4 | 2.938513 | 2.9 |
| 9 | f3 / f2 | 2.5 < value < 6 | 4.044486 | 4.04 |
| 10 | abs(f3a / f3b) | 1 < value < 2.5 | 1.620676 | 1.62 |
| 11 | β3b | -1.5 < value < -0.5 | -0.871769 | -0.87 |
| 12 | abs(f2 / f3b) | 0.85 < value < 2 | 1.285245 | 1.29 |

All twelve computed values lie within their stated inequality bounds.
For condition 4, bf1 is measured from the rear vertex of the L1–L2
cemented component to that component's standalone image-side focal point.
It is not the entire lens's back focus. The subgroup magnifications in
conditions 8 and 11 are computed in situ at tele infinity rather than
from isolated-group focal lengths alone.

Condition 5 depends on the inferred iris calibration: its agreement is
not independent evidence for an unpublished physical stop diameter.
The numerical correspondence also does not confirm an exact production
prescription or supply missing source tolerances.

## Image Stabilization

The patent places the stabilizer in G3b, the negative L9–L11 subgroup
behind positive G3a. G3 is fixed axially relative to the image plane for
the tabulated zoom and focus motions, while G3b moves perpendicular to
the optical axis for stabilization [1, ¶¶121–123].

Only the centered prescription is modeled. No decenter range, dynamic
control law, stabilization efficiency or off-center image-quality claim
is inferred from a centered section. The computed G3b net focal length
and its in-situ magnification satisfy the patent's stated conditions;
those first-order facts are not a stabilization-performance simulation.

## Apertures, Vignetting and Model Limits

The source does not publish per-surface clear diameters. The inferred
profile is read from Figure 1, the wide-end section of this example, and
checked against exact rays and the physical edge constraints of the
unchanged prescription. The sheet prints that section about 1.13 times too
tall for its own axial scale: with the axial scale fixed by the vertex
positions, the drawn surface curves, the zero-edge heights of L2 and L3 and
the inner ends of the stop mark all agree on the factor. Rim heights are
read after that correction, at about 0.234 mm per pixel. The profile is not
uniquely determined by the patent and is not a recovered factory blank drawing.

Surfaces 1–3 use the common 47.6 mm radius that Figure 1 draws for the
first cemented component; two separate readings give 47.6 and 47.5 mm.
At that rim the L1/L2 edge thicknesses are 7.466 and 0.706 mm, and the
positive element's edge reaches zero at 49.265173 mm. L3 is drawn 1.9 mm
shorter and carries 45.7 mm. The patent's f/6.50 beam at the tele end
needs 44.44 mm at surface 1 and 43.42 mm at L3.

From G3 to G5 the read rims stand about 1.1 to 2.4 mm above the widest
on-axis ray of the nine published states, apart from the constrained
surface 16, and every positive element keeps 0.71 to 2.3 mm of
edge thickness. Elements the figure draws with a square-cut rim carry one
radius on both faces, except at the gap-constrained rear faces of L5 and
L9. The figure squares those two off with a flat annulus outside the
curve; a spherical face carried to the drawn rim would meet the next
element first, at 23.5 mm for L5 and 15.0 mm for L9.

The stop sits between L14 and L15, as printed. At each infinity zoom station,
the computed EFL and the patent's f-number define the entrance-pupil
radius, which is traced by exact refraction to the stop to infer the
physical iris. The resulting station radii are:

- Wide: entrance radius 6.922787 mm; inferred physical iris radius 15.493840 mm

- Middle: entrance radius 16.544300 mm; inferred physical iris radius 15.489894 mm

- Tele: entrance radius 44.443907 mm; inferred physical iris radius 15.502988 mm

The iris is held at the current zoom setting during focus. This keeps
the patent's infinity apertures; because the radii are derived from those
f-numbers, their agreement is not independent evidence for a physical
diaphragm diameter.

The viewer normally lets facing surfaces use at most 0.90 of an air gap
at the rim. The tele on-axis beam needs 14.47 and 14.48 mm at surfaces
16 and 17. Surface 16 ends at 14.6 mm, and at that height the two faces
use 0.943877 of the 4.1944 mm gap, so this lens allows 0.95. That leaves
0.235403 mm of air between the elements there; they do not touch, and
nothing is trimmed in the drawing. Surface 17 continues to the 16.5 mm
rim of its cemented pair, beside L9's inclined edge. Every other gap
stays below 0.90.

At all nine published states, and at the zoom and focus positions between
them, the full on-axis beam and the corner chief ray clear every rim.
That describes the aperture and geometry of the model, not full-pupil
illumination at every field point.

At the patent's image semi-height of 21.63 mm, geometric pupil sampling gives:

| Station | Focus | Corner transmitted samples | At 60% image height |
|---|---|---:|---:|
| Wide | Infinity | 85/192 | 189/192 |
| Wide | 13 m | 85/192 | 189/192 |
| Wide | 2.6 m | 85/192 | 189/192 |
| Middle | Infinity | 140/192 | 192/192 |
| Middle | 13 m | 140/192 | 192/192 |
| Middle | 2.6 m | 149/192 | 192/192 |
| Tele | Infinity | 101/192 | 152/192 |
| Tele | 13 m | 109/192 | 161/192 |
| Tele | 2.6 m | 115/192 | 174/192 |

These counts use six equal-area rings with 32 azimuths in an entrance-plane
disk scaled to the on-axis pupil. They are not measured transmission,
photometric relative illumination or a continuous pupil-area integral.
Corner vignetting is substantial and visible in the model. Every clipped
sample stops at an outer element rim or the iris, never at an internal
cemented interface.

At finite focus the viewer's ray fans are not aimed the same way. They
start from the paraxial entrance pupil and are then tilted toward the
object, which at the tele end and 2.6 m can place rays outside the pupil
the iris admits. Those rays stop at a rim or the iris; the spacings, the
aperture and the fans are left as they are.

The F-numbers printed on the patent's aberration charts for infinity,
13 m and 2.6 m are:

- Wide: F4.48 / F4.46 / F4.37
- Middle: F5.55 / F5.43 / F5.01
- Tele: F6.50 / F6.48 / F6.45

They are not used as an iris schedule. The patent does not say how the
finite-distance values are defined, and the fixed iris does not reproduce
all of them: at the tele end and 2.6 m the image-side cone gives
f/6.312944, not the printed 6.45. The labels are recorded as printed,
without a claim to reproduce the published aberration curves exactly.

## Sources

1. Japan Patent Office, [JP 2020-020948 A, original publication via DPMA](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2020020948A).
   Front page and PAJ wrapper establish bibliographic identity.
   Numerical Example 1 is at PDF pages 24–26, printed pages 23–25;
   conventions are in ¶¶109–116; group descriptions in ¶¶117–128;
   condition values in ¶218; Figure 1 is on PDF page 48, printed page 47.
   PDF page numbers include the PAJ wrapper.
2. Sigma, [60–600mm F4.5–6.3 DG OS HSM Sports product specifications and construction](https://www.sigma-global.com/en/lenses/s018_60_600_45_63/).
   Manufacturer source for mounts, full-frame designation, the 25-element,
   19-group construction diagram with its FLD and SLD positions, nine
   rounded diaphragm blades, minimum aperture F22–32, HSM, stabilization
   and marketed focusing range.
3. Yasuhiro Ohsone, Sigma, [Episode 1: The 60–600mm F4.5–6.3 DG OS HSM Sports](https://www.sigma-global.com/en/our-community/sein/ohsone/60-600mm-dg-os-hsm-sports/).
   Manufacturer development history and Photokina 2018 context.
4. HOYA, [Optical Glass Data Download](https://www.hoya-opticalworld.com/english/datadownload/).
   HOYA20260707 current-and-obsolete AGF; coordinate/dispersion equivalents,
   not production supplier identification.
5. OHARA, [Optical Glass Catalog](https://oharacorp.com/glass-catalog/).
   OHARA260701 all-products AGF; coordinates and dispersion equations.

Primary web and catalog sources were consulted on 4 October 2026; the
Sigma construction diagram was consulted again on 13 October 2026.
