# SIGMA 14-24mm f/2.8 DG DN | Art

## Patent Reference and Design Identification

**Patent:** JP 2020-042221 A  
**Application Number:** JP 2018-171267  
**Filed:** 2018-09-13  
**Published:** 2020-03-19  
**Inventor:** Ryo Shioda  
**Applicant:** Sigma Corporation  
**Title:** Wide-angle lens system  
**Embodiment analyzed:** Numerical Example 1

The prescription is the native first numerical example of the cited Japanese application.
The supplied PDF includes an English PAJ abstract ahead of the Japanese publication;
therefore PDF page 11 is printed page 10. Surface data occupy PDF pages 11–12,
asphere coefficients pages 12–13, and zoom data page 13. The optical section is
Figure 1 on PDF page 27. These locations refer to the unchanged supplied publication.

The association with the production 14–24 mm DG DN Art is a construction correlation.
Neither the patent nor the cited Sigma product material confirms the exact factory
prescription. Several source-backed observations support the selection:

1. The example has 18 glass elements in 13 air-separated groups, matching Sigma.
2. Three elements carry five aspheric surfaces. Sigma specifies three aspheric
   elements, including the large front element.
3. The glass distribution has one very-low-dispersion element and five further
   low-dispersion elements at the locations expected from the published construction;
   Sigma describes one FLD and five SLD elements. These branded categories are not
   glass-supplier identifications.
4. The native full fields are 114.29°, 100.68° and 84.92°. Sigma gives the production
   endpoint range as 114.2–84.1°. The small endpoint differences remain visible.
5. The patent describes inner focusing with a small positive cemented group;
   Sigma documents stepping-motor autofocus.
6. The 2018 filing precedes Sigma’s July 2019 product announcement.

The modeled native focal lengths are 14.50–23.15 mm and the published design
aperture is f/2.93. The production name remains 14–24 mm f/2.8. No scaling is used
to force those quantities to agree. The production lens is full-frame, supplied
for L-Mount and Sony E-mount; these are the represented mount variants. Sigma’s
0.28 m minimum focusing distance is retained as product metadata, not a verified
finite-conjugate prescription. The production rear filter holder does not imply
a plate in this numerical example: no such plate is tabulated.

## Optical Architecture

The four functional groups form a negative–positive–positive–positive zoom.
G1 comprises L1–L5, G2 comprises L6–L7, G3 comprises L8–L10, and G4 comprises
L11–L18 with the aperture stop immediately ahead of its glass. The five cemented
pairs reduce 18 individual elements to 13 air-separated groups. Functional zoom
groups and air-separated construction groups are different counts. [1, ¶¶0061–0066]

| Functional group | Source surfaces | Computed focal length in air (mm) | Source role |
|---|---|---:|---|
| G1 | 1–10 | -18.7939 | Front negative group |
| G2 | 11–13 | 108.8260 | Positive inner-focus doublet GF |
| G3 | 14–18 | 172.7121 | Positive pre-stop group GP |
| G4 | 19–32 | 43.8323 | Positive rear group; stop moves with group |

The native system is retrofocus at each published station: computed BFD exceeds
EFL when both are measured from the appropriate Gaussian/rear-vertex references.
The negative front group and stronger positive rear assembly provide the broad
field with image-side clearance. This statement is based on the full source
matrix, not on the appearance of a negative front element alone.

| Infinity zoom station | Computed EFL (mm) | Computed BFD (mm) | Summed physical track (mm) |
|---|---:|---:|---:|
| Wide | 14.500461 | 21.539491 | 141.1414 |
| Middle | 17.967922 | 27.244478 | 136.8764 |
| Tele | 23.150998 | 35.075962 | 135.0096 |

BFD is measured from the last optical vertex to the paraxial image in air;
track is first optical vertex to the authored image plane. The source’s own BF
is retained in the data even though rounded radii and indices give a small
computed residual. The largest difference is 0.002162 mm at the tele station.
The summed tracks differ from the separately printed totals by at most
0.0002 mm. These are disclosed source-rounding residuals, not adjusted image planes.

The paraxial Petzval sum is +0.0028539941 mm⁻¹, computed as the sum of
φ/(n·n′) over each refracting interface. It is unchanged by zoom because the
radii and refracting indices remain fixed. This surface sum does not by itself
predict sagittal/tangential best-focus curves or establish a flat image field.

