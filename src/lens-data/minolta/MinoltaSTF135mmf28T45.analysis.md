## Patent Reference and Design Identification

**Patent:** JP H11-231209 A (JP1999-231209)<br>
**Application Number:** JP H10-35859<br>
**Filed:** 1998-02-18<br>
**Published:** 1999-08-27<br>
**Inventor:** Yoshinobu Kudo<br>
**Applicant:** Minolta Co., Ltd.<br>
**Title:** 撮影レンズ系 (Photographic lens system)<br>
**Embodiment analyzed:** Example 1<br>
**Production lens:** MINOLTA AF 135mm f/2.8 [T4.5] STF

The prescription is Example 1 of JP H11-231209 A. The selected production correlation is the MINOLTA AF 135mm
f/2.8 [T4.5] STF, and that correlation is treated as fixed for this analysis. It is not presented as a manufacturer statement
that this patent example is the production prescription.

Several independent characteristics converge on that identification. The patent example specifies a 135.0 mm focal
length, FNO = 2.83, eight elements, a two-element absorbing apodization filter, a 21.6 mm image height, close-focus
magnification β = −0.25, and floating movement between the front and rear portions of the system (¶0012–¶0015,
¶0047–¶0048). Sony's later A-mount SAL135F28 manufacturer documentation describes the corresponding production lens as
135 mm f/2.8 [T4.5], 8 elements in 6 air-separated groups including a two-element APD group, 18° coverage on 35 mm
format, 0.87 m minimum focus, and 0.25× maximum magnification. The patent-to-product correlation therefore rests on
convergent optical and format characteristics rather than on a manufacturer patent citation.

The production and design numbers are kept separate. The marketed focal length is 135 mm and the marketed geometric
maximum aperture is f/2.8; the model computes an infinity effective focal length of 135.001536 mm and uses the patent's
FNO = 2.83 as the design aperture. The [T4.5] designation is a transmission rating from the manufacturer documentation,
not a value reconstructed from the patent absorption coefficient.

No uniform scale factor is applied. The patent example already represents the 135 mm design directly.

## Optical Architecture

The data contains eight glass elements in six air-separated physical groups. The patent, however, describes the optical
system at a higher functional level as a positive front group Gr1 and a positive rear group Gr2 separated by a large air
space that contains the aperture stop and the active two-element apodization filter. The data's six-group count and the
patent's Gr1/Gr2 terminology therefore describe different levels of grouping and are not contradictory.

Gr1 contains L1, the cemented L2/L3 pair, and L4. Its recomputed net power is +0.003703829 mm⁻¹. Within that positive
front assembly, the standalone powers alternate strongly: L1 is positive, L2 negative, L3 positive, and L4 negative.
The cemented L2/L3 pair remains positive as a unit, with net power +0.007792414 mm⁻¹. These figures describe the
standalone elements or the isolated cemented/group blocks; they should not be read as the contribution of any one member
to the complete lens after all separations are included.

The stop lies after Gr1 at the patent's AS plane. In the LensVisualizer data this plane is labeled `STO`; the patent's
`AS` means aperture stop, not aspherical surface. Example 1 is entirely spherical or plano. There are no conic constants
or aspheric polynomial coefficients.

Immediately behind the stop is the cemented apodization pair L5/L6. The pair is deliberately close to afocal but not
exactly power-free: its recomputed net power is −0.000266750 mm⁻¹, corresponding to an isolated group focal length of
about −3.75 m. This small residual negative power is central to the patent. The invention is expressly concerned with
maintaining high imaging performance when the practical apodization filter has non-zero power because the two glass
indices cannot be made exactly identical (¶0005–¶0010, ¶0015–¶0025).

Gr2 contains positive L7 followed by negative L8 and has recomputed net power +0.006710863 mm⁻¹. The complete
prescription gives EFL = 135.001536 mm at infinity. Under the project's strict architectural tests the lens is neither
telephoto nor retrofocus: first-surface-to-image length divided by EFL is 1.042041, while BFD/EFL is 0.346664.
Accordingly, no stronger classical family label is imposed beyond the patent's positive-front/positive-rear floating
architecture.

The patent does not publish clear semi-diameters for Example 1. The authored semi-diameters are therefore modeling
inferences, derived from full-field meridional ray envelopes at infinity and at the reconstructed close state and then
checked against edge thickness, rim slope, cross-gap intrusion, and off-axis containment. The stop axial position is
source-published, but its physical semi-diameter, 14.379064 mm, is derived so that the modeled entrance pupil reproduces
FNO = 2.83. No sensor cover, accessory filter, inactive dummy plane, or flare-cutter plane is present in the Example 1
prescription, so no omitted-plate air-equivalent correction is required.

