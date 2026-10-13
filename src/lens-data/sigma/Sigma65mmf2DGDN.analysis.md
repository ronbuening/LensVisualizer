## Patent Reference and Design Identification

**Patent:** JP 2021-128263 A  
**Application Number:** 2020-023040  
**Filed:** 2020-02-14  
**Published:** 2021-09-02  
**Inventors:** Hitoshi Murakami, Ryosuke Sato  
**Applicant:** Sigma Corporation  
**Title:** Large-aperture optical system  
**Embodiment analyzed:** Numerical Example 1

The prescription transcribes the original Japanese A-publication, ¶0108, at its native millimetre scale.
Its association with the Sigma 65mm F2 DG DN | Contemporary is a strong construction correlation,
with the exact factory prescription unconfirmed. The convergent evidence is:

1. The example has 12 physical glass elements in nine air-separated components, matching Sigma's published construction.
2. Three aspheric faces occur on two physical elements. Sigma describes two glass-molded aspheric elements and one SLD element.
3. The native infinity values are 63.10 mm and F/2.07, close to, but distinct from, the marketed 65 mm and F2.
4. The native closest object-to-image distance is 549.9960 mm when computed from the rounded surface spacings.
   It is consistent with Sigma's separate 0.55 m minimum-focus specification. Using the printed total length gives 549.9959 mm.
5. The applicant and the 2020 filing are compatible with the product's announcement on 2020-12-01 and Japanese release on 2020-12-18.

The represented production variants are L-Mount and Sony E-mount, covering full-frame 35 mm format.
Sigma's [2025 renewal notice](https://www.sigma-global.com/en/news/2025/02/24/010844/) describes renamed DG versions with unchanged optical designs; the source identity here remains the original DG DN model.
No manufacturer source located in this review identifies the patent's numerical table as the factory prescription.
The data file retains native design values and separates them from marketing metadata. No uniform scaling is applied.

## Optical Architecture

This is a positive–negative–positive internal-focus architecture. The stop is fixed immediately after the positive front group;
the single negative middle element moves, while the front group, rear group and image plane remain fixed (¶0072–0075).
The three functional groups keep the patent's own names, L1, L2 and L3 (Fig. 1 brackets and the group-data table of ¶0108).
The patent names no individual element, so the model numbers them E1–E12; a letter L followed by a number always means a group here.
The only element marks in Fig. 1 are P1 and P2, the patent's anomalous-dispersion positive lenses: P1 points at E2 and E6, P2 at E4.
Nine air-separated components are a different count from the three functional groups.

| Functional group | Elements / source surfaces | Computed paraxial EFL | Printed EFL |
|---|---|---:|---:|
| L1 | E1–E6 / S1–S10 | +58.655190 mm | +58.65 mm |
| L2 | E7 / S12–S13 | -64.786371 mm | -64.79 mm |
| L3 | E8–E12 / S14–S22 | +72.764754 mm | +72.77 mm |

The front group contains a negative singlet, a positive–negative cemented pair, a positive meniscus,
and a negative–positive cemented pair. Group L2 is a negative meniscus. Group L3 combines a positive–negative cemented pair,
a dual-aspheric positive singlet and two final negative singlets.

The computed group values are derived from the rounded source table. Groups L1 and L3 lie just beyond the simple half-unit
rounding intervals of their printed two-decimal focal lengths. Propagating the source's independently rounded radii,
thicknesses and indices establishes compatibility; the prescription and the printed comparison values are both retained.

At infinity, the computed EFL is 63.101049 mm. The authored first-vertex-to-image track is 89.0001 mm,
so TL/EFL is 1.410438. The Gaussian BFD/EFL ratio is 0.306353. The marketed short-telephoto focal-length category
therefore does not imply a telephoto-ratio construction, and the optical layout is not retrofocus by the BFD criterion.
The source explicitly places the optical-length reference at the first vertex and image plane (¶0027), rather than the mount.

The front and rear principal planes lie +2.709121 mm from the first vertex and −43.769836 mm from the last vertex,
respectively, at infinity. These first-order reference planes must not be confused with physical group boundaries.

## Element-by-Element Analysis

