# Tamron 70–180mm F/2.8 Di III VC VXD G2: Numerical Example 1

## Patent Reference and Design Identification

**Patent:** JP 2025-033505 A  
**Application Number:** JP 2023-139262  
**Filed:** 29 August 2023  
**Published:** 13 March 2025  
**Inventor:** Hisayuki Yamanaka  
**Applicant:** Tamron Co., Ltd.  
**Title:** Zoom Lens and Image Capturing Device  
**Embodiment:** Numerical Example 1  
**Lens:** TAMRON 70-180mm f/2.8 Di III VC VXD G2

The prescription is a research correlation with the Tamron A065, marketed as the
70–180mm F/2.8 Di III VC VXD G2. The original Japanese publication remains the
numerical authority. Tamron's product page and September 2023 brochure supply
production specifications; they do not identify this example as the factory prescription.

The evidence converges in several respects:

1. Example 1 contains 20 physical lenses in 15 air-separated components, matching
   the manufacturer's stated construction. Five functional optical groups organize
   those components; a functional group is not an air-separated component.
2. L16 and L19 provide the two glass-asphere positions, while L20 is a resin-hybrid
   asphere. This is consistent with the maker's two GM elements and one hybrid.
   The patent explicitly calls L16 glass-molded; the table establishes L19's
   aspheric geometry without independently establishing its manufacturing process.
3. L3 has the source's lowest nd and highest νd; L2, L11 and L14 provide additional
   low-dispersion positions. This is consistent with the maker's one XLD and three
   LD elements. These positional correspondences do not identify commercial melts.
4. The native focal-length range lies close to the marketed range, but is retained
   without rescaling. The native f-numbers also remain distinct from marketing F/2.8.
5. The patent identifies a moving focusing doublet and a lateral stabilization
   subgroup. The product independently has VXD focusing and VC stabilization.

The current manufacturer page lists Sony E and Nikon Z variants and full-frame
use. The model preserves the source's 21.6330 mm maximum image height. Production
minimum focusing distance is 0.3 m at the wide end and 0.85 m at the long end;
the available patent configurations stop at a common 850 mm test distance.
The missing wide-end production close-focus prescription is not reconstructed.

[1, ¶¶0106–0135, Tables 1–6, Figure 1; 2–3]

## Optical Architecture

The system has the source group sequence positive G1, negative G2, positive G3,
negative G4 and weakly negative G5. G1 and G2 form the patent's front section;
G3–G5 form its rear section. The diaphragm is source surface 16, immediately
before the refractive portion of G3. The cover glass is camera-side, following G5.

