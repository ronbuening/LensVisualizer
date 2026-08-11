## Patent Reference and Design Identification

**Patent:** JP1994-082698 A (特開平6-82698)
**Filed:** 1992-09-02
**Published:** 1994-03-25
**Inventor:** Yoshinobu Asakura
**Applicant:** Minolta Co., Ltd.
**Title:** Large-Aperture Wide-Angle Zoom Lens (大口径広角ズームレンズ)
**Embodiment analyzed:** Example 1

The analyzed prescription is Example 1 of JP1994-082698 A, assigned in this catalog to the
MINOLTA AF 28-70mm f/2.8 G. The patent does not identify that production lens by name, so the
production correlation is not manufacturer-confirmed. It is the fixed project correlation and rests
on convergent characteristics: Minolta is the applicant; the example is a large-aperture wide-angle
zoom; its published design states are 28.7, 50.0, and 68.3 mm at F/2.87; the prescription contains
16 elements in 11 air-separated groups; and it uses two aspherical surfaces. These design values are
kept separate from the marketed 28-70mm f/2.8 designation.

The patent describes a four-power-group zoom with negative, positive, negative, and positive groups
from object to image side. During zooming from the short- to long-focal-length end, the G1-G2 air
gap decreases, the G2-G3 gap increases, and the G3-G4 gap decreases while the image plane remains
fixed. At least G1, G2, and G4 are moved in the patent's stated zoom mechanism. The final data model
preserves those published gap changes and derives only the otherwise unpublished rear image spacing.

No uniform scaling is applied. Radii, thicknesses, focal states, and aspherical coefficients therefore
remain on the Example 1 dimensional scale. No sensor cover glass, filter, inactive dummy plane, or
mechanical surface is added to the numerical prescription.

## Optical Architecture

The lens is a four-power-group N-P-N-P wide-angle zoom. The final data file contains 16 physical
glass elements in 11 air-separated groups, with five cemented doublets. The power-group focal lengths
computed from the final prescription are approximately -40.000 mm for G1, +36.700 mm for G2,
-55.200 mm for G3, and +48.229 mm for G4. These are in-situ group powers calculated from each
complete group, not sums of the standalone element powers listed in the element descriptions below.

| Power group | Elements | Computed group EFL | Principal function in the zoom |
|---|---|---:|---|
| G1 (-) | L1-L5 | -40.000 mm | Negative front group establishing the wide-angle lead section |
| G2 (+) | L6-L9 | +36.700 mm | Positive moving group |
| G3 (-) | L10-L12 | -55.200 mm | Negative near-stationary group adjacent to the inferred stop |
| G4 (+) | L13-L16 | +48.229 mm | Positive rear group containing the second asphere |

The first group follows the sequence emphasized in the patent: a negative first lens, positive second
lens, negative third lens, and an overall-negative fourth lens block. Paragraph ¶0007 states that this
power distribution is used to balance the astigmatism and distortion that become difficult in a
negative-leading wide-angle zoom. In Example 1 the fourth block is the cemented L4-L5 pair; its
standalone air-to-air cemented focal length is -94.525 mm.

The three published inter-group spacings are reproduced exactly. The d15 spacing is split by the
modeled aperture stop because Figure 1 places `S` between G2 and G3 but does not specify its exact
axial station.

| Gap | 28.7 mm | 50.0 mm | 68.3 mm | Wide-to-tele trend |
|---|---:|---:|---:|---|
| G1-G2, d9 | 27.640 mm | 7.414 mm | 0.875 mm | decreases |
| Full G2-G3, d15 | 3.267 mm | 18.036 mm | 30.092 mm | increases |
| G3-G4, d20 | 15.094 mm | 7.436 mm | 1.075 mm | decreases |

With the paraxial image plane held fixed, the sampled states show G1 moving imageward at the middle
state and returning almost to its wide-end station at the long end, so G1 reverses direction. G2 and
G4 move progressively objectward, while G3 remains nearly stationary at the three tabulated states;
the residual G3 displacement is about one tenth of a millimeter and is consistent with the finite
precision of the published spacing table. This behavior agrees with the patent requirement that at
least G1, G2, and G4 move.

The wide-end state alone satisfies the project's strict retrofocus criterion because its calculated
36.968 mm back focal distance exceeds its 28.698 mm EFL. The 50.0 and 68.3 mm states do not satisfy
that criterion. None of the three states is a telephoto system under the project definition
`TL/EFL < 1`.

