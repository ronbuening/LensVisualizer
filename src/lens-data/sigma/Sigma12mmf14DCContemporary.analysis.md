# SIGMA 12mm f/1.4 DC | Contemporary

## Patent Reference and Design Identification

**Patent:** JP 2025-186709 A  
**Application Number:** JP 2024-94975  
**Filed:** 12 June 2024  
**Published:** 24 December 2025  
**Inventor:** Kyosuke Murakami  
**Applicant:** Sigma Corporation  
**Title:** Optical system (光学系)  
**Embodiment analyzed:** Numerical Example 1

The prescription reproduces the selected Japanese publication, particularly the
surface and asphere tables on pages 12–13 and Figure 1 on page 20. The source
inventor name is 村上 恭介; the same-priority US application supplies the romanization
only. Its numerical tables are not substituted for the Japanese source. [1, 4]

The association with the marketed lens is a construction correlation, not manufacturer-confirmed:

1. The source and product both have 14 elements in 12 air-separated groups.
2. Both contain three double-sided aspherical elements. In the source these are
   L1, L6 and L14, with six aspherical faces.
3. Source focal length 12.33 mm and f/1.46 are close to the marketed 12 mm f/1.4.
4. The compact, single-element internal focus arrangement is consistent with
   Sigma's description of a lightweight focus lens driven by a stepping motor.
5. Two source elements share a relatively low-dispersion 1.59282/68.62 coordinate;
   the product specifies two SLD elements, but that count does not identify their glass supplier.

Sigma announced the lens on 19 August 2025 for release on 4 September 2025.
The represented production variants use Sony E, Fujifilm X and Canon RF mounts
and an APS-C image format. The marketed minimum focus distance is 172 mm,
maximum reproduction ratio 1:8.4, and diaphragm has nine rounded blades. [2, 3]

The source infinity field is 103.29°, compared with marketed fields of 99.6°
for E/X and 96.4° for RF. No scaling or unverified digital-correction explanation
is imposed to remove that difference. The source optical track is measured from
the first vertex to the image, whereas the product's 69.4 mm Sony E length is
measured from the front of the barrel to the mount. These lengths are not interchangeable.

## Optical Architecture

The design is an internal-focus, retrofocus wide-angle construction. At infinity,
its computed paraxial back focal distance exceeds the effective focal length:

- EFL: 12.330147 mm
- Paraxial BFD from the last lens vertex: 16.593737 mm
- Authored last-vertex-to-image distance: 16.5939 mm
- First-vertex-to-image track: 85.3566 mm
- Close-state EFL: 11.752318 mm

These values derive from the retained source radii, spacings and d-line indices.
The small difference between the Gaussian BFD and the tabulated image gap is
source-rounding defocus, not a reason to alter the final spacing.

The principal power distribution is negative G1, negative moving G2 and positive
rear assembly Gr. G1 itself divides into negative G1A and weakly positive G1B.
Gr contains positive G3, the aperture stop, two cemented pairs and final group GL.
The source attributes incidence-angle moderation ahead of the focus element to
G1, and divides off-axis correction between the front and final groups. [1, ¶0017–0021]

| Functional group | Surface span | Computed standalone group focal length, mm |
|---|---|---:|
| G1 | 1–8 | -26.1451 |
| G1A | 1–4 | -19.0906 |
| G1B | 5–8 | +131.3957 |
| G2 | 9–10 | -38.1136 |
| G3 | 11–16 | +17.0358 |
| Gr | 11–27 | +20.4387 |
| GL | 24–27 | +22.2228 |

The aperture is source surface 17, represented as STO. The standalone cemented
pairs have net focal lengths −22.1902 mm for L9–L10 and +78.6565 mm for L11–L12.
These pair powers differ from the individual elements' powers in air and do not
by themselves quantify their in-situ aberration contributions.

## Element-by-Element Analysis

