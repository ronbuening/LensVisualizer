## Patent Reference and Design Identification

**Patent:** JP 2026-120386 A\
**Application Number:** Japanese application 2025-3681\
**Filed:** 2025-01-09\
**Published:** 2026-07-22\
**Inventor:** Tatsuya Moriyama\
**Applicant:** Cosina Co., Ltd.\
**Title:** Optical Lens System\
**Embodiment analyzed:** Example 2 / second embodiment

JP 2026-120386 A describes an interchangeable-camera optical system in which the spacing between a positive first lens
group and a negative second lens group changes continuously to vary spherical aberration while the remainder of the
correction is kept comparatively stable. The selected second embodiment is the fixed prescription used here. It has a
published focal length of 73.36 mm, an F-number of 1.858, and a 16.59° half field, and it places a positive third group
behind the aperture stop (JP 2026-120386 A, ¶0047–0048).

The patent does not identify a commercial product. The association with the VOIGTLÄNDER PORTRAIT HELIAR 75mm f/1.8 is
therefore a production-correlation inference, not a manufacturer statement. The identification rests on the following
convergent evidence:

1. Cosina Co., Ltd. is both the patent applicant and the manufacturer of the production lens.
2. The patent embodiment and the production lens both use six elements in three groups and an independent
   spherical-aberration control.
3. The computed sharp-state EFL is 73.355535 mm, corresponding to the marketed 75 mm designation; the patent F-number
   of 1.858 corresponds to the marketed f/1.8 designation.
4. The patent full field is 33.18°, while Cosina specifies 33.2° for the production lens.
5. The patent focus table gives a normalized object-to-image distance of 0.70008 m and a computed reproduction ratio of
   1:7.39497; Cosina specifies 0.7 m and 1:7.4.
6. The patent was filed on 2025-01-09, before the Sony E-mount lens release on 2025-06-20 and the Nikon Z- and Canon
   RF-mount releases on 2026-02-18.

The marketing and design quantities are deliberately kept separate:

| Quantity | Production specification | Selected design |
|---|---:|---:|
| Focal length | 75 mm | 73.355535 mm, sharp-state EFL |
| Maximum aperture | f/1.8 | f/1.858 |
| Full angle of view | 33.2° | 33.18° |
| Minimum focus | 0.7 m | 0.70008 m, image-plane reference |
| Maximum reproduction | 1:7.4 | 1:7.39497 |

Cosina offers this optical formula for Sony E, Nikon Z, and Canon RF mounts, each covering the 35 mm full-frame format.
The mount variants differ mechanically, but the published lens diagrams and core optical specifications are consistent
with the same six-element, three-group formula.

## Optical Architecture

The prescription is an all-spherical, positive-negative-positive three-group prime. Every group is a cemented doublet:
G1 is the front positive doublet, G2 is the central negative doublet, and G3 is the rear positive doublet. The aperture
stop lies after G2 and 2.60 mm before G3. The patent specifically requires G1 and G3 to consist only of cemented lenses;
the selected embodiment also constructs G2 as a cemented doublet (JP 2026-120386 A, ¶0048–0052).

Independent thick-lens calculation gives the following group powers:

| Group | Construction | Computed EFL |
|---|---|---:|
| G1 | L4f + L4r cemented doublet | +57.653792 mm |
| G2 | L5f + L5r cemented doublet | −31.935457 mm |
| G3 | L6f + L6r cemented doublet | +41.290725 mm |
| G2+G3 | Published in-situ spacing, including stop region | +445.954463 mm |

The G2+G3 value is an in-situ composite power. It includes the published air spaces and stop location between the two
groups and is not the algebraic sum of their isolated cemented powers. Its weak positive power, compared with the much
stronger G1 power, gives $f_{Gr23}/f_{Gr1}=7.735041$ from the unrounded calculation. The rounded Table 5 group focal
lengths give 7.73547, while the patent prints 7.74.

The principal architectural control is the air gap U3 between G1 and G2. Changing this separation alters the ray
conditions at the net-negative central doublet and produces the intended spherical-aberration variation. The patent's
aberration plots show a substantial longitudinal spherical-aberration change between the Plus, Sharp, and Minus states,
while the astigmatism and distortion plots remain on the same comparatively narrow scales (JP 2026-120386 A,
¶0066–0070 and Figs. 6–8).

Ordinary focusing is separate from this aberration control. The patent specifies unit focus, so the complete optical
assembly translates without changing its internal lens spacings (JP 2026-120386 A, ¶0021 and claim 7). No internal focus
reconstruction is present.

All refracting surfaces are spherical. The data contains no aspheric coefficients, no conic surfaces, and no scaled
prescription. No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical component is included in
the sequential optical model.

