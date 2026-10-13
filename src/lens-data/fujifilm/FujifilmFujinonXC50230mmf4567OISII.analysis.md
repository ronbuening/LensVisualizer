## Patent Reference and Design Identification

**Patent:** US 10,095,009 B2  
**Application Number:** 14/857,844  
**Filed:** 2015-09-18  
**Granted:** 2018-10-09  
**Inventors:** Tetsuya Ori; Michio Cho  
**Assignee:** Fujifilm Corporation  
**Title:** Zoom lens and imaging apparatus  
**Embodiment analyzed:** Example 6, Tables 16–19 and Figure 6  
**Priority:** 2013-03-27 and 2013-09-24

The companion prescription transcribes Example 6 without scaling its native dimensions.
The selected retail comparison is the FUJIFILM FUJINON XC 50-230mm f/4.5-6.7 OIS II,
a Fujifilm X-mount zoom for the APS-C system. This identification is a research correlation;
neither the patent nor the manufacturer sources examined explicitly identifies the retail
product as Example 6. [1–3]

Several features support the comparison:

1. The prescription contains 13 lenses in 10 air-separated groups, matching the manufacturer's
   published construction. The patent additionally partitions them into six moving-power groups;
   those are different uses of the word “group.”
2. Surfaces 12 and 13 are the two aspheric faces of a single positive lens at the front of G3.
   The manufacturer section marks one aspheric element in the same position.
3. The next positive lens, L32, has the lowest published dispersion of the lens prescription,
   νd = 81.54. Its position corresponds to the manufacturer's marked ED element.
4. Figure 6 and the manufacturer optical section share the positive front assembly, compact
   negative second group, three-element third group, single positive fourth group, cemented
   negative fifth group and positive rear group.
5. The focal-length, f-number and full-field ranges are close, but they are not identical.
   Their differences are retained rather than removed by an assumed scale factor.

| Quantity | Patent Example 6 | Marketed XC50-230 OIS II |
|---|---:|---:|
| Focal length | 51.53–223.44 mm | 50–230 mm |
| Maximum f-number | 4.63–6.92 | 4.5–6.7 |
| Full angle of view | 30.8°–7.0° | 31.7°–7.1° |
| Lens elements / air-separated groups | 13 / 10 | 13 / 10 |
| Aspheric elements | 1, with 2 aspheric faces | 1 |

The patent's priority and filing history provides chronology, not proof of a product assignment.
The precise retail introduction date is not established by the primary sources used here.
The numerical prescription alone also does not establish whether the OIS and OIS II versions
share an unchanged optical formula. The II suffix is therefore retained as the selected
comparison without asserting a patent-confirmed distinction from the earlier product. [1–3]

## Optical Architecture

The design is a six-group positive–negative–positive–positive–negative–positive zoom.
Its air-separated lens count is 10 because three interfaces are cemented. The aperture stop
is the source's surface 11, one millimetre before the first face of G3. The stop is described
as moving integrally with G3 during zooming. Source-listed plane-parallel plates follow the
last powered lens: a 0.600 mm plate, a 1.550 mm member printed as three contiguous layers of
one index, and a 0.700 mm plate. These are retained as rear plates rather than counted as
lens elements. [1, Figure 6, Tables 16–18, columns 5–10]

The functional-group focal lengths below are computed for each isolated group using its
published internal spacings and surrounding air. They do not equal the isolated powers of
individual constituents and do not measure an in-situ aberration contribution.

| Functional group | Elements | Computed focal length | Source-described function |
|---|---|---:|---|
| G1 | L11–L13 | +119.151 mm | Positive front assembly |
| G2 | L21–L23 | -28.037 mm | Negative principal variator and proposed stabilization group |
| G3 | L31–L33 | +42.091 mm | Positive post-stop assembly |
| G4 | L41 | +62.297 mm | Positive internal focusing group |
| G5 | L51–L52 | -39.201 mm | Negative rear zoom assembly |
| G6 | L61 | +110.740 mm | Positive rear group, fixed relative to image |

The patent describes distributing magnification change across several groups rather than
assigning all motion to G2. Positive G3 and G4 and their variable separation provide additional
freedom to manage changes of aberration with zoom. The positive rear group is described as
reducing chief-ray inclination at the image. Those are statements of the patent's design
rationale, not separate performance measurements of this model. [1, columns 5–10]

### Zoom kinematics

