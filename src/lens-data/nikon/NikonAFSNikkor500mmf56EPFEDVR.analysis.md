# Nikon AF-S NIKKOR 500mm f/5.6E PF ED VR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2018-017857 A\
**Application:** JP 2016-147248\
**Filed:** July 27, 2016\
**Published:** February 1, 2018\
**Inventors:** Tetsushi Miwa; Hiroshi Yabumoto\
**Applicant:** Nikon Corporation\
**Title:** Optical system, optical instrument, and method for manufacturing an optical system\
**Embodiment analyzed:** Example 2 / OL2, Figures 3–4 and Tables 5–8

Example 2 is treated as the fixed production correlation for the Nikon AF-S NIKKOR 500mm f/5.6E PF ED VR. The
correlation is not manufacturer confirmation that the numerical example is the released factory prescription. It is
supported by several independent agreements:

1. Nikon specifies 19 elements in 11 groups, including three ED elements and one Phase Fresnel element; the patent
   example has the same physical count and special-element pattern.
2. The patented PF element is fourth in physical element order, after the three large front elements and before the
   compact negative internal-focus group, matching Nikon's published optical section.
3. Example 2 gives a 489.70405 mm design focal length, F/5.75019, and a 5.02124° full field. Nikon markets the lens as
   500 mm f/5.6 with a 5° FX-format field.
4. The patent near row places the object 2720.000 mm in front of surface 1. Adding the 279.324 mm optical track places
   the focal plane at approximately 3.0 m from the object, while the published magnification magnitude of 0.18012
   corresponds to Nikon's marketed 0.18× maximum reproduction ratio.
5. The patent specifies a compact negative internal-focus group and a separate transverse vibration-reduction group,
   consistent with the production lens's IF and VR architecture. The 2016 application and 2018 publication also precede
   Nikon's August 2018 product announcement.

The model retains the patent scale. It does not scale 489.70405 mm to the marketed 500 mm. Radii, thicknesses,
semi-diameters, image-plane spacing, and diffractive phase coefficients therefore remain on the published scale.

## Optical Architecture

Example 2 is a positive–negative–negative telephoto system. The fixed front group G1 supplies the dominant positive
power, G2 is the compact negative focus doublet, and G3 is an overall negative rear relay containing the aperture stop,
the vibration-reduction subgroup, and three cemented correction pairs. Independently recomputed d-line focal lengths
are +158.739 mm for G1, −166.460 mm for G2, and −108.483 mm for G3, agreeing with the patent's rounded +158.7,
−166.5, and −108.5 mm values.

The active surface model contains 19 physical elements in 11 air-separated groups. It has 21 optical-medium entries
because physical element L14 consists of a glass substrate and two thin, separately tabulated bonded PF materials. This
preserves the three refractive media and the phase-carrying interface without changing the physical element count.

The patent's total track is 279.32422 mm. Its ratio to the published focal length is 0.570394, so the design satisfies
the strict `TL/EFL < 1` telephoto test. The back-focus ratio is only 0.131501, so it is not a retrofocus design.

Source surface 20 is a flat air-to-air plane with no identified optical action. It is omitted, and its 0.5 mm
propagation distance is added to the surface-19 air gap. The patent does not tabulate clear apertures. Figure 3 was
rendered at 600 dpi and measured on its 7.5 px/mm axial scale. The L15/L16, G2, C31, VR1, and CL31 outlines were
reduced where the stored envelopes differed from the drawing by at least about 15%; the front group and final two
correction pairs stayed within figure-reading noise and were retained. Every stored semi-diameter and the 11.78466 mm
physical stop semi-diameter remain modeling inferences constrained by the figure, published f-number and field, pupil
tracing, edge thickness, rim slope, and cross-gap clearance.

## Element-by-Element Analysis

Standalone focal lengths below describe each complete refractive element in air. Cemented and functional-unit focal
lengths are separately computed from the actual sequence of interfaces; they are not algebraic sums of the standalone
values.

### L11 — Front Biconvex Positive

nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari coordinate match). f = +275.70 mm.