## Element-by-Element Analysis

The focal lengths stated for individual elements in this section are standalone thick-lens EFLs in air, calculated from
each element's two bounding radii, center thickness, and refractive index. They must not be confused with the cemented
group powers or with each element's in-situ contribution to the complete system.

### G1 Front Positive Cemented Doublet

#### L4f — Biconvex Positive

**nd = 1.88300, νd = 40.80. Glass: 883408 — high-index lanthanum glass class (vendor unresolved). Standalone f = +38.863947 mm.**

L4f is the principal positive member of G1 and the strongest isolated element in the front doublet. Its high d-line
index supplies substantial positive power without requiring the element to carry the entire group correction alone.
The patent makes the high index of the positive member in G1 an explicit condition, stating that $n_{d1}>1.83$ assists
the control of coma and field curvature as the soft-focus setting changes (JP 2026-120386 A, ¶0056).

L4f is cemented directly to L4r. Its isolated focal length describes the element in air; the finished cemented pair has
a substantially weaker net EFL of +57.653792 mm.

#### L4r — Biconcave Negative

**nd = 1.84666, νd = 23.78. Glass: 847238 — very-dense-flint class (vendor unresolved). Standalone f = −106.839291 mm.**

L4r is the negative rear member of G1. Its lower Abbe number than L4f supplies the local dispersion contrast expected of
the negative member in a cemented positive doublet. This chromatic role is an optical inference from the stored nd and
νd values; the patent does not identify a glass maker, melt, or partial-dispersion behavior.

The element's weak isolated negative power reduces the stronger positive power of L4f, producing the published positive
G1 power while retaining a cemented outer form. The rear surface of L4r bounds U3, the air spacing used for the
spherical-aberration control.

### G2 Central Negative Cemented Doublet

#### L5f — Positive Meniscus, convex to image

**nd = 1.80518, νd = 25.46. Glass: 805255 — dense-flint class (vendor unresolved). Standalone f = +64.434685 mm.**

L5f is a positive meniscus whose convex side faces the image. Although positive in isolation, it is the weaker member of
the central doublet and does not determine the sign of G2. Its position immediately after the variable U3 gap makes its
ray heights sensitive to the aberration-control spacing.

The low Abbe number indicates a high-dispersion glass class, but no anomalous-partial-dispersion claim is supported. Its
function must be understood together with the strongly negative L5r and the cemented interface rather than as a
standalone positive corrector.

#### L5r — Biconcave Negative

**nd = 1.64769, νd = 33.84. Glass: 648338 — dense-flint class (vendor unresolved). Standalone f = −22.116992 mm.**

L5r is the strongest isolated negative element in the prescription. It dominates the sign of G2, leaving the cemented
pair with a net EFL of −31.935457 mm. The strongly curved biconcave form also places the negative group directly ahead of
the aperture stop.

The patent changes G1-to-G2 separation rather than adding a separate soft-focus attachment. This keeps the aberration
control within the main imaging system and avoids increasing the element count, one of the stated design objectives
(JP 2026-120386 A, ¶0005–0008).

### G3 Rear Positive Cemented Doublet

#### L6f — Negative Meniscus, convex to object

**nd = 1.78472, νd = 25.72. Glass: 785257 — dense-flint class (vendor unresolved). Standalone f = −51.838960 mm.**

L6f is the negative front member of G3, with its convex surface toward the object. It receives the beam shortly after the
stop and acts as the negative partner of the strong positive L6r. Its low Abbe number again supplies a dispersion
contrast within the cemented pair, but the available data does not establish a particular vendor glass or anomalous
partial dispersion.

#### L6r — Biconvex Positive

**nd = 1.88300, νd = 40.80. Glass: 883408 — high-index lanthanum glass class (vendor unresolved). Standalone f = +23.184192 mm.**

L6r is the strongest isolated positive element in the prescription. Combined with L6f, it gives G3 a net EFL of
+41.290725 mm. The same 1.88300 / 40.80 glass class used in L4f is therefore placed at both ends of the system's power
distribution.

The patent separately requires the highest-index positive member of G3 to satisfy $n_{d3}>1.83$ and associates that
condition with controlling coma, field curvature, and their variation during soft-focus adjustment (JP 2026-120386 A,
¶0057). The assertion is a patent design rationale; it does not identify the manufacturing melt.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It supplies no glass-maker names, Sellmeier
coefficients, C-, F-, or g-line indices, or anomalous partial-dispersion values. The data therefore preserves
vendor-neutral six-digit codes and broad optical classes rather than assigning speculative catalog identities.

