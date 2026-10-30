## Patent Reference and Design Identification

**Patent:** US 2011/0090576 A1\
**Application Number:** 12/904,727\
**Priority:** JP 2009-239163, October 16, 2009\
**Filed:** October 14, 2010\
**Published:** April 21, 2011\
**Inventor:** Shigenobu Sugita\
**Assignee:** Canon Inc.\
**Title:** _Optical System and Optical Apparatus Having the Same_\
**Example details:** Second Numerical Embodiment / normalized Numerical Embodiment 2; PDF page 10, Figures 3–4 on PDF page 3

The prescription is the patent's Second Numerical Embodiment, treated as the selected production correlation for the
CANON EF 400mm f/2.8 L IS II USM. The patent does not identify a commercial lens by product name, so the correlation is
not manufacturer confirmation. It is instead supported by several convergent features:

1. The patent gives a focal length of 392.15 mm, F-number 2.90, half field of 3.16°, and image height of 21.64 mm.
   These
   are consistent with a nominal 400 mm f/2.8 lens for the 135-format EF system without applying a scale factor.
2. The active Example-2 model contains 15 refractive elements in 11 air-separated groups. The patent also shows a
   separate plane glass block `G`, described as an optical filter or faceplate and excluded from the rear lens unit.
   Counting that block gives 16 elements in 12 groups, numerically matching Canon's published 16-element/12-group
   construction. This count agreement is correlation evidence rather than proof that Canon's published count maps `G`
   one-for-one to the patent block.
3. The patent's two Gp1 positive elements are L12 and L14, each with `nd = 1.43387` and `νd = 95.1`. Canon states that
   the production EF 400mm f/2.8L IS II USM uses two fluorite elements, and Canon's published block diagram places the
   fluorite pair in corresponding front-unit positions. The data file therefore identifies L12 and L14 as CaF2
   fluorite by production correlation, not because the patent names CaF2 for those numerical rows.
4. The patent specifies imageward inner focusing by cemented group L16 and transverse stabilization by cemented L22
   together with negative L23. Canon's production documentation identifies an optical IS unit in the same general rear
   region and gives a closest focusing distance of 2.7 m.
5. US 2011/0090576 A1 was published in April 2011; Canon lists the EF 400mm f/2.8L IS II USM as marketed in August 2011.

The prescription is not scaled. The patent focal length remains 392.15 mm, while the final authored arrays compute an
EFL of 392.260742 mm. The production name remains the marketed 400 mm. Likewise, the data keeps the marketed f/2.8
separate from the patent/model design value `nominalFno = 2.90`.

## Optical Architecture

Example 2 is a fixed-focal-length, all-spherical telephoto. The front unit `LF` spans L11 through the cemented L16 focus
group, followed by the aperture stop, and the rear unit `LR` spans L21 through the terminal L25 cemented pair. The
active LensVisualizer model therefore contains 15 elements in 11 groups, with no zoom motion and no aspherical
surfaces.

The telephoto classification is quantitative rather than stylistic: the patent gives an entire optical length of
372.00 mm and focal length of 392.15 mm, so `TL/EFL = 0.948617 < 1`. The same design is not retrofocus; its published
70.72 mm back focus is much shorter than its focal length.

The front unit is strongly positive in isolation, with a computed EFL of +425.983 mm. The rear unit is only weakly
negative in isolation, at -1520.434 mm, while the complete active system is +392.261 mm. These isolated unit powers are
not interchangeable with in-situ contribution: the rear unit operates in the converging beam created by the front unit,
and the complete system power depends on the unit separation as well as the individual powers.

The internal cemented groups show the same distinction. L16 contains standalone members of +235.806 mm and
-104.406 mm, yet the cemented pair is -190.853 mm in isolation. L21 is +138.534 mm as a cemented pair, whereas L22 is
-157.962 mm. The terminal L25 elements are individually strong and opposite in sign (+46.730 mm and -46.187 mm), but
their cemented combination is only weakly positive, with an isolated EFL of about +1272.239 mm. This near-cancellation
is important when interpreting the pair: its patent significance is primarily chromatic and off-axis correction rather
than large net paraxial power.