## Element-by-Element Analysis

The focal length quoted on each element below is the standalone thick-element focal length in air from the final data
file. It is not an in-situ power attribution for the complete lens.

### L1 — Plano-Convex Positive

**nd = 1.60311, νd = 60.74. Glass: 603607 — crown class (vendor unresolved). f = +124.460 mm.**

L1 is the front positive collector. Its object-side surface is convex and its rear surface is plano. The latter point is
important because the numerical prescription, rather than an earlier descriptive shorthand, governs the element shape.
The positive standalone power begins the converging action of Gr1 before the more strongly differentiated cemented pair.

The patent does not identify a glass manufacturer. The data therefore retains a six-digit coordinate class rather than
assigning a vendor name from a catalog coincidence.

### L2/L3 — Cemented Negative/Positive Pair D1

**L2: nd = 1.72342, νd = 37.99. Glass: 723380 — dense barium-flint class (vendor unresolved). f = −144.947 mm.**<br>
**L3: nd = 1.51680, νd = 64.20. Glass: 517642 — crown class (vendor unresolved). f = +64.179 mm.**

L2 is a negative meniscus cemented directly to the positive meniscus L3. The two individual standalone powers are
opposite in sign, while the cemented pair has a positive net power of +0.007792414 mm⁻¹, equivalent to approximately
+128.330 mm when the cemented pair is considered by itself in air.

The substantial νd difference between L2 and L3 is consistent with ordinary achromatic balancing in a cemented pair,
but the patent provides only d-line index and Abbe number. No anomalous-partial-dispersion or apochromatic claim follows
from these coordinates alone. Within Gr1, the pair supplies positive net convergence while retaining a high-index,
lower-Abbe negative member for correction freedom.

### L4 — Negative Meniscus

**nd = 1.61293, νd = 36.96. Glass: 613370 — flint class (vendor unresolved). f = −52.313 mm.**

L4 is the rear negative member of Gr1 and sits immediately before the focus-sensitive inter-group spacing. Its
standalone negative power is stronger in magnitude than either L1 or L2 individually, yet the complete Gr1 remains
positive. This is a direct example of why standalone element power and assembled group power must be distinguished.

Its position adjacent to the variable gap makes the ray geometry through L4 sensitive to the floating motion. The
patent does not assign a single aberration term to L4, so its detailed correction role is best described as part of the
balanced positive Gr1 rather than as a uniquely identified coma, spherical-aberration, or field-curvature corrector.

### L5/L6 — Cemented Apodization Filter AF

**L5: nd = 1.50690, νd = 58.94. Glass: 507589 — bulk absorbing ND glass (catalog unresolved; patent α=0.55). f = −40.898 mm.**<br>
**L6: nd = 1.50137, νd = 56.46. Glass: 501565 — crown class (K10-family equivalent; vendor unresolved). f = +41.349 mm.**

L5 is the absorbing plano-concave member of the apodization filter. The patent assigns the absorbing material
α = 0.55 in Example 1. Because the concave interface makes the absorbing member progressively thicker away from the
axis, the filter imposes greater attenuation toward the pupil rim. The patent develops this behavior from exponential
absorption and shows that a plano-concave absorbing element can approach a Gaussian radial transmittance distribution
(¶0036–¶0042).

L6 is the complementary plano-convex compensator cemented to L5. The two outer faces of the pair are plano, while the
shared curved interface has R = +20.731 mm. If the two refractive indices were identical, that cemented interface would
introduce no refraction and the assembly could be treated as a purely transmitting apodizer. In Example 1 the indices
differ by 0.00553, so the interface retains a small negative net optical power. The patent explicitly treats this
non-zero power as a practical design constraint rather than assuming an ideal zero-power filter (¶0005–¶0010,
¶0018–¶0021).

The individual L5 and L6 focal lengths are about −40.9 mm and +41.3 mm, respectively, but those large opposing values
nearly cancel when the members are cemented. Their actual cemented net power is only −0.000266750 mm⁻¹. Reporting the
pair as simply a weak negative lens without the opposing standalone powers would conceal the mechanism the patent is
addressing.

