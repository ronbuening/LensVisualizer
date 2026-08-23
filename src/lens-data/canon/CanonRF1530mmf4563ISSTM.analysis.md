# CANON RF 15-30mm f/4.5-6.3 IS STM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** EP 4 174 551 A1\
**Application Number:** 22202312.9\
**Priority:** 28 October 2021 (JP 2021-176783)\
**Filed:** 18 October 2022\
**Published:** 3 May 2023\
**Inventors:** Hiroki Ebe; Shunji Iwamoto\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *ZOOM LENS OF THE RETROFOCUS TYPE*\
**Embodiment analyzed:** Second Numerical Embodiment (Example 2)

This analysis uses the Second Numerical Embodiment of EP 4 174 551 A1 as the fixed production correlation for the
**CANON RF 15-30mm f/4.5-6.3 IS STM**. The prescription itself is taken from the patent's surface, asphere, zoom-unit,
and single-element tables at ¶0064–0068. The product identification is a convergent author inference rather than a Canon
statement that this particular numerical embodiment is the production prescription.

Several independent features support the correlation:

1. The patent design spans 15.45–29.15 mm, closely bracketing Canon's marketed 15–30 mm zoom range.
2. Its published maximum-aperture sequence is f/4.60, f/5.27, and f/6.36, consistent with the production lens's marketed
   f/4.5–6.3 range while preserving the patent's more exact modeled values.
3. Both prescription and product use 13 elements in 11 air-separated groups.
4. The prescription contains one physical element with two aspherical surfaces and two elements at
   `nd = 1.49700, νd = 81.5`; Canon specifies one plastic-molded aspherical element and two UD elements in the production
   lens. The correspondence of those individual patent elements to Canon's production material labels remains inferred.
5. The patent identifies the single negative third lens unit L3 as the focusing unit (¶0047). A one-degree-of-freedom
   reconstruction of that motion reproduces Canon's published 0.28 m autofocus endpoint and the rounded wide/tele
   magnifications.
6. Canon announced the RF15-30mm F4.5-6.3 IS STM on 12 July 2022 for late-August availability; Canon Camera Museum
   records marketing in August 2022. The patent priority date is 28 October 2021, placing the design work before the
   product launch.

The optical model remains at the patent's native scale. No uniform scale factor has been applied, so radii, spacings,
semi-diameters, image-plane distances, and aspheric coefficients are not scale-transformed. Marketing metadata and exact
design values are deliberately kept separate: the catalog focal-length range is 15–30 mm, whereas the independently
recomputed paraxial endpoints are 15.448247 and 29.139228 mm; the marketed maximum aperture begins at f/4.5, whereas
the modeled wide-end f-number is f/4.60.

The selected numerical table contains no sensor-cover plate, filter plate, inactive dummy plane, flare cutter, folded
path, or mechanical surface. The patent discusses the possibility of a low-pass or IR-cut filter near the image plane in
general terms, but no such plate is present in Example 2 and none is included in the model. The production lens includes
optical image stabilization, but the selected patent example supplies neither a stabilizer decenter amount nor a
stabilization spacing table; no stabilization motion is therefore invented.

Two source/modeling qualifications affect the rendered geometry. First, patent surface 11 gives a 10.25 mm effective
diameter, but paraxial pupil reconstruction shows that this is a clear envelope rather than the f/4.60 diaphragm opening.
The wide-end physical stop diameter required by the model is 10.178649 mm, and the data file stores the corresponding
`STO` semi-diameter of 5.089324 mm. Second, the published 24.58 mm effective diameter at surface 5 would put the
surface-4-to-surface-5 shared-band sag intrusion fraction at 0.900126, just above the current 0.90 geometry policy. The
data file therefore stores surface 5 at 12.289 mm semi-diameter rather than the raw 12.290 mm, a documented 1 µm
source-precision adjustment rather than a correction to the patent prescription.

## Optical Architecture