| Code and class | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| 883408 — high-index lanthanum glass class | 1.88300 | 40.80 | L4f, L6r | Vendor and melt unresolved |
| 847238 — very-dense-flint class | 1.84666 | 23.78 | L4r | Vendor and melt unresolved |
| 805255 — dense-flint class | 1.80518 | 25.46 | L5f | Vendor and melt unresolved |
| 648338 — dense-flint class | 1.64769 | 33.84 | L5r | Vendor and melt unresolved |
| 785257 — dense-flint class | 1.78472 | 25.72 | L6f | Vendor and melt unresolved |

The independent catalog audit found exact or near-exact equivalents for each coordinate among current OHARA, HOYA,
SCHOTT, HIKARI, CDGM, and SUMITA data. Because several vendors supply materially indistinguishable nd/νd coordinates,
that agreement establishes optical equivalence classes rather than the actual production melts.

The glass palette uses relatively high indices throughout and deliberately pairs members with different Abbe numbers
inside each cemented group. That observation supports a conventional local achromatizing interpretation, but Abbe-only
data cannot establish apochromatic correction, secondary-spectrum behavior, or anomalous partial dispersion. No APO or
anomalous-dispersion designation is therefore applied.

## Focus Mechanism

The patent specifies unit focus: all three lens groups translate together for closer objects, preserving the internal
G1-G2-G3 configuration and therefore preserving the selected spherical-aberration setting (JP 2026-120386 A, ¶0021 and
¶0014). The production lens implements manual focus with a helicoid; this mechanical information comes from Cosina,
not from the prescription table.

LensVisualizer represents unit focus by changing the final image-side spacing while leaving every internal spacing
fixed:

| State | Object to surface 1 | Surface 10 to image | Object to image | Computed reproduction |
|---|---:|---:|---:|---:|
| Infinity | Infinity | 47.08 mm | — | — |
| Minimum focus | 591.50 mm | 57.00 mm | 700.08 mm | 1:7.39497 |

The close-state transverse magnification is −0.13522711. Its sign records image inversion; its magnitude gives the
1:7.39497 reproduction ratio. The paraxial imaging residual is 0.007121 mm, which is consistent with the two-decimal
precision of the patent focus table.

No internal focus group, floating correction, or coupled soft-control compensation has been reconstructed. Cosina's
operating instructions require refocusing after the spherical-aberration control is changed, consistent with the
computed paraxial focus shift.

## Spherical-Aberration Control Mechanism

The patent varies U3, the air gap between the rear surface of G1 and the front surface of G2. Three published positions
are given:

| Patent state | Production ring position | U3 | Computed EFL | Computed BFL from surface 10 |
|---|---|---:|---:|---:|
| Plus | Under | 5.730 mm | 72.732995 mm | 51.895715 mm |
| Sharp | Sharp / normal | 8.730 mm | 73.355535 mm | 47.080343 mm |
| Minus | Over | 11.730 mm | 73.988824 mm | 42.181827 mm |

The EFL changes by about 1.256 mm across the full published range, while the paraxial best-image location
moves by several millimeters. Relative to the sharp-state image gap, the Plus state shifts the paraxial image by
+4.815372 mm and the Minus state by −4.898516 mm if no refocusing is applied. This agrees with Cosina's instruction to
check focus after operating the control ring.

The patent's Plus and Minus state names are not the labels printed on the production control ring. Cosina's instruction
manual places Over to the left of center and Under to the right. The production-facing slider follows that order: −1 is
Over at U3 = 11.730 mm, 0 is Sharp at U3 = 8.730 mm, and +1 is Under at U3 = 5.730 mm. Thus Over maps to the patent's
Minus state and Under maps to its Plus state. All three source positions remain exact runtime states, Sharp remains the
base prescription and default, and the reversed three-point tuple mirrors the physical lens rather than the patent table
order.

The patent does not publish which physical barrel member is axially anchored or a compensating image-side trajectory.
No coupled refocus movement is therefore invented. With the physical stop held at the inferred sharp-state value, the
paraxial pupil model gives:

| State | Entrance-pupil semi-diameter | Modeled F-number | Exposure shift from Sharp |
|---|---:|---:|---:|
| Plus | 18.048302 mm | 2.014954 | +0.23399 EV |
| Sharp | 19.740456 mm | 1.858000 | 0.00000 EV |
| Minus | 21.782740 mm | 1.698336 | −0.25926 EV |

The computed shifts are within one-third EV, consistent with Cosina's operating instructions. The data keeps
`nominalFno` at the sharp-state modeled value of 1.858; it does not represent the control-dependent pupil change as a
second aperture control.

## Conditional Expressions

The selected embodiment satisfies all five patent conditions. Values below are independently recomputed from the
prescription rather than copied from the patent's rounded summary.