The focal lengths below are computed for each physical element bounded by its two surfaces, in air at the d line.
They are standalone thick-lens values, not in-situ powers within cemented groups. Catalog labels are coordinate classes;
they do not identify the supplier or production melt.

### E1: Biconcave Negative

nd = 1.54072, νd = 47.20. Glass: E-FEL2 class (HOYA; coordinate match, supplier unconfirmed). f = -91.935 mm.

The biconcave front element supplies negative standalone power at the head of the net-positive group L1.
The patent explains that an object-side negative lens offsets distortion contributed by positive front-group lenses (¶0055–0056).
That is the patent's design rationale, not a computed allocation of this element's distortion contribution.

### E2: Biconvex Positive (1x Asph)

nd = 1.59201, νd = 67.02. Glass: M-PCD51 class (HOYA; coordinate match, supplier unconfirmed). f = +33.417 mm.

The positive member of cemented doublet D1 carries the first geometric asphere on S3.
The source identifies a biconvex element cemented to a negative meniscus (¶0073), and a P1 leader in Fig.1 ends on this element.
It meets the P1 conditions (νd = 67.02 above 58; ΔPgF = 0.0081 above 0.008), although the patent's condition table quotes E6 instead.
Its native partial-dispersion value is retained separately from the application's converted deviation.

### E3: Negative Meniscus

nd = 1.62004, νd = 36.30. Glass: E-F2 class (HOYA; coordinate match, supplier unconfirmed). f = -76.763 mm.

The negative meniscus, concave toward the object, is the rear member of D1 and shares the S4 refracting boundary with E2.
The glass after S4 is this element's glass; there is no added cement layer or air gap.
The full cemented component has positive net power, with computed EFL +56.303019 mm, distinct from the standalone focal lengths of both constituents.

### E4: Positive Meniscus

nd = 1.94595, νd = 17.98. Glass: FDS18-W class (HOYA; coordinate match, supplier unconfirmed). f = +71.396 mm.

This positive meniscus, convex toward the object, is the patent's high-index positive lens P2 (Fig.1 and ¶0044–0049).
The patent links high index and anomalous partial dispersion in a positive front-group lens to compact ray-height control
and axial secondary-spectrum correction. Its native ΔPgF is 0.0385; that value is not copied unchanged into the runtime field.

### E5: Negative Meniscus

nd = 1.76182, νd = 26.61. Glass: FD140 class (HOYA; coordinate match, supplier unconfirmed). f = -38.689 mm.

The negative meniscus, convex toward the object, forms the front member of D2, sharing S9 with the lower-dispersion positive E6.
The refractive-index step at this cemented interface is preserved exactly.
The calculated standalone negative power does not by itself establish an independent aberration contribution.

### E6: Positive Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 class (HOYA; coordinate match, supplier unconfirmed). f = +46.798 mm.

This positive meniscus, convex toward the object, is the low-dispersion positive lens P1 whose values the patent enters for
conditions (3) and (4) of this example (¶0114: 75.50 and 0.027); the second P1 leader of Fig.1 ends on it.
The patent explicitly associates a high-Abbe, anomalous-dispersion positive lens in group L1 with primary and secondary axial
chromatic correction (¶0031–0036). The D2 combination nevertheless has weak negative net paraxial power:
its computed cemented EFL is −184.860426 mm. Chromatic purpose and net first-order power are different properties.

### E7: Negative Meniscus

nd = 1.48749, νd = 70.44. Glass: FC5 class (HOYA; coordinate match, supplier unconfirmed). f = -64.786 mm.

E7 is the complete negative focus group L2. It is a meniscus convex toward the object, as stated in ¶0074.
Only this element translates during focusing. The patent favors a focus group of at most two elements to limit moving mass (¶0059–0060).
No additional floating element or unreported actuator law is introduced.

### E8: Biconvex Positive

nd = 1.90043, νd = 37.37. Glass: TAFD37A class (HOYA; coordinate match, supplier unconfirmed). f = +20.412 mm.

The biconvex element begins the fixed rear group L3 and forms the positive member of D3.
It is followed immediately by a higher-dispersion negative cemented partner, E9 (¶0075).
The combined D3 component has computed EFL +82.712684 mm; the larger standalone positive and negative powers must not be added naively.

### E9: Biconcave Negative

