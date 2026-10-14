## Patent Reference and Design Identification

**Patent:** JP 6814931 B2  
**Application Number:** JP2017003805  
**Filed:** 2017-01-13  
**Published:** 2021-01-20  
**Priority:** 2016-02-18  
**Inventors:** Takahiro Kitada (北田 高博), Shunichiro Yoshinaga (吉永 俊一郎), Takakazu Bito (美藤 恭一)  
**Assignee:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Zoom lens system, interchangeable lens device and camera system with zoom lens system, imaging device with zoom lens system  
**Embodiment analyzed:** Numerical Example 2, optical system 202B  
**Production correlation:** PANASONIC LUMIX G VARIO 12-60mm f/3.5-5.6 ASPH. POWER O.I.S. (H-FS12060), a qualified correlation, not confirmed by Panasonic

The numerical prescription is taken from the selected Japanese grant, not from a substituted family publication. The
earlier Japanese application supplies a corroborating printing of the same numerical example. Inventor names are in
source order; the Latin spellings are those of the United States family member, US 10,012,822 B2. [P1], front page and
continuation on p. 31; [P2].

The production association is supported by convergent structural evidence:

1. The manufacturer and patent show the same element/component arrangement, including a cemented front pair and a
   cemented pair in the positive central group.
2. The locations of the aspheric elements and the rear low-dispersion element agree with the manufacturer's colored
   construction diagram.
3. The focal-length and aperture ranges, format, stabilization arrangement and close-focus behavior are consistent with
   the selected product, while the numerical differences below remain visible.
4. The patent priority and the product introduction are contemporaneous; timing supplements the optical evidence rather
   than establishing identity by itself.

These points support a correlation; Panasonic has not confirmed the factory prescription. [P1], pp. 19–22, Tables 5–8
and p. 28, Fig. 5; [M1]; [M2].

| Quantity | Production source | Selected model |
| --- | --- | --- |
| Focal length | 12–60 mm | 12.4644–57.7842 mm (printed stations) |
| Maximum aperture | f/3.5–5.6 | f/3.62207–5.84637 |
| Elements / air-separated components | 11 / 9 | 11 / 9 |
| Aspheric elements | 3 | 3 |
| Near object-to-image distance | 0.20 m wide / 0.25 m tele | 0.25 m at all three published close states |
| Maximum magnification | 0.27× | 0.266140× at the source tele close state |

The product name, Micro Four Thirds mount and Four Thirds image format describe the production association. They do not
turn the patent's design endpoints into the marketed values. Likewise, the manufacturer's barrel length is a mechanical
lens-tip-to-mount dimension, whereas the optical track below reaches the image plane. These lengths are not
interchangeable. [M1]; [M2].

The model keeps the six printed configurations and interpolates linearly between them. Its continuous zoom is not the
production cam, and close distances between the printed stations are approximate.

## Optical Architecture

The architecture has positive, negative, positive, negative and positive functional groups in object-to-image order. The
physical-element count and air-separated component count are distinct from this functional partition. The stop is in air
at the front of the central positive group and travels with it during zooming. [P1], pp. 7–9, ¶¶0030–0033 and
¶¶0042–0048.

| Functional group | Elements | Source surface span | Computed standalone EFL, mm |
| --- | --- | --- | --- |
| G1 | L1–L2 | 1–3 | +105.907291 |
| G2 | L3–L5 | 4–9 | -14.955081 |
| G3 | L6–L9 | 10–17 (including stop) | +16.607442 |
| G4 | L10 | 18–19 | -20.621214 |
| G5 | L11 | 20–21 | +49.501578 |

The group focal lengths are calculated with each isolated group in air. They are not an allocation of the assembled
lens's focal length among its elements. The central group's surface span includes the stop; its optical glass-boundary
thickness is distinguished from that stop-inclusive span when evaluating the patent's spacing condition.

The front cemented group provides positive net power although its first member has negative standalone power. The second
group is net negative, with negative members followed by a positive meniscus. The central group combines positive
singlets with a negative/positive cemented pair. The following negative singlet is the internal focus group; the final
positive meniscus is nominally fixed relative to the image. These assignments are supported by the prescription and the
embodiment-specific text, without inferring a particular aberration contribution from power sign alone. [P1], ¶¶0033,
0043–0047.

The isolated cemented assemblies have d-line EFLs of +105.907291 mm (L1–L2) and +97.532988 mm (L8–L9).

A cemented interface is traced once, with the medium after that interface belonging to the downstream element. No extra
layer of generic cement is inserted. No cover/filter plate is added; published back focus remains air. In-situ power and
aberration behavior depend on the surrounding groups and conjugates; the isolated values above do not constitute
independent achromatization tests.