L11 is the large front collector and operates at the highest axial ray height. Its moderate positive power begins the
convergence while its high Abbe number limits primary color introduced at the front of the system.

### C11 — L12/L13 Front Cemented Pair

L12: nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari). f = +193.46 mm.\
L13: nd = 1.61266, νd = 44.46. Glass: J-KZFH1 (Hikari coordinate match). f = −192.76 mm.

The opposed standalone powers form a weak +4389.165 mm cemented unit. The pair therefore functions primarily as a
chromatic and higher-order balancing component between L11 and the PF stack rather than as a major source of net
convergence.

### PF — L14 Substrate with GDa and GDb

L14: nd = 1.51680, νd = 64.13. Glass: J-BK7A class (Hikari). f = +358.27 mm.\
GDa: nd = 1.52780, νd = 33.41. Glass: Unmatched bonded PF material A.\
GDb: nd = 1.55710, νd = 49.74. Glass: Unmatched bonded PF material B.

L14 is the positive-meniscus substrate. GDa and GDb are 0.2 mm and 0.3 mm bonded media, not additional physical lens
elements. Surface 8, at their interface, carries the radial phase polynomial. The refractive stack computes to
+357.402 mm without phase; the complete d-line PF stack computes to +347.195 mm with the authored phase interaction.
No independent focal length is assigned to either thin bonded medium because their role is defined by the complete
bonded structure.

### C12 — L15/L16 Rear Pair of G1

L15: nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (Hikari). f = −113.26 mm.\
L16: nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari). f = +121.24 mm.

The negative and positive menisci form a weak net-negative cemented unit of −1051.241 mm. Their shared high-index
interface and bending close the front group while providing additional spherical and chromatic control behind the PF
element.

### G2 — L21/L22 Internal-Focus Doublet

L21: nd = 1.64769, νd = 33.73. Glass: J-SF2 (Hikari coordinate match). f = +190.40 mm.\
L22: nd = 1.71999, νd = 50.27. Glass: J-LAK10 (Hikari). f = −87.82 mm.

The assembled pair computes to −166.460 mm. Its small mass and negative net power make it suitable for the patent's
internal-focus movement, while the positive front member supplies a separate chromatic degree of freedom within the
moving unit.

### C31 — L31/L32 Front Rear-Relay Pair

L31: nd = 1.81600, νd = 46.59. Glass: J-LASF09A (Hikari coordinate match). f = −42.41 mm.\
L32: nd = 1.51823, νd = 58.82. Glass: J-K3 (Hikari). f = +49.69 mm.

The cemented pair computes to −414.781 mm. Positioned immediately behind the stop, it conditions the bundle entering
the vibration-reduction section and contributes to rear-group field and color correction.

### VR1 and L35 — Vibration-Reduction Unit

L33: nd = 1.62004, νd = 36.40. Glass: J-F2 (Hikari). f = +53.32 mm.\
L34: nd = 1.49782, νd = 82.57. Glass: J-FKH1 (Hikari). f = −49.15 mm.\
L35: nd = 1.59319, νd = 67.90. Glass: J-PSKH1 (Hikari). f = −62.04 mm.

L33 and L34 form a very weak −1078.119 mm cemented pair. Including L35 and its intervening air space changes the
functional unit to −60.313 mm. That complete L33–L35 power, rather than the cemented pair alone, governs the first-order
response when the subgroup is displaced transversely for vibration reduction.

### CL31 — L36/L37 First Rear Correction Pair

L36: nd = 1.57501, νd = 41.51. Glass: J-LF7 (Hikari). f = +29.83 mm.\
L37: nd = 1.49782, νd = 82.57. Glass: J-FKH1 (Hikari). f = −61.79 mm.

The pair computes to +53.555 mm. The strong positive member and high-Abbe negative partner provide net positive relay
power together with a substantial chromatic balancing lever behind the VR group.

### CL32 — L38/L39 Second Rear Correction Pair

L38: nd = 1.81600, νd = 46.59. Glass: J-LASF09A (Hikari). f = −24.16 mm.\
L39: nd = 1.61266, νd = 44.46. Glass: J-KZFH1 (Hikari). f = +45.13 mm.