The focal lengths below are calculated for each element in air from its two
vertex radii, center thickness and source index. Aspheric terms do not change
these paraxial vertex powers. Glass names identify qualified catalog-coordinate
classes; they do not identify a production supplier, melt or manufacturing process.

### L1 — Neg. Meniscus (2× Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 / P-LAK35 class (supplier unconfirmed). f = -37.3180 mm.

L1 is the first negative meniscus of G1A, convex toward the object, with
aspherical surfaces 1A and 2A. The source links the negative front group to
moderating off-axis incidence before G2, and links aspheres in G1A to distortion
and astigmatism correction. Those are group-level design statements, not an
isolated aberration budget for this element. [1, ¶0017, ¶0036, ¶0055]

### L2 — Negative Meniscus

nd = 1.61800, νd = 63.40. Glass: PCD4 / K-PSKn2 class (supplier unconfirmed). f = -43.3206 mm.

L2 is the second object-convex negative meniscus in G1A. Together with L1 it
forms the negative front subgroup; neither element moves during the published
focus transition. The two-element subdivision agrees with the source description
and Figure 1. [1, ¶0035–0037, ¶0055]

### L3 — Biconcave Negative

nd = 1.59282, νd = 68.62. Glass: FCD515 / FCD505 class (supplier unconfirmed). f = -36.9111 mm.

L3 is the negative member of the air-spaced G1B pair. Its relatively large
Abbe number contrasts with the strongly dispersive positive L4, while the pair
has a weak positive net power. That pairing establishes a material and power
contrast, but the prescription alone does not establish individual chromatic
correction contributions. [1, ¶0055 and numerical data]

### L4 — Biconvex Positive

nd = 1.94594, νd = 17.98. Glass: FDS18 class (HOYA coordinate proxy; supplier unconfirmed). f = +29.7133 mm.

L4 is the positive member of G1B and has the same high-index, low-Abbe
coordinate as L10. The front group remains negative after the positive G1B
subgroup is combined with G1A. FDS18 is a close catalog-coordinate proxy rather
than an exact printed-index match: its listed nd differs by +0.00001. [1, ¶0055; 5]

### L5 — Negative Meniscus

nd = 1.90110, νd = 27.06. Glass: NBFD27 class (supplier unconfirmed). f = -38.1136 mm.

L5 alone constitutes the negative focus group G2. Its image-convex meniscus
moves toward the object for close focus, with the adjacent air gaps changing in
equal and opposite amounts. No motion of another glass group is introduced.
The source associates this arrangement with a small, light moving group.
[1, ¶0020, ¶0051–0056]

### L6 — Biconvex Positive (2× Asph)

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 / NBFD13 class (supplier unconfirmed). f = +29.9563 mm.

L6 begins the positive G3 group and carries aspheres 11A and 12A. The source
specifically favors a positive aspherical element in G3 to control spherical
aberration without adding many positive elements. The aspheric coefficients and
modeled departures are retained rather than replaced with a spherical fit.
[1, ¶0027–0031, ¶0057]

### L7 — Biconcave Negative

nd = 1.69895, νd = 30.05. Glass: E-FD15 class (supplier unconfirmed). f = -100.9060 mm.

L7 is the biconcave member between the two positive elements of G3. Its
weakly curved object-side surface and substantially stronger image-side surface
produce a negative standalone power. The overall G3 power remains positive;
no particular higher-order aberration contribution is assigned from the sign alone.
[1, ¶0057 and numerical data]

### L8 — Biconvex Positive

nd = 1.75500, νd = 52.32. Glass: TAC6 / S-LAH97 class (supplier unconfirmed). f = +25.1921 mm.

L8 is the final positive element of G3, immediately ahead of the stop gap.
The source explains that positive G3 converges the beam between G2 and STO,
helping limit focus-group and diaphragm size. This statement applies to the
three-element group, whose computed power reproduces the printed group value.
[1, ¶0027–0031, ¶0057]

### L9 — Positive Meniscus