### Modeled aperture, image plane, and clear apertures

Figure 1 draws the stop `S` in the G2-G3 gap. The patent gives neither a numerical stop offset nor a
stop diameter. The data model therefore places the stop at the midpoint of the 3.267 mm wide-state
d15 gap and keeps it 1.6335 mm ahead of surface 16 as the zoom changes. This stop station is a
modeling inference, not a patent dimension. The authored wide-state stop semi-diameter is derived
from the Example 1 F/2.87 design aperture under the LensVisualizer pupil convention rather than
transcribed from the patent.

The patent also omits the image-plane spacing after surface 27. The data file uses independently
solved paraxial back focal distances of 36.968, 44.642, and 50.876 mm at the 28.7, 50.0, and 68.3 mm
states. These rear spacings are computed model quantities, not published prescription rows.

No patent semi-diameters are supplied. The authored clear semi-diameters are therefore model-derived
from the verified ray envelopes, the patent field angles and Figure 1 proportions, and the current
edge, slope, cross-gap, and rendering constraints. They should not be read as production mechanical
dimensions.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.84666, νd = 23.9. Glass: 847239 (vendor identity not source-defensible). Standalone air-to-air f = -80.098 mm.**

L1 is the first negative lens of G1 and supplies the negative-leading power characteristic of the
wide-angle architecture. Its relatively high index and low Abbe number allow substantial negative
refraction in a compact front element. The patent treats this first negative lens as part of the
specific N-P-N-negative-block sequence used to manage wide-angle off-axis aberrations (¶0007).

The quoted focal length is the isolated element focal length in air. Its contribution inside G1 is
modified by the finite separations and by the neighboring positive and negative elements; it should
not be equated with the -40.000 mm focal length of the complete first group.

### L2 — Biconvex Positive

**nd = 1.79952, νd = 42.2. Glass: 800422 (vendor identity not source-defensible). Standalone air-to-air f = +67.876 mm.**

L2 is the positive second lens required by the first-group architecture. It opposes part of the front
negative power without changing the overall negative sign of G1. This distribution permits the group
to obtain the wide-angle ray bending of a strong negative lead section without concentrating all of
the correction burden in a single negative element.

Its role here is identified from the prescription and the patent's stated first-group sequence rather
than from a separate element-specific aberration claim.

### L3 — Neg. Meniscus (1× Asph)

**nd = 1.74320, νd = 49.3. Glass: 743493 (vendor identity not source-defensible). Standalone air-to-air f = -66.207 mm.**

L3 is the third negative lens in G1. Its object-side surface, 5A, is the first aspherical surface in
the prescription. Paragraph ¶0008 states that an asphere in the first group is used to improve
aberrations that are difficult to correct with spherical surfaces alone, particularly wide-end coma,
astigmatism, and distortion.

The asphere therefore works in the portion of the system where off-axis ray heights are large. Its
negative standalone power remains distinct from the aspherical correction itself: the conic base is
spherical (`K = 0`), and the departure is supplied by the even polynomial terms described below.

### L4 — Biconcave Negative, cemented D1

**nd = 1.58313, νd = 59.4. Glass: 583594 (vendor identity not source-defensible). Standalone air-to-air f = -31.418 mm.**

L4 is the strongly negative member of the cemented D1 pair that completes G1. The patent states that
the fourth block of the first group is overall negative and preferably includes a cemented
construction (¶0007). Example 1 realizes that block with L4 and L5.

The large Abbe-number contrast between L4 and L5 is consistent with using opposed powers to control
first-order chromatic behavior while retaining a negative net block. No apochromatic or anomalous-
dispersion behavior is inferred because only d-line index and Abbe data are available.

### L5 — Positive Meniscus, cemented D1

**nd = 1.84666, νd = 23.9. Glass: 847239 (vendor identity not source-defensible). Standalone air-to-air f = +46.165 mm.**

L5 is the positive member cemented to L4. Although its isolated power is positive, the complete D1
stack has a verified air-to-air focal length of -94.525 mm. That cemented-stack value is a separate
quantity from both L5's standalone focal length and the in-situ focal length of G1.

The pair provides a compact way to combine strong opposed powers at a shared interface while keeping
the fourth block negative, as required by the patent's first-group construction.

### L6 — Negative Meniscus, cemented D2

**nd = 1.84666, νd = 23.9. Glass: 847239 (vendor identity not source-defensible). Standalone air-to-air f = -53.722 mm.**