All five inter-group spaces vary. The source gives wide, intermediate and telephoto infinity
states. The following positions place the front vertex of each group relative to the fixed
source image plane, with negative values toward the object.

| Group | Wide | Intermediate | Telephoto | Wide-to-tele motion |
|---|---:|---:|---:|---:|
| G1 | -127.22 mm | -158.19 mm | -193.23 mm | -66.01 mm |
| G2 | -101.97 mm | -108.85 mm | -119.17 mm | -17.20 mm |
| G3 | -75.63 mm | -93.91 mm | -109.49 mm | -33.86 mm |
| G4 | -55.78 mm | -65.09 mm | -67.33 mm | -11.55 mm |
| G5 | -36.54 mm | -46.35 mm | -62.43 mm | -25.89 mm |
| G6 | -27.12 mm | -27.12 mm | -27.12 mm | +0.00 mm |

G6 is fixed relative to the image plane. The other five groups move objectward from wide to
telephoto in the tabulated states. No reversal is present in those three samples; interpolation
does not establish the exact production cam curve. The optical front-vertex-to-image track
increases from 127.22 mm to 193.23 mm. These are prescription reference-plane distances,
not the manufacturer's mount-flange-to-barrel dimensions.

At the telephoto endpoint, the computed 193.23 mm track divided by 223.48629 mm EFL is below
unity. The term telephoto is therefore supported at that endpoint. It is not an assertion
that the same total-track criterion is met at the wide endpoint. No retrofocus classification
is inferred from the product name.

## Element-by-Element Analysis

Each focal length below is the computed standalone thick-lens focal length in air, using the
same two surface radii and central thickness as the final model. At a cemented junction this
calculation deliberately replaces the neighbouring glass by air; it therefore differs from
that constituent's actual interface power in the assembled system. Glass names are
coordinate-equal catalog rows used as dispersion proxies; they do not identify the supplied melt.

### L11 — Biconvex Positive

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA coordinate equivalent; supplier unresolved). f = +167.23 mm.

L11 is the positive leading element of G1. Its biconvex paraxial form supplies positive power
before the cemented rear pair. The patent associates a positive front group with shortening
the complete zoom system. A specific aberration budget cannot be assigned to this element
from its positive power alone. [1, Table 16, Figure 6, columns 5–6]

### L12 — Negative Meniscus

nd = 1.60342, νd = 38.03. Glass: S-TIM5 (OHARA coordinate equivalent; supplier unresolved). f = -124.63 mm.

L12 is the negative meniscus at the front of G1's cemented pair. Both paraxial radii are
positive, with the more strongly curved rear face. Its higher dispersion than L13 provides
a conventional degree of freedom for chromatic balancing, but no measured secondary-spectrum
correction is deduced from νd alone. [1, Table 16, column 6]

### L13 — Positive Meniscus

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA coordinate equivalent; supplier unresolved). f = +95.00 mm.

L13 is the positive meniscus cemented to L12 at surface 4. It shares L11's published d-line
coordinates, while its shape and thickness differ. The net focal length of the complete
L12/L13 cemented pair is +416.149 mm; that relatively weak net power is distinct from the
stronger standalone powers of its opposing constituents. The patent discusses this front-group
arrangement in connection with longitudinal chromatic and wavelength-dependent spherical
aberration at the long-focus end. [1, column 6; calculated compound power]

### L21 — Biconcave Negative

nd = 1.74950, νd = 35.33. Glass: S-NBH51 (OHARA coordinate equivalent; supplier unresolved). f = -54.29 mm.

L21 is the air-separated negative leading lens of G2. Its rear surface is more strongly
curved than its front surface, consistent with the biconcave configuration discussed in
the patent. G2 as a whole carries negative magnification-changing power. [1, Table 16,
columns 6–7]

### L22 — Biconcave Negative

nd = 1.78590, νd = 44.20. Glass: S-LAH51 (OHARA coordinate equivalent; supplier unresolved). f = -23.14 mm.

L22 is the negative member of the second cemented pair. It meets L23 at surface 9 and has
an air space ahead of it. The clear-band inference around surfaces 7 and 8 is constrained
by their small physical separation; the modeled rims are not patent-published diameters.
No separate claim of astigmatism correction is assigned solely from this glass coordinate.
[1, Table 16; modeled aperture geometry]

### L23 — Positive Meniscus