### Infinity configurations and reference planes

| Infinity state | Printed EFL, mm | Computed EFL, mm | Printed BF, mm | Paraxial BFD, mm | First-vertex-to-image track, mm | Printed half-field, ° |
| --- | --- | --- | --- | --- | --- | --- |
| Wide | 12.4644 | 12.464233 | 14.23627 | 14.235639 | 90.58617 | 41.6837 |
| Middle | 26.8412 | 26.840623 | 14.23646 | 14.235222 | 89.88586 | 21.5822 |
| Tele | 57.7842 | 57.783422 | 14.23623 | 14.234148 | 123.44023 | 10.4396 |

Here BF is the printed spacing from the last optical vertex to the image, and paraxial BFD is the paraxial image distance
from that same vertex. Their differences of 0.6–2.1 µm are kept; the printed image plane is not moved. The optical track
begins at the first vertex. [P1], Table 7A.

At the wide station the paraxial BFD exceeds the EFL, a first-order retrofocus relation at that state. The multi-group
architecture is described by its actual power distribution rather than by one design label for the whole zoom range.

Entrance-pupil positions are referred to the first vertex; the patent's exit-pupil positions are relative to the final
optical vertex. Principal-plane and pupil quantities are first-order descriptions and do not by themselves establish
off-axis transmission. [P1], Tables 7A and 7C.

The surface-by-surface d-line Petzval sum is +0.002559202968 mm⁻¹, using each refracting surface contribution φ/(n·n′).

The Petzval sum is unchanged when only the source air gaps change. It is not a measurement of the finished lens's field
curvature: astigmatic surfaces, finite aperture and higher-order effects require their own analysis.

## Element-by-Element Analysis

The following focal lengths are calculated d-line values for each element in air. Shape descriptions refer to the
vertex radii of the prescription; aspheric departures at the modeled rim are treated separately. Glass names identify
catalog glasses that match the printed nd and νd, not confirmed manufacturer melts.

### L1 — negative meniscus, convex toward the object

nd = 1.80610, νd = 33.3. Glass: NBFD15 (catalog equivalent; production supplier unspecified). Standalone f = -129.991806 mm.

The front member of the first cemented pair has a steeper rear vertex curvature than its front curvature and negative
standalone power. Its rear surface is the shared boundary with the following positive meniscus. The source explicitly
identifies the shape, orientation and cemented relationship. [P1], p. 8, ¶0033; pp. 19–21, Tables 5 and 7B.

The high-index, relatively dispersive reference class contrasts with the crown-like second member. That opposition is
consistent with a cemented balancing strategy, but the standalone negative power is not evidence for a specific measured
coma or chromatic correction. The net first-group power remains positive.

### L2 — positive meniscus, convex toward the object

nd = 1.51680, νd = 64.2. Glass: BSC7 (catalog equivalent; production supplier unspecified). Standalone f = +57.252628 mm.

The second member begins at the cemented interface and ends in a much weaker rear surface. Its positive standalone power
exceeds the negative contribution of the front member sufficiently to leave the pair positive. The element is not
modeled as an independent air-spaced singlet within the assembled lens. [P1], ¶0033; Tables 5 and 7B–C.

### L3 — negative meniscus, convex toward the object

nd = 1.90366, νd = 31.3. Glass: S-LAH95 (catalog equivalent; production supplier unspecified). Standalone f = -15.801217 mm.

This is the first member of the negative second group. Its strongly curved rear surface, relative to its front surface,
is consistent with the source's negative meniscus description. The high-index reference glass matches the printed nd
and νd but does not establish the original supplier. [P1], pp. 8–9, ¶0043; Tables 5 and 7B.

### L4 — biconcave negative element

nd = 1.62041, νd = 60.3. Glass: S-BSM16 (catalog equivalent; production supplier unspecified). Standalone f = -29.710626 mm.

The biconcave middle member reinforces the negative power of the second group. Both surfaces are spherical in the
selected prescription. The source identifies the three-member group arrangement explicitly. [P1], ¶0043; Tables 5 and
7B.

### L5 — positive meniscus, convex toward the object

nd = 1.94595, νd = 18.0. Glass: FDS18 (catalog equivalent; production supplier unspecified). Standalone f = +35.810812 mm.

The final member of the negative second group is positive. Its presence does not make the group positive: the assembled
group power is calculated with all its surfaces and intervening spacings. [P1], ¶0043; Tables 5 and 7B–C.

The FDS18-equivalent reference is a highly dispersive dense-flint class whose catalog dispersion lies well above the
normal line (ΔPgF +0.041). That value is a property of the reference glass, not a patent statement; the element carries
no anomalous-dispersion tag and no APO-performance claim is made.