The patent describes this family as a zoom lens "of the retrofocus type." The selected numerical example is nevertheless
not labeled retrofocus under the project's stricter operational criterion, which requires back focal distance to exceed
effective focal length. The independently computed BFD remains about 13.5 mm while the EFL rises from 15.448247 mm to
29.139228 mm, so `BFD > EFL` is false at all three published zoom states. It is also not a telephoto-form system under the
project rule `TL/EFL < 1`.

The design is a five-unit negative-positive-negative-positive-positive zoom:

| Unit | Surfaces | Physical content | Computed unit focal length | Zoom/focus behavior |
|---|---|---|---:|---|
| L1 | 1–8 | E1–E4 | -24.395050 mm | Moves 8.68 mm imageward from wide to tele |
| L2 | 9–19 | E5–E10, including D1 and D2 | +24.695395 mm | Moves 14.96 mm objectward from wide to tele |
| L3 | 20–21 | E11 single negative singlet | -32.495546 mm | Moves 11.31 mm objectward in zoom; translates imageward for close focus |
| L4 | 22A–23A | E12 doubly aspheric singlet | +185.119159 mm | Moves 14.96 mm objectward with L2 from wide to tele |
| L5 | 24–25 | E13 positive rear singlet | +72.634435 mm | Fixed relative to the image plane in the published zoom states |

The movement figures above are image-plane-referenced shifts derived from the final prescription. No unit reverses
direction across the three published zoom positions. Four air gaps define the kinematics: D8 and D23 are zoom-only;
D19 and D21 change with both zoom and the constrained focus reconstruction. The published zoom control points are
15.45, 20.53, and 29.15 mm.

The first unit L1 contains three successive negative lenses followed by a positive lens. This follows the configuration
described in ¶0028. The patent explains that the negative first unit moves the entrance pupil toward the object side,
allowing a smaller front diameter (¶0017), while the positive second unit L2 reconverges the axial marginal bundle and
reduces downstream diameters (¶0018). The same patent specifically associates the three-negative/one-positive L1
arrangement with gradual off-axis bending, correction of astigmatism and field curvature, and reduced lateral chromatic
aberration from the rear positive element (¶0027–0028).

The aperture stop lies between the front singlet E5 and the first cemented pair in L2: surface 10 is followed by 5.00 mm
of air to the stop, and the stop is followed by 3.00 mm of air to surface 12. The patent's effective-diameter value at the
stop is retained as a source clear-envelope reference rather than treated as a fixed iris opening at every zoom position.
The modeled wide-open stop diameters decrease from 10.178649 mm at wide to 10.029658 mm at middle and 9.841675 mm at
tele as the maximum f-number changes from f/4.60 through f/5.27 to f/6.36.

The rear half of the system separates zoom correction, focusing, aspheric correction, and final positive power among
three compact units. L3 is a negative focusing singlet, L4 is a weak positive doubly-aspheric singlet, and L5 is the
fixed positive rear unit. This division allows the focus mechanism to move a small single lens rather than the larger
positive relay behind it, which is the explicit distinction of the second embodiment at ¶0047.

## Element-by-Element Analysis

### E1 — Negative Meniscus

`nd = 2.00100, νd = 29.1.` Glass: `001291 — high-index lanthanum-flint class (vendor unresolved)`; `f = -39.383140 mm` as a standalone element in air.

E1 is the first negative lens of L1 and corresponds to the patent's negative lens A. Its unusually high d-line index is
not incidental: the patent requires the most object-side negative lens A to have `nd ≥ 1.89` and uses its rear-surface
curvature together with the next air gap in the ghost-control conditions. In Example 2, the image-side radius of E1 is
19.277 mm and the following air gap is 6.35 mm, giving `Ra/Da = 3.035748`.

The element's standalone focal length describes E1 isolated in air. It should not be confused with the -24.395050 mm
power of the complete L1 unit, which includes three further elements and their internal separations.

### E2 — Negative Meniscus

`nd = 1.90043, νd = 37.4.` Glass: `900374 — high-index lanthanum-flint class (vendor unresolved)`; `f = -33.219231 mm` as a standalone element in air.