L6 begins the positive second power group as the negative member of cemented doublet D2. Its negative
standalone power is more than offset by L7 in the cemented stack. The isolated D2 pair has a verified
net focal length of +103.478 mm.

This illustrates why individual element signs do not by themselves describe the behavior of a zoom
power group. G2 as a whole is substantially more positive, with a computed group focal length of
+36.700 mm after D2, D3, and their internal spacing are included.

### L7 — Biconvex Positive, cemented D2

**nd = 1.66755, νd = 41.9. Glass: 668419 (vendor identity not source-defensible). Standalone air-to-air f = +35.336 mm.**

L7 is the positive, stronger member of D2. Together with L6 it produces a positive cemented block
with much less net power than L7 alone, leaving the second doublet and the separation between the
blocks to determine the final G2 power.

The paired low- and moderate-dispersion coordinates provide an ordinary achromatizing degree of
freedom, but the patent does not provide the line-index information needed for a stronger spectral
claim.

### L8 — Biconvex Positive, cemented D3

**nd = 1.72916, νd = 54.7. Glass: 729547 (vendor identity not source-defensible). Standalone air-to-air f = +36.715 mm.**

L8 is the positive member of the second cemented pair in G2. Its positive power is only partly
cancelled by L9, so D3 remains distinctly positive. The isolated D3 stack has a verified air-to-air
focal length of +53.703 mm.

D2 and D3 therefore form two positive net cemented blocks whose finite separation yields the
+36.700 mm effective focal length of G2. That group power is the relevant quantity for the patent's
second conditional expression.

### L9 — Negative Meniscus, cemented D3

**nd = 1.84666, νd = 23.9. Glass: 847239 (vendor identity not source-defensible). Standalone air-to-air f = -111.605 mm.**

L9 is the negative member of D3. Its relatively weak isolated negative power compared with L8 leaves
the cemented block positive. The strong Abbe contrast between the two members provides another
chromatic balancing degree of freedom without reversing the sign of the block.

L9 also forms the rear surface of G2 immediately before the zoom-variable G2-G3 spacing, so its
axial relation to the inferred stop changes substantially across the zoom range.

### L10 — Biconcave Negative

**nd = 1.51728, νd = 69.6. Glass: 517696 (vendor identity not source-defensible). Standalone air-to-air f = -65.828 mm.**

L10 is the first element of the negative third power group. It supplies a large part of G3's negative
power before the weak-net D4 cemented pair. The high Abbe number distinguishes it from many of the
high-index, low-Abbe negative elements elsewhere in the prescription.

The data model places the inferred aperture stop 1.6335 mm ahead of L10 at the wide state and keeps
that stop-to-L10 separation fixed through zoom. The patent figure supports the stop's location in the
G2-G3 gap, but not this exact numerical offset.

### L11 — Negative Meniscus, cemented D4

**nd = 1.48749, νd = 70.2. Glass: 487702 (vendor identity not source-defensible). Standalone air-to-air f = -73.401 mm.**

L11 is the negative member of D4. Its low index and high Abbe number are paired against the much
higher-index, lower-Abbe positive L12. In isolation the two elements have substantial opposing
powers, but their cemented air-to-air stack is nearly power-neutral compared with either element.

The verified D4 focal length is -402.380 mm. That weak negative net power means D4 can redistribute
ray bending and chromatic correction within G3 without being the main source of the group's
-55.200 mm net power.

### L12 — Positive Meniscus, cemented D4

**nd = 1.84666, νd = 23.9. Glass: 847239 (vendor identity not source-defensible). Standalone air-to-air f = +87.602 mm.**

L12 is the positive member of D4. Its opposing power nearly cancels L11 in the cemented-stack
calculation. The residual D4 stack remains weakly negative, while the complete G3 stays materially
negative because L10 and the in-situ spacing interactions are also present.

The strong index and dispersion contrast across the cemented interface is a conventional means of
adding correction freedom. It is not evidence by itself of anomalous partial dispersion.

### L13 — Biconvex Positive (1× Asph)

**nd = 1.62230, νd = 53.2. Glass: 622532 (vendor identity not source-defensible). Standalone air-to-air f = +45.457 mm.**

L13 begins the positive fourth power group and carries the second aspherical surface, 21A, on its
object-side face. Paragraph ¶0008 assigns the rear-group asphere to correction of sagittal coma flare
and the spherical aberration that becomes particularly important toward the long-focal-length end.