Figure 1 also letters the groups by claimed role, and the diagram's group labels
carry those letters: G1 is lens group P, G2 the intermediate group M1 (and its
lens group N), G3 the intermediate group M2, G4 the focusing lens group F and G5
the rear group R. The cemented pairs are labelled D1 (L1–L2), D2 (L10–L11),
D3 (L12–L13, the patent's vibration-compensation group V), D4 (L14–L15) and
D5 (L17–L18, which is all of G4); H1 marks the L20 resin-on-glass hybrid.

The source distinguishes physical lens identities from functional group labels.
The implemented hybrid layer is a separate optical medium, so 21 material records
represent 20 physical lenses. The camera cover is traced separately and does not
increase either the physical lens count or the drawn material count.

### Functional-group powers

The following values are isolated-group Gaussian EFLs computed from the native
prescription in air. They are not individual aberration contributions or in-situ
magnification factors.

| Functional group | Source surfaces | Computed isolated EFL mm |
|---|---|---:|
| G1 | 1–5 | +148.1002 |
| G2 | 6–15 | -40.9087 |
| G3 | 16–29 | +35.8421 |
| G4 | 30–32 | -50.4269 |
| G5 | 33–37 | -727.6768 |

G1 is a positive front assembly built from a cemented pair and a separate
low-dispersion meniscus. G2 contains five separated lenses and has negative
net power. The aperture and the multi-component positive G3 form the central
section. G4 is the focusing doublet. G5 remains fixed relative to the image
plane during zoom and combines a glass asphere with the terminal hybrid.

[1, ¶¶0106–0119, Table 5]

### Native first-order results

| Infinity state | Source EFL mm | Computed EFL mm | Source F-number | Physical track mm |
|---|---:|---:|---:|---:|
| Wide | 72.0664 | 72.067202 | 2.9104 | 172.0001 |
| Middle | 120.0114 | 120.013370 | 2.9109 | 189.0483 |
| Long | 174.6514 | 174.654239 | 2.9103 | 197.8684 |

Physical track is measured from the first vertex to the authored image plane,
including the camera cover. The source's wide total-length condition instead
uses the air-equivalent cover contribution. These reference planes must not be
mixed with the manufacturer's mount-to-front barrel length.

The physical distance from the final lens vertex to the image plane is 20.7805 mm.
Its air-equivalent counterpart is 19.928707 mm. The plate is retained physically
in the optical model: 2.5 mm of nd=1.51680, νd=64.20 glass, with 17.2805 mm of
preceding air and 1.0000 mm of trailing air. A t/n replacement is used only as an
independent paraxial comparison, not as a hidden alteration to the prescription.

The surface-by-surface Petzval sum is +0.000444781033 mm⁻¹ at the d line.
This is the paraxial curvature sum of the prescription; it does not establish
flat sagittal or tangential image surfaces, or certify off-axis resolution.

[1, Tables 1–3 and 26, ¶0064]

## Element-by-Element Analysis

The focal lengths below are standalone, in-air Gaussian values for the individual
material spans. In a cemented pair, the actual shared interface refracts between
two glass indices; its effect must not be replaced by the sum of standalone-air
powers. The functional and cemented powers are evaluated separately.

Each glass label names a published catalog glass whose nd/νd coordinate matches the
retained pair. It is a coordinate-equivalent class, not a claim that the patent names
a supplier or a specific catalog melt.

### L1 — Negative Meniscus

nd = 1.80610, νd = 33.27. Glass: NBFD15-W (HOYA coordinate-equivalent class; supplier unconfirmed). f = -226.7 mm.

L1 is the object-side member of the cemented L1–L2 pair in G1. Its convex-to-object form and negative standalone power agree with the source description.

Its νd is substantially lower than its positive partner's. The pair joins unlike dispersions, but that fact alone does not quantify residual color or identify the designer's separate aberration allocation.

[1, ¶0112, Table 1]

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +161.2 mm.

L2 is the positive member of the first cemented pair. The shared second surface is an L1-to-L2 glass boundary, not an air interface.

Its coordinate is compatible with the HOYA FCD1 family. The prescription preserves the numerical coordinate; a catalog-family match does not establish the actual supplier or melt.

[1, ¶0112, Table 1]

### L3 — Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +198.7 mm.

L3 is the separate positive meniscus at the rear of G1. Its source orientation is convex toward the object.

The very high νd distinguishes this position from the surrounding glass palette. Its coordinate matches HOYA FCD100, supporting a low-dispersion class comparison without proving the maker's XLD glass identity.

[1, ¶0112, Table 1]

### L4 — Positive Meniscus

nd = 1.85883, νd = 30.00. Glass: NBFD30 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +60.1 mm.

L4 begins G2 as a separated positive meniscus. It precedes the sequence of negative and positive members that produces G2's negative net power.

The isolated positive sign does not contradict the group sign. Principal-plane placement and the intervening separations enter the combined group matrix.

[1, ¶0113, Table 1]

### L5 — Negative Meniscus

nd = 1.75500, νd = 52.32. Glass: TAC6L (HOYA coordinate-equivalent class; supplier unconfirmed). f = -35.5 mm.

L5 is the first negative member of G2, separated from L4. Its more strongly curved rear face is consistent with its negative standalone power.

The nearby air spacing remains exactly as tabulated. Its estimated aperture is constrained jointly with the next lens by the current geometry rules.

[1, ¶0113, Table 1]

### L6 — Negative Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -78.9 mm.

L6 is another separated negative member of G2. Its front face has weak curvature relative to its rear face.

It shares the same native nd/νd coordinate as L18, but repeated coordinates are not proof of a common commercial melt. The two positions have different shapes and different group functions.

Both faces are modeled to 15.5 mm, matching the square-edged plate drawn in Figure 1. The air gap toward L5 is still checked over the 14.95 mm band the two lenses share.

[1, ¶0113, Table 1]

### L7 — Positive Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90-SG (HOYA coordinate-equivalent class; supplier unconfirmed). f = +59.2 mm.

L7 is the positive meniscus preceding the final negative lens of G2. Its exit face is source surface 13.

The aperture at this exit and the following entrance face jointly govern the tight air-boundary clearance. The approved modeling exception concerns these inferred rims, not their radii or separation.

[1, ¶0113, Table 1]

### L8 — Negative Meniscus

nd = 2.00069, νd = 25.46. Glass: TAFD40L-W (HOYA coordinate-equivalent class; supplier unconfirmed). f = -53.9 mm.

L8 closes G2 with its concave face toward the object. Source surface 14 has nd greater than two; that printed high index is retained without correction.

Its entrance face and L7's exit face form the binding 13–14 air boundary. The physical surface geometry remains unchanged under the bounded aperture treatment.

[1, ¶0113, Table 1]

### L9 — Positive Meniscus

nd = 1.74330, νd = 49.22. Glass: NBF1 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +54.5 mm.

L9 begins the refractive portion of G3, behind the aperture stop. It is a separated positive meniscus.

The surface table keeps the diaphragm-to-glass interval distinct from the preceding variable group gap. The stop is not silently merged into a refracting surface.

[1, ¶0114, Table 1]

### L10 — Negative Meniscus

nd = 2.00069, νd = 25.46. Glass: TAFD40L-W (HOYA coordinate-equivalent class; supplier unconfirmed). f = -39.4 mm.

L10 is the negative member of the cemented L10–L11 pair. It uses the same high-index coordinate as L8.

The common interface carries the downstream L11 medium. No synthetic cement layer or additional optical surface is inserted.

[1, ¶0114, Table 1]

### L11 — Positive Meniscus

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +37.1 mm.

L11 is the positive, lower-dispersion member of that cemented pair. Its source coordinate is repeated at L14.

The positive standalone power is substantial, but the combined cemented power is the appropriate quantity for the pair. A low-dispersion classification alone does not establish secondary-spectrum correction.

[1, ¶0114, Table 1]

### L12 — Biconcave Negative

nd = 1.61266, νd = 44.46. Glass: J-KZFH1 (HIKARI coordinate-equivalent class; supplier unconfirmed). f = -34.5 mm.

L12 is the front member of the L12–L13 cemented stabilization subgroup. Its source shape is biconcave.

The patent assigns the lateral stabilization function to the pair as a unit. The centered prescription does not supply a permissible decenter amplitude or a numerical stabilization trajectory.

[1, ¶0114, Table 1]

### L13 — Positive Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +65.5 mm.

L13 is the positive meniscus cemented to L12. The pair retains negative net optical power.

This combination is the patent's subgroup V. Neither the individual positive sign nor its high index specifies the aberrations produced by an actual laterally shifted state.

[1, ¶0114, Table 1]

### L14 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +26.9 mm.

L14 is the positive front member of the next G3 cemented pair. It is one of the source's high-νd positions.

Its coordinate matches L11, while its curvatures and center thickness differ. The repetition is a material-coordinate observation, not proof that the two elements have identical optical roles.

[1, ¶0114, Table 1]

### L15 — Biconcave Negative

nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -26.2 mm.

L15 is cemented behind L14. It is followed by the separated glass-aspheric L16.

The revised exit aperture at surface 27 is needed by the sampled physical pupil at the long, near-focus source state. This is an inferred clear-radius adjustment, not a change to the material or exit curvature.

[1, ¶0114, Table 1]

### L16 — Biconvex Positive, Two Aspheric Faces

nd = 1.85108, νd = 40.12. Glass: Q-LASFH58S (HIKARI coordinate-equivalent class; supplier unconfirmed). f = +33.1 mm.

L16 closes G3 and has aspherical surfaces 28A and 29A. The source explicitly describes it as glass-molded.

The final aperture radii preserve the original coefficients and retain positive material thickness. Its profile departures are evaluated at the modeled rims in the asphere section below.

[1, ¶0114, Table 1]

### L17 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: E-FDS1-W (HOYA coordinate-equivalent class; supplier unconfirmed). f = +80.2 mm.

L17 is the front member of the cemented G4 focusing doublet. The doublet moves imageward for nearer objects.

The standalone L17 power is positive, whereas the combined G4 power is negative. Focus behavior follows the complete doublet and its placement in the system, not this individual sign.

[1, ¶0115, Table 1]

### L18 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA coordinate-equivalent class; supplier unconfirmed). f = -30.8 mm.

L18 is the negative rear member of G4. Its numerical material coordinate repeats that of the separated L6.

The front and rear gaps around G4 change together during focusing. Their near-state sums differ from infinity by only the tabulated rounding residual; no compensating source edit is made.

[1, ¶0115, Table 1]

### L19 — Biconvex Positive, Two Aspheric Faces

nd = 1.58313, νd = 59.46. Glass: M-BACD12 (HOYA coordinate-equivalent class; supplier unconfirmed). f = +68.3 mm.

L19 begins the fixed G5 group. Both faces are explicitly marked aspherical in the numerical table.

The table establishes two aspheric glass surfaces here. The patent prose does not independently identify a molding process for L19, so the production GM correspondence remains a construction correlation.

[1, ¶0116, Table 1]

### L20r — Negative Meniscus, Aspheric Resin Layer

nd = 1.53610, νd = 41.21. Glass: Unmatched (hybrid resin; no compatible HOYA coordinate). f = -505.5 mm.

L20r is the 0.2000 mm center-thickness resin layer attached to the front of physical L20. Its separate index and thickness are retained, with aspherical outer surface 35A.

The layer is only a component of physical L20, not an extra manufactured lens. Its modeled clear radius is 15.0 mm, where Figure 1 ends the concave resin face at the substrate's flat seat. The layer thickens from 0.2000 mm on axis to 0.3020 mm near 10 mm height and thins to 0.1430 mm at that rim; the polynomial would drive it to zero just beyond 16.5 mm. These are optical-model results and should not be read as production tolerances.

[1, ¶0116, Table 1]

### L20 — Negative Meniscus, Glass Substrate

nd = 1.90366, νd = 31.31. Glass: TAFD25L (HOYA coordinate-equivalent class; supplier unconfirmed). f = -53.1 mm.

The substrate supplies the remaining glass span of physical L20. Its front boundary refracts from the resin into this glass; its rear boundary exits to air.

Together the substrate and resin form the source's hybrid asphere. The combined hybrid power is different from either isolated material value. The cover glass after it belongs to the camera-side model.

The rear face is modeled to 17.0 mm, the outer rim Figure 1 draws for L20. The diagram joins that rim to the 15.0 mm front rim with a straight edge where the figure shows a flat mounting seat.

[1, ¶0116, Table 1]

## Glass Identification and Spectral Limits

The patent gives refractive-index and Abbe coordinates without commercial glass
names. The audit compares all distinct coordinates against the primary HOYA
catalog, including obsolete types. The following nearest-coordinate candidates
are comparisons, not supplier assignments. Multiple catalog process variants
may share a nominal coordinate.

| Source nd | Source νd | Nearest checked HOYA candidate | Δnd, catalog−source | Δνd, catalog−source |
|---:|---:|---|---:|---:|
| 1.43700 | 95.10 | FCD100 | +0.000000 | +0.0000 |
| 1.49700 | 81.61 | FCD1 | +0.000000 | +0.0000 |
| 1.51680 | 64.20 | BSC7 | +0.000000 | +0.0000 |
| 1.53610 | 41.21 | FF2 | -0.003539 | +4.7329 |
| 1.58313 | 59.46 | M-BACD12 | +0.000000 | +0.0000 |
| 1.59282 | 68.62 | FCD515 | +0.000000 | +0.0000 |
| 1.61266 | 44.46 | ADF10 | +0.000442 | -0.0989 |
| 1.72916 | 54.67 | TAC8 | +0.000000 | +0.0000 |
| 1.74330 | 49.22 | NBF1 | +0.000000 | +0.0000 |
| 1.75500 | 52.32 | TAC6L | +0.000000 | +0.0000 |
| 1.80610 | 33.27 | NBFD15-W | +0.000000 | +0.0000 |
| 1.84666 | 23.78 | FDS90-SG | +0.000000 | +0.0000 |
| 1.85108 | 40.12 | M-TAFD305 | +0.000270 | -0.0200 |
| 1.85451 | 25.15 | NBFD25 | +0.000000 | +0.0000 |
| 1.85883 | 30.00 | NBFD30 | +0.000000 | +0.0000 |
| 1.87070 | 40.73 | TAFD32 | +0.000000 | +0.0000 |
| 1.90366 | 31.31 | TAFD25L | +0.000000 | +0.0100 |
| 1.92286 | 20.88 | E-FDS1-W | +0.000000 | +0.0000 |
| 2.00069 | 25.46 | TAFD40L-W | +0.000000 | +0.0000 |

The near-coordinate candidates for the resin and some unusual coordinates do
not identify those media. In particular, the resin's nearest listed HOYA glass
is not a defensible resin substitution. The retained material values always
come from the selected patent table.

The checked catalog is not an exhaustive survey of OHARA, HIKARI, Schott, CDGM
or Sumita. No supplier inference is drawn from the Tamron brand. Two coordinates
have no exact HOYA row but match HIKARI rows exactly: J-KZFH1 for 1.61266/44.46 and
Q-LASFH58S for 1.85108/40.12, so those two elements carry the HIKARI class label.
All catalog-equivalent labels and the unmatched resin retain that limitation.

Four elements carry the diagram's inferred anomalous-dispersion tint: L3 (FCD100
class), L2 (FCD1 class), and L11 and L14 (FCD515 class). Their count matches
Tamron's one XLD and three LD elements. The tag is a class inference from the
coordinate-equivalent catalog curves, not a patent designation: the patent names
no special glass. The camera cover plate is traced as the coordinate-equivalent
BSC7 class.