nd = 1.69350, νd = 50.81. Glass: S-LAL58 / LAL58 class (supplier unconfirmed). f = +23.0322 mm.

L9 is the image-convex positive meniscus at the entrance of cemented pair D1.
Its rear surface is shared with L10; the surface prescription correctly changes
to L10's higher-index medium at that interface. The pair is net negative in air,
despite L9's positive individual power. [1, ¶0057 and numerical data]

### L10 — Biconcave Negative

nd = 1.94594, νd = 17.98. Glass: FDS18 class (HOYA coordinate proxy; supplier unconfirmed). f = -11.5422 mm.

L10 is the biconcave, high-index second member of D1. It shares source
surface 19 with L9 and exits to air at surface 20. The source's two physical
glasses remain separate elements, without an invented cement layer.
The FDS18-class qualification is the same as for L4. [1, ¶0057; 5]

### L11 — Negative Meniscus

nd = 1.84666, νd = 23.84. Glass: FDS90-SGP class (supplier unconfirmed). f = -45.7946 mm.

L11 is the object-convex negative meniscus at the entrance of D2. The shared
surface 22 is convex toward the object, and its object-side medium has the higher
index. That relationship matches the source's stated preferred cemented-interface
arrangement for controlling coma and spherical aberration. It does not establish
a measured correction amount for this pair. [1, ¶0021, ¶0057]

### L12 — Positive Meniscus

nd = 1.59282, νd = 68.62. Glass: FCD515 / FCD505 class (supplier unconfirmed). f = +28.2385 mm.

L12 is the object-convex positive meniscus in D2. Its source coordinate is
identical to L3's, while its positive standalone power combines with negative L11
to give a weakly positive cemented pair. The common interface is entered as one
surface carrying L12's medium and element identity. [1, ¶0057 and numerical data]

### L13 — Biconvex Positive

nd = 1.98612, νd = 16.48. Glass: FDS16-W class (supplier unconfirmed). f = +19.5059 mm.

L13 is the positive LP element of the final group GL. The source places it
ahead of negative LN so that off-axis rays can be bent downward before entering
the last element, reducing their height near the mount region. The analysis
retains that source explanation without equating it with an independently
isolated aberration contribution. [1, ¶0019, ¶0057]

### L14 — Biconcave Negative (2× Asph)

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 / NBFD13 class (supplier unconfirmed). f = -120.0865 mm.

L14 is the biconcave LN element and carries aspheres 26A and 27A. Its weak
paraxial power does not describe the full off-axis action: the source constrains
the two slopes at the maximum-image-height chief-ray intersections. Those slopes
have the required negative front and positive rear signs, reproduced below.
[1, ¶0047–0050, ¶0057]

## Glass Identification

The source publishes 11 distinct nd/νd coordinate pairs and does not name glass
vendors. A six-manufacturer catalog comparison retains alternative matches and
nearest nonmatches separately. Named classes in the data are optical-coordinate
proxies, not evidence that a particular supplier furnished the lens.

| Elements | Source nd | Source νd | Qualified catalog relationship |
|---|---:|---:|---|
| L1 | 1.69350 | 53.20 | M-LAC130 / P-LAK35 class (supplier unconfirmed) |
| L2 | 1.61800 | 63.40 | PCD4 / K-PSKn2 class (supplier unconfirmed) |
| L3, L12 | 1.59282 | 68.62 | FCD515 / FCD505 class (supplier unconfirmed) |
| L4, L10 | 1.94594 | 17.98 | FDS18 class (HOYA coordinate proxy; supplier unconfirmed) |
| L5 | 1.90110 | 27.06 | NBFD27 class (supplier unconfirmed) |
| L6, L14 | 1.80610 | 40.73 | M-NBFD130 / NBFD13 class (supplier unconfirmed) |
| L7 | 1.69895 | 30.05 | E-FD15 class (supplier unconfirmed) |
| L8 | 1.75500 | 52.32 | TAC6 / S-LAH97 class (supplier unconfirmed) |
| L9 | 1.69350 | 50.81 | S-LAL58 / LAL58 class (supplier unconfirmed) |
| L11 | 1.84666 | 23.84 | FDS90-SGP class (supplier unconfirmed) |
| L13 | 1.98612 | 16.48 | FDS16-W class (supplier unconfirmed) |