nd = 1.73037, νd = 32.23. Glass: NBFD32 class (HOYA; coordinate match, supplier unconfirmed). f = -24.642 mm.

E9 is the biconcave negative member of D3. S15 is the shared glass-to-glass boundary and belongs to E9 in the medium-after-surface model.
Its negative standalone power counteracts the positive member in first-order power balance.
No isolated claim for its coma or astigmatism correction is inferred solely from that sign.

### E10: Biconvex Positive (2x Asph)

nd = 1.80610, νd = 40.73. Glass: M-NBFD130 class (HOYA; coordinate match, supplier unconfirmed). f = +38.156 mm.

The rear positive singlet carries both S17 and S18 aspheres. Its two geometric faces are kept with their native coefficients.
The M-NBFD130 coordinate class is compatible with molding, but the prescription does not name a glass supplier or manufacturing process.
Sigma's statement that the production lens uses glass-molded aspheres supports the construction correlation rather than proving this exact glass identity.

### E11: Biconcave Negative

nd = 1.69895, νd = 30.05. Glass: E-FD15L class (HOYA; coordinate match, supplier unconfirmed). f = -62.386 mm.

The penultimate element is biconcave and remains fixed in group L3.
The patent explains that a negative final or penultimate rear element helps rays reach a large image height while avoiding excessive
rear-element size in a short-back-focus system (¶0057–0058). The model's facing rear clear aperture is explicitly inferred.

### E12: Biconcave Negative

nd = 1.62004, νd = 36.30. Glass: E-F2 class (HOYA; coordinate match, supplier unconfirmed). f = -79.272 mm.

The final biconcave element uses the same native nd/νd pair as E3, but its curvature and standalone power differ.
Its last surface is followed by the published BF = 19.3302 mm. The element is retained as refracting glass;
there is no substituted sensor plate, omitted surface or artificial image-plane correction.

## Glass Identification

All eleven distinct native coordinate pairs have exact displayed-precision matches in HOYA's official 2026-07-07 catalog,
including obsolete entries. The selected class labels below were checked by evaluating the catalog's six-coefficient
power-series dispersion formula at C/d/F wavelengths. They are optical-coordinate models, not inferred procurement records.
The HOYA formula used here is a polynomial series for n², not a Sellmeier rational formula.

| Elements | Native nd | Native νd | Preferred HOYA coordinate class | Important ambiguity |
|---|---:|---:|---|---|
| E1 | 1.54072 | 47.20 | E-FEL2 | Legacy FEL2 is also close |
| E2 | 1.59201 | 67.02 | M-PCD51 | PCD51 and MP/MC variants are distinct |
| E3, E12 | 1.62004 | 36.30 | E-F2 | Legacy F2 also fits closely |
| E4 | 1.94595 | 17.98 | FDS18-W | FDS18 has the same displayed pair |
| E5 | 1.76182 | 26.61 | FD140 | FD14 is a close but different row |
| E6 | 1.55032 | 75.50 | FCD705 | No supplier attribution |
| E7 | 1.48749 | 70.44 | FC5 | OHARA S-FSL5 has a different νd |
| E8 | 1.90043 | 37.37 | TAFD37A | TAFD37 has the same displayed pair |
| E9 | 1.73037 | 32.23 | NBFD32 | No supplier attribution |
| E10 | 1.80610 | 40.73 | M-NBFD130 | NBFD13 and MP/MC variants also share this pair |
| E11 | 1.69895 | 30.05 | E-FD15L | E-FD15 shares the displayed pair |

OHARA's official pocket catalog supplies nearby alternatives, including S-TIL2, S-TIM2, S-TIH14, S-FSL5,
S-LAH53/S-LAH53V and S-TIM35. These are not automatically equivalent melts; the S- and L-series names are distinct.
Limited SCHOTT, CDGM and HIKARI comparisons were also made. SUMITA's official catalog entry was located,
but no exhaustive six-vendor coefficient scan is claimed. Relevant catalog excerpts and residuals accompany the dossier.

### Partial-dispersion conventions

The patent defines its native deviation as ΔPgF = PgF − 0.64833 + 0.00180νd (claims 1 and 3).
The application instead uses a normal line 0.6438 − 0.001682νd. Recovering absolute PgF before subtraction gives:

| Element / surface | Native patent ΔPgF | Absolute PgF | Application dPgF |
|---|---:|---:|---:|
| E2 / S3 (P1) | 0.0081 | 0.535794 | 0.00472164 |
| E4 / S6 (P2) | 0.0385 | 0.654466 | 0.04090836 |
| E6 / S9 (P1) | 0.0274 | 0.539830 | 0.02302100 |

The patent defines this table column as the anomalous dispersion of the glass (¶0097) and fills it for these three surfaces only,
the same three elements that Fig.1 marks P1, P2 and P1; that designation, not the bare numbers, is the basis of the
patent-listed anomalous-dispersion tag on E2, E4 and E6. The numeric application fields preserve their absolute
partial-dispersion meaning, while the original deviations remain the inputs to the patent conditions.
Candidate catalog line indices are not presented as patent-measured nC, nF or ng. A catalog-supported spectral approximation
is still not a measurement of the production glass or a verification of apochromatic performance.

## Focus Mechanism

Focus status is PUBLISHED. Both tabulated stations are retained without reconstruction.
Group L2, the single element E7, moves 9.7694 mm toward the image from infinity to the closest state, the direction of the
focus arrow under L2 in Fig.1. Groups L1 and L3, the stop and the image plane remain fixed (¶0072).
The two variable air gaps change equally and oppositely; no lens thickness or rear BF changes.

| Source quantity | Infinity | Closest published state |
|---|---:|---:|
| d0, object plane to first vertex | ∞ | 460.9959 mm |
| d11, stop to L2 | 2.0000 mm | 11.7694 mm |
| d13, L2 to L3 | 12.4912 mm | 2.7218 mm |
| BF, last vertex to image | 19.3302 mm | 19.3302 mm |
| Printed EFL | 63.10 mm | 57.83 mm |
| Printed F-number | 2.07 | 2.32 |
| Printed full field 2ω | 37.04° | 31.49° |
| Printed image height Y | 21.63 mm | 21.63 mm |
| Printed first-vertex-to-image length | 89.00 mm | 89.00 mm |

Summing the rounded table gives 89.0001 mm of physical optical track, rather than exactly the printed 89.00 mm.
Consequently d0 + sum(d) is 549.9960 mm; d0 + printed LT is 549.9959 mm.
The model's closeFocusM is 0.549996 m, while the manufacturer independently states 0.55 m.
The finite-conjugate record uses the source's first-surface distance 460.9959 mm and the published focus spacings.

At the closest station, the calculated EFL is 57.831034 mm and magnification at the Gaussian best-image plane is −0.14674258,
consistent in scale with the manufacturer's approximate 1:6.8 maximum reproduction ratio.
The finite-conjugate Gaussian image lies 19.331442 mm after the last vertex, 0.001242 mm beyond the authored image plane.
The native BF remains 19.3302 mm; it is not moved to eliminate residual defocus.

The application uses modeled interpolation between the two published gap stations. Intermediate slider distances and optical
performance are not additional patent-published states or a recovered motor-control law. No intermediate finite-conjugate certification is supplied.
Sigma documents autofocus support; the retrieved sources used here do not establish a specific motor type.

## Aspherical Surfaces

S3 on E2 and S17/S18 on E10 are the three geometric aspheres. The source equation is

z = (y²/R) / [1 + √(1 − (1 + K)(y/R)²)] + A4y⁴ + A6y⁶ + A8y⁸ + A10y¹⁰.

The source uses the same 1+K convention as the model. Every K is zero, so no conic conversion is needed.
Lengths are native millimetres; A_p has units mm^(1−p). No dimensional scaling or coefficient refit is performed.

| Coefficient | S3 | S17 | S18 |
|---|---:|---:|---:|
| K | 0.00000 | 0.00000 | 0.00000 |
| A4 | −3.08013E−06 | −1.63981E−06 | +6.10558E−06 |
| A6 | −6.06027E−10 | +2.03135E−09 | −3.86746E−09 |
| A8 | +3.90717E−13 | −4.94594E−12 | +2.12418E−11 |
| A10 | 0.00000E+00 | 0.00000E+00 | −3.84670E−14 |