The original table supplies no element-level nC, nF, ng or partial-dispersion
deviation. Consequently, color simulations may use coordinate-compatible catalog
proxies or Abbe approximations according to runtime resolution. Neither establishes
the source melt's exact spectrum. No APO, anomalous-dispersion performance or
secondary-spectrum result is asserted from the index/Abbe pair alone.

[1, ¶0118 and Table 1; 4]

## Focus Mechanism and Zoom Motion

### Published near-focus configurations

G4, the L17–L18 cemented doublet, moves imageward for closer focus. The tabulated
front gap increases and rear gap decreases. All other focus-state spacings are
retained as published. The source's distance is object-to-image; d(0) measures
from the object plane to the first vertex.

| Zoom state | d(0), object to first vertex mm | Source object-to-image mm | G4 imageward travel mm | Computed near-state EFL mm | Gaussian image-plane shift mm |
|---|---:|---:|---:|---:|---:|
| Wide | 678.0000 | 850 | 2.2707 | 64.244330 | +0.032263 |
| Middle | 660.9517 | 850 | 6.4626 | 89.851372 | +0.094285 |
| Long | 652.1316 | 850 | 12.6742 | 103.484308 | +0.070863 |

The Gaussian shifts are calculated diagnostics on literal source states. They
are not corrections to the prescription. The source does not identify the exact
focus merit criterion used for its finite configurations. Changing the last air
gap or the internal spacings to force a zero paraxial residual would alter the
published system and is not part of this model.