The patent's row-14 aperture stop is retained at the published axial station. Its source table gives an "effective
diameter" of 48.31 mm. That single column does not independently establish a physical iris radius. The existing
derived/paraxial stop semi-diameter of 23.251414 mm remains, reproducing the paraxial f/2.90 convention. The real
aimed iris-rim working f-number at infinity is 3.006744, 3.680818% above 2.90; this is a different criterion from the
beam-clearance aperture census, which passes at 2.900000. Neither convention alone proves a physical iris correction.

The separate rear glass block `G` is drawn as a plane-parallel plate from Second Numerical Embodiment rows 28–29
(PDF page 10 / printed page 5): 2.2 mm thick, nd 1.51633, νd 64.14, 15.00 mm behind surface 27. Both rows print
**36.00 mm under “Effective diameter”**, so the current clear semi-diameter is its 18.00 mm half-diameter. The prior
21.5 mm construction estimate is retired. Five additional rays in the 193-sample infinity corner pupil now clip at
G's front face: 136 samples pass versus 141 with the old cap. The source cap, existing off-axis vignetting and retained
near-focus reconstruction limitations remain visible; the cap is not enlarged to restore the earlier transmission.

Paragraph 0021 (PDF pages 6–7) describes G as an optical-filter/faceplate glass block outside rear unit LR and defines
back focus from final active surface `Re` to IP **with G absent**. The retained 54.269129 mm air gap after G is derived
from `70.72 − 15.00 − 2.2/1.51633`; it is not a printed row-29 distance. G's physical 2.2 mm thickness is traced as
written. The complete authored track is 371.999129 mm, approximately the source `Lt = 372.00 mm`, rather than a
plate-omitted model. The drawn lens-filter configuration and its association with the marketed count are qualified
production correlation. No additional camera stack is invented.

Native Figure 3 draws the plain rectangular G blank at approximately 31 mm outer half-height when calibrated by the
300.53 mm first-vertex-to-Re track (about 3.83 px/mm, practical reading uncertainty ±0.8 mm). It publishes no separate
clear-cap/opaque-land junction on either flat face. That un-dimensioned outer blank is not promoted to optical clear
aperture, and no speculative flat-face `rimExtensionSd` is authored. Its taller outline remains a disclosed drawing
limitation. The unchanged active-15 geometry/glass review is reused from **2026-08-19**; the G addition is dated
**2026-10-04**. Only the scoped source/G/current-configuration checks described here are dated **2026-10-30**.

## Element-by-Element Analysis

### L11 — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unresolved; multiple catalog equivalents). f = +336.865 mm.**

L11 is the front protective/collector positive. The patent explains that the anomalous-dispersion front positives are
made from comparatively damage-prone material, so a more durable positive lens is placed ahead of them (¶0052). In the
final model L11 supplies modest positive power while keeping the two Gp1 elements behind the exposed first surface.

### L12 / Gp1 — Biconvex Positive

**nd = 1.43387, νd = 95.1. Glass: CaF2 fluorite (Canon production-correlation inference; patent Gp1 coordinates). f = +191.648 mm.**

L12 is the first Gp1 element. The patent places Gp1 where the on-axis ray height is large and assigns it anomalous
partial dispersion so that longitudinal chromatic aberration can be corrected without forcing the front unit to become
longer (¶0028–¶0031). Its published `dPgF` value is +0.0534. The CaF2 name is a production-correlation inference
based on
Canon's two-fluorite specification and the numerical coordinates, not a vendor or chemistry statement made by the
patent row itself.

### L13 — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: 835427 class (vendor unresolved; multiple catalog equivalents). f = -136.861 mm.**

L13 supplies substantial negative standalone power between the two Gp1 positives. The patent's front-unit description
places it directly after L12 (¶0051). In the modeled power balance it counteracts part of the strong positive collection
from the Gp1 lenses while preserving the telephoto front-unit architecture.

### L14 / Gp1 — Biconvex Positive

**nd = 1.43387, νd = 95.1. Glass: CaF2 fluorite (Canon production-correlation inference; patent Gp1 coordinates). f = +194.350 mm.**

L14 is the second Gp1 positive and repeats the L12 material coordinates and `dPgF = +0.0534`. The patent explicitly
states that L12 and L14 provide longitudinal chromatic correction (¶0051). Their separated placement distributes the
low-dispersion positive power across the front unit instead of concentrating it in a single element.