The HOYA FDS18/FDS18-W coordinate is 1.94595/17.98, compared with the
retained patent value 1.94594/17.98. Other listed alternatives agree at the
source's displayed precision. OHARA S-LAL58 and legacy LAL58 are distinguished;
the prefix is not discarded. Moldable and conventional grades sharing coordinates
also remain distinct alternatives. Neither molding nor polishing of a particular
source element is proved merely by a matched grade's name. [5]

The current runtime resolves the qualified labels to catalog dispersion models.
Those models supply spectral estimates for the class proxies. The patent itself
provides no per-element nC, nF, ng or partial-dispersion values, so none is entered
as though it were published. Two relatively low-dispersion elements and the SLD
marketing count do not justify an apochromatic-performance claim.

The surface-by-surface paraxial Petzval sum is 0.00461442 mm⁻¹.
It is computed as Σφ/(n n′) from the source media and curvatures. It is not the
actual tangential or sagittal image curvature, which also depends on astigmatism
and the finite ray configuration.

## Focus Mechanism

Focus status is PUBLISHED. Only G2, the single negative element L5 between
surfaces 9 and 10, moves. The fixed front and rear assemblies preserve the
first-vertex-to-image track. [1, ¶0054–0057 and p. 13]

| Quantity | Infinity | Published near state |
|---|---:|---:|
| D8, mm | 6.3767 | 4.8808 |
| D10, mm | 1.8000 | 3.2959 |
| Last-surface image gap, mm | 16.5939 | 16.5939 |
| Object-to-first-vertex distance, mm | ∞ | 85.0203 |
| Object-to-image distance, mm | ∞ | 170.3769 |

The displacement is 1.4959 mm toward the object. The source's integer 170 mm
heading is consistent with the more precise object-to-image distance obtained
from d0 plus the source track. The production MFD of 172 mm remains separate.
The native two-state interpolation does not constitute a published intermediate
mechanical law, and only the source near endpoint is certified for finite-object
analysis.

At that endpoint the computed Gaussian magnification is −0.1216623 and residual
image-plane best-focus shift is −0.0001049 mm. The source near EFL is distinct
from a parallel-ray BFD of the same moved configuration; the source finite object
is required when checking focus at the fixed image plane.

The near chief enters at 52.945° and reaches approximately 14.2004 mm image
height. The corresponding angle measured from the finite object to the first
vertex is 57.2815°. Using that second angle as though it were the source's
incident chief angle would compare different reference planes.

### Physical iris and f-number conventions

The source does not give a physical diaphragm diameter. The model's inferred
stop radius, 10.1250847952 mm, is calibrated from the infinity f/1.46 condition
using exact tracing. That calibration is not independent stop-size evidence.
The iris is retained at the same physical radius during focus.

At the source conjugates, image-space working f-number N = 1/(2 NA) is
1.459857 at infinity and 1.458278 near, agreeing with printed 1.46 to its
0.01 rounding precision. The source does not explicitly state a metrological
definition, so this is a numerically supported working-N interpretation.

At close focus, Gaussian EFL divided by the exact parallel entrance diameter
instead gives approximately 1.4130; the paraxial-pupil version gives 1.3228.
These are retained alternative-definition differences. They do not imply a
published iris schedule. No focus-dependent iris law is invented to make all
f-number definitions identical.

## Aspherical Surfaces

Surfaces 1A/2A, 11A/12A and 26A/27A belong to L1, L6 and L14 respectively.
The source equation on page 11 is:

z(h) = (h²/R) / [1 + √(1 − (1 + K)(h/R)²)] + Σ Aₚhᵖ,