The three recorded finiteConjugates entries bind the source spacings to their
documented object distances. Other control positions are not certified finite
configurations. The current engine's source-state selector preserves that boundary.

### Zoom movement

G1 moves toward the object, G2 toward the image. G3 and G4 reverse direction
between the three sampled infinity positions; G5 is fixed relative to the image.
The following front-vertex coordinates are measured from the fixed image plane,
with negative coordinates on the object side.

| Group | Wide z mm | Middle z mm | Long z mm |
|---|---:|---:|---:|
| G1 | -172.0001 | -189.0483 | -197.8684 |
| G2 | -154.1188 | -137.2686 | -128.8043 |
| G3 | -104.7992 | -102.2525 | -104.6145 |
| G4 | -60.7549 | -57.8347 | -63.1778 |
| G5 | -43.0343 | -43.0343 | -43.0343 |

From wide to long G1 travels 25.8683 mm toward the object and G2 25.3145 mm
toward the image, each without reversal. The patent describes G3 and G4 as moving
along loci convex toward the image: from wide to middle they move imageward by
2.5467 and 2.9202 mm, and from middle to long objectward by 2.3620 and 5.3431 mm.

For G3 the listed front reference is the group's stop plane, matching its source
surface span. The material group remains rigid relative to that stop. Zoom and
focus interpolation preserve all endpoint spacings without inventing a smooth
factory cam profile. The sampled reversal describes the selected optical states,
not a measured mechanical trajectory.