### Zoom kinematics

| Variable spacing (mm) | Wide | Middle | Tele |
|---|---:|---:|---:|
| d10 | 17.4502 | 9.3308 | 3.1517 |
| d13 | 8.4183 | 10.2009 | 9.5800 |
| d18 | 9.1955 | 5.5627 | 2.6650 |
| BF | 21.5383 | 27.2429 | 35.0738 |

The G1–G2 gap decreases, the G2–G3 gap first increases and then decreases,
and the G3–stop gap decreases. BF increases. The intermediate station is therefore
essential: replacing the source with only two endpoints would erase the d13
turnaround. A reversing intergroup gap does not mean either group reverses its
absolute motion relative to the image plane.

| First group vertex relative to fixed image plane (mm) | Wide | Middle | Tele |
|---|---:|---:|---:|
| G1 | -141.1414 | -136.8764 | -135.0096 |
| G2 | -87.5007 | -91.3551 | -95.6674 |
| G3 | -73.8589 | -75.9307 | -80.8639 |
| G4 | -57.8080 | -63.5126 | -71.3435 |

With imageward positive, G1 moves imageward across the tabulated zoom sequence;
G2, G3 and G4 move objectward. From wide to tele the travels are 6.13 mm for
G1 (4.27 then 1.87 mm), 8.17 mm for G2 (3.85 then 4.31 mm), 7.005 mm for G3
(2.07 then 4.93 mm) and 13.54 mm for G4 with the stop (5.70 then 7.83 mm,
equal to the BF change). No group reverses. The four arrows under Figure 1
point the same way: toward the image under G1 and toward the object under G2,
G3 and G4, with the arrow under G3 drawn curved.
The figure labels G2 as GF and G3 as GP and brackets G2 through G4 as the
succeeding group GR; the diagram labels follow that notation. The
implementation interpolates the three gap vectors linearly; intermediate settings are model interpolation,
not additional patent-prescribed states or a demonstrated continuous cam law.

## Element-by-Element Analysis

The focal lengths below are computed standalone element focal lengths in air.
They do not replace in-situ interface powers in a cemented assembly. Optical
types are vertex/central-section descriptions; aspheric peripheral departures
are discussed separately. Individual aberration contributions have not been
isolated, so no element is assigned an unsupported exclusive correction role.

### L1 — Neg. Meniscus (1× Asph)

nd = 1.69350, νd = 53.18. Glass: L-LAL13 class (OHARA coordinate equivalent; supplier unconfirmed). f = -54.012 mm.

This is the first of the three object-convex negative menisci in G1. Its front surface is aspheric, while the rear is spherical. It combines negative standalone power with the largest modeled clear entrance envelope; the large peripheral departure is part of the complete polynomial, not a single-coefficient description.

### L2 — Negative Meniscus

nd = 1.59282, νd = 68.62. Glass: FCD515 class (HOYA coordinate equivalent; supplier unconfirmed). f = -98.972 mm.

The second object-convex negative meniscus follows an air interval after L1. It is one of the two equal 1.59282/68.62 source coordinates in G1. Its spherical rear interface sets the tightest modeled wide-field chief-ray clearance; the source does not supply a physical clear diameter.

### L3 — Neg. Meniscus (2× Asph)

nd = 1.59271, νd = 66.97. Glass: MP-PCD51-70 class (HOYA coordinate equivalent; supplier unconfirmed). f = -55.608 mm.

The third object-convex negative meniscus is double-sided aspheric. Both surfaces have nonzero odd radial coefficients; the rear also has the only nonzero conic in this example. The complete paired profiles are required for ray tracing and for checking the following air gap.

### L4 — Biconcave Negative

nd = 1.59282, νd = 68.62. Glass: FCD515 class (HOYA coordinate equivalent; supplier unconfirmed). f = -75.533 mm.

The biconcave negative element supplies the fourth negative element in G1. Its coordinate repeats L2, but its shape and physical placement differ. Equal glass coordinates do not imply equal optical action in the assembled group.

### L5 — Positive Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90-SG class (HOYA coordinate equivalent; supplier unconfirmed). f = +63.948 mm.

The positive meniscus completes G1. Its positive standalone contribution does not overturn the net negative group power. It lies immediately ahead of the longest wide-setting intergroup gap, which contracts substantially during zoom.