### L15 — Negative Meniscus

**nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unresolved; multiple catalog equivalents). f = -838.195 mm.**

L15 is a weak negative meniscus immediately ahead of the focusing doublet. Its standalone focal length is much longer
in magnitude than those of the principal front collectors, so its role is secondary power balancing and beam shaping
rather than dominant focal power.

### L16 positive — Biconvex Positive

**nd = 1.80518, νd = 25.4. Glass: 805254 class (vendor unresolved; multiple catalog equivalents). f = +235.806 mm.**

This is the positive member of the cemented L16 inner-focus group. It is strongly dispersive compared with the front
Gp1 lenses and is paired directly with L16 negative. Its standalone positive focal length should not be read as the
power of the focusing group as a whole.

### L16 negative — Biconcave Negative

**nd = 1.80400, νd = 46.6. Glass: 804466 class (vendor unresolved; multiple catalog equivalents). f = -104.406 mm.**

The negative member dominates the isolated power of the cemented L16 pair, producing a net group EFL of -190.853 mm.
The patent states that this cemented group moves toward the image side when focusing from infinity toward close distance
(¶0052). Its motion, rather than a change in the front collector group, is the focus mechanism represented in the data.

### L21 negative — Negative Meniscus

**nd = 1.72825, νd = 28.5. Glass: 728285 class (vendor unresolved; multiple catalog equivalents). f = -64.699 mm.**

L21 begins the rear unit as a cemented negative-positive pair. The negative first member has strong standalone power,
but it is followed immediately by a stronger positive partner.

### L21 positive — Biconvex Positive

**nd = 1.70154, νd = 41.2. Glass: 702412 class (vendor unresolved; multiple catalog equivalents). f = +44.723 mm.**

The positive member reverses the sign of the L21 pair's net isolated power: the cemented doublet is +138.534 mm even
though its first element is strongly negative. This is a useful example of why standalone element focal length and
cemented-group power must be kept separate.

### L22 positive — Biconvex Positive

**nd = 1.84666, νd = 23.8. Glass: 847238 class (vendor unresolved; multiple catalog equivalents). f = +39.796 mm.**

L22 positive is the first member of the cemented stabilization doublet. Its high index and low Abbe number give it
strong positive standalone power in a compact rear-unit element.

### L22 negative — Biconcave Negative

**nd = 1.80610, νd = 40.9. Glass: 806409 class (vendor unresolved; multiple catalog equivalents). f = -29.264 mm.**

The negative partner more than offsets the positive member, leaving cemented L22 at -157.962 mm in isolation. The
patent states that L22 moves transversely together with L23 for vibration compensation (¶0055). The data therefore does
not represent this stabilization as an axial focus spacing.

### L23 — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: 835427 class (vendor unresolved; multiple catalog equivalents). f = -50.660 mm.**

L23 is the second member of the stabilization unit in the mechanical sense, although it is air-spaced from cemented
L22. Combined as an isolated L22+L23 optical unit, the group is negative at -39.356 mm. The patent specifies only
transverse movement; it does not publish a stabilization decenter magnitude in the selected numerical example.

### L24 — Biconvex Positive

**nd = 1.64769, νd = 33.8. Glass: 648338 class (vendor unresolved; multiple catalog equivalents). f = +71.989 mm.**

L24 restores positive power ahead of the terminal chromatic-correction pair. Its position places it between the
transverse IS unit and L25, helping transfer the converging beam into the final pair without making the terminal pair
responsible for large net power.

### L25 positive / Gp2 — Biconvex Positive

**nd = 1.65412, νd = 39.7. Glass: 654397 anomalous-dispersion class (vendor unresolved; multiple catalog equivalents). f = +46.730 mm.**

This is the patent's Gp2 positive. It satisfies the selected material conditions with `dPgF = -0.0033` and is placed
near the image side of the rear unit. The patent uses the Gp2 material as a complementary partner to Gn1 in the terminal
cemented pair (¶0042–¶0050). The source also discusses unusual oxide chemistry for these special materials; the data
file does not use that chemistry to assert a public catalog-glass identity.

### L25 negative / Gn1 — Biconcave Negative