nd = 1.92286, νd = 18.90. Glass: S-NPH2 (OHARA coordinate equivalent; supplier unresolved). f = +38.10 mm.

L23 is the positive meniscus at the rear of G2. Its high index and low νd contrast with L22.
The combined L22/L23 pair has a computed focal length of −59.483 mm and remains negative,
while the complete G2 is more strongly negative after inclusion of L21. The compound
power is calculated with the actual shared glass interface. [1, Table 16]

### L31 — Pos. Meniscus (2× Asph)

nd = 1.65296, νd = 36.79. Glass: K-PG395-M (SUMITA K-PG395(M) molding-state coordinate equivalent; supplier unresolved). f = +64.47 mm.

L31 is the doubly aspheric positive meniscus immediately behind the stop. It is the sole
aspheric element in Example 6. The patent associates aspheric shaping in the leading
part of G3 with spherical-aberration control; no particular manufacturing process is
specified for this example. Its two exact polynomial profiles are retained without
an even-order refit or an imposed production focal-length scale. [1, Tables 16 and 18,
column 7]

### L32 — Biconvex Positive

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA coordinate equivalent; supplier unresolved). f = +31.05 mm.

L32 is the positive low-dispersion element behind the aspheric meniscus. Its location
matches the ED marking in the manufacturer's optical section. Its νd indicates lower
primary dispersion than the neighbouring glasses, but the patent supplies neither
line indices nor partial-dispersion values sufficient to establish the actual secondary
spectrum. The modeled material is a coordinate-equal catalog proxy, and L32 carries an
inferred low-dispersion display tag for that position rather than a patent designation.
[1, Table 16; 2]

### L33 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA coordinate equivalent; supplier unresolved). f = -41.09 mm.

L33 is the negative meniscus at the rear of G3. Its concave image-side face is more
strongly curved than the front face. The patent describes a negative rear member in G3
as useful for high-order spherical-aberration balancing. This qualitative source account
does not imply that the present model has separately isolated that contribution.
[1, Table 16, column 7]

### L41 — Positive Meniscus

nd = 1.59282, νd = 68.63. Glass: FCD505 (HOYA coordinate equivalent; supplier unresolved). f = +62.30 mm.

L41 constitutes G4 alone. Its low mass compared with a multi-element group is consistent
with the patent's discussion of a single positive focusing member. The source describes
objectward G4 motion for closer focus, but Example 6 does not give a numerical near-focus
configuration. The companion model therefore leaves its focus motion unreconstructed.
[1, columns 7, 9–10]

### L51 — Positive Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA coordinate equivalent; supplier unresolved). f = +93.52 mm.

L51 is the positive meniscus at the front of the cemented G5 pair. Both radii are negative;
its concave object-side surface is weaker than its rear face. Although L51 is positive in
isolation, the complete G5 pair is negative. That distinction prevents the shared interface
from being misinterpreted as an independent positive rear zoom group. [1, Table 16]

### L52 — Biconcave Negative

nd = 1.62299, νd = 58.16. Glass: S-BSM15 (OHARA coordinate equivalent; supplier unresolved). f = -27.79 mm.

L52 is the negative biconcave member cemented to L51 at surface 21. It completes the net
negative G5 assembly, whose computed focal length is −39.201 mm. G5's separation from G6
increases markedly during zooming; its individual glass and power do not by themselves
establish a field-curvature or chromatic correction result. [1, Table 16–17]

### L61 — Positive Meniscus

nd = 1.61293, νd = 37.00. Glass: S-TIM3 (OHARA coordinate equivalent; supplier unresolved). f = +110.74 mm.

L61 is the final positive meniscus and the sole element of G6. Its position relative to
the source image plane is fixed across all three zoom states. The patent describes the
positive final group as a means of moderating off-axis chief-ray incidence. The source
rear plates are after this element and participate in the traced propagation.
[1, Table 16, columns 5–6]

## Glass Identification and Selection

The source specifies d-line index and Abbe number, not glass maker or melt designation.
Primary OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs were compared over all distinct
lens and plate coordinates. The following examples illustrate coordinate compatibility;
they are not procurement identifications. The full residual records retain distinctions
such as OHARA S-prefixed and legacy unprefixed families. [4–9]