### L6 — Negative Meniscus

nd = 1.92119, νd = 23.96. Glass: FDS24-W class (HOYA coordinate equivalent; supplier unconfirmed). f = -31.885 mm.

This negative meniscus is the object-side component of the G2 focusing doublet. The source cemented interface enters the L7 medium directly; there is no synthetic adhesive layer or zero-thickness air surface.

### L7 — Positive Meniscus

nd = 1.75211, νd = 25.05. Glass: FF8 class (HOYA coordinate equivalent; supplier unconfirmed). f = +24.451 mm.

The positive meniscus is the image-side component of G2. Together L6 and L7 form a weak net-positive focusing unit. The doublet moves as a unit for the source-described focus mechanism; its actual finite travel is not published.

### L8 — Negative Meniscus

nd = 1.80809, νd = 22.76. Glass: FD225 class (HOYA coordinate equivalent; supplier unconfirmed). f = -88.078 mm.

The image-convex negative meniscus starts G3. It is air-separated from the following cemented pair. Its negative standalone power is offset by that pair in the net-positive pre-stop group.

### L9 — Negative Meniscus

nd = 1.94595, νd = 17.98. Glass: FDS18-W class (HOYA coordinate equivalent; supplier unconfirmed). f = -60.499 mm.

This object-convex negative meniscus is the high-index, high-dispersion front member of the second cemented pair. The patent discusses object-convex cemented surfaces with decreasing refractive index toward the image; this pair is one of the examples of that ordering.

### L10 — Biconvex Positive

nd = 1.75520, νd = 27.51. Glass: S-TIH4 class (OHARA coordinate equivalent; supplier unconfirmed). f = +29.782 mm.

The biconvex positive member completes the second cemented pair and G3. Its source νd is 27.51, not a nearby catalogue value rounded to 27.53. Retaining that coordinate is important even when a candidate glass family is close.

### L11 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 class (HOYA coordinate equivalent; supplier unconfirmed). f = +46.937 mm.

The biconvex positive singlet is the first glass element after the stop. Its 1.43700/95.10 coordinate is the lowest-index and highest-Abbe glass in the source. It is consistent with the production FLD category, but the patent does not name a commercial supplier.

### L12 — Negative Meniscus

nd = 1.72047, νd = 34.71. Glass: S-NBH8 class (OHARA coordinate equivalent; supplier unconfirmed). f = -41.747 mm.

The object-convex negative meniscus begins the third cemented pair. Its absolute partial-dispersion ratio matches the OHARA S-NBH8 coordinate closely. That is a spectral/material comparison, not a claim that this one element proves an apochromatic system.

### L13 — Biconvex Positive

nd = 1.55032, νd = 75.50. Glass: FCD705 class (HOYA coordinate equivalent; supplier unconfirmed). f = +24.892 mm.

The biconvex positive member of the third pair uses the same 1.55032/75.50 source coordinate later used by L17. Its positive power works with a negative front component in a net-positive cemented unit.

### L14 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45L class (HOYA coordinate equivalent; supplier unconfirmed). f = -12.454 mm.

The biconcave negative component begins the fourth pair. This is a strong negative standalone element, joined directly to the high-index positive L15. The combined unit remains negative; the sign must be computed with the cemented interface rather than inferred from the positive rear component.

### L15 — Positive Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1-W class (HOYA coordinate equivalent; supplier unconfirmed). f = +19.663 mm.

The positive meniscus completes the fourth pair. Both members have high refractive index, but their νd values are different. The preserved source spectral ratios offer more information than Abbe number alone, while still falling short of a unique full dispersion curve.

### L16 — Negative Meniscus

nd = 1.88300, νd = 40.80. Glass: TAFD30 class (HOYA coordinate equivalent; supplier unconfirmed). f = -35.849 mm.

The object-convex negative meniscus starts the fifth cemented pair. Its vertex shape and index step follow the source description. The front interface remains an ordinary refracting surface; no stabilization or lateral motion is added.

### L17 — Positive Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 class (HOYA coordinate equivalent; supplier unconfirmed). f = +30.593 mm.

The positive meniscus completes the fifth pair. It shares its d/v coordinate with L13 but belongs to a much weaker net-positive pair. The modeled rear optical rim is smaller than the front/junction rim to maintain the following narrow air interval without hidden overlap.