Its strong positive standalone power makes L13 a principal converging component of G4. The asphere
modifies the peripheral ray behavior without changing the spherical-base conic constant, which is
`K = 0` in the data model.

### L14 — Biconvex Positive, cemented D5

**nd = 1.61800, νd = 63.4. Glass: 618634 (vendor identity not source-defensible). Standalone air-to-air f = +41.055 mm.**

L14 is the positive member of D5. It is paired with the lower-Abbe negative L15, producing a cemented
stack that remains positive. The verified air-to-air focal length of D5 is +66.400 mm.

Together with L13, D5 supplies the major positive power in G4. The final negative L16 then reduces and
redistributes that power before the image space.

### L15 — Negative Meniscus, cemented D5

**nd = 1.78472, νd = 25.7. Glass: 785257 (vendor identity not source-defensible). Standalone air-to-air f = -109.998 mm.**

L15 is the negative member of D5. Its isolated negative power is weaker than L14's positive power in
the cemented combination, leaving the stack positive. The marked Abbe-number contrast between the
two elements provides chromatic balancing within the positive rear group.

The stack value of +66.400 mm should not be confused with G4's +48.229 mm effective focal length,
which also includes L13, L16, and the internal air spacings.

### L16 — Negative Meniscus

**nd = 1.80518, νd = 25.4. Glass: 805254 (vendor identity not source-defensible). Standalone air-to-air f = -53.805 mm.**

L16 is the final element and a negative meniscus at the rear of the otherwise positive G4. It reduces
the converging power established by L13 and D5 and participates in setting the rear conjugate and
back-focal-distance behavior of the complete zoom.

The last-surface-to-image spacing is not given in the patent. Consequently, the data file does not
attribute a published mechanical back focus to L16; the rear distance is the independently solved
paraxial value at each zoom state.

## Glass Identification and Selection

The patent gives only refractive index at the d line and Abbe number. It does not identify glass
vendors or trade names and does not supply `nC`, `nF`, `ng`, or `dPgF`. The final data file therefore
uses neutral six-digit coordinate codes and explicitly marks vendor identity as not source-defensible.
A modern catalog glass that happens to reproduce the same `nd` and `νd` coordinates is not treated as
proof that Minolta used that named melt.

| Coordinate code | nd | νd | Elements |
|---|---:|---:|---|
| 847239 | 1.84666 | 23.9 | L1, L5, L6, L9, L12 |
| 800422 | 1.79952 | 42.2 | L2 |
| 743493 | 1.74320 | 49.3 | L3 |
| 583594 | 1.58313 | 59.4 | L4 |
| 668419 | 1.66755 | 41.9 | L7 |
| 729547 | 1.72916 | 54.7 | L8 |
| 517696 | 1.51728 | 69.6 | L10 |
| 487702 | 1.48749 | 70.2 | L11 |
| 622532 | 1.62230 | 53.2 | L13 |
| 618634 | 1.61800 | 63.4 | L14 |
| 785257 | 1.78472 | 25.7 | L15 |
| 805254 | 1.80518 | 25.4 | L16 |

The palette repeatedly combines high-index, low-Abbe elements with higher-Abbe partners in cemented
pairs. That pattern supports ordinary longitudinal and lateral color balancing, but the available
source data are insufficient to identify anomalous partial dispersion or to characterize the lens as
apochromatic. No stronger chromatic interpretation than an Abbe-based approximation is warranted unless independent
spectral data are added later.

## Focus Mechanism

The data file intentionally uses **NO_INTERNAL_RECONSTRUCTION**. JP1994-082698 A publishes the zoom
states at the design/infinity condition but does not publish an object-distance table, close-focus
gaps, magnification states, or an internal focusing law. The production minimum focus distance is
recorded as 0.85 m, but that external specification does not uniquely determine which internal
components move or by how much.

Accordingly, every authored focus pair in `var` has identical infinity and close values at each zoom
position. The model exposes the three published zoom states but does not synthesize a close-focus
prescription. No unit-focus, inner-focus, rear-focus, or floating-focus designation is assigned from
this numerical patent example alone.

## Aspherical Surfaces

Example 1 contains two aspherical surfaces: 5A on L3 in G1 and 21A on L13 in G4. The patent defines
sag as

$$
X(h)=\frac{h^2/R}{1+\sqrt{1-\varepsilon(h/R)^2}}+\sum A_n h^n.
$$