E2 is the patent's lens B, immediately behind E1. The patent permits lens B to be negative and states that consecutive
negative lenses allow off-axis rays to be deflected more gradually (¶0027). Example 2 uses the object-side radius
81.393 mm and the following 6.53 mm air gap, giving `Rb/Db = 12.464472`; its d-line index, 1.90043, also exceeds the
preferred lower-index threshold used in the patent's conditional hierarchy.

E1 and E2 therefore form the specific front pair around which the patent's ghost-suppression geometry is framed. Their
powers remain separate because they are air-spaced rather than cemented.

### E3 — Biconcave Negative

`nd = 1.49700, νd = 81.5.` Glass: `497815 — very-low-dispersion fluorophosphate-crown / UD-like class (vendor unresolved)`; `f = -41.230813 mm` as a standalone element in air.

E3 is the third negative member of L1. Its high Abbe number makes it one of the two very-low-dispersion coordinate pairs
in the selected prescription. Canon specifies two UD elements in the production lens, so E3 is part of the production
correlation, but the patent does not identify a vendor glass and the data file does not promote this coordinate to a
specific Sellmeier catalog entry.

Because only `nd` and `νd` are source-supported, E3's low-dispersion classification does not establish anomalous partial
dispersion or apochromatic behavior.

### E4 — Biconvex Positive

`nd = 1.80610, νd = 33.3.` Glass: `806333 — dense high-index flint class (vendor unresolved)`; `f = +33.529117 mm` as a standalone element in air.

E4 closes L1 with positive power after three negative lenses. The patent specifically identifies a positive lens at the
most image-side position of this four-element first unit and states that it helps reduce lateral chromatic aberration at
the wide end (¶0028). In the complete unit, E4's positive contribution partly balances the three negative singlets while
L1 remains net negative at -24.395050 mm.

### E5 — Biconvex Positive

`nd = 1.63930, νd = 44.9.` Glass: `639449 — barium-flint class (vendor unresolved)`; `f = +67.565765 mm` as a standalone element in air.

E5 is the front positive singlet of L2 and sits immediately ahead of the aperture-stop region. L2 as a whole is positive
at +24.695395 mm. The patent's architecture assigns this positive second unit the task of reconverging the axial marginal
ray after the negative front unit (¶0018); E5 supplies the first positive power of that relay before the stop and the two
cemented combinations behind it.

### E6 — Negative Meniscus, D1 Front Member

`nd = 1.80400, νd = 46.5.` Glass: `804465 — lanthanum-crown class (vendor unresolved)`; `f = -34.627101 mm` as a standalone element in air.

E6 begins the first cemented pair D1. Its rear surface at label 13 is not an air boundary: it is the E6→E7 cemented
junction, and the interface carries E7's downstream refractive index and element identity in the data model.

The standalone -34.627101 mm value describes E6 by itself. It is not directly additive with the standalone power of E7
because the pair shares a refracting interface and finite internal thicknesses.

### E7 — Biconvex Positive, D1 Rear Member

`nd = 1.71300, νd = 53.9.` Glass: `713539 — lanthanum-crown class (vendor unresolved)`; `f = +25.627994 mm` as a standalone element in air.

E7 is the positive rear member of D1. An independent matrix calculation of the cemented E6+E7 assembly gives a net
equivalent focal length of **+98.239682 mm** in air. That comparatively weak positive net power is the physically useful
quantity for the cemented pair; the two standalone focal lengths are retained to describe the individual elements and to
match the patent's Single Lens Element Data table.

### E8 — Positive Meniscus

`nd = 1.48749, νd = 70.2.` Glass: `487702 — low-index crown class (vendor unresolved)`; `f = +41.110985 mm` as a standalone element in air.

E8 is an air-spaced positive singlet in the middle of L2. Its moderate positive power follows D1 and precedes the second
cemented pair D2. The high Abbe number relative to the surrounding high-index flint-class elements gives L2 a broad
spread of dispersion coordinates without requiring the analysis to assign an unsupported vendor-specific glass.