The assembled pair computes to −55.387 mm. Its similar Abbe numbers indicate that its strongest first-order function is
monochromatic power and field shaping, while the opposed partial-dispersion coordinates add a separate spectral degree
of freedom.

### CL33 — L310/L311 Final Correction Pair

L310: nd = 1.58144, νd = 40.98. Glass: J-LF5 (Hikari). f = +35.27 mm.\
L311: nd = 1.80809, νd = 22.74. Glass: J-SFH1 (Hikari). f = −47.15 mm.

The final pair computes to +127.587 mm. Its positive net power and the large dispersion contrast of L311 complete the
rear relay before the 64.39657 mm published infinity back-focus gap.

## Glass Identification and Selection

The patent publishes nd, νd, and θgF but does not identify vendors. The catalog labels are therefore coordinate matches
or classes, not claims about Nikon's production melts. A fresh comparison against the June 2025 Hikari catalog resolves
19 of the 21 modeled media entries through coefficient-backed catalog rows; only the two bonded PF materials remain
unmatched. Catalog nC, nF, and ng values are stored directly for those 19 compatible entries, while every element
retains the patent-derived ΔPgF coordinate.

| Patent coordinate nd / νd / θgF | Entries | Catalog annotation | Status |
|---|---|---|---|
| 1.487490 / 70.31 / 0.5291 | L11, L12, L16 | J-FK5 (Hikari) | Exact coordinate match |
| 1.612660 / 44.46 / 0.5640 | L13, L39 | J-KZFH1 (Hikari) | Exact coordinate match |
| 1.516800 / 64.13 / 0.5356 | L14 | J-BK7A class (Hikari) | Δνd = +0.01 |
| 1.527800 / 33.41 / 0.6329 | GDa | Unmatched bonded PF material A | Patent anchors only |
| 1.557100 / 49.74 / 0.5625 | GDb | Unmatched bonded PF material B | Patent anchors only |
| 1.883000 / 40.66 / 0.5669 | L15 | J-LASF08A class (Hikari) | Δνd = +0.03 |
| 1.647690 / 33.73 / 0.5931 | L21 | J-SF2 (Hikari) | Exact coordinate match |
| 1.719990 / 50.27 / 0.5527 | L22 | J-LAK10 (Hikari) | Exact coordinate match |
| 1.816000 / 46.59 / 0.5567 | L31, L38 | J-LASF09A (Hikari) | Exact coordinate match |
| 1.518230 / 58.82 / 0.5449 | L32 | J-K3 (Hikari) | Exact coordinate match |
| 1.620040 / 36.40 / 0.5878 | L33 | J-F2 (Hikari) | Exact coordinate match |
| 1.497820 / 82.57 / 0.5386 | L34, L37 | J-FKH1 (Hikari) | Exact coordinate match |
| 1.593190 / 67.90 / 0.5440 | L35 | J-PSKH1 (Hikari) | Exact coordinate match |
| 1.575010 / 41.51 / 0.5765 | L36 | J-LF7 (Hikari) | Exact coordinate match |
| 1.581440 / 40.98 / 0.5763 | L310 | J-LF5 (Hikari) | Exact coordinate match |
| 1.808090 / 22.74 / 0.6288 | L311 | J-SFH1 (Hikari) | Exact coordinate match |

The APD badge is reserved for the production-correlated special-dispersion census, rather than being set merely because
the patent supplied θgF. It is applied to the anomalous PF material GDa and to the three ED elements L34, L35, and L37.
The other 17 media keep their patent-derived ΔPgF values for chromatic tracing but are explicitly classified as non-APD.

The two unmatched bonded PF media use a ΔPgF-corrected Abbe representation rather than invented line indices. This is
the weakest spectral tier in the model and limits quantitative color tracing away from the patent's d-line, Abbe, and
partial-dispersion anchors.

## Focus Mechanism

The focus behavior is source-published rather than reconstructed. G2 provides the dominant movement toward the image as
the object approaches. The patent numerical rows also contain small compensating changes in the start position of G3
and in back focus, so the table is not exactly a rigid two-gap translation of G2 alone.