### L6 — biconvex positive element with an object-side asphere

nd = 1.58699, νd = 59.5. Glass: K-CSK120 (SUMITA catalog equivalent, a moulding glass; production supplier unspecified). Standalone f = +25.752143 mm.

This element is the first glass after the stop and begins the central positive group. The object-side surface is
aspheric while the rear surface is spherical. The stop and group travel together in the source description. [P1], p. 9,
¶0044; Tables 5–6.

SUMITA's moulding glass K-CSK120 reproduces the printed pair: its dispersion formula gives nd 1.586986 and νd 59.479,
while its catalog line lists the rounded 1.58700 / 59.6. SCHOTT P-SK57 (1.58700 / 59.60) is the near alternative. A
moulding glass suits an aspherical element, but the supplier and the asphere's manufacturing process remain
unestablished.

### L7 — biconvex positive, double-aspheric stabilization element

nd = 1.53380, νd = 55.6. Glass: Unmatched (Panasonic moulding material 1.53380/55.6, resin by the patent's stated preference; no catalog row; line indices from US 2017/0059832 A1). Standalone f = +39.071162 mm.

Both surfaces are aspheric. This element is the embodiment's L3b stabilization member, located before the central
cemented pair. The patent describes transverse motion for image-shake correction; the centered model does not simulate
that motion. [P1], ¶¶0032, 0044 and 0061.

The patent presents a resin implementation of the stabilization member as desirable for reducing moving mass and
actuator size. This supports reading the printed nd and νd as a resin, without identifying a commercial polymer. No
catalog glass matches the pair, and none is assigned. The model carries the C, F and g indices that another Panasonic
patent prints for the same nd and νd, on the inference set out under Glass Identification and Selection. [P1], p. 12,
¶¶0082–0083; [P3], Table 23.

### L8 — negative meniscus at the central cemented interface

nd = 1.73800, νd = 32.3. Glass: S-NBH53V (catalog equivalent; production supplier unspecified). Standalone f = -14.503204 mm.

The negative member of the central cemented pair has its convex face toward the object. Its rear surface is shared with
the following positive element. The source states the cemented relationship explicitly. [P1], ¶0044; Tables 5 and 7B.

Its reference dispersion is higher than that of the low-dispersion positive partner. Opposite powers and contrasting
dispersions permit chromatic balancing in principle, but the net correction cannot be assigned from those facts alone.
The pair's modest positive net power is separately computed from the common interface and thicknesses.

### L9 — biconvex positive, low-dispersion member

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (catalog equivalent; production supplier unspecified). Standalone f = +13.289631 mm.

The positive member completes the central cemented pair. Its low index, high Abbe number and position agree with the ED
element coloured in the manufacturer's construction drawing. That supports the production correlation; it does not show
which supplier's glass Panasonic used. [P1], ¶0044 and Tables 5, 7B; [M1].

The S-FPL51-equivalent reference lies above the normal line (ΔPgF +0.031), and the element is tagged as an inferred
anomalous-dispersion element. Whole-lens secondary spectrum remains approximate: nine elements trace on
catalog-equivalent curves, and the two unmatched moving elements on line indices inferred from another Panasonic patent.

### L10 — biconcave negative, double-aspheric focus element

nd = 1.53380, νd = 55.6. Glass: Unmatched (Panasonic moulding material 1.53380/55.6, resin by the patent's stated preference; no catalog row; line indices from US 2017/0059832 A1). Standalone f = -20.621214 mm.

This single element forms the negative fourth group. Both surfaces are aspheric, and the group moves imageward when
focusing from infinity to the source close configuration. The direction is stated in the patent and reproduced by the
signed vertex positions. [P1], ¶¶0028, 0045 and 0062.

The patent discusses the mass advantage of a single-element focus group and a preferred resin implementation. These
statements do not identify a polymer grade or establish the production drive mechanism. As with the stabilization
element, the model keeps the printed nd and νd and carries the C, F and g indices that US 2017/0059832 A1 prints for
that pair. [P1], ¶¶0080–0085; [P3], Table 23.

### L11 — positive meniscus, concave toward the object

nd = 1.51742, νd = 52.1. Glass: E-CF6 (HOYA catalog equivalent, catalog νd 52.15; production supplier unspecified). Standalone f = +49.501578 mm.

The final element alone forms the positive fifth group. Its object-side vertex is weakly concave and its image-side
curvature is stronger; the source calls it a positive meniscus concave toward the object. [P1], ¶0046; Tables 5 and
7B–C.

The patent describes the group as fixed with respect to the image during zooming. The printed BF nevertheless varies by
0.23 µm across the three stations, and those values are kept as printed. HOYA E-CF6 matches the printed nd, with a
catalog νd of 52.15 against the printed 52.1; CDGM H-KF6 has the same coordinates. [P1], ¶0047.

## Glass Identification and Selection

The patent gives d-line index and Abbe number, not supplier trade names. The printed pairs were compared with the
OHARA, HOYA, SCHOTT, HIKARI, CDGM and Sumita catalogs. The table lists each catalog's own nd and νd beside the patent's;
agreement after rounding does not prove a common melt. [G1]–[G6].

| Elements | Patent nd / νd | Catalog-equivalent reference | Catalog nd / νd | ΔPgF |
| --- | --- | --- | --- | --- |
| L1 | 1.80610 / 33.3 | NBFD15 (HOYA) | 1.806100 / 33.270000 | +0.000637 |
| L2 | 1.51680 / 64.2 | BSC7 (HOYA) | 1.516800 / 64.200000 | -0.001535 |
| L3 | 1.90366 / 31.3 | S-LAH95 (OHARA) | 1.903659 / 31.343065 | +0.005177 |
| L4 | 1.62041 / 60.3 | S-BSM16 (OHARA) | 1.620411 / 60.289582 | +0.000263 |
| L5 | 1.94595 / 18.0 | FDS18 (HOYA) | 1.945950 / 17.980000 | +0.041043 |
| L6 | 1.58699 / 59.5 | K-CSK120 (SUMITA) | 1.586986 / 59.478836 | -0.003251 |
| L7/L10 | 1.53380 / 55.6 | Unmatched; line indices from US 2017/0059832 A1 | None | +0.012039 |
| L8 | 1.73800 / 32.3 | S-NBH53V (OHARA) | 1.737999 / 32.326590 | +0.000551 |
| L9 | 1.49700 / 81.6 | S-FPL51 (OHARA) | 1.496999 / 81.545888 | +0.030911 |
| L11 | 1.51742 / 52.1 | E-CF6 (HOYA) | 1.517420 / 52.150805 | +0.002771 |

For L6 the catalog column is the value SUMITA's dispersion formula evaluates to, which rounds to the printed pair; the
catalog line itself lists 1.58700 / 59.6. SCHOTT P-SK57 (1.58700 / 59.60) is the near alternative it replaces. For L11,
HOYA E-CF6 matches the printed nd and has a νd of 52.15 against the printed 52.1; CDGM H-KF6 has the same coordinates.

A catalog equivalent is a modeling reference. Nine of the eleven elements resolve to a catalog row, and the model
traces each of them on that row's dispersion equation at the C, d and F lines. Its g-line index is rebuilt from the ΔPgF
in the table and the printed νd. No line index is stored for these elements, and none of this is a measured value for
the patent melt. [G1], [G2] and [G6].

ΔPgF = (ng − nF)/(nF − nC) − (0.6438 − 0.001682·νd), with νd the patent's printed value. The reference wavelengths are
C 656.2725 nm, d 587.5618 nm, F 486.1327 nm and g 435.8343 nm.

Suppliers quote partial-dispersion deviations against their own normal lines and rounding; the values above are
recomputed against the line in the equation rather than copied from the catalogs.

The stabilization and focus elements (L7, L10) have no catalog row. Their printed pair, 1.53380 / 55.6, also stands on
double-aspherical elements in three other Panasonic prescriptions in this catalog: the Lumix G 25mm f/1.7, the Leica DG
9mm f/1.7 and the Lumix S 14-28mm. One of those patents, US 2017/0059832 A1, prints line indices for it in Table 23.

| Elements | nC | nF | ng | Printed P_g,F | ΔPgF |
| --- | --- | --- | --- | --- | --- |
| L7, L10 | 1.53100 | 1.54060 | 1.54600 | 0.56232 | +0.012039 |

The model carries those three indices on L7 and L10 and traces both elements on them. This rests on an inference: an
identical five-digit nd and νd from the same applicant in the same role is taken to be the same material. JP 6814931 B2
itself prints only nd and νd for these elements. The three indices as rounded give P_g,F 0.5625 and νd 55.604. Neither
element carries an anomalous-dispersion tag. [P3], Table 23.

The patent's stated preference for resin makes the unmatched pair plausible, but the exact material, its full
dispersion curve, temperature behavior, absorption and manufacturing process are unknown. A catalog-level proxy cannot
establish manufactured chromatic performance, coatings or tolerances. [P1], ¶¶0082–0085.

## Focus Mechanism

### Published spacings and object distance

The patent prints an infinity and a close configuration at each of its three zoom stations, and all six are kept. The
printed object distance d0 is measured to the first optical vertex; adding the optical track gives the 250 mm
object-to-image distance. [P1], p. 14, ¶0106; Tables 7A and 8.

| Zoom station | Published d0, mm | D17 infinity → close, mm | D19 infinity → close, mm | BF infinity → close, mm | d0 + close track, mm | Signed close magnification |
| --- | --- | --- | --- | --- | --- | --- |
| Wide | 159.4138 | 1.8729 → 2.2388 | 5.7284 → 5.3625 | 14.23627 → 14.23640 | 250.0001 | -0.068816 |
| Middle | 160.1141 | 5.2170 → 6.4036 | 13.1812 → 11.9947 | 14.23646 → 14.23640 | 250.0000 | -0.142596 |
| Tele | 126.5596 | 5.6168 → 8.9986 | 23.4348 → 20.0529 | 14.23623 → 14.23640 | 249.9999 | -0.266140 |

The changes in d17 and d19 are complementary to the patent's rounding precision, so only the focus element moves. Small
printed differences in BF and in the gap sums are kept as printed.

From infinity to the close state G4 moves toward the image by 0.36577, 1.18656 and 3.38173 mm at wide, middle and tele
respectively, measured from the image plane. The stop stays with the central group and the last group stays fixed. The
production lens's closer 0.20 m minimum focus at the wide end is not modelled. [P1], ¶¶0028, 0044–0047; [M1]; [M2].

### Zoom motion and its limits

Positions below refer to the first vertex of each functional group relative to the fixed image plane, with positive
displacement directed imageward. The central group is measured from the stop.

| Group | Wide position, mm | Middle position, mm | Tele position, mm | Wide → middle, mm | Middle → tele, mm |
| --- | --- | --- | --- | --- | --- |
| G1 | -90.58617 | -89.88586 | -123.44023 | +0.70031 | -33.55437 |
| G2 | -80.62967 | -73.01976 | -78.68893 | +7.60991 | -5.66917 |
| G3 | -42.99567 | -53.79276 | -64.44593 | -10.79709 | -10.65317 |
| G4 | -25.22347 | -32.67646 | -42.92983 | -7.45299 | -10.25337 |
| G5 | -18.28077 | -18.28096 | -18.28073 | -0.00019 | +0.00023 |

The front two groups move toward the image between the wide and middle stations, then toward the object toward tele.
The three stations show that the direction reverses, not where the mechanical reversal occurs. The central and focus
groups move toward the object throughout. The final group's position changes by 0.2 µm, the printed BF spread; the
patent describes it as fixed. [P1], ¶0047 and Tables 7A–C.

The patent states that the straight lines joining the illustrated group positions differ from the actual group motion.
Linear interpolation between the printed stations is therefore an estimate, not a published cam. The model adds no cam
fit, extra station or refocus to reduce the interpolation error. [P1], p. 7, ¶0027.

At zoomT = 0.298 and infinity focus, the paraxial image lies 2.131074 mm in front of the printed image plane. The
focal length there is 18.689137 mm against an interpolated label of 21.032973 mm. The real-ray marginal f-number is
4.122955 (paraxial 4.091316) against an interpolated label of 4.290591.

The interpolated system is therefore not parfocal, and its focal-length and aperture labels between stations are
estimates. The focus shift is a property of the interpolation, not evidence about the production lens.

### Close distance between the printed stations

The 250 mm close distance is printed only at the three zoom stations. The paraxial object-to-image distance that the
stored gaps focus on the printed image plane is listed below; the viewer's distance label reads 250 mm throughout.

| zoomT | Printed close state | Paraxial object-to-image distance, mm |
| --- | --- | --- |
| 0.00 | 250 mm | 249.838477 |
| 0.22 | None (interpolated) | 139.167683 |
| 0.50 | 250 mm | 249.932947 |
| 1.00 | 250 mm | 249.970309 |

At the stations the paraxial distance falls 0.03–0.16 mm short of 250 mm. On the image side that is about 1–2 µm,
comparable to the 0.6–2.1 µm between the printed image plane and the paraxial focus at infinity. Between the wide and
middle stations the interpolated gaps focus much nearer, about 139 mm at zoomT = 0.22, so the indicated close distance
there is approximate. Ray diagrams at intermediate zoom positions are drawn for the interpolated gaps and do not represent a
printed close configuration.

### Aperture calibration

| Zoom station (zoomT) | Iris radius from the printed f-number, mm | Real-ray entrance-pupil radius, mm | Real-ray marginal f-number | Paraxial-pupil f-number |
| --- | --- | --- | --- | --- |
| 0.00 | 4.767906932 | 1.720595265 | 3.62207 | 3.604710646 |
| 0.50 | 4.767897546 | 2.829051225 | 4.74375 | 4.688243043 |
| 1.00 | 4.767916109 | 4.941820466 | 5.84637 | 5.759630507 |

These iris radii are obtained by tracing the entrance-pupil radius that the printed f-number implies to the stop at each
station. They agree to 0.02 µm, so one fixed iris reproduces all three printed f-numbers; the radius is still a derived
value, not a published diaphragm dimension. The real-ray and paraxial-pupil f-numbers differ because the iris is set by
a real ray. Focusing keeps the iris radius of the current zoom station.

## Aspherical Surfaces

The sag convention is the patent's conic base plus the radial polynomial:

Z(h) = (h²/r) / [1 + √(1 − (1 + κ)(h/r)²)] + Σ An·hⁿ.

The data file's K equals κ directly. The coefficient table uses millimetres, with An in mm^(1−n). All printed conics
are zero; no conic-convention offset or scaling is applied, and A14, which the patent does not print, is zero.
[P1], p. 14, ¶¶0102–0104; p. 20, Table 6.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
| --- | --- | --- | --- | --- | --- | --- |
| 11A | 0.00000E+00 | -3.55220E-05 | -1.08362E-06 | 5.77171E-08 | -1.67254E-09 | 1.90130E-11 |
| 13A | 0.00000E+00 | -5.32137E-06 | -5.66960E-07 | 5.95887E-08 | 2.28840E-10 | -3.91081E-11 |
| 14A | 0.00000E+00 | 3.67775E-05 | -3.06523E-06 | 2.38448E-07 | -5.97129E-09 | 3.84009E-11 |
| 18A | 0.00000E+00 | -2.15771E-04 | 5.28419E-06 | -5.21315E-08 | 5.99872E-10 | -2.83037E-11 |
| 19A | 0.00000E+00 | -2.46865E-04 | 3.87923E-06 | 2.22954E-08 | -3.01584E-09 | 3.30166E-11 |

The positive A8 sign on the rear focus-element surface is printed identically in both Japanese publications. The
aspheres are refractive surfaces only; the patent describes no diffractive surface in this example.
[P1], Table 6; [P2], corresponding Numerical Example 2 coefficient table.

The polynomial departure below is measured from the spherical base at the modeled clear radius. Those radii are
inferred, not patent-specified manufacturing apertures. The rim angle includes the derivative of the complete conic-plus-polynomial profile.

| Surface | Modeled clear radius, mm | Polynomial departure from spherical base, µm | Actual rim angle, ° |
| --- | --- | --- | --- |
| 11A | 5.6 | -45.176108 | 11.219822 |
| 13A | 5.8 | +1.887847 | 11.445080 |
| 14A | 5.8 | +28.699674 | 3.445518 |
| 18A | 5.3 | -89.003348 | 4.641597 |
| 19A | 5.3 | -131.450222 | 22.823682 |

On the first positive asphere the negative polynomial departure shifts the modeled rim objectward relative to the
spherical base. The front stabilization asphere stays within about 5 µm of its spherical base over the modeled aperture
and ends 1.9 µm imageward at the rim; the slope of its complete profile reverses near 6.7 mm, outside the modeled
radius. The rear stabilization asphere also departs imageward. The focus element's two surfaces both have negative
polynomial departures at the modeled rim. These geometric statements do not assign a measured aberration correction to
an individual coefficient.

The use of complete high-order terms matters: an interpretation based only on A4 would not describe the full rim shape.
The patent's preference for resin in the moving members does not establish molding chemistry, process capability or a
factory surface tolerance. The manufacturing process of the first aspheric singlet (L6) is likewise not identified by
its glass label.

## Conditional Expressions and Design Rationale

The first condition relates the stabilization element's focal length to the central group's focal length. The patent
associates the lower-bound tradeoff with decentered coma, astigmatism and distortion variation, and the upper-bound
tradeoff with required travel and actuator size. These are the patent's design arguments, not simulated decentered-performance measurements of this centered model. [P1], pp. 10–11, ¶¶0064–0066.

The second condition limits the largest internal air gap relative to the central group's optical thickness. The patent
discusses the competing demands of compactness and retaining room to arrange the correcting elements. [P1], ¶¶0071–0073.

| Condition | Published permitted interval | Computed ratio | Printed Example 2 ratio |
| --- | --- | --- | --- |
| fL7 / fG3 | 0.24 < ratio < 3.0 | 2.352629705 | 2.35 |
| D3Gmax / T3G | 0.20 < ratio < 0.8 | 0.395273603 | 0.40 |

For the spacing condition, D3Gmax = 5.88930 mm and the first-glass-to-last-glass thickness is 14.89930 mm. The
stop-inclusive Table 7C span is 15.89930 mm; that span gives 0.370412534, which does not round to the printed 0.40.

The first-to-last-glass thickness agrees with the condition's definition of the group thickness and reproduces the
printed ratio to its precision. The grant prints 2.35 for the first condition; the earlier application printed 0.43
for Example 2, close to the reciprocal. [P1], ¶0072, Tables 7C and 13; [P2], Table 13.

The patent separately describes advantages of a compact front cemented group, the second group's arrangement, a light
focus group, and moving the stop with the central group. These motivate the disclosed architecture without proving an
exact physical cam, a production actuator design or a single-element aberration budget. [P1], pp. 12–13, ¶¶0076–0087.

## Image Stabilization

The stabilization function is assigned to the double-aspheric positive member of the central group. The patent's
lateral-aberration figures distinguish centered and shifted cases; they are source illustrations rather than results of
the centered implementation described here. [P1], ¶0032, ¶0061 and p. 28, Fig. 8.

No decenter trajectory, stabilization efficacy, actuator stroke or off-axis mechanical clearance is modelled. The
patent's argument for lower moving mass is a design rationale; its preferred resin implementation is not assigned a
named material. [P1], ¶¶0082–0083.

## Model Scope and Limitations

### Clear apertures and vignetting

The patent does not publish clear semi-diameters. The modeled rims are measured on the three panels of Fig. 5 (wide,
middle and tele, 0.145 mm per pixel) and checked against real-ray envelopes at the printed states. Every rim follows the
drawing to within about 0.2 mm, the front doublet (19.3 and 18.3 mm) and the focus element (5.3 mm) included. The third
element's rear surface stops at 9.2 mm, near where the drawing's flat rear annulus begins, while its front face reaches
12.2 mm.

At these radii the thinnest glass section is the 0.6 mm centre of L8, the rim of L9 is 0.6003 mm thick, and the
tightest facing air gap uses 0.844426078 of its depth, below the default allowance of 0.90; no override is used.

The axial bundle at each printed f-number and the chief ray to the image corner pass at all six printed states. The
drawn rims vignette the corner bundles. At the edge of the printed field the share of the iris area whose rays clear
every rim is about 73 % at the wide station, 86 % at the middle and 72 % at tele at infinity focus, and about 48 % at the
wide frame corner, which lies beyond the patent's 10.0 mm image height. The focus element and the rims of L3 and L4
limit the wide bundle, the focus element the middle one, and mainly the front doublet the tele one. The estimated radii
and derived iris cannot predict the vignetting of a manufactured lens, and positions between the printed stations are
estimates.

### Printed precision and the field-height comparison

Computed first-order values differ from the printed ones in the last printed digits; the prescription is not altered to
remove those residuals.

The printed middle station is 26.8412 mm, while the geometric mean of the printed endpoints is 26.83738777 mm, a difference of +0.00381223 mm.

The printed middle column and its spacings define the modeled station; the geometric-mean description in the text is
not used to construct a different one. [P1], ¶0026 and Table 7A.

| Infinity state | Printed half-field, ° | Printed height, mm | Real chief-ray height, mm | Residual, µm | Half-last-digit rounding budget, µm |
| --- | --- | --- | --- | --- | --- |
| Wide | 41.6837 | 10.0000 | 9.997056891 | -2.943109 | 0.502675 |
| Middle | 21.5822 | 10.8150 | 10.813008377 | -1.991623 | 0.523417 |
| Tele | 10.4396 | 10.8150 | 10.813818475 | -1.181525 | 0.683427 |

The budget column is the height change produced by moving every printed input by half of its last digit. All three
residuals exceed it, so rounding alone does not explain them. The patent lists field angle and image height separately
and does not state that the stop-centred chief ray defines the height. A ray that crosses the iris about 0.09 and 0.27
of its radius off-centre at the wide and middle stations, and 0.11 on the opposite side at tele, lands on the printed
height; the same ray reproduces the full-field astigmatism of the patent's Fig. 6, which the stop-centred chief ray does
not. This is consistent with a reference ray through a vignetted pupil; the patent does not identify that ray. No value is rescaled or adjusted.
[P1], ¶¶0102 and 0107; Table 7A; p. 28, Fig. 6.

### Field angles in the viewer

The viewer does not read the patent's three ω values. It derives a half-field from the estimated semi-diameters, the
analysis tabs use the real chief ray that reaches the corner of the Four Thirds frame, and the diagram draws its
default off-axis bundle at 0.6 of the derived half-field.

| Infinity state | Printed ω, ° | Half-field derived from the semi-diameters, ° | Chief ray to the frame corner, ° | Default diagram field, ° |
| --- | --- | --- | --- | --- |
| Wide | 41.6837 | 35.845846 | 44.159739 | 21.507508 |
| Middle | 21.5822 | 26.965131 | 21.594236 | 16.179079 |
| Tele | 10.4396 | 11.149295 | 10.445256 | 6.689577 |

At the wide end the printed ω corresponds to the patent's 10.0 mm image height, short of the 10.82 mm frame corner
that the analysis field reaches. The derived wide half-field is a paraxial estimate set by the 9.2 mm rear surface of
L3; the real chief ray crosses that surface at 8.39 mm for the printed ω and at 8.80 mm for the frame corner, so it is
not clipped. The data format accepts one scalar field override, which cannot carry three zoom-dependent values, so none
is set and the three fields above differ from the printed ω row.

### Reference-glass precision

| Element | Reference glass | Catalog nd minus patent | Catalog νd minus patent | νd of the traced catalog curve |
| --- | --- | --- | --- | --- |
| L6 | K-CSK120 | -0.00000400 | -0.021164 | 59.478836 |
| L9 | S-FPL51 | -0.00000100 | -0.054112 | 81.545888 |
| L11 | E-CF6 | 0.00000000 | +0.050805 | 52.150805 |

K-CSK120 rounds to the printed 1.58699 / 59.5. OHARA lists S-FPL51 at νd 81.6 in its rounded column and 81.54 at higher
precision (81.545888 from its dispersion equation). E-CF6 rounds to νd 52.2 against the printed 52.1; CDGM H-KF6
(1.517420 / 52.149) is an alternative at the same coordinates.

The catalog dispersion equations are evaluated unchanged for the colour channels, so the traced Abbe number is the
catalog's and need not equal the printed one exactly; the prescription keeps the patent's nd. Other makers and catalog
editions offer alternatives at the same nd and νd; none identifies the supplier or melt. [G1]–[G6].

### Printed values kept as printed

No printed prescription value has been corrected. The middle focal length, the 0.23 µm BF spread of the fixed final
group and the field-height residuals above are kept as the patent prints them. [P1], ¶¶0026, 0047 and Table 7A.

## Sources

[P1]: https://patents.google.com/patent/JP6814931B2/en
[P2]: https://patents.google.com/patent/JP2017146588A/en
[P3]: https://patents.google.com/patent/US20170059832A1/en
[M1]: https://news.panasonic.com/jp/press/data/2016/02/jn160224-1/jn160224-1.pdf
[M2]: https://help.na.panasonic.com/answers/features-and-specifications-lumix-lens-model-h-fs12060/
[G1]: https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf
[G2]: https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip
[G3]: https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true
[G4]: https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX
[G5]: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx
[G6]: https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php

- **[P1]:** Japan Patent Office, JP 6814931 B2, the grant. Prescription: p. 19, Table 5; p. 20, Tables 6 and 7A; p. 21,
  Tables 7B–D; p. 22, Table 8; p. 26, Table 13; p. 28, Figs. 5–8.
- **[P2]:** Japan Patent Office, JP 2017-146588 A, earlier publication of the same application. Used to corroborate the
  printed coefficients, not as a different prescription or embodiment.
- **[P3]:** Panasonic Intellectual Property Management Co., Ltd., US 2017/0059832 A1, Table 23: nC, nF, ng and P_g,F of
  the nd 1.53380 / νd 55.6 material. Used only for the line indices of L7 and L10, on the inference stated above.
- **[M1]:** Panasonic, H-FS12060 Japanese launch release. The construction drawing, published on Panasonic's Japanese
  product page (https://panasonic.jp/dc/products/H-FS12060.html), supports a qualitative structural comparison and is
  not a dimensioned manufacturing drawing.
- **[M2]:** Panasonic support, H-FS12060 features and specifications. Production specifications are kept separate from
  patent-derived optical quantities.
- **[G1]:** HOYA optical-glass catalog, including obsolete glasses. Relevant entries: NBFD15, BSC7, FDS18 and E-CF6.
- **[G2]:** OHARA catalog. Relevant reference entries: S-LAH95, S-BSM16, S-NBH53V and S-FPL51.
- **[G3]:** SCHOTT preferred and special glass catalog; P-SK57, the near alternative for L6.
- **[G4]:** CDGM optical-glass catalog; H-KF6, the same-coordinate alternative for L11.
- **[G5]:** HIKARI full catalog workbook, included in the glass search.
- **[G6]:** Sumita optical-data download. Relevant entry: K-CSK120.