The [T4.5] product marking should not be inferred directly from α = 0.55. The patent supplies the absorbing-element
coefficient and radial-thickness geometry, whereas the manufacturer T-number includes the practical transmission of the
complete lens. The data therefore keeps geometric aperture and marketed transmission designation separate.

### L7 — Biconvex Positive

**nd = 1.58913, νd = 61.11. Glass: S-BAL35 (OHARA catalog equivalent; patent 589611; production supplier unspecified). f = +55.324 mm.**

L7 is the strong positive front element of Gr2. Its biconvex form restores convergence after the long central spacing
and weakly negative apodization pair. Together with L8 it forms a positive rear functional group whose isolated net
power is +0.006710863 mm⁻¹.

The patent does not identify a special-dispersion material for L7. The data therefore retains the vendor-neutral crown
classification and makes no APO or anomalous-dispersion attribution.

### L8 — Negative Meniscus

**nd = 1.62041, νd = 60.29. Glass: 620603 — dense-crown class (vendor unresolved). f = −70.461 mm.**

L8 is the final negative meniscus. Its standalone negative power moderates the strong positive L7, leaving Gr2 positive
as a functional unit. The rear surface is very weakly curved relative to the front surface, so the element's negative
power is dominated by the more strongly curved object-side surface.

L7 and L8 have similar νd values, so the rear pair should not be described as a conventional high-dispersion/low-
dispersion achromat. Their combination is principally a power-and-form arrangement in the verified data; any more
specific chromatic interpretation would require line-index or validated Sellmeier evidence not present in the patent.

## Glass Identification and Selection

The patent publishes nd and νd coordinates but no glass manufacturer or trade names. The final data therefore uses
vendor-neutral six-digit classes, including `507589` for the absorbing ND element. That coordinate-leading label keeps
L5 eligible for a future catalog upgrade without turning a loose public-catalog similarity into an unsupported claim
about Minolta's actual glass source.

| Element | nd | νd | Data-file glass annotation | Use in the design |
|---|---:|---:|---|---|
| L1 | 1.60311 | 60.74 | 603607 — crown class (vendor unresolved) | Front positive collector |
| L2 | 1.72342 | 37.99 | 723380 — dense barium-flint class (vendor unresolved) | Negative member of D1 |
| L3 | 1.51680 | 64.20 | 517642 — crown class (vendor unresolved) | Positive member of D1 |
| L4 | 1.61293 | 36.96 | 613370 — flint class (vendor unresolved) | Rear negative member of Gr1 |
| L5 | 1.50690 | 58.94 | 507589 — bulk absorbing ND glass (catalog unresolved) | Radially absorbing APD member |
| L6 | 1.50137 | 56.46 | 501565 — crown class (K10-family equivalent; vendor unresolved) | APD index compensator |
| L7 | 1.58913 | 61.11 | S-BAL35 catalog equivalent (patent 589611) | Positive member of Gr2 |
| L8 | 1.62041 | 60.29 | 620603 — dense-crown class (vendor unresolved) | Negative rear member |

The most explicit material-selection requirement in the patent concerns L5/L6 rather than a named catalog glass. The
compensator should have an index close to that of the absorbing ND glass so the cemented interface contributes as little
power as practical; Example 1 uses |1.50690 − 1.50137| = 0.00553, satisfying condition (2). The patent also notes that
large Abbe-number differences between the two apodization members would create analogous correction difficulty
(¶0018–¶0019). No retained transparent-glass catalog curve matches L5's combined `1.50690 / 58.94` coordinates
within the project's compatibility limits. The runtime therefore uses those source coordinates through its Abbe
dispersion model rather than substituting the visibly different L6/K10-family curve.

No element in the final data carries nC, nF, ng, or dPgF. There is therefore no basis here for an APO designation,
an anomalous-partial-dispersion claim, or a secondary-spectrum analysis beyond what ordinary nd/νd coordinates can
support.

## Focus Mechanism

The patent uses floating movement. From infinity toward the β = −0.25 state, the air spacing after L4 increases from
14.397 mm to 18.198 mm. The patent also gives a rounded motion ratio M1/M2 = 1.11/1 but does not publish an exact close
back focal distance. The final data therefore retains the published internal spacing and uses a constrained
reconstruction for the missing image-side spacing.

| Quantity | Infinity | Close state | Provenance |
|---|---:|---:|---|
| L4-to-stop gap `d7` | 14.397 mm | 18.198 mm | Patent Example 1 |
| r15-to-image BFD | 46.800156 mm | 80.007294 mm | Computed / constrained reconstruction |
| Magnification β | 0 | −0.25 | Patent close-state value |
| Image-plane-to-subject distance | ∞ | 0.871729 m | Constrained reconstruction |