Tamron independently identifies VXD as the product's focus drive. That mechanical
fact does not provide missing internal travel at the production wide-end minimum
distance. The current model deliberately retains the available 850 mm endpoint.

[1, ¶¶0108–0111, Tables 3–4; 2]

## Aspherical Surfaces

### Equation and retained coefficients

The source defines optical-axis sag X at radial height H by

$$X(H)=\frac{H^2/r}{1+\sqrt{1-(1+k)(H/r)^2}}+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}+A_{12}H^{12}.$$

The implementation uses K=k. Lengths are millimetres and each Aₚ has units
mm^(1−p). No scaling, polynomial refit or conic reinterpretation is applied.
A14 is zero padding required by the schema. No nonzero odd terms are supplied.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 28A | 0.0000 | -6.97969E-06 | -2.19527E-09 | 1.07027E-11 | -4.77707E-14 | 0.00000E+00 |
| 29A | 0.0000 | 2.77578E-07 | -6.55276E-09 | 9.34354E-12 | -4.50201E-14 | 0.00000E+00 |
| 33A | 0.0000 | 7.58265E-06 | -7.72695E-09 | 8.97112E-11 | -1.49928E-13 | 0.00000E+00 |
| 34A | 0.0000 | 4.65516E-06 | -1.27998E-08 | 1.10482E-10 | -2.02070E-13 | 0.00000E+00 |
| 35A | 0.0000 | 1.14513E-05 | 1.27410E-09 | 6.82309E-11 | -1.12878E-13 | 0.00000E+00 |