| State | Object distance from S1 | Magnification β | D1 after G1 | D2 after G2 | BF after S34 |
|---|---:|---:|---:|---:|---:|
| Infinity | ∞ | — | 22.24696 mm | 32.25305 mm | 64.39657 mm |
| Intermediate | 14704.229 mm | −0.03333 | 25.12411 mm | 29.35590 mm | 64.40466 mm |
| Near | 2720.000 mm | −0.18012 | 39.16215 mm | 15.39786 mm | 64.43514 mm |

From infinity to near, the G2 doublet moves 16.91519 mm imageward. The sum D1 + D2 grows by 0.06000 mm, shifting the
start of G3 imageward by that amount, and BF grows by 0.03857 mm. Fresh object-to-image ABCD calculations produce
magnifications of −0.0333312 and −0.1801134 at the intermediate and near rows, respectively, with object-to-image B
residuals of 0.0465 mm and 0.0085 mm.

The runtime data structure stores the published infinity and near endpoints and interpolates between them. The
published intermediate row remains an independent audit state rather than an additional interpolation knot.

## Diffractive Phase Surface

Surface 8 is spherical in geometric sag and carries the radial optical-path polynomial

$$
W(h)=C_2h^2+C_4h^4,
$$

with $C_2=-4.25304\times10^{-5}\ \mathrm{mm}^{-1}$ and
$C_4=3.00000\times10^{-10}\ \mathrm{mm}^{-3}$. The reference wavelength is 587.6 nm and the authored diffraction
order is +1. The patent's quadratic term gives a paraxial PF focal length of 11756.3 mm at the design wavelength.

A fresh d-line y–ν/ABCD computation gives 489.709445 mm EFL and 64.398175 mm paraxial back focus with the phase
interaction. Removing only the phase interaction while retaining all three PF-stack media gives 538.940703 mm EFL and
79.501045 mm back focus. The authored phase therefore reduces EFL by 49.231258 mm and back focus by 15.102870 mm in
this first-order model.

This is not an aspherical-sag surface, so `asph` remains empty. The model traces one authored diffraction order with a
wavelength-scaled direction change. It does not model blaze efficiency, phase wrapping, energy in unwanted orders,
PF flare, scatter, coatings, polarization, diffraction-limited PSF, or MTF.

## Chromatic Correction Strategy

The diffractive power increases with wavelength and therefore opposes the normal refractive dispersion trend. The PF
interaction is supplemented by high-Abbe L34, L35, and L37 in the rear system and by deliberately varied patent θgF
coordinates through the front and relay groups. This supports a distributed secondary-spectrum correction strategy.

The spectral data does not justify an apochromatic certification claim. Nineteen modeled media entries have compatible
catalog dispersion curves, but the two bonded PF media remain constrained only by nd, νd, and patent-derived ΔPgF. The
model therefore describes the prescription's chromatic strategy without applying an APO label.

## Image Stabilization

The patent identifies L33 through L35 as the vibration-reduction group Gvr. It moves with a component perpendicular to
the optical axis to compensate image displacement. The centered functional unit computes to −60.313 mm.

The data represents only the centered optical state. The patent example does not publish the decenter range or actuator
law, so the model does not invent transverse travel, decentered coordinates, or actuated off-axis aberration behavior.

## Conditional Expressions and Source Contradictions

The following values were recomputed directly from the Example 2 prescription. Disagreements are treated as source-table
issues; the prescription itself is not altered to force agreement with the printed condition table.