### E9 — Negative Meniscus, D2 Front Member

`nd = 1.90043, νd = 37.4.` Glass: `900374 — high-index lanthanum-flint class (vendor unresolved)`; `f = -15.922546 mm` as a standalone element in air.

E9 is the strong negative front member of the second cemented pair D2. Its rear surface at label 18 is the cemented
E9→E10 junction rather than an air interface. The same 900374 coordinate is used by E2 in the front unit, but the patent
does not establish a vendor identity for either occurrence.

### E10 — Biconvex Positive, D2 Rear Member

`nd = 1.49700, νd = 81.5.` Glass: `497815 — very-low-dispersion fluorophosphate-crown / UD-like class (vendor unresolved)`; `f = +17.064240 mm` as a standalone element in air.

E10 nearly balances E9's strong standalone negative power and supplies the second `1.49700/81.5` low-dispersion
coordinate in the prescription. The complete cemented D2 assembly is not a strong positive doublet: independent matrix
propagation gives a weak **-569.257876 mm** net equivalent focal length. This distinction is important because simply
adding the two isolated powers would misrepresent the shared-interface system.

The production specification of two UD elements is consistent with the two repeated `1.49700/81.5` elements E3 and E10,
but that correspondence remains part of the production correlation rather than a patent statement about Canon's
commercial glass designations.

### E11 — Negative Meniscus, L3 Focus Element

`nd = 1.80100, νd = 35.0.` Glass: `801350 — lanthanum-flint class (vendor unresolved)`; `f = -32.495546 mm` as a standalone element in air.

E11 is the entire L3 unit, so its standalone focal length and the L3 unit focal length are the same to numerical
precision. This single negative singlet is the moving focus unit identified in ¶0047. At infinity, it lies between the
D19 and D21 air gaps; close focus is modeled solely by translating this element imageward while preserving the sum of
those two adjacent gaps.

The second embodiment's use of a single negative focusing lens is explicitly contrasted with the larger multi-element
focus unit of the first embodiment. The patent's stated purpose is to reduce the size of the moving focus unit.

### E12 — Positive Meniscus with Two Aspherical Surfaces

`nd = 1.53110, νd = 55.9.` Glass: `Unmatched (PMo optical-resin class; production-correlation inference)`; `f = +185.119159 mm` as a standalone element in air.

E12 is the complete L4 unit and is only weakly positive. Both surfaces, 22A and 23A, are aspherical. The patent provides
no material name, and the `1.53110/55.9` coordinate is not assigned a speculative catalog glass. Canon's production
specification identifies one plastic-molded aspherical element, while E12 is the prescription's only physical element
with aspherical surfaces; the PMo-resin description is therefore retained explicitly as a production-correlation
inference.

L4 moves with the same wide-to-tele image-plane-referenced displacement as L2, 14.96 mm objectward. Its aspheric form is
discussed separately below rather than inferred from the element's weak paraxial power alone.

### E13 — Positive Meniscus, L5 Rear Unit

`nd = 1.80400, νd = 46.5.` Glass: `804465 — lanthanum-crown class (vendor unresolved)`; `f = +72.634435 mm` as a standalone element in air.

E13 is the final positive unit L5. In the three published zoom states it remains fixed relative to the image plane: the
rear surface is followed by the patent's 13.50 mm image-space interval at every zoom position. The shared 804465 material
coordinate also appears in E6, but no vendor identity is asserted.