**nd = 1.80810, νd = 22.8. Glass: 808228 anomalous high-dispersion class (vendor unresolved; multiple catalog equivalents). f = -46.187 mm.**

Gn1 is the high-index, high-dispersion anomalous-partial-dispersion negative lens emphasized by the patent. Its
published `dPgF` is +0.0251. The patent places this material in the rear unit where on-axis ray height is small but
off-axis principal-ray height is large, specifically to improve lateral chromatic aberration, image-surface curvature,
and astigmatism correction (¶0027, ¶0033–¶0037). The nearly equal and opposite standalone powers of Gp2 and Gn1 leave
the cemented L25 pair only weakly positive in paraxial power.

### G — Plane-Parallel Filter / Faceplate Block

**nd = 1.51633, νd = 64.14. Glass: 516641 class, vendor unresolved; S-BSL7 is a qualified spectral proxy.**

The original row 28 directly prints θgF 0.5352 and X −0.0007. Both flat faces, the 2.2 mm physical thickness,
15.00 mm leading air gap and 36.00 mm effective diameter are source values. The index/Abbe pair and partial-dispersion
value are retained. No source supplier, melt, cement, coating or historical chemistry is established. G has no
source APD designation; publishing a partial-dispersion value alone does not make it an anomalous material.

## Glass Identification and Selection

The numerical example publishes `nd`, `νd`, `θgF`, and the deviation `X = θgF - (0.6438 - 0.001682νd)` for all
16 modeled media, including G. Paragraph 0057 (PDF page 9 / printed page 4) explicitly assigns prescription nd/νd
to the d-line. Paragraph 0022 (PDF page 7 / printed page 2) defines wavelengths g 435.8 nm, F 486.1 nm, d 587.6 nm
and C 656.3 nm, with `νd = (Nd − 1)/(NF − NC)` and `θgF = (Ng − NF)/(NF − NC)`. The final data
stores the patent's tabulated `X` directly as `dPgF`. The patent does not publish absolute `nC`, `nF`, or `ng` for these
glasses, and the numerical coordinates alone do not establish a unique glass vendor. The data therefore omits absolute
line indices rather than synthesizing them from an unproven catalog identity.

| Elements           |      nd |    νd |    dPgF | Data-file glass identification                                                           |
| ------------------ | ------: | ----: | ------: | ---------------------------------------------------------------------------------------- |
| L11, L15           | 1.48749 |  70.2 | +0.0043 | 487702 class (vendor unresolved; multiple catalog equivalents)                           |
| L12, L14           | 1.43387 |  95.1 | +0.0534 | CaF2 fluorite — Canon production-correlation inference                                   |
| L13, L23           | 1.83481 |  42.7 | -0.0083 | 835427 class (vendor unresolved; multiple catalog equivalents)                           |
| L16 positive       | 1.80518 |  25.4 | +0.0150 | 805254 class (vendor unresolved; multiple catalog equivalents)                           |
| L16 negative       | 1.80400 |  46.6 | -0.0083 | 804466 class (vendor unresolved; multiple catalog equivalents)                           |
| L21 negative       | 1.72825 |  28.5 | +0.0117 | 728285 class (vendor unresolved; multiple catalog equivalents)                           |
| L21 positive       | 1.70154 |  41.2 | +0.0021 | 702412 class (vendor unresolved; multiple catalog equivalents)                           |
| L22 positive       | 1.84666 |  23.8 | +0.0167 | 847238 class (vendor unresolved; multiple catalog equivalents)                           |
| L22 negative       | 1.80610 |  40.9 | -0.0048 | 806409 class (vendor unresolved; multiple catalog equivalents)                           |
| L24                | 1.64769 |  33.8 | +0.0069 | 648338 class (vendor unresolved; multiple catalog equivalents)                           |
| L25 positive / Gp2 | 1.65412 |  39.7 | -0.0033 | 654397 anomalous-dispersion class (vendor unresolved; multiple catalog equivalents)      |
| L25 negative / Gn1 | 1.80810 |  22.8 | +0.0251 | 808228 anomalous high-dispersion class (vendor unresolved; multiple catalog equivalents) |
| G                  | 1.51633 | 64.14 | −0.0007 | 516641 class (vendor unresolved; qualified catalog proxy)                                |