| Published nd / νd | Model label (six-digit class) | Elements | Examples of compatible catalog coordinates |
|---|---|---|---|
| 1.48749 / 70.23 | S-FSL5 (487702) | L11, L13 | S-FSL5 (OHARA; Δn=+0.000000, Δν=+0.0063); FSL5 (OHARA; Δn=+0.000000, Δν=-0.0197) |
| 1.60342 / 38.03 | S-TIM5 (603380) | L12 | F5 (SCHOTT; Δn=+0.000000, Δν=+0.0000); J-F5 (HIKARI; Δn=+0.000000, Δν=+0.0000) |
| 1.74950 / 35.33 | S-NBH51 (750353) | L21 | H-TF21 (CDGM; Δn=+0.000000, Δν=+0.0354); J-LAF7 (HIKARI; Δn=+0.000000, Δν=-0.0800) |
| 1.78590 / 44.20 | S-LAH51 (786442) | L22 | H-LAF52 (CDGM; Δn=+0.000000, Δν=-0.0128); J-LASF01 (HIKARI; Δn=+0.000000, Δν=-0.0300) |
| 1.92286 / 18.90 | S-NPH2 (923189) | L23 | S-NPH2 (OHARA; Δn=+0.000000, Δν=-0.0031); H-ZF72A (CDGM; Δn=+0.000000, Δν=-0.0041) |
| 1.65296 / 36.79 | K-PG395-M (653368) | L31 | K-PG395(M) (SUMITA; Δn=+0.000000, Δν=+0.0100) |
| 1.49700 / 81.54 | S-FPL51 (497815) | L32 | K-PFK80 (SUMITA; Δn=+0.000000, Δν=-0.0400); K-PFK80(S) (SUMITA; Δn=+0.000000, Δν=-0.0400) |
| 1.84666 / 23.78 | S-TIH53 (847238) | L33 | FDS90-SG (HOYA; Δn=+0.000000, Δν=+0.0000); FDS90 (HOYA; Δn=+0.000000, Δν=+0.0000) |
| 1.59282 / 68.63 | FCD505 (593686) | L41 | FCD515 (HOYA; Δn=+0.000000, Δν=-0.0100); FCD505 (HOYA; Δn=+0.000000, Δν=-0.0100) |
| 1.92286 / 20.88 | E-FDS1 (923209) | L51 | E-FDS1-W (HOYA; Δn=+0.000000, Δν=+0.0000); E-FDS1 (HOYA; Δn=+0.000000, Δν=+0.0000) |
| 1.62299 / 58.16 | S-BSM15 (623582) | L52 | H-ZK21 (CDGM; Δn=+0.000000, Δν=-0.0393); BACD15 (HOYA; Δn=+0.000000, Δν=-0.0400) |
| 1.61293 / 37.00 | S-TIM3 (613370) | L61 | H-F2 (CDGM; Δn=+0.000000, Δν=+0.0044); E-F3 (HOYA; Δn=+0.000000, Δν=-0.0400) |

The six-digit class uses the three rounded digits of 1000(nd − 1), followed by those of
10νd, with decimal half-up rounding. It cannot establish a unique vendor: several sources
publish overlapping coordinates, and historical material specifications can differ from
current catalog revisions.

Each model label names one catalog row whose published coordinates equal the patent pair,
so all 13 lens entries trace on a vendor dispersion curve. Where several vendors publish
the same coordinate, an OHARA row was preferred when its νd residual was no larger than the
alternatives (ten elements); L41 and L51 use HOYA rows. L31, the only aspheric element, matches SUMITA's molding-state row
K-PG395(M) alone among the catalogs compared; the label does not assert how the element
was made. The source-only rear plate pairs are unmatched. A catalog proxy is distinct from
source evidence for actual nC, nF, ng or ΔPgF. No such spectral values are authored, and no
apochromatic performance or anomalous-partial-dispersion claim is made.

The use of low-dispersion positive L32 alongside more dispersive negative elements is
consistent with ordinary chromatic balancing. It does not alone determine secondary
spectrum or establish production-level correction. The manufacturer's ED label identifies
a retail design feature, not the actual supplier of Example 6's glass.

## Focus Mechanism

The patent proposes axial motion of the positive fourth group, here the single L41 lens,
toward the object as focus changes from infinity toward a closer object. It relates the
G3/G4 arrangement and their zoom-dependent clearance to the available focusing travel.
The manufacturer documents a lightweight focusing lens and stepping-motor drive. Neither
source provides a numerical finite-focus prescription for this selected example.
[1, columns 7, 9–10; 2–3]