This fixed rear positive unit contributes to the final relay and back-focus geometry while the preceding L1–L4 units
change their relative positions during zooming.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for the selected numerical embodiment. The data file
therefore preserves material coordinates and class-level identifications rather than selecting one vendor when several
authoritative catalogs occupy essentially the same `nd/νd` neighborhood.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| `001291 — high-index lanthanum-flint class (vendor unresolved)` | 2.00100 | 29.1 | E1 | Very high index / low Abbe front-group material class |
| `900374 — high-index lanthanum-flint class (vendor unresolved)` | 1.90043 | 37.4 | E2, E9 | High-index flint-class coordinate used in two units |
| `497815 — very-low-dispersion fluorophosphate-crown / UD-like class (vendor unresolved)` | 1.49700 | 81.5 | E3, E10 | Very-low-dispersion coordinate; production UD correlation inferred |
| `806333 — dense high-index flint class (vendor unresolved)` | 1.80610 | 33.3 | E4 | Dense high-index flint-class coordinate |
| `639449 — barium-flint class (vendor unresolved)` | 1.63930 | 44.9 | E5 | Moderate-index barium-flint-class coordinate |
| `804465 — lanthanum-crown class (vendor unresolved)` | 1.80400 | 46.5 | E6, E13 | High-index crown-class coordinate used in central and rear units |
| `713539 — lanthanum-crown class (vendor unresolved)` | 1.71300 | 53.9 | E7 | Crown-class positive member of D1 |
| `487702 — low-index crown class (vendor unresolved)` | 1.48749 | 70.2 | E8 | Low-index, relatively high-Abbe crown coordinate |
| `801350 — lanthanum-flint class (vendor unresolved)` | 1.80100 | 35.0 | E11 | High-index flint-class focus singlet |
| `Unmatched (PMo optical-resin class; production-correlation inference)` | 1.53110 | 55.9 | E12 | No defensible public-glass identity; PMo attribution inferred from production correlation |

The catalog audit compared these coordinates against current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita optical
glass data. Several positions admit multiple close or essentially exact catalog equivalents. That makes a vendor-specific
Sellmeier label less defensible than the generic coordinate/class labels actually stored in the data file.

No `nC`, `nF`, `ng`, or `dPgF` fields are authored. They are neither published by the selected patent example nor
recoverable from a uniquely established catalog identity. E3 and E10 carry `apd: "inferred"` only so the diagram shows
Canon's production-supported two-UD count; the tags do not assert a patent melt or dispersion curve. Consequently, the
model does not make an APO claim or infer secondary-spectrum behavior from `νd` alone.

The two `1.49700/81.5` positions are nevertheless meaningful at the level supported by the sources. Canon states that
the production lens contains two UD elements, and Example 2 contains exactly two repeated very-low-dispersion
coordinates, E3 and E10. This strengthens the production correlation but does not identify a specific Canon melt or
public-catalog equivalent.

## Focus Mechanism

The focus model is a **CONSTRAINED_RECONSTRUCTION**. Patent ¶0047 states that L3 is the focusing unit and that, in the
second embodiment, it consists of a single negative lens. The patent does not publish finite-focus D19/D21 spacing rows.
The data file therefore does not present the close-focus values as source measurements.

Canon specifies a 0.28 m autofocus minimum focusing distance throughout the zoom range. The reconstruction uses that
image-plane-referenced distance as the endpoint and allows only the published L3 mechanism to move. D19 increases,
D21 decreases by the same amount, and `D19 + D21 = 11.86 mm` is conserved at each zoom position. D8 and D23 remain
zoom-only and are unchanged by focus.

| Zoom state | D19 infinity | D19 close | D21 infinity | D21 close | L3 shift toward image | Computed |m| |
|---|---:|---:|---:|---:|---:|---:|
| 15.45 mm | 2.860000 mm | 3.624009 mm | 9.000000 mm | 8.235991 mm | 0.764009 mm | 0.085008× |
| 20.53 mm | 4.140000 mm | 5.261253 mm | 7.720000 mm | 6.598747 mm | 1.121253 mm | 0.110270× |
| 29.15 mm | 6.510000 mm | 8.375066 mm | 5.350000 mm | 3.484934 mm | 1.865066 mm | 0.156754× |

At the reconstructed close states, the finite-conjugate image-condition matrix coefficient `B` is below `3.6e-14 mm`
in magnitude. The wide and tele magnifications round to Canon's published 0.09× and 0.16× AF figures. This agreement is
an independent check on the one-dimensional L3 reconstruction; it is not evidence that Canon published the reconstructed
spacing values.