### Profile at the modeled aperture

| Surface | Modeled semi-diameter mm | Polynomial departure from sphere mm |
|---|---:|---:|
| 28A | 14.90 | -0.367803878 |
| 29A | 14.92 | -0.060193596 |
| 33A | 16.50 | +0.674712147 |
| 34A | 16.50 | +0.391482816 |
| 35A | 15.00 | +0.704012049 |

At 28A and 29A the net polynomial departure is objectward of the spherical base
at the listed rim. At 33A, 34A and 35A it is imageward. These signs describe the
geometrical difference at those radii; they do not, by themselves, establish an
individual surface's contribution to spherical aberration or coma.

The source explicitly identifies L16 as glass-molded and physical L20 as a resin
hybrid. L19's two aspheric faces are unambiguous in the table. The model keeps
all original coefficients and both media of the hybrid, including its thin layer.
The quoted departures are computed at inferred apertures, not published rim
measurements. Actual slopes and positive separations are checked independently.

[1, ¶¶0114–0116 and 0128–0131, Table 6]

## Conditional Expressions

The following values are recomputed from the literal source prescription. The
source's air-equivalent definitions of back focus and total length are retained.
The absolute value in condition 6 follows the governing claim and paragraph,
even though the compact Table 25 heading omits the bars.

| No. | Quantity | Permitted interval | Computed | Printed Table 25 |
|---|---|---|---:|---:|
| 1 | bfw/Yw | 0.5 to 1.4 | 0.921218 | 0.921 |
| 2 | fp/ft | 0.5 to 1.5 | 0.847962 | 0.848 |
| 3 | fm1/fw | -0.9 to -0.15 | -0.567647 | -0.568 |
| 4 | Dm/Tw | 0.05 to 0.2 | 0.164359 | 0.164 |
| 5 | abs(Xp)/abs(Xn) | 0.5 to 2 | 1.021877 | 1.022 |
| 6 | abs((1−βft²)βrt²) | 1.5 to 9.5 | 3.300050 | 3.300 |
| 7 | fm2p/fm2 | 0.7 to 2 | 1.417872 | 1.418 |
| 8 | fm2v/fm2 | -3.3 to -1.2 | -1.909264 | -1.909 |

The quantities relate the back-focus reference to image height, the front and
middle powers to the zoom range, the central spacing to optical length, and the
relative group travel. Condition 6 is the magnitude of the focusing group's
position sensitivity. The final ratios concern the positive optics before the
stabilization subgroup and the negative stabilization subgroup itself.

The conditions describe this selected embodiment. Meeting them does not establish
production tolerances, resolution, decentered performance or mechanical suitability.
The separately approved aperture exception does not change any of these values.

[1, claims 1–9, ¶¶0054–0083, Tables 25–26]

## Image Stabilization

The cemented L12–L13 subgroup is the source's vibration-compensation group V.
The patent describes motion perpendicular to the optical axis, within G3.
The computed isolated subgroup EFL is −68.432114 mm. Its negative power and
location are source-supported features of the centered numerical example.