The companion model uses NO_INTERNAL_RECONSTRUCTION. Its closeFocusM = 1.1 m is the retail
minimum focus distance, carried as product metadata only. Each zoom station repeats its
infinity gap at both focus endpoints, so there is no internal movement when the focus
control changes. The model is not certified for the retail 0.2× close-up magnification,
focus breathing, near-focus aberrations or the production focusing law.

The published zoom gaps are preserved as follows; each column is an infinity-focus state.

| Gap | Wide | Intermediate | Telephoto |
|---|---:|---:|---:|
| DD[5] | 13.14 mm | 37.23 mm | 61.95 mm |
| DD[10] | 20.55 mm | 9.15 mm | 3.89 mm |
| DD[17] | 6.18 mm | 15.15 mm | 28.49 mm |
| DD[19] | 17.24 mm | 16.74 mm | 2.90 mm |
| DD[22] | 5.93 mm | 15.74 mm | 31.82 mm |

Intermediate model positions linearly interpolate these gaps. They are useful geometric
samples, not independently published mechanical or focus states.

## Aspherical Surfaces

Both aspheric surfaces belong to L31: the source's 12 and 13 become 12A and 13A in the
companion prescription. The source equation is

Zd = C h² / [1 + √(1 − KA C² h²)] + Σ Am hᵐ.

Here C is the paraxial curvature and h is nonnegative radial height in millimetres.
The model uses the conventional denominator containing (1 + K), so K = KA − 1.
Both printed KA values are 1.0000000E+00; both modeled conics therefore have K = 0.
The coefficients have units mm^(1−m). All printed odd-order terms are zero. [1, column 12,
Table 18]

| Coefficient | Surface 12A | Surface 13A |
|---|---:|---:|
| KA | 1.0000000E+00 | 1.0000000E+00 |
| A3 | 0.0000000E+00 | 0.0000000E+00 |
| A4 | -2.1929710E-05 | 2.4812223E-05 |
| A5 | 0.0000000E+00 | 0.0000000E+00 |
| A6 | -2.6825828E-07 | -2.3807118E-07 |
| A7 | 0.0000000E+00 | 0.0000000E+00 |
| A8 | -1.4041431E-09 | 8.3060405E-10 |
| A9 | 0.0000000E+00 | 0.0000000E+00 |
| A10 | -1.3101658E-11 | -4.3238076E-11 |
| A11 | 0.0000000E+00 | 0.0000000E+00 |
| A12 | 2.0009875E-14 | 2.5906063E-13 |

The model includes required unused A14 as zero. No scale conversion is applied. The negative
leading A4 on 12A reduces positive sag away from its spherical base. On 13A the positive A4
opposes the higher-order terms; the complete sum, rather than A4 in isolation, determines
its outer profile.

At the modeled 8.6 mm semi-diameter, the computed departure from the same-radius sphere is
−0.2962 mm on 12A and +0.0110 mm on 13A. The corresponding actual rim-slope angles are
3.0° and 0.5°. The rim is held inside the height at which the slope of 13A changes sign,
about 8.83 mm; the slope of 12A changes sign at about 9.06 mm. These are calculated at
inferred model rims, not patent-published apertures or manufacturing measurements. No molding,
polishing or hybrid-resin process is inferred from the coefficient table alone.

## Conditional Expressions

The patent's principal group-power condition is −5 < f1/f2 < −1.5. Its preferred intervals
are −4.8 < f1/f2 < −2.5 and −4.6 < f1/f2 < −3.0. The computed value is −4.2497618, consistent
with the Table 19 printed value −4.250 and within all three intervals. [1, columns 8–9,
Table 19]

For the initial G1/G2 separation d1w, the condition is 0.04 < d1w/f1 < 0.3. The preferred
intervals are 0.08 < d1w/f1 < 0.2 and 0.11 < d1w/f1 < 0.2. The computed value 0.1102806 is
consistent with the table's 0.110 after rounding and is only narrowly above the strongest
lower bound. The unrounded calculation, rather than interpreting the printed 0.110 as an
exact boundary value, determines this comparison. [1, column 10, Table 19]

## Image Stabilization

The patent proposes moving G2 with a component perpendicular to the optical axis to correct
camera shake. Its account connects the relatively strong negative second group with image
shift sensitivity and the distribution of aberration correction within a zoom group.
The retail lens has optical stabilization, but that feature does not by itself prove that
its implementation is exactly the patent's proposed mechanism. [1, columns 10–11; 2–3]