| Condition | Printed Table 8 | Recomputed | Assessment |
|---|---:|---:|---|
| (1-1) f/fpf | 0.038 | 0.0416546 | Direct numerical contradiction |
| (1-2) nd1n + 0.006νd1n | 1.879 | 1.87942 | Agrees by rounding |
| (1-3) νd1n | 44.5 | 44.46 | Agrees by rounding |
| (1-4) TL/f | 0.582 | 0.570394 | Direct contradiction; (2-3) prints 0.57 |
| (1-5) θgF1n + 0.00168νd1n | 0.639 | 0.638693 | Agrees by rounding |
| (1-6) f1/f | 0.315 | 0.324154 | Direct numerical contradiction |
| (1-7) f1/fpf | 0.012 | 0.0135025 | Beyond ordinary three-decimal rounding |
| (2-1) two values | 0.677, 0.667 | 0.677318, 0.667003 | Agrees by rounding |
| (2-2) two values | 2.324, 2.035 | 2.32352, 2.03549 | Agrees by rounding |
| (2-3) TL/f | 0.57 | 0.570394 | Agrees by rounding |
| (2-4) νd3n1 | 82.57 | 82.57 | Exact |
| (2-5) νd3n2 | 22.74 | 22.74 | Exact in the Japanese PDF |
| (2-6) θgF3p1 + 0.00168νd3p1 | 0.042 | 0.638693 | Apparent decimal/typographical error |
| (2-7) νd3p1 | 44.46 | 44.46 | Exact |
| (2-8) f3c1/f3c2 | −0.97 | −0.966931 | Agrees by rounding |
| (2-9) f3c1/f3c3 | 0.42 | 0.419754 | Agrees by rounding |
| (2-10) νd3p − νd3n | −2.13 | −2.13 | Exact |
| (2-11) nd3n − nd3p | 0.20 | 0.20334 | Agrees by rounding |
| (2-12) νd2p | 33.72 | 33.73 | Table-to-table inconsistency |

The Japanese source also establishes that L14 is a positive meniscus and that condition (2-5) is 22.74. Those values
control over contrary external machine transcriptions.

## Verification Summary

The final prescription was independently re-entered from Table 5 and checked with sequential height/reduced-angle
tracing and an equivalent ABCD matrix. The phase surface was included as its published d-line paraxial power. The two
methods agree numerically.

| Quantity | Independent result | Patent value | Residual |
|---|---:|---:|---:|
| EFL with phase | 489.709445 mm | 489.70405 mm | +0.005395 mm |
| Paraxial back focus | 64.398175 mm | 64.39657 mm | +0.001605 mm |
| Total track | 279.324180 mm | 279.32422 mm | −0.000040 mm |
| Stored modeled f-number | 5.75019 | 5.75019 | 0 |
| Exact-ray f-number from inferred stop | 5.74627 | 5.75019 | −0.00392 |

The surface-by-surface Petzval calculation uses $\phi/(n n')$ at every interface, including the diffractive power on
surface 8. The total is −1.72676×10⁻⁴ mm⁻¹, corresponding to a first-order Petzval radius of approximately −5791 mm.
The refractive contribution is −2.08432×10⁻⁴ mm⁻¹ and the phase contribution is +3.57558×10⁻⁵ mm⁻¹.

At the revised semi-diameters, the maximum spherical rim slope is 36.439° at surface 33. The minimum computed edge
thickness is 0.0618 mm at L39, and the tightest positive shared-band air-gap check is surface 23 to 24, with 1.86622 mm
sag intrusion into a 3.0 mm gap, or 0.62207 of the gap. All stored elements remain positive in edge thickness, and the
local spherical geometry requires no hidden trim. At the configured 80% field, four of five representative exact-ray
fan samples pass; the outermost negative sample clips at surface 2 rather than at a cemented junction.

These checks validate the authored geometric model, not factory manufacturing tolerances or measured image quality.
Semi-diameters and stop size remain inferred, the runtime focus path has two endpoint knots, the VR group remains
centered, and the diffractive model remains a single-order geometric treatment.

## Sources

- JP 2018-017857 A, original Japanese publication supplied with the job card; Example 2, Tables 5–8, Figures 3–4, and
  paragraphs [0085]–[0089] and [0104]–[0116].
- Nikon Imaging, “AF-S NIKKOR 500mm f/5.6E PF ED VR,” official product specification page.
- Nikon USA, August 23, 2018 product announcement for the AF-S NIKKOR 500mm f/5.6E PF ED VR.
- Hikari Glass Co., Ltd., *Optical Glass Catalog*, June 2025.