with p = 4, 6, …, 18. Thus K is used unchanged; surface 2 has a paraboloidal
base K = −1, while the other five bases have K = 0. All dimensions are in
millimetres and Aₚ has units mm^(1−p). No linear scaling was applied. [1, ¶0078]

| Coefficient | 1A | 2A | 11A | 12A | 26A | 27A |
|---|---:|---:|---:|---:|---:|---:|
| K | 0.00000 | -1.00000 | 0.00000 | 0.00000 | 0.00000 | 0.00000 |
| A4 | 1.31560E-05 | 1.68730E-05 | -1.08825E-05 | 1.72766E-05 | -3.20873E-05 | 2.15722E-05 |
| A6 | -6.19834E-08 | -8.66163E-08 | 2.53703E-07 | 2.39932E-07 | 2.57014E-07 | 3.22870E-07 |
| A8 | 3.83875E-10 | 8.25356E-10 | -6.43577E-09 | -5.96424E-09 | -2.63031E-09 | -1.31472E-09 |
| A10 | -1.43272E-12 | -5.71469E-12 | 9.52718E-11 | 8.61358E-11 | 7.07714E-13 | -1.44838E-11 |
| A12 | 2.94648E-15 | 2.73868E-14 | -7.79452E-13 | -6.74993E-13 | 5.06286E-14 | 1.45826E-13 |
| A14 | -2.49140E-18 | -9.25046E-17 | 3.01436E-15 | 2.43764E-15 | -1.01483E-16 | -3.58030E-16 |
| A16 | 0.00000E+00 | 2.02761E-19 | -4.35900E-18 | -3.18931E-18 | 0.00000E+00 | 0.00000E+00 |
| A18 | 0.00000E+00 | -2.14912E-22 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |

The nonzero A18 on surface 2 is retained. No asphere is replaced by an even-order
refit or truncated to the leading coefficient. At the inferred optical radii,
the departures below are from the vertex-curvature sphere; surface 2 therefore
includes both its conic departure and its polynomial terms.

| Surface | Modeled optical semi-diameter, mm | Departure from vertex sphere, µm |
|---|---:|---:|
| 1A | 18.0 | +862.449 |
| 2A | 13.8 | -1055.775 |
| 11A | 11.7 | -184.628 |
| 12A | 11.7 | +346.236 |
| 26A | 10.6 | -368.143 |
| 27A | 10.6 | +473.896 |

The positive departure of 1A and the negative total departure of 2A reshape the
front meniscus relative to its vertex spheres. The opposite-signed departures
of 11A and 12A modify both faces of the positive G3 entry element. At 26A and
27A, negative and positive departures strengthen the opposite peripheral sag
signs of the last biconcave element. These geometric observations do not by
themselves quantify aberration correction.

The source describes three double-sided aspherical elements but does not prove
a fabrication process or glass-grade identity. The polynomial is interpreted
over its modeled optical cap; extrapolated high-order roots outside that cap
are not physical lens material.

## Conditional Expressions

The table follows the source's definitions at infinity. EXP is the exit-pupil
position relative to the image plane, positive imageward and negative objectward.
B2 and Br are the source group lateral magnifications; θR1 and θR2 are the final
element's surface-slope angles at the maximum-image-height chief ray. [1, ¶0022,
¶0027, ¶0035, ¶0042, ¶0047–0049; Table 1]

| Condition | Source value | Recomputed value | Required interval or sign |
|---|---:|---:|---|
| TT/EXP | −1.81 | −1.812760 | −2.2 < value < −1.0 |
| f/f3 | 0.724 | 0.723780 | 0.50 < value < 1.00 |
| f1b/f1a | −6.88 | −6.882727 | −30.0 < value < −4.0 |
| Br²(1 − B2²) | 1.023 | 1.023363 | 0.70 < value < 1.25 |
| θR1 | −4.91° | −4.908379° | Negative |
| θR2 | 9.37° | 9.372643° | Positive |