The active-15 classification review dated 2026-08-19 is reused. The scoped 2026-10-30 source check confirms that
all 16 authored `dPgF` entries are **genuinely printed X cells** in the original table, rather than catalog-derived
per-lens overrides. All 16 are retained, including G's −0.0007; no unsupported absolute C/F/g indices are present.
The source’s printed X values remain authoritative over compatible catalog violet-channel extrapolation. Four
existing patent APD designations remain: L12/L14 Gp1, L25 positive Gp2 and L25 negative Gn1; ordinary tabulated
partials do not establish APD or ordinary production chemistry.

The current resolver still supplies 16 compatible curves: S-FSL5 (L11/L15), CaF2 (L12/L14), J-LASF05 (L13/L23),
N-SF6 (L16 positive), H-ZLaF50D (L16 negative), S-TIH10 (L21 negative), BAFD7 (L21 positive), J-SF03 (L22 positive),
P-LASF47 (L22 negative), E-FD2 (L24), N-KZFS5 (Gp2), S-NPH1 (Gn1), and S-BSL7 (G). These are qualified spectral
proxies. Coordinate compatibility does not identify Canon's historical supplier, melt, chemistry or manufacturing
process; every such historical identity remains unresolved. The neutral class labels and production-correlation
qualification are retained.
L12 and L14 are the one deliberate exception to the otherwise vendor-neutral treatment. Their `nd/νd` coordinates are
consistent with fluorite, and Canon independently documents two fluorite elements in the production lens at the
corresponding front-group positions. The CaF2 identification is therefore explicitly labeled as production-correlation
inference. It is not a patent-named catalog-glass assignment.

No apochromatic claim is made from these data. The design does, however, have direct partial-dispersion support for its
chromatic strategy because the patent publishes `dPgF`-equivalent `X` values for the special materials.

## Focus Mechanism

The patent states that cemented L16 moves toward the image side to focus from infinity toward close distance (¶0052),
but Example 2 contains no finite-focus spacing table. The data therefore uses a **CONSTRAINED_RECONSTRUCTION**, not a
published close-focus prescription.

The reconstruction preserves the patent's one-degree-of-freedom mechanism by keeping the sum of the two air gaps around
L16 constant:

| State                           | D10 before L16 | D13 after L16 | L16 shift from infinity |
| ------------------------------- | -------------: | ------------: | ----------------------: |
| Infinity                        |   16.220000 mm |  43.730000 mm |                    0 mm |
| 2.7 m reconstructed close state |   45.149494 mm |  14.800506 mm | +28.929494 mm imageward |

In both states, `D10 + D13 = 59.95 mm`. The reconstruction uses Canon's published 2.7 m closest focusing distance
as a physical image-plane reference and the source `Lt = 372.00 mm`, giving 2328.00 mm from the object to surface 1.
The current **G-included** authored track is 371.999129 mm; its 0.000871 mm difference from source Lt is retained
rounding. There is no longer a plate-omitted 371.25 mm runtime plane or a 0.75 mm runtime reference shift.

The retained close gaps give L16 an imageward shift of +28.929494 mm and a computed magnification magnitude of
0.165704×, close to the marketed 0.17×. With the current physical track, the finite-conjugate residual at 2.7 m is
−0.0000244 mm. This supports the endpoint reconstruction without turning it into patent-published data.

The 21-position actual-geometry census also evaluates the existing reciprocal focus-distance display convention.
At focus 0.5 (displayed distance 5.4 m), linear L16 interpolation has a finite-conjugate image-plane residual of
−3.822759 mm. Its motion therefore illustrates the mechanism and does not preserve focus at every displayed
intermediate distance. The source publishes only infinity and a focus direction, so no finite cam trajectory is
invented to eliminate this residual. Near-focus illumination is separately limited: the wide-open working-ray
probe is vignetted at S8 at focus 0.45 and S7 at 0.50–1.00, unchanged by the G-cap restoration.

## Chromatic Correction Strategy

The patent's correction strategy separates longitudinal and lateral chromatic work by ray height. The front Gp1 lenses
L12 and L14 are positive, very low-dispersion elements at high on-axis ray height. Their `νd = 95.1` and
`dPgF = +0.0534` satisfy the patent's anomalous-partial-dispersion conditions, and the patent assigns them the principal
longitudinal chromatic role (¶0028–¶0032).