The project standard uses `1 + K` in the square-root term, so the conversion is
`K = ε - 1`. Example 1 gives `ε = 1.0` for both surfaces; therefore both are entered with
`K = 0`, a spherical conic base plus polynomial departure. No scale factor is applied, so the
published coefficients are used directly.

| Surface | Element | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 5A | L3 | 0 | -7.4030e-7 | -1.9554e-9 | +4.9649e-12 | -3.7607e-15 |
| 21A | L13 | 0 | -7.6831e-7 | -2.2930e-10 | +1.0078e-11 | -1.2843e-14 |

The patent publishes no nonzero terms above A10. The data file therefore has zero A12 and A14 slots.
At the model-derived authored semi-diameters, the verified departures from the corresponding base
spheres are -0.12721 mm at `h = 19.0 mm` for 5A and -0.01731 mm at `h = 13.2 mm` for 21A. Those
departures are diagnostics of the authored LensVisualizer apertures, not patent-published
aperture-height measurements.

The first asphere is placed in the negative front group, where the patent specifically associates it
with wide-end coma, astigmatism, and distortion correction. The second is placed at the front of the
positive rear group, where the patent associates it with sagittal coma flare and long-end spherical
aberration correction (¶0008). The patent does not identify the manufacturing process for either
surface, so no molded, polished, or hybrid-asphere construction is asserted.

## Conditional Expressions

The patent gives three conditions governing the relative powers of G1, G2, and G3. Using the final
data file's independently recomputed group focal lengths and the published 28.7 and 68.3 mm end
states gives values that reproduce the Example 1 tabulation to its stated precision.

| Condition | Patent range | Computed | Example 1 published |
|---|---|---:|---:|
| $|f_1|/\sqrt{f_W f_T}$ | 0.7 < value < 1.1 | 0.903462 | 0.903 |
| $f_2/\sqrt{f_W f_T}$ | 0.7 < value < 0.9 | 0.828924 | 0.829 |
| $f_1/f_3$ | 0.5 < value < 1.1 | 0.724637 | 0.725 |

Paragraphs ¶0010-¶0012 describe these limits as power-allocation constraints rather than arbitrary
fit parameters. The first limits the strength of the negative front group relative to the zoom
range; the second limits the positive second group, particularly with respect to long-end spherical
aberration and system length; and the third distributes negative power between G1 and G3. Example 1
lies comfortably inside all three stated intervals.

## Verification Summary

Independent reduced-angle y-ν tracing and an ABCD cross-check applied to the final TypeScript arrays
reproduce the three patent focal states. The computed back focal distances below are model-derived
because the patent does not tabulate the surface-27-to-image spacing.

| State | Patent focal length | Computed EFL | Computed BFD | Patent half-field |
|---|---:|---:|---:|---:|
| Wide | 28.7 mm | 28.69824 mm | 36.96765 mm | 38.00° |
| Mid | 50.0 mm | 49.99820 mm | 44.64184 mm | 23.10° |
| Tele | 68.3 mm | 68.29373 mm | 50.87551 mm | 17.18° |

Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.002285015 mm⁻¹ for the final
prescription. This is a computed first-order diagnostic, not a value printed in the patent.

The modeled semi-diameters satisfy the current edge-thickness, actual-rim-slope, conic-domain, and
shared-gap geometry checks used during data construction. Runtime-compatible chief rays at the three
published fields remain inside the authored clear apertures. A separate exact chief ray forced
through the geometric center of the inferred stop at the 38.00° wide field reaches surface 3 at a
height 0.05882 mm beyond the authored semi-diameter. Because neither the stop geometry nor the lens
clear apertures are published, this is a limitation of the chosen visualization model and must not be
interpreted as measured production-lens vignetting.

## Sources and References

- JP1994-082698 A (特開平6-82698), Minolta Co., Ltd., Example 1; especially ¶0007-¶0021,
  the Example 1 prescription table, Figure 1, and Figure 2.
- Michael Hohner, “Lens tech data for Minolta AF 28-70/2.8 G,” used as secondary archival
  corroboration for the production name, A-mount, 16/11 construction, 1993 release, order code
  2620-118, and 0.85 m minimum-focus specification. Imaging Resource separately reproduces
  Konica Minolta lens-literature wording for the production lens's constant f/2.8 maximum aperture.
  Neither source supersedes the patent for the numerical optical prescription.