A12 and A14 are zero-valued application slots because the source equation stops at A10; no absent higher-order source term is invented.
At the modeled clear radii, departure from the base sphere is −0.295871477 mm at S3 (h = 17.4 mm),
−0.102303580 mm at S17 (h = 16.3 mm), and +0.413385838 mm at S18 (h = 16.3 mm).
These signs reduce the positive sag of S3/S17 and reduce the magnitude of the negative sag of S18 at those radii.
They do not, by themselves, quantify a separate spherical-aberration or coma budget.

The two aspheric physical elements correspond in count to Sigma's glass-molded-asphere construction claim.
Their exact production manufacturing process and clear apertures are not specified by the numerical table.

## Conditional Expressions

The following values are recomputed from the native final model. The focal lengths of groups L1, L2 and L3 (f1, f2, f3) and the group magnifications use paraxial optics.
ΔPgF below is the patent's native deviation, not the converted application dPgF.
P is the exit-pupil-to-image distance in the source's image-side geometry.

| No. | Patent requirement | Computed value | Result |
|---|---|---:|---|
| 1 | 0.4 < f/f3 < 1.5 | 0.867193 | Within range |
| 2 | 0.5 < LT/f1 < 1.8 | 1.517344 | Within range |
| 3 | νd(P1) > 58 | 75.50 | Within range |
| 4 | 0.008 < ΔPgF(P1) < 0.060 | 0.0274 | Within range |
| 5 | 0.4 < abs(f/f2) < 1.5 | 0.973986 | Within range |
| 6 | 1.80 < nd(P2) < 2.11 | 1.94595 | Within range |
| 7 | 0.020 < ΔPgF(P2) < 0.060 | 0.0385 | Within range |
| 8 | 0.50 < abs(β3²(1−β2²)) < 1.50 | 1.010050 | Within range |
| 9 | 2.3 < LT/Ymax < 6.4 | 4.114660 | Within range |
| 10 | 0.30 < Ymax/P < 0.70 | 0.455366 | Within range |

The calculated infinity group magnifications are β2 = 2.803154 and β3 = 0.383781.
The exit pupil lies 47.500293 mm ahead of the authored image plane.
The patent connects these constraints to group-power balance, compactness, chromatic correction and focus sensitivity
(¶0023–0036, ¶0040–0054, ¶0062–0070). Satisfying the inequalities is not a measured MTF or production-performance certification.

## Modeled Aperture and Verification Limits

The stop position S11 is published; its physical radius and the glass clear radii are not.
The model infers a stop radius of 11.995819909 mm by tracing an axial parallel ray at the nominal entrance height
15.241799305 mm, derived from the computed infinity EFL and F/2.07. This follows the current application's exact-ray aperture convention.
F-number agreement at this calibration point is not independent evidence of a published diaphragm diameter.

Clear apertures are estimated from Fig. 1 and floor-checked by exact real-ray tracing at both published focus endpoints.
The published raster is about 2% taller than isotropic, so heights are read at a vertical scale fitted to the drawn arcs of
S4, S9, S13, S14 and S15 (0.1238 mm per pixel, against 0.1264 mm per pixel along the axis); at that scale every modeled outer rim
is the drawn one: 18.1 mm for E1, 17.4 mm for D1, 16.5 mm for E4, 15.5 mm for D2, 12.4 mm for E7, 15.3 mm for D3,
16.3 mm for E10, 16.2 mm for E11 and 16.5 mm for E12.
Where the drawing ends a curved face at a flat land, the modeled radius follows the curve rather than the outer rim:
S10 uses 13.8 mm behind the 15.5 mm S8/S9 faces of D2, and S13 uses 11.0 mm,
just above the 10.85 mm axial marginal-ray height at F/2.07, so E7 is drawn with a bevelled rim where the figure shows a square shoulder.
E1 keeps its drawn outer rim and stands above D1 as in the figure. The facing S20/S21 radii are 14.1 mm with broader outer faces;
the figure draws those two elements in edge contact near 14.9 mm, which the air-gap policy does not permit.
These choices preserve positive edge thickness and rear air-gap clearance. No table radius, spacing, medium or asphere is altered.
At the data-file radii no element is thinner than its 0.9 mm centre thickness, the thinnest rim is 1.299003 mm (E4 at 16.5 mm),
and the maximum surface slope angle is 52.703283° (S9).
The rear S20–S21 shared-band intrusion is 3.618473 mm within a 3.669570 mm policy limit, leaving 0.458827 mm of physical gap.