The rear Gn1 element uses the opposite geometric opportunity. It sits where on-axis ray height is small but off-axis
principal-ray height is relatively large. With `nd = 1.80810`, `νd = 22.8`, and `dPgF = +0.0251`, the patent uses Gn1
to address lateral color together with field curvature and astigmatism (¶0027, ¶0033–¶0037).

Gp2 immediately ahead of Gn1 has `nd = 1.65412`, `νd = 39.7`, and `dPgF = -0.0033`. Its partial-dispersion condition is
not the same positive-deviation criterion used to define the patent's Gp1/Gn1 anomalous materials. Instead, it is a
complementary rear positive whose material is selected under conditions (5) and (6), allowing the terminal cemented pair
to contribute chromatic correction while retaining very little net paraxial power. Its inspector badge is therefore
patent-backed APD metadata, not an inferred production-glass claim.

## Conditional Expressions

Example 2 satisfies all six material conditions used by the patent for Gp1, Gn1, and Gp2:

| Patent condition        | Example-2 value |     Required interval | Result |
| ----------------------- | --------------: | --------------------: | ------ |
| (1) Gp1 `νd`            |            95.1 |        `75 < νd < 99` | Pass   |
| (2) Gp1 `dPgF`          |         +0.0534 |   `0.020 < X < 0.100` | Pass   |
| (3) Gn1 `nd`            |         1.80810 |    `1.75 < nd < 2.10` | Pass   |
| (4) Gn1 `dPgF`          |         +0.0251 |   `0.020 < X < 0.100` | Pass   |
| (5) Gp2 `nd + 0.0125νd` |         2.15037 | `1.90 < value < 2.24` | Pass   |
| (6) Gp2 `dPgF`          |         -0.0033 |  `-0.010 < X < 0.003` | Pass   |

The patent's Table 1 contains a direct label contradiction for the Example-2 positions of Gp2 and Gn1. It prints the
"negative lens Gn1" at 0.813L and the "positive lens Gp2" at 0.973L. Reconstruction from the actual prescription gives
the front of Gp2 at 0.813195L and the front of Gn1 at the cemented surface at 0.972574L. The numerical positions are
therefore consistent with the prescription, but the two Table-1 lens labels are transposed. The data file follows the
prescription geometry and preserves the contradiction as a documented source error rather than silently altering the
source table.

## Image Stabilization

The selected embodiment gives a two-part transverse stabilization unit: cemented L22 and negative L23 move integrally
with a component perpendicular to the optical axis (¶0055). The isolated optical power of the combined L22+L23 unit is
-39.356 mm, but that number describes its paraxial power, not the amount of image stabilization.

The patent does not publish a transverse decenter range for Example 2. Accordingly, the data file contains no invented
IS displacement and no axial `var` entry for stabilization. The only authored axial movement is the L16 focus motion.
Canon's production block diagram marks an IS unit in the rear section, supporting the production correlation without
establishing a one-to-one manufacturer confirmation of the patent embodiment.

## Verification Summary

The final TypeScript arrays were recomputed independently with sequential height/reduced-angle tracing and an ABCD
matrix cross-check. The two methods reproduce the same matrix columns to double-precision residual zero. Selected
results are:

| Quantity                                  |      Computed from final data |                                Patent / source comparison |
| ----------------------------------------- | ----------------------------: | --------------------------------------------------------: |
| EFL                                       |                 392.260742 mm |                             392.15 mm patent focal length |
| EFL residual                              |                  +0.110742 mm |                                                 +0.02824% |
| BFL from final active surface, `G` absent |                  70.778452 mm |                                70.72 mm patent back focus |
| Active vertex track, surface 1 → Re       |                 300.530000 mm |                          direct sum of Example-2 spacings |
| Model track, surface 1 → IP, with `G`     |                 371.999129 mm |                                     372.00 mm patent `Lt` |
| Front principal plane H1                  | -337.499626 mm from surface 1 |                                   independent ABCD result |
| Rear principal plane H2                   |  -20.952290 mm from surface 1 |                            321.482290 mm objectward of Re |
| Modeled infinity f-number                 |                      2.900000 |                                  2.90 patent design value |
| Entrance-pupil semi-diameter              |                  67.631162 mm |                             from calibrated physical stop |
| Exit-pupil semi-diameter                  |                  19.666414 mm | paraxial image of the stop, 43.286750 mm objectward of Re |
| Petzval sum `Σ φ/(n n′)`                  |     +1.50108264 × 10^-4 mm^-1 |                                     reciprocal 6661.86 mm |
| Close reconstructed magnification         |                     0.165704× |                                0.17× Canon marketed value |