The close BFD is solved from the final close-state internal prescription and β = −0.25, not from the rounded 1.11
movement ratio. The solution implies 33.207139 mm of objectward travel for the rear block and 37.008139 mm for Gr1,
producing a motion ratio of 1.114463:1. That agrees with the patent's rounded 1.11:1 and therefore serves as an
independent consistency check rather than an exact input constraint.

The patent figures and description place the stop and apodization assembly with the rear moving portion. The model stores
the changing relative geometry as `d7` plus the reconstructed back-focus gap; it does not invent additional independent
internal motions. Sony's manufacturer specification defines minimum focus from the image sensor to the subject and gives
0.87 m and 0.25×. The reconstructed 0.871729 m and the source β = −0.25 agree with those rounded production values after
using the same reference planes. The public `closeFocusM` metadata therefore uses the manufacturer-published 0.87 m,
while the optical close state retains the 0.871729 m constrained reconstruction.

Using the infinity-derived physical stop, the paraxial close-state effective f-number is 3.9020. Patent Fig. 2 prints
FNO = 3.94 for its close state. The small difference is consistent with the patent's rounded presentation and the fact
that the physical stop diameter is not tabulated and must be derived.

## Apodization Mechanism

The distinguishing optical mechanism is not a soft-focus aberration setting but a radial transmission profile. The
absorbing L5 member becomes thicker toward the pupil perimeter, so its transmittance falls with ray height. The patent
uses exponential absorption to show how this thickness profile can approach a Gaussian radial distribution; it then
relates that pupil weighting to a defocused point-spread distribution with reduced high-frequency oscillation and less
false-resolution behavior than a uniformly transmitting pupil (¶0026–¶0042).

The data records the patent's `α = 0.55 mm⁻¹` as L5's Beer-Lambert intensity absorption coefficient. LensVisualizer
accumulates the exact three-dimensional path length through L5 for each ray and uses the resulting transmission to
weight bokeh density and relative illumination. The geometric f/2.83 entrance pupil remains separate from that energy
weighting, and the marketed T/4.5 value is still not inferred from the patent coefficient alone.

Example 1 expressly identifies L5 as ND glass whose absorption occurs through its bulk. It is not modeled as a clear
glass lens with an ND coating. Paragraph 45 discusses a deposited absorber on a transparent plate as a different way to
construct an apodizer, then notes the phase, scatter, and reflection problems of that alternative. Even without a named
catalog melt, L5 is not chromatically constant: the authored `nd` and `νd` produce the same Abbe-derived dispersion
fallback used by other unresolved optical glasses. What remains unresolved is the higher-order Sellmeier curve and
production melt identity, not whether the element disperses light.

For the axial ray, the path through L5 is its 0.300 mm center thickness, giving
`I/I₀ = exp(-0.55 × 0.300) = 0.8478937041`. Oblique rays use the actual three-dimensional distance between their
surface-9 and surface-10 hits rather than dividing the axial thickness by a paraxial cosine approximation. This makes
the weighting reusable at infinity and throughout the reconstructed floating-focus range.

The runtime keeps three related quantities deliberately separate. Aperture survival remains geometric; an unvignetted
ray may still have transmission below one. Bokeh image-plane points multiply their equal-area pupil weights by the
traced intensity, while the pupil-footprint inset retains unattenuated weights so it continues to describe mechanical
clipping and pupil shift. Relative illumination sums surviving intensity before applying `cos⁴` and normalizing to the
on-axis value. The bokeh best-focus solve is also intensity-weighted, so strongly attenuated marginal rays do not exert
the same influence as brighter rays.

These calculations are geometric-radiometric rather than diffraction simulations. They improve pupil weighting,
defocused point density, and relative illumination, but do not reconstruct the full wave-optical PSF, wavelength-
dependent ND response, coating losses, scatter, or the marketed T/4.5 transmission. If all sampled intensity reaches
zero numerically, the analysis returns an empty result rather than non-finite centroid or blur metrics.

The compensating L6 member allows the absorbing profile to be incorporated without requiring L5 to act alone as a
strong negative lens. Because the L5/L6 indices are close but not identical, the filter is not perfectly afocal. The
surrounding Gr1/Gr2 prescription is consequently designed around the actual powered filter, which is the central problem
stated by the patent.