### L18 — Pos. Meniscus (2× Asph)

nd = 1.55352, νd = 71.72. Glass: MP-FCD500-20 class (HOYA coordinate equivalent; supplier unconfirmed). f = +165.829 mm.

The image-convex positive meniscus is the final element, with both faces aspheric. Its comparatively weak standalone paraxial power coexists with substantial higher-order surface terms. The patent specifically associates a rear asphere with balancing peripheral aberration changes; that design rationale is not an independently isolated aberration measurement. [1, ¶¶0049–0050]

### Cemented units

| Pair | Elements | Computed net focal length in air (mm) |
|---|---|---:|
| D1 | L6/L7 | +108.8260 |
| D2 | L9/L10 | +59.1928 |
| D3 | L12/L13 | +62.7015 |
| D4 | L14/L15 | -33.1436 |
| D5 | L16/L17 | +257.2333 |

The five cemented pairs all have a convex-to-object cemented interface and a
lower refractive index in the image-side material. This satisfies the source’s
construction condition of at least four such pairs. Net focal lengths above
are calculated for each isolated compound unit in air, retaining the actual
internal index step and both physical center thicknesses.

## Glass Selection and Spectral Evidence

The patent provides native nd, νd and absolute θgF for every glass medium.
Catalogue comparison was made against primary HOYA, OHARA and HIKARI data, with
Schott material data as additional cross-vendor context. Catalogue-equivalent
labels identify coordinate classes only. No brand-to-supplier inference is made.
In particular OHARA L-LAL13 is a low-softening family designation distinct
from an S-prefix designation, and that prefix is retained.

| Source coordinate nd / νd | Elements | Absolute θgF | Converted ΔPgF | Adopted coordinate-class label |
|---|---|---:|---:|---|
| 1.69350 / 53.18 | L1 | 0.5482 | -0.00615124 | L-LAL13 class (OHARA coordinate equivalent; supplier unconfirmed) |
| 1.59282 / 68.62 | L2, L4 | 0.5440 | +0.01561884 | FCD515 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.59271 / 66.97 | L3 | 0.5366 | +0.00544354 | MP-PCD51-70 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.84666 / 23.78 | L5 | 0.6191 | +0.01529796 | FDS90-SG class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.92119 / 23.96 | L6 | 0.6201 | +0.01660072 | FDS24-W class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.75211 / 25.05 | L7 | 0.6191 | +0.01743410 | FF8 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.80809 / 22.76 | L8 | 0.6285 | +0.02298232 | FD225 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.94595 / 17.98 | L9 | 0.6544 | +0.04084236 | FDS18-W class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.75520 / 27.51 | L10 | 0.6102 | +0.01267182 | S-TIH4 class (OHARA coordinate equivalent; supplier unconfirmed) |
| 1.43700 / 95.10 | L11 | 0.5335 | +0.04965820 | FCD100 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.72047 / 34.71 | L12 | 0.5834 | -0.00201778 | S-NBH8 class (OHARA coordinate equivalent; supplier unconfirmed) |
| 1.55032 / 75.50 | L13, L17 | 0.5399 | +0.02309100 | FCD705 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.95375 / 32.32 | L14 | 0.5900 | +0.00056224 | TAFD45L class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.92286 / 20.88 | L15 | 0.6388 | +0.03012016 | E-FDS1-W class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.88300 / 40.80 | L16 | 0.5654 | -0.00977440 | TAFD30 class (HOYA coordinate equivalent; supplier unconfirmed) |
| 1.55352 / 71.72 | L18 | 0.5397 | +0.01653304 | MP-FCD500-20 class (HOYA coordinate equivalent; supplier unconfirmed) |

The source ratio is θgF = (ng − nF)/(nF − nC). The application field ΔPgF
is calculated against its documented normal line, 0.6438 − 0.001682 νd.
The conversion changes the convention, not the source ratio. Individual nC,
nF and ng are not uniquely determined by nd, νd and θgF without an additional
dispersion anchor, so no unsupported line indices are authored. Source wavelengths
are d = 587.56 nm, F = 486.13 nm and g = 435.84 nm; the conventional C line is
656.3 nm. [1, ¶0052]