Canon also specifies a special manual-focus state at 15 mm reaching approximately 0.128 m and 0.52×. Independent tracing
of the same L3 mechanism can reproduce that state, but the data file intentionally does not generalize it across the zoom
range because Canon does not publish it as a common all-focal-length endpoint. The modeled `closeFocusM` is therefore
0.28 m. Canon identifies the production focus drive as lead-screw-type STM; that mechanical drive fact does not alter the
patent-derived optical motion.

## Aspherical Surfaces

E12 carries the only two aspherical surfaces in the model, labels 22A and 23A. The patent defines the sag as

$$
X(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+\cdots.
$$

This is already the standard conic convention used by LensVisualizer: the patent's `k` is the standard conic constant
`K`, and both Example-2 surfaces use `K = 0`. No κ-to-K conversion is required.

### Surface 22A — Object-Side Face of E12

`R = -50.000 mm`, `K = 0`

| Coefficient | Value |
|---|---:|
| A4 | -3.17244e-5 mm^-3 |
| A6 | +2.39294e-7 mm^-5 |
| A8 | -2.65521e-9 mm^-7 |
| A10 | +1.39956e-11 mm^-9 |

The patent terminates the published series at A10 for this example; the data schema carries A12 and A14 as zero. At the
source/authored semi-diameter `h = 10.605 mm`, the polynomial terms displace the surface by **-0.233840 mm** relative to
its spherical base. The total sag at that height is -1.371441 mm.

### Surface 23A — Image-Side Face of E12

`R = -33.834 mm`, `K = 0`

| Coefficient | Value |
|---|---:|
| A4 | +7.78280e-6 mm^-3 |
| A6 | +1.77889e-7 mm^-5 |
| A8 | -9.23774e-10 mm^-7 |
| A10 | +4.78158e-12 mm^-9 |

At the source/authored semi-diameter `h = 11.635 mm`, the polynomial contribution is **+0.491089 mm** relative to the
spherical base, giving a total sag of -1.572385 mm. The two faces therefore depart from their spherical bases in opposite
signed directions over their verified clear apertures.

No dimensional scaling has been applied to the patent prescription. The stored coefficients are consequently the source
coefficients; there is no `A_p/s^(p-1)` transformation and `K` remains unchanged.

Canon identifies one plastic-molded aspherical element in the production lens. Because E12 is the selected prescription's
only physical element with aspherical surfaces, its PMo optical-resin description is a production-correlation inference.
The patent itself supplies only the `1.53110/55.9` optical coordinate and does not name the material or manufacturing
process.

## Chromatic Correction Strategy

The patent's directly stated chromatic rationale is concentrated in L1. Three negative lenses are followed by a positive
lens, and ¶0028 states that the rear positive member helps reduce lateral chromatic aberration at the wide end. The final
data preserve that sequence as E1–E4.

The prescription also places the two highest-Abbe coordinates in different functional regions. E3 (`νd = 81.5`) is the
third negative member of L1, while E10 (`νd = 81.5`) is the positive rear member of D2 in L2. Their locations provide a
wide dispersion contrast with the surrounding high-index, lower-Abbe elements. Canon's production specification of two
UD elements is consistent with this pair, but the analysis does not convert that product-level statement into an
unsupported vendor-glass assignment.

D2 illustrates why chromatic interpretation cannot be based on isolated element powers alone. E9 is a strong negative
standalone element and E10 is a strong positive standalone element, yet the cemented pair has a weak net negative
paraxial focal length of -569.257876 mm. Its refracting interface and dispersion contrast are part of the in-situ design;
the two isolated focal lengths are not additive system powers.

No source-supported partial-dispersion data are available. Terms such as "apochromatic," "anomalous dispersion," or
quantitative secondary-spectrum correction would therefore go beyond the data and are not used here.

## Ghost and Aberration Control Strategy

The patent is organized around the first two negative lenses of L1. It identifies E1 as negative lens A and E2 as lens B,
then constrains their facing curvature/gap relationships so that undesirable double reflections are redirected while the
front group retains the required negative power (¶0019–0022). In Example 2, both E1 and E2 are negative, matching the
preferred arrangement discussed in ¶0027.

The same front-unit architecture also spreads negative bending across three successive lenses before recovering some
power with E4. The patent associates this with gradual off-axis deflection, reduced astigmatism and field curvature, and
lateral-color correction from the rear positive lens (¶0027–0028). These are patent-stated design aims; the present
paraxial verification does not independently quantify monochromatic aberration curves.

The selected embodiment's aberration chart on patent page 27, Fig. 4A/4B, shows the wide and tele reference states used by
the patent. Its wide-end plot labels `ω = 54.5°`, an important point when interpreting condition (7), discussed below.

## Conditional Expressions

Example 2 satisfies the patent's conditional framework. Except for condition (7), the values below are independently
recomputed from the final native-scale prescription using its raw spacings and d-line paraxial focal lengths rather than
mixing those values with the patent's separately rounded unit and focal-length tables. They reproduce the Example-2
Table-1 values to source precision; the small condition-(2) difference reflects the separately rounded prescription
radii/spacings. Each falls within the patent's narrowest "b" preference where one is defined. Condition (7) retains the
source Table-1 value because the patent's field-angle rows are internally inconsistent, as discussed below.

| Cond. | Quantity | Independent Example-2 value | Narrowest preferred band | Result |
|---:|---|---:|---|---|
| 1 | `Ra/Da` | 3.035748 | 2.6 < x < 10 | Pass |
| 2 | `Rb/Db` | 12.464472 | 11.5 < x < 30 | Pass |
| 3 | `NdB` | 1.900430 | x > 1.84 | Pass |
| 4 | `d/fw` | 3.638601 | 2.7 < x < 5 | Pass |
| 5 | `d2/fw` | 3.136926 | 2.3 < x < 3.5 | Pass |
| 6 | `GL/TL` | 0.219119 | 0.19 < x < 0.24 | Pass |
| 7 | `100(y-y0)/y0` | -15.240000% (Table 1) | -18 < x < -14 | Pass |
| 8 | `f1/fw` | -1.579147 | -1.8 < x < -1.2 | Pass |
| 9 | `fa/fw` | -2.549360 | -2.8 < x < -1.9 | Pass |
| 10 | `fb/fw` | -2.150356 | -2.7 < x < -1.2 | Pass |
| 11 | `ft/fw` | 1.886248 | 1.4 < x < 1.9 | Pass |

Condition (7) exposes a source terminology inconsistency that should not be silently reconciled. The Example-2 Various
Data table calls 49.88° the wide-end "Half View Angle." If that value is inserted as the incoming object-side angle
`θ` in the patent's own definition `y0 = f tan θ`, the resulting distortion is approximately +0.03%, not the Table-1
value of -15.24%. Table 1 instead implies `θ = 54.4718°`, and the Example-2 aberration figure on page 27 labels
`ω = 54.5°`. The analysis therefore preserves the 49.88° row as a separate published field-angle quantity and uses the
condition definition/Fig. 4A value when discussing condition (7). No single scalar projection override is imposed on the
zoom model to conceal that source inconsistency.

## Image Stabilization

Canon's product documentation identifies the RF15-30mm F4.5-6.3 IS STM as an optically stabilized lens, and the Camera
Museum block diagram marks an IS unit. That is a production-lens fact, not a numerical instruction in the selected patent
example.

EP 4 174 551 A1 Example 2 provides no stabilizer decenter, no lateral-motion table, and no separate stabilization state.
The data therefore model the centered prescription only. No particular patent unit is asserted to be the production IS
unit, and no decenter amount is inferred from the manufacturer block diagram.

## Verification Summary

Independent height/reduced-angle tracing and an ABCD matrix product agree to machine precision for the final data arrays.
The principal infinity-focus results are:

| State | Computed EFL | Patent focal length | Computed BFD | Patent BF | Raw surface-track sum | Patent overall length |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 15.448247 mm | 15.45 mm | 13.500362 mm | 13.50 mm | 115.28 mm | 115.28 mm |
| Middle | 20.524458 mm | 20.53 mm | 13.489204 mm | 13.50 mm | 109.07 mm | 109.06 mm |
| Tele | 29.139228 mm | 29.15 mm | 13.481457 mm | 13.50 mm | 106.60 mm | 106.60 mm |

The 0.01 mm middle-track difference is retained as a source-rounding discrepancy. The same kind of 0.01 mm difference
occurs in the patent's L1 structure-length table: the raw surface intervals sum to 25.26 mm while the unit table prints
25.25 mm. No prescription spacing is altered to force either printed aggregate.

The computed entrance-pupil positions are 17.589312, 16.292100, and 14.575783 mm for wide, middle, and tele, matching the
patent's 17.59, 16.29, and 14.57 mm values at source precision. These pupil calculations are also what distinguish the
10.25 mm stop clear envelope from the zoom-dependent wide-open diaphragm opening.

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`. The sum is **0.004148341863 mm^-1**, corresponding to
a signed Petzval radius of **-241.060171 mm** under `R_P = -1/ΣP`. This is a paraxial field-curvature quantity, not a
substitute for the patent's full astigmatic field curves.

Geometry checks use the authored semi-diameters and the actual aspherical slopes. The maximum rim-slope angle is
48.916092°, the minimum common-band element edge thickness is 1.470586 mm, both aspheres have `K = 0` and therefore no
positive-K conic height limit, and the worst shared-band cross-gap fraction is 0.899968279 at the surface-4-to-surface-5
gap. The 1 µm surface-5 semi-diameter adjustment is what moves that final value below the 0.90 policy threshold while
remaining below the source table's 0.01 mm diameter precision.

Independent nonlinear containment tracing at infinity gives maximum normalized ray heights `|y|/sd` of 0.970926,
0.965866, and 0.957017 at wide, middle, and tele for the tested off-axis bundles. At the reconstructed 0.28 m close
states, the corresponding on-axis fan maxima are 0.830000, 0.826776, and 0.826595. None exceeds an authored
semi-diameter in those verification bundles.

The model retains exactly one stop and contains no hidden optical plate, synthetic cement layer, dummy surface, or
folded path. Cemented interfaces use the downstream element's index and identity. No asphere scaling correction is
required because the prescription remains at native scale, and no spectral line indices or anomalous-dispersion values
are synthesized from the Abbe-number table.

## Sources / References

1. European Patent Office, **EP 4 174 551 A1**, *ZOOM LENS OF THE RETROFOCUS TYPE*, published 3 May 2023. Selected
   prescription: Second Numerical Embodiment, ¶0064–0068; focusing description: ¶0047; front-unit rationale:
   ¶0017–0028; conditions: ¶0019–0043 and Table 1; Example-2 aberration chart: Fig. 4A/4B.
2. Canon Camera Museum, **RF15-30mm F4.5-6.3 IS STM**:
   <https://global.canon/en/c-museum/product/rf518.html>
3. Canon U.S.A., **RF15-30mm F4.5-6.3 IS STM — Technical Specifications**:
   <https://www.usa.canon.com/support/p/rf15-30mm-f4-5-6-3-is-stm>
4. Canon U.S.A., **Canon Introduces RF24mm F1.8 Macro IS STM and RF15-30mm F4.5-6.3 IS STM**, 12 July 2022:
   <https://www.usa.canon.com/newsroom/2022/20220712-lens>
5. OHARA, official optical-glass catalogs: <https://www.ohara-inc.co.jp/en/product/catalog/>
6. HOYA, official optical-glass data downloads: <https://www.hoya-opticalworld.com/english/datadownload/index.html>
7. SCHOTT, official optical-glass data downloads:
   <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>
8. HIKARI, official optical-glass catalog: <https://www.hikari-g.co.jp/optical_glass/catalog/>
9. CDGM, official optical-glass database:
   <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>
10. Sumita Optical Glass, official downloads: <https://www.sumita-opt.co.jp/en/download/>