| Condition | Computed value | Requirement | Result |
|---|---:|---:|---|
| $(U-L)/f$ | 0.0817934 | $>0.07$ | Pass |
| $n_{d1}$ | 1.88300 | $>1.83$ | Pass |
| $n_{d3}$ | 1.88300 | $>1.83$ | Pass |
| $f_{Gr23}/f_{Gr1}$ | 7.7350413 | $>7.0$ | Pass |
| $(|f_{PU}-f|+|f_{NU}-f|)/f$ | 0.0171198 | $<0.1$ | Pass |

The definition of $U-L$ contains a source ambiguity. The prose describes an absolute G1-G2 interval, but Table 5 gives
$U-L=6.00$ mm while Table 8 lists actual U3 gaps of 5.730, 8.730, and 11.730 mm. No single listed gap equals 6.00 mm.
The only interpretation that reproduces the patent's printed 0.082 is the endpoint span
$|11.730-5.730|=6.000$ mm. The analysis retains that interpretation explicitly rather than silently rewriting the
source definition.

## Verification Summary

The final TypeScript arrays reproduce the patent at the sharp infinity state:

| Quantity | Computed | Patent | Difference |
|---|---:|---:|---:|
| EFL | 73.355535 mm | 73.36 mm | −0.004465 mm |
| BFL from surface 10 | 47.080343 mm | 47.08 mm | +0.000343 mm |
| Surface 1 to image track | 98.660000 mm | 98.66 mm | 0.000000 mm |

Sequential height/reduced-angle tracing and an independently assembled ABCD matrix give the same EFL and BFL to
machine precision, and the matrix determinant is 1.000000000. The sharp-state front principal plane is
+24.264633 mm from surface 1, and the rear principal plane is −26.275192 mm from surface 10. The track ratio
$TL/EFL=1.344956$ is greater than one, so the design is not telephoto under the strict track-length criterion;
$BFD/EFL=0.641810$ is below one, so it is not retrofocus. Surface-by-surface Petzval calculation using
$\phi/(n n')$ gives a signed sum of +0.002916318626 mm⁻¹, equivalent to −342.898060 mm under the $-1/\Sigma P$
convention.

The semi-diameters are modeling inferences because the patent omits clear apertures. They are 22.0 mm for G1, 17.0 mm
for G2, and 15.0 mm for G3, constrained by Cosina's optical section and ray-bundle checks. The physical stop
semi-diameter of 13.246083 mm is inferred from the sharp-state paraxial entrance pupil required by F/1.858, following
the LensVisualizer stop convention; it is not a patent-published dimension.

Across the checked Plus, Sharp, Minus, and close-focus states, the modeled geometry retains positive edge thickness. The
minimum edge thickness is 1.396706 mm, the maximum spherical rim angle is 35.1887°, and the minimum shared-gap clearance
margin is 2.220969 mm. No conic limit applies because every surface is spherical.

No prescription value was scaled, no aspheric coefficient transformation was required, and no patent radius, thickness,
index, Abbe number, focus spacing, or control spacing was corrected. The only numerical modeling inputs absent from the
source are the explicitly inferred clear apertures and stop radius. The active prescription requires no omitted plate
correction and contains no inactive optical plane.

## Sources

- Japan Patent Office, **JP 2026-120386 A**, “Optical Lens System,” published 2026-07-22, especially ¶0020–0022,
  ¶0047–0070, Tables 5–8, and Figs. 5–8.
- Cosina, [VOIGTLÄNDER PORTRAIT HELIAR 75mm F1.8 — Sony E mount](https://www.cosina.co.jp/voigtlander/en/e-mount/portrait-heliar-75mm-f1-8/).
- Cosina, [PORTRAIT HELIAR 75mm F1.8 E-mount instruction manual](https://www.cosina.co.jp/wp/wp-content/uploads/2025/06/E-75_18-ENG-V1_0.pdf),
  p. 5 (production Over / Under ring order).
- Cosina, [VOIGTLÄNDER PORTRAIT HELIAR 75mm F1.8 — Nikon Z mount](https://www.cosina.co.jp/voigtlander/en/z-mount/portrait-heliar-75mm-f1-8/).
- Cosina, [VOIGTLÄNDER PORTRAIT HELIAR 75mm F1.8 — Canon RF mount](https://www.cosina.co.jp/voigtlander/en/rf-mount-lenses/portrait-heliar-75mm-f1-8/).
- Authoritative catalog coordinates checked through OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA official optical-glass
  data; the companion glass audit records candidate residuals without assigning a production melt.
- Independent calculations and state-by-state results are recorded in the companion audit.