L11 provides the most extreme low-dispersion coordinate. L2, L4, L13, L17 and
L18 form the additional low-dispersion set used in the construction correlation.
Several opposite-power cemented pairings provide degrees of freedom for
chromatic balancing, but isolated power sign and Abbe number do not determine
each element’s chromatic contribution in the complete zoom. The available
partial ratios improve the material description; they do not by themselves
verify apochromatic performance, secondary-spectrum suppression, or a unique
production melt. The patent prints θgF for every element but nowhere calls a
glass anomalous, extra-low-dispersion or fluorite-like, so no element carries
the patent-listed APD display tag. Six carry the inferred tag: L11 (FCD100
class, ΔPgF +0.0497), L2 and L4 (FCD515 class, +0.0156), L13 and L17 (FCD705
class, +0.0231) and L18 (MP-FCD500-20 fluorophosphate preform class, +0.0165).
That count equals Sigma’s one FLD plus five SLD elements. Sigma’s page gives
the counts and a diagram legend but no element positions in text, so the
positions are an inference from glass class; L18 in particular is taken as
the fifth SLD element by count, the aspheric phosphate-crown L3 (ΔPgF
+0.0054) being the only other candidate. L3 and the dense flints with
positive ΔPgF stay untagged.

The application resolves all 18 annotations to compatible catalogue entries.
L3 was first authored with an Unmatched marker, because the runtime then routed
the MP-PCD51-70 name through an alias to M-PCD51. That proxy has G-channel index
1.592013745752 against source nd=1.59271, and at the published wide field its
reaimed G-channel chief clipped surface 4 by 0.000340 mm. The catalogue now
carries the HOYA MP-PCD51-70 row itself (nd 1.59271, nu-d 66.97), whose curve
evaluates to 1.592707 at d, 0.000003 from the source index, so L3 is labelled
with that class and traces on catalogue Sellmeier data like the other elements.
The episode shows that the broad catalogue compatibility window alone does not
establish adequate spectral fidelity for this tightly bounded aperture.

No measured nC/nF/ng is invented for L3. With L3 on the Abbe-plus-dPgF path, the
dispersion-plus-tracer checks cleared all three native G-channel chiefs and
their exact-format counterparts with a wide format-corner margin of about
0.001695 mm; the 0.000003 index residual of the MP-PCD51-70 curve moves that
chief by roughly 0.00001 mm, and a source-index trace with L3 set to 1.592707
reproduces the same field coverage at all three stations. The source-index
geometric margin of 0.001717 mm and this approximate spectral-model margin are
distinct. All 18 elements
preserve the source absolute theta_gF through dPgF. This verifies the stated
G-channel chief configurations only, not red/blue/violet field clearance,
full off-axis pupil transmission or measured production dispersion.

## Focus Mechanism

The source identifies G2, the L6/L7 cemented doublet, as the focusing group GF.
For a transition from infinity to a nearer object it moves toward the image.
G3 is the positive group GP between GF and the stop. The patent’s purpose is
to limit image-height variation during focus wobbling while also limiting
aberration changes with focus. This rationale is source-stated; the present
model does not measure actual motor wobble or finite-focus aberrations.
[1, abstract, ¶¶0001–0009, 0063]

Focus status is NO_INTERNAL_RECONSTRUCTION. Only infinity spacings are
published for the three zoom stations: the variable-spacing table heads all
three columns with an infinite shooting distance, as do the tables of the
other four examples, and Figures 1 to 7 are all infinity states. The focus
arrow under G2 in Figure 1 points toward the image, in agreement with the
text. The model repeats each infinity spacing
at both endpoints of the schema’s focus dimension, so it adds no internal
near-focus motion. The production 0.28 m MFD is product metadata only; no
finiteConjugates record certifies it. Neither focus travel nor close-focus
magnification can be claimed from this implementation. Sigma’s stepping-motor
description establishes production mechanism context, not
the missing numerical focus law. [2,3]

## Aspherical Surfaces

The source equation is z(h) = (h²/R)/(1 + √(1 − (1+K)(h/R)²)) + Σ Aₚhᵖ,
for p = 3 through 20. K transfers directly. Coefficient units are mm^(1−p)
when h and z are in millimetres. The radial height is nonnegative: odd powers
remain rotationally symmetric. No even-polynomial refit is substituted.
[1, ¶0055, PDF pp. 10, 12–13]