No numerical decenter stroke is published for Example 6. The companion prescription models
the centered system only. It does not invent stabilization motion or certify decentered
aberration performance.

## Verification and Model Limits

### First-order quantities and rear reference plane

The final modeled EFLs are 51.55368, 107.32514 and 223.48629 mm. They are calculated from
the actual final prescription by sequential reduced-angle propagation and separately
multiplied ray-transfer matrices, and agree with the real runtime calculation. Differences
from the printed 51.53, 107.31 and 223.44 mm values remain explicit.

The total surface-by-surface Petzval sum is +0.0016752421 mm⁻¹, using φ/(n n′) at every
refracting interface. That paraxial sum is not a predicted best-image surface and does not
replace an astigmatism or full-field aberration calculation.

Three plane-parallel plates remain behind the final powered surface: 0.600 mm and 1.550 mm
of index 1.54763 and 0.700 mm of index 1.49784, followed by source air gaps of 0.810, 0.500
and 1.120 mm. Table 16 prints the 1.550 mm member as three contiguous layers of the same
index (0.350 + 0.600 + 0.600 mm, surfaces 27–30); the model merges them into one plate,
which is optically identical. The complete physical stack after surface 24 is retained,
including the 17.840 mm initial airgap. Its physical length is 23.120 mm and its reduced
paraxial distance is 22.126561 mm. This derived distance is a comparison quantity only;
the model traces the physical plates and does not replace them with air.

The computed air-equivalent paraxial back focal distances from surface 24 are 22.150463,
22.138386 and 22.166053 mm. The authored physical image plane therefore lies 0.023903,
0.011826 and 0.039492 mm objectward of the computed paraxial image at wide, intermediate
and telephoto. A separate near-axis exact Snell trace reproduces these offsets. The patent
does not state whether its image surface is the paraxial plane or a best-focus plane, so
the small residual is recorded rather than assigned a cause. No rear spacing is altered to
remove it, and no zero-defocus match is claimed. Any optical performance result must
distinguish this authored source image plane from a separately chosen best-focus plane.

### Apertures, inferred rims and sampled rays

Physical iris diameters and lens semi-diameters are absent from the patent tables. The
model therefore infers rims from Figure 6, the manufacturer section and traced geometry.
The shared rims around the narrow G2 airgap are constrained by the same 90% clearance
policy used elsewhere; no aperture, slope or hidden-trim exception is applied.

Measured on the wide-angle panel of Figure 6 at 0.153 mm per pixel (scaled on the
104.10 mm span from surface 1 to surface 24), the drawn element half-heights are within
about 5% of the modeled rims on every element except the front of L22. Both faces of
L21 (surfaces 6 and 7) carry the drawn 9.0 mm blank height, so L21 renders as the
squared plate of the figure. Surface 8, the front of L22, is held at 7.1 mm because the
two facing concave surfaces close their 1.2 mm airgap near h ≈ 7.6 mm; the figure draws
the two lenses in flat edge contact from about that height out to the 9.0 mm edge, so
the outer band is a mounting annulus rather than an optical surface. Surface 8 is
therefore the working aperture of the pair, and the part of surface 7 outside it is
drawn glass rather than clear aperture. Surfaces 9 and 10 follow the smaller L23, drawn
at 8.1 mm, rather than the 9.0 mm L22 blank. The modeled L22 therefore starts 1.9 mm
lower at its front edge than the solid rectangular block of the patent section. L33
carries its drawn 10.0 mm edge on both faces; the figure curves its rear face only to
about 7.5–8 mm and continues with a flat annulus, so the modeled rear rim sits about
0.8 mm behind the drawn corner.

The authored wide-state stop radius is 7.1474003 mm. The runtime's exact-ray calibration
uses 7.1658703 mm and supplies the station schedule 7.1658703, 7.1512169 and 7.1588578 mm.
This agreement with F/4.63, 5.76 and 6.92 is dependent on those input targets. It is not an
independent determination of the physical diaphragm. The native aperture range is kept
separate from the marketed F/4.5–6.7 range.