The manufacturer independently identifies VC in the A065 product. The available
prescription supplies neither numerical lateral displacements nor a complete
stabilization-state schedule. Accordingly, the optical model is centered. It does
not invent decenter controls or imply that a centered ray trace validates VC range,
actuator performance or aberrations in a displaced configuration.

[1, claims 6–9, ¶0114, Tables 25–26; 2]

## Model Scope and Ray Interpretation

### Explicit aperture exception

The model uses an A065-only 0.94 maximum air-gap intrusion setting. Only the
13–14 boundary uses more than the ordinary 0.90 limit; every other air gap is
still checked against 0.90. The five inferred semi-diameters covered by this
treatment are 13=14.25, 14=14.21, 27=14.54, 28A=14.90 and 29A=14.92 mm.
Published curvature, spacing, material, aspheric, cover and focus data are unchanged.

The tight gap retains 0.255102009 mm of actual mathematical air separation.
Its intrusion fraction is 0.932720940703. The largest other air-gap fraction is
0.893119438101. Those optical-surface clearances do not certify manufacturing
feasibility, assembly tolerances or a mechanical rim margin.

The original ordinary-0.90 conflict remains observable. The source nominal pupil
requires a larger common radius than that rule permits. The disclosed lens-specific
treatment resolves the model's acceptance condition; it does not make the original
0.90 numerical comparison true.

### Figure-matched rims outside the exception

Every other semi-diameter is an estimate fitted to Figure 1 and checked by ray
trace under the ordinary 0.90 gap rule. Two were set from the drawing. L6's
front face runs to 15.5 mm like its rear, as the figure's square-edged plate.
L20 follows the drawn hybrid outline: the resin face and its junction stop at
15.0 mm, the smallest 0.1 mm value outside every transmitted ray sampled to the
format corner (maxima 14.90 and 14.92 mm), and the rear face runs to the drawn
17.0 mm rim. The sampled relative-illumination curves are the same as with the
earlier 16.4 mm rims. The first rim a widening chief ray meets is now the resin
junction instead of the rear face, which puts the model's field bound at 18.33°,
11.31° and 7.68°, beyond the source half-fields of 16.3157°, 9.7406° and 6.7314°.

### Physical pupil and viewer rays

The inferred source-station iris radii are 15.020244, 14.640210 and 14.910022 mm.
They are calibrated from the published f-numbers using exact pre-stop tracing,
then held constant with focus at a given zoom state. They are not patent-published
physical diaphragm dimensions or a measured mechanical iris law.

Physical source-conjugate pupil checks and the viewer's current pupil/focusK launches
are separate calculations. The physical-iris test aims the axial bundle through
the stated object conjugate and the current inferred stop. Viewer rays use current
pupil transfer and an optional focus-tracking correction. Some viewer fan samples
are outside the useful aperture and are rejected; their later ghost traces are
never counted as transmitted light or justification for a larger clear aperture.

The model passes 4,851 sampled on-axis physical-iris rays over 21 zoom and 11 focus
positions in two independent implementations. It also passes the 231 sampled
full-format corner-chief states, with zero native material render trim. These
finite tests do not establish continuous-ray clearance, uniform full-field pupil
transmission, production image quality or a recovered factory cam profile.

The camera plate, hybrid resin and native high-index glasses remain part of the
optical system. Their physical treatment and the spectral limitations matter when
interpreting calculations beyond the d-line first-order checks presented here.

## Sources

1. Japan Patent Office, **JP2025033505A**, *Zoom Lens and Image Capturing Device*,
   published 13 March 2025. Numerical Example 1, ¶¶0106–0135, Tables 1–6,
   Tables 25–26 and Figure 1. Original 51-page file retained with the dossier;
   PDF page numbers include the PAJ abstract wrapper.
   [Original publication via DPMA](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002025033505A).
2. Tamron, [70–180mm F/2.8 Di III VC VXD G2, Model A065](https://www.tamron.com/global/consumer/lenses/a065/).
   Manufacturer identity, variants, construction, special-element counts, focus drive,
   stabilization and production close-focus specifications. Consulted 4 October 2026.
3. Tamron, [A065 English brochure](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/catalog/a065_en.pdf),
   September 2023, A-065-EN-111-I-2309. Production specifications and Sony E context.
4. HOYA, [Optical Glass Catalog, including obsolete types](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   revision 20260707. Coordinate comparisons only; relevant rows and signed residuals
   are retained in the dossier. Catalog candidates do not establish source-melt identity.