| Term | s1 | s5 | s6 | s31 | s32 |
|---|---:|---:|---:|---:|---:|
| K | 0.00000E+00 | 0.00000E+00 | -3.64842E-02 | 0.00000E+00 | 0.00000E+00 |
| A3 | 0.00000E+00 | -5.23111E-05 | -3.48559E-05 | 0.00000E+00 | 0.00000E+00 |
| A4 | 8.58209E-06 | -1.26716E-05 | -1.50563E-05 | -2.45667E-05 | 5.66654E-06 |
| A5 | 0.00000E+00 | -1.13040E-05 | -1.10043E-05 | 0.00000E+00 | 0.00000E+00 |
| A6 | -1.40764E-08 | 1.95245E-06 | 1.72222E-06 | -8.17092E-08 | 5.42201E-08 |
| A7 | 0.00000E+00 | -9.38134E-08 | -4.71099E-08 | 0.00000E+00 | 0.00000E+00 |
| A8 | 3.05748E-11 | -7.82976E-10 | -3.15483E-09 | 2.81370E-09 | -2.06458E-09 |
| A9 | 0.00000E+00 | 1.22496E-10 | -5.86163E-11 | 0.00000E+00 | 0.00000E+00 |
| A10 | -5.97803E-14 | 1.97968E-12 | 1.76453E-11 | -7.26008E-11 | 3.25090E-11 |
| A11 | 0.00000E+00 | -1.33295E-14 | -1.10783E-13 | 0.00000E+00 | 0.00000E+00 |
| A12 | 9.08590E-17 | -1.10265E-14 | -5.28181E-15 | 1.11778E-12 | -2.56410E-13 |
| A13 | 0.00000E+00 | 5.32582E-17 | -8.35047E-16 | 0.00000E+00 | 0.00000E+00 |
| A14 | -9.58737E-20 | 7.28532E-18 | 5.89441E-17 | -9.83681E-15 | 1.03356E-15 |
| A15 | 0.00000E+00 | 1.89244E-19 | -9.54814E-18 | 0.00000E+00 | 0.00000E+00 |
| A16 | 6.40051E-23 | -1.81192E-20 | 3.21284E-19 | 4.86452E-17 | -1.78037E-18 |
| A17 | 0.00000E+00 | 1.13899E-21 | 6.43253E-21 | 0.00000E+00 | 0.00000E+00 |
| A18 | -2.39147E-26 | -2.99255E-23 | -4.91029E-23 | -1.24975E-19 | -8.07610E-22 |
| A19 | 0.00000E+00 | 1.48595E-25 | 1.37261E-24 | 0.00000E+00 | 0.00000E+00 |
| A20 | 3.78519E-30 | -3.31214E-27 | -5.09803E-25 | 1.29336E-22 | 5.22718E-24 |

Surface 1 reshapes the entrance profile over the largest modeled aperture.
Surfaces 5 and 6 form the double-sided aspheric negative meniscus; s6 has
K = −0.0364842. The complete sums matter because many adjacent polynomial
terms alternate in sign. Surfaces 31 and 32 form a paired rear profile whose
net edge thickness must be checked together. A leading A4 sign alone cannot
be used to assign an isolated aberration correction to any of these surfaces.

| Surface | Modeled semi-diameter (mm) | Sag departure from vertex sphere (µm) |
|---|---:|---:|
| 1A | 33.50 | +5069.946 |
| 5A | 19.30 | -580.595 |
| 6A | 15.10 | -1161.289 |
| 31A | 13.00 | -725.314 |
| 32A | 13.00 | +140.540 |

These departures apply at the exact data-file apertures estimated from
Figure 1, not at published patent clear radii. They include the conic difference as well as
the polynomial sum. They must be recalculated whenever an aperture changes.
The large front departure is retained as the full source polynomial evaluates
it; no value is clipped or rescaled to resemble a spherical drawing. The
source does not establish the production manufacturing process for each
surface, so no unsupported resin layer or molding process is introduced.

## Conditional Expressions

The source evaluates four paraxial conditions at the wide infinity state,
with the wide/tele mean focal length where specified. DPS is the distance
from the rear of GP to the stop, HIM the maximum image height, MF the
transverse magnification of GF, and MR the composite transverse magnification
from GP through the rear assembly. [1, claims 1–3; ¶0098]