All six reproduce the printed precision. A separate central-difference calculation
also reproduces the focus sensitivity. Paragraph 0047 calls R2 an object-side
surface, but paragraph 0049 and the two-face definition explicitly identify the
image-side face; condition 6 consequently uses surface 27. No numerical source
value is changed to resolve that wording.

## Verification and Modeling Limits

**Engine requirement:** the corner field depends on authored asphere-cap
intersection selection. At the source corner field, the first asphere's
polynomial continuation crosses the ray outside the declared optical radius
before the ray reaches the real surface; an engine that accepted that exterior
root clipped the chief ray there. Selecting the first hit on the authored cap
lets the unchanged source prescription transmit all 27 surfaces at both
published corner states. [6]

The semi-diameters are inferred from Figure 1's curved optical extents and
checked with exact rays. Mechanical flange rectangles are not used as optical
clear apertures. The source has no listed camera-side plate or lens filter,
and no stack is invented. No scaling, source-asphere modification, focus-state
repair or aperture enlargement was used to overcome the runtime issue.

Five focus samples pass modeled element thickness, actual rim-slope, conic-domain
and shared-band gap checks. Native shape helpers require no hidden trim. These
samples and a native cross-section comparison are not a continuous-state proof
or a mounted-browser rendering test.

The actual default UI fan has two close wide-open focus-tracking ±0.83 rays
that clip at STO. They are blocked/ghost continuations, not transmitted samples.
The separate physical-stop-targeted axial disc transmits at both source
conjugates, including samples within 0.00001% of the boundary.

A true-source-object stress grid at full field includes four wide-open rays at
110% of the axial entrance-reference radius that first clip at cemented surface
22. These retained outer stress observations do not occur in the default UI
bundle, the 0.6-field physical-stop survey, or the tested source-field grid through
100% of that launch-radius reference. The sample grid is not an off-axis pupil
map or a claim of unvignetted full-aperture corner coverage.

Catalog dispersion remains a coordinate-class proxy. The numerical results do
not include production tolerances, coatings, sensor processing or an unpublished
camera stack, and do not certify production MTF or chromatic performance.

## Sources

1. Japan Patent Office, [JP2025186709A, original Japanese publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2025186709A), 24 December 2025. Selected Example 1: ¶0054–0057; equation ¶0078; numerical data ¶0084, pp. 12–13; Table 1 and Figure 1, p. 20. The unchanged original PDF accompanies the prescription dossier.
2. Sigma Corporation, [12mm F1.4 DC product specifications](https://www.sigma-global.com/en/lenses/c025_12_14/), consulted 4 October 2026. Production facts and mount variants only.
3. Sigma Corporation, [Launch schedule of Sigma 12mm F1.4 DC | Contemporary](https://www.sigma-global.com/en/news/2025/08/19/011064/), 19 August 2025.
4. [US20250383527A1](https://patents.google.com/patent/US20250383527A1/en), same-priority application metadata, for inventor romanization only.
5. Manufacturer optical-glass catalogs: [OHARA](https://www.ohara-inc.co.jp/en/product/catalog/), July 2026; [HOYA](https://www.hoya-opticalworld.com/english/datadownload/index.html), July 2026 including obsolete grades; [Schott](https://www.schott.com/en-gb/products/optical-glass), preferred/special catalog; [Sumita](https://www.sumita-opt.co.jp/en/download/), August 2026; [CDGM](https://www.cdgmgd.com/go.htm?k=ge_lei_xia_zai&url=downList), September 2026; [HIKARI](https://www.hikari-g.co.jp/optical_glass/catalog/), all-glass workbook. Exact catalog bytes and applicable rows are identified in the accompanying evidence.
6. LensVisualizer, [authored asphere-cap intersection selection (pull request #760)](https://github.com/ronbuening/LensVisualizer/pull/760). Engine change only; source prescription and aperture values remain unchanged.