Separate sequential and ABCD calculations agree. A surface-by-surface calculation gives a Petzval sum of +0.0011739291 mm⁻¹.
That first-order sum is not a full astigmatic-field or higher-order image-surface prediction.
Exact three-dimensional refraction was also sampled at both source stations and three interpolated stations,
across five apertures and three field fractions. All 1,875 sampled traces have valid propagation or explicit exposed-rim/stop clipping;
none clips at a cemented interface. The default 60%-field bundle through 75% pupil radius is contained at all five focus samples.
A separate source-first audit then checked 9,261 rays at nine focus samples, seven apertures and 22.5° azimuth spacing.
It reproduced the source/model values and found no propagation errors, cemented-interface clips or default-bundle losses.
Both endpoint stop-centred chief rays reproduced the published image height within 0.01 mm.
Sampling does not prove coverage over every field, pupil point, wavelength or interpolated focus position.

At the inferred iris, the closest-state marginal-NA working F-number is 2.314656 rather than exactly the source's 2.32.
This is −0.005344 from the printed value, just beyond its simple two-decimal rounding interval.
An exact calibration sweep across the independently rounded infinity F/2.07 interval gives near working values
2.309068–2.320246, overlapping the printed near interval. The raw discrepancy remains recorded and the modeled stop is not adjusted to force agreement.
The printed source does not further define its F-number convention or physical iris radius.

The native infinity BF also remains distinct from the Gaussian best-focus distance: 19.3302 mm authored versus 19.331213 mm computed.
The approximation and rounding limits are preserved throughout. Project runtime, type and production-render checks remain unperformed.
No production-camera performance, complete chromatic correction, or recovered factory clear-aperture claim is made.

## Sources

1. Japan Patent Office, **JP 2021-128263 A**, supplied unchanged A-publication with PAJ/DPMA bibliographic wrapper.
   PDF p.1: bibliography; PDF pp.11/printed10: ¶0072–0075 and construction; PDF pp.13–15/printed12–14:
   conventions, equation and Numerical Example 1; PDF p.21/printed20: ¶0114 conditions; PDF p.22/printed21: Fig.1 and endpoint aberration figures.
   The original PDF is included beside this analysis in the dossier.
2. Sigma, [65mm F2 DG DN | Contemporary product specifications and construction](https://www.sigma-global.com/en/lenses/c020_65_2/), accessed 2026-10-04.
3. Sigma, [announcement and release date, 2020-12-01](https://www.sigma-global.com/jp/news/2020/12/01/12517/).
4. HOYA Optics Division, [official catalog download index](https://www.hoya-opticalworld.com/english/datadownload/) and
   [2026-07-07 optical-glass AGF including obsolete entries](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).
   Relevant original catalog rows and coefficients are preserved in the evidence file.
5. HOYA, [Optical Properties](https://www.hoya-opticalworld.com/english/technical/002.html), dispersion equation and wavelength conventions.
6. OHARA, [Optical Glass Pocket Catalog, May 2023](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf), coordinate alternatives.
7. SCHOTT, [Optical Glass pocket catalog](https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f4adcbf1);
   CDGM, [official glass database, page 27](https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=27&url=database);
   HIKARI, [Optical Glass Catalog, 2025-06-01](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf).
   These are limited cross-vendor comparisons, not exhaustive catalog elimination.
8. LensVisualizer, pinned main revision 53470da5a5cbda1807d1e523fbc71963e5a1adc7:
   [partial-dispersion normal line](https://github.com/ronbuening/LensVisualizer/blob/53470da5a5cbda1807d1e523fbc71963e5a1adc7/src/optics/dispersion.ts) and
   [runtime aperture convention](https://github.com/ronbuening/LensVisualizer/blob/53470da5a5cbda1807d1e523fbc71963e5a1adc7/src/optics/runtimeLens.ts).
   These code references define model conventions; they are not evidence that the repository runtime was executed.