| Condition | Required open interval | Computed value | Printed value |
|---|---|---:|---:|
| DPS/HIM | (0.28, 1) | 0.42512714 | 0.43 |
| MRW^2*(1-MFW^2) | (-1, -0.3) | -0.44622163 | -0.45 |
| sqrt(fw*ft)/fF | (0.1, 0.5) | 0.16836164 | 0.17 |
| sqrt(fw*ft)/fP | (0.04, 0.2) | 0.10608474 | 0.11 |

The signed magnification factors are derived from the full axial ray before
and after the relevant groups. The second condition is consequently evaluated
with the actual conjugate relationships in the assembled system. Standalone
element power is not substituted for a group magnification. All four values
agree with the source’s two-decimal presentation and lie within their stated
open intervals; that establishes these particular paraxial conditions, not
overall photographic performance.

## Modeled Apertures and Scope

The stop is fixed at source surface 19 and moves with G4. The physical
diaphragm diameter is not published. At each native station its radius is
inferred by exact Snell tracing of an on-axis ray launched at EFL/(2×2.93).
The radii are 8.594646, 9.764792 and 11.480608 mm. Agreement with f/2.93 is
therefore calibration. It is not an independent measurement of an iris.
The zoom aperture schedule is inferred and linearly interpolated between
source stations.

Optical semi-diameters are estimated from Figure 1, which is drawn to scale
at the wide end but not isotropically. Vertex spacing fixes the axial scale.
The drawn image-plane half-height, equal to the source's 21.63 mm, and the
sag at which each spherical surface meets its rim fix the radial scale, which
is finer by a factor of about 1.14. Read with one scale for both axes, every
rim comes out about 14 % too large and several exceed what the surfaces
allow. Read with the two-axis calibration, the drawn rims, rim sags and edge
thicknesses agree with the prescription to about one pixel, 0.15 mm. A
second, independent calibration followed every drawn surface curve over its
whole height on the native 400 dpi bitmap and fitted the radial scale surface
by surface. The strongly curved surfaces give 0.1472 mm per pixel against
0.1672 mm per pixel axially, a ratio of 1.136, with residuals near 0.4 pixel
where a single-scale reading misses by 3 to 12 pixels. The drawn stop opening,
about 8.7 mm on that scale, also agrees with the inferred 8.59 mm wide-end
iris. The values are optical extents, not mechanical blank diameters, and are also
bounded by exact-ray clearance, actual surface slopes, conic domains, glass
edge thicknesses and shared-band gap intrusion. No radius, axial separation,
index, conic or aspheric term is altered to obtain clearance, and no layout
setting is used to hide an overlap.

The native maximum-field chiefs reach the authored image plane at the
source’s 21.63 mm image height within 0.005 mm. The wide chief has only
0.002314 mm minimum modeled clearance at surface 4, so the endpoint is
sensitive to the aperture inference and is not robust mechanical-tolerance
evidence. Actual pinned-project tracing independently confirms a nominal
0.00231402614 mm s4 margin, with a 1e-9 mm aperture comparison tolerance.
Actual pinned-project validation accepts the unchanged candidate. This
establishes a nominal numerical pass only: the model is not robust to ordinary
aperture rounding uncertainty. At s4, the default rim-policy upper SD is
18.36198 mm and the chief requires 18.357685974 mm. The authored 18.36 mm lies
inside that narrow interval, but the interval is narrower than a 0.01 mm
notation increment. Test-only 18.355 mm clips the chief; 18.365 mm violates
the actual rim validator. Rounding the inference to 0.1 mm cannot preserve
both conditions: 18.3 mm clips, while 18.4 mm exceeds the rim limit. The
hundredth-millimetre notation specifies the nominal model; Figure 1 does not
establish measured aperture precision at that scale.

The exact 36×24 mm format corner is slightly beyond the rounded source image
height: its radius is 21.633307653 mm. Solving for that radius at the wide
station gives a 57.147207146° half-field and only 0.001716551 mm minimum s4
clearance. Actual pinned-project tracing agrees with that narrower nominal
margin. The 0.002314 mm result applies to the printed source field, not to
this exact full-frame diagonal. Neither establishes robust physical coverage.