Geometry calculations sample the published stations and six intermediate zoom positions.
The minimum sampled material thickness is 0.800 mm, the minimum clearance beyond the
90%-gap intrusion limit is 0.043584 mm, and the largest actual rim angle is 31.4953°.
Actual renderer diagnostics require no hidden trim at those states. These finite checks
do not prove every intermediate mechanical position or every possible ray.

The exact-ray sample includes 480 rays at the two identical focus endpoints, wide-open
and F/16. It uses the current axial fractions and the off-axis fan at 0.60 of the actual
runtime half-field, while testing the patent's full-field stations separately. There are
28 clips at exterior rims or the stop, including 6 default off-axis and 22 full-source-field
samples. No tested default axial ray clips and none of the sampled clips occurs inside
a cemented group. Natural field vignetting is retained; this is not an all-rays-pass claim.
These counts were taken with 9.0 mm rims on L31, 8.2 mm and 7.1 mm on surfaces 6 and 7
and 9.5 mm on L33, and were not repeated at the present 8.6, 9.0, 9.0 and 10.0 mm. With
L21 at its full drawn height, surface 8 at 7.1 mm is the rim of G2 that limits the
wide-angle field, 1.2 mm behind the surface 7 vertex where that limit sat before. The
traced aperture is unchanged at every station. An exact meridional trace of the patent's
full-field bundle through the wide-open iris needs 8.99 mm on surface 7 and 9.12 mm on
surface 8, so the 7.1 mm rim clips the same side of that bundle as before, and at most
9.24 mm and 8.96 mm on surfaces 16 and 17, inside either L33 rim. The same trace reaches
at most 7.76 mm on 12A and 8.24 mm on 13A, so neither aspheric rim is a first clipping
surface at either value.

The runtime half-fields are 22.47769°, 10.09571° and 4.21649°. The wide-angle value was
21.05875° while surface 7 carried the 7.1 mm rim; the drawn contact height of about
7.6 mm on surface 7 would give 22.4°. They are model-dependent,
geometry-limited values and must not be substituted for the source half-fields of 15.4°,
7.3° and 3.5°. The prescription's inferred rims, unreconstructed finite focus, physical
source image-plane offset and catalog dispersion proxies limit performance interpretation.

## Sources and References

1. Tetsuya Ori and Michio Cho, Fujifilm Corporation, *Zoom lens and imaging apparatus*,
   [US 10,095,009 B2](https://patents.google.com/patent/US10095009B2/en), granted 2018-10-09.
   Numerical authority: original publication PDF, p. 25 / printed column 18, Table 16;
   p. 26 / column 19, Tables 17–19. Figure 6: PDF p. 8. Asphere convention: PDF p. 22,
   column 12. Mechanisms: columns 5–11. The preserved reacquired publication bytes are
   not claimed to be identical to an earlier unavailable download.
2. FUJIFILM, *X Mount Lens & Accessory catalog*, December 2024,
   [catalog PDF](https://dl.fujifilm-x.com/ja-jp/products/brochure/x-mount-lens_accessory_202412.pdf),
   PDF p. 13 / printed p. 25, XC50-230mmF4.5-6.7 OIS II section. A labeled,
   geometry-preserving optical-section crop is included with the model evidence.
3. FUJIFILM, [XC50-230mmF4.5-6.7 OIS II specifications](https://www.fujifilm-x.com/en-us/products/lenses/xc50-230mmf45-67-ois-ii/specifications/)
   and [Owner's Manual BL01874-200](https://dl.fujifilm-x.com/support/manual/lenses/lens_xc16-50-2_xc50-230-2_manual_01.pdf),
   model-specific specification table. Accessed 2026-10-03.
4. OHARA, [Zemax optical glass catalog, 2026-07-01](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip),
   primary AGF NM and dispersion records; S-prefixed and legacy entries retained separately.
5. HOYA, [optical glass catalog including obsolete entries, 2026-07-07](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).
6. SCHOTT, [Zemax glass data, June-2025-B](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true).
7. HIKARI, [Optical Glass Catalog data](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx),
   2025-06-01 history header; primary data rows with nd in column Q and νd in column Y.
8. CDGM, [Zemax optical glass catalog, 2026-09](https://www.cdgmgd.com/downloadFile.htm?uid=3f4d14c82d2c11eeb5ac000c29c8de8c).
9. SUMITA, [Zemax all-glass catalog](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf),
   2026-08-21 data header. Catalog comparisons were performed on 2026-10-03; compatibility
   and actual melt identity remain distinct.