The manufacturer documentation describes the production APD element as being near the aperture and identifies the
wide-open lens as f/2.8 with transmission T/4.5. This production statement supports the product identity and mechanism;
it does not replace the patent prescription or turn T/4.5 into a computed design parameter.

The production lens also has a nine-blade automatic diaphragm and a separate ten-blade manual stepless diaphragm. The
single `apertureBlades` field records the nine-blade automatic aperture used by the ordinary viewer state; the alternate
manual diaphragm is documented here because the current schema cannot switch blade mechanisms independently.

## Conditional Expressions

The patent imposes four conditions relevant to Example 1. Values below are recomputed from the final data arrays rather
than copied from the rounded results printed in the patent.

| Condition | Required interval | Recomputed Example 1 value |
|---|---:|---:|
| (1) `|φF/φR| · |φAF/φT|` | `0.0001 < x < 0.5` | 0.019875409 |
| (2) `|nND − nB|` | `0.0001 < x < 0.05` | 0.005530000 |
| (3) `|φAF/φT|` | `0.00001 < x < 0.5` | 0.036011697 |
| (4) `(a + tAF + b) / Σd` | `0.1 < x < 0.8` | 0.455670718 |

Conditions (1) and (3) limit the apodization filter's residual power relative to the front, rear, and total system powers.
Condition (2) directly constrains the refractive-index mismatch of the two apodization members. Condition (4) governs the
fraction of the lens's internal axial length occupied by the region around the filter. All four conditions pass.

For condition (4), the recomputation uses the individual Example 1 spacings, whose sum is 93.877 mm. The patent summary
prints Σd = 93.86 mm, a 0.017 mm arithmetic discrepancy. No prescription row is altered to force agreement with that
summary. The separate sum `a + tAF + b` is 42.777 mm and correctly rounds to the patent's printed 42.78 mm.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD-matrix calculation applied to the final data arrays give
EFL = 135.001536 mm and infinity BFD = 46.800156 mm. The front functional group power, apodization-pair power, and rear
functional group power reproduce the patent's rounded values of +0.00370, −0.000267, and +0.00671 mm⁻¹, respectively.

The physical stop diameter is not a patent datum. It is derived from the modeled EFL and FNO = 2.83 as 28.758127 mm.
The corresponding entrance-pupil diameter is 47.703723 mm. These are modeling results used to make the prescription
self-consistent, not transcribed source values.

The public exact-trace regression for the axial ray reproduces `0.8478937041`, and an oblique-ray regression checks the
same Beer–Lambert calculation against the measured three-dimensional L5 hit-to-hit chord. Transparent-lens and no-alpha
controls retain unit transmission. Bokeh tests separately verify photometric weighting, absorption-aware best focus,
mechanical-pupil independence, and the zero-energy guard; vignetting tests verify that geometric transmission remains
unchanged while relative illumination responds to the apodizer.

Surface-by-surface Petzval summation using φ/(n·n′) gives +0.000917680 mm⁻¹, corresponding under the audit convention
`RP = −1/ΣP` to −1089.705 mm. This is a computed paraxial diagnostic, not a patent claim about best-focus field
curvature.

The authored semi-diameters pass the available independent geometry checks at both defined focus states. The tightest
non-stop ray clearance is 0.286169 mm at surface 5, the maximum authored spherical rim angle is 63.5321°, and the
closest cross-gap case remains within the current 90% intrusion rule. These checks validate the model geometry but do not
convert inferred clear apertures into source-published dimensions.

No aspherical surface, folded path, cover plate, dummy optical plane, or uniform scaling transformation is used. Because
there are no aspheres, no conic-convention or coefficient-scaling transformation applies.

## Sources

1. JP H11-231209 A (JP1999-231209), Minolta Co., Ltd., Yoshinobu Kudo, Example 1; especially ¶0005–¶0025,
   ¶0026–¶0048 and Figs. 1–4, 9–11.
2. Sony, **SAL135F28 Specifications**, official A-mount lens support page: 135 mm, f/2.8, 35 mm full-frame, 18°,
   0.25×, 6 groups / 8 elements including the two-element APD group.
   https://www.sony.com/electronics/support/lenses-a-mount-lenses/sal135f28/specifications
3. Sony, **SAL135F28 Operating Instructions**, official manufacturer manual: manual focus, f/2.8 [T4.5], 0.87 m
   minimum focus, definition of minimum focus from image sensor to subject, and description of the apodization element.
   https://www.sony.com/electronics/support/res/manuals/2685/26851501M.pdf