The authored semi-diameters are modeling inferences rather than simple halves of the patent's effective-diameter column.
They were chosen to preserve the patent section while satisfying edge-thickness, actual spherical rim-slope,
cross-gap constraints and the configured 0.60-field render-ray bundle in both focus states. The most restrictive
boundary is surfaces 20–21,
where both are authored at 15.75 mm semi-diameter; under the 0.90 shared-gap-sag policy the remaining margin is
0.045789 mm. The minimum element edge thickness is 1.254695 mm and the maximum spherical rim angle is 53.8566°.

There are no aspherical surfaces, conic transformations, hybrid layers or uniform scaling. G is explicitly drawn
and traced; none of its physical thickness is omitted. The stale no-G analysis was corrected during the scoped
2026-10-30 reopening. Source R/d, all 15 active clear caps, derived stop, focus gaps, aperture presets and group controls
remain unchanged.

The original embeds 2560 × 3300 one-bit pages at **native 300 ppi**. The older 2026-08-19 audit's 600 dpi render was
upsampling, not new source resolution. Current comparison uses the native Figure 3 crop and actual generated SVGs at
infinity, mid and close focus. All 16 elements are connected; 21 focus renders produce 336 finite closed paths with
one subpath each and zero hidden renderer trimming. No distinct added shoulder, inferred cut or opaque bonded land is
claimed. The larger undimensioned G blank remains qualified as described above.

Surface and image-circle checks pass. Infinity field coverage reaches the 21.65 mm format corner; all 63 sampled
focus/field chiefs converge and clear. The 21-focus × eight-preset working-ray census has 156 traced and 12 vignetted
calls in both old and restored configurations. In the 193-sample pupil census over 21 focus positions and three fields,
infinity axial transmission is 193/193 and close axial transmission is 145/193; corner endpoints are 136/193 and
134/193 after G restoration (previously 141/193 and 134/193). This sampled runtime clearance is distinct from source
fidelity and does not certify production illumination. Transverse IS travel remains unmodeled because no source
millimetre decenter schedule is provided.

## Sources / References

- Shigenobu Sugita, _Optical System and Optical Apparatus Having the Same_, US 2011/0090576 A1, published April 21, 2011. Example 2 / Second Numerical Embodiment, especially Fig. 3, ¶0021–¶0057, the Second Numerical Embodiment table,
  and Table 1. https://patents.google.com/patent/US20110090576A1/en
- Canon Camera Museum, **EF400mm f/2.8L IS II USM**. Production specifications include August 2011 market timing,
  16 elements in 12 groups, nine diaphragm blades, 2.7 m closest focusing distance, 0.17× maximum magnification, and
  the published optical block diagram. https://global.canon/en/c-museum/product/ef416.html
- Canon Inc., **Canon celebrates 50th anniversary of lens employing synthetic fluorite**, November 7, 2019. Canon's
  fluorite-lens table lists the EF400mm f/2.8L IS II USM with two fluorite elements. https://global.canon/en/news/2019/20191107.html
- OHARA Inc., **Optical Glass Catalog / Download Data** (current S, L, and special-order catalog data). https://www.ohara-inc.co.jp/en/product/optical/list/
- HOYA Corporation, **Optical Glass Data** (current catalog and optical-design data). https://www.hoya-opticalworld.com/english/datadownload/
- SCHOTT, **Downloads for Optical Glass** (current datasheet collection and glass-type overview). https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- HIKARI Co., Ltd., **Optical Glass Catalog** (current catalog PDF). https://www.hikari-g.co.jp/products/optical_glass/
- CDGM Glass Co., Ltd., **Optical Glass Catalog / Cross Reference**. https://www.cdgmgd.com/en/download
- SUMITA Optical Glass, Inc., **Optical Glass Data / Abbe Diagram**. https://www.sumita-opt.co.jp/en/download/