Three exits remain below the drawn outline. Surface 4 is drawn to about
18.7 mm and held at 18.36 mm by the spherical rim-slope limit. Surface 6 is
drawn to about 15.8 mm and held at 15.1 mm, and surface 30 is drawn level
with its doublet at 12.3 mm and held at 11.9 mm, both by the following air
gap. Surface 2 matches the drawn 0.90 |R| rim. The figure also draws flat
annuli outside the curved faces at the rear of L4 and L5 and the front of
L14, ending near 14.6, 15.0 and 9.3 mm. Those three faces are carried to
the element's outer height so the drawn outline is kept, which slightly
overstates their clear aperture. These are explicit estimated optical
extents, not repaired patent apertures or altered source separations.

The smallest glass thickness inside the modeled apertures is the 0.7000 mm
axial thickness of L6; the thinnest rim is the 0.780 mm edge of L7. Geometry
and rays were examined at the three native stations and six intermediate
linear-interpolation settings; finite samples do not prove validity over
a continuous zoom trajectory.

Representative meridional and sagittal input-plane pupil samples show
peripheral optical-rim clipping. The model does not claim complete
wide-open off-axis pupil transmission or production illumination. At the
tele station the upper edge of the full-field bundle is cut by about 1.0 mm
at the L12 front and up to about 0.9 mm at the L14/L15 pair. The native full
axial marginal rays and sampled chiefs clear the modeled apertures. The portable computation, targeted actual validator/native-chief checks and
18-element runtime glass-resolution check are separate from buildLens,
production rendering and full application integration. No additional wavelength or finite-focus
configuration is certified by these d-line checks.

A separate source-first review re-entered the prescription before inspecting
the model and reproduced the source and candidate calculations. Independent
chief-ray sampling covered 41 zoom positions and 41 field fractions (1,681
rays), with no failed chief in that finite grid. A constrained extremum search
also checked for edge and gap extrema between the original radial samples.
The rear semi-diameter of L1, surface 2, is specified as 23.0 mm, consistent
with tenth-millimetre inference rounding and the unchanged rim limit. The
same 41 × 41 chief grid was repeated on the figure-calibrated apertures with
no failed chief. Its tightest margin is still 0.001717 mm at surface 4; among
the surfaces whose apertures changed, the smallest chief margin is 1.5 mm and
the smallest axial marginal-ray margin is 0.94 mm.

The original full-train ray calculation reported one peripheral domain failure.
First-boundary tracing establishes that this ray is already blocked at surface
2, before that extension fails. Thus the 1,440 sampled incident rays are
classified physically as 1,424 transmitted and 16 optical-rim clips, with no
admitted-ray domain failure in this set. The failed extended-trace observation
is retained separately; no source coefficient is repaired. These pupil-sample
counts, and the earlier observation that no ray first clipped inside a
cemented junction, describe the larger aperture set that preceded the
two-axis figure calibration. The smaller rims clip more peripheral rays, and
that sample has not been repeated.


## Sources

1. Japan Patent Office, [JP2020042221A](https://patents.google.com/patent/JP2020042221A/ja),
   *Wide-angle lens system*, published 19 March 2020. The original supplied
   JPO/DPMA PDF governs the numerical extraction. Example 1: ¶¶0061–0067,
   PDF pp. 10–13; conditions ¶0098, PDF p. 26; Figure 1, PDF p. 27.
2. Sigma, [14–24mm F2.8 DG DN Art product specifications and construction](https://www.sigma-global.com/en/lenses/a019_14_24_28/), accessed 4 October 2026.
3. Sigma Corporation of America, [14–24mm F2.8 DG DN press release](https://press.sigmaphoto.com/corporate/07/sigma-14-24mm-f2-8-dg-dn-press-release/), 10 July 2019.
4. HOYA, [Optical Glass Catalog 20260707 including obsolete types](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), accessed 4 October 2026.
5. OHARA, [Optical Glass pocket catalogue, May 2023](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf), optical-coordinate tables; accessed 4 October 2026.
6. HIKARI, [Optical Glass Catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), material sheets; accessed 4 October 2026.
7. SCHOTT, [Optical materials for precision molding](https://www.schott.com/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-materials-for-precision-molding-january-2014-eng.pdf?rev=ce8dcf93080c47208e63890af8a9ea2c), catalogue-equivalent cross-checks.
